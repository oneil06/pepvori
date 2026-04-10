'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const PROTOCOLS: Record<string, {
  title: string; desc: string; pills: string[]; timeline: string;
  price: string; admin: string; link: string; reasons: string[];
}> = {
  recovery: {
    title: 'Recovery & Repair', desc: 'Based on your responses, the Recovery & Repair protocol is the strongest match for your goals and biology.',
    pills: ['BPC-157', 'TB-500', 'GHK-Cu'], timeline: '2–4 weeks', price: '$149/mo', admin: 'Subcutaneous', link: '/protocols/recovery',
    reasons: ['Your primary goal aligns with tissue healing and repair', 'BPC-157 and TB-500 are the most clinically studied peptides for your challenge', 'Results typically visible within 2–4 weeks — one of the fastest-acting protocols'],
  },
  performance: {
    title: 'Growth & Strength', desc: 'Based on your responses, the Growth & Strength protocol is the strongest match for your goals and biology.',
    pills: ['CJC-1295', 'Ipamorelin'], timeline: '4–8 weeks', price: '$199/mo', admin: 'Subcutaneous', link: '/protocols/growth',
    reasons: ['Your goal centres on body composition and physical performance', 'CJC-1295 + Ipamorelin produces synergistic GH release for lean mass and fat loss', 'Particularly effective for your activity level and training demands'],
  },
  longevity: {
    title: 'Longevity Protocol', desc: 'Based on your responses, the Longevity Protocol is the strongest match for your goals and biology.',
    pills: ['Sermorelin', 'Tesamorelin'], timeline: '6–12 weeks', price: '$249/mo', admin: 'Subcutaneous', link: '/protocols/longevity',
    reasons: ['Your responses point to age-related hormonal decline and vitality goals', 'Sermorelin and Tesamorelin restore GH in a physiological, sustainable way', 'Strong evidence base for visceral fat reduction and energy restoration at your age range'],
  },
  sleep: {
    title: 'Focus & Sleep', desc: 'Based on your responses, the Focus & Sleep protocol is the strongest match for your goals and biology.',
    pills: ['MK-677', 'Selank'], timeline: '2–3 weeks', price: '$179/mo', admin: 'Oral / Spray', link: '/protocols/sleep',
    reasons: ['Your responses indicate cognitive fatigue and sleep quality as primary concerns', 'MK-677 dramatically improves slow-wave sleep within 1–2 weeks', "Selank's effects on focus and clarity are often noticeable within days"],
  },
}

const PLANS = [
  { name: 'Foundation', tier: 'Starter', price: '149', period: '1 protocol', featured: false },
  { name: 'Accelerate', tier: 'Performance', price: '249', period: '2 protocols', featured: true },
  { name: 'Optimize', tier: 'Elite', price: '399', period: 'Full stack', featured: false },
]

function getRecommendation(answers: Record<string, string>) {
  const { q1, q2, q3 } = answers
  if (q1 === 'recovery' || q2 === 'injury') return 'recovery'
  if (q1 === 'performance' || q2 === 'body') return 'performance'
  if (q1 === 'sleep' || q2 === 'sleep') return 'sleep'
  if (q1 === 'longevity' || q2 === 'aging' || q2 === 'energy') {
    return (q3 === '40-49' || q3 === '50+') ? 'longevity' : q3 === '30-39' ? 'performance' : 'longevity'
  }
  return 'recovery'
}

