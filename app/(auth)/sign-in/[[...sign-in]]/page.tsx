import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sign In — Pepvori',
  description: 'Sign in to your Pepvori patient portal.',
}

export default function SignInPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f4f7' }}>
      <div style={{ background: '#fff', border: '1px solid #dde6ed', borderRadius: 12, padding: '48px 40px', maxWidth: 400, width: '100%', textAlign: 'center' }}>
        <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#0d2137', marginBottom: 24, fontFamily: "'Cormorant Garamond', serif" }}>
          PEP<span style={{ color: '#0f9d8c' }}>VORI</span>
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 400, color: '#0d2137', marginBottom: 12, fontFamily: "'Cormorant Garamond', serif" }}>Patient Portal</h1>
        <p style={{ fontSize: 14, color: '#7a9bb0', marginBottom: 32, lineHeight: 1.6 }}>
          Patient login is coming soon. Begin your intake to get started.
        </p>
        <Link href="/intake" style={{ display: 'block', background: '#0f9d8c', color: '#fff', padding: '13px 24px', borderRadius: 6, fontSize: 14, fontWeight: 600, textDecoration: 'none', marginBottom: 12 }}>
          Begin Your Intake
        </Link>
        <Link href="/" style={{ fontSize: 13, color: '#7a9bb0', textDecoration: 'none' }}>
          ← Back to home
        </Link>
      </div>
    </div>
  )
}
