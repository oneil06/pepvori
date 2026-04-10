'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Our Physicians — Pepvori',
  description: 'Every Pepvori prescription is written by an independent, licensed physician — never an algorithm.',
}

export default function PhysiciansPage() {
  const router = useRouter()
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        body{font-family:'Outfit',sans-serif;background:#fff;color:#0d2137;overflow-x:hidden;font-size:14px;}
        .s{font-family:'Cormorant Garamond',serif;}
        a{text-decoration:none;}
        .nav-link{color:#3d5a73;font-size:13px;font-weight:500;letter-spacing:0.04em;position:relative;padding-bottom:2px;transition:color .2s;}
        .nav-link::after{content:'';position:absolute;bottom:0;left:0;width:0;height:1.5px;background:#0f9d8c;border-radius:2px;transition:width .35s ease-in-out;}
        .nav-link:hover{color:#0d2137;}.nav-link:hover::after{width:100%;}
        .nav-btn{background:#0f9d8c;color:#fff;border:none;padding:9px 22px;border-radius:4px;font-size:13px;font-weight:600;cursor:pointer;transition:background .4s;}
        .nav-btn:hover{background:#0b8578;}
        .physician-card{background:#fff;border:1px solid #dde6ed;border-radius:10px;overflow:hidden;transition:border-color .3s;}
        .physician-card:hover{border-color:#b3e0db;box-shadow:0 12px 40px rgba(13,33,55,.08);}
        .credential-tag{display:inline-flex;align-items:center;padding:3px 10px;background:#e6f5f3;border:1px solid #b3e0db;border-radius:100px;font-size:11px;font-weight:600;color:#0b8578;}
        .stat-pill{background:#f7f9fb;border:1px solid #dde6ed;border-radius:8px;padding:14px 16px;text-align:center;}
        @keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
        .fade-up{animation:fadeUp .6s ease both;}
        .fade-up-2{animation:fadeUp .6s .1s ease both;}
        .fade-up-3{animation:fadeUp .6s .2s ease both;}
        @media(max-width:768px){
          nav{padding:0 20px !important;}
          .hero-pad{padding:72px 24px 56px !important;}
          .physicians-grid{grid-template-columns:1fr !important;}
          .stats-row{grid-template-columns:1fr 1fr !important;}
          footer{padding:48px 24px 32px !important;}
          .footer-grid{grid-template-columns:1fr 1fr !important;gap:32px !important;}
        }
      `}</style>

      {/* NAV */}
      <nav style={{position:'sticky',top:0,zIndex:200,height:'64px',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 56px',background:'rgba(255,255,255,.97)',borderBottom:'1px solid #dde6ed',backdropFilter:'blur(16px)'}}>
        <Link href="/">
          <span className="s" style={{fontSize:'22px',fontWeight:600,letterSpacing:'0.06em',textTransform:'uppercase',color:'#0d2137'}}>PEP<span style={{color:'#0f9d8c'}}>VORI</span></span>
        </Link>
        <div style={{display:'flex',gap:'28px',alignItems:'center'}}>
          <Link href="/protocols" className="nav-link">Protocols</Link>
          <Link href="/how-it-works" className="nav-link">How It Works</Link>
          <Link href="/pricing" className="nav-link">Pricing</Link>
          <button className="nav-btn" onClick={() => router.push('/intake')}>Begin Intake</button>
        </div>
      </nav>

      {/* BREADCRUMB */}
      <div style={{padding:'16px 56px',background:'#fff',borderBottom:'1px solid #dde6ed'}}>
        <div style={{maxWidth:'1200px',margin:'0 auto',display:'flex',alignItems:'center',gap:'8px'}}>
          <Link href="/about" style={{fontSize:'13px',color:'#7a9bb0',textDecoration:'none',transition:'color .2s'}}>Company</Link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#dde6ed" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          <span style={{fontSize:'13px',color:'#0d2137',fontWeight:500}}>Our Physicians</span>
        </div>
      </div>

      {/* HERO */}
      <div style={{background:'#0d2137'}}>
        <div className="hero-pad" style={{maxWidth:'800px',margin:'0 auto',padding:'80px 56px 72px'}}>
          <div className="fade-up" style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'rgba(15,157,140,.12)',border:'1px solid rgba(15,157,140,.2)',borderRadius:'100px',padding:'5px 14px',marginBottom:'24px'}}>
            <div style={{width:'6px',height:'6px',background:'#0f9d8c',borderRadius:'50%'}}></div>
            <span style={{fontSize:'12px',fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase',color:'#0f9d8c'}}>Independent &amp; board-certified</span>
          </div>
          <h1 className="s fade-up-2" style={{fontSize:'58px',fontWeight:300,letterSpacing:'-0.02em',lineHeight:1.05,color:'#fff',marginBottom:'16px'}}>Meet the physicians<br/><em style={{color:'#b3e0db'}}>behind your protocol.</em></h1>
          <p className="fade-up-3" style={{fontSize:'16px',color:'rgba(255,255,255,.45)',lineHeight:1.8,fontWeight:300,maxWidth:'520px'}}>Every Pepvori prescription is written by an independent, licensed physician — never an algorithm. Our network of specialists brings decades of experience in functional medicine, sports medicine, and longevity.</p>
        </div>
      </div>

      {/* STATS ROW */}
      <div style={{background:'#f7f9fb',borderBottom:'1px solid #dde6ed',padding:'36px 56px'}}>
        <div className="stats-row" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'16px',maxWidth:'1000px',margin:'0 auto'}}>
          <div className="stat-pill">
            <div className="s" style={{fontSize:'36px',fontWeight:400,color:'#0f9d8c',lineHeight:1}}>18+</div>
            <div style={{fontSize:'12px',color:'#7a9bb0',marginTop:'4px'}}>Network physicians</div>
          </div>
          <div className="stat-pill">
            <div className="s" style={{fontSize:'36px',fontWeight:400,color:'#0d2137',lineHeight:1}}>12k+</div>
            <div style={{fontSize:'12px',color:'#7a9bb0',marginTop:'4px'}}>Active patients</div>
          </div>
          <div className="stat-pill">
            <div className="s" style={{fontSize:'36px',fontWeight:400,color:'#0d2137',lineHeight:1}}>4.9</div>
            <div style={{fontSize:'12px',color:'#7a9bb0',marginTop:'4px'}}>Average rating</div>
          </div>
          <div className="stat-pill">
            <div className="s" style={{fontSize:'36px',fontWeight:400,color:'#0d2137',lineHeight:1}}>24h</div>
            <div style={{fontSize:'12px',color:'#7a9bb0',marginTop:'4px'}}>Consultation response</div>
          </div>
        </div>
      </div>

      {/* PHYSICIANS GRID */}
      <div style={{maxWidth:'1120px',margin:'0 auto',padding:'72px 56px 96px'}}>
        <div style={{marginBottom:'48px'}}>
          <h2 className="s" style={{fontSize:'40px',fontWeight:400,color:'#0d2137',marginBottom:'8px'}}>Our physician network</h2>
          <p style={{fontSize:'14px',color:'#7a9bb0',maxWidth:'480px',lineHeight:1.7}}>All physicians are independently licensed, board-certified, and operate within their state scope of practice. Pepvori does not employ physicians — all clinical decisions are made independently.</p>
        </div>
        <div className="physicians-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'24px'}}>

          {/* Dr. Sarah Chen */}
          <div className="physician-card">
            <div style={{height:'200px',background:'linear-gradient(135deg,#0d2137 0%,#0f4a45 100%)',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <div style={{width:'80px',height:'80px',borderRadius:'50%',background:'rgba(15,157,140,.2)',border:'2px solid rgba(15,157,140,.4)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <span className="s" style={{fontSize:'28px',fontWeight:500,color:'#b3e0db'}}>SC</span>
              </div>
            </div>
            <div style={{padding:'24px'}}>
              <div style={{marginBottom:'12px'}}>
                <div style={{fontSize:'17px',fontWeight:600,color:'#0d2137',marginBottom:'2px'}}>Dr. Sarah Chen, MD</div>
                <div style={{fontSize:'13px',color:'#7a9bb0'}}>Functional &amp; Integrative Medicine</div>
              </div>
              <div style={{display:'flex',flexWrap:'wrap',gap:'6px',marginBottom:'16px'}}>
                <span className="credential-tag">Board Certified</span>
                <span className="credential-tag">15 yrs exp.</span>
              </div>
              <p style={{fontSize:'13px',color:'#3d5a73',lineHeight:1.7,marginBottom:'16px'}}>Dr. Chen specializes in hormonal optimization and peptide therapy for recovery and longevity. She trained at Johns Hopkins and brings a data-driven approach to functional medicine.</p>
              <div style={{borderTop:'1px solid #f0f4f7',paddingTop:'14px',display:'flex',gap:'16px'}}>
                <div><div style={{fontSize:'11px',color:'#7a9bb0',marginBottom:'2px'}}>Specialties</div><div style={{fontSize:'12px',fontWeight:500,color:'#0d2137'}}>Recovery · Longevity</div></div>
                <div><div style={{fontSize:'11px',color:'#7a9bb0',marginBottom:'2px'}}>Licensed in</div><div style={{fontSize:'12px',fontWeight:500,color:'#0d2137'}}>CA, NY, TX, FL</div></div>
              </div>
            </div>
          </div>

          {/* Dr. James Okafor */}
          <div className="physician-card">
            <div style={{height:'200px',background:'linear-gradient(135deg,#09192a 0%,#0d3a50 100%)',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <div style={{width:'80px',height:'80px',borderRadius:'50%',background:'rgba(15,157,140,.2)',border:'2px solid rgba(15,157,140,.4)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <span className="s" style={{fontSize:'28px',fontWeight:500,color:'#b3e0db'}}>JO</span>
              </div>
            </div>
            <div style={{padding:'24px'}}>
              <div style={{marginBottom:'12px'}}>
                <div style={{fontSize:'17px',fontWeight:600,color:'#0d2137',marginBottom:'2px'}}>Dr. James Okafor, DO</div>
                <div style={{fontSize:'13px',color:'#7a9bb0'}}>Sports Medicine &amp; Performance</div>
              </div>
              <div style={{display:'flex',flexWrap:'wrap',gap:'6px',marginBottom:'16px'}}>
                <span className="credential-tag">Board Certified</span>
                <span className="credential-tag">12 yrs exp.</span>
              </div>
              <p style={{fontSize:'13px',color:'#3d5a73',lineHeight:1.7,marginBottom:'16px'}}>Dr. Okafor is a former team physician for Division I athletics. His practice focuses on muscle repair, growth optimization, and accelerating recovery timelines for competitive and recreational athletes.</p>
              <div style={{borderTop:'1px solid #f0f4f7',paddingTop:'14px',display:'flex',gap:'16px'}}>
                <div><div style={{fontSize:'11px',color:'#7a9bb0',marginBottom:'2px'}}>Specialties</div><div style={{fontSize:'12px',fontWeight:500,color:'#0d2137'}}>Growth · Recovery</div></div>
                <div><div style={{fontSize:'11px',color:'#7a9bb0',marginBottom:'2px'}}>Licensed in</div><div style={{fontSize:'12px',fontWeight:500,color:'#0d2137'}}>OH, IL, GA, CO</div></div>
              </div>
            </div>
          </div>

          {/* Dr. Priya Nair */}
          <div className="physician-card">
            <div style={{height:'200px',background:'linear-gradient(135deg,#0d2137 0%,#1a3a4a 100%)',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <div style={{width:'80px',height:'80px',borderRadius:'50%',background:'rgba(15,157,140,.2)',border:'2px solid rgba(15,157,140,.4)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <span className="s" style={{fontSize:'28px',fontWeight:500,color:'#b3e0db'}}>PN</span>
              </div>
            </div>
            <div style={{padding:'24px'}}>
              <div style={{marginBottom:'12px'}}>
                <div style={{fontSize:'17px',fontWeight:600,color:'#0d2137',marginBottom:'2px'}}>Dr. Priya Nair, MD</div>
                <div style={{fontSize:'13px',color:'#7a9bb0'}}>Sleep Medicine &amp; Neurology</div>
              </div>
              <div style={{display:'flex',flexWrap:'wrap',gap:'6px',marginBottom:'16px'}}>
                <span className="credential-tag">Board Certified</span>
                <span className="credential-tag">10 yrs exp.</span>
              </div>
              <p style={{fontSize:'13px',color:'#3d5a73',lineHeight:1.7,marginBottom:'16px'}}>Dr. Nair is a double-board certified neurologist and sleep medicine specialist. She leads Pepvori&apos;s Focus &amp; Sleep protocol development, combining neuromodulation research with peptide science.</p>
              <div style={{borderTop:'1px solid #f0f4f7',paddingTop:'14px',display:'flex',gap:'16px'}}>
                <div><div style={{fontSize:'11px',color:'#7a9bb0',marginBottom:'2px'}}>Specialties</div><div style={{fontSize:'12px',fontWeight:500,color:'#0d2137'}}>Sleep · Focus</div></div>
                <div><div style={{fontSize:'11px',color:'#7a9bb0',marginBottom:'2px'}}>Licensed in</div><div style={{fontSize:'12px',fontWeight:500,color:'#0d2137'}}>WA, OR, AZ, NV</div></div>
              </div>
            </div>
          </div>

          {/* Dr. Marcus Webb */}
          <div className="physician-card">
            <div style={{height:'200px',background:'linear-gradient(135deg,#0a2040 0%,#0f3d35 100%)',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <div style={{width:'80px',height:'80px',borderRadius:'50%',background:'rgba(15,157,140,.2)',border:'2px solid rgba(15,157,140,.4)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <span className="s" style={{fontSize:'28px',fontWeight:500,color:'#b3e0db'}}>MW</span>
              </div>
            </div>
            <div style={{padding:'24px'}}>
              <div style={{marginBottom:'12px'}}>
                <div style={{fontSize:'17px',fontWeight:600,color:'#0d2137',marginBottom:'2px'}}>Dr. Marcus Webb, MD</div>
                <div style={{fontSize:'13px',color:'#7a9bb0'}}>Longevity &amp; Anti-Aging Medicine</div>
              </div>
              <div style={{display:'flex',flexWrap:'wrap',gap:'6px',marginBottom:'16px'}}>
                <span className="credential-tag">Board Certified</span>
                <span className="credential-tag">18 yrs exp.</span>
              </div>
              <p style={{fontSize:'13px',color:'#3d5a73',lineHeight:1.7,marginBottom:'16px'}}>Dr. Webb is one of the foremost longevity physicians in the country, having published over 40 peer-reviewed papers on cellular aging and GHK-Cu peptide mechanisms. He leads our Longevity Protocol advisory board.</p>
              <div style={{borderTop:'1px solid #f0f4f7',paddingTop:'14px',display:'flex',gap:'16px'}}>
                <div><div style={{fontSize:'11px',color:'#7a9bb0',marginBottom:'2px'}}>Specialties</div><div style={{fontSize:'12px',fontWeight:500,color:'#0d2137'}}>Longevity · Recovery</div></div>
                <div><div style={{fontSize:'11px',color:'#7a9bb0',marginBottom:'2px'}}>Licensed in</div><div style={{fontSize:'12px',fontWeight:500,color:'#0d2137'}}>MA, CT, PA, NJ</div></div>
              </div>
            </div>
          </div>

          {/* Dr. Elena Vasquez */}
          <div className="physician-card">
            <div style={{height:'200px',background:'linear-gradient(135deg,#0d2137 0%,#173045 100%)',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <div style={{width:'80px',height:'80px',borderRadius:'50%',background:'rgba(15,157,140,.2)',border:'2px solid rgba(15,157,140,.4)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <span className="s" style={{fontSize:'28px',fontWeight:500,color:'#b3e0db'}}>EV</span>
              </div>
            </div>
            <div style={{padding:'24px'}}>
              <div style={{marginBottom:'12px'}}>
                <div style={{fontSize:'17px',fontWeight:600,color:'#0d2137',marginBottom:'2px'}}>Dr. Elena Vasquez, MD</div>
                <div style={{fontSize:'13px',color:'#7a9bb0'}}>Internal Medicine &amp; Endocrinology</div>
              </div>
              <div style={{display:'flex',flexWrap:'wrap',gap:'6px',marginBottom:'16px'}}>
                <span className="credential-tag">Board Certified</span>
                <span className="credential-tag">9 yrs exp.</span>
              </div>
              <p style={{fontSize:'13px',color:'#3d5a73',lineHeight:1.7,marginBottom:'16px'}}>Dr. Vasquez bridges traditional endocrinology with emerging peptide science, with a focus on metabolic optimization and hormonal balance. Her patient-first approach makes complex biology approachable.</p>
              <div style={{borderTop:'1px solid #f0f4f7',paddingTop:'14px',display:'flex',gap:'16px'}}>
                <div><div style={{fontSize:'11px',color:'#7a9bb0',marginBottom:'2px'}}>Specialties</div><div style={{fontSize:'12px',fontWeight:500,color:'#0d2137'}}>Longevity · Growth</div></div>
                <div><div style={{fontSize:'11px',color:'#7a9bb0',marginBottom:'2px'}}>Licensed in</div><div style={{fontSize:'12px',fontWeight:500,color:'#0d2137'}}>TX, FL, NC, VA</div></div>
              </div>
            </div>
          </div>

          {/* Join the network card */}
          <div style={{background:'#f7f9fb',border:'1.5px dashed #dde6ed',borderRadius:'10px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'40px 28px',textAlign:'center',minHeight:'300px'}}>
            <div style={{width:'52px',height:'52px',background:'#e6f5f3',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'16px'}}>
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#0f9d8c" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/></svg>
            </div>
            <div style={{fontSize:'15px',fontWeight:600,color:'#0d2137',marginBottom:'8px'}}>Join our network</div>
            <p style={{fontSize:'13px',color:'#7a9bb0',lineHeight:1.7,marginBottom:'20px'}}>Are you a licensed physician interested in prescribing evidence-based peptide protocols?</p>
            <Link href="/contact" style={{background:'#0f9d8c',color:'#fff',border:'none',padding:'11px 22px',borderRadius:'4px',fontSize:'13px',fontWeight:600,cursor:'pointer',transition:'background .3s'}}>Get in touch →</Link>
          </div>
        </div>
      </div>

      {/* TRUST SECTION */}
      <div style={{background:'#f7f9fb',borderTop:'1px solid #dde6ed',borderBottom:'1px solid #dde6ed',padding:'72px 56px'}}>
        <div style={{maxWidth:'900px',margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:'48px'}}>
            <h2 className="s" style={{fontSize:'40px',fontWeight:400,color:'#0d2137',marginBottom:'8px'}}>How physician oversight works</h2>
            <p style={{fontSize:'14px',color:'#7a9bb0',maxWidth:'480px',margin:'0 auto',lineHeight:1.7}}>Every patient interaction follows a structured clinical process. No protocol is ever started without physician review.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'24px'}}>
            {[
              { num: '1', title: 'Intake review', desc: 'Your health intake is reviewed by a physician within 24 hours. They assess your goals, contraindications, and protocol fit before any prescription is issued.' },
              { num: '2', title: 'Consultation', desc: 'You meet with your assigned physician via secure video or async messaging. They answer questions, adjust dosing, and issue your prescription if appropriate.' },
              { num: '3', title: 'Ongoing check-ins', desc: 'Your physician monitors progress through your portal check-ins and is available via secure message throughout your protocol cycle.' },
            ].map((step) => (
              <div key={step.num} style={{padding:'28px',background:'#fff',border:'1px solid #dde6ed',borderRadius:'8px'}}>
                <div style={{width:'36px',height:'36px',background:'#0d2137',borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'16px'}}>
                  <span style={{fontSize:'16px',fontWeight:700,color:'#0f9d8c'}}>{step.num}</span>
                </div>
                <div style={{fontSize:'15px',fontWeight:600,color:'#0d2137',marginBottom:'8px'}}>{step.title}</div>
                <p style={{fontSize:'13px',color:'#3d5a73',lineHeight:1.7}}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{background:'#0d2137',padding:'80px 48px',textAlign:'center'}}>
        <div style={{maxWidth:'520px',margin:'0 auto'}}>
          <h2 className="s" style={{fontSize:'48px',fontWeight:300,letterSpacing:'-0.02em',lineHeight:1.05,color:'#fff',marginBottom:'16px'}}>Ready to meet your<br/><em style={{color:'#b3e0db'}}>physician?</em></h2>
          <p style={{fontSize:'15px',color:'rgba(255,255,255,.45)',maxWidth:'380px',margin:'0 auto 32px',fontWeight:300,lineHeight:1.8}}>Begin your intake and you&apos;ll be matched with a physician from our network within 24 hours.</p>
          <button style={{background:'#0f9d8c',color:'#fff',border:'none',padding:'14px 36px',borderRadius:'4px',fontSize:'14px',fontWeight:600,cursor:'pointer',transition:'background .4s'}} onClick={() => router.push('/intake')}>Begin Your Assessment</button>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{background:'#09192a',padding:'60px 56px 40px'}}>
        <div className="footer-grid" style={{display:'grid',gridTemplateColumns:'1.4fr 1fr 1fr 1fr',gap:'44px',marginBottom:'40px'}}>
          <div>
            <Link href="/"><div className="s" style={{fontSize:'20px',fontWeight:600,letterSpacing:'0.06em',textTransform:'uppercase',color:'#fff',marginBottom:'12px'}}>PEP<span style={{color:'#0f9d8c'}}>VORI</span></div></Link>
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
              <Link href="/physicians" style={{color:'#0f9d8c',fontSize:'13px',fontWeight:500}}>Our Physicians</Link>
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
