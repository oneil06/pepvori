'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const CHECK_SVG_LIGHT = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
    <circle cx="8" cy="8" r="8" fill="#e6f5f3" />
    <path d="M4.5 8l2.5 2.5 4.5-5" stroke="#0f9d8c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CHECK_SVG_DARK = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
    <circle cx="8" cy="8" r="8" fill="rgba(255,255,255,.08)" />
    <path d="M4.5 8l2.5 2.5 4.5-5" stroke="#b3e0db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const BILLING_FAQS = [
  { q: 'When am I charged?', a: 'You\'re billed on the date you sign up, and then on the same date each month (or year, if on an annual plan). Your first charge processes immediately after your initial physician consultation confirms your protocol.' },
  { q: 'Does the price include the physician consultation?', a: 'Yes — every plan includes the initial physician consultation and all follow-up appointments on the schedule for your plan tier. There are no separate consultation fees.' },
  { q: 'Does it include the pharmacy fulfillment?', a: 'Yes. Your prescription is fulfilled by our partner FDA-regulated pharmacy and shipped to you monthly. The cost of compounding and shipping is included in your plan price.' },
  { q: 'Can I use HSA or FSA funds?', a: 'Yes. Peptide therapy prescribed by a licensed physician is generally eligible for HSA and FSA reimbursement. We provide an itemized receipt upon request. Please consult your plan administrator to confirm eligibility.' },
  { q: 'What if I want to cancel?', a: 'You can cancel or pause your plan at any time from your patient portal. There are no cancellation fees. Cancellations take effect at the end of your current billing period.' },
  { q: 'Can I switch plans?', a: 'Yes, you can upgrade or downgrade your plan at any time from your patient portal. Changes take effect on your next billing cycle.' },
]

