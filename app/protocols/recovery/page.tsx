'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function RecoveryProtocolPage() {
  const router = useRouter()
  return (
    <div style={{ background: '#fff', color: '#0d2137' }}>
      {/* HERO */}
      <div style={{ background: '#0d2137', padding: '80px 56px 72px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 60% 50%, rgba(15,157,140,.15) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
            <button onClick={() => router.push('/protocols')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,.4)', fontSize: 13 }}>← All Protocols</button>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(15,157,140,.12)', border: '1px solid rgba(15,157,140,.2)', borderRadius: 100, padding: '5px 14px', marginBottom: 24 }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0f9d8c' }}>01 — Most Popular</span>
          </div>
          <h1 className="s" style={{ fontSize: 64, fontWeight: 300, color: '#fff', lineHeight: 1.05, marginBottom: 20 }}>Recovery <em style={{ color: '#b3e0db' }}>& Repair</em></h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,.55)', lineHeight: 1.8, fontWeight: 300, maxWidth: 520, marginBottom: 36 }}>Accelerate tissue healing, reduce chronic inflammation, and restore peak physical function. The most requested protocol among athletes and high performers.</p>
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', marginBottom: 40 }}>
            {[['Results', '2–4 weeks'], ['Administration', 'Subcutaneous'], ['Physician review', '24 hours'], ['Starting from', '$149/mo']].map(([label, val]) => (
              <div key={label}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.35)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>{val}</div>
              </div>
            ))}
          </div>
          <button className="cta-btn-primary" onClick={() => router.push('/intake')}>Begin Your Assessment →</button>
        </div>
      </div>

      {/* PEPTIDES */}
      <div style={{ padding: '80px 56px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div style={{ width: 32, height: 1, background: '#0f9d8c' }} />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0f9d8c' }}>Protocol Compounds</span>
        </div>
        <h2 className="s" style={{ fontSize: 48, fontWeight: 300, color: '#0d2137', marginBottom: 48, lineHeight: 1.1 }}>The peptides in<br /><em style={{ color: '#0f9d8c' }}>this protocol.</em></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {[
            { name: 'BPC-157', tag: 'Primary', desc: 'Body Protection Compound-157 is a synthetic peptide derived from a protein found in gastric juice. It dramatically accelerates healing of tendons, ligaments, muscles, and gut tissue. One of the most studied peptides for injury recovery with an exceptional safety profile.' },
            { name: 'TB-500', tag: 'Primary', desc: 'Thymosin Beta-4 promotes systemic healing by upregulating actin — a protein essential to cell building and movement. It reduces inflammation, promotes angiogenesis (new blood vessel formation), and enhances muscle and tissue repair throughout the entire body.' },
            { name: 'GHK-Cu', tag: 'Supportive', desc: 'Copper peptide that stimulates collagen synthesis, reduces inflammation, and promotes wound healing. Particularly effective for skin, connective tissue, and joint recovery. Also shows neuroprotective and antioxidant properties.' },
          ].map(p => (
            <div key={p.name} style={{ border: '1px solid #dde6ed', borderRadius: 12, padding: 32 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: p.tag === 'Primary' ? '#0f9d8c' : '#7a9bb0' }}>{p.tag}</span>
              </div>
              <h3 className="s" style={{ fontSize: 32, fontWeight: 400, color: '#0d2137', marginBottom: 12 }}>{p.name}</h3>
              <p style={{ fontSize: 14, color: '#3d5a73', lineHeight: 1.7, fontWeight: 300 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* WHAT TO EXPECT */}
      <div style={{ background: '#f7f9fb', padding: '80px 56px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 32, height: 1, background: '#0f9d8c' }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0f9d8c' }}>Timeline</span>
          </div>
          <h2 className="s" style={{ fontSize: 48, fontWeight: 300, color: '#0d2137', marginBottom: 48, lineHeight: 1.1 }}>What to <em style={{ color: '#0f9d8c' }}>expect.</em></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {[['Week 1–2', 'Reduced inflammation and improved sleep quality. Many patients notice reduced soreness and faster post-workout recovery within days.'],
              ['Week 2–4', 'Accelerated tissue healing. Tendon and ligament repair becomes noticeable. Pain levels decrease significantly for most patients.'],
              ['Week 4–8', 'Substantial structural repair. Most patients report near-complete resolution of chronic injuries and significantly improved mobility.'],
              ['Week 8+', 'Consolidation and maintenance. Your physician may adjust or cycle the protocol based on your progress logs and goals.']
            ].map(([week, desc]) => (
              <div key={week} style={{ background: '#fff', border: '1px solid #dde6ed', borderRadius: 12, padding: 28 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#0f9d8c', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>{week}</div>
                <p style={{ fontSize: 14, color: '#3d5a73', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: '#0d2137', padding: '80px 56px', textAlign: 'center' }}>
        <h2 className="s" style={{ fontSize: 52, fontWeight: 300, color: '#fff', marginBottom: 16 }}>Ready to begin<br /><em style={{ color: '#b3e0db' }}>your recovery?</em></h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,.45)', marginBottom: 36, maxWidth: 480, margin: '0 auto 36px' }}>Complete your free assessment. A physician reviews your profile within 24 hours.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="cta-btn-primary" onClick={() => router.push('/intake')}>Begin Your Assessment</button>
          <button className="cta-btn-ghost" onClick={() => router.push('/pricing')}>View pricing</button>
        </div>
      </div>
    </div>
  )
}
