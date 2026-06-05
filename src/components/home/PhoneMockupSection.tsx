import { useEffect, useRef, useState } from 'react'
import { gsap } from '../../lib/gsap'
import { Shield, Car, Heart, FileCheck, Bell, ChevronRight, Wifi, Battery } from 'lucide-react'

const STEPS = [
  {
    label: '01',
    tag: 'Digital Policy',
    heading: 'Your Policies,\nAlways With You',
    body: 'Access all your insurance policies, renewal dates, and coverage details from one app — anytime, anywhere.',
    screen: 'dashboard',
  },
  {
    label: '02',
    tag: 'Motor Insurance',
    heading: 'Drive with\nComplete Confidence',
    body: 'View your motor policy, download your cover note, and get roadside assistance with one tap.',
    screen: 'motor',
  },
  {
    label: '03',
    tag: 'Health & Takaful',
    heading: 'Health Card\nin Your Pocket',
    body: 'Show your digital health card at any of 50+ panel hospitals for cashless treatment. No paperwork needed.',
    screen: 'health',
  },
  {
    label: '04',
    tag: 'Claims',
    heading: 'File a Claim\nin Minutes',
    body: 'Submit your claim, upload documents, and track real-time settlement status — all without visiting a branch.',
    screen: 'claims',
  },
]

// ─── Phone screen UIs ────────────────────────────────────────────────────────

