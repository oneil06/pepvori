'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

const CONDITIONS = ['Active or history of cancer', 'Diabetes (Type 1 or 2)', 'Thyroid disorder', 'Cardiovascular disease or hypertension', 'Autoimmune condition', 'Hormonal disorder (PCOS, hypogonadism, etc.)', 'None of the above']

function IntakeStep2Inner() {
  const router = useRouter()
  const params = useSearchParams()
  const intakeId = params.get('intakeId') ?? ''

  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dob, setDob] = useState('')
  const [sex, setSex] = useState('')
  const [heightFt, setHeightFt] = useState('')
  const [heightIn, setHeightIn] = useState('')
  const [weight, setWeight] = useState('')
  const [hasMeds, setHasMeds] = useState<string | null>(null)
  const [medsList, setMedsList] = useState('')
  const [conditions, setConditions] = useState<string[]>([])
  const [hasAllergies, setHasAllergies] = useState<string | null>(null)
  const [allergyList, setAllergyList] = useState('')
  const [usedPeptides, setUsedPeptides] = useState<string | null>(null)
  const [peptideHistory, setPeptideHistory] = useState('')
  const [injectionComfort, setInjectionComfort] = useState('')
  const [additionalNotes, setAdditionalNotes] = useState('')
  const [consented, setConsented] = useState(false)

  const totalSteps = 10
  const pct = Math.round((step / totalSteps) * 100)

  const toggleCondition = (c: string) => {
    if (c === 'None of the above') { setConditions(['None of the above']); return }
    setConditions(prev => {
      const without = prev.filter(x => x !== 'None of the above')
      return without.includes(c) ? without.filter(x => x !== c) : [...without, c]
    })
  }

  const handleSubmit = async () => {
    setSubmitting(true)
    try {
      await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          step: 2,
          data: {
            intakeId,
            firstName, lastName,
            dateOfBirth: dob,
            gender: sex,
            heightFt: parseInt(heightFt), heightIn: parseInt(heightIn),
            weightLbs: parseInt(weight),
            currentMedications: hasMeds === 'yes' ? medsList : 'None',
            allergies: hasAllergies === 'yes' ? allergyList : 'None',
            medicalConditions: conditions,
            previousPeptideUse: usedPeptides === 'yes',
            previousPeptides: usedPeptides === 'yes' ? peptideHistory : '',
            additionalNotes,
            medicalConsentSigned: consented,
            hipaaConsentSigned: consented,
            termsAccepted: consented,
          }
        })
      })
      setSubmitted(true)
    } catch (e) { console.error(e) }
    setSubmitting(false)
  }

  if (submitted) {
    return (
      <div style={{ minHeight: 'calc(100vh - 64px)', background: '#f7f9fb', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <div style={{ background: '#fff', border: '1px solid #dde6ed', borderRadius: 12, padding: '56px 48px', maxWidth: 560, width: '100%', textAlign: 'center' }}>
          <div style={{ width: 72, height: 72, background: '#e6f5f3', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#0f9d8c" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h2 className="s" style={{ fontSize: 36, fontWeight: 400, color: '#0d2137', marginBottom: 12 }}>Intake complete.</h2>
          <p style={{ fontSize: 14, color: '#7a9bb0', lineHeight: 1.7, marginBottom: 8 }}>Your clinical profile has been submitted. A licensed physician will review everything within <strong style={{ color: '#0d2137' }}>24 hours</strong>.</p>
          <p style={{ fontSize: 14, color: '#7a9bb0', lineHeight: 1.7, marginBottom: 32 }}>Check your email for a confirmation. You can track your status from your patient portal.</p>
          <button className="btn-primary" style={{ width: '100%' }} onClick={() => router.push('/dashboard')}>Go to my portal →</button>
        </div>
      </div>
    )
  }

  const StepCard = ({ label, title, desc, children, nextDisabled, onNext, onBack }: {
    label: string; title: string; desc: string; children: React.ReactNode;
    nextDisabled: boolean; onNext: () => void; onBack?: () => void
  }) => (
    <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #dde6ed', padding: 48, maxWidth: 640, width: '100%', margin: '0 auto' }}>
      <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0f9d8c' }}>{label}</span>
      <h2 className="s" style={{ fontSize: 34, fontWeight: 400, color: '#0d2137', margin: '8px 0', lineHeight: 1.1 }}>{title}</h2>
      <p style={{ fontSize: 14, color: '#7a9bb0', marginBottom: 28, lineHeight: 1.6 }}>{desc}</p>
      {children}
      <div style={{ marginTop: 28, display: 'flex', justifyContent: onBack ? 'space-between' : 'flex-end' }}>
        {onBack && <button className="btn-ghost" onClick={onBack}>← Back</button>}
        <button className="btn-primary" disabled={nextDisabled} onClick={onNext}>Continue →</button>
      </div>
    </div>
  )

  const YNBtn = ({ id, val, current, onClick }: { id: string; val: string; current: string | null; onClick: () => void }) => (
    <button className={`yn-btn${current === val ? (val === 'yes' ? ' selected-yes' : ' selected-no') : ''}`} onClick={onClick}>{val === 'yes' ? 'Yes' : 'No'}</button>
  )

  return (
    <div style={{ minHeight: 'calc(100vh - 64px)', background: '#f7f9fb' }}>
      <div style={{ background: '#0d2137', padding: '14px 56px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 8, height: 8, background: '#0f9d8c', borderRadius: '50%' }} />
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,.6)' }}>Clinical Intake — Step 2</span>
          </div>
          <span style={{ fontSize: 12, color: '#b3e0db' }}>Secure & HIPAA compliant 🔒</span>
        </div>
      </div>

      <div style={{ padding: '40px 24px 80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ maxWidth: 680, width: '100%', marginBottom: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#7a9bb0', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 2 }}>Clinical Intake</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#0f9d8c' }}>Step {step} of {totalSteps}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 12, color: '#7a9bb0' }}>{pct}% complete</div>
            </div>
          </div>
          <div className="progress-track"><div className="progress-fill" style={{ width: `${pct}%` }} /></div>
        </div>

        {step === 1 && <StepCard label="Personal details" title="What's your full name?" desc="Your physician will use this to personalise your consultation and prescription." nextDisabled={!firstName || !lastName} onNext={() => setStep(2)}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div><label style={{ fontSize: 12, fontWeight: 600, color: '#3d5a73', marginBottom: 6, display: 'block' }}>First name</label><input className="text-input" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="e.g. Marcus" /></div>
            <div><label style={{ fontSize: 12, fontWeight: 600, color: '#3d5a73', marginBottom: 6, display: 'block' }}>Last name</label><input className="text-input" type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="e.g. Rodriguez" /></div>
          </div>
        </StepCard>}

        {step === 2 && <StepCard label="Personal details" title="Date of birth & biological sex" desc="Hormonal profiles and peptide dosing differ between sexes and change with age." nextDisabled={!dob || !sex} onNext={() => setStep(3)} onBack={() => setStep(1)}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div><label style={{ fontSize: 12, fontWeight: 600, color: '#3d5a73', marginBottom: 6, display: 'block' }}>Date of birth</label><input className="text-input" type="date" value={dob} onChange={e => setDob(e.target.value)} style={{ maxWidth: 240 }} /></div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: '#3d5a73', marginBottom: 8, display: 'block' }}>Biological sex</label>
              <div style={{ display: 'flex', gap: 10 }}>
                {['male', 'female'].map(v => (
                  <button key={v} className={`option-btn${sex === v ? ' selected' : ''}`} style={{ flex: 1, justifyContent: 'center' }} onClick={() => setSex(v)}>
                    <div className="check"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                    <span style={{ fontSize: 14, fontWeight: 500, color: '#0d2137', textTransform: 'capitalize' }}>{v}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </StepCard>}

        {step === 3 && <StepCard label="Physical profile" title="Height & weight" desc="Used by your physician to calculate appropriate dosing." nextDisabled={!heightFt || !weight} onNext={() => setStep(4)} onBack={() => setStep(2)}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: '#3d5a73', marginBottom: 6, display: 'block' }}>Height</label>
              <div style={{ display: 'flex', gap: 8 }}>
                <input className="text-input" type="number" value={heightFt} onChange={e => setHeightFt(e.target.value)} placeholder="ft" style={{ width: 72 }} />
                <input className="text-input" type="number" value={heightIn} onChange={e => setHeightIn(e.target.value)} placeholder="in" style={{ width: 72 }} />
              </div>
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: '#3d5a73', marginBottom: 6, display: 'block' }}>Weight</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <input className="text-input" type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="e.g. 185" style={{ width: 110 }} />
                <span style={{ fontSize: 13, color: '#7a9bb0' }}>lbs</span>
              </div>
            </div>
          </div>
        </StepCard>}

        {step === 4 && <StepCard label="Medical history" title="Are you currently taking any medications?" desc="Include prescription medications, over-the-counter drugs, and any hormones or TRT." nextDisabled={hasMeds === null || (hasMeds === 'yes' && !medsList)} onNext={() => setStep(5)} onBack={() => setStep(3)}>
          <div style={{ display: 'flex', gap: 10, marginBottom: hasMeds === 'yes' ? 20 : 0 }}>
            <YNBtn id="meds-yes" val="yes" current={hasMeds} onClick={() => setHasMeds('yes')} />
            <YNBtn id="meds-no" val="no" current={hasMeds} onClick={() => setHasMeds('no')} />
          </div>
          {hasMeds === 'yes' && <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: '#3d5a73', marginBottom: 6, display: 'block' }}>Please list them</label>
            <textarea className="text-input" value={medsList} onChange={e => setMedsList(e.target.value)} placeholder="e.g. Metformin 500mg daily, Vitamin D3 5000 IU..." />
          </div>}
        </StepCard>}

        {step === 5 && <StepCard label="Medical history" title="Do you have any diagnosed medical conditions?" desc="Select all that apply. This helps your physician screen for contraindications." nextDisabled={conditions.length === 0} onNext={() => setStep(6)} onBack={() => setStep(4)}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {CONDITIONS.map(c => (
              <button key={c} className={`multi-btn${conditions.includes(c) ? ' selected' : ''}`} onClick={() => toggleCondition(c)}>
                <div className="check-sq"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                <span style={{ fontSize: 14, fontWeight: 500, color: '#0d2137' }}>{c}</span>
              </button>
            ))}
          </div>
        </StepCard>}

        {step === 6 && <StepCard label="Medical history" title="Do you have any known allergies?" desc="Include drug allergies, food allergies, or reactions to any compounds or supplements." nextDisabled={hasAllergies === null || (hasAllergies === 'yes' && !allergyList)} onNext={() => setStep(7)} onBack={() => setStep(5)}>
          <div style={{ display: 'flex', gap: 10, marginBottom: hasAllergies === 'yes' ? 20 : 0 }}>
            <YNBtn id="allergy-yes" val="yes" current={hasAllergies} onClick={() => setHasAllergies('yes')} />
            <YNBtn id="allergy-no" val="no" current={hasAllergies} onClick={() => setHasAllergies('no')} />
          </div>
          {hasAllergies === 'yes' && <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: '#3d5a73', marginBottom: 6, display: 'block' }}>Please describe your allergies</label>
            <textarea className="text-input" value={allergyList} onChange={e => setAllergyList(e.target.value)} placeholder="e.g. Penicillin, shellfish, latex..." />
          </div>}
        </StepCard>}

        {step === 7 && <StepCard label="Peptide history" title="Have you used peptides or peptide therapy before?" desc="Prior experience helps your physician calibrate starting dosages." nextDisabled={usedPeptides === null} onNext={() => setStep(8)} onBack={() => setStep(6)}>
          <div style={{ display: 'flex', gap: 10, marginBottom: usedPeptides === 'yes' ? 20 : 0 }}>
            <YNBtn id="pep-yes" val="yes" current={usedPeptides} onClick={() => setUsedPeptides('yes')} />
            <YNBtn id="pep-no" val="no" current={usedPeptides} onClick={() => setUsedPeptides('no')} />
          </div>
          {usedPeptides === 'yes' && <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: '#3d5a73', marginBottom: 6, display: 'block' }}>Which peptides have you used?</label>
            <textarea className="text-input" value={peptideHistory} onChange={e => setPeptideHistory(e.target.value)} placeholder="e.g. BPC-157 for 8 weeks, noticed significant improvement in knee pain..." />
          </div>}
        </StepCard>}

        {step === 8 && <StepCard label="Administration" title="How comfortable are you with self-injection?" desc="Most peptides require a small subcutaneous injection. Your physician will guide you." nextDisabled={!injectionComfort} onNext={() => setStep(9)} onBack={() => setStep(7)}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[['comfortable', 'Very comfortable', "I've injected before (insulin, TRT, etc.)"], ['open', 'Open to it', "I haven't injected before but I'm willing to learn"], ['concerned', 'A bit nervous', "I'm open to it but would appreciate guidance"], ['prefer_oral', 'Prefer oral/spray', "I'd prefer non-injectable options if available"]].map(([val, label, sub]) => (
              <button key={val} className={`option-btn${injectionComfort === val ? ' selected' : ''}`} onClick={() => setInjectionComfort(val)}>
                <div style={{ flex: 1 }}>
                  <div className="label">{label}</div>
                  <div className="sublabel">{sub}</div>
                </div>
                <div className="check"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
              </button>
            ))}
          </div>
        </StepCard>}

        {step === 9 && <StepCard label="Additional notes" title="Anything else your physician should know?" desc="Any context that might be relevant to your protocol. This is optional." nextDisabled={false} onNext={() => setStep(10)} onBack={() => setStep(8)}>
          <textarea className="text-input" value={additionalNotes} onChange={e => setAdditionalNotes(e.target.value)} placeholder="e.g. I had knee surgery 6 months ago, I'm training for a marathon in 4 months..." style={{ minHeight: 140 }} />
        </StepCard>}

        {step === 10 && (
          <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #dde6ed', padding: 48, maxWidth: 640, width: '100%', margin: '0 auto' }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0f9d8c' }}>Final step</span>
            <h2 className="s" style={{ fontSize: 34, fontWeight: 400, color: '#0d2137', margin: '8px 0', lineHeight: 1.1 }}>Review & consent</h2>
            <p style={{ fontSize: 14, color: '#7a9bb0', marginBottom: 28, lineHeight: 1.6 }}>Please review and confirm your consent before submitting your intake.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[['Medical Consent', '/medical-consent'], ['HIPAA Notice', '/hipaa'], ['Terms of Service', '/terms']].map(([label, href]) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', border: '1px solid #dde6ed', borderRadius: 8 }}>
                  <span style={{ fontSize: 14, color: '#0d2137', fontWeight: 500 }}>{label}</span>
                  <Link href={href} target="_blank" style={{ fontSize: 13, color: '#0f9d8c', fontWeight: 600 }}>Review →</Link>
                </div>
              ))}
            </div>
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginTop: 24, cursor: 'pointer' }}>
              <input type="checkbox" checked={consented} onChange={e => setConsented(e.target.checked)} style={{ marginTop: 3, accentColor: '#0f9d8c', width: 16, height: 16, flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: '#3d5a73', lineHeight: 1.6 }}>I have read and agree to Pepvori&apos;s Medical Consent, HIPAA Notice, and Terms of Service. I confirm all information provided is accurate to the best of my knowledge.</span>
            </label>
            <div style={{ marginTop: 28, display: 'flex', justifyContent: 'space-between' }}>
              <button className="btn-ghost" onClick={() => setStep(9)}>← Back</button>
              <button className="btn-primary" disabled={!consented || submitting} onClick={handleSubmit}>{submitting ? 'Submitting...' : 'Submit intake →'}</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function IntakeStep2Page() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p style={{ color: '#7a9bb0' }}>Loading...</p></div>}>
      <IntakeStep2Inner />
    </Suspense>
  )
}
