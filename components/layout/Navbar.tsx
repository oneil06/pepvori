'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/')

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 200,
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 56px',
      background: 'rgba(255,255,255,.97)',
      borderBottom: '1px solid #dde6ed',
      backdropFilter: 'blur(16px)',
    }}>
      <Link href="/">
        <span className="s" style={{
          fontSize: 22,
          fontWeight: 600,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: '#0d2137',
          cursor: 'pointer',
        }}>
          PEP<span style={{ color: '#0f9d8c' }}>VORI</span>
        </span>
      </Link>

      <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        <Link
          href="/protocols"
          className={`nav-link${isActive('/protocols') ? ' active' : ''}`}
        >
          Protocols
        </Link>
        <Link
          href="/how-it-works"
          className={`nav-link${isActive('/how-it-works') ? ' active' : ''}`}
        >
          How It Works
        </Link>
        <Link
          href="/pricing"
          className={`nav-link${isActive('/pricing') ? ' active' : ''}`}
        >
          Pricing
        </Link>
        <button
          className="nav-btn"
          onClick={() => router.push('/intake')}
        >
          Begin Intake
        </button>
      </div>
    </nav>
  )
}
