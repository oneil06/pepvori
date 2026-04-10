import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How It Works — Pepvori',
  description: 'Three steps. No waiting rooms. A licensed physician reviews your health profile and prescribes your protocol — all online.',
}

const STEPS = [
  {
    n: '01',
    title: 'Complete your intake assessment',
    subtitle: 'Online · 10 minutes',
    desc: 'Answer questions about your health history, goals, lifestyle, and any previous peptide experience. Our intake is designed by physicians to give them everything they need to prescribe safely and accurately.',
    details: [
      'Medical history & current medications',
      'Primary health goals & challenges',
      'Activity level & lifestyle factors',
      'Previous peptide or hormone therapy experience',
    ],
  },
  {
    n: '02',
    title: 'Physician review & consultation',
    subtitle: 'Online · Within 24 hrs',
    desc: 'A licensed, board-certified physician reviews your complete intake. They meet with you for a brief online consultation, answer your questions, and craft a personalized protocol tailored to your biology and goals.',
    details: [
      'Dedicated consultation with your physician',
      'Review of your intake by a licensed MD',
      'Personalized dosing & protocol selection',
      'Prescription issued through licensed channels',
    ],
  },
  {
    n: '03',
    title: 'Protocol delivered to your door',
    subtitle: 'Discreet · Within 48 hrs',
    desc: 'Your prescription is fulfilled by our partner FDA-regulated 503B pharmacy, compounded to specification, and shipped discreetly to your address. Your protocol guide and administration instructions ship with every order.',
    details: [
      'Fulfilled by 503B regulated pharmacy',
      'Detailed administration guide included',
      'Plain packaging, no brand markings',
      'Temperature-controlled shipping',
    ],
  },
]

