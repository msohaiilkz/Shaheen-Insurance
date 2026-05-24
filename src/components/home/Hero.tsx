import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Star, TrendingUp, CheckCircle2 } from 'lucide-react'

const BADGES = [
  { icon: Shield, label: 'PACRA A++', sub: 'Stable Outlook' },
  { icon: Star, label: 'Since 1996', sub: 'PAF Sponsored' },
  { icon: TrendingUp, label: 'Rs. 600M', sub: 'Paid-up Capital' },
]

const TRUST_POINTS = [
  'Licensed by SECP — Window Takaful Operator',
  'Sponsored by Shaheen Foundation (PAF)',
  'PACRA rated A++ — Stable Outlook',
  '12 branches across Pakistan',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-hero-gradient flex items-center overflow-hidden">

      {/* Background — structural grid, no soft blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(184,149,42,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(184,149,42,1) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />
        {/* Hard diagonal accent line */}
        <div className="absolute top-0 right-0 w-[1px] h-full bg-gold/10" />
        <div className="absolute top-0 right-1/3 w-[1px] h-full bg-white/5" />
        {/* Bottom accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 w-full grid lg:grid-cols-2 gap-16 items-center py-14 lg:py-0">

        {/* Left — Text content */}
        <div>
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gold/15 border border-gold/40 px-4 py-1.5 mb-8"
          >
            <span className="w-1.5 h-1.5 bg-gold animate-pulse" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase font-display">
              Shaheen Foundation — Pakistan Air Force
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6 tracking-wide uppercase"
          >
            A Sign of
            <br />
            <span className="text-gradient-gold">Protection</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/60 text-base leading-relaxed mb-8 max-w-xl"
          >
            Pakistan's trusted general insurance company since 1996. Comprehensive coverage across Motor, Health, Travel, Fire, Marine, Aviation and more.
          </motion.p>

          {/* Trust checkpoints */}
          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-2 mb-10"
          >
            {TRUST_POINTS.map((pt) => (
              <li key={pt} className="flex items-center gap-3 text-sm text-white/70">
                <CheckCircle2 size={14} className="text-gold shrink-0" />
                {pt}
              </li>
            ))}
          </motion.ul>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-3 mb-14"
          >
            <Link to="/products" className="btn-primary text-sm">
              Explore Products
              <ArrowRight size={15} />
            </Link>
            <Link to="/claims/intimation" className="btn-outline text-sm">
              File a Claim
            </Link>
            <Link to="/contact" className="btn-outline text-sm">
              Get a Quote
            </Link>
          </motion.div>

          {/* Badge strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-wrap gap-3"
          >
            {BADGES.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-white/6 border border-white/12 px-4 py-3"
              >
                <div className="w-8 h-8 bg-gold/20 flex items-center justify-center">
                  <Icon size={15} className="text-gold" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm leading-none">{label}</div>
                  <div className="text-white/45 text-xs mt-0.5">{sub}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Corporate credentials panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="hidden lg:block"
        >
          <div className="border border-white/15 bg-white/5 p-8">

            {/* Logo */}
            <div className="flex justify-center pb-7 mb-7 border-b border-white/10">
              <img
                src="/logo.png"
                alt="Shaheen Insurance Emblem"
                className="w-28 h-28 object-contain"
                style={{ filter: 'invert(1)' }}
              />
            </div>

            {/* Company name */}
            <div className="text-center pb-6 mb-6 border-b border-white/10">
              <div className="font-display font-bold text-white text-sm tracking-widest uppercase">
                Shaheen Insurance Company Ltd
              </div>
              <div className="text-gold text-[10px] tracking-widest uppercase mt-1.5 font-semibold">
                A Sign of Protection
              </div>
            </div>

            {/* Credentials list */}
            <div className="space-y-3">
              {[
                { label: 'PACRA Rating', value: 'A++ — Stable Outlook' },
                { label: 'Regulator', value: 'SECP — Window Takaful Op.' },
                { label: 'Exchange', value: 'PSX Listed — Symbol: SHNI' },
                { label: 'Established', value: '1996 — Shaheen Foundation (PAF)' },
                { label: 'Paid-up Capital', value: 'Rs. 600 Million' },
                { label: 'Branch Network', value: '12 Offices Nationwide' },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-start justify-between gap-4 pb-3 border-b border-white/8 last:border-0 last:pb-0">
                  <span className="text-white/45 text-[11px] font-medium shrink-0">{label}</span>
                  <span className="text-white text-[11px] font-semibold text-right leading-snug">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/15" />
    </section>
  )
}
