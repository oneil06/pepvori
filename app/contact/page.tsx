'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', topic: '', message: '', privacyOk: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submission:', form)
    setSubmitted(true)
  }

  return (
    <>
      {/* BREADCRUMB */}
      <div style={{ background: '#f7f9fb', borderBottom: '1px solid #dde6ed', padding: '14px 56px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Link href="/" style={{ fontSize: 13, color: '#7a9bb0', textDecoration: 'none' }}>Home</Link>
          <span style={{ color: '#dde6ed', fontSize: 13 }}>/</span>
          <span style={{ fontSize: 13, color: '#0d2137', fontWeight: 500 }}>Contact</span>
        </div>
      </div>

      {/* HERO */}
      <div style={{
        background: 'linear-gradient(135deg, #0d2137 0%, #09192a 100%)',
        padding: '72px 56px',
      }}>
        <div style={{ maxWidth: 580 }}>
          <h1 className="s fade-up-2" style={{ fontSize: 58, fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.05, color: '#fff', marginBottom: 16 }}>
            Get in touch<br /><em style={{ color: '#b3e0db' }}>with our team.</em>
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.5)', lineHeight: 1.8, fontWeight: 300 }}>
            Questions about a protocol, your subscription, or anything else — we&apos;re here.
          </p>
        </div>
      </div>

      {/* MAIN BODY */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 400px', gap: 56,
        maxWidth: 1120, margin: '0 auto', padding: '72px 56px 96px', alignItems: 'start',
      }}>
        {/* LEFT: Form */}
        <div>
          <div style={{ marginBottom: 36 }}>
            <h2 className="s" style={{ fontSize: 34, fontWeight: 400, color: '#0d2137', marginBottom: 8 }}>Send us a message</h2>
            <p style={{ fontSize: 14, color: '#7a9bb0', lineHeight: 1.7 }}>Fill out the form and a member of our team will be in touch shortly.</p>
          </div>

          {submitted ? (
            <div className="success-box" style={{ display: 'block' }}>
              <div style={{ width: 52, height: 52, background: '#0f9d8c', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="s" style={{ fontSize: 28, fontWeight: 400, color: '#0d2137', marginBottom: 8 }}>Message sent.</div>
              <p style={{ fontSize: 14, color: '#3d5a73', lineHeight: 1.7 }}>Thank you for reaching out. A member of our team will follow up within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="field">
                  <label>First name</label>
                  <input type="text" placeholder="First name" required value={form.firstName} onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))} />
                </div>
                <div className="field">
                  <label>Last name</label>
                  <input type="text" placeholder="Last name" required value={form.lastName} onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))} />
                </div>
              </div>
              <div className="field">
                <label>Email address</label>
                <input type="email" placeholder="you@example.com" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
              </div>
              <div className="field">
                <label>Topic</label>
                <select required value={form.topic} onChange={e => setForm(f => ({ ...f, topic: e.target.value }))}>
                  <option value="" disabled>Select a topic…</option>
                  <option>General inquiry</option>
                  <option>Protocol questions</option>
                  <option>My existing prescription</option>
                  <option>Billing &amp; membership</option>
                  <option>Shipment &amp; delivery</option>
                  <option>Medical question for a physician</option>
                  <option>Press &amp; partnerships</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="field">
                <label>Message</label>
                <textarea placeholder="Tell us what's on your mind…" required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <input
                  type="checkbox"
                  id="privacy-ok"
                  required
                  checked={form.privacyOk}
                  onChange={e => setForm(f => ({ ...f, privacyOk: e.target.checked }))}
                  style={{ marginTop: 2, accentColor: '#0f9d8c', width: 15, height: 15, flexShrink: 0 }}
                />
                <label htmlFor="privacy-ok" style={{ fontSize: 13, color: '#7a9bb0', lineHeight: 1.6, cursor: 'pointer' }}>
                  I agree to Pepvori&apos;s <Link href="/privacy" style={{ color: '#0f9d8c' }}>Privacy Policy</Link> and consent to being contacted by our team.
                </label>
              </div>
              <button type="submit" className="btn-submit">Send message →</button>
            </form>
          )}
        </div>

        {/* RIGHT: Contact info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'sticky', top: 84 }}>
          <div className="info-card">
            <div className="info-icon">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#0f9d8c" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#0d2137', marginBottom: 3 }}>Email us</div>
              <div style={{ fontSize: 13, color: '#0f9d8c', fontWeight: 500 }}>hello@pepvori.com</div>
              <div style={{ fontSize: 12, color: '#7a9bb0', marginTop: 3 }}>We&apos;re always happy to help</div>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#0f9d8c" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#0d2137', marginBottom: 3 }}>Care coordinators</div>
              <div style={{ fontSize: 13, color: '#3d5a73', lineHeight: 1.6 }}>Available Mon – Fri, 9am – 6pm ET for existing patients with active protocols.</div>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#0f9d8c" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#0d2137', marginBottom: 3 }}>Response time</div>
              <div style={{ fontSize: 13, color: '#3d5a73', lineHeight: 1.6 }}>We aim to respond to all enquiries within one business day.</div>
            </div>
          </div>

          <div style={{ background: '#f7f9fb', border: '1px solid #dde6ed', borderRadius: 10, padding: 20 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b3c5d2', marginBottom: 12 }}>Quick links</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <Link href="/protocols" style={{ fontSize: 13, color: '#3d5a73', textDecoration: 'none' }}>Browse protocols →</Link>
              <Link href="/how-it-works" style={{ fontSize: 13, color: '#3d5a73', textDecoration: 'none' }}>How it works →</Link>
              <Link href="/pricing" style={{ fontSize: 13, color: '#3d5a73', textDecoration: 'none' }}>View pricing →</Link>
              <Link href="/physicians" style={{ fontSize: 13, color: '#3d5a73', textDecoration: 'none' }}>Our physicians →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA BANNER */}
      <section style={{ background: 'linear-gradient(135deg, #0d2137 0%, #09192a 100%)', padding: '72px 56px', textAlign: 'center' }}>
        <h2 className="s" style={{ fontSize: 48, fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.05, color: '#fff', marginBottom: 16 }}>
          Ready to feel the way<br /><em style={{ color: '#b3e0db' }}>you were meant to?</em>
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,.45)', maxWidth: 360, margin: '0 auto 28px', fontWeight: 300, lineHeight: 1.8 }}>
          Complete your intake and a physician will review your profile within 24 hours.
        </p>
        <Link href="/intake"><button className="cta-btn-primary">Begin Your Assessment</button></Link>
      </section>
    </>
  )
}
