import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Shield, Car, Flame, Anchor, Plane, Wrench, Heart,
  CheckCircle2, ArrowRight, MapPin, Phone, Star,
  TrendingUp, FileText, Users, Award,
} from 'lucide-react'

const SLIDES = [
  {
    id: 'portal',
    tag: 'Digital Portal',
    title: 'Manage Your',
    highlight: 'Policies Online',
    desc: 'Access your active policies, download certificates, check coverage details — all from one secure dashboard.',
    cta: { label: 'View Products', path: '/products' },
    color: '#D6A65A',
  },
  {
    id: 'products',
    tag: 'Our Products',
    title: '8+ Insurance',
    highlight: 'Products',
    desc: 'Motor, Marine, Fire, Travel, Engineering, Health & more — comprehensive coverage for every need.',
    cta: { label: 'Explore Products', path: '/products' },
    color: '#3D4FA3',
  },
  {
    id: 'claims',
    tag: 'Claims Portal',
    title: 'Fast & Transparent',
    highlight: 'Claim Settlement',
    desc: 'Submit claims digitally with document upload, real-time tracking, and guaranteed settlement within 5 working days.',
    cta: { label: 'File a Claim', path: '/claims/intimation' },
    color: '#E12A2E',
  },
  {
    id: 'about',
    tag: 'About Shaheen',
    title: '28 Years of',
    highlight: 'Trusted Service',
    desc: 'PAF-sponsored. PACRA A++ rated. Rs. 600M paid-up capital. Serving Pakistan with integrity since 1996.',
    cta: { label: 'About Us', path: '/about' },
    color: '#16a34a',
  },
]

