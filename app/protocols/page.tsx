import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Protocols — Pepvori',
  description: 'Physician-prescribed peptide protocols built around your biology. Choose your goal — we handle the rest.',
}

const PROTOCOLS = [
  {
    id: 'recovery',
    label: 'Recovery',
    title: 'Recovery & Repair',
    tagline: 'Heal faster. Move better.',
    desc: 'Accelerate healing at the cellular level — tendons, ligaments, joints, and muscle tissue. The most clinically-studied protocol for persistent injuries and inflammation.',
    peptides: ['BPC-157', 'TB-500', 'GHK-Cu'],
    timeline: '2–4 weeks',
    admin: 'Subcutaneous',
    price: '$149/mo',
    href: '/protocols/recovery',
    color: '#0f9d8c',
  },
  {
    id: 'growth',
    label: 'Performance',
    title: 'Growth & Strength',
    tagline: 'Build. Burn. Perform.',
    desc: 'Stimulate natural growth hormone release to accelerate muscle growth, reduce body fat, and enhance training output — without synthetic hormones.',
    peptides: ['CJC-1295', 'Ipamorelin'],
    timeline: '4–8 weeks',
    admin: 'Subcutaneous',
    price: '$149/mo',
    href: '/protocols/growth',
    color: '#0d2137',
  },
  {
    id: 'longevity',
    label: 'Longevity',
    title: 'Longevity Protocol',
    tagline: 'Age well. Feel younger.',
    desc: 'Restore natural GH secretion, improve hormonal balance, and slow the biological markers of aging. Built for patients thinking decades ahead.',
    peptides: ['Sermorelin', 'CJC-1295'],
    timeline: '6–12 weeks',
    admin: 'Subcutaneous',
    price: '$149/mo',
    href: '/protocols/longevity',
    color: '#7a9bb0',
  },
  {
    id: 'sleep',
    label: 'Focus & Sleep',
    title: 'Focus & Sleep',
    tagline: 'Recover. Focus. Think clearly.',
    desc: 'Deepen sleep architecture, enhance cognitive clarity, and restore the mental edge that declines with age. Oral administration makes this the most accessible protocol.',
    peptides: ['MK-677'],
    timeline: '2–3 weeks',
    admin: 'Oral',
    price: '$149/mo',
    href: '/protocols/sleep',
    color: '#3d5a73',
  },
]

