import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service — Pepvori',
  description: 'Pepvori Terms of Service — the agreement governing use of the Pepvori platform and services.',
}

export default function TermsPage() {
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

      <nav style={{position:'sticky',top:0,zIndex:200,height:'64px',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 56px',background:'rgba(255,255,255,.97)',borderBottom:'1px solid #dde6ed',backdropFilter:'blur(16px)'}}>
        <Link href="/" style={{textDecoration:'none'}}>
          <span className="s" style={{fontSize:'22px',fontWeight:600,letterSpacing:'0.06em',textTransform:'uppercase',color:'#0d2137'}}>PEP<span style={{color:'#0f9d8c'}}>VORI</span></span>
        </Link>
        <div style={{display:'flex',gap:'28px',alignItems:'center'}}>
          <Link href="/protocols" className="nav-link">Protocols</Link>
          <Link href="/how-it-works" className="nav-link">How It Works</Link>
          <Link href="/pricing" className="nav-link">Pricing</Link>
          <Link href="/intake"><button className="nav-btn">Begin Intake</button></Link>
        </div>
      </nav>

      <div style={{padding:'16px 56px',background:'#fff',borderBottom:'1px solid #dde6ed'}}>
        <div style={{maxWidth:'1200px',margin:'0 auto',display:'flex',alignItems:'center',gap:'8px'}}>
          <Link href="/" style={{fontSize:'13px',color:'#7a9bb0',textDecoration:'none'}}>Home</Link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#dde6ed" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          <span style={{fontSize:'13px',color:'#0d2137',fontWeight:500}}>Terms of Service</span>
        </div>
      </div>

      <div style={{background:'#0d2137'}}>
        <div className="hero-pad" style={{maxWidth:'800px',margin:'0 auto',padding:'64px 56px 52px'}}>
          <h1 className="s" style={{fontSize:'50px',fontWeight:300,lineHeight:1.05,color:'#fff',marginBottom:'14px'}}>Terms of Service</h1>
          <p style={{fontSize:'14px',color:'rgba(255,255,255,.38)',lineHeight:1.7}}>Last updated: January 15, 2026 &nbsp;·&nbsp; Effective: January 15, 2026</p>
        </div>
      </div>

      <div className="legal-body" style={{display:'grid',gridTemplateColumns:'220px 1fr',gap:'56px',maxWidth:'1080px',margin:'0 auto',padding:'64px 56px 96px',alignItems:'start'}}>
        <div className="toc-sidebar" style={{position:'sticky',top:'84px'}}>
          <div style={{fontSize:'11px',fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase',color:'#b3c5d2',marginBottom:'12px'}}>On this page</div>
          <a href="#acceptance" className="toc-link">Acceptance</a>
          <a href="#services" className="toc-link">Services</a>
          <a href="#eligibility" className="toc-link">Eligibility</a>
          <a href="#accounts" className="toc-link">Accounts</a>
          <a href="#medical" className="toc-link">Medical disclaimer</a>
          <a href="#payments" className="toc-link">Payments &amp; refunds</a>
          <a href="#conduct" className="toc-link">Acceptable use</a>
          <a href="#ip" className="toc-link">Intellectual property</a>
          <a href="#liability" className="toc-link">Limitation of liability</a>
          <a href="#termination" className="toc-link">Termination</a>
          <a href="#governing" className="toc-link">Governing law</a>
          <a href="#contact" className="toc-link">Contact</a>
          <div style={{marginTop:'24px',paddingTop:'20px',borderTop:'1px solid #dde6ed'}}>
            <div style={{fontSize:'11px',fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase',color:'#b3c5d2',marginBottom:'12px'}}>Related</div>
            <Link href="/privacy" className="toc-link">Privacy Policy</Link>
            <Link href="/hipaa" className="toc-link">HIPAA Notice</Link>
            <Link href="/medical-consent" className="toc-link">Medical Consent</Link>
          </div>
        </div>

        <div className="prose">
          <div style={{background:'#f7f9fb',border:'1px solid #dde6ed',borderLeft:'3px solid #0f9d8c',borderRadius:'0 8px 8px 0',padding:'20px 24px',marginBottom:'32px'}}>
            <p style={{margin:0,fontSize:'13px',color:'#3d5a73',lineHeight:1.7}}><strong style={{color:'#0d2137'}}>Summary:</strong> By using Pepvori, you agree to these terms. Pepvori is a platform that facilitates physician-supervised peptide therapy — it is not a pharmacy or medical provider. All prescriptions are issued by independent licensed physicians. Membership fees are billed as described at checkout.</p>
          </div>

          <h2 id="acceptance">1. Acceptance of terms</h2>
          <p>By accessing or using Pepvori&apos;s website, patient portal, or any related services (collectively, the &quot;Services&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, you may not use the Services. These Terms constitute a legally binding agreement between you and Pepvori Health, Inc. (&quot;Pepvori&quot;).</p>

          <h2 id="services">2. Description of services</h2>
          <p>Pepvori is a health technology platform that connects patients with independent licensed physicians for telehealth consultations and, where clinically appropriate, prescriptions for compounded peptide medications. Pepvori also coordinates the dispensing and shipment of those medications through licensed compounding pharmacies.</p>
          <p>Pepvori does not practice medicine, does not employ physicians, and is not a pharmacy. All clinical decisions, including whether to prescribe, are made solely by independent licensed physicians.</p>

          <h2 id="eligibility">3. Eligibility</h2>
          <p>You must be at least 18 years of age and a legal resident of a state where Pepvori&apos;s services are available to use the platform. By creating an account, you represent that you meet these requirements. Services are not available in all states and may be subject to change.</p>

          <h2 id="accounts">4. Accounts &amp; registration</h2>
          <p>You agree to provide accurate and complete information during registration and to keep your account credentials confidential. You are responsible for all activity that occurs under your account. Notify us immediately at <a href="mailto:hello@pepvori.com">hello@pepvori.com</a> if you believe your account has been compromised.</p>
          <p>Pepvori reserves the right to suspend or terminate accounts that violate these Terms or that are used for fraudulent purposes.</p>

          <h2 id="medical">5. Medical disclaimer</h2>
          <p>The content on Pepvori&apos;s platform is for informational purposes only and does not constitute medical advice. Compounded peptide medications are not FDA-approved as finished drug products. All prescribing decisions are made by independent licensed physicians based on individual patient circumstances.</p>
          <p>Results vary. Pepvori does not guarantee any specific health outcome. You should consult your primary care physician before beginning any new treatment program.</p>

          <h2 id="payments">6. Payments &amp; refunds</h2>
          <h3>Membership fees</h3>
          <p>Membership fees are charged at the frequency selected at checkout (monthly or annually). By subscribing, you authorize Pepvori to charge your payment method on a recurring basis until you cancel.</p>
          <h3>Medication costs</h3>
          <p>Prescription medication costs are separate from membership fees and are charged upon shipment. Prices may vary based on protocol and dosing.</p>
          <h3>Refunds</h3>
          <p>Membership fees are non-refundable once a physician consultation has been completed. Medication shipments that have been dispensed cannot be returned or refunded due to regulatory requirements. If you believe you were charged in error, contact <Link href="/contact">our support team</Link> within 14 days.</p>
          <h3>Cancellation</h3>
          <p>You may cancel your membership at any time through your account settings or by contacting support. Cancellation takes effect at the end of your current billing period.</p>

          <h2 id="conduct">7. Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Provide false or misleading health information during your intake or consultations</li>
            <li>Share, transfer, or resell medications obtained through Pepvori</li>
            <li>Use the platform for any unlawful purpose</li>
            <li>Attempt to access other users&apos; accounts or data</li>
            <li>Interfere with or disrupt the platform&apos;s infrastructure</li>
            <li>Use automated tools to access the platform without written consent</li>
          </ul>

          <h2 id="ip">8. Intellectual property</h2>
          <p>All content on the Pepvori platform — including text, graphics, logos, protocol descriptions, and software — is the property of Pepvori Health, Inc. or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without express written permission.</p>

          <h2 id="liability">9. Limitation of liability</h2>
          <p>To the maximum extent permitted by law, Pepvori shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Services, including but not limited to personal injury, health outcomes, or loss of data.</p>
          <p>Pepvori&apos;s total liability for any claim arising under these Terms shall not exceed the amount you paid to Pepvori in the three (3) months preceding the claim.</p>

          <h2 id="termination">10. Termination</h2>
          <p>Pepvori reserves the right to suspend or terminate your access to the Services at any time, with or without notice, for conduct that violates these Terms or that Pepvori determines is harmful to other users, third parties, or the platform. Upon termination, your right to use the Services ceases immediately.</p>

          <h2 id="governing">11. Governing law</h2>
          <p>These Terms are governed by the laws of the State of Delaware, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except where prohibited by law.</p>

          <h2 id="contact">12. Contact</h2>
          <p>For questions about these Terms, please contact us at <a href="mailto:legal@pepvori.com">legal@pepvori.com</a> or through our <Link href="/contact">contact page</Link>.</p>

          <div style={{marginTop:'40px',paddingTop:'32px',borderTop:'1px solid #dde6ed',display:'flex',gap:'12px',flexWrap:'wrap'}}>
            <Link href="/privacy" style={{display:'inline-flex',alignItems:'center',gap:'6px',background:'#f7f9fb',border:'1px solid #dde6ed',borderRadius:'6px',padding:'10px 16px',fontSize:'13px',color:'#3d5a73',textDecoration:'none'}}>Privacy Policy →</Link>
            <Link href="/hipaa" style={{display:'inline-flex',alignItems:'center',gap:'6px',background:'#f7f9fb',border:'1px solid #dde6ed',borderRadius:'6px',padding:'10px 16px',fontSize:'13px',color:'#3d5a73',textDecoration:'none'}}>HIPAA Notice →</Link>
            <Link href="/medical-consent" style={{display:'inline-flex',alignItems:'center',gap:'6px',background:'#f7f9fb',border:'1px solid #dde6ed',borderRadius:'6px',padding:'10px 16px',fontSize:'13px',color:'#3d5a73',textDecoration:'none'}}>Medical Consent →</Link>
          </div>
        </div>
      </div>

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
              <Link href="/privacy" style={{color:'rgba(255,255,255,.42)',fontSize:'13px'}}>Privacy Policy</Link>
              <Link href="/terms" style={{color:'#0f9d8c',fontSize:'13px',fontWeight:500}}>Terms of Service</Link>
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
