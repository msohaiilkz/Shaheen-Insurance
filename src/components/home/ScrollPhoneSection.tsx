import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Car, Flame, Anchor, Plane, Wrench, Heart,
  Shield, Bell, FileText, CheckCircle2, MapPin,
  ArrowRight, Clock, PhoneCall, Star,
} from 'lucide-react'

const STEPS = [
  {
    id: 'products',
    badge: 'Insurance Portfolio',
    title: 'Every Risk,',
    highlight: 'Covered',
    desc: 'From Motor to Marine — 8+ insurance products designed for Pakistani families and businesses. One trusted company, all your protection needs.',
    cta: { label: 'Explore Products', path: '/products' },
    accent: '#D6A65A',
    phone: 'products',
  },
  {
    id: 'claims',
    badge: 'Claims Process',
    title: 'File Claims',
    highlight: 'Instantly',
    desc: '5-step digital claim intimation process. Our dedicated team ensures settlement within 5 working days — fast, transparent, and hassle-free.',
    cta: { label: 'File a Claim', path: '/claims/intimation' },
    accent: '#E12A2E',
    phone: 'claims',
  },
  {
    id: 'branches',
    badge: 'Branch Network',
    title: '12 Branches',
    highlight: 'Nationwide',
    desc: 'From Karachi to Peshawar — our branch network ensures you always have local support, wherever you are in Pakistan.',
    cta: { label: 'Find a Branch', path: '/branches' },
    accent: '#3D4FA3',
    phone: 'branches',
  },
  {
    id: 'takaful',
    badge: 'Takaful Health Care',
    title: 'Health Cover',
    highlight: 'Shariah-Compliant',
    desc: 'Window Takaful health plans — individual, family, and group coverage with access to panel hospitals across Pakistan.',
    cta: { label: 'View Health Plans', path: '/health-care' },
    accent: '#16a34a',
    phone: 'takaful',
  },
]

const PRODUCT_LIST = [
  { Icon: Car, label: 'Motor' },
  { Icon: Flame, label: 'Fire' },
  { Icon: Anchor, label: 'Marine' },
  { Icon: Plane, label: 'Travel' },
  { Icon: Wrench, label: 'Engineering' },
  { Icon: Heart, label: 'Health' },
]

const BRANCH_LIST = ['Karachi (HO)', 'Lahore', 'Islamabad', 'Rawalpindi', 'Peshawar', 'Multan', 'Faisalabad', 'Hyderabad']

