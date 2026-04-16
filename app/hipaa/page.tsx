import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HIPAA Notice of Privacy Practices — Pepvori',
  description: 'Pepvori HIPAA Notice — how we use and protect your Protected Health Information.',
}

export default function HipaaPage() {
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
          <Link className="nav-btn" href="/intake">Begin Intake</Link>
        </div>
      </nav>

      <div style={{padding:'16px 56px',background:'#fff',borderBottom:'1px solid #dde6ed'}}>
        <div style={{maxWidth:'1200px',margin:'0 auto',display:'flex',alignItems:'center',gap:'8px'}}>
          <Link href="/" style={{fontSize:'13px',color:'#7a9bb0',textDecoration:'none'}}>Home</Link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#dde6ed" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          <span style={{fontSize:'13px',color:'#0d2137',fontWeight:500}}>HIPAA Notice</span>
        </div>
      </div>

      <div style={{background:'#0d2137'}}>
        <div className="hero-pad" style={{maxWidth:'800px',margin:'0 auto',padding:'64px 56px 52px'}}>
          <h1 className="s" style={{fontSize:'50px',fontWeight:300,lineHeight:1.05,color:'#fff',marginBottom:'14px'}}>HIPAA Notice of<br/><em style={{color:'#b3e0db'}}>Privacy Practices</em></h1>
          <p style={{fontSize:'14px',color:'rgba(255,255,255,.38)',lineHeight:1.7}}>Last updated: January 15, 2026 &nbsp;·&nbsp; Effective: January 15, 2026</p>
        </div>
      </div>

      <div className="legal-body" style={{display:'grid',gridTemplateColumns:'220px 1fr',gap:'56px',maxWidth:'1080px',margin:'0 auto',padding:'64px 56px 96px',alignItems:'start'}}>
        <div className="toc-sidebar" style={{position:'sticky',top:'84px'}}>
          <div style={{fontSize:'11px',fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase',color:'#b3c5d2',marginBottom:'12px'}}>On this page</div>
          <a href="#overview" className="toc-link">Overview</a>
          <a href="#phi" className="toc-link">Protected health info</a>
          <a href="#uses" className="toc-link">How we use PHI</a>
          <a href="#disclosures" className="toc-link">Disclosures</a>
          <a href="#rights" className="toc-link">Your rights</a>
          <a href="#obligations" className="toc-link">Our obligations</a>
          <a href="#breach" className="toc-link">Breach notification</a>
          <a href="#complaints" className="toc-link">Complaints</a>
          <a href="#contact" className="toc-link">Contact</a>
          <div style={{marginTop:'24px',paddingTop:'20px',borderTop:'1px solid #dde6ed'}}>
            <div style={{fontSize:'11px',fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase',color:'#b3c5d2',marginBottom:'12px'}}>Related</div>
            <Link href="/privacy" className="toc-link">Privacy Policy</Link>
            <Link href="/terms" className="toc-link">Terms of Service</Link>
            <Link href="/medical-consent" className="toc-link">Medical Consent</Link>
          </div>
        </div>

        <div className="prose">
          <div id="overview" style={{background:'#f7f9fb',border:'1px solid #dde6ed',borderLeft:'3px solid #0f9d8c',borderRadius:'0 8px 8px 0',padding:'20px 24px',marginBottom:'32px'}}>
            <p style={{margin:0,fontSize:'13px',color:'#3d5a73',lineHeight:1.7}}><strong style={{color:'#0d2137'}}>Summary:</strong> This notice describes how your Protected Health Information (PHI) may be used and disclosed, and how you can access it. We are required by law to maintain the privacy of your PHI and to provide you with this notice. Your PHI will never be sold to third parties or used for advertising.</p>
          </div>

          <h2 id="phi">1. What is Protected Health Information?</h2>
          <p>Protected Health Information (PHI) is information about you — including demographic data — that relates to your past, present, or future physical or mental health or condition, the provision of healthcare to you, or the past, present, or future payment for the provision of healthcare to you, and that identifies you or for which there is a reasonable basis to believe it can be used to identify you.</p>
          <p>To the extent Pepvori functions as a Business Associate of covered healthcare providers (the independent licensed physicians in our network), Pepvori handles PHI in accordance with HIPAA and applicable Business Associate Agreement obligations.</p>

          <h2 id="uses">2. How we use your PHI</h2>
          <h3>Treatment</h3>
          <p>We use and disclose PHI for treatment purposes — for example, sharing your intake information with your assigned physician so they can evaluate your health status and determine whether a protocol is appropriate for you.</p>
          <h3>Payment</h3>
          <p>We may use and disclose PHI in connection with payment activities, including billing for membership and medications, processing insurance claims if applicable, and verifying coverage.</p>
          <h3>Healthcare operations</h3>
          <p>We may use and disclose PHI for our internal healthcare operations, including quality assessment, training, compliance activities, and improving our services.</p>

          <h2 id="disclosures">3. Disclosures</h2>
          <p>We may disclose your PHI in the following circumstances without your specific authorization:</p>
          <ul>
            <li><strong>As required by law:</strong> When required by federal, state, or local law</li>
            <li><strong>Public health activities:</strong> To authorized public health authorities for disease reporting, injury, or disability tracking</li>
            <li><strong>Law enforcement:</strong> In response to a court order, warrant, or other lawful process</li>
            <li><strong>Health oversight:</strong> To government agencies for audits, investigations, or licensure inspections</li>
            <li><strong>Serious threat:</strong> To prevent or lessen a serious and imminent threat to a person or the public</li>
          </ul>
          <p>All other disclosures of your PHI require your written authorization, which you may revoke at any time by contacting us in writing.</p>

          <h2 id="rights">4. Your rights regarding your PHI</h2>
          <h3>Right to access</h3>
          <p>You have the right to inspect and obtain a copy of your PHI that we maintain, with limited exceptions. Requests may be submitted in writing to our Privacy Officer.</p>
          <h3>Right to amend</h3>
          <p>You have the right to request an amendment to your PHI if you believe it is incorrect or incomplete. We may deny the request under certain circumstances, and will explain the reason in writing.</p>
          <h3>Right to an accounting of disclosures</h3>
          <p>You have the right to receive a list of certain disclosures we have made of your PHI. This does not include disclosures for treatment, payment, or healthcare operations.</p>
          <h3>Right to request restrictions</h3>
          <p>You have the right to request restrictions on certain uses and disclosures of your PHI. We are not required to agree to all requested restrictions, but will comply with any restriction you request regarding disclosure to a health plan for payment or healthcare operations when you have paid for the service out-of-pocket.</p>
          <h3>Right to confidential communications</h3>
          <p>You have the right to request that we communicate with you about your PHI in a specific way or at a specific location. We will accommodate reasonable requests.</p>
          <h3>Right to a paper copy</h3>
          <p>You have the right to a paper copy of this notice upon request, even if you have agreed to receive it electronically.</p>

          <h2 id="obligations">5. Our obligations</h2>
          <p>Pepvori is required to:</p>
          <ul>
            <li>Maintain the privacy of your PHI</li>
            <li>Provide you with notice of our legal duties and privacy practices with respect to PHI</li>
            <li>Abide by the terms of the notice currently in effect</li>
            <li>Notify you following a breach of unsecured PHI</li>
          </ul>
          <p>We reserve the right to change our privacy practices and to make the new practices effective for all PHI we maintain. We will post the revised notice on our website and make it available upon request.</p>

          <h2 id="breach">6. Breach notification</h2>
          <p>In the event of a breach of unsecured PHI, we will notify affected individuals without unreasonable delay and within 60 days of discovery. Notification will include a description of the breach, the types of information involved, steps you should take, what we are doing to investigate and mitigate the breach, and contact information for further questions.</p>

          <h2 id="complaints">7. Complaints</h2>
          <p>If you believe your privacy rights have been violated, you may file a complaint with Pepvori or with the U.S. Department of Health and Human Services Office for Civil Rights. To file a complaint with Pepvori, contact our Privacy Officer in writing. We will not retaliate against you for filing a complaint.</p>
          <p><strong>U.S. Department of Health and Human Services:</strong><br/>200 Independence Avenue, S.W., Washington, D.C. 20201 | <a href="https://www.hhs.gov/hipaa" target="_blank" rel="noreferrer">hhs.gov/hipaa</a></p>

          <h2 id="contact">8. Contact our Privacy Officer</h2>
          <p>For questions about this notice or to exercise your rights, please contact:</p>
          <div style={{background:'#f7f9fb',border:'1px solid #dde6ed',borderRadius:'8px',padding:'20px 24px',marginTop:'8px'}}>
            <p style={{marginBottom:'4px'}}><strong>Privacy Officer, Pepvori Health, Inc.</strong></p>
            <p style={{marginBottom:'4px'}}>Email: <a href="mailto:privacy@pepvori.com">privacy@pepvori.com</a></p>
            <p style={{margin:0}}>Or via our <Link href="/contact">contact form</Link> — select &quot;General inquiry.&quot;</p>
          </div>

          <div style={{marginTop:'40px',paddingTop:'32px',borderTop:'1px solid #dde6ed',display:'flex',gap:'12px',flexWrap:'wrap'}}>
            <Link href="/privacy" style={{display:'inline-flex',alignItems:'center',gap:'6px',background:'#f7f9fb',border:'1px solid #dde6ed',borderRadius:'6px',padding:'10px 16px',fontSize:'13px',color:'#3d5a73',textDecoration:'none'}}>Privacy Policy →</Link>
            <Link href="/terms" style={{display:'inline-flex',alignItems:'center',gap:'6px',background:'#f7f9fb',border:'1px solid #dde6ed',borderRadius:'6px',padding:'10px 16px',fontSize:'13px',color:'#3d5a73',textDecoration:'none'}}>Terms of Service →</Link>
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
              <Link href="/terms" style={{color:'rgba(255,255,255,.42)',fontSize:'13px'}}>Terms of Service</Link>
              <Link href="/medical-consent" style={{color:'rgba(255,255,255,.42)',fontSize:'13px'}}>Medical Consent</Link>
              <Link href="/hipaa" style={{color:'#0f9d8c',fontSize:'13px',fontWeight:500}}>HIPAA Notice</Link>
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
