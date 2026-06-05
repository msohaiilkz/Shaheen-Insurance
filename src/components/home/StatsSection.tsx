import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../../lib/gsap'

const STATS = [
  { value: 28,  suffix: '+',  label: 'Years of Service',  sub: 'Established 1996',         decimals: 0 },
  { value: 600, suffix: 'M+', label: 'Paid-up Capital',   sub: 'Pakistani Rupees',          decimals: 0 },
  { value: 12,  suffix: '+',  label: 'Branch Offices',    sub: 'Nationwide coverage',       decimals: 0 },
  { value: 100, suffix: '%',  label: 'PACRA Rated A++',   sub: 'Stable financial outlook',  decimals: 0 },
]

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([])
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header fade in
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          once: true,
        },
      })

      // Counter animations
      STATS.forEach((stat, i) => {
        const el = numbersRef.current[i]
        if (!el) return
        const proxy = { val: 0 }
        gsap.to(proxy, {
          val: stat.value,
          duration: 2,
          ease: 'power2.out',
          onUpdate() {
            el.textContent = Math.floor(proxy.val) + stat.suffix
          },
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        })
      })

      // Cards fade up
      const cards = sectionRef.current?.querySelectorAll('.stat-card')
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-navy py-20 md:py-28 relative overflow-hidden">

      {/* SVG background pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,4 52,16 52,32 28,44 4,32 4,16" fill="none" stroke="#D6A65A" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
      </svg>

      {/* Gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">

        {/* Label */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold/60" />
            <span className="text-gold text-[11px] font-bold tracking-[0.3em] uppercase">By the Numbers</span>
            <div className="h-px w-8 bg-gold/60" />
          </div>
          <h2 className="font-display font-black text-white text-3xl md:text-5xl uppercase tracking-tight">
            A Company Built on Trust
          </h2>
          <p className="text-white/40 text-sm mt-3 max-w-md mx-auto">
            Two decades of consistent performance, financial strength, and customer trust.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {STATS.map(({ suffix, label, sub }, i) => (
            <div key={label} className="stat-card px-8 py-10 text-center bg-navy relative group hover:bg-white/5 transition-colors duration-300">
              {/* Gold accent top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gold/0 group-hover:bg-gold transition-all duration-300" />

              <div className="font-display font-black text-gold text-5xl md:text-6xl lg:text-7xl leading-none mb-3 tabular-nums">
                <span ref={(el) => { numbersRef.current[i] = el }}>
                  0{suffix}
                </span>
              </div>
              <div className="text-white font-bold text-sm mb-1.5 uppercase tracking-wider">{label}</div>
              <div className="text-white/35 text-xs">{sub}</div>
            </div>
          ))}
        </div>

        {/* SVG decorative element */}
        <div className="flex justify-center mt-12 opacity-20">
          <svg width="180" height="20" viewBox="0 0 180 20" fill="none">
            <line x1="0" y1="10" x2="72" y2="10" stroke="#D6A65A" strokeWidth="1" />
            <circle cx="90" cy="10" r="6" stroke="#D6A65A" strokeWidth="1.5" />
            <circle cx="90" cy="10" r="2.5" fill="#D6A65A" />
            <line x1="108" y1="10" x2="180" y2="10" stroke="#D6A65A" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  )
}
