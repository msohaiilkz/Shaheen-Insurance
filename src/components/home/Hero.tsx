import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, TrendingUp, Star, MapPin } from 'lucide-react'

const TICKER_ITEMS = [
  { icon: Shield, text: 'PACRA A++ Rated' },
  { icon: Star, text: 'PAF Sponsored' },
  { icon: TrendingUp, text: 'Rs. 600M Capital' },
  { icon: MapPin, text: '12 Branches' },
  { icon: Shield, text: 'Since 1996' },
  { icon: Star, text: 'SECP Regulated' },
  { icon: TrendingUp, text: 'Window Takaful' },
  { icon: Shield, text: 'PACRA A++ Rated' },
  { icon: Star, text: 'PAF Sponsored' },
  { icon: TrendingUp, text: 'Rs. 600M Capital' },
  { icon: MapPin, text: '12 Branches' },
  { icon: Shield, text: 'Since 1996' },
]

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex flex-col overflow-hidden">

      {/* ── Video background ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-buildings-41723-large.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-business-people-walking-in-a-corporate-building-4357-large.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay — strong at bottom, lighter at top */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/60 to-navy/85" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-radial-vignette" style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(13,20,64,0.6) 100%)'
        }} />
      </div>

      {/* ── Main content — centered ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-5">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 mb-7"
        >
          <div className="h-px w-8 bg-gold/70" />
          <span className="text-gold/90 text-[11px] font-bold tracking-[0.3em] uppercase">
            Shaheen Foundation — Pakistan Air Force
          </span>
          <div className="h-px w-8 bg-gold/70" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-black text-white uppercase leading-[0.95] tracking-tight mb-6"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}
        >
          A Sign of<br />
          <span className="text-gold">Protection</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-white/65 text-base md:text-lg max-w-xl leading-relaxed mb-10 font-light"
        >
          Pakistan's trusted general insurance company since 1996. Motor, Health, Travel, Fire, Marine & more.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
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
        </motion.div>
      </div>

      {/* ── Stats ticker — bottom bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="relative z-10 bg-white/5 backdrop-blur-md border-t border-white/10 py-3.5 overflow-hidden"
      >
        {/* Fade edges */}
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
