'use client'

import { useState } from 'react'
import Link from 'next/link'

type TabId = 'overview' | 'protocol' | 'checkin' | 'progress' | 'account'

const TABS: Record<TabId, { breadcrumb: string; title: string }> = {
  overview: { breadcrumb: 'Overview', title: 'Good morning, Marcus' },
  protocol: { breadcrumb: 'Protocol', title: 'Recovery & Repair' },
  checkin: { breadcrumb: 'Check-in', title: 'Your consultations' },
  progress: { breadcrumb: 'Progress', title: 'How are you feeling?' },
  account: { breadcrumb: 'Account', title: 'Account & billing' },
}

type Ratings = { energy?: number; recovery?: number; sleep?: number; pain?: number }

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<TabId>('overview')
  const [ratings, setRatings] = useState<Ratings>({})
  const [logSuccess, setLogSuccess] = useState(false)
  const [notes, setNotes] = useState('')

  function setRating(metric: keyof Ratings, value: number) {
    setRatings(prev => ({ ...prev, [metric]: value }))
  }

  function logProgress() {
    setLogSuccess(true)
    setTimeout(() => setLogSuccess(false), 3000)
  }

  const tab = TABS[activeTab]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        html,body{height:100%;font-family:'Outfit',sans-serif;background:#f0f4f7;color:#0d2137;font-size:14px;}
        .s{font-family:'Cormorant Garamond',serif;}
        a{text-decoration:none;color:inherit;}
        .app{display:flex;height:100vh;overflow:hidden;}
        .sidebar{width:240px;background:#0d2137;display:flex;flex-direction:column;flex-shrink:0;height:100vh;position:fixed;left:0;top:0;z-index:100;}
        .sidebar-logo{padding:24px 24px 20px;border-bottom:1px solid rgba(255,255,255,.08);}
        .sidebar-patient{padding:20px 24px;border-bottom:1px solid rgba(255,255,255,.08);display:flex;align-items:center;gap:12px;}
        .avatar{width:38px;height:38px;border-radius:50%;background:#0f9d8c;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:14px;color:#fff;flex-shrink:0;}
        .sidebar-nav{flex:1;padding:12px 12px;display:flex;flex-direction:column;gap:2px;overflow-y:auto;}
        .nav-item{display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:8px;cursor:pointer;transition:background .2s;color:rgba(255,255,255,.5);font-size:13px;font-weight:500;border:none;background:transparent;width:100%;text-align:left;font-family:'Outfit',sans-serif;}
        .nav-item:hover{background:rgba(255,255,255,.06);color:rgba(255,255,255,.8);}
        .nav-item.active{background:rgba(15,157,140,.15);color:#fff;}
        .nav-item.active svg{stroke:#0f9d8c;}
        .sidebar-footer{padding:16px 24px;border-top:1px solid rgba(255,255,255,.08);}
        .main{margin-left:240px;flex:1;height:100vh;overflow-y:auto;display:flex;flex-direction:column;}
        .main-header{padding:20px 32px;background:#fff;border-bottom:1px solid #dde6ed;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;}
        .main-content{flex:1;padding:28px 32px 40px;}
        .card{background:#fff;border:1px solid #dde6ed;border-radius:12px;padding:24px;}
        .card-sm{background:#fff;border:1px solid #dde6ed;border-radius:12px;padding:18px 20px;}
        .grid-2{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
        .grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
        .grid-main{display:grid;grid-template-columns:1fr 340px;gap:20px;align-items:start;}
        .stat-mini{background:#f7f9fb;border:1px solid #dde6ed;border-radius:8px;padding:16px;}
        .badge{display:inline-flex;align-items:center;gap:5px;padding:3px 10px;border-radius:100px;font-size:11px;font-weight:600;}
        .badge-green{background:#e6f5f3;color:#0b8578;}
        .badge-navy{background:#e8edf2;color:#0d2137;}
        .badge-amber{background:#fef3e2;color:#b45309;}
        .track-step{display:flex;align-items:flex-start;gap:14px;position:relative;}
        .track-dot{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;z-index:1;}
        .track-line{position:absolute;left:13px;top:28px;width:2px;height:calc(100% + 16px);background:#dde6ed;}
        .track-line.done{background:#0f9d8c;}
        .rating-row{display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid #f0f4f7;}
        .rating-row:last-child{border-bottom:none;}
        .rating-dots{display:flex;gap:6px;}
        .rdot{width:28px;height:28px;border-radius:6px;border:1.5px solid #dde6ed;background:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;color:#7a9bb0;transition:all .2s;font-family:'Outfit',sans-serif;}
        .rdot:hover{border-color:#0f9d8c;color:#0f9d8c;}
        .rdot.active{background:#0f9d8c;border-color:#0f9d8c;color:#fff;}
        .btn-primary{background:#0f9d8c;color:#fff;border:none;padding:12px 24px;border-radius:6px;font-size:13px;font-weight:600;cursor:pointer;transition:background .3s;font-family:'Outfit',sans-serif;}
        .btn-primary:hover{background:#0b8578;}
        .btn-outline{background:transparent;color:#0d2137;border:1.5px solid #dde6ed;padding:12px 24px;border-radius:6px;font-size:13px;font-weight:500;cursor:pointer;transition:all .3s;font-family:'Outfit',sans-serif;}
        .btn-outline:hover{border-color:#0f9d8c;color:#0f9d8c;}
        .btn-danger{background:transparent;color:#dc2626;border:1.5px solid #fca5a5;padding:12px 24px;border-radius:6px;font-size:13px;font-weight:500;cursor:pointer;transition:all .3s;font-family:'Outfit',sans-serif;}
        .btn-danger:hover{background:#fef2f2;}
        .bar-wrap{display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;}
        .bar-track{width:100%;background:#f0f4f7;border-radius:4px;height:80px;display:flex;align-items:flex-end;overflow:hidden;}
        .bar-fill{width:100%;background:linear-gradient(to top,#0f9d8c,#b3e0db);border-radius:4px 4px 0 0;transition:height .6s ease;}
        .bottom-nav{display:none;position:fixed;bottom:0;left:0;right:0;background:#fff;border-top:1px solid #dde6ed;z-index:200;padding:8px 0;flex-direction:row;}
        .bn-item{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;padding:6px 4px;cursor:pointer;border:none;background:transparent;color:#7a9bb0;transition:color .2s;font-family:'Outfit',sans-serif;}
        .bn-item.active{color:#0f9d8c;}
        .bn-item span{font-size:10px;font-weight:600;}
        .desktop-only{}
        @media (max-width: 768px) {
          .sidebar{display:none;}
          .main{margin-left:0;}
          .main-header{padding:16px 20px;}
          .main-content{padding:16px 16px 100px;}
          .grid-2{grid-template-columns:1fr;}
          .grid-3{grid-template-columns:1fr;}
          .grid-main{grid-template-columns:1fr;}
          .bottom-nav{display:flex;}
          .card{padding:18px;}
          .desktop-only{display:none;}
        }
      `}</style>

      <div className="app">
        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-logo">
            <Link href="/">
              <span className="s" style={{fontSize:'20px',fontWeight:600,letterSpacing:'0.06em',textTransform:'uppercase',color:'#fff'}}>PEP<span style={{color:'#0f9d8c'}}>VORI</span></span>
            </Link>
          </div>
          <div className="sidebar-patient">
            <div className="avatar">MR</div>
            <div>
              <div style={{fontSize:'13px',fontWeight:600,color:'#fff'}}>Marcus R.</div>
              <div style={{fontSize:'11px',color:'rgba(255,255,255,.4)',marginTop:'1px'}}>Accelerate Plan</div>
            </div>
          </div>
          <nav className="sidebar-nav">
            {([
              { id: 'overview', label: 'Overview', icon: <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"/></svg> },
              { id: 'protocol', label: 'Protocol', icon: <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 001.357 2.065L19.5 12"/></svg> },
              { id: 'checkin', label: 'Check-in', icon: <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/></svg> },
              { id: 'progress', label: 'Progress', icon: <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/></svg> },
              { id: 'account', label: 'Account', icon: <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg> },
            ] as { id: TabId; label: string; icon: React.ReactNode }[]).map(({ id, label, icon }) => (
              <button
                key={id}
                className={`nav-item${activeTab === id ? ' active' : ''}`}
                onClick={() => setActiveTab(id)}
              >
                {icon}
                {label}
              </button>
            ))}
          </nav>
          <div className="sidebar-footer">
            <Link href="/" style={{display:'flex',alignItems:'center',gap:'10px',color:'rgba(255,255,255,.35)',fontSize:'12px',transition:'color .2s'}}>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"/></svg>
              Sign out
            </Link>
          </div>
        </aside>

        {/* MAIN */}
        <main className="main">
          <div className="main-header">
            <div>
              <div style={{fontSize:'11px',color:'#7a9bb0',fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase'}}>{tab.breadcrumb}</div>
              <div style={{fontSize:'18px',fontWeight:600,color:'#0d2137',marginTop:'1px'}}>{tab.title}</div>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
              <div className="badge badge-green">
                <div style={{width:'6px',height:'6px',background:'#0f9d8c',borderRadius:'50%'}}></div>
                Protocol active
              </div>
              <div className="avatar desktop-only" style={{cursor:'pointer'}}>MR</div>
            </div>
          </div>

          <div className="main-content">

            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <div>
                <div className="grid-3" style={{marginBottom:'20px'}}>
                  <div className="stat-mini">
                    <div style={{fontSize:'11px',color:'#7a9bb0',marginBottom:'6px'}}>Protocol day</div>
                    <div className="s" style={{fontSize:'28px',fontWeight:400,color:'#0f9d8c',lineHeight:1}}>34</div>
                    <div style={{fontSize:'11px',color:'#7a9bb0',marginTop:'3px'}}>of 84 day cycle</div>
                  </div>
                  <div className="stat-mini">
                    <div style={{fontSize:'11px',color:'#7a9bb0',marginBottom:'6px'}}>Next shipment</div>
                    <div className="s" style={{fontSize:'28px',fontWeight:400,color:'#0d2137',lineHeight:1}}>12</div>
                    <div style={{fontSize:'11px',color:'#7a9bb0',marginTop:'3px'}}>days away</div>
                  </div>
                  <div className="stat-mini">
                    <div style={{fontSize:'11px',color:'#7a9bb0',marginBottom:'6px'}}>Next check-in</div>
                    <div className="s" style={{fontSize:'28px',fontWeight:400,color:'#0d2137',lineHeight:1}}>Apr 18</div>
                    <div style={{fontSize:'11px',color:'#7a9bb0',marginTop:'3px'}}>Dr. Sarah Chen</div>
                  </div>
                </div>

                <div className="grid-main">
                  <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
                    <div className="card">
                      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'16px'}}>
                        <div>
                          <div style={{fontSize:'11px',fontWeight:600,color:'#0f9d8c',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:'4px'}}>Active protocol</div>
                          <div className="s" style={{fontSize:'22px',fontWeight:500,color:'#0d2137'}}>Recovery &amp; Repair</div>
                        </div>
                        <span className="badge badge-green">Active</span>
                      </div>
                      <div style={{display:'flex',gap:'8px',flexWrap:'wrap',marginBottom:'18px'}}>
                        {['BPC-157','TB-500','GHK-Cu'].map(p => (
                          <span key={p} style={{background:'#e6f5f3',border:'1px solid #b3e0db',borderRadius:'100px',padding:'3px 12px',fontSize:'12px',color:'#0b8578',fontWeight:500}}>{p}</span>
                        ))}
                      </div>
                      <div style={{marginBottom:'6px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <div style={{fontSize:'12px',color:'#7a9bb0'}}>Cycle progress</div>
                        <div style={{fontSize:'12px',fontWeight:600,color:'#0d2137'}}>Day 34 of 84</div>
                      </div>
                      <div style={{height:'8px',background:'#f0f4f7',borderRadius:'4px',overflow:'hidden'}}>
                        <div style={{height:'100%',width:'40%',background:'linear-gradient(90deg,#0f9d8c,#b3e0db)',borderRadius:'4px'}}></div>
                      </div>
                      <div style={{marginTop:'14px',display:'flex',justifyContent:'flex-end'}}>
                        <button className="btn-outline" style={{fontSize:'12px',padding:'8px 16px'}} onClick={() => setActiveTab('protocol')}>View protocol details →</button>
                      </div>
                    </div>

                    <div className="card">
                      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'20px'}}>
                        <div style={{fontSize:'15px',fontWeight:600,color:'#0d2137'}}>Current shipment</div>
                        <span className="badge badge-amber">In transit</span>
                      </div>
                      <div style={{display:'flex',flexDirection:'column',gap:0,position:'relative'}}>
                        {[
                          { done: true, label: 'Prescription received', time: 'Apr 1 · 2:14 PM', active: false },
                          { done: true, label: 'Compounding complete', time: 'Apr 2 · 9:30 AM', active: false },
                          { done: false, label: 'Shipped — in transit', time: 'Apr 3 · Est. delivery Apr 8', active: true },
                          { done: false, label: 'Delivered', time: 'Estimated Apr 8', active: false },
                        ].map((step, i, arr) => (
                          <div key={step.label} className="track-step" style={{paddingBottom: i < arr.length - 1 ? '20px' : '0'}}>
                            {i < arr.length - 1 && <div className={`track-line${step.done ? ' done' : ''}`}></div>}
                            <div className="track-dot" style={step.done ? {background:'#0f9d8c'} : step.active ? {background:'#e6f5f3',border:'2px solid #0f9d8c'} : {background:'#f0f4f7',border:'1.5px solid #dde6ed'}}>
                              {step.done && <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M4.5 8l2.5 2.5 4.5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                              {step.active && <div style={{width:'8px',height:'8px',background:'#0f9d8c',borderRadius:'50%'}}></div>}
                            </div>
                            <div style={{paddingTop:'3px'}}>
                              <div style={{fontSize:'13px',fontWeight:600,color:step.active ? '#0f9d8c' : step.done ? '#0d2137' : '#7a9bb0'}}>{step.label}</div>
                              <div style={{fontSize:'11px',color:'#7a9bb0',marginTop:'2px'}}>{step.time}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
                    <div className="card">
                      <div style={{fontSize:'11px',fontWeight:600,color:'#0f9d8c',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:'12px'}}>Next check-in</div>
                      <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'16px'}}>
                        <div style={{width:'44px',height:'44px',background:'#e6f5f3',borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#0f9d8c" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg>
                        </div>
                        <div>
                          <div style={{fontSize:'14px',fontWeight:600,color:'#0d2137'}}>Dr. Sarah Chen</div>
                          <div style={{fontSize:'12px',color:'#7a9bb0',marginTop:'2px'}}>Board-certified, Functional Medicine</div>
                        </div>
                      </div>
                      <div style={{display:'flex',flexDirection:'column',gap:'8px',marginBottom:'16px'}}>
                        <div style={{display:'flex',alignItems:'center',gap:'8px',fontSize:'13px',color:'#3d5a73'}}>
                          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#0f9d8c" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5"/></svg>
                          Friday, April 18 · 10:00 AM
                        </div>
                        <div style={{display:'flex',alignItems:'center',gap:'8px',fontSize:'13px',color:'#3d5a73'}}>
                          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#0f9d8c" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/></svg>
                          Secure video consult
                        </div>
                      </div>
                      <button className="btn-primary" style={{width:'100%',fontSize:'13px',padding:'10px'}} onClick={() => setActiveTab('checkin')}>View details</button>
                    </div>

                    <div className="card">
                      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'14px'}}>
                        <div style={{fontSize:'11px',fontWeight:600,color:'#0f9d8c',letterSpacing:'0.1em',textTransform:'uppercase'}}>Last logged</div>
                        <div style={{fontSize:'11px',color:'#7a9bb0'}}>Apr 5</div>
                      </div>
                      <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                        {[{label:'Energy',dots:4},{label:'Recovery',dots:3},{label:'Sleep',dots:5}].map(({label,dots}) => (
                          <div key={label} style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                            <div style={{fontSize:'13px',color:'#3d5a73'}}>{label}</div>
                            <div style={{display:'flex',gap:'4px'}}>
                              {[1,2,3,4,5].map(i => (
                                <div key={i} style={{width:'8px',height:'8px',borderRadius:'2px',background: i <= dots ? '#0f9d8c' : '#dde6ed'}}></div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <button className="btn-outline" style={{width:'100%',fontSize:'12px',padding:'9px',marginTop:'14px'}} onClick={() => setActiveTab('progress')}>Log today →</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: PROTOCOL */}
            {activeTab === 'protocol' && (
              <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
                <div className="card">
                  <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',marginBottom:'20px',gap:'12px',flexWrap:'wrap'}}>
                    <div>
                      <div style={{fontSize:'11px',fontWeight:600,color:'#0f9d8c',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:'6px'}}>Active protocol</div>
                      <div className="s" style={{fontSize:'28px',fontWeight:400,color:'#0d2137'}}>Recovery &amp; Repair</div>
                      <div style={{fontSize:'13px',color:'#7a9bb0',marginTop:'4px'}}>Prescribed by Dr. Sarah Chen · Apr 1, 2026</div>
                    </div>
                    <span className="badge badge-green" style={{fontSize:'12px',padding:'5px 12px'}}>Day 34 of 84</span>
                  </div>
                  <div style={{height:'10px',background:'#f0f4f7',borderRadius:'5px',overflow:'hidden',marginBottom:'8px'}}>
                    <div style={{height:'100%',width:'40%',background:'linear-gradient(90deg,#0f9d8c,#b3e0db)',borderRadius:'5px'}}></div>
                  </div>
                  <div style={{display:'flex',justifyContent:'space-between',fontSize:'12px',color:'#7a9bb0',marginBottom:'20px'}}>
                    <span>Started Apr 1</span><span>40% complete</span><span>Ends Jun 23</span>
                  </div>
                  <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'12px'}}>
                    {[{label:'Peptides',val:'3'},{label:'Administration',val:'SubQ'},{label:'Frequency',val:'Daily'}].map(({label,val}) => (
                      <div key={label} className="stat-mini" style={{textAlign:'center'}}>
                        <div style={{fontSize:'11px',color:'#7a9bb0',marginBottom:'4px'}}>{label}</div>
                        <div style={{fontSize: label === 'Peptides' ? '18px' : '13px',fontWeight: label === 'Peptides' ? 700 : 600,color:'#0d2137'}}>{val}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card">
                  <div style={{fontSize:'13px',fontWeight:600,color:'#0d2137',marginBottom:'16px'}}>Your peptides</div>
                  <div style={{display:'flex',flexDirection:'column',gap:0}}>
                    {[
                      {code:'BPC-157',name:'Body Protection Compound',dose:'250mcg subcutaneous injection · Daily in the morning',primary:true},
                      {code:'TB-500',name:'Thymosin Beta-4',dose:'2.5mg subcutaneous injection · 2× per week'},
                      {code:'GHK-Cu',name:'Copper Peptide',dose:'1mg subcutaneous injection · Daily at night'},
                    ].map((p, i, arr) => (
                      <div key={p.code} style={{padding:'16px 0',borderBottom: i < arr.length - 1 ? '1px solid #f0f4f7' : 'none'}}>
                        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'6px'}}>
                          <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                            <span style={{background:'#e6f5f3',border:'1px solid #b3e0db',borderRadius:'100px',padding:'3px 12px',fontSize:'12px',color:'#0b8578',fontWeight:600}}>{p.code}</span>
                            <span style={{fontSize:'12px',color:'#7a9bb0'}}>{p.name}</span>
                          </div>
                          {p.primary && <span className="badge badge-green">Primary</span>}
                        </div>
                        <div style={{fontSize:'13px',color:'#3d5a73',lineHeight:1.6}}>{p.dose}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{textAlign:'center'}}>
                  <Link href="/protocols/recovery"><button className="btn-outline">View full protocol page →</button></Link>
                </div>
              </div>
            )}

            {/* TAB 3: CHECK-IN */}
            {activeTab === 'checkin' && (
              <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
                <div className="card" style={{borderColor:'#0f9d8c',borderWidth:'1.5px'}}>
                  <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'16px'}}>
                    <div style={{width:'8px',height:'8px',background:'#0f9d8c',borderRadius:'50%'}}></div>
                    <span style={{fontSize:'11px',fontWeight:600,color:'#0f9d8c',letterSpacing:'0.1em',textTransform:'uppercase'}}>Upcoming</span>
                  </div>
                  <div style={{display:'flex',alignItems:'center',gap:'14px',marginBottom:'16px',flexWrap:'wrap'}}>
                    <div style={{width:'52px',height:'52px',background:'#e6f5f3',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#0f9d8c" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0"/></svg>
                    </div>
                    <div>
                      <div style={{fontSize:'16px',fontWeight:600,color:'#0d2137'}}>Dr. Sarah Chen, MD</div>
                      <div style={{fontSize:'12px',color:'#7a9bb0',marginTop:'2px'}}>Board-certified · Functional Medicine</div>
                    </div>
                  </div>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px',marginBottom:'18px'}}>
                    {[{label:'Date',val:'Friday, Apr 18'},{label:'Time',val:'10:00 AM EST'},{label:'Format',val:'Secure video'},{label:'Duration',val:'~15 mins'}].map(({label,val}) => (
                      <div key={label} className="stat-mini">
                        <div style={{fontSize:'11px',color:'#7a9bb0',marginBottom:'3px'}}>{label}</div>
                        <div style={{fontSize:'13px',fontWeight:600,color:'#0d2137'}}>{val}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
                    <button className="btn-primary" style={{flex:1,minWidth:'140px'}}>Join consultation</button>
                    <button className="btn-outline" style={{flex:1,minWidth:'140px'}}>Message ahead</button>
                  </div>
                </div>

                <div className="card">
                  <div style={{fontSize:'13px',fontWeight:600,color:'#0d2137',marginBottom:'16px'}}>Past consultations</div>
                  {[
                    {title:'Initial consultation',date:'Apr 1, 2026 · Dr. Sarah Chen',badge:'Approved'},
                    {title:'Week 2 follow-up',date:'Apr 14, 2026 · Dr. Sarah Chen',badge:'Completed'},
                  ].map((c, i, arr) => (
                    <div key={c.title} style={{padding:'14px 0',borderBottom: i < arr.length - 1 ? '1px solid #f0f4f7' : 'none',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'12px',flexWrap:'wrap'}}>
                      <div>
                        <div style={{fontSize:'13px',fontWeight:600,color:'#0d2137'}}>{c.title}</div>
                        <div style={{fontSize:'12px',color:'#7a9bb0',marginTop:'2px'}}>{c.date}</div>
                      </div>
                      <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
                        <span className="badge badge-green">{c.badge}</span>
                        <button className="btn-outline" style={{fontSize:'11px',padding:'6px 12px'}}>View notes</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: PROGRESS */}
            {activeTab === 'progress' && (
              <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
                <div className="card">
                  <div style={{fontSize:'11px',fontWeight:600,color:'#0f9d8c',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:'6px'}}>Today — April 8</div>
                  <div className="s" style={{fontSize:'22px',fontWeight:400,color:'#0d2137',marginBottom:'4px'}}>How are you feeling?</div>
                  <div style={{fontSize:'13px',color:'#7a9bb0',marginBottom:'20px'}}>Your physician reviews this before each consultation.</div>

                  <div style={{display:'flex',flexDirection:'column'}}>
                    {(['energy','recovery','sleep','pain'] as (keyof Ratings)[]).map((metric, i, arr) => (
                      <div key={metric} className="rating-row" style={{borderBottom: i < arr.length - 1 ? '1px solid #f0f4f7' : 'none'}}>
                        <div style={{fontSize:'14px',fontWeight:500,color:'#0d2137',textTransform:'capitalize'}}>{metric === 'sleep' ? 'Sleep quality' : metric === 'pain' ? 'Pain / discomfort' : metric.charAt(0).toUpperCase() + metric.slice(1)}</div>
                        <div className="rating-dots">
                          {[1,2,3,4,5].map(v => (
                            <button
                              key={v}
                              className={`rdot${(ratings[metric] ?? 0) >= v ? ' active' : ''}`}
                              onClick={() => setRating(metric, v)}
                            >{v}</button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{marginTop:'16px'}}>
                    <label style={{fontSize:'12px',fontWeight:600,color:'#3d5a73',display:'block',marginBottom:'6px'}}>Any notes for your physician? (optional)</label>
                    <textarea
                      style={{width:'100%',border:'1.5px solid #dde6ed',borderRadius:'8px',padding:'12px',fontSize:'13px',fontFamily:"'Outfit',sans-serif",color:'#0d2137',resize:'none',outline:'none',lineHeight:1.6}}
                      rows={3}
                      placeholder="e.g. Shoulder pain down to 3/10 this week, noticed improvement in overhead movement..."
                      value={notes}
                      onChange={e => setNotes(e.target.value)}
                    />
                  </div>
                  <button className="btn-primary" style={{width:'100%',marginTop:'14px'}} onClick={logProgress}>Save today&apos;s log</button>
                  {logSuccess && (
                    <div style={{textAlign:'center',padding:'12px',background:'#e6f5f3',borderRadius:'6px',marginTop:'10px',fontSize:'13px',fontWeight:600,color:'#0b8578'}}>✓ Logged successfully</div>
                  )}
                </div>

                <div className="card">
                  <div style={{fontSize:'13px',fontWeight:600,color:'#0d2137',marginBottom:'4px'}}>4-week trend</div>
                  <div style={{fontSize:'12px',color:'#7a9bb0',marginBottom:'20px'}}>Overall wellbeing score (1–5 average)</div>
                  <div style={{display:'flex',alignItems:'flex-end',gap:'8px',height:'100px'}}>
                    {[{h:'50%',label:'W1'},{h:'62%',label:'W2'},{h:'74%',label:'W3'},{h:'82%',label:'W4'}].map(({h,label}) => (
                      <div key={label} className="bar-wrap">
                        <div className="bar-track"><div className="bar-fill" style={{height:h}}></div></div>
                        <div style={{fontSize:'10px',color:'#7a9bb0'}}>{label}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{marginTop:'14px',padding:'12px',background:'#e6f5f3',borderRadius:'8px',display:'flex',alignItems:'center',gap:'10px'}}>
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#0f9d8c" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/></svg>
                    <div style={{fontSize:'12px',color:'#0b8578',fontWeight:500}}>Trending upward — 64% improvement over 4 weeks</div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: ACCOUNT */}
            {activeTab === 'account' && (
              <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
                <div className="card">
                  <div style={{fontSize:'11px',fontWeight:600,color:'#0f9d8c',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:'16px'}}>Subscription</div>
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'16px',flexWrap:'wrap',gap:'10px'}}>
                    <div>
                      <div style={{fontSize:'18px',fontWeight:600,color:'#0d2137'}}>Accelerate Plan</div>
                      <div style={{fontSize:'13px',color:'#7a9bb0',marginTop:'2px'}}>$249 / month · Billed monthly</div>
                    </div>
                    <span className="badge badge-green" style={{fontSize:'12px',padding:'5px 12px'}}>Active</span>
                  </div>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px',marginBottom:'18px'}}>
                    <div className="stat-mini"><div style={{fontSize:'11px',color:'#7a9bb0',marginBottom:'3px'}}>Next billing</div><div style={{fontSize:'13px',fontWeight:600,color:'#0d2137'}}>May 1, 2026</div></div>
                    <div className="stat-mini"><div style={{fontSize:'11px',color:'#7a9bb0',marginBottom:'3px'}}>Member since</div><div style={{fontSize:'13px',fontWeight:600,color:'#0d2137'}}>April 1, 2026</div></div>
                  </div>
                  <div style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
                    <button className="btn-outline" style={{flex:1,minWidth:'120px'}}>Change plan</button>
                    <button className="btn-outline" style={{flex:1,minWidth:'120px'}}>Pause protocol</button>
                  </div>
                </div>

                <div className="card">
                  <div style={{fontSize:'11px',fontWeight:600,color:'#0f9d8c',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:'16px'}}>Payment method</div>
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'10px'}}>
                    <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                      <div style={{background:'#f0f4f7',border:'1px solid #dde6ed',borderRadius:'6px',padding:'8px 12px',fontSize:'12px',fontWeight:700,color:'#0d2137',letterSpacing:'0.05em'}}>VISA</div>
                      <div>
                        <div style={{fontSize:'13px',fontWeight:600,color:'#0d2137'}}>•••• •••• •••• 4291</div>
                        <div style={{fontSize:'11px',color:'#7a9bb0',marginTop:'1px'}}>Expires 09/28</div>
                      </div>
                    </div>
                    <button className="btn-outline" style={{fontSize:'12px',padding:'8px 16px'}}>Update</button>
                  </div>
                </div>

                <div className="card">
                  <div style={{fontSize:'11px',fontWeight:600,color:'#0f9d8c',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:'16px'}}>Shipping address</div>
                  <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:'12px',flexWrap:'wrap'}}>
                    <div style={{fontSize:'13px',color:'#3d5a73',lineHeight:1.8}}>
                      Marcus Rodriguez<br/>
                      142 West 72nd Street, Apt 8B<br/>
                      New York, NY 10023<br/>
                      United States
                    </div>
                    <button className="btn-outline" style={{fontSize:'12px',padding:'8px 16px',flexShrink:0}}>Edit</button>
                  </div>
                </div>

                <div className="card">
                  <div style={{fontSize:'11px',fontWeight:600,color:'#0f9d8c',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:'16px'}}>Personal info</div>
                  {[
                    {label:'Name',val:'Marcus Rodriguez'},
                    {label:'Email',val:'marcus@example.com'},
                    {label:'Date of birth',val:'March 14, 1988'},
                    {label:'Biological sex',val:'Male'},
                  ].map(({label,val},i,arr) => (
                    <div key={label} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 0',borderBottom: i < arr.length - 1 ? '1px solid #f0f4f7' : 'none'}}>
                      <div style={{fontSize:'12px',color:'#7a9bb0'}}>{label}</div>
                      <div style={{fontSize:'13px',fontWeight:500,color:'#0d2137'}}>{val}</div>
                    </div>
                  ))}
                  <button className="btn-outline" style={{width:'100%',marginTop:'14px',fontSize:'12px'}}>Edit personal info</button>
                </div>

                <div className="card" style={{borderColor:'#fca5a5'}}>
                  <div style={{fontSize:'11px',fontWeight:600,color:'#dc2626',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:'10px'}}>Cancel subscription</div>
                  <div style={{fontSize:'13px',color:'#7a9bb0',lineHeight:1.7,marginBottom:'14px'}}>You can cancel at any time with no fees. Your access continues through the end of your current billing period.</div>
                  <button className="btn-danger">Cancel subscription</button>
                </div>
              </div>
            )}

          </div>
        </main>
      </div>

      {/* BOTTOM NAV (mobile) */}
      <nav className="bottom-nav">
        {([
          { id: 'overview', label: 'Overview', icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"/></svg> },
          { id: 'protocol', label: 'Protocol', icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5"/></svg> },
          { id: 'checkin', label: 'Check-in', icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5"/></svg> },
          { id: 'progress', label: 'Progress', icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/></svg> },
          { id: 'account', label: 'Account', icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0"/></svg> },
        ] as { id: TabId; label: string; icon: React.ReactNode }[]).map(({ id, label, icon }) => (
          <button
            key={id}
            className={`bn-item${activeTab === id ? ' active' : ''}`}
            onClick={() => setActiveTab(id)}
          >
            {icon}
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </>
  )
}
