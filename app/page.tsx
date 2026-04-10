'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const TICKER_ITEMS = ['BPC-157', 'TB-500', 'CJC-1295 + Ipamorelin', 'Sermorelin', 'MK-677', 'GHK-Cu', 'BPC-157', 'TB-500', 'CJC-1295 + Ipamorelin', 'Sermorelin', 'MK-677', 'GHK-Cu']

const PROTOCOLS = [
  {
    label: 'Recovery',
    title: 'Recovery & Repair',
    desc: 'Accelerate healing of tendons, ligaments, and tissue. The most requested protocol among athletes and high performers.',
    peptides: ['BPC-157', 'TB-500', 'GHK-Cu'],
    timeline: '2–4 weeks',
    href: '/protocols/recovery',
  },
  {
    label: 'Performance',
    title: 'Growth & Strength',
    desc: 'Stimulate natural GH release for muscle growth, fat loss, and body recomposition without synthetic hormones.',
    peptides: ['CJC-1295', 'Ipamorelin'],
    timeline: '4–8 weeks',
    href: '/protocols/growth',
  },
  {
    label: 'Longevity',
    title: 'Longevity Protocol',
    desc: 'Slow biological aging, restore energy, and optimise hormonal health. Built for patients thinking decades ahead.',
    peptides: ['Sermorelin'],
    timeline: '6–12 weeks',
    href: '/protocols/longevity',
  },
  {
    label: 'Sleep',
    title: 'Focus & Sleep',
    desc: 'Deepen sleep architecture, sharpen cognitive output, and restore the mental clarity that declines with age.',
    peptides: ['MK-677'],
    timeline: '2–3 weeks',
    href: '/protocols/sleep',
  },
]

const FAQS = [
  { q: 'Do I have to inject myself?', a: 'Most peptides are administered as a small subcutaneous injection — similar to an insulin shot. Most patients describe it as barely noticeable. Your physician walks you through the technique, and a full guide ships with your first order. Some peptides like MK-677 are taken orally.' },
  { q: 'Is this safe?', a: 'All protocols are prescribed and overseen by licensed, board-certified physicians. Peptides used in our protocols have established safety profiles in peer-reviewed literature. Your physician reviews your full health history before prescribing anything.' },
  { q: 'How is this different from a supplement?', a: 'Peptides are prescription compounds, not over-the-counter supplements. They work at the cellular level to signal specific biological processes — something no supplement can replicate. Every Pepvori prescription is issued by a licensed physician after a clinical review.' },
  { q: 'Does insurance cover peptide therapy?', a: 'Generally not covered by most insurance. However, many patients use HSA or FSA funds. All pricing is transparent and all-inclusive — physician consultation, prescription, and pharmacy fulfillment included.' },
  { q: 'How quickly will I see results?', a: 'Most patients report noticeable changes within 2–4 weeks depending on the protocol. Recovery protocols often show results fastest. Longevity and hormonal protocols typically require 6–8 weeks for full effect. Your physician sets realistic expectations at your consultation.' },
]

