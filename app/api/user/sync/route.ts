import { NextRequest, NextResponse } from 'next/server'
import { auth, currentUser } from '@clerk/nextjs/server'
import { supabaseAdmin } from '@/lib/supabase'

// Called on first dashboard load to sync Clerk user → Supabase patients table
export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = await currentUser()
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    const email = user.emailAddresses[0]?.emailAddress ?? ''
    const firstName = user.firstName ?? ''
    const lastName = user.lastName ?? ''

    const db = supabaseAdmin()

    // Upsert — safe to call multiple times
    const { error } = await db
      .from('patients')
      .upsert(
        {
          clerk_user_id: userId,
          email,
          first_name: firstName,
          last_name: lastName,
        },
        { onConflict: 'clerk_user_id', ignoreDuplicates: true }
      )

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('User sync error:', err)
    return NextResponse.json({ error: 'Sync failed' }, { status: 500 })
  }
}
