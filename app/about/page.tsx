'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export const metadata: Metadata = {
  title: 'About — Pepvori',
  description: 'Pepvori connects patients with licensed physicians and evidence-based peptide protocols — online, without waiting rooms.',
}

export default function AboutPage() {
  const router = useRouter()
  return (
    <>
      {/* BANNER */}
      <div style={{
        background: 'linear-gradient(135deg, #0d2137 0%, #09192a 100%)',
        minHeight: 380,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 30% 60%, rgba(15,157,140,.14) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 56px' }} className="fade-up">
          <div style={{ maxWidth: 580 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
              <Link href="/" style={{ fontSize: 13, color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</Link>
              <span style={{ color: 'rgba(255,255,255,.2)', fontSize: 13 }}>/</span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,.7)' }}>About</span>
            </div>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0f9d8c' }}>Our mission</span>
            <h1 className="s fade-up-2" style={{ fontSize: 62, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.02, color: '#fff', marginBottom: 22, marginTop: 8 }}>
              Precision medicine,<br /><em style={{ color: '#b3e0db' }}>made accessible.</em>
            </h1>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,.6)', lineHeight: 1.85, fontWeight: 300, maxWidth: 480 }}>
              Pepvori connects patients with licensed physicians and evidence-based peptide protocols — online, without waiting rooms, and built entirely around your biology.
            </p>
          </div>
        </div>
      </div>

      {/* FOUNDER SECTION */}
      <section style={{ padding: '96px 56px', background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'start' }}>
          <div style={{ position: 'relative' }} className="fade-up">
            <div style={{
              width: '100%', aspectRatio: '4/5',
              background: 'linear-gradient(135deg, #e6f5f3, #f7f9fb)',
              borderRadius: 12, overflow: 'hidden',
              border: '1px solid #dde6ed',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div className="s" style={{ fontSize: 80, fontWeight: 300, color: '#b3e0db', opacity: 0.5 }}>P</div>
            </div>
            <div style={{
              position: 'absolute', bottom: -20, right: -20,
              background: '#0f9d8c', borderRadius: 10, padding: '20px 24px',
              boxShadow: '0 12px 40px rgba(15,157,140,.3)',
            }}>
              <div className="s" style={{ fontSize: 32, fontWeight: 400, color: '#fff', lineHeight: 1 }}>4.9</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,.7)', marginTop: 4 }}>Patient rating</div>
            </div>
          </div>

          <div className="fade-up-2">
            <div className="s" style={{ fontSize: 96, color: '#e6f5f3', lineHeight: 0.6, marginBottom: 8, fontWeight: 300 }}>&ldquo;</div>
            <p className="s" style={{ fontSize: 26, fontWeight: 300, color: '#0d2137', lineHeight: 1.65, fontStyle: 'italic', marginBottom: 28 }}>
              We built Pepvori because we believed the standard of care in peptide medicine was broken. Patients were left to self-medicate from unvetted sources, or told their goals weren&apos;t &lsquo;medical enough&rsquo; for a traditional clinic. We disagreed.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#0d2137', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 700, color: '#fff' }}>DK</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#0d2137' }}>Dr. Daniel Kim, MD</div>
                <div style={{ fontSize: 13, color: '#7a9bb0' }}>Co-Founder & Chief Medical Officer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: '80px 56px', background: '#0d2137' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center', marginBottom: 48 }}>
            <div>
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0f9d8c' }}>The science</span>
              <h2 className="s" style={{ fontSize: 48, fontWeight: 400, letterSpacing: '-0.01em', color: '#fff', marginBottom: 16, marginTop: 8 }}>
                Peptides by<br /><em style={{ color: '#b3e0db' }}>the numbers.</em>
              </h2>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,.45)', lineHeight: 1.8, fontWeight: 300 }}>
                The science behind peptide therapy is decades old. What&apos;s new is the accessibility — and Pepvori&apos;s commitment to doing it right.
              </p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { value: '$50B+', label: 'Global peptide market', sub: 'Growing annually' },
              { value: '7,000+', label: 'Peptides identified', sub: 'In human biology' },
              { value: '100+', label: 'Clinical peptide trials', sub: 'Completed or ongoing' },
              { value: '14%', label: 'Avg. GH decline', sub: 'Per decade after 30' },
              { value: '2–4 wks', label: 'Time to first results', sub: 'Recovery protocols' },
              { value: '30min', label: 'Physician consultation', sub: 'Included in every plan' },
            ].map(s => (
              <div key={s.label} style={{
                background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)',
                borderRadius: 10, padding: '28px 24px',
              }}>
                <div className="s" style={{ fontSize: 52, fontWeight: 300, color: '#b3e0db', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: 8 }}>{s.value}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.35)' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION PILLARS */}
      <section style={{ padding: '96px 56px', background: '#f7f9fb', borderTop: '1px solid #dde6ed' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ maxWidth: 520, marginBottom: 56 }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0f9d8c' }}>Our principles</span>
            <h2 className="s" style={{ fontSize: 48, fontWeight: 400, letterSpacing: '-0.01em', color: '#0d2137', marginBottom: 14, marginTop: 8 }}>
              The principles behind<br /><em style={{ color: '#0f9d8c' }}>everything we build.</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {[
              {
                n: '01',
                title: 'Physician-first, always',
                desc: 'Every protocol starts with a licensed physician. No exceptions, no workarounds. Your health is not a growth hack.',
              },
              {
                n: '02',
                title: 'Radical transparency',
                desc: 'We tell you what\'s in your protocol, what it does, and what to expect. No upsells. No hidden fees. No hype.',
              },
              {
                n: '03',
                title: 'Built for the patient',
                desc: 'Our process is designed around your life — not a clinic\'s schedule. Intake online, consultation online, delivery to your door.',
              },
            ].map(p => (
              <div key={p.n} style={{ borderTop: '2px solid #dde6ed', paddingTop: 28 }}>
                <div className="s" style={{ fontSize: 36, fontWeight: 300, color: '#e6f5f3', marginBottom: 16 }}>{p.n}</div>
                <h3 className="s" style={{ fontSize: 24, fontWeight: 500, color: '#0d2137', marginBottom: 12 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#3d5a73', lineHeight: 1.75, fontWeight: 300 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '96px 56px', background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0f9d8c' }}>Patient voices</span>
            <h2 className="s" style={{ fontSize: 48, fontWeight: 400, letterSpacing: '-0.01em', color: '#0d2137', marginBottom: 14, marginTop: 8 }}>
              There&apos;s a reason people<br /><em style={{ color: '#0f9d8c' }}>keep coming back.</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {[
              { initials: 'MR', name: 'Marcus R.', protocol: 'Recovery Protocol — 4 months', bg: '#0d2137', textColor: '#fff', quoteColor: 'rgba(255,255,255,.8)', quote: '"After years of training through injuries, BPC-157 through Pepvori genuinely changed my recovery. Six weeks and a shoulder injury that hadn\'t healed in months was fully resolved."' },
              { initials: 'SK', name: 'Sarah K.', protocol: 'Focus & Sleep — 3 months', bg: '#f7f9fb', textColor: '#0d2137', quoteColor: '#0d2137', quote: '"Sleep quality improved within two weeks on MK-677. The AI check-ins caught something my physician adjusted. Impressive care."' },
              { initials: 'JM', name: 'James M.', protocol: 'Longevity — 6 months', bg: '#f7f9fb', textColor: '#0d2137', quoteColor: '#0d2137', quote: '"At 47, Sermorelin has turned back the clock on my energy. Pepvori\'s physicians actually listen and adjust. I wish I\'d started years earlier."' },
              { initials: 'AL', name: 'Aisha L.', protocol: 'Recovery — 2 months', bg: '#f7f9fb', textColor: '#0d2137', quoteColor: '#0d2137', quote: '"The intake process was genuinely impressive. It felt like talking to a physician who knew what questions to ask. Protocol arrived in 3 days."' },
            ].map(t => (
              <div key={t.name} style={{ background: t.bg, border: '1px solid #dde6ed', borderRadius: 12, padding: '32px 36px' }}>
                <p className="s" style={{ fontSize: 18, fontWeight: 300, color: t.quoteColor, lineHeight: 1.75, fontStyle: 'italic', marginBottom: 24 }}>{t.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#0f9d8c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#fff' }}>{t.initials}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: t.textColor }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: '#7a9bb0', marginTop: 2 }}>{t.protocol}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #0d2137 0%, #09192a 100%)', padding: '80px 56px', textAlign: 'center' }}>
        <h2 className="s" style={{ fontSize: 52, fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.05, color: '#fff', marginBottom: 18 }}>
          Ready to meet your<br /><em style={{ color: '#b3e0db' }}>physician?</em>
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,.45)', maxWidth: 380, margin: '0 auto 32px', fontWeight: 300, lineHeight: 1.8 }}>
          Your first step is a 10-minute assessment. A physician reviews your profile within 24 hours.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="cta-btn-primary" onClick={() => router.push('/intake')}>Begin Your Assessment</button>
          <button className="cta-btn-ghost" onClick={() => router.push('/physicians')}>Meet our physicians</button>
        </div>
      </section>
    </>
  )
}