export default function HomePage() {
  const router = useRouter()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #0d2137 0%, #0a1c2e 60%, #071524 100%)',
        minHeight: 620,
        display: 'flex',
        alignItems: 'center',
        padding: '80px 56px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 70% 50%, rgba(15,157,140,.12) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 560, position: 'relative', zIndex: 1 }} className="fade-up">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(15,157,140,.15)', border: '1px solid rgba(15,157,140,.3)',
            borderRadius: 100, padding: '5px 14px', marginBottom: 24,
          }}>
            <span className="pu" style={{ width: 6, height: 6, background: '#0f9d8c', borderRadius: '50%', display: 'inline-block' }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b3e0db' }}>
              Physician-guided · Online · Discreet
            </span>
          </div>
          <h1 className="s" style={{
            fontSize: 72, fontWeight: 400, letterSpacing: '-0.02em',
            lineHeight: 1, color: '#fff', marginBottom: 22,
          }}>
            Optimize your<br /><em style={{ color: '#b3e0db' }}>biology.</em>
          </h1>
          <p style={{
            fontSize: 17, color: 'rgba(255,255,255,.65)',
            lineHeight: 1.8, fontWeight: 300, marginBottom: 32, maxWidth: 420,
          }}>
            Personalized peptide protocols prescribed by licensed physicians. Recovery, performance, longevity — built around your biology.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="hero-btn-primary" onClick={() => router.push('/intake')}>
              Begin Your Assessment
            </button>
            <button className="hero-btn-ghost" onClick={() => router.push('/protocols')}>Explore Protocols</button>
          </div>
          <div style={{ marginTop: 36, display: 'flex', gap: 28, flexWrap: 'wrap' }}>
            {['Licensed physicians', '48-hr delivery', 'HSA/FSA eligible'].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#0f9d8c" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', fontWeight: 400 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div style={{ background: '#09192a', borderTop: '1px solid rgba(255,255,255,.06)', overflow: 'hidden', height: 44, display: 'flex', alignItems: 'center' }}>
        <div className="tk" style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
          {TICKER_ITEMS.map((item, i) => (
            <span key={i} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '0 36px', whiteSpace: 'nowrap',
              fontSize: 11, fontWeight: 500, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,.4)',
            }}>
              <span style={{ width: 3, height: 3, background: '#0f9d8c', borderRadius: '50%', opacity: 0.6, display: 'inline-block' }} />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* FEEL SECTION */}
      <section style={{ padding: '96px 56px', background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0f9d8c' }}>What are peptides?</span>
            <h2 className="s" style={{ fontSize: 52, fontWeight: 400, letterSpacing: '-0.01em', color: '#0d2137', marginTop: 10, marginBottom: 20, lineHeight: 1.05 }}>
              Feel the way you were<br /><em style={{ color: '#0f9d8c' }}>built to feel.</em>
            </h2>
            <p style={{ fontSize: 15, color: '#3d5a73', lineHeight: 1.85, fontWeight: 300 }}>
              Peptides are your body&rsquo;s own signaling molecules. As we age, their production declines. <strong style={{ color: '#0d2137', fontWeight: 600 }}>Pepvori restores that signal.</strong><br /><br />
              More energy. Faster recovery. Sharper focus. Better sleep.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { label: 'Patients served', value: '4,200+', sub: 'Active protocols' },
              { label: 'Avg. response', value: '< 24 hrs', sub: 'Physician review' },
              { label: 'Satisfaction', value: '4.9 / 5', sub: 'Patient rating' },
              { label: 'Protocols', value: '4', sub: 'Specialist focus areas' },
            ].map(s => (
              <div key={s.label} style={{
                background: '#f7f9fb', borderRadius: 10,
                border: '1px solid #dde6ed', padding: '28px 24px',
              }}>
                <div className="s" style={{ fontSize: 38, fontWeight: 300, color: '#0f9d8c', lineHeight: 1, marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#0d2137', marginBottom: 2 }}>{s.label}</div>
                <div style={{ fontSize: 12, color: '#7a9bb0' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROTOCOLS */}
      <section style={{ padding: '80px 56px', background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, gap: 16 }}>
            <div>
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0f9d8c' }}>Our protocols</span>
              <h2 className="s" style={{ fontSize: 52, fontWeight: 400, letterSpacing: '-0.01em', color: '#0d2137', marginTop: 8, lineHeight: 1.05 }}>
                Built for every<br /><em style={{ color: '#0f9d8c' }}>biological goal.</em>
              </h2>
            </div>
            <button style={{
                background: 'transparent', color: '#0d2137', border: '1.5px solid #dde6ed',
                padding: '10px 20px', borderRadius: 4, fontSize: 13, fontWeight: 500,
                cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: "'Outfit', sans-serif",
                transition: 'border-color .2s, color .2s',
              }} onClick={() => router.push('/protocols')}>
                View all protocols →
              </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {PROTOCOLS.map(p => (
              <div key={p.title} className="ch" style={{
                border: '1px solid #dde6ed', borderRadius: 10, padding: '28px 24px',
                background: '#fff', transition: 'all .4s', cursor: 'pointer',
              }} onClick={() => router.push(p.href)}>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0f9d8c', marginBottom: 10 }}>{p.label}</div>
                <div className="s" style={{ fontSize: 22, fontWeight: 500, color: '#0d2137', marginBottom: 7, lineHeight: 1.1 }}>{p.title}</div>
                <p style={{ fontSize: 13, color: '#7a9bb0', lineHeight: 1.65, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                  {p.peptides.map(pep => (
                    <span key={pep} style={{
                      background: '#fff', border: '1px solid #dde6ed',
                      borderRadius: 100, padding: '3px 10px', fontSize: 11, color: '#3d5a73', fontWeight: 500,
                    }}>{pep}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 12, color: '#7a9bb0' }}>Results: {p.timeline}</span>
                  <div className="proto-arr">
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '80px 56px', background: '#f7f9fb' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0f9d8c' }}>Step by step</span>
            <h2 className="s" style={{ fontSize: 52, fontWeight: 400, letterSpacing: '-0.01em', color: '#0d2137', marginTop: 8, lineHeight: 1.05 }}>
              From intake to doorstep<br /><em style={{ color: '#0f9d8c' }}>in 48 hours.</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { n: '01', title: 'Complete your assessment', desc: 'Answer questions about your goals, health history, and lifestyle. Takes under 10 minutes.' },
              { n: '02', title: 'Physician review', desc: 'A licensed physician reviews your intake, meets with you online, and prescribes your protocol.' },
              { n: '03', title: 'Protocol delivered', desc: 'Your compounded peptides are dispensed by a regulated pharmacy and shipped discreetly to your door.' },
            ].map(s => (
              <div key={s.n} style={{
                background: '#fff', border: '1px solid #dde6ed', borderRadius: 8, padding: 36,
              }}>
                <div className="s" style={{ fontSize: 52, fontWeight: 300, color: '#e6f5f3', lineHeight: 1, marginBottom: 20 }}>{s.n}</div>
                <div className="s" style={{ fontSize: 22, fontWeight: 500, color: '#0d2137', marginBottom: 10 }}>{s.title}</div>
                <p style={{ fontSize: 14, color: '#3d5a73', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link href="/how-it-works">
              <span style={{ fontSize: 13, color: '#0f9d8c', fontWeight: 600, cursor: 'pointer' }}>Learn more about the process →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '80px 56px', background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ marginBottom: 40 }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0f9d8c' }}>Patient stories</span>
            <h2 className="s" style={{ fontSize: 52, fontWeight: 400, letterSpacing: '-0.01em', color: '#0d2137', marginTop: 8, lineHeight: 1.05 }}>
              There&apos;s a reason people<br /><em style={{ color: '#0f9d8c' }}>keep coming back.</em>
            </h2>
          </div>
          <div style={{
            background: '#0d2137', borderRadius: 12, padding: '48px 56px',
            marginBottom: 24, position: 'relative',
          }}>
            <div className="s" style={{ fontSize: 96, color: 'rgba(15,157,140,.2)', lineHeight: 0.6, marginBottom: 24, fontWeight: 300 }}>&ldquo;</div>
            <p className="s" style={{ fontSize: 24, fontWeight: 300, color: '#fff', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 28, maxWidth: 680 }}>
              &ldquo;I&apos;ve tried everything. Nothing came close to what BPC-157 did for my shoulder in six weeks. Pepvori&apos;s intake felt like talking to a doctor who actually listened.&rdquo;
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#0f9d8c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#fff' }}>MR</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>Marcus R.</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.32)', marginTop: 2 }}>Recovery Protocol — 4 months</div>
              </div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { initials: 'SK', name: 'Sarah K.', protocol: 'Focus & Sleep — 3 months', quote: '"Sleep quality improved within two weeks on MK-677. The AI check-ins caught something my physician adjusted. Impressive care."' },
              { initials: 'JM', name: 'James M.', protocol: 'Longevity — 6 months', quote: '"At 47, Sermorelin has turned back the clock on my energy. Pepvori\'s physicians actually listen and adjust. I wish I\'d started years earlier."' },
              { initials: 'AL', name: 'Aisha L.', protocol: 'Recovery — 2 months', quote: '"The intake process was genuinely impressive. It felt like talking to a physician who knew what questions to ask. Protocol arrived in 3 days."' },
            ].map(t => (
              <div key={t.name} style={{ background: '#f7f9fb', border: '1px solid #dde6ed', borderRadius: 10, padding: 28 }}>
                <p className="s" style={{ fontSize: 16, fontWeight: 300, color: '#0d2137', lineHeight: 1.75, fontStyle: 'italic', marginBottom: 16 }}>{t.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#e6f5f3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#0f9d8c' }}>{t.initials}</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#0d2137' }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: '#7a9bb0', marginTop: 2 }}>{t.protocol}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section style={{ padding: '80px 56px', background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0f9d8c' }}>Transparent pricing</span>
            <h2 className="s" style={{ fontSize: 52, fontWeight: 400, letterSpacing: '-0.01em', color: '#0d2137', marginTop: 8, lineHeight: 1.05 }}>
              Everything included,<br /><em style={{ color: '#0f9d8c' }}>nothing hidden.</em>
            </h2>
            <p style={{ fontSize: 15, color: '#3d5a73', lineHeight: 1.85, fontWeight: 300, maxWidth: 480, margin: '16px auto 0' }}>
              Physician consultation, prescription, and pharmacy fulfillment are included in every plan.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, maxWidth: 860, margin: '0 auto' }}>
            {[
              { name: 'Foundation', price: '$149', period: '/mo', desc: 'Single protocol, monthly physician check-in.', featured: false },
              { name: 'Accelerate', price: '$249', period: '/mo', desc: 'Most popular. Two protocols + bi-weekly reviews.', featured: true },
              { name: 'Optimize', price: '$399', period: '/mo', desc: 'Full access. Quarterly labs, weekly touchpoints.', featured: false },
            ].map(plan => (
              <div key={plan.name} style={{
                border: plan.featured ? '2px solid #0f9d8c' : '1px solid #dde6ed',
                borderRadius: 10, padding: 28,
                background: plan.featured ? '#0d2137' : '#fff',
                position: 'relative',
              }}>
                {plan.featured && (
                  <div style={{
                    position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                    background: '#0f9d8c', color: '#fff', fontSize: 10, fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 100,
                  }}>Most popular</div>
                )}
                <div style={{ fontSize: 13, fontWeight: 600, color: plan.featured ? 'rgba(255,255,255,.5)' : '#7a9bb0', marginBottom: 8 }}>{plan.name}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 2, marginBottom: 8 }}>
                  <span className="s" style={{ fontSize: 48, fontWeight: 400, color: plan.featured ? '#b3e0db' : '#0f9d8c', lineHeight: 1 }}>{plan.price}</span>
                  <span style={{ fontSize: 14, color: plan.featured ? 'rgba(255,255,255,.4)' : '#7a9bb0' }}>{plan.period}</span>
                </div>
                <p style={{ fontSize: 13, color: plan.featured ? 'rgba(255,255,255,.5)' : '#7a9bb0', marginBottom: 20, lineHeight: 1.6 }}>{plan.desc}</p>
                <button
                  className={plan.featured ? 'pricing-btn-solid' : 'pricing-btn-outline'}
                  onClick={() => router.push('/intake')}
                >
                  Get started
                </button>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <Link href="/pricing">
              <span style={{ fontSize: 13, color: '#0f9d8c', fontWeight: 600 }}>Compare all plans →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section style={{ padding: '80px 56px', background: '#f7f9fb' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="s" style={{ fontSize: 40, fontWeight: 400, color: '#0d2137' }}>
              Built on trust,<br /><em style={{ color: '#0f9d8c' }}>backed by medicine.</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {[
              { icon: '🏥', title: 'Licensed physicians', desc: 'All prescriptions issued by board-certified, licensed medical doctors.' },
              { icon: '🔬', title: 'FDA-regulated pharmacy', desc: 'All compounds dispensed by our partner 503B registered pharmacy.' },
              { icon: '🔒', title: 'HIPAA compliant', desc: 'Your health data is protected and handled with full HIPAA compliance.' },
              { icon: '📦', title: 'Discreet shipping', desc: 'Plain packaging, no brand markings. Delivered directly to your door.' },
            ].map(t => (
              <div key={t.title} style={{ background: '#fff', border: '1px solid #dde6ed', borderRadius: 10, padding: 28 }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{t.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#0d2137', marginBottom: 8 }}>{t.title}</div>
                <p style={{ fontSize: 13, color: '#7a9bb0', lineHeight: 1.65 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 56px', background: '#fff' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0f9d8c' }}>Common questions</span>
            <h2 className="s" style={{ fontSize: 48, fontWeight: 400, letterSpacing: '-0.01em', color: '#0d2137', marginTop: 8, lineHeight: 1.05 }}>
              Questions we get<br /><em style={{ color: '#0f9d8c' }}>a lot.</em>
            </h2>
          </div>
          <div style={{ border: '1px solid #dde6ed', borderRadius: 10, overflow: 'hidden' }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ borderTop: i > 0 ? '1px solid #dde6ed' : 'none' }}>
                <button
                  className="faq-btn"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="s" style={{ fontSize: 18, fontWeight: 500, color: '#0d2137', lineHeight: 1.3, flex: 1 }}>{faq.q}</span>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%',
                    border: `1.5px solid ${openFaq === i ? '#0f9d8c' : '#dde6ed'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    background: openFaq === i ? '#0f9d8c' : 'transparent',
                    transition: 'all .3s',
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
      <section style={{
        background: 'linear-gradient(135deg, #0d2137 0%, #09192a 100%)',
        padding: '96px 56px', textAlign: 'center',
      }}>
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0f9d8c' }}>
          Ready to begin?
        </span>
        <h2 className="s" style={{
          fontSize: 72, fontWeight: 300, letterSpacing: '-0.02em',
          lineHeight: 1, color: '#fff', margin: '12px 0 20px',
        }}>
          Your protocol<br /><em style={{ color: '#b3e0db' }}>is waiting.</em>
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,.45)', maxWidth: 380, margin: '0 auto 36px', fontWeight: 300, lineHeight: 1.8 }}>
          Complete your intake in under 10 minutes. A physician confirms your protocol within 24 hours.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="cta-btn-primary" onClick={() => router.push('/intake')}>
            Begin Your Assessment
          </button>
          <button className="cta-btn-ghost" onClick={() => router.push('/how-it-works')}>How it works</button>
        </div>
      </section>
    </>
  )
}
