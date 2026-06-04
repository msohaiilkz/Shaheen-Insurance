import { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion'

const STATS = [
  { value: 28,   suffix: '+', label: 'Years of Service',  sub: 'Established 1996' },
  { value: 600,  suffix: 'M', label: 'Paid-up Capital',   sub: 'Pakistani Rupees' },
  { value: 12,   suffix: '+', label: 'Branch Offices',    sub: 'Nationwide coverage' },
  { value: 100,  suffix: '%', label: 'PACRA Rated A++',   sub: 'Stable outlook' },
]

function Counter({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const duration = 1800
    const steps = 60
    const increment = target / steps
    let current = 0
    const interval = setInterval(() => {
      current = Math.min(current + increment, target)
      setCount(Math.floor(current))
      if (current >= target) clearInterval(interval)
    }, duration / steps)
    return () => clearInterval(interval)
  }, [active, target])

  return <>{count}{suffix}</>
}

export default function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-navy py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Label */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold/60" />
            <span className="text-gold text-[11px] font-bold tracking-[0.3em] uppercase">By the Numbers</span>
            <div className="h-px w-8 bg-gold/60" />
          </div>
          <h2 className="font-display font-black text-white text-3xl md:text-4xl uppercase tracking-tight">
            A Company Built on Trust
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/8">
          {STATS.map(({ value, suffix, label, sub }, i) => (
            <div
              key={label}
              className={`px-8 py-10 text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="font-display font-black text-gold text-5xl md:text-6xl lg:text-7xl leading-none mb-3">
                <Counter target={value} suffix={suffix} active={inView} />
              </div>
              <div className="text-white font-bold text-sm mb-1 uppercase tracking-wider">{label}</div>
              <div className="text-white/40 text-xs">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
