import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

interface Crumb { label: string; path?: string }

interface AboutHeroProps {
  category: string
  title: string
  subtitle?: string
  breadcrumbs: Crumb[]
  accent?: { value: string; label: string }
  image?: string
}

export default function AboutHero({ category, title, subtitle, breadcrumbs, accent, image }: AboutHeroProps) {
  return (
    <section className="relative bg-navy overflow-hidden" style={{ minHeight: 'clamp(260px, 36vh, 340px)' }}>
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(rgba(214,166,90,1) 1px, transparent 1px), linear-gradient(90deg, rgba(214,166,90,1) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

      {/* Radial glow */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-gold/4 rounded-full blur-3xl" />

      {/* Bottom gold border */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-gold/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 pt-28 pb-10 md:pt-32 md:pb-12">
        <div className="flex items-end justify-between gap-8">
          <div className="flex-1 min-w-0">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-[10px] text-white/35 mb-4 flex-wrap uppercase tracking-widest font-semibold">
              <Link to="/" className="hover:text-gold transition-colors"><Home size={10} /></Link>
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <ChevronRight size={9} className="text-white/20" />
                  {crumb.path
                    ? <Link to={crumb.path} className="hover:text-gold transition-colors">{crumb.label}</Link>
                    : <span className="text-white/60">{crumb.label}</span>}
                </span>
              ))}
            </nav>

            {/* Category label */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-[2px] bg-gold" />
              <span className="text-gold text-[10px] font-bold tracking-[0.25em] uppercase">{category}</span>
            </div>

            {/* Title */}
            <h1 className="font-display font-black text-white uppercase leading-tight tracking-tight mb-3"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p className="text-white/50 text-sm md:text-base max-w-xl leading-relaxed font-light">
                {subtitle}
              </p>
            )}
          </div>

          {/* Right accent card */}
          {(accent || image) && (
            <div className="hidden md:flex flex-col gap-3 shrink-0">
              {accent && (
                <div className="bg-white/8 border border-white/12 rounded-2xl px-7 py-5 text-center backdrop-blur-sm">
                  <div className="text-gold font-display font-black text-3xl leading-none mb-1">{accent.value}</div>
                  <div className="text-white/50 text-xs tracking-wider uppercase font-medium">{accent.label}</div>
                </div>
              )}
              {image && (
                <div className="w-36 h-20 rounded-xl overflow-hidden opacity-60">
                  <img src={image} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
