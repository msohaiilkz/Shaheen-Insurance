import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, TrendingUp, Star, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { gsap } from '../../lib/gsap'
import { useJourney } from '../../context/JourneyContext'

const TICKER_ITEMS = [
  { icon: Shield,    text: 'PACRA A++ Rated' },
  { icon: Star,      text: 'PAF Sponsored' },
  { icon: TrendingUp, text: 'Rs. 600M Capital' },
  { icon: MapPin,    text: '12 Branches' },
  { icon: Shield,    text: 'Since 1996' },
  { icon: Star,      text: 'SECP Regulated' },
  { icon: TrendingUp, text: 'Window Takaful' },
  { icon: Shield,    text: 'PACRA A++ Rated' },
  { icon: Star,      text: 'PAF Sponsored' },
  { icon: TrendingUp, text: 'Rs. 600M Capital' },
  { icon: MapPin,    text: '12 Branches' },
  { icon: Shield,    text: 'Since 1996' },
]

export default function Hero() {
  const { isTakaful } = useJourney()
  const heroRef = useRef<HTMLElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const word1Ref = useRef<HTMLSpanElement>(null)
  const word2Ref = useRef<HTMLSpanElement>(null)
  const word3Ref = useRef<HTMLSpanElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Badge slides down
      tl.from(badgeRef.current, { opacity: 0, y: -20, duration: 0.6 })

      // Words reveal from bottom (clip + translate)
      tl.from(word1Ref.current, { opacity: 0, y: '100%', duration: 0.7 }, '-=0.3')
      tl.from(word2Ref.current, { opacity: 0, y: '100%', duration: 0.7 }, '-=0.5')
      tl.from(word3Ref.current, { opacity: 0, y: '100%', duration: 0.7 }, '-=0.5')

      // Subtitle + CTA
      tl.from(subtitleRef.current, { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
      tl.from(ctaRef.current, { opacity: 0, y: 16, duration: 0.5 }, '-=0.3')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative h-screen min-h-[600px] flex flex-col overflow-hidden">

      {/* ── Video background ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src="/hero1.mp4" type="video/mp4" />
          <source src="/hero2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/60 to-navy/85" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(13,20,64,0.6) 100%)' }}
        />
      </div>

      {/* ── SVG decorative lines ── */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none z-[1]" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="xMidYMid slice">
        <line x1="0" y1="450" x2="1440" y2="450" stroke="#D6A65A" strokeWidth="0.5" />
        <line x1="720" y1="0" x2="720" y2="900" stroke="#D6A65A" strokeWidth="0.5" />
        <circle cx="720" cy="450" r="200" stroke="#D6A65A" strokeWidth="0.5" />
        <circle cx="720" cy="450" r="350" stroke="#D6A65A" strokeWidth="0.3" />
      </svg>

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-5">

        {/* Badge */}
        <div ref={badgeRef} className="inline-flex items-center gap-2.5 mb-7">
          <div className="h-px w-8 bg-gold/70" />
          <span className="text-gold/90 text-[11px] font-bold tracking-[0.3em] uppercase">
            Shaheen Foundation — Pakistan Air Force
          </span>
          <div className="h-px w-8 bg-gold/70" />
        </div>

        {/* Headline — clipped word reveal */}
        <h1
          className="font-display font-black text-white uppercase leading-[0.95] tracking-tight mb-6"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}
        >
          <span className="block overflow-hidden">
            <span ref={word1Ref} className="block">A Sign of</span>
          </span>
          <span className="block overflow-hidden">
            <span ref={word2Ref} className="block">
              <span className="text-gold">Protection</span>
            </span>
          </span>
        </h1>

        {/* Hidden word3 for symmetry */}
        <span ref={word3Ref} className="hidden" aria-hidden />

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-white/65 text-base md:text-lg max-w-xl leading-relaxed mb-10 font-light"
        >
          {isTakaful
            ? "Pakistan's trusted Window Takaful provider since 1996. Motor, Health, Travel, Fire, Marine & more — Shariah-compliant."
            : "Pakistan's trusted general insurance company since 1996. Motor, Health, Travel, Fire, Marine & more."}
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-navy font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200"
          >
            Explore Products
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/claims/intimation"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all duration-200"
          >
            File a Claim
          </Link>
        </div>
      </div>

      {/* ── Stats ticker ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="relative z-10 bg-white/5 backdrop-blur-md border-t border-white/10 py-3.5 overflow-hidden"
      >
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-navy/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-navy/50 to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex items-center gap-0 whitespace-nowrap w-max"
        >
          {TICKER_ITEMS.map(({ icon: Icon, text }, i) => (
            <span key={i} className="inline-flex items-center gap-2 px-6">
              <Icon size={13} className="text-gold shrink-0" />
              <span className="text-white/70 text-[12px] font-semibold tracking-wide uppercase">{text}</span>
              <span className="text-white/20 ml-4">·</span>
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