/* ── Browser screen contents ── */
function PortalScreen() {
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-36 bg-[#0D1B4D] border-r border-white/5 p-3 flex flex-col gap-1 shrink-0">
        <img src="/logo.png" alt="Shaheen" className="h-8 w-auto object-contain mb-4 mx-auto" />
        {[
          { Icon: Shield, l: 'Dashboard', active: true },
          { Icon: FileText, l: 'Policies', active: false },
          { Icon: CheckCircle2, l: 'Claims', active: false },
          { Icon: MapPin, l: 'Branches', active: false },
          { Icon: Phone, l: 'Support', active: false },
        ].map(({ Icon, l, active }) => (
          <div key={l} className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-[9px] font-semibold transition-all ${active ? 'bg-gold/20 text-gold' : 'text-white/40 hover:text-white/60'}`}>
            <Icon size={11} /> {l}
          </div>
        ))}
      </div>
      {/* Main */}
      <div className="flex-1 bg-[#0f1e57] p-4 overflow-hidden">
        <div className="text-white/40 text-[8px] font-bold uppercase tracking-wider mb-3">My Dashboard</div>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[
            { Icon: Shield, val: '2', label: 'Active Policies', color: 'text-gold' },
            { Icon: CheckCircle2, val: '0', label: 'Open Claims', color: 'text-green-400' },
            { Icon: Award, val: 'A++', label: 'PACRA Rating', color: 'text-blue-400' },
          ].map(({ Icon, val, label, color }) => (
            <div key={label} className="bg-white/5 border border-white/8 rounded-xl p-2.5 text-center">
              <Icon size={12} className={`${color} mx-auto mb-1`} />
              <div className={`font-bold text-sm ${color}`}>{val}</div>
              <div className="text-white/40 text-[7px]">{label}</div>
            </div>
          ))}
        </div>
        <div className="text-white/40 text-[8px] font-bold uppercase tracking-wider mb-2">Recent Policies</div>
        {[
          { type: 'Motor Insurance', no: 'SIC-2024-0012', status: 'Active' },
          { type: 'Travel Insurance', no: 'SIC-2024-0034', status: 'Active' },
        ].map(p => (
          <div key={p.no} className="flex items-center justify-between bg-white/4 border border-white/6 rounded-lg px-3 py-2 mb-1.5">
            <div>
              <div className="text-white text-[9px] font-semibold">{p.type}</div>
              <div className="text-white/30 text-[7px]">{p.no}</div>
            </div>
            <span className="bg-green-500/15 text-green-400 text-[7px] font-bold px-2 py-0.5 rounded-full">{p.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProductsScreen() {
  const prods = [
    { Icon: Car, l: 'Motor', tag: 'Comprehensive' },
    { Icon: Flame, l: 'Fire', tag: 'Property' },
    { Icon: Anchor, l: 'Marine', tag: 'Cargo' },
    { Icon: Plane, l: 'Travel', tag: 'USD 50K' },
    { Icon: Wrench, l: 'Engineering', tag: 'CAR/EAR' },
    { Icon: Heart, l: 'Health', tag: 'Takaful' },
  ]
  return (
    <div className="h-full bg-[#0f1e57] p-4 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-white font-bold text-sm">Insurance Products</div>
          <div className="text-white/40 text-[8px]">8+ products available</div>
        </div>
        <img src="/logo.png" alt="Shaheen" className="h-7 w-auto object-contain" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {prods.map(({ Icon, l, tag }) => (
          <motion.div
            key={l}
            whileHover={{ y: -2 }}
            className="bg-white/5 border border-white/8 rounded-xl p-3 text-center cursor-pointer hover:border-gold/30 hover:bg-gold/5 transition-all"
          >
            <div className="w-8 h-8 rounded-lg bg-navy mx-auto mb-2 flex items-center justify-center">
              <Icon size={14} className="text-gold" />
            </div>
            <div className="text-white font-semibold text-[9px]">{l}</div>
            <div className="text-white/35 text-[7px] mt-0.5">{tag}</div>
          </motion.div>
        ))}
      </div>
      <div className="mt-3 bg-gold/10 border border-gold/20 rounded-xl p-2.5 flex items-center justify-between">
        <div className="text-gold text-[9px] font-bold">PACRA A++ Stable Outlook</div>
        <Shield size={12} className="text-gold" />
      </div>
    </div>
  )
}

function ClaimsScreen() {
  return (
    <div className="h-full bg-[#0f1e57] p-4 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-white font-bold text-sm">Claim Intimation</div>
          <div className="text-white/40 text-[8px]">5-step digital process</div>
        </div>
        <img src="/logo.png" alt="Shaheen" className="h-7 w-auto object-contain" />
      </div>
      <div className="relative">
        {/* Progress line */}
        <div className="absolute left-4 top-4 bottom-4 w-[1px] bg-white/10" />
        <div className="absolute left-4 top-4 w-[1px] bg-gold transition-all" style={{ height: '60%' }} />
        {[
          { n: '01', l: 'Report Incident', s: 'Completed', done: true },
          { n: '02', l: 'Upload Documents', s: 'Completed', done: true },
          { n: '03', l: 'Surveyor Visit', s: 'Scheduled', done: true },
          { n: '04', l: 'Assessment Report', s: 'Pending', done: false },
          { n: '05', l: 'Claim Settlement', s: 'Pending', done: false },
        ].map(({ n, l, s, done }) => (
          <div key={n} className="flex items-center gap-3 mb-2.5 pl-8 relative">
            <div className={`absolute left-[11px] w-5 h-5 rounded-full border-2 flex items-center justify-center text-[7px] font-bold z-10 ${done ? 'bg-gold border-gold text-navy' : 'bg-[#0f1e57] border-white/20 text-white/30'}`}>
              {done ? '✓' : n}
            </div>
            <div className={`flex-1 flex items-center justify-between px-3 py-2 rounded-lg ${done ? 'bg-gold/8 border border-gold/15' : 'bg-white/3 border border-white/6'}`}>
              <span className={`text-[9px] font-semibold ${done ? 'text-white' : 'text-white/40'}`}>{l}</span>
              <span className={`text-[7px] font-bold px-1.5 py-0.5 rounded-full ${done ? 'bg-gold/20 text-gold' : 'bg-white/5 text-white/25'}`}>{s}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AboutScreen() {
  return (
    <div className="h-full bg-[#0f1e57] p-4 overflow-hidden">
      <div className="flex items-center gap-3 mb-4">
        <img src="/logo.png" alt="Shaheen Insurance" className="h-10 w-auto object-contain" />
        <div>
          <div className="text-white font-bold text-xs">Shaheen Insurance Co. Ltd.</div>
          <div className="text-gold text-[8px]">A Sign of Protection</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        {[
          { Icon: Award, val: 'A++', label: 'PACRA Rating', color: 'text-gold' },
          { Icon: TrendingUp, val: '600M', label: 'Paid-up Capital', color: 'text-blue-400' },
          { Icon: Users, val: '28+', label: 'Years Service', color: 'text-green-400' },
          { Icon: MapPin, val: '12+', label: 'Branches', color: 'text-purple-400' },
        ].map(({ Icon, val, label, color }) => (
          <div key={label} className="bg-white/5 border border-white/8 rounded-xl p-2.5 flex items-center gap-2">
            <Icon size={14} className={color} />
            <div>
              <div className={`font-bold text-xs ${color}`}>{val}</div>
              <div className="text-white/40 text-[7px]">{label}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white/4 border border-white/8 rounded-xl p-3">
        <div className="flex gap-2 mb-2">
          {['SECP Regulated', 'PSX Listed', 'Window Takaful'].map(b => (
            <span key={b} className="bg-navy text-gold text-[6px] font-bold px-1.5 py-0.5 rounded border border-gold/20">{b}</span>
          ))}
        </div>
        <p className="text-white/50 text-[8px] leading-relaxed">
          A project of Shaheen Foundation (PAF), delivering trusted insurance solutions across Pakistan since 1996.
        </p>
      </div>
      <div className="mt-2 flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-lg p-2">
        <Star size={10} className="text-gold shrink-0" />
        <span className="text-white/60 text-[8px]">Sponsored by Pakistan Air Force</span>
      </div>
    </div>
  )
}

const SCREENS: Record<string, React.ReactNode> = {
  portal: <PortalScreen />,
  products: <ProductsScreen />,
  claims: <ClaimsScreen />,
  about: <AboutScreen />,
}

export default function LaptopShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const laptopScale = useTransform(scrollYProgress, [0, 0.92, 1], [1, 1, 0.88])
  const laptopOpacity = useTransform(scrollYProgress, [0, 0.92, 1], [1, 1, 0])
  const laptopY = useTransform(scrollYProgress, [0, 0.92, 1], [0, 0, 30])

  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      setActiveSlide(Math.min(Math.floor(v * SLIDES.length), SLIDES.length - 1))
    })
  }, [scrollYProgress])

  const slide = SLIDES[activeSlide]

  return (
    <section
      ref={containerRef}
      className="relative bg-white"
      style={{ height: `${SLIDES.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">

        {/* White/light background */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface via-white to-blue-50/30" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(#28368F 1px, transparent 1px), linear-gradient(90deg, #28368F 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Animated accent blob */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id + '-blob'}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
            style={{ background: `radial-gradient(circle, ${slide.color}12 0%, transparent 70%)` }}
          />
        </AnimatePresence>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

          {/* LEFT — Text (full width on mobile, fixed width on desktop) */}
          <div className="w-full lg:w-80 shrink-0 text-center lg:text-left order-2 lg:order-1">

            {/* Step pills */}
            <div className="flex gap-1.5 mb-5 justify-center lg:justify-start">
              {SLIDES.map((s, i) => (
                <motion.div
                  key={s.id}
                  animate={{ width: i === activeSlide ? 32 : 8, opacity: i === activeSlide ? 1 : 0.3 }}
                  transition={{ duration: 0.3 }}
                  className="h-1.5 rounded-full"
                  style={{ background: i === activeSlide ? slide.color : '#28368F' }}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id + '-left'}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] border mb-4"
                  style={{ color: slide.color, borderColor: slide.color + '40', background: slide.color + '0f' }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: slide.color }} />
                  {slide.tag}
                </div>
                <h2 className="font-display text-3xl md:text-4xl xl:text-5xl font-bold text-navy leading-tight mb-3 uppercase tracking-wide">
                  {slide.title}
                  <br />
                  <span style={{ color: slide.color }}>{slide.highlight}</span>
                </h2>
                <p className="text-navy/55 text-sm leading-relaxed mb-5 max-w-sm mx-auto lg:mx-0">{slide.desc}</p>
                <Link
                  to={slide.cta.path}
                  className="inline-flex items-center gap-2 px-6 py-3 font-bold text-sm transition-all duration-300 hover:opacity-90 text-white"
                  style={{ background: '#28368F' }}
                >
                  {slide.cta.label} <ArrowRight size={15} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* MOBILE — Mini preview card (visible only on mobile/tablet) */}
          <div className="lg:hidden w-full order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id + '-mobile-card'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl overflow-hidden border border-navy/10 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #0D1B4D, #28368F)' }}
              >
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-3 py-2 bg-black/20 border-b border-white/8">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                    <div className="w-2 h-2 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 flex items-center gap-1 bg-white/8 rounded px-2 py-0.5">
                    <Shield size={7} className="text-gold shrink-0" />
                    <span className="text-white/40 text-[8px] font-mono">shaheeninsurance.com</span>
                  </div>
                </div>
                {/* Screen */}
                <div className="h-48 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={slide.id + '-mscreen'}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="h-full transform scale-[0.85] origin-top"
                    >
                      {SCREENS[slide.id]}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CENTER/RIGHT — Laptop mockup (desktop only) */}
          <div className="hidden lg:flex flex-1 items-center justify-center order-1 lg:order-2 min-w-0">
            <motion.div
              style={{ scale: laptopScale, opacity: laptopOpacity, y: laptopY }}
              className="relative w-full max-w-xl lg:max-w-2xl"
            >
              {/* Laptop body */}
              <div className="relative">

                {/* Screen bezel */}
                <div
                  className="rounded-t-2xl overflow-hidden mx-auto"
                  style={{
                    background: 'linear-gradient(145deg, #1e2d6b, #111827)',
                    padding: '10px 10px 0 10px',
                    boxShadow: '0 0 0 1px rgba(255,255,255,0.1), 0 20px 60px rgba(0,0,0,0.25)',
                  }}
                >
                  {/* Browser chrome */}
                  <div className="bg-[#1a2660] rounded-t-lg overflow-hidden">
                    {/* Title bar */}
                    <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                      </div>
                      {/* Address bar */}
                      <div className="flex-1 flex items-center gap-1.5 bg-white/8 rounded-md px-2.5 py-1">
                        <Shield size={8} className="text-gold shrink-0" />
                        <span className="text-white/50 text-[8px] font-mono truncate">shaheeninsurance.com</span>
                      </div>
                      <div className="flex gap-1.5 opacity-40">
                        {[1,2,3].map(i => <div key={i} className="w-3 h-3 rounded bg-white/20" />)}
                      </div>
                    </div>

                    {/* Browser tab */}
                    <div className="flex items-center px-3 pt-1.5 gap-1">
                      <div className="flex items-center gap-1.5 bg-[#0f1e57] px-3 py-1.5 rounded-t-md border-t border-x border-white/8">
                        <img src="/logo.png" alt="" className="h-3 w-auto object-contain" />
                        <span className="text-white/60 text-[8px] font-medium">Shaheen Insurance</span>
                      </div>
                      <div className="w-4 h-4 rounded-full bg-white/5 flex items-center justify-center ml-1">
                        <span className="text-white/30 text-[8px]">+</span>
                      </div>
                    </div>

                    {/* Page content */}
                    <div className="h-[240px] sm:h-[280px] md:h-[320px] overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={slide.id + '-browser'}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.45 }}
                          className="h-full"
                        >
                          {SCREENS[slide.id]}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Laptop base/hinge */}
                <div
                  className="relative mx-auto h-3 rounded-b-lg"
                  style={{
                    background: 'linear-gradient(180deg, #1a2660 0%, #0f1438 100%)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    width: '98%',
                  }}
                />
                <div
                  className="mx-auto h-3 rounded-b-2xl"
                  style={{
                    background: 'linear-gradient(180deg, #0f1438 0%, #080e24 100%)',
                    width: '85%',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                  }}
                />

                {/* Reflection under laptop */}
                <div
                  className="mx-auto mt-1 rounded-full opacity-25 blur-xl"
                  style={{
                    width: '80%',
                    height: 16,
                    background: `linear-gradient(90deg, transparent, ${slide.color}, transparent)`,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        {activeSlide === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-navy/30"
          >
            <span className="text-[9px] uppercase tracking-widest font-bold">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-[1px] h-6 bg-gradient-to-b from-gold/50 to-transparent"
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}