export default function IntakePage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [showResults, setShowResults] = useState(false)

  const totalSteps = 5
  const pct = Math.round((step / totalSteps) * 100)

  const select = (q: string, val: string) => setAnswers(prev => ({ ...prev, [q]: val }))
  const next = () => step < totalSteps ? setStep(s => s + 1) : setShowResults(true)
  const back = () => step > 1 ? setStep(s => s - 1) : null

  const rec = getRecommendation(answers)
  const proto = PROTOCOLS[rec]

  const OptionBtn = ({ q, val, label, sublabel, icon }: { q: string; val: string; label: string; sublabel: string; icon: React.ReactNode }) => (
    <button className={`option-btn${answers[q] === val ? ' selected' : ''}`} onClick={() => select(q, val)}>
      <div className="icon-wrap">{icon}</div>
      <div style={{ flex: 1 }}>
        <div className="label">{label}</div>
        <div className="sublabel">{sublabel}</div>
      </div>
      <div className="check">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </div>
    </button>
  )

  const tealSvg = (d: string) => (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#0f9d8c" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  )

  if (showResults) {
    return (
      <div style={{ minHeight: 'calc(100vh - 64px)', padding: '48px 24px 80px', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#f7f9fb' }}>
        <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #dde6ed', maxWidth: 780, width: '100%', overflow: 'hidden' }}>
          <div style={{ background: '#0d2137', padding: '40px 48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ width: 8, height: 8, background: '#0f9d8c', borderRadius: '50%' }} />
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0f9d8c' }}>Your personalised recommendation</span>
            </div>
            <h2 className="s" style={{ fontSize: 42, fontWeight: 400, color: '#fff', marginBottom: 10, lineHeight: 1.05 }}>{proto.title}</h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,.55)', fontWeight: 300, lineHeight: 1.7, maxWidth: 480 }}>{proto.desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
              {proto.pills.map(p => (
                <span key={p} style={{ background: 'rgba(15,157,140,.15)', border: '1px solid rgba(15,157,140,.3)', borderRadius: 100, padding: '4px 14px', fontSize: 12, color: '#b3e0db', fontWeight: 500 }}>{p}</span>
              ))}
            </div>
          </div>
          <div style={{ padding: '36px 48px', borderBottom: '1px solid #dde6ed' }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0f9d8c', marginBottom: 16 }}>Why this protocol fits you</div>
            {proto.reasons.map((r, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                <div style={{ width: 20, height: 20, background: '#e6f5f3', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#0f9d8c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <p style={{ fontSize: 14, color: '#3d5a73', lineHeight: 1.6 }}>{r}</p>
              </div>
            ))}
          </div>
          <div style={{ padding: '28px 48px', borderBottom: '1px solid #dde6ed', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>
            {[['Results timeline', proto.timeline, '#0d2137'], ['Starting from', proto.price, '#0f9d8c'], ['Administration', proto.admin, '#0d2137'], ['Physician review', 'Within 24 hrs', '#0d2137']].map(([label, val, color]) => (
              <div key={label} style={{ textAlign: 'center', padding: '0 16px', borderRight: '1px solid #dde6ed' }}>
                <div style={{ fontSize: 11, color: '#7a9bb0', marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color }}>{val}</div>
              </div>
            ))}
          </div>
          <div style={{ padding: '36px 48px', borderBottom: '1px solid #dde6ed' }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0f9d8c', marginBottom: 6 }}>Choose your plan</div>
            <p style={{ fontSize: 13, color: '#7a9bb0', marginBottom: 20 }}>All plans include physician consultation, prescription, and monthly fulfilment.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
              {PLANS.map(plan => (
                <div key={plan.name} onClick={() => setSelectedPlan(plan.name)}
                  style={{ border: `1.5px solid ${selectedPlan === plan.name ? '#0f9d8c' : plan.featured ? '#0d2137' : '#dde6ed'}`, borderRadius: 8, padding: 20, cursor: 'pointer', background: plan.featured ? '#0d2137' : '#fff', transition: 'all .3s' }}>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: plan.featured ? '#0f9d8c' : '#7a9bb0', marginBottom: 4 }}>{plan.tier}</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: plan.featured ? '#fff' : '#0d2137', marginBottom: 2 }}>{plan.name}</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: '#0f9d8c' }}>${plan.price}<span style={{ fontSize: 13, fontWeight: 400, color: '#7a9bb0' }}>/mo</span></div>
                  <div style={{ fontSize: 12, color: plan.featured ? 'rgba(255,255,255,.4)' : '#7a9bb0', marginTop: 4 }}>{plan.period}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: '32px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#0d2137', marginBottom: 3 }}>Ready to begin?</div>
              <div style={{ fontSize: 13, color: '#7a9bb0' }}>Select a plan above, then complete your clinical intake.</div>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <button className="btn-ghost" style={{ padding: '12px 22px', fontSize: 13 }} onClick={() => { setShowResults(false); setStep(1); setAnswers({}) }}>← Start over</button>
              <button className="btn-primary" style={{ padding: '12px 22px', fontSize: 13, background: 'transparent', color: '#0f9d8c', border: '1.5px solid #0f9d8c' }} onClick={() => router.push(proto.link)}>View protocol →</button>
              <button className="btn-primary" style={{ padding: '12px 22px', fontSize: 13 }} onClick={() => router.push('/intake/step-2')}>Begin clinical intake →</button>
            </div>
          </div>
          <div style={{ padding: '20px 48px', background: '#f7f9fb', borderTop: '1px solid #dde6ed' }}>
            <p style={{ fontSize: 12, color: '#7a9bb0', lineHeight: 1.7 }}><strong style={{ color: '#0d2137' }}>Note:</strong> This is a protocol recommendation based on your self-reported goals — not a medical diagnosis. A licensed physician will review your complete health profile before prescribing anything.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: 'calc(100vh - 64px)', padding: '48px 24px 80px', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#f7f9fb' }}>
      {/* Progress */}
      <div style={{ maxWidth: 640, width: '100%', marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#0f9d8c', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Question {step} of {totalSteps}</div>
          <div style={{ fontSize: 12, color: '#7a9bb0' }}>{pct}%</div>
        </div>
        <div className="progress-track"><div className="progress-fill" style={{ width: `${pct}%` }} /></div>
      </div>

      <div className="step-card">
        {/* Step 1 — Primary goal */}
        {step === 1 && <>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0f9d8c' }}>Your goal</span>
          <h2 className="s" style={{ fontSize: 36, fontWeight: 400, color: '#0d2137', margin: '8px 0', lineHeight: 1.1 }}>What&apos;s your primary goal?</h2>
          <p style={{ fontSize: 14, color: '#7a9bb0', marginBottom: 28, lineHeight: 1.6 }}>Select the one that matters most right now. You can always layer protocols later.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <OptionBtn q="q1" val="recovery" label="Recovery & healing" sublabel="Injury recovery, chronic pain, inflammation" icon={tealSvg('M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z')} />
            <OptionBtn q="q1" val="performance" label="Performance & muscle" sublabel="Strength, body composition, training output" icon={tealSvg('M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z')} />
            <OptionBtn q="q1" val="longevity" label="Longevity & vitality" sublabel="Energy, hormonal health, aging well" icon={tealSvg('M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z')} />
            <OptionBtn q="q1" val="sleep" label="Sleep & cognitive focus" sublabel="Deep sleep, mental clarity, brain fog" icon={tealSvg('M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z')} />
          </div>
          <div style={{ marginTop: 28, display: 'flex', justifyContent: 'flex-end' }}>
            <button className="btn-primary" disabled={!answers.q1} onClick={next}>Continue →</button>
          </div>
        </>}

        {/* Step 2 — Biggest challenge */}
        {step === 2 && <>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0f9d8c' }}>Your challenge</span>
          <h2 className="s" style={{ fontSize: 36, fontWeight: 400, color: '#0d2137', margin: '8px 0', lineHeight: 1.1 }}>What&apos;s your biggest challenge right now?</h2>
          <p style={{ fontSize: 14, color: '#7a9bb0', marginBottom: 28, lineHeight: 1.6 }}>This helps your physician understand the most urgent area to address.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <OptionBtn q="q2" val="injury" label="A specific injury that won't heal" sublabel="Tendon, ligament, joint, or muscle issue" icon={tealSvg('M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z')} />
            <OptionBtn q="q2" val="energy" label="Low energy or declining vitality" sublabel="Fatigue, motivation, drive" icon={tealSvg('M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z')} />
            <OptionBtn q="q2" val="body" label="Body composition changes" sublabel="Gaining fat, losing muscle, sluggish metabolism" icon={tealSvg('M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z')} />
            <OptionBtn q="q2" val="sleep" label="Poor sleep or mental fog" sublabel="Not recovering, can't focus, brain fog" icon={tealSvg('M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z')} />
            <OptionBtn q="q2" val="aging" label="General signs of aging" sublabel="Feeling older than I should, slower recovery" icon={tealSvg('M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z')} />
          </div>
          <div style={{ marginTop: 28, display: 'flex', justifyContent: 'space-between' }}>
            <button className="btn-ghost" onClick={back}>← Back</button>
            <button className="btn-primary" disabled={!answers.q2} onClick={next}>Continue →</button>
          </div>
        </>}

        {/* Step 3 — Age */}
        {step === 3 && <>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0f9d8c' }}>About you</span>
          <h2 className="s" style={{ fontSize: 36, fontWeight: 400, color: '#0d2137', margin: '8px 0', lineHeight: 1.1 }}>What&apos;s your age range?</h2>
          <p style={{ fontSize: 14, color: '#7a9bb0', marginBottom: 28, lineHeight: 1.6 }}>Hormonal profiles and recovery capacity vary significantly with age.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[['18-29', 'Peak hormonal window'], ['30-39', 'Early decline begins'], ['40-49', 'Significant GH decline'], ['50+', 'Longevity priority']].map(([val, sub]) => (
              <button key={val} className={`option-btn${answers.q3 === val ? ' selected' : ''}`} onClick={() => select('q3', val)} style={{ flexDirection: 'column', alignItems: 'flex-start', padding: 20, position: 'relative' }}>
                <div className="s" style={{ fontSize: 28, fontWeight: 400, color: '#0f9d8c', lineHeight: 1, marginBottom: 6 }}>{val}</div>
                <div style={{ fontSize: 12, color: '#7a9bb0' }}>{sub}</div>
              </button>
            ))}
          </div>
          <div style={{ marginTop: 28, display: 'flex', justifyContent: 'space-between' }}>
            <button className="btn-ghost" onClick={back}>← Back</button>
            <button className="btn-primary" disabled={!answers.q3} onClick={next}>Continue →</button>
          </div>
        </>}

        {/* Step 4 — Activity */}
        {step === 4 && <>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0f9d8c' }}>Your lifestyle</span>
          <h2 className="s" style={{ fontSize: 36, fontWeight: 400, color: '#0d2137', margin: '8px 0', lineHeight: 1.1 }}>How active are you?</h2>
          <p style={{ fontSize: 14, color: '#7a9bb0', marginBottom: 28, lineHeight: 1.6 }}>Your activity level affects which peptides are likely to produce the best results and how quickly.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <OptionBtn q="q4" val="athlete" label="Competitive athlete" sublabel="Training 5+ days a week, sport-specific goals" icon={tealSvg('M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0')} />
            <OptionBtn q="q4" val="active" label="Regularly active" sublabel="Gym, sport, or cardio 3–4 times a week" icon={tealSvg('M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z')} />
            <OptionBtn q="q4" val="moderate" label="Moderately active" sublabel="Walking, light exercise, occasional gym" icon={tealSvg('M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25')} />
            <OptionBtn q="q4" val="sedentary" label="Mostly sedentary" sublabel="Desk-based, limited regular exercise" icon={tealSvg('M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z')} />
          </div>
          <div style={{ marginTop: 28, display: 'flex', justifyContent: 'space-between' }}>
            <button className="btn-ghost" onClick={back}>← Back</button>
            <button className="btn-primary" disabled={!answers.q4} onClick={next}>Continue →</button>
          </div>
        </>}

        {/* Step 5 — Experience */}
        {step === 5 && <>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0f9d8c' }}>Your experience</span>
          <h2 className="s" style={{ fontSize: 36, fontWeight: 400, color: '#0d2137', margin: '8px 0', lineHeight: 1.1 }}>Have you tried peptide therapy before?</h2>
          <p style={{ fontSize: 14, color: '#7a9bb0', marginBottom: 28, lineHeight: 1.6 }}>This helps your physician calibrate dosing and set the right expectations for your protocol.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <OptionBtn q="q5" val="no" label="No, this is new to me" sublabel="I've heard about peptides but never tried them" icon={tealSvg('M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z')} />
            <OptionBtn q="q5" val="researched" label="I've researched them extensively" sublabel="I know what I want, just need the prescription" icon={tealSvg('M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25')} />
            <OptionBtn q="q5" val="tried" label="Yes, I've used peptides before" sublabel="I have prior experience with one or more peptides" icon={tealSvg('M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z')} />
          </div>
          <div style={{ marginTop: 28, display: 'flex', justifyContent: 'space-between' }}>
            <button className="btn-ghost" onClick={back}>← Back</button>
            <button className="btn-primary" disabled={!answers.q5} onClick={next}>See my recommendation →</button>
          </div>
        </>}
      </div>

      <footer style={{ background: '#09192a', padding: '40px 56px', marginTop: 80, width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <Link href="/"><div className="s" style={{ fontSize: 18, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff' }}>PEP<span style={{ color: '#0f9d8c' }}>VORI</span></div></Link>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,.25)', maxWidth: 600, lineHeight: 1.7 }}>* Compounded medications are not FDA-approved. Prescriptions issued only after consultation with an independent licensed physician. Results may vary.</div>
        </div>
      </footer>
    </div>
  )
}
