import { Resend } from 'resend'

export const resend = new Resend(process.env.RESEND_API_KEY)

const FROM = process.env.RESEND_FROM_EMAIL ?? 'hello@pepvori.com'

// ── Email Templates ───────────────────────────────────────────────────────────

export async function sendIntakeConfirmation({
  to,
  firstName,
}: {
  to: string
  firstName: string
}) {
  return resend.emails.send({
    from: FROM,
    to,
    subject: 'Your Pepvori intake is received — what happens next',
    html: `
      <h2>Thanks, ${firstName}.</h2>
      <p>Your intake has been submitted. A licensed physician will review it within 24 hours.</p>
      <p>Once approved, your first shipment will be on its way within 48 hours.</p>
      <p>You can track everything from your <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard">patient portal</a>.</p>
      <br/>
      <p>— The Pepvori Team</p>
    `,
  })
}

export async function sendBillingReceipt({
  to,
  firstName,
  plan,
  amount,
}: {
  to: string
  firstName: string
  plan: string
  amount: number
}) {
  return resend.emails.send({
    from: FROM,
    to,
    subject: `Pepvori billing receipt — ${plan} plan`,
    html: `
      <h2>Payment received, ${firstName}.</h2>
      <p>Your ${plan} plan subscription of <strong>$${amount}/month</strong> is active.</p>
      <p>Manage your subscription anytime from your <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard">patient portal</a>.</p>
      <br/>
      <p>— The Pepvori Team</p>
    `,
  })
}

export async function sendShipmentNotification({
  to,
  firstName,
  trackingUrl,
}: {
  to: string
  firstName: string
  trackingUrl: string
}) {
  return resend.emails.send({
    from: FROM,
    to,
    subject: 'Your Pepvori shipment is on its way',
    html: `
      <h2>Your order shipped, ${firstName}.</h2>
      <p>Your peptide protocol is on its way to you.</p>
      <p><a href="${trackingUrl}">Track your shipment →</a></p>
      <br/>
      <p>— The Pepvori Team</p>
    `,
  })
}

export async function sendPhysicianAlert({
  to,
  patientName,
  intakeId,
}: {
  to: string
  patientName: string
  intakeId: string
}) {
  return resend.emails.send({
    from: FROM,
    to,
    subject: `New patient intake ready for review — ${patientName}`,
    html: `
      <h2>New intake submission</h2>
      <p>Patient <strong>${patientName}</strong> has submitted their intake and is awaiting your review.</p>
      <p><a href="${process.env.NEXT_PUBLIC_APP_URL}/physician/intake/${intakeId}">Review intake →</a></p>
      <br/>
      <p>— Pepvori Platform</p>
    `,
  })
}
