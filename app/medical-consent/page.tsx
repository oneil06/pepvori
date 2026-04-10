'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Medical Consent — Pepvori',
  description: 'Pepvori Medical Consent — your rights and what you are consenting to when you use Pepvori services.',
}

export default function MedicalConsentPage() {
  const router = useRouter()
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
          <button className="nav-btn" onClick={() => router.push('/intake')}>Begin Intake</button>
        </div>
      </nav>

      <div style={{padding:'16px 56px',background:'#fff',borderBottom:'1px solid #dde6ed'}}>
        <div style={{maxWidth:'1200px',margin:'0 auto',display:'flex',alignItems:'center',gap:'8px'}}>
          <Link href="/" style={{fontSize:'13px',color:'#7a9bb0',textDecoration:'none'}}>Home</Link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#dde6ed" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          <span style={{fontSize:'13px',color:'#0d2137',fontWeight:500}}>Medical Consent</span>
        </div>
      </div>

      <div style={{background:'#0d2137'}}>
        <div className="hero-pad" style={{maxWidth:'800px',margin:'0 auto',padding:'64px 56px 52px'}}>
          <h1 className="s" style={{fontSize:'50px',fontWeight:300,lineHeight:1.05,color:'#fff',marginBottom:'14px'}}>Medical Consent</h1>
          <p style={{fontSize:'14px',color:'rgba(255,255,255,.38)',lineHeight:1.7}}>Last updated: January 15, 2026 &nbsp;·&nbsp; Effective: January 15, 2026</p>
        </div>
      </div>

      <div className="legal-body" style={{display:'grid',gridTemplateColumns:'220px 1fr',gap:'56px',maxWidth:'1080px',margin:'0 auto',padding:'64px 56px 96px',alignItems:'start'}}>
        <div className="toc-sidebar" style={{position:'sticky',top:'84px'}}>
          <div style={{fontSize:'11px',fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase',color:'#b3c5d2',marginBottom:'12px'}}>On this page</div>
          <a href="#overview" className="toc-link">Overview</a>
          <a href="#telehealth" className="toc-link">Telehealth consent</a>
          <a href="#treatment" className="toc-link">Treatment consent</a>
          <a href="#risks" className="toc-link">Risks &amp; alternatives</a>
          <a href="#compounded" className="toc-link">Compounded medications</a>
          <a href="#voluntary" className="toc-link">Voluntary participation</a>
          <a href="#records" className="toc-link">Medical records</a>
          <a href="#withdrawal" className="toc-link">Right to withdraw</a>
          <a href="#contact" className="toc-link">Questions</a>
          <div style={{marginTop:'24px',paddingTop:'20px',borderTop:'1px solid #dde6ed'}}>
            <div style={{fontSize:'11px',fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase',color:'#b3c5d2',marginBottom:'12px'}}>Related</div>
            <Link href="/privacy" className="toc-link">Privacy Policy</Link>
            <Link href="/hipaa" className="toc-link">HIPAA Notice</Link>
            <Link href="/terms" className="toc-link">Terms of Service</Link>
          </div>
        </div>

        <div className="prose">
          <div id="overview" style={{background:'#f7f9fb',border:'1px solid #dde6ed',borderLeft:'3px solid #0f9d8c',borderRadius:'0 8px 8px 0',padding:'20px 24px',marginBottom:'32px'}}>
            <p style={{margin:0,fontSize:'13px',color:'#3d5a73',lineHeight:1.7}}><strong style={{color:'#0d2137'}}>Summary:</strong> This document explains your rights and what you are consenting to when you use Pepvori&apos;s services. You have the right to ask questions, refuse treatment, and withdraw at any time. All clinical care is provided by independent licensed physicians — not Pepvori.</p>
          </div>

          <h2 id="telehealth">1. Consent to telehealth services</h2>
          <p>By completing your intake and scheduling a consultation, you consent to receiving healthcare services via telehealth (remote video or asynchronous messaging). You understand that:</p>
          <ul>
            <li>Telehealth involves the delivery of healthcare services using electronic communications and does not involve an in-person examination</li>
            <li>Your physician may determine that telehealth is not appropriate for your specific situation and may refer you to an in-person provider</li>
            <li>The quality and completeness of care may differ from in-person evaluation</li>
            <li>Technical failures may interrupt or prevent a consultation from occurring</li>
            <li>All telehealth sessions are conducted by independent licensed physicians, not Pepvori employees</li>
          </ul>

          <h2 id="treatment">2. Consent to treatment</h2>
          <p>If your assigned physician determines that peptide therapy is appropriate, you consent to:</p>
          <ul>
            <li>Receiving a prescription for one or more compounded peptide medications</li>
            <li>Self-administration of medications as instructed (which may include subcutaneous injections, oral capsules, or nasal sprays depending on your protocol)</li>
            <li>Ongoing physician monitoring through portal check-ins and follow-up consultations</li>
            <li>Your physician sharing relevant clinical information with Pepvori&apos;s care coordination team for logistics purposes</li>
          </ul>
          <p>You understand that no prescription will be issued without your physician&apos;s independent clinical judgment, and that you may decline any recommended treatment at any time.</p>

          <h2 id="risks">3. Risks &amp; alternatives</h2>
          <p>You acknowledge that peptide therapy, like all medical treatments, carries potential risks including but not limited to:</p>
          <ul>
            <li>Injection site reactions (redness, swelling, bruising)</li>
            <li>Nausea, fatigue, or other systemic effects depending on the specific peptide</li>
            <li>Interactions with existing medications or conditions</li>
            <li>Unknown long-term effects, as research on some peptides is still evolving</li>
          </ul>
          <p>Your physician will discuss specific risks and alternatives relevant to your protocol during your consultation. You are encouraged to ask questions and disclose all current medications and health conditions during your intake and consultation.</p>

          <h2 id="compounded">4. Compounded medications</h2>
          <p>You understand and acknowledge that:</p>
          <ul>
            <li>Compounded medications are prepared by licensed compounding pharmacies and are not FDA-approved as finished drug products</li>
            <li>Compounding pharmacies operate under state pharmacy board regulation and, where applicable, comply with USP standards</li>
            <li>The safety, efficacy, and quality of compounded medications are not evaluated by the FDA in the same manner as commercially manufactured drugs</li>
            <li>You have been offered the opportunity to ask questions about your specific medications prior to use</li>
          </ul>

          <h2 id="voluntary">5. Voluntary participation</h2>
          <p>Your participation in Pepvori&apos;s program is entirely voluntary. You are under no obligation to proceed with any recommended treatment. Refusing treatment will not affect your ability to continue using the platform for informational purposes, and you may cancel your membership at any time per our <Link href="/terms">Terms of Service</Link>.</p>

          <h2 id="records">6. Medical records</h2>
          <p>You consent to your independent physician creating, maintaining, and retaining medical records related to your care. These records are subject to your rights under HIPAA and applicable state law. You may request a copy of your records at any time by contacting your physician&apos;s office or our care team.</p>
          <p>Records are retained for a minimum of seven (7) years following your last treatment, or longer where required by state law.</p>

          <h2 id="withdrawal">7. Right to withdraw consent</h2>
          <p>You may withdraw this consent at any time by notifying your physician or contacting Pepvori&apos;s care team. Withdrawal does not affect the lawfulness of any treatment or services already provided. Following withdrawal, your physician will discuss any clinical implications with you.</p>

          <h2 id="contact">8. Questions</h2>
          <p>If you have questions about this Medical Consent form before or after completing your intake, please contact us at <a href="mailto:hello@pepvori.com">hello@pepvori.com</a> or through our <Link href="/contact">contact page</Link>. Your physician is also available to answer clinical questions during your consultation.</p>

          <div style={{marginTop:'40px',paddingTop:'32px',borderTop:'1px solid #dde6ed',display:'flex',gap:'12px',flexWrap:'wrap'}}>
            <Link href="/privacy" style={{display:'inline-flex',alignItems:'center',gap:'6px',background:'#f7f9fb',border:'1px solid #dde6ed',borderRadius:'6px',padding:'10px 16px',fontSize:'13px',color:'#3d5a73',textDecoration:'none'}}>Privacy Policy →</Link>
            <Link href="/hipaa" style={{display:'inline-flex',alignItems:'center',gap:'6px',background:'#f7f9fb',border:'1px solid #dde6ed',borderRadius:'6px',padding:'10px 16px',fontSize:'13px',color:'#3d5a73',textDecoration:'none'}}>HIPAA Notice →</Link>
            <Link href="/terms" style={{display:'inline-flex',alignItems:'center',gap:'6px',background:'#f7f9fb',border:'1px solid #dde6ed',borderRadius:'6px',padding:'10px 16px',fontSize:'13px',color:'#3d5a73',textDecoration:'none'}}>Terms of Service →</Link>
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
              <Link href="/medical-consent" style={{color:'#0f9d8c',fontSize:'13px',fontWeight:500}}>Medical Consent</Link>
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