export default function PricingPage() {
  const router = useRouter()
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const prices = {
    monthly: { foundation: 149, accelerate: 249, optimize: 399 },
    annual: { foundation: 119, accelerate: 199, optimize: 319 },
  }[billing]

  return (
    <>
      {/* PAGE HERO */}
      <div style={{ background: '#f7f9fb', padding: '80px 56px 72px', borderBottom: '1px solid #dde6ed', textAlign: 'center' }}>
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0f9d8c' }}>Pricing</span>
        <h1 className="s" style={{ fontSize: 62, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.02, color: '#0d2137', marginBottom: 16, marginTop: 8 }}>
          Simple, transparent<br /><em style={{ color: '#0f9d8c' }}>pricing.</em>
        </h1>
        <p style={{ fontSize: 17, color: '#3d5a73', lineHeight: 1.85, fontWeight: 300, marginBottom: 36, maxWidth: 560, margin: '0 auto 36px' }}>
          Physician consultation, prescription, and pharmacy fulfillment are included in every plan — no surprise charges, no separate billing.
        </p>

        {/* Toggle */}
        <div style={{ display: 'inline-flex', background: '#fff', border: '1px solid #dde6ed', borderRadius: 8, padding: 4, gap: 4 }}>
          <button
            onClick={() => setBilling('monthly')}
            style={{
              padding: '8px 20px', borderRadius: 6, fontSize: 13, fontWeight: 600,
              border: 'none', cursor: 'pointer', fontFamily: "'Outfit', sans-serif",
              background: billing === 'monthly' ? '#0d2137' : 'transparent',
              color: billing === 'monthly' ? '#fff' : '#7a9bb0',
              transition: 'all .2s',
            }}
          >Monthly</button>
          <button
            onClick={() => setBilling('annual')}
            style={{
              padding: '8px 20px', borderRadius: 6, fontSize: 13, fontWeight: 600,
              border: 'none', cursor: 'pointer', fontFamily: "'Outfit', sans-serif",
              background: billing === 'annual' ? '#0d2137' : 'transparent',
              color: billing === 'annual' ? '#fff' : '#7a9bb0',
              transition: 'all .2s',
            }}
          >
            Annual
            <span style={{ marginLeft: 6, background: '#0f9d8c', color: '#fff', fontSize: 9, fontWeight: 700, padding: '2px 6px', borderRadius: 100, verticalAlign: 'middle' }}>–20%</span>
          </button>
        </div>
      </div>

      {/* PRICING CARDS */}
      <section style={{ padding: '80px 56px', background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, alignItems: 'stretch' }} className="fade-up-2">

            {/* Foundation */}
            <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid #dde6ed', background: '#f7f9fb', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '32px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7a9bb0', marginBottom: 6 }}>Starter</div>
                <div className="s" style={{ fontSize: 26, fontWeight: 500, color: '#0d2137', marginBottom: 4 }}>Foundation</div>
                <div style={{ fontSize: 13, color: '#7a9bb0', marginBottom: 24 }}>For those just getting started with peptide therapy.</div>
                <div style={{ marginBottom: 6 }}>
                  <span className="s" style={{ fontSize: 52, fontWeight: 400, color: '#0f9d8c', lineHeight: 1, letterSpacing: '-0.02em' }}>
                    <sup style={{ fontSize: 20, verticalAlign: 'super', fontWeight: 400 }}>$</sup>{prices.foundation}
                  </span>
                </div>
                <div style={{ fontSize: 12, color: '#7a9bb0', marginBottom: 24 }}>per month — billed {billing}</div>
                <div style={{ height: 1, background: '#dde6ed', marginBottom: 22 }} />
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28, flex: 1 }}>
                  {['Initial physician consultation', '1 prescribed peptide protocol', 'Monthly pharmacy fulfillment', 'Quarterly physician follow-up', 'AI health assistant access', 'Cancel or pause anytime'].map(item => (
                    <li key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 13, color: '#3d5a73', lineHeight: 1.5 }}>
                      {CHECK_SVG_LIGHT}{item}
                    </li>
                  ))}
                </ul>
                <button className="pricing-btn-outline" onClick={() => router.push('/intake')}>Get Started</button>
              </div>
            </div>

            {/* Accelerate (featured) */}
            <div style={{ borderRadius: 8, overflow: 'hidden', border: '2px solid #0d2137', background: '#0d2137', transform: 'translateY(-16px)', marginBottom: -10, boxShadow: '0 32px 80px rgba(13,33,55,.25)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: '#0f9d8c', color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '6px 0', textAlign: 'center' }}>Most Popular</div>
              <div style={{ padding: '32px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.32)', marginBottom: 6 }}>Performance</div>
                <div className="s" style={{ fontSize: 26, fontWeight: 500, color: '#fff', marginBottom: 4 }}>Accelerate</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,.38)', marginBottom: 24 }}>For those serious about performance and results.</div>
                <div style={{ marginBottom: 6 }}>
                  <span className="s" style={{ fontSize: 52, fontWeight: 400, color: '#b3e0db', lineHeight: 1, letterSpacing: '-0.02em' }}>
                    <sup style={{ fontSize: 20, verticalAlign: 'super', fontWeight: 400 }}>$</sup>{prices.accelerate}
                  </span>
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.28)', marginBottom: 24 }}>per month — billed {billing}</div>
                <div style={{ height: 1, background: 'rgba(255,255,255,.1)', marginBottom: 22 }} />
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28, flex: 1 }}>
                  {['Initial physician consultation', 'Up to 2 peptide protocols', 'Monthly pharmacy fulfillment', 'Monthly physician follow-up', 'AI check-ins & progress tracking', 'Priority support', 'Cancel or pause anytime'].map(item => (
                    <li key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 13, color: 'rgba(255,255,255,.6)', lineHeight: 1.5 }}>
                      {CHECK_SVG_DARK}{item}
                    </li>
                  ))}
                </ul>
                <button className="pricing-btn-solid" onClick={() => router.push('/intake')}>Get Started</button>
              </div>
            </div>

            {/* Optimize */}
            <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid #dde6ed', background: '#f7f9fb', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '32px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7a9bb0', marginBottom: 6 }}>Elite</div>
                <div className="s" style={{ fontSize: 26, fontWeight: 500, color: '#0d2137', marginBottom: 4 }}>Optimize</div>
                <div style={{ fontSize: 13, color: '#7a9bb0', marginBottom: 24 }}>For those who want the full-stack longevity approach.</div>
                <div style={{ marginBottom: 6 }}>
                  <span className="s" style={{ fontSize: 52, fontWeight: 400, color: '#0f9d8c', lineHeight: 1, letterSpacing: '-0.02em' }}>
                    <sup style={{ fontSize: 20, verticalAlign: 'super', fontWeight: 400 }}>$</sup>{prices.optimize}
                  </span>
                </div>
                <div style={{ fontSize: 12, color: '#7a9bb0', marginBottom: 24 }}>per month — billed {billing}</div>
                <div style={{ height: 1, background: '#dde6ed', marginBottom: 22 }} />
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28, flex: 1 }}>
                  {['Initial physician consultation', '3+ peptide protocols', 'Monthly pharmacy fulfillment', 'Bi-weekly physician access', 'Dedicated care coordinator', 'Bloodwork interpretation', 'Cancel or pause anytime'].map(item => (
                    <li key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 13, color: '#3d5a73', lineHeight: 1.5 }}>
                      {CHECK_SVG_LIGHT}{item}
                    </li>
                  ))}
                </ul>
                <button className="pricing-btn-outline" onClick={() => router.push('/intake')}>Get Started</button>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 40, padding: 20, background: '#f7f9fb', borderRadius: 8, border: '1px solid #dde6ed' }}>
            <p style={{ fontSize: 13, color: '#7a9bb0', lineHeight: 1.7 }}>
              All plans include: physician consultation · prescription · pharmacy fulfillment · administration guide · patient portal access · discreet shipping · HSA/FSA eligible
            </p>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ padding: '0 56px 96px', background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <h2 className="s" style={{ fontSize: 42, fontWeight: 400, letterSpacing: '-0.01em', color: '#0d2137', marginBottom: 32 }}>Compare plans</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #dde6ed' }}>
                <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600, color: '#0d2137' }}>Feature</th>
                {['Foundation', 'Accelerate', 'Optimize'].map(plan => (
                  <th key={plan} style={{ textAlign: 'center', padding: '12px 16px', fontWeight: 600, color: plan === 'Accelerate' ? '#0f9d8c' : '#0d2137' }}>{plan}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Monthly price', `$${prices.foundation}`, `$${prices.accelerate}`, `$${prices.optimize}`],
                ['Physician consultation', '✓', '✓', '✓'],
                ['Peptide protocols', '1', 'Up to 2', '3+'],
                ['Pharmacy fulfillment', 'Monthly', 'Monthly', 'Monthly'],
                ['Physician follow-up', 'Quarterly', 'Monthly', 'Bi-weekly'],
                ['AI progress tracking', '✓', '✓', '✓'],
                ['Priority support', '–', '✓', '✓'],
                ['Care coordinator', '–', '–', '✓'],
                ['Bloodwork interpretation', '–', '–', '✓'],
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #dde6ed', background: i % 2 === 0 ? '#f7f9fb' : '#fff' }}>
                  <td style={{ padding: '14px 16px', fontWeight: 500, color: '#0d2137' }}>{row[0]}</td>
                  <td style={{ padding: '14px 16px', textAlign: 'center', color: '#3d5a73' }}>{row[1]}</td>
                  <td style={{ padding: '14px 16px', textAlign: 'center', color: '#0f9d8c', fontWeight: row[0] === 'Monthly price' ? 600 : 400 }}>{row[2]}</td>
                  <td style={{ padding: '14px 16px', textAlign: 'center', color: '#3d5a73' }}>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* WHAT&apos;S INCLUDED */}
      <section style={{ padding: '80px 56px', background: '#f7f9fb', borderTop: '1px solid #dde6ed' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0f9d8c' }}>Included always</span>
            <h2 className="s" style={{ fontSize: 42, fontWeight: 400, letterSpacing: '-0.01em', color: '#0d2137', marginBottom: 14, marginTop: 8 }}>
              Everything in<br /><em style={{ color: '#0f9d8c' }}>every plan.</em>
            </h2>
            <p style={{ fontSize: 14, color: '#3d5a73', lineHeight: 1.8, fontWeight: 300 }}>
              No matter which plan you choose, these core elements are always included — because they&apos;re the foundation of safe, effective peptide therapy.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { title: 'Licensed physician consultation', desc: 'A licensed, board-certified physician reviews your intake and prescribes your protocol. Included in every plan, every month.' },
              { title: 'FDA-regulated pharmacy', desc: 'All compounds are dispensed by our partner 503B registered pharmacy and shipped temperature-controlled.' },
              { title: 'Administration guide', desc: 'Complete instructions for your protocol — dosing, timing, injection technique, and what to expect.' },
              { title: 'Patient portal access', desc: 'Manage your protocol, message your care team, track progress, and update your health profile.' },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ width: 32, height: 32, background: '#e6f5f3', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#0f9d8c" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#0d2137', marginBottom: 4 }}>{item.title}</div>
                  <p style={{ fontSize: 13, color: '#7a9bb0', lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BILLING FAQ */}
      <section style={{ padding: '80px 56px', background: '#fff' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 className="s" style={{ fontSize: 42, fontWeight: 400, letterSpacing: '-0.01em', color: '#0d2137', marginBottom: 32 }}>Billing questions</h2>
          <div style={{ border: '1px solid #dde6ed', borderRadius: 10, overflow: 'hidden' }}>
            {BILLING_FAQS.map((faq, i) => (
              <div key={i} style={{ borderTop: i > 0 ? '1px solid #dde6ed' : 'none' }}>
                <button className="faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="s" style={{ fontSize: 17, fontWeight: 500, color: '#0d2137', lineHeight: 1.3, flex: 1 }}>{faq.q}</span>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%',
                    border: `1.5px solid ${openFaq === i ? '#0f9d8c' : '#dde6ed'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    background: openFaq === i ? '#0f9d8c' : 'transparent', transition: 'all .3s',
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={openFaq === i ? '#fff' : '#7a9bb0'} strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={openFaq === i ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'} />
                    </svg>
                  </div>
                </button>
                <div className={`faq-answer${openFaq === i ? ' open' : ''}`} style={{ maxHeight: openFaq === i ? 400 : 0 }}>
                  <div style={{ padding: '0 32px 22px' }}>
                    <p style={{ fontSize: 14, color: '#3d5a73', lineHeight: 1.8, fontWeight: 300 }}>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #0d2137 0%, #09192a 100%)', padding: '80px 56px', textAlign: 'center' }}>
        <h2 className="s" style={{ fontSize: 56, fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.05, color: '#fff', marginBottom: 18 }}>
          Start with any plan.<br /><em style={{ color: '#b3e0db' }}>Upgrade anytime.</em>
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,.45)', maxWidth: 380, margin: '0 auto 36px', fontWeight: 300, lineHeight: 1.8 }}>
          No long-term commitment. If your needs change, your plan changes with you.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="cta-btn-primary" onClick={() => router.push('/intake')}>Begin Your Assessment</button>
          <Link href="/how-it-works"><button className="cta-btn-ghost">How it works</button></Link>
        </div>
      </section>
    </>
  )
}
