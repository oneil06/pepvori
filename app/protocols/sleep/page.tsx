'use client'
import { useRouter } from 'next/navigation'

export default function SleepProtocolPage() {
  const router = useRouter()
  return (
    <div style={{ background: '#fff', color: '#0d2137' }}>
      <div style={{ background: '#0d2137', padding: '80px 56px 72px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 60% 50%, rgba(15,157,140,.15) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <button onClick={() => router.push('/protocols')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,.4)', fontSize: 13, marginBottom: 20, display: 'block' }}>← All Protocols</button>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(15,157,140,.12)', border: '1px solid rgba(15,157,140,.2)', borderRadius: 100, padding: '5px 14px', marginBottom: 24 }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0f9d8c' }}>04 — Focus & Sleep</span>
          </div>
          <h1 className="s" style={{ fontSize: 64, fontWeight: 300, color: '#fff', lineHeight: 1.05, marginBottom: 20 }}>Focus <em style={{ color: '#b3e0db' }}>& Sleep</em></h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,.55)', lineHeight: 1.8, fontWeight: 300, maxWidth: 520, marginBottom: 36 }}>Deepen sleep architecture, sharpen cognitive output, and restore the mental clarity that declines with stress, age, and modern life.</p>
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', marginBottom: 40 }}>
            {[['Results', '2–3 weeks'], ['Administration', 'Oral / Spray'], ['Physician review', '24 hours'], ['Starting from', '$149/mo']].map(([label, val]) => (
              <div key={label}><div style={{ fontSize: 11, color: 'rgba(255,255,255,.35)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>{label}</div><div style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>{val}</div></div>
            ))}
          </div>
          <button className="cta-btn-primary" onClick={() => router.push('/intake')}>Begin Your Assessment →</button>
        </div>
      </div>

      <div style={{ padding: '80px 56px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}><div style={{ width: 32, height: 1, background: '#0f9d8c' }} /><span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0f9d8c' }}>Protocol Compounds</span></div>
        <h2 className="s" style={{ fontSize: 48, fontWeight: 300, color: '#0d2137', marginBottom: 48, lineHeight: 1.1 }}>The peptides in<br /><em style={{ color: '#0f9d8c' }}>this protocol.</em></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {[
            { name: 'MK-677', tag: 'Primary', desc: 'An oral GH secretagogue that significantly increases slow-wave (deep) sleep — the most restorative phase of the sleep cycle. Elevates GH and IGF-1 over a sustained 24-hour period. Patients typically notice dramatic improvements in sleep quality within the first week.' },
            { name: 'Selank', tag: 'Primary', desc: 'A synthetic analogue of the human immunoglobulin tuftsin. It modulates GABAergic activity to produce anxiolytic and nootropic effects without sedation or dependence. Improves focus, reduces anxiety, and enhances memory consolidation during sleep.' },
            { name: 'Semax', tag: 'Supportive', desc: 'A synthetic analogue of ACTH that stimulates BDNF production — the brain\'s primary growth factor. Enhances cognitive performance, working memory, and neuroprotection. Often used alongside Selank for a comprehensive cognitive enhancement stack.' },
          ].map(p => (
            <div key={p.name} style={{ border: '1px solid #dde6ed', borderRadius: 12, padding: 32 }}>
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: p.tag === 'Primary' ? '#0f9d8c' : '#7a9bb0' }}>{p.tag}</span>
              <h3 className="s" style={{ fontSize: 32, fontWeight: 400, color: '#0d2137', margin: '12px 0' }}>{p.name}</h3>
              <p style={{ fontSize: 14, color: '#3d5a73', lineHeight: 1.7, fontWeight: 300 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: '#f7f9fb', padding: '80px 56px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}><div style={{ width: 32, height: 1, background: '#0f9d8c' }} /><span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0f9d8c' }}>Timeline</span></div>
          <h2 className="s" style={{ fontSize: 48, fontWeight: 300, color: '#0d2137', marginBottom: 48, lineHeight: 1.1 }}>What to <em style={{ color: '#0f9d8c' }}>expect.</em></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {[['Day 1–7', 'Most patients notice improved sleep depth within the first few days. Vivid dreams are common and indicate deeper REM cycles. Reduced time to fall asleep.'],
              ['Week 1–2', 'Daytime energy and focus improve as sleep quality compounds. Brain fog begins to lift. Anxiety levels reduce noticeably with Selank.'],
              ['Week 2–4', 'Cognitive performance measurably improves. Working memory, mental sharpness, and emotional resilience all strengthen. Sleep efficiency at near-optimal levels.'],
              ['Month 2+', 'Sustained cognitive enhancement and sleep quality. Your physician may cycle or adjust the protocol to maintain optimal effect.']
            ].map(([week, desc]) => (
              <div key={week} style={{ background: '#fff', border: '1px solid #dde6ed', borderRadius: 12, padding: 28 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#0f9d8c', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>{week}</div>
                <p style={{ fontSize: 14, color: '#3d5a73', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: '#0d2137', padding: '80px 56px', textAlign: 'center' }}>
        <h2 className="s" style={{ fontSize: 52, fontWeight: 300, color: '#fff', marginBottom: 16 }}>Wake up<br /><em style={{ color: '#b3e0db' }}>as your best self.</em></h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,.45)', marginBottom: 36, maxWidth: 480, margin: '0 auto 36px' }}>Complete your free assessment. A physician reviews your profile within 24 hours.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="cta-btn-primary" onClick={() => router.push('/intake')}>Begin Your Assessment</button>
          <button className="cta-btn-ghost" onClick={() => router.push('/pricing')}>View pricing</button>
        </div>
      </div>
    </div>
  )
}
