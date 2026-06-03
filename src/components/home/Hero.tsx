import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowRight, Shield, Star, TrendingUp, CheckCircle2, Car, Heart, Plane, Flame, Wrench, Bell, FileText, MapPin, ChevronDown, Eye, ClipboardList, Headphones, User, Home } from 'lucide-react'

const TRUST_POINTS = [
  'Licensed by SECP — Window Takaful Operator',
  'Sponsored by Shaheen Foundation (PAF)',
  'PACRA rated A++ — Stable Outlook',
  '12 branches across Pakistan',
]

const FLOATING_CARDS = [
  { icon: Shield, label: 'PACRA A++', sub: 'Stable Outlook', color: 'from-gold/20 to-gold/5', x: -180, y: -140 },
  { icon: TrendingUp, label: 'Rs. 600M', sub: 'Paid-up Capital', color: 'from-blue-400/15 to-blue-400/5', x: 175, y: -110 },
  { icon: Star, label: 'Since 1996', sub: 'PAF Sponsored', color: 'from-gold/15 to-gold/5', x: 185, y: 130 },
  { icon: MapPin, label: '12 Branches', sub: 'Nationwide', color: 'from-green-400/15 to-green-400/5', x: -175, y: 120 },
]


function PhoneStatusBar({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`flex justify-between items-center px-1 mb-2 ${dark ? '' : ''}`}>
      <span className={`text-[8px] font-medium ${dark ? 'text-white/50' : 'text-gray-400'}`}>9:41</span>
      <div className="flex gap-1 items-center">
        <div className="flex gap-0.5">
          {[3, 4, 5, 5, 4].map((h, i) => (
            <div key={i} className={`w-[2px] rounded-full ${dark ? 'bg-white/60' : 'bg-gray-500'}`} style={{ height: h }} />
          ))}
        </div>
        <div className={`w-4 h-2 border rounded-[2px] ml-1 relative ${dark ? 'border-white/50' : 'border-gray-400'}`}>
          <div className="absolute right-0 top-[2px] bottom-[2px] bg-gold rounded-[1px]" style={{ width: '60%' }} />
        </div>
      </div>
    </div>
  )
}

const MOBILE_NUM = '03321545923'

