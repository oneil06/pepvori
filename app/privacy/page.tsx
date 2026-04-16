import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Pepvori',
  description: 'Pepvori Privacy Policy — how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        body{font-family:'Outfit',sans-serif;background:#fff;color:#0d2137;overflow-x:hidden;font-size:14px;}
        .s{font-family:'Cormorant Garamond',serif;}
        a{text-decoration:none;color:#0f9d8c;}
        a:hover{text-decoration:underline;}
        .nav-link{color:#3d5a73;font-size:13px;font-weight:500;letter-spacing:0.04em;text-decoration:none;position:relative;padding-bottom:2px;transition:color .2s;}
        .nav-link::after{content:'';position:absolute;bottom:0;left:0;width:0;height:1.5px;background:#0f9d8c;border-radius:2px;transition:width .35s ease-in-out;}
        .nav-link:hover{color:#0d2137;}.nav-link:hover::after{width:100%;}
        .nav-btn{background:#0f9d8c;color:#fff;border:none;padding:9px 22px;border-radius:4px;font-size:13px;font-weight:600;cursor:pointer;transition:background .4s;}
        .nav-btn:hover{background:#0b8578;}
        .prose h2{font-family:'Cormorant Garamond',serif;font-size:26px;font-weight:400;color:#0d2137;margin:40px 0 12px;}
        .prose h3{font-size:15px;font-weight:600;color:#0d2137;margin:24px 0 8px;}
        .prose p{font-size:14px;color:#3d5a73;line-height:1.85;margin-bottom:14px;}
        .prose ul{margin:0 0 14px 20px;display:flex;flex-direction:column;gap:6px;}
        .prose ul li{font-size:14px;color:#3d5a73;line-height:1.7;}
        .toc-link{display:block;font-size:13px;color:#7a9bb0;padding:7px 0;border-bottom:1px solid #f0f4f7;transition:color .2s;text-decoration:none;}
        .toc-link:hover{color:#0f9d8c;text-decoration:none;}
        @media(max-width:768px){
          nav{padding:0 20px !important;}
          .hero-pad{padding:56px 24px 44px !important;}
          .legal-body{grid-template-columns:1fr !important;padding:40px 24px !important;}
          .toc-sidebar{display:none !important;}
          footer{padding:48px 24px 32px !important;}
          .footer-grid{grid-template-columns:1fr 1fr !important;gap:32px !important;}
        }
      `}</style>

      {/* NAV */}
      <nav style={{position:'sticky',top:0,zIndex:200,height:'64px',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 56px',background:'rgba(255,255,255,.97)',borderBottom:'1px solid #dde6ed',backdropFilter:'blur(16px)'}}>
        <Link href="/" style={{textDecoration:'none'}}>
          <span className="s" style={{fontSize:'22px',fontWeight:600,letterSpacing:'0.06em',textTransform:'uppercase',color:'#0d2137'}}>PEP<span style={{color:'#0f9d8c'}}>VORI</span></span>
        </Link>
        <div style={{display:'flex',gap:'28px',alignItems:'center'}}>
          <Link href="/protocols" className="nav-link">Protocols</Link>
          <Link href="/how-it-works" className="nav-link">How It Works</Link>
          <Link href="/pricing" className="nav-link">Pricing</Link>
          <Link className="nav-btn" href="/intake">Begin Intake</Link>
        </div>
      </nav>

      {/* BREADCRUMB */}
      <div style={{padding:'16px 56px',background:'#fff',borderBottom:'1px solid #dde6ed'}}>
        <div style={{maxWidth:'1200px',margin:'0 auto',display:'flex',alignItems:'center',gap:'8px'}}>
          <Link href="/" style={{fontSize:'13px',color:'#7a9bb0',textDecoration:'none'}}>Home</Link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#dde6ed" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          <span style={{fontSize:'13px',color:'#0d2137',fontWeight:500}}>Privacy Policy</span>
        </div>
      </div>

      {/* HERO */}
      <div style={{background:'#0d2137'}}>
        <div className="hero-pad" style={{maxWidth:'800px',margin:'0 auto',padding:'64px 56px 52px'}}>
          <h1 className="s" style={{fontSize:'50px',fontWeight:300,lineHeight:1.05,color:'#fff',marginBottom:'14px'}}>Privacy Policy</h1>
          <p style={{fontSize:'14px',color:'rgba(255,255,255,.38)',lineHeight:1.7}}>Last updated: January 15, 2026 &nbsp;·&nbsp; Effective: January 15, 2026</p>
        </div>
      </div>

      {/* BODY */}
      <div className="legal-body" style={{display:'grid',gridTemplateColumns:'220px 1fr',gap:'56px',maxWidth:'1080px',margin:'0 auto',padding:'64px 56px 96px',alignItems:'start'}}>
        {/* TOC sidebar */}
        <div className="toc-sidebar" style={{position:'sticky',top:'84px'}}>
          <div style={{fontSize:'11px',fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase',color:'#b3c5d2',marginBottom:'12px'}}>On this page</div>
          <a href="#overview" className="toc-link">Overview</a>
          <a href="#information" className="toc-link">Information we collect</a>
          <a href="#use" className="toc-link">How we use it</a>
          <a href="#sharing" className="toc-link">Sharing &amp; disclosure</a>
          <a href="#health" className="toc-link">Health information</a>
          <a href="#cookies" className="toc-link">Cookies</a>
          <a href="#retention" className="toc-link">Data retention</a>
          <a href="#rights" className="toc-link">Your rights</a>
          <a href="#security" className="toc-link">Security</a>
          <a href="#contact" className="toc-link">Contact us</a>
          <div style={{marginTop:'24px',paddingTop:'20px',borderTop:'1px solid #dde6ed'}}>
            <div style={{fontSize:'11px',fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase',color:'#b3c5d2',marginBottom:'12px'}}>Related</div>
            <Link href="/terms" className="toc-link">Terms of Service</Link>
            <Link href="/hipaa" className="toc-link">HIPAA Notice</Link>
            <Link href="/medical-consent" className="toc-link">Medical Consent</Link>
          </div>
        </div>

        {/* Prose */}
        <div className="prose">
          <div id="overview" style={{background:'#f7f9fb',border:'1px solid #dde6ed',borderLeft:'3px solid #0f9d8c',borderRadius:'0 8px 8px 0',padding:'20px 24px',marginBottom:'32px'}}>
            <p style={{margin:0,fontSize:'13px',color:'#3d5a73',lineHeight:1.7}}><strong style={{color:'#0d2137'}}>Summary:</strong> Pepvori collects personal and health information to provide physician-guided peptide therapy services. We do not sell your data. Health information is handled in compliance with HIPAA. You may request access, correction, or deletion of your data at any time.</p>
          </div>

          <h2>1. Overview</h2>
          <p>Pepvori Health, Inc. (&quot;Pepvori,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the Pepvori platform and related services, including our website, patient portal, and telehealth coordination services. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you interact with our services.</p>
          <p>By using Pepvori&apos;s services, you agree to the collection and use of information in accordance with this policy. If you do not agree, please do not use our services.</p>

          <h2 id="information">2. Information we collect</h2>
          <h3>Information you provide directly</h3>
          <ul>
            <li><strong>Account information:</strong> Name, email address, date of birth, and password when you create an account.</li>
            <li><strong>Intake information:</strong> Health history, goals, medications, lifestyle factors, and other information you submit during the intake assessment.</li>
            <li><strong>Payment information:</strong> Billing address and payment card details, processed securely via our payment processor (Stripe). We do not store full card numbers.</li>
            <li><strong>Communications:</strong> Messages you send to our care team or through the patient portal.</li>
          </ul>
          <h3>Information collected automatically</h3>
          <ul>
            <li><strong>Usage data:</strong> Pages visited, features used, time spent, and actions taken within the platform.</li>
            <li><strong>Device information:</strong> Browser type, operating system, IP address, and device identifiers.</li>
            <li><strong>Cookies and tracking:</strong> See the Cookies section below.</li>
          </ul>

          <h2 id="use">3. How we use your information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, operate, and improve our services</li>
            <li>Facilitate physician consultations and prescription processing</li>
            <li>Process payments and manage your membership</li>
            <li>Send you transactional communications (shipment updates, appointment reminders)</li>
            <li>Respond to your inquiries and support requests</li>
            <li>Comply with legal and regulatory obligations</li>
            <li>Detect and prevent fraud or misuse</li>
          </ul>
          <p>We do not use your health information for marketing purposes or share it with advertisers.</p>

          <h2 id="sharing">4. Sharing &amp; disclosure</h2>
          <p>We do not sell your personal information. We may share your information only in the following circumstances:</p>
          <h3>Independent physicians</h3>
          <p>Your intake information and health data is shared with your assigned independent licensed physician for the purpose of clinical review, consultation, and prescribing. These physicians are subject to their own HIPAA obligations and professional standards.</p>
          <h3>Service providers</h3>
          <p>We work with trusted third-party vendors (payment processors, pharmacy partners, hosting providers, analytics services) who are bound by data processing agreements and may only use your information to provide services to Pepvori.</p>
          <h3>Legal requirements</h3>
          <p>We may disclose your information if required to do so by law, court order, or governmental authority, or if we believe in good faith that such disclosure is necessary to protect rights, safety, or property.</p>

          <h2 id="health">5. Health information</h2>
          <p>Pepvori handles your health and medical information with heightened care. To the extent that Pepvori functions as a Business Associate under HIPAA, your Protected Health Information (PHI) is handled in accordance with our <Link href="/hipaa">HIPAA Notice of Privacy Practices</Link>.</p>
          <p>Your health information is used solely to facilitate your care and is never sold or shared for advertising purposes.</p>

          <h2 id="cookies">6. Cookies &amp; tracking</h2>
          <p>We use cookies and similar technologies to:</p>
          <ul>
            <li>Keep you logged in to the patient portal</li>
            <li>Remember your preferences</li>
            <li>Analyze platform usage via aggregated analytics (e.g., page views, feature adoption)</li>
          </ul>
          <p>You can disable cookies through your browser settings, but some features of the platform may not function properly as a result. We do not use third-party advertising cookies or sell data to ad networks.</p>

          <h2 id="retention">7. Data retention</h2>
          <p>We retain your personal information for as long as your account is active or as needed to provide services. Medical records and health information are retained for a minimum of seven (7) years following your last interaction, as required by applicable law. You may request deletion of non-medical data at any time (see Your Rights below).</p>

          <h2 id="rights">8. Your rights</h2>
          <p>Depending on your location, you may have the following rights regarding your personal information:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal retention requirements)</li>
            <li><strong>Portability:</strong> Request your data in a structured, machine-readable format</li>
            <li><strong>Opt-out:</strong> Opt out of non-essential communications at any time</li>
          </ul>
          <p>To exercise any of these rights, contact us at <a href="mailto:privacy@pepvori.com">privacy@pepvori.com</a> or through our <Link href="/contact">contact page</Link>.</p>

          <h2 id="security">9. Security</h2>
          <p>We implement industry-standard security measures including encryption in transit (TLS 1.3), encryption at rest for health data, role-based access controls, and regular security audits. No method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
          <p>If you believe your account has been compromised, please contact us immediately at <a href="mailto:security@pepvori.com">security@pepvori.com</a>.</p>

          <h2 id="contact">10. Contact us</h2>
          <p>If you have questions about this Privacy Policy or how we handle your data, please contact us:</p>
          <div style={{background:'#f7f9fb',border:'1px solid #dde6ed',borderRadius:'8px',padding:'20px 24px',marginTop:'8px'}}>
            <p style={{marginBottom:'4px'}}><strong>Pepvori Health, Inc.</strong></p>
            <p style={{marginBottom:'4px'}}>Privacy inquiries: <a href="mailto:privacy@pepvori.com">privacy@pepvori.com</a></p>
            <p style={{margin:0}}>Or via our <Link href="/contact">contact form</Link> — select &quot;General inquiry&quot; as the topic.</p>
          </div>

          <div style={{marginTop:'40px',paddingTop:'32px',borderTop:'1px solid #dde6ed',display:'flex',gap:'12px',flexWrap:'wrap'}}>
            <Link href="/terms" style={{display:'inline-flex',alignItems:'center',gap:'6px',background:'#f7f9fb',border:'1px solid #dde6ed',borderRadius:'6px',padding:'10px 16px',fontSize:'13px',color:'#3d5a73',textDecoration:'none'}}>Terms of Service →</Link>
            <Link href="/hipaa" style={{display:'inline-flex',alignItems:'center',gap:'6px',background:'#f7f9fb',border:'1px solid #dde6ed',borderRadius:'6px',padding:'10px 16px',fontSize:'13px',color:'#3d5a73',textDecoration:'none'}}>HIPAA Notice →</Link>
            <Link href="/medical-consent" style={{display:'inline-flex',alignItems:'center',gap:'6px',background:'#f7f9fb',border:'1px solid #dde6ed',borderRadius:'6px',padding:'10px 16px',fontSize:'13px',color:'#3d5a73',textDecoration:'none'}}>Medical Consent →</Link>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{background:'#09192a',padding:'60px 56px 40px'}}>
        <div className="footer-grid" style={{display:'grid',gridTemplateColumns:'1.4fr 1fr 1fr 1fr',gap:'44px',marginBottom:'40px'}}>
          <div>
            <Link href="/" style={{textDecoration:'none'}}><div className="s" style={{fontSize:'20px',fontWeight:600,letterSpacing:'0.06em',textTransform:'uppercase',color:'#fff',marginBottom:'12px'}}>PEP<span style={{color:'#0f9d8c'}}>VORI</span></div></Link>
            <p style={{fontSize:'13px',color:'rgba(255,255,255,.3)',lineHeight:1.8,maxWidth:'200px'}}>Physician-guided peptide therapy. Personalized protocols built around your biology.</p>
          </div>
          <div>
            <div style={{fontSize:'10px',fontWeight:600,letterSpacing:'0.12em',textTransform:'uppercase',color:'rgba(255,255,255,.26)',marginBottom:'14px'}}>Protocols</div>
            <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
              <Link href="/protocols/recovery" style={{color:'rgba(255,255,255,.42)',fontSize:'13px'}}>Recovery &amp; Repair</Link>
              <Link href="/protocols/growth" style={{color:'rgba(255,255,255,.42)',fontSize:'13px'}}>Growth &amp; Strength</Link>
              <Link href="/protocols/longevity" style={{color:'rgba(255,255,255,.42)',fontSize:'13px'}}>Longevity Protocol</Link>
              <Link href="/protocols/sleep" style={{color:'rgba(255,255,255,.42)',fontSize:'13px'}}>Focus &amp; Sleep</Link>
            </div>
          </div>
          <div>
            <div style={{fontSize:'10px',fontWeight:600,letterSpacing:'0.12em',textTransform:'uppercase',color:'rgba(255,255,255,.26)',marginBottom:'14px'}}>Company</div>
            <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
              <Link href="/about" style={{color:'rgba(255,255,255,.42)',fontSize:'13px'}}>About</Link>
              <Link href="/physicians" style={{color:'rgba(255,255,255,.42)',fontSize:'13px'}}>Our Physicians</Link>
              <span style={{color:'rgba(255,255,255,.2)',fontSize:'13px',cursor:'default'}}>Journal</span>
              <Link href="/contact" style={{color:'rgba(255,255,255,.42)',fontSize:'13px'}}>Contact</Link>
            </div>
          </div>
          <div>
            <div style={{fontSize:'10px',fontWeight:600,letterSpacing:'0.12em',textTransform:'uppercase',color:'rgba(255,255,255,.26)',marginBottom:'14px'}}>Legal</div>
            <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
              <Link href="/privacy" style={{color:'#0f9d8c',fontSize:'13px',fontWeight:500}}>Privacy Policy</Link>
              <Link href="/terms" style={{color:'rgba(255,255,255,.42)',fontSize:'13px'}}>Terms of Service</Link>
              <Link href="/medical-consent" style={{color:'rgba(255,255,255,.42)',fontSize:'13px'}}>Medical Consent</Link>
              <Link href="/hipaa" style={{color:'rgba(255,255,255,.42)',fontSize:'13px'}}>HIPAA Notice</Link>
            </div>
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',paddingTop:'22px',borderTop:'1px solid rgba(255,255,255,.07)',fontSize:'12px',color:'rgba(255,255,255,.2)',flexWrap:'wrap',gap:'8px'}}>
          <span>© 2026 Pepvori. All rights reserved.</span>
          <span>Precision peptide therapy, delivered.</span>
        </div>
        <div style={{fontSize:'11px',color:'rgba(255,255,255,.14)',maxWidth:'700px',marginTop:'16px',lineHeight:1.7,paddingTop:'16px',borderTop:'1px solid rgba(255,255,255,.05)'}}>* Compounded medications are not FDA-approved. Prescriptions issued only after consultation with an independent licensed physician. Results may vary. All medical care provided by independent licensed providers.</div>
      </footer>
    </>
  )
}
