import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { supabaseAdmin } from '@/lib/supabase'
import { sendIntakeConfirmation, sendPhysicianAlert } from '@/lib/resend'

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const { step, data } = body

    const db = supabaseAdmin()

    // Get or create patient record
    let { data: patient, error: patientError } = await db
      .from('patients')
      .select('id, email, first_name')
      .eq('clerk_user_id', userId)
      .single()

    if (patientError || !patient) {
      // Create patient record on first intake
      const { data: newPatient, error: createError } = await db
        .from('patients')
        .insert({
          clerk_user_id: userId,
          email: data.email,
          first_name: data.firstName,
          last_name: data.lastName,
          phone: data.phone,
          date_of_birth: data.dateOfBirth,
          gender: data.gender,
        })
        .select('id, email, first_name')
        .single()

      if (createError) throw createError
      patient = newPatient
    }

    if (step === 1) {
      // Save step 1 — create intake submission
      const { data: intake, error: intakeError } = await db
        .from('intake_submissions')
        .insert({
          patient_id: patient.id,
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone,
          date_of_birth: data.dateOfBirth,
          gender: data.gender,
          primary_goal: data.primaryGoal,
          secondary_goals: data.secondaryGoals ?? [],
        })
        .select('id')
        .single()

      if (intakeError) throw intakeError

      return NextResponse.json({ success: true, intakeId: intake.id })
    }

    if (step === 2) {
      // Update intake with health history + consent
      const { intakeId, ...healthData } = data

      const { error: updateError } = await db
        .from('intake_submissions')
        .update({
          height_ft: healthData.heightFt,
          height_in: healthData.heightIn,
          weight_lbs: healthData.weightLbs,
          activity_level: healthData.activityLevel,
          current_medications: healthData.currentMedications,
          allergies: healthData.allergies,
          medical_conditions: healthData.medicalConditions ?? [],
          previous_peptide_use: healthData.previousPeptideUse ?? false,
          previous_peptides: healthData.previousPeptides,
          additional_notes: healthData.additionalNotes,
          medical_consent_signed: healthData.medicalConsentSigned ?? false,
          hipaa_consent_signed: healthData.hipaaConsentSigned ?? false,
          terms_accepted: healthData.termsAccepted ?? false,
          consented_at: new Date().toISOString(),
          status: 'pending',
        })
        .eq('id', intakeId)
        .eq('patient_id', patient.id)

      if (updateError) throw updateError

      // Send confirmation email to patient
      await sendIntakeConfirmation({
        to: patient.email,
        firstName: patient.first_name ?? 'there',
      })

      // Alert physician team
      await sendPhysicianAlert({
        to: 'hello@pepvori.com',
        patientName: `${data.firstName} ${data.lastName}`,
        intakeId,
      })

      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: 'Invalid step' }, { status: 400 })
  } catch (err) {
    console.error('Intake error:', err)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
