import { SignIn } from '@clerk/nextjs'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In — Pepvori',
  description: 'Sign in to your Pepvori patient portal.',
}

export default function SignInPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        body{font-family:'Outfit',sans-serif;background:#f0f4f7;color:#0d2137;min-height:100vh;display:flex;flex-direction:column;}
        .s{font-family:'Cormorant Garamond',serif;}
        a{text-decoration:none;color:inherit;}
      `}</style>

      <div style={{display:'flex',minHeight:'100vh'}}>
        {/* LEFT — brand */}
        <div style={{width:'420px',flexShrink:0,background:'#0d2137',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'48px 44px',position:'relative',overflow:'hidden'}}>
          {/* Background texture rings */}
          <div style={{position:'absolute',bottom:'-120px',left:'-120px',width:'480px',height:'480px',borderRadius:'50%',border:'1px solid rgba(255,255,255,.04)',pointerEvents:'none'}}></div>
          <div style={{position:'absolute',bottom:'-60px',left:'-60px',width:'320px',height:'320px',borderRadius:'50%',border:'1px solid rgba(255,255,255,.05)',pointerEvents:'none'}}></div>
          <div style={{position:'absolute',top:'40%',right:'-80px',width:'240px',height:'240px',borderRadius:'50%',background:'rgba(15,157,140,.07)',pointerEvents:'none'}}></div>

          <Link href="/">
            <span className="s" style={{fontSize:'22px',fontWeight:600,letterSpacing:'0.06em',textTransform:'uppercase',color:'#fff'}}>PEP<span style={{color:'#0f9d8c'}}>VORI</span></span>
          </Link>

          <div>
            <div style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'rgba(15,157,140,.12)',border:'1px solid rgba(15,157,140,.2)',borderRadius:'100px',padding:'5px 14px',marginBottom:'28px'}}>
              <div style={{width:'6px',height:'6px',background:'#0f9d8c',borderRadius:'50%'}}></div>
              <span style={{fontSize:'12px',fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase',color:'#0f9d8c'}}>Patient portal</span>
            </div>
            <h2 className="s" style={{fontSize:'48px',fontWeight:300,lineHeight:1.08,color:'#fff',marginBottom:'20px'}}>Your protocol,<br/><em style={{color:'#b3e0db'}}>always with you.</em></h2>
            <p style={{fontSize:'14px',color:'rgba(255,255,255,.38)',lineHeight:1.8,maxWidth:'280px'}}>Track your cycle, review shipments, complete check-ins, and message your care team — all in one place.</p>
          </div>

          {/* Testimonial */}
          <div style={{background:'rgba(255,255,255,.04)',border:'1px solid rgba(255,255,255,.08)',borderRadius:'10px',padding:'20px 22px'}}>
            <p style={{fontSize:'13px',color:'rgba(255,255,255,.5)',lineHeight:1.7,marginBottom:'14px'}}>&quot;Logging in every morning to check my protocol has become part of my routine. The dashboard makes everything feel manageable.&quot;</p>
            <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
              <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'#0f9d8c',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'12px',fontWeight:600,color:'#fff'}}>MR</div>
              <div>
                <div style={{fontSize:'12px',fontWeight:600,color:'rgba(255,255,255,.6)'}}>Marcus R.</div>
                <div style={{fontSize:'11px',color:'rgba(255,255,255,.28)'}}>Accelerate Plan · Day 34</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Clerk SignIn component */}
        <div style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center',padding:'48px 32px',background:'#f0f4f7'}}>
          <div style={{width:'100%',maxWidth:'480px'}}>
            <SignIn
              appearance={{
                elements: {
                  rootBox: { width: '100%' },
                  card: {
                    background: '#fff',
                    border: '1px solid #dde6ed',
                    borderRadius: '12px',
                    boxShadow: 'none',
                    padding: '40px 36px',
                    fontFamily: "'Outfit', sans-serif",
                  },
                  headerTitle: {
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '34px',
                    fontWeight: '400',
                    color: '#0d2137',
                  },
                  headerSubtitle: {
                    fontSize: '14px',
                    color: '#7a9bb0',
                  },
                  formButtonPrimary: {
                    background: '#0f9d8c',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: '600',
                    fontSize: '14px',
                    borderRadius: '6px',
                  },
                  formFieldInput: {
                    border: '1.5px solid #dde6ed',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontFamily: "'Outfit', sans-serif",
                    color: '#0d2137',
                  },
                  footerActionLink: { color: '#0f9d8c', fontWeight: '600' },
                },
              }}
              forceRedirectUrl="/dashboard"
              signUpUrl="/sign-up"
            />
            <p style={{textAlign:'center',fontSize:'12px',color:'#b3c5d2',marginTop:'20px',lineHeight:1.7}}>
              By signing in you agree to our <Link href="/terms" style={{color:'#7a9bb0'}}>Terms of Service</Link> and <Link href="/privacy" style={{color:'#7a9bb0'}}>Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
