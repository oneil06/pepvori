import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#09192a', padding: '60px 56px 40px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
        gap: 44,
        marginBottom: 40,
      }}>
        {/* Brand */}
        <div>
          <div className="s" style={{
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#fff',
            marginBottom: 12,
          }}>
            PEP<span style={{ color: '#0f9d8c' }}>VORI</span>
          </div>
          <p style={{
            fontSize: 13,
            color: 'rgba(255,255,255,.3)',
            lineHeight: 1.8,
            maxWidth: 200,
          }}>
            Physician-guided peptide therapy. Personalized protocols built around your biology.
          </p>
        </div>

        {/* Protocols */}
        <div>
          <div style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,.26)',
            marginBottom: 14,
          }}>
            Protocols
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Link href="/protocols/recovery" style={{ color: 'rgba(255,255,255,.42)', fontSize: 13 }}>Recovery &amp; Repair</Link>
            <Link href="/protocols/growth" style={{ color: 'rgba(255,255,255,.42)', fontSize: 13 }}>Growth &amp; Strength</Link>
            <Link href="/protocols/longevity" style={{ color: 'rgba(255,255,255,.42)', fontSize: 13 }}>Longevity Protocol</Link>
            <Link href="/protocols/sleep" style={{ color: 'rgba(255,255,255,.42)', fontSize: 13 }}>Focus &amp; Sleep</Link>
          </div>
        </div>

        {/* Company */}
        <div>
          <div style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,.26)',
            marginBottom: 14,
          }}>
            Company
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Link href="/about" style={{ color: 'rgba(255,255,255,.42)', fontSize: 13 }}>About</Link>
            <Link href="/physicians" style={{ color: 'rgba(255,255,255,.42)', fontSize: 13 }}>Our Physicians</Link>
            <span style={{ color: 'rgba(255,255,255,.2)', fontSize: 13, cursor: 'default' }}>Journal <span style={{ fontSize: 10, verticalAlign: 'super' }}>soon</span></span>
            <Link href="/contact" style={{ color: 'rgba(255,255,255,.42)', fontSize: 13 }}>Contact</Link>
          </div>
        </div>

        {/* Legal */}
        <div>
          <div style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,.26)',
            marginBottom: 14,
          }}>
            Legal
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Link href="/privacy" style={{ color: 'rgba(255,255,255,.42)', fontSize: 13 }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: 'rgba(255,255,255,.42)', fontSize: 13 }}>Terms of Service</Link>
            <Link href="/medical-consent" style={{ color: 'rgba(255,255,255,.42)', fontSize: 13 }}>Medical Consent</Link>
            <Link href="/hipaa" style={{ color: 'rgba(255,255,255,.42)', fontSize: 13 }}>HIPAA Notice</Link>
          </div>
        </div>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: 22,
        borderTop: '1px solid rgba(255,255,255,.07)',
        fontSize: 12,
        color: 'rgba(255,255,255,.2)',
        flexWrap: 'wrap',
        gap: 8,
      }}>
        <span>© 2026 Pepvori. All rights reserved.</span>
        <span>Precision peptide therapy, delivered.</span>
      </div>

      <div style={{
        fontSize: 11,
        color: 'rgba(255,255,255,.14)',
        maxWidth: 700,
        marginTop: 16,
        lineHeight: 1.7,
        paddingTop: 16,
        borderTop: '1px solid rgba(255,255,255,.05)',
      }}>
        * Compounded medications are not FDA-approved. Prescriptions issued only after consultation with an independent licensed physician. Results may vary. All medical care provided by independent licensed providers.
      </div>
    </footer>
  )
}