function PhoneProducts() {
  return (
    <div className="flex flex-col gap-2 px-1">
      <div className="text-white/50 text-[8px] font-bold uppercase tracking-wider mb-1">Our Products</div>
      <div className="grid grid-cols-3 gap-1.5">
        {PRODUCT_LIST.map(({ Icon, label }) => (
          <div key={label} className="bg-white/6 border border-white/10 rounded-xl p-2 flex flex-col items-center gap-1">
            <div className="w-7 h-7 rounded-lg bg-gold/15 flex items-center justify-center">
              <Icon size={13} className="text-gold" />
            </div>
            <span className="text-white/60 text-[7px] font-semibold">{label}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 bg-gold/10 border border-gold/20 rounded-xl p-2.5 flex items-center gap-2">
        <Shield size={12} className="text-gold shrink-0" />
        <div>
          <div className="text-gold font-bold text-[9px]">PACRA A++ Rated</div>
          <div className="text-white/40 text-[7px]">Your claims are always secure</div>
        </div>
      </div>
    </div>
  )
}

function PhoneClaims() {
  return (
    <div className="flex flex-col gap-2 px-1">
      <div className="text-white/50 text-[8px] font-bold uppercase tracking-wider mb-1">Claim Intimation</div>
      {[
        { step: '01', label: 'Report Incident', done: true },
        { step: '02', label: 'Upload Documents', done: true },
        { step: '03', label: 'Surveyor Assigned', done: false },
        { step: '04', label: 'Assessment', done: false },
        { step: '05', label: 'Settlement', done: false },
      ].map(({ step, label, done }) => (
        <div key={step} className={`flex items-center gap-2.5 p-2 rounded-lg ${done ? 'bg-green-500/10 border border-green-500/20' : 'bg-white/4 border border-white/8'}`}>
          <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[7px] font-bold ${done ? 'bg-green-500' : 'bg-white/10 text-white/40'}`}>
            {done ? <CheckCircle2 size={11} className="text-white" /> : step}
          </div>
          <span className={`text-[9px] font-medium ${done ? 'text-green-400' : 'text-white/50'}`}>{label}</span>
        </div>
      ))}
      <div className="mt-1 bg-red/20 border border-red/30 rounded-xl p-2 flex items-center gap-2">
        <Clock size={11} className="text-red shrink-0" />
        <div className="text-[8px] text-white/60">Settlement within <span className="text-white font-bold">5 days</span></div>
      </div>
    </div>
  )
}

function PhoneBranches() {
  return (
    <div className="flex flex-col gap-1.5 px-1">
      <div className="text-white/50 text-[8px] font-bold uppercase tracking-wider mb-1">Branch Network</div>
      {BRANCH_LIST.slice(0, 6).map((branch) => (
        <div key={branch} className="flex items-center gap-2 bg-white/4 border border-white/8 rounded-lg px-2.5 py-1.5">
          <MapPin size={9} className="text-gold shrink-0" />
          <span className="text-white/65 text-[9px]">{branch}</span>
        </div>
      ))}
      <div className="text-center mt-1">
        <span className="text-gold text-[8px] font-bold">+4 more branches</span>
      </div>
    </div>
  )
}

function PhoneTakaful() {
  return (
    <div className="flex flex-col gap-2 px-1">
      <div className="text-white/50 text-[8px] font-bold uppercase tracking-wider mb-1">Takaful Health</div>
      {[
        { plan: 'Individual', cover: 'Up to Rs. 5 Lakh', Icon: Heart },
        { plan: 'Family Plan', cover: 'Self + Spouse + 2 Kids', Icon: Shield },
        { plan: 'Group Health', cover: 'Corporate Employees', Icon: Star },
      ].map(({ plan, cover, Icon }) => (
        <div key={plan} className="bg-white/5 border border-white/10 rounded-xl p-2.5 flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-green-500/15 flex items-center justify-center shrink-0">
            <Icon size={12} className="text-green-400" />
          </div>
          <div>
            <div className="text-white font-bold text-[9px]">{plan}</div>
            <div className="text-white/40 text-[7px]">{cover}</div>
          </div>
        </div>
      ))}
      <div className="mt-1 bg-green-500/10 border border-green-500/20 rounded-lg p-2 flex items-center gap-2">
        <PhoneCall size={10} className="text-green-400 shrink-0" />
        <span className="text-[8px] text-white/60">SECP Window Takaful Licensed</span>
      </div>
    </div>
  )
}

const PHONE_SCREENS: Record<string, React.ReactNode> = {
  products: <PhoneProducts />,
  claims: <PhoneClaims />,
  branches: <PhoneBranches />,
  takaful: <PhoneTakaful />,
}

export default function ScrollPhoneSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Map scroll to step index
  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      const step = Math.min(Math.floor(v * STEPS.length), STEPS.length - 1)
      setActiveStep(step)
    })
    return unsub
  }, [scrollYProgress])

  // Phone animation values
  const phoneScale = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0.7, 1, 1, 0.7])
  const phoneOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0])

  const step = STEPS[activeStep]

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${STEPS.length * 100}vh` }}
    >
      {/* Sticky wrapper — full screen, stays fixed while you scroll */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">

        {/* Animated background — changes per step */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step.id + '-bg'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 hero-animated-bg"
          />
        </AnimatePresence>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(214,166,90,0.8) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(214,166,90,0.8) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Radial glow */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step.id + '-glow'}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
            style={{ background: `radial-gradient(circle, ${step.accent}18 0%, transparent 70%)` }}
          />
        </AnimatePresence>

        {/* ── LAYOUT: Left text | Center phone | Right dots ── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-center md:justify-between gap-4 md:gap-8">

          {/* LEFT — Text content */}
          <div className="flex-1 max-w-sm hidden md:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={step.id + '-text'}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 px-3 py-1.5 mb-5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: step.accent }} />
                  <span className="text-white/70 text-[11px] font-bold uppercase tracking-[0.2em]">{step.badge}</span>
                </div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 uppercase tracking-wide">
                  {step.title}
                  <br />
                  <span style={{ color: step.accent }}>{step.highlight}</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed mb-6">{step.desc}</p>
                <Link
                  to={step.cta.path}
                  className="inline-flex items-center gap-2 px-6 py-3 font-bold text-sm text-navy transition-all duration-300 hover:opacity-90"
                  style={{ background: step.accent }}
                >
                  {step.cta.label}
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CENTER — Phone mockup */}
          <div className="flex items-center justify-center flex-shrink-0">
            <motion.div style={{ scale: phoneScale, opacity: phoneOpacity }}>
              {/* Glow ring behind phone */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.12, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute w-72 h-72 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                style={{ background: `radial-gradient(circle, ${step.accent}35 0%, transparent 70%)` }}
              />

              {/* Phone shell */}
              <div
                className="relative w-[200px] sm:w-[220px] h-[420px] sm:h-[460px] rounded-[40px] overflow-hidden"
                style={{
                  border: '2.5px solid rgba(255,255,255,0.18)',
                  background: 'linear-gradient(160deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 100%)',
                  boxShadow: `0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08), 0 0 60px ${step.accent}20`,
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* Screen inner background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B4D] via-[#162058] to-[#0D1B4D]" />

                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black/60 rounded-full z-20 flex items-center justify-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <div className="w-7 h-1 rounded-full bg-white/10" />
                </div>

                {/* App content */}
                <div className="relative z-10 flex flex-col h-full pt-11 pb-3 px-3 overflow-hidden">

                  {/* App top bar */}
                  <div className="flex items-center justify-between mb-3 px-1">
                    <div className="flex items-center gap-1.5">
                      {/* Shaheen logo */}
                      <img src="/logo.png" alt="Shaheen Insurance" className="h-6 w-auto object-contain" />
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-5 h-5 rounded-full bg-white/8 flex items-center justify-center"
                    >
                      <Bell size={9} className="text-gold" />
                    </motion.div>
                  </div>

                  {/* Step indicator bar */}
                  <div className="flex gap-1 mb-3 px-1">
                    {STEPS.map((s, i) => (
                      <div
                        key={s.id}
                        className="h-[2px] flex-1 rounded-full transition-all duration-500"
                        style={{ background: i === activeStep ? step.accent : 'rgba(255,255,255,0.12)' }}
                      />
                    ))}
                  </div>

                  {/* Screen content — animated */}
                  <div className="flex-1 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={step.id + '-screen'}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="h-full"
                      >
                        {PHONE_SCREENS[step.phone]}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Bottom nav */}
                  <div className="flex justify-around pt-2 border-t border-white/8 mt-2">
                    {[
                      { Icon: Shield, label: 'Home' },
                      { Icon: FileText, label: 'Claims' },
                      { Icon: MapPin, label: 'Branches' },
                      { Icon: Heart, label: 'Health' },
                    ].map(({ Icon, label }, i) => (
                      <div key={label} className={`flex flex-col items-center gap-0.5 ${i === activeStep ? '' : 'opacity-30'}`}>
                        <Icon size={10} style={{ color: i === activeStep ? step.accent : 'white' }} />
                        <span className="text-[6px] font-medium text-white/50">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Screen shine */}
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/[0.04] to-transparent pointer-events-none" />
              </div>

              {/* Side buttons */}
              <div className="absolute right-[-3px] top-20 w-[3px] h-10 bg-white/15 rounded-l-full" />
              <div className="absolute left-[-3px] top-16 w-[3px] h-7 bg-white/15 rounded-r-full" />
              <div className="absolute left-[-3px] top-28 w-[3px] h-7 bg-white/15 rounded-r-full" />

              {/* Bottom glow */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-6 rounded-full blur-xl opacity-60"
                style={{ background: step.accent }}
              />
            </motion.div>
          </div>

          {/* RIGHT — Step dots + mobile text */}
          <div className="shrink-0 md:flex-1 md:max-w-sm flex flex-col items-end gap-4">

            {/* Mobile-only text */}
            <div className="md:hidden w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step.id + '-mtext'}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: step.accent }}>{step.badge}</div>
                  <h3 className="font-display text-2xl font-bold text-white uppercase">
                    {step.title} <span style={{ color: step.accent }}>{step.highlight}</span>
                  </h3>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Step dots */}
            <div className="hidden md:flex flex-col gap-3">
              {STEPS.map((s, i) => (
                <div key={s.id} className="flex items-center gap-3">
                  <div className="text-right hidden lg:block">
                    <motion.div
                      animate={{ opacity: i === activeStep ? 1 : 0.3 }}
                      className="text-[11px] font-bold text-white uppercase tracking-wider"
                    >
                      {s.badge}
                    </motion.div>
                  </div>
                  <motion.div
                    animate={{
                      width: i === activeStep ? 28 : 6,
                      opacity: i === activeStep ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-[3px] rounded-full"
                    style={{ background: i === activeStep ? step.accent : 'rgba(255,255,255,0.3)' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint — first step only */}
        {activeStep === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
          >
            <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-[1px] h-8 bg-gradient-to-b from-gold/60 to-transparent"
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}
