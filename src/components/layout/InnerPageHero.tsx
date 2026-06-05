import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import { gsap } from '../../lib/gsap'

interface Crumb { label: string; path?: string }

interface Stat { value: string; label: string }

interface InnerPageHeroProps {
  category: string
  title: string
  subtitle?: string
  breadcrumbs: Crumb[]
  stats?: Stat[]
  svgIllustration?: React.ReactNode
}

export default function InnerPageHero({
  category, title, subtitle, breadcrumbs, stats, svgIllustration
}: InnerPageHeroProps) {
  const heroRef = useRef<HTMLElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from(badgeRef.current, { opacity: 0, y: -16, duration: 0.5 })
      tl.from(titleRef.current, { opacity: 0, y: 30, duration: 0.7 }, '-=0.2')
      if (subRef.current) tl.from(subRef.current, { opacity: 0, y: 16, duration: 0.5 }, '-=0.3')
      if (statsRef.current) tl.from(statsRef.current.children, { opacity: 0, y: 20, duration: 0.5, stagger: 0.1 }, '-=0.2')
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative bg-navy overflow-hidden" style={{ minHeight: 'clamp(320px, 45vh, 480px)' }}>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(rgba(214,166,90,1) 1px,transparent 1px),linear-gradient(90deg,rgba(214,166,90,1) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />

      {/* Radial glows */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-gold/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-64 bg-gold/4 rounded-full blur-3xl" />

      {/* SVG circles decoration */}
      <svg className="absolute right-0 top-0 h-full opacity-[0.04] pointer-events-none" viewBox="0 0 500 600" fill="none" preserveAspectRatio="xMidYMid slice">
        <circle cx="400" cy="300" r="220" stroke="#D6A65A" strokeWidth="1" />
        <circle cx="400" cy="300" r="320" stroke="#D6A65A" strokeWidth="0.5" />
        <circle cx="400" cy="300" r="420" stroke="#D6A65A" strokeWidth="0.3" />
      </svg>

      {/* Gold bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-gold/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 pt-28 pb-10 md:pt-32 md:pb-12">
        <div className="flex items-center justify-between gap-8">

          {/* Left: text */}
          <div className="flex-1 min-w-0">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-[10px] text-white/35 mb-5 flex-wrap uppercase tracking-widest font-semibold">
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

            {/* Category */}
            <div ref={badgeRef} className="flex items-center gap-2 mb-3">
              <div className="w-6 h-[2px] bg-gold" />
              <span className="text-gold text-[10px] font-bold tracking-[0.25em] uppercase">{category}</span>
            </div>

            {/* Title */}
            <h1 ref={titleRef}
              className="font-display font-black text-white uppercase leading-tight tracking-tight mb-3"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p ref={subRef} className="text-white/50 text-sm md:text-base max-w-2xl leading-relaxed font-light mb-8">
                {subtitle}
              </p>
            )}

            {/* Stats row */}
            {stats && stats.length > 0 && (
              <div ref={statsRef} className="flex flex-wrap gap-6 mt-6">
                {stats.map(({ value, label }) => (
                  <div key={label} className="flex flex-col">
                    <span className="font-display font-black text-gold text-2xl leading-none">{value}</span>
                    <span className="text-white/40 text-[10px] uppercase tracking-wider mt-1 font-semibold">{label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: SVG illustration (hidden on mobile) */}
          {svgIllustration && (
            <div className="hidden lg:block shrink-0 w-72 h-48 opacity-60">
              {svgIllustration}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