export default function HowItWorksPage() {
  return (
    <>
      {/* PAGE HERO */}
      <div style={{ background: '#f7f9fb', padding: '80px 56px 72px', borderBottom: '1px solid #dde6ed' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div className="fade-up">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <div style={{ width: 20, height: 2, background: '#0f9d8c', borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0f9d8c' }}>The Process</span>
            </div>
            <h1 className="s" style={{ fontSize: 62, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.02, color: '#0d2137', marginBottom: 22 }}>
              From intake to doorstep<br /><em style={{ color: '#0f9d8c' }}>in 48 hours.</em>
            </h1>
            <p style={{ fontSize: 17, color: '#3d5a73', lineHeight: 1.85, fontWeight: 300, maxWidth: 420, marginBottom: 36 }}>
              Three steps. No waiting rooms. A licensed physician reviews your health profile and prescribes your protocol — all online.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/intake"><button className="cta-btn-primary" style={{ padding: '13px 28px', fontSize: 14 }}>Begin Your Assessment</button></Link>
              <Link href="/protocols"><button style={{ background: 'transparent', color: '#0d2137', border: '1.5px solid #dde6ed', padding: '13px 28px', borderRadius: 4, fontSize: 14, fontWeight: 500, cursor: 'pointer', fontFamily: "'Outfit', sans-serif" }}>View Protocols</button></Link>
            </div>
          </div>

          <div className="fade-up-2" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z', label: 'No in-person visits required', sub: '100% online process' },
              { icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Physician review within 24 hours', sub: 'Board-certified MDs' },
              { icon: 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12', label: 'Delivered to your door in 48 hrs', sub: 'Discreet, temperature-controlled' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 20, background: '#fff', border: '1px solid #dde6ed', borderRadius: 8, padding: '22px 26px' }}>
                <div style={{ width: 48, height: 48, background: '#e6f5f3', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#0f9d8c" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#0d2137', marginBottom: 2 }}>{item.label}</div>
                  <div style={{ fontSize: 12, color: '#7a9bb0' }}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STEP CONNECTOR */}
      <section style={{ padding: '96px 56px', background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0f9d8c' }}>Step by step</span>
            <h2 className="s" style={{ fontSize: 48, fontWeight: 400, letterSpacing: '-0.01em', color: '#0d2137', marginBottom: 16, marginTop: 8 }}>
              Three steps to your<br /><em style={{ color: '#0f9d8c' }}>optimized protocol.</em>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {STEPS.map((step, i) => (
              <div key={step.n} style={{
                display: 'grid', gridTemplateColumns: '80px 1fr 1fr', gap: 48,
                paddingBottom: 64, borderBottom: i < STEPS.length - 1 ? '1px solid #dde6ed' : 'none',
                marginBottom: i < STEPS.length - 1 ? 64 : 0,
                alignItems: 'start',
              }}>
                {/* Number */}
                <div>
                  <div className="s" style={{ fontSize: 64, fontWeight: 300, color: '#e6f5f3', lineHeight: 1, letterSpacing: '-0.02em' }}>{step.n}</div>
                </div>

                {/* Content */}
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0f9d8c', marginBottom: 8 }}>{step.subtitle}</div>
                  <h3 className="s" style={{ fontSize: 36, fontWeight: 400, color: '#0d2137', marginBottom: 16, lineHeight: 1.1 }}>{step.title}</h3>
                  <p style={{ fontSize: 15, color: '#3d5a73', lineHeight: 1.85, fontWeight: 300 }}>{step.desc}</p>
                </div>

                {/* Details */}
                <div style={{ background: '#f7f9fb', border: '1px solid #dde6ed', borderRadius: 10, padding: 28 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b3c5d2', marginBottom: 16 }}>What&apos;s included</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {step.details.map(d => (
                      <div key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#0f9d8c" strokeWidth="2" style={{ flexShrink: 0, marginTop: 2 }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span style={{ fontSize: 13, color: '#3d5a73', lineHeight: 1.6 }}>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ONGOING CARE */}
      <section style={{ background: '#0d2137', padding: '80px 56px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0f9d8c' }}>Beyond step 3</span>
            <h2 className="s" style={{ fontSize: 48, fontWeight: 400, letterSpacing: '-0.01em', color: '#fff', marginBottom: 16, marginTop: 8 }}>
              Ongoing care, <em style={{ color: '#b3e0db' }}>not just a shipment.</em>
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,.5)', lineHeight: 1.85, fontWeight: 300, marginBottom: 28 }}>
              Your relationship with your physician doesn&apos;t end at prescription. Each plan includes scheduled follow-ups, protocol adjustments, and ongoing monitoring to ensure you&apos;re getting results.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                'Monthly check-in with your physician',
                'Protocol adjustments based on your results',
                'AI-assisted symptom & progress tracking',
                'Priority support for active patients',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 20, height: 20, background: 'rgba(15,157,140,.2)', border: '1px solid rgba(15,157,140,.4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="#0f9d8c" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,.65)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { value: 'Monthly', label: 'Physician check-ins', plan: 'All plans' },
              { value: '< 24hrs', label: 'Physician response time', plan: 'Accelerate & Optimize' },
              { value: 'Quarterly', label: 'Lab review', plan: 'Optimize plan' },
              { value: 'Unlimited', label: 'Portal messaging', plan: 'All plans' },
            ].map(s => (
              <div key={s.label} style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 10, padding: 24 }}>
                <div className="s" style={{ fontSize: 28, fontWeight: 300, color: '#b3e0db', marginBottom: 8, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.3)' }}>{s.plan}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ background: '#f7f9fb', borderTop: '1px solid #dde6ed', padding: '56px 56px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
            {[
              { title: 'Licensed physicians', desc: 'All prescriptions issued by board-certified MDs licensed in your state.' },
              { title: 'FDA-regulated pharmacy', desc: '503B registered pharmacy. Every compound meets USP standards.' },
              { title: 'HIPAA compliant', desc: 'Full HIPAA compliance. Your health data is encrypted and protected.' },
              { title: 'HSA/FSA eligible', desc: 'Physician-prescribed peptide therapy is generally HSA/FSA eligible.' },
            ].map(t => (
              <div key={t.title}>
                <div style={{ width: 32, height: 32, background: '#e6f5f3', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#0f9d8c" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#0d2137', marginBottom: 6 }}>{t.title}</div>
                <p style={{ fontSize: 13, color: '#7a9bb0', lineHeight: 1.65 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #0d2137 0%, #09192a 100%)', padding: '80px 56px', textAlign: 'center' }}>
        <h2 className="s" style={{ fontSize: 62, fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1, color: '#fff', marginBottom: 18 }}>
          Ready to get<br /><em style={{ color: '#b3e0db' }}>started?</em>
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,.45)', maxWidth: 380, margin: '0 auto 36px', fontWeight: 300, lineHeight: 1.8 }}>
          Complete your intake in under 10 minutes. A physician confirms your protocol within 24 hours.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/intake"><button className="cta-btn-primary">Begin Your Assessment</button></Link>
          <Link href="/pricing"><button className="cta-btn-ghost">View pricing</button></Link>
        </div>
      </section>
    </>
  )
}