function ScreenDashboard() {
  return (
    <div className="w-full h-full bg-[#f0f2ff] flex flex-col">
      {/* Status bar */}
      <div className="flex justify-between items-center px-5 pt-3 pb-1">
        <span className="text-[9px] font-bold text-navy/60">9:41</span>
        <div className="flex gap-1 items-center">
          <Wifi size={9} className="text-navy/50" />
          <Battery size={10} className="text-navy/50" />
        </div>
      </div>
      {/* Header */}
      <div className="px-5 pb-3">
        <p className="text-[9px] text-navy/50 font-medium">Good morning,</p>
        <p className="text-[13px] font-black text-navy uppercase tracking-tight">Ahmed Khan</p>
      </div>
      {/* Summary card */}
      <div className="mx-4 rounded-2xl bg-navy p-4 mb-3 relative overflow-hidden">
        <div className="absolute right-2 top-2 opacity-10">
          <Shield size={48} className="text-gold" />
        </div>
        <p className="text-[8px] text-white/50 uppercase tracking-widest font-bold mb-1">Active Policies</p>
        <p className="text-[22px] font-black text-white leading-none">3</p>
        <p className="text-[8px] text-gold font-semibold mt-1">All coverage active ✓</p>
      </div>
      {/* Policy list */}
      <div className="px-4 flex flex-col gap-2 flex-1">
        {[
          { icon: Car,   label: 'Motor', num: 'POL-2024-001', color: 'bg-blue-50 text-blue-600' },
          { icon: Heart, label: 'Health', num: 'POL-2024-002', color: 'bg-red-50 text-red-500' },
          { icon: Shield,label: 'Fire',   num: 'POL-2024-003', color: 'bg-orange-50 text-orange-500' },
        ].map(({ icon: Icon, label, num, color }) => (
          <div key={label} className="flex items-center gap-3 bg-white rounded-xl px-3 py-2.5 shadow-sm">
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${color}`}>
              <Icon size={12} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold text-navy">{label}</p>
              <p className="text-[8px] text-gray-400">{num}</p>
            </div>
            <ChevronRight size={10} className="text-gray-300" />
          </div>
        ))}
      </div>
      {/* Bottom nav */}
      <div className="flex justify-around items-center px-4 py-3 border-t border-gray-100 bg-white mt-2">
        {[Shield, Car, FileCheck, Bell].map((Icon, i) => (
          <div key={i} className={`flex flex-col items-center gap-0.5 ${i === 0 ? 'text-navy' : 'text-gray-300'}`}>
            <Icon size={14} />
            <div className={`w-1 h-1 rounded-full ${i === 0 ? 'bg-gold' : 'bg-transparent'}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

function ScreenMotor() {
  return (
    <div className="w-full h-full bg-white flex flex-col">
      <div className="flex justify-between items-center px-5 pt-3 pb-1">
        <span className="text-[9px] font-bold text-navy/60">9:41</span>
        <div className="flex gap-1"><Wifi size={9} className="text-navy/50" /><Battery size={10} className="text-navy/50" /></div>
      </div>
      {/* Hero card */}
      <div className="mx-4 rounded-2xl overflow-hidden h-28 relative mb-3">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-blue-900" />
        <div className="absolute inset-0 flex flex-col justify-end p-4">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[8px] text-white/50 uppercase tracking-widest font-bold">Motor Policy</p>
              <p className="text-[13px] font-black text-white">Honda Civic</p>
              <p className="text-[8px] text-gold font-semibold">ABC-1234 · Comprehensive</p>
            </div>
            <div className="text-right">
              <p className="text-[8px] text-white/50">Expires</p>
              <p className="text-[10px] font-bold text-white">Dec 2025</p>
            </div>
          </div>
        </div>
        {/* Car silhouette */}
        <div className="absolute top-3 right-3 opacity-10">
          <Car size={36} className="text-white" />
        </div>
      </div>
      {/* Quick actions */}
      <div className="px-4 grid grid-cols-3 gap-2 mb-3">
        {['Cover Note', 'Renew', 'Claim'].map(a => (
          <div key={a} className="bg-[#f0f2ff] rounded-xl p-2 text-center">
            <p className="text-[8px] font-bold text-navy">{a}</p>
          </div>
        ))}
      </div>
      {/* Coverage details */}
      <div className="px-4 flex-1">
        <p className="text-[9px] font-black text-navy uppercase tracking-wide mb-2">Coverage</p>
        {[['Own Damage', '✓'], ['Third Party', '✓'], ['Theft', '✓'], ['Natural Disaster', '✓']].map(([k, v]) => (
          <div key={k} className="flex justify-between py-1.5 border-b border-gray-50">
            <span className="text-[9px] text-gray-500">{k}</span>
            <span className="text-[9px] font-bold text-green-600">{v}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ScreenHealth() {
  return (
    <div className="w-full h-full bg-[#fff8f8] flex flex-col">
      <div className="flex justify-between items-center px-5 pt-3 pb-1">
        <span className="text-[9px] font-bold text-navy/60">9:41</span>
        <div className="flex gap-1"><Wifi size={9} className="text-navy/50" /><Battery size={10} className="text-navy/50" /></div>
      </div>
      {/* Digital health card */}
      <div className="mx-4 rounded-2xl overflow-hidden relative mb-3">
        <div className="bg-gradient-to-br from-rose-500 to-red-700 p-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-[7px] text-white/70 uppercase tracking-widest font-bold">Shaheen Health Card</p>
              <p className="text-[11px] font-black text-white mt-0.5">Ahmed Khan</p>
            </div>
            <Heart size={20} className="text-white/30" />
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-[7px] text-white/50">Policy No.</p>
              <p className="text-[9px] font-bold text-white">HTH-2024-0042</p>
            </div>
            <div className="text-right">
              <p className="text-[7px] text-white/50">Limit</p>
              <p className="text-[9px] font-bold text-white">Rs. 500,000</p>
            </div>
          </div>
        </div>
      </div>
      {/* Stats */}
      <div className="px-4 grid grid-cols-2 gap-2 mb-3">
        <div className="bg-white rounded-xl p-3 shadow-sm">
          <p className="text-[8px] text-gray-400">Used</p>
          <p className="text-[14px] font-black text-navy">12%</p>
          <div className="w-full h-1 bg-gray-100 rounded-full mt-1"><div className="w-[12%] h-full bg-rose-400 rounded-full" /></div>
        </div>
        <div className="bg-white rounded-xl p-3 shadow-sm">
          <p className="text-[8px] text-gray-400">Hospitals</p>
          <p className="text-[14px] font-black text-navy">50+</p>
          <p className="text-[7px] text-gray-400">Panel nationwide</p>
        </div>
      </div>
      {/* Hospitals */}
      <div className="px-4">
        <p className="text-[9px] font-black text-navy uppercase tracking-wide mb-2">Nearby Hospitals</p>
        {['Shifa International', 'CMH Rawalpindi', 'PIMS Hospital'].map(h => (
          <div key={h} className="flex items-center justify-between py-1.5 border-b border-gray-100">
            <span className="text-[9px] text-gray-600">{h}</span>
            <span className="text-[8px] text-green-600 font-semibold">Cashless</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ScreenClaims() {
  return (
    <div className="w-full h-full bg-white flex flex-col">
      <div className="flex justify-between items-center px-5 pt-3 pb-1">
        <span className="text-[9px] font-bold text-navy/60">9:41</span>
        <div className="flex gap-1"><Wifi size={9} className="text-navy/50" /><Battery size={10} className="text-navy/50" /></div>
      </div>
      <div className="px-5 mb-3">
        <p className="text-[13px] font-black text-navy uppercase">Claims</p>
      </div>
      {/* Active claim */}
      <div className="mx-4 bg-[#f0f2ff] rounded-2xl p-4 mb-3">
        <div className="flex justify-between mb-3">
          <div>
            <p className="text-[8px] text-navy/50 font-bold uppercase tracking-wide">CLM-2024-0089</p>
            <p className="text-[11px] font-black text-navy">Motor Claim</p>
          </div>
          <span className="bg-amber-100 text-amber-700 text-[8px] font-bold px-2 py-0.5 rounded-full self-start">In Progress</span>
        </div>
        {/* Progress steps */}
        <div className="flex items-center gap-1">
          {['Filed', 'Survey', 'Review', 'Settle'].map((s, i) => (
            <div key={s} className="flex-1 flex flex-col items-center gap-1">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[7px] font-bold ${i < 2 ? 'bg-navy text-white' : 'bg-gray-100 text-gray-400'}`}>
                {i < 2 ? '✓' : i + 1}
              </div>
              <p className={`text-[6px] font-semibold ${i < 2 ? 'text-navy' : 'text-gray-300'}`}>{s}</p>
              {i < 3 && <div className={`absolute`} />}
            </div>
          ))}
        </div>
      </div>
      {/* New claim btn */}
      <div className="mx-4 bg-navy rounded-xl py-3 flex items-center justify-center gap-2 mb-3">
        <FileCheck size={13} className="text-gold" />
        <span className="text-[10px] font-bold text-white uppercase tracking-wide">File New Claim</span>
      </div>
      {/* Past claims */}
      <div className="px-4">
        <p className="text-[9px] font-black text-navy uppercase tracking-wide mb-2">Past Claims</p>
        {[['CLM-2023-0041', 'Fire', 'Settled', 'text-green-600'], ['CLM-2023-0012', 'Motor', 'Settled', 'text-green-600']].map(([id, type, status, cls]) => (
          <div key={id} className="flex items-center justify-between py-2 border-b border-gray-50">
            <div>
              <p className="text-[9px] font-bold text-navy">{type} Claim</p>
              <p className="text-[7px] text-gray-400">{id}</p>
            </div>
            <span className={`text-[8px] font-bold ${cls}`}>{status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const SCREEN_MAP = {
  dashboard: ScreenDashboard,
  motor: ScreenMotor,
  health: ScreenHealth,
  claims: ScreenClaims,
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function PhoneMockupSection() {
  const outerRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const total = STEPS.length

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: outerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
          onUpdate(self) {
            const idx = Math.min(Math.floor(self.progress * total), total - 1)
            setActiveStep(idx)
          },
        },
        defaults: { ease: 'power2.inOut' },
      })

      // Intro: phone slides in from right, slight tilt
      tl.from(phoneRef.current, {
        x: '80vw',
        rotateY: -35,
        rotateZ: -8,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })

      // Step 1 → Step 2: tilt right + float up
      tl.to(phoneRef.current, {
        rotateY: 18,
        rotateZ: 4,
        y: -20,
        x: '8vw',
        duration: 1,
      })

      // Step 2 → Step 3: tilt left
      tl.to(phoneRef.current, {
        rotateY: -18,
        rotateZ: -4,
        y: 10,
        x: '-8vw',
        duration: 1,
      })

      // Step 3 → Step 4: straighten, come forward
      tl.to(phoneRef.current, {
        rotateY: 0,
        rotateZ: 0,
        y: -10,
        x: 0,
        scale: 1.04,
        duration: 1,
      })

      // Glow pulses
      gsap.to(glowRef.current, {
        opacity: 0.6,
        scale: 1.15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

    }, outerRef)

    return () => ctx.revert()
  }, [])

  const step = STEPS[activeStep]
  const ScreenComponent = SCREEN_MAP[step.screen as keyof typeof SCREEN_MAP]

  return (
    <div ref={outerRef} className="relative bg-navy" style={{ height: '400vh' }}>
      <div ref={stickyRef} className="sticky top-0 h-screen flex items-center overflow-hidden">

        {/* Background texture */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="phone-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#D6A65A" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#phone-grid)" />
        </svg>

        {/* Radial glow behind phone */}
        <div
          ref={glowRef}
          className="absolute right-[30%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none opacity-40"
          style={{ background: 'radial-gradient(ellipse, rgba(214,166,90,0.25) 0%, transparent 70%)' }}
        />

        <div className="w-full max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Text */}
          <div className="relative z-10">
            {/* Step dots */}
            <div className="flex gap-2 mb-8">
              {STEPS.map((_, i) => (
                <div
                  key={i}
                  className="rounded-full transition-all duration-500"
                  style={{
                    width: i === activeStep ? '24px' : '6px',
                    height: '6px',
                    background: i === activeStep ? '#D6A65A' : 'rgba(255,255,255,0.2)',
                  }}
                />
              ))}
            </div>

            {/* Tag */}
            <div
              key={step.tag}
              className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 px-3 py-1.5 rounded-full mb-5"
              style={{ animation: 'fadeSlideUp 0.4s ease both' }}
            >
              <div className="w-1.5 h-1.5 bg-gold rounded-full" />
              <span className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase">{step.tag}</span>
            </div>

            {/* Heading */}
            <h2
              key={step.heading}
              className="font-display font-black text-white text-4xl md:text-5xl lg:text-6xl uppercase leading-tight tracking-tight mb-6"
              style={{ animation: 'fadeSlideUp 0.5s ease 0.05s both' }}
            >
              {step.heading.split('\n').map((line, i) => (
                <span key={i} className="block">
                  {i === 1 ? <span className="text-gold">{line}</span> : line}
                </span>
              ))}
            </h2>

            {/* Body */}
            <p
              key={step.body}
              className="text-white/55 text-base leading-relaxed max-w-md"
              style={{ animation: 'fadeSlideUp 0.5s ease 0.1s both' }}
            >
              {step.body}
            </p>

            {/* Step number */}
            <div className="mt-10 flex items-center gap-3">
              <span className="font-display font-black text-gold/30 text-6xl leading-none">{step.label}</span>
              <div className="flex-1 h-px bg-white/10 max-w-[80px]" />
              <span className="text-white/30 text-xs font-bold tracking-widest uppercase">of {String(STEPS.length).padStart(2, '0')}</span>
            </div>
          </div>

          {/* RIGHT — Phone */}
          <div
            className="relative flex items-center justify-center"
            style={{ perspective: '1200px' }}
          >
            <div
              ref={phoneRef}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Phone shell */}
              <div className="relative w-[260px] h-[530px] rounded-[48px] bg-[#0d1020] border-[8px] border-[#1e2340] shadow-[0_40px_100px_rgba(0,0,0,0.7)]">

                {/* Screen bezel glow */}
                <div className="absolute inset-0 rounded-[40px] overflow-hidden">
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(ellipse at 50% 0%, ${
                        activeStep === 2 ? 'rgba(244,63,94,0.15)' :
                        activeStep === 3 ? 'rgba(245,158,11,0.12)' :
                        'rgba(59,130,246,0.12)'
                      } 0%, transparent 60%)`
                    }}
                  />
                  {/* Screen content */}
                  <div className="w-full h-full overflow-hidden rounded-[40px]">
                    <ScreenComponent key={activeStep} />
                  </div>
                </div>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[88px] h-[26px] bg-[#0d1020] rounded-b-3xl z-20" />

                {/* Side button */}
                <div className="absolute right-[-14px] top-[120px] w-[5px] h-[60px] bg-[#1e2340] rounded-r-md" />
                <div className="absolute left-[-14px] top-[100px] w-[5px] h-[40px] bg-[#1e2340] rounded-l-md" />
                <div className="absolute left-[-14px] top-[155px] w-[5px] h-[40px] bg-[#1e2340] rounded-l-md" />

                {/* Screen shine */}
                <div className="absolute inset-[2px] rounded-[38px] pointer-events-none z-10 overflow-hidden">
                  <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/[0.04] rotate-12 rounded-full" />
                </div>
              </div>

              {/* Reflection */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[30px] opacity-20 blur-xl rounded-full"
                style={{ background: 'radial-gradient(ellipse, #D6A65A 0%, transparent 70%)', transform: 'translateX(-50%) rotateX(75deg) translateY(20px)' }}
              />
            </div>
          </div>
        </div>

        {/* Scroll hint (only at step 0) */}
        {activeStep === 0 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
            <span className="text-white text-[10px] font-bold tracking-[0.3em] uppercase">Scroll to explore</span>
            <div className="w-5 h-8 border border-white/30 rounded-full flex items-start justify-center pt-1.5">
              <div className="w-1 h-2 bg-white/60 rounded-full" style={{ animation: 'scrollBob 1.5s ease-in-out infinite' }} />
            </div>
          </div>
        )}
      </div>

      {/* CSS keyframes */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes scrollBob {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }
      `}</style>
    </div>
  )
}
