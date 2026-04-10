import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { resend } from '@/lib/resend'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, topic, message } = body

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Save to Supabase
    const { error: dbError } = await supabaseAdmin()
      .from('contact_messages')
      .insert({ first_name: firstName, last_name: lastName, email, topic, message })

    if (dbError) throw dbError

    // Send confirmation to user
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? 'hello@pepvori.com',
      to: email,
      subject: "We received your message — Pepvori",
      html: `
        <h2>Thanks, ${firstName}.</h2>
        <p>We received your message and will get back to you within 1 business day.</p>
        <p><strong>Your message:</strong><br/>${message}</p>
        <br/>
        <p>— The Pepvori Team</p>
      `,
    })

    // Alert internal team
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? 'hello@pepvori.com',
      to: 'hello@pepvori.com',
      subject: `New contact message — ${topic ?? 'General'}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Topic:</strong> ${topic ?? 'Not specified'}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