export default function ProtocolsPage() {
  return (
    <>
      {/* PAGE HERO */}
      <div style={{ background: '#f7f9fb', padding: '80px 56px 72px', borderBottom: '1px solid #dde6ed' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div className="fade-up">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <div style={{ width: 20, height: 2, background: '#0f9d8c', borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0f9d8c' }}>Physician-prescribed</span>
            </div>
            <h1 className="s" style={{ fontSize: 62, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.02, color: '#0d2137', marginBottom: 22 }}>
              Protocols built<br />around <em style={{ color: '#0f9d8c' }}>your biology.</em>
            </h1>
            <p style={{ fontSize: 17, color: '#3d5a73', lineHeight: 1.85, fontWeight: 300, maxWidth: 420, marginBottom: 36 }}>
              Every protocol is prescribed by a licensed physician after a full review of your health profile. Choose your goal — we handle the rest.
            </p>
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              {[
                { value: '4', label: 'Protocols available' },
                { value: '8', label: 'Peptides used' },
                { value: '100%', label: 'Physician-prescribed' },
              ].map((s, i) => (
                <div key={s.label} style={{ display: 'flex', alignItems: 'stretch', gap: 32 }}>
                  {i > 0 && <div style={{ width: 1, background: '#dde6ed' }} />}
                  <div>
                    <div className="s" style={{ fontSize: 32, fontWeight: 400, color: '#0f9d8c', lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontSize: 12, color: '#7a9bb0', marginTop: 3 }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {PROTOCOLS.map(p => (
              <Link key={p.id} href={p.href} style={{ textDecoration: 'none' }}>
                <div className="sh" style={{
                  background: '#fff', border: '1px solid #dde6ed', borderRadius: 8,
                  padding: 20, cursor: 'pointer', transition: 'all .3s ease-in-out',
                }}>
                  <div style={{ width: 10, height: 10, background: p.color, borderRadius: '50%', marginBottom: 10 }} />
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#0d2137', marginBottom: 2 }}>{p.title}</div>
                  <div style={{ fontSize: 11, color: '#7a9bb0' }}>{p.tagline}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* PROTOCOL CARDS */}
      <section style={{ padding: '64px 56px', background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {PROTOCOLS.map((p, i) => (
              <div key={p.id} style={{
                border: '1px solid #dde6ed', borderRadius: 12, overflow: 'hidden',
                display: 'grid', gridTemplateColumns: '1fr 320px',
              }}>
                <div style={{ padding: '40px 44px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <span style={{
                      fontSize: 10, fontWeight: 600, letterSpacing: '0.12em',
                      textTransform: 'uppercase', color: '#fff',
                      background: p.color, padding: '3px 10px', borderRadius: 100,
                    }}>{p.label}</span>
                  </div>
                  <h2 className="s" style={{ fontSize: 36, fontWeight: 400, color: '#0d2137', marginBottom: 12, lineHeight: 1.1 }}>{p.title}</h2>
                  <p style={{ fontSize: 15, color: '#3d5a73', lineHeight: 1.8, fontWeight: 300, marginBottom: 20, maxWidth: 520 }}>{p.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                    {p.peptides.map(pep => (
                      <span key={pep} style={{
                        background: '#f7f9fb', border: '1px solid #dde6ed',
                        borderRadius: 100, padding: '4px 12px', fontSize: 12, color: '#3d5a73', fontWeight: 500,
                      }}>{pep}</span>
                    ))}
                  </div>
                  <Link href={p.href}>
                    <button style={{
                      background: '#0f9d8c', color: '#fff', border: 'none',
                      padding: '11px 24px', borderRadius: 4, fontSize: 13, fontWeight: 600,
                      cursor: 'pointer', fontFamily: "'Outfit', sans-serif",
                    }}>View protocol →</button>
                  </Link>
                </div>

                <div style={{ background: '#f7f9fb', borderLeft: '1px solid #dde6ed', padding: '40px 32px', display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {[
                    { label: 'Results timeline', value: p.timeline },
                    { label: 'Starting from', value: p.price },
                    { label: 'Administration', value: p.admin },
                    { label: 'Physician review', value: 'Within 24 hrs' },
                  ].map(stat => (
                    <div key={stat.label} style={{ borderBottom: '1px solid #dde6ed', paddingBottom: 16 }}>
                      <div style={{ fontSize: 11, color: '#7a9bb0', marginBottom: 4 }}>{stat.label}</div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: stat.label === 'Starting from' ? '#0f9d8c' : '#0d2137' }}>{stat.value}</div>
                    </div>
                  ))}
                  <Link href="/intake">
                    <button style={{
                      width: '100%', background: 'transparent', color: '#0d2137',
                      border: '1.5px solid #dde6ed', padding: '10px', borderRadius: 4,
                      fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: "'Outfit', sans-serif",
                      marginTop: 'auto',
                    }}>Begin intake →</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOT SURE SECTION */}
      <section style={{ padding: '80px 56px', background: '#f7f9fb', borderTop: '1px solid #dde6ed' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0f9d8c' }}>Not sure where to start?</span>
            <h2 className="s" style={{ fontSize: 44, fontWeight: 400, letterSpacing: '-0.01em', color: '#0d2137', marginBottom: 18, marginTop: 8, lineHeight: 1.08 }}>
              Your physician will<br /><em style={{ color: '#0f9d8c' }}>recommend the right fit.</em>
            </h2>
            <p style={{ fontSize: 15, color: '#3d5a73', lineHeight: 1.85, fontWeight: 300, marginBottom: 28 }}>
              Take our 10-minute assessment and a licensed physician will recommend the protocol best matched to your biology, goals, and health history. You&apos;re not locked in — protocols can be adjusted at any time.
            </p>
            <Link href="/intake"><button className="cta-btn-primary" style={{ fontSize: 14 }}>Take the assessment →</button></Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              'Answer questions about your goals and health',
              'Get a personalized protocol recommendation',
              'Physician reviews and confirms your match',
              'Protocol delivered within 48 hours',
            ].map((step, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, background: '#fff', border: '1px solid #dde6ed', borderRadius: 8, padding: '18px 22px' }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: '#e6f5f3', border: '1px solid #b3e0db',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 700, color: '#0f9d8c', flexShrink: 0,
                }}>{i + 1}</div>
                <span style={{ fontSize: 14, color: '#0d2137', fontWeight: 500 }}>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #0d2137 0%, #09192a 100%)', padding: '80px 56px', textAlign: 'center' }}>
        <h2 className="s" style={{ fontSize: 56, fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.05, color: '#fff', marginBottom: 18 }}>
          Your protocol is<br /><em style={{ color: '#b3e0db' }}>waiting for you.</em>
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