function LoginScreen({ onComplete }: { onComplete: () => void }) {
  const [mobileLen, setMobileLen] = useState(0)
  const [passLen, setPassLen] = useState(0)
  const [btnState, setBtnState] = useState<'idle' | 'active' | 'clicked'>('idle')
  const [focusField, setFocusField] = useState<'none' | 'mobile' | 'pass'>('none')

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []

    // Focus mobile field
    timers.push(setTimeout(() => setFocusField('mobile'), 600))

    // Type mobile number char by char
    for (let i = 1; i <= MOBILE_NUM.length; i++) {
      timers.push(setTimeout(() => setMobileLen(i), 600 + i * 95))
    }

    const afterMobile = 600 + MOBILE_NUM.length * 95

    // Switch focus to password
    timers.push(setTimeout(() => setFocusField('pass'), afterMobile + 350))

    // Fill password dots
    for (let j = 1; j <= 8; j++) {
      timers.push(setTimeout(() => setPassLen(j), afterMobile + 350 + j * 80))
    }

    const afterPass = afterMobile + 350 + 8 * 80

    // Blur, activate button
    timers.push(setTimeout(() => { setFocusField('none'); setBtnState('active') }, afterPass + 350))

    // Click button
    timers.push(setTimeout(() => setBtnState('clicked'), afterPass + 900))

    // Complete → go to home
    timers.push(setTimeout(() => onComplete(), afterPass + 1350))

    return () => timers.forEach(clearTimeout)
  }, [])

  const mobileDisplay = MOBILE_NUM.slice(0, mobileLen)

  return (
    <div className="absolute inset-0 bg-white flex flex-col pt-10 px-4 overflow-hidden">
      <PhoneStatusBar />

      {/* Logo */}
      <div className="flex justify-start mb-4">
        <img src="/logo.png" alt="Shaheen Insurance" className="h-11 w-auto object-contain" />
      </div>

      <div className="text-[17px] font-bold text-gray-900 leading-tight mb-1">Log In</div>
      <p className="text-[8px] text-gray-400 mb-4 leading-relaxed">Enter your mobile number and password to log in</p>

      {/* Mobile Number */}
      <div className="text-[8px] font-semibold text-gray-700 mb-1">Mobile Number</div>
      <div className={`border rounded-xl px-3 py-2 mb-3 transition-colors duration-200 ${focusField === 'mobile' ? 'border-navy bg-white' : 'border-gray-200 bg-gray-50'}`}>
        <div className="flex items-center gap-0.5 min-h-[13px]">
          <span className="text-[9px] text-gray-800">{mobileDisplay}</span>
          {focusField === 'mobile' && (
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="w-[1px] h-3 bg-navy ml-0.5"
            />
          )}
          {mobileLen === 0 && focusField !== 'mobile' && (
            <span className="text-[9px] text-gray-300">03XXXXXXXXX</span>
          )}
        </div>
      </div>

      {/* Password */}
      <div className="text-[8px] font-semibold text-gray-700 mb-1">Password</div>
      <div className={`border rounded-xl px-3 py-2 mb-2 flex justify-between items-center transition-colors duration-200 ${focusField === 'pass' ? 'border-navy bg-white' : 'border-gray-200 bg-gray-50'}`}>
        <div className="flex items-center gap-0.5 min-h-[13px]">
          <span className="text-[9px] text-gray-700 tracking-widest leading-none">{'•'.repeat(passLen)}</span>
          {focusField === 'pass' && (
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="w-[1px] h-3 bg-navy ml-0.5"
            />
          )}
        </div>
        <Eye size={9} className="text-gray-300 shrink-0" />
      </div>

      <div className="text-right mb-5">
        <span className="text-[8px] text-gold font-medium">Forgot password ?</span>
      </div>

      {/* Login button */}
      <motion.div
        animate={btnState === 'clicked' ? { scale: 0.96 } : btnState === 'active' ? { scale: 1 } : { scale: 1 }}
        transition={{ duration: 0.15 }}
        className="rounded-xl py-2.5 text-center mb-4 transition-colors duration-300"
        style={{ background: btnState === 'active' || btnState === 'clicked' ? '#28368F' : 'rgba(40,54,143,0.35)' }}
      >
        <span className="text-white text-[10px] font-semibold">Log In</span>
      </motion.div>

      <div className="mt-auto pb-4 text-center">
        <span className="text-[8px] text-gray-400">Don't have an account? </span>
        <span className="text-[8px] text-gold font-semibold">Sign Up</span>
      </div>
    </div>
  )
}

function AppHomeScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const t = setTimeout(onComplete, 3500)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="absolute inset-0 bg-[#f8f9fc] flex flex-col pt-10 px-3 overflow-hidden">
      <PhoneStatusBar />

      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-1 flex-1 bg-white border border-gray-200 rounded-xl px-2.5 py-1.5">
          <span className="text-[8px] font-semibold text-gray-700 flex-1">General Insurance</span>
          <ChevronDown size={8} className="text-gray-400 shrink-0" />
        </div>
        <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0">
          <Bell size={10} className="text-gray-600" />
        </div>
      </div>

      {/* Hero banner */}
      <div className="rounded-2xl mb-3 relative overflow-hidden" style={{ height: 90, background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)' }}>
        {/* Family image — full height, right side, mix-blend-multiply removes white bg */}
        <img
          src="/pakistani_family.png"
          alt=""
          className="absolute right-0 top-0 h-full w-auto mix-blend-multiply object-cover"
          style={{ maxWidth: '60%', objectPosition: 'top center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/90 via-blue-100/60 to-transparent" />
        <div className="relative p-3">
          <Plane size={14} className="text-gold mb-1" />
          <div className="text-[9px] font-bold text-navy leading-tight" style={{ width: '50%' }}>Your Journey,{'\n'}Our Protection</div>
          <div className="text-[6px] text-gray-500 mt-0.5" style={{ width: '52%' }}>Safe & Secure Travel Insurance by Shaheen Insurance</div>
          <div className="flex gap-1 mt-2">
            <div className="w-4 h-[3px] rounded-full bg-navy" />
            <div className="w-[5px] h-[3px] rounded-full bg-gray-300" />
          </div>
        </div>
      </div>

      {/* Section heading */}
      <div className="mb-2">
        <div className="text-[7px] text-gray-400">Let's find you</div>
        <div className="text-[11px] font-bold text-gray-900">The Best Insurance</div>
      </div>

      {/* Product cards */}
      <div className="grid grid-cols-3 gap-1.5 mb-3">
        {[
          { Icon: Car, label: 'Motor\nInsurance', soon: false },
          { Icon: Plane, label: 'Travel\nInsurance', soon: false },
          { Icon: Heart, label: 'Health\nInsurance', soon: true },
        ].map(({ Icon, label, soon }) => (
          <div key={label} className="bg-white border border-gray-100 rounded-xl p-2 flex flex-col items-center relative">
            {soon && (
              <span className="absolute -top-1 -right-1 bg-red text-white text-[5px] font-bold px-1.5 py-0.5 rounded-full">SOON</span>
            )}
            <div className="w-8 h-8 mb-1.5 flex items-center justify-center">
              <Icon size={20} className="text-navy" strokeWidth={1.5} />
            </div>
            <span className="text-[7px] font-semibold text-gray-700 text-center leading-tight whitespace-pre-line">{label}</span>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="text-[9px] font-bold text-gray-900 mb-1.5">Quick Actions</div>
      <div className="bg-white border border-gray-100 rounded-2xl p-2">
        <div className="grid grid-cols-4 gap-1">
          {[
            { Icon: ClipboardList, label: 'My Policies' },
            { Icon: FileText, label: 'Track Claim' },
            { Icon: Headphones, label: 'Support' },
            { Icon: User, label: 'Profile' },
          ].map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                <Icon size={12} className="text-navy/60" />
              </div>
              <span className="text-[6px] text-gray-500 text-center leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-2 py-2 flex justify-around">
        {[
          { Icon: Home, label: 'Home', active: true },
          { Icon: ClipboardList, label: 'My Policy', active: false },
          { Icon: FileText, label: 'My Claim', active: false },
          { Icon: Flame, label: 'Menu', active: false },
        ].map(({ Icon, label, active }) => (
          <div key={label} className={`flex flex-col items-center gap-0.5 ${active ? 'text-navy' : 'text-gray-400'}`}>
            <Icon size={12} />
            <span className="text-[6px] font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const [screen, setScreen] = useState(0)
  const goNext = () => setScreen(s => (s + 1) % 2)

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Video + Animated Background ─────────────────── */}
      <div className="absolute inset-0 z-0">
        {/* Base animated gradient */}
        <div className="absolute inset-0 hero-animated-bg" />

        {/* Video layer */}
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.15] mix-blend-luminosity scale-110"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-buildings-41723-large.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-business-people-walking-in-a-corporate-building-4357-large.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/60 to-navy/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />

        {/* Animated gold grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(214,166,90,0.9) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(214,166,90,0.9) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating particles */}
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold/20"
            style={{
              left: `${(i * 17 + 5) % 100}%`,
              top: `${(i * 31 + 9) % 100}%`,
              width: (i % 4) + 1,
              height: (i % 4) + 1,
            }}
            animate={{ y: [0, -20, 0], opacity: [0.1, 0.5, 0.1] }}
            transition={{ duration: 5 + (i % 6), delay: i * 0.25, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* Radial glow top-right */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Accent lines */}
        <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-gold/40 via-gold/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold/50 via-gold/20 to-transparent" />
      </div>

      {/* ── Content ─────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full grid lg:grid-cols-2 gap-8 items-center py-20 lg:py-0 mt-14 md:mt-16 lg:mt-0">

        {/* LEFT — Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-white/5 border border-white/20 backdrop-blur-sm px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-gold shadow-[0_0_8px_rgba(214,166,90,0.8)]" />
            <span className="text-white text-xs font-semibold tracking-[0.2em] uppercase font-display">
              Shaheen Foundation — Pakistan Air Force
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl lg:text-7xl xl:text-[5rem] font-bold text-white leading-[1.05] mb-6 tracking-wide uppercase"
          >
            A Sign of
            <br />
            <span className="text-gold">Protection</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl font-light"
          >
            Pakistan's trusted general insurance company since 1996. Comprehensive coverage across Motor, Health, Travel, Fire, Marine, and Aviation.
          </motion.p>

          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.45 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
          >
            {TRUST_POINTS.map((pt) => (
              <motion.li
                key={pt}
                variants={{ hidden: { opacity: 0, x: -18 }, visible: { opacity: 1, x: 0, transition: { duration: 0.45 } } }}
                className="flex items-start gap-2.5 text-sm text-white/85"
              >
                <CheckCircle2 size={15} className="text-gold shrink-0 mt-0.5" />
                <span className="leading-snug">{pt}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link to="/products"
              className="group inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-bold px-8 py-3.5 transition-all duration-300">
              Explore Products
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/claims/intimation"
              className="inline-flex items-center gap-2 bg-red hover:bg-red-dark text-white font-bold px-8 py-3.5 transition-all duration-300">
              File a Claim
            </Link>
          </motion.div>

          {/* Badge strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="flex flex-wrap gap-3"
          >
            {[
              { icon: Shield, label: 'PACRA A++', sub: 'Stable Outlook' },
              { icon: Star, label: 'Since 1996', sub: 'PAF Sponsored' },
              { icon: TrendingUp, label: 'Rs. 600M', sub: 'Paid-up Capital' },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3 bg-white/5 backdrop-blur border-l-2 border-gold px-4 py-2.5">
                <Icon size={18} className="text-gold" />
                <div>
                  <div className="text-white font-bold text-sm">{label}</div>
                  <div className="text-white/55 text-[10px] uppercase tracking-wider">{sub}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Phone Mockup with App UI */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="hidden lg:flex items-center justify-center relative h-[580px]"
        >

          {/* Pulse rings behind phone */}
          {[320, 400, 480].map((size, i) => (
            <motion.div
              key={size}
              className="absolute rounded-full border border-gold/10"
              style={{ width: size, height: size }}
              animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.08, 0.3] }}
              transition={{ duration: 3 + i, delay: i * 0.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}

          {/* Floating info cards around phone */}
          {FLOATING_CARDS.map(({ icon: Icon, label, sub, color, x, y }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.15 }}
              style={{ position: 'absolute', transform: `translate(${x}px, ${y}px)` }}
              className={`bg-gradient-to-br ${color} backdrop-blur-md border border-white/15 rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 min-w-[130px]`}
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0"
              >
                <Icon size={15} className="text-gold" />
              </motion.div>
              <div>
                <div className="text-white font-bold text-xs">{label}</div>
                <div className="text-white/50 text-[10px]">{sub}</div>
              </div>
            </motion.div>
          ))}

          {/* Phone frame */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10"
            style={{ filter: 'drop-shadow(0 32px 64px rgba(0,0,0,0.6)) drop-shadow(0 0 40px rgba(214,166,90,0.15))' }}
          >
            {/* Phone outer shell */}
            <div className="w-[220px] h-[460px] rounded-[38px] border-[3px] border-white/20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm relative overflow-hidden"
              style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 0 60px rgba(214,166,90,0.12)' }}
            >
              {/* Phone notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black/60 rounded-full z-20 flex items-center justify-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                <div className="w-6 h-1 rounded-full bg-white/15" />
              </div>

              {/* Screen content — animated cycles */}
              <div className="absolute inset-0 overflow-hidden rounded-[35px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={screen}
                    initial={{ opacity: 0, scale: 0.97, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.02, y: -10 }}
                    transition={{ duration: 0.45, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  >
                    {screen === 0
                      ? <LoginScreen key={screen} onComplete={goNext} />
                      : <AppHomeScreen key={screen} onComplete={goNext} />
                    }
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Phone side button */}
            <div className="absolute right-[-4px] top-20 w-[3px] h-12 bg-white/20 rounded-l-full" />
            <div className="absolute left-[-4px] top-16 w-[3px] h-8 bg-white/20 rounded-r-full" />
            <div className="absolute left-[-4px] top-28 w-[3px] h-8 bg-white/20 rounded-r-full" />
          </motion.div>

          {/* Glow under phone */}
          <div className="absolute bottom-4 w-40 h-8 bg-gold/20 blur-2xl rounded-full" style={{ transform: 'translateY(20px)' }} />
        </motion.div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy/40 to-transparent z-5 pointer-events-none" />
    </section>
  )
}
