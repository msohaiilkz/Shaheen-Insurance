import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

interface Crumb { label: string; path?: string }

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumbs: Crumb[]
  badge?: string
}

export default function PageHero({ title, subtitle, breadcrumbs, badge }: PageHeroProps) {
  return (
    <section className="relative bg-hero-gradient pt-10 pb-12 md:pt-14 md:pb-16 overflow-hidden">
      {/* Structural grid background — no soft blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(214,166,90,1) 1px,transparent 1px),linear-gradient(90deg,rgba(214,166,90,1) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />
        <div className="absolute top-0 right-0 w-[1px] h-full bg-gold/10" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        {/* Breadcrumb */}
        <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="flex items-center gap-1.5 text-xs text-white/40 mb-8 flex-wrap">
          <Link to="/" className="hover:text-gold transition-colors flex items-center gap-1"><Home size={11} />Home</Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <ChevronRight size={11} className="opacity-40" />
              {crumb.path
                ? <Link to={crumb.path} className="hover:text-gold transition-colors">{crumb.label}</Link>
                : <span className="text-white/65">{crumb.label}</span>}
            </span>
          ))}
        </motion.nav>

        {badge && (
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-gold/15 border border-gold/40 px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 bg-gold animate-pulse" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase font-display">{badge}</span>
          </motion.div>
        )}

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.15 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 uppercase tracking-wide">
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.25 }}
            className="text-white/55 text-base max-w-2xl leading-relaxed">
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
