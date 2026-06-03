import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Building2, Users, Award, MapPin, Layers } from 'lucide-react'

const STATS = [
  { icon: Award,      value: 'A++',  suffix: '',   label: 'PACRA Rating',       sub: 'Stable Outlook',            color: 'text-gold' },
  { icon: TrendingUp, value: 600,    suffix: 'M+', label: 'Paid-up Capital',    sub: 'Rs. 600 Million',           color: 'text-gold' },
  { icon: Building2,  value: 1996,   suffix: '',   label: 'Established',        sub: 'PAF Shaheen Foundation',    color: 'text-gold' },
  { icon: MapPin,     value: 12,     suffix: '+',  label: 'Branch Offices',     sub: 'Nationwide Network',        color: 'text-gold' },
  { icon: Layers,     value: 15,     suffix: '+',  label: 'Products',           sub: 'Insurance Products',        color: 'text-gold' },
  { icon: Users,      value: 28,     suffix: '+',  label: 'Years of Trust',     sub: 'Serving Pakistan',          color: 'text-gold' },
]

function CountUp({ target, suffix, isNum }: { target: number | string; suffix: string; isNum: boolean }) {
  const [display, setDisplay] = useState(isNum ? 0 : target)
  const ref = useRef(false)

  useEffect(() => {
    if (!isNum || ref.current) return
    ref.current = true
    const start = Date.now()
    const duration = 1800
    const from = typeof target === 'number' && target > 100 ? target - 80 : 0
    const to = typeof target === 'number' ? target : 0

    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(from + (to - from) * ease)
      setDisplay(current)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target, isNum])

  return (
    <span>
      {display}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="gold-line mx-auto mb-4" />
          <h2 className="section-title text-navy mb-3">
            Trusted by <span className="text-gradient-gold">Thousands</span>
          </h2>
          <p className="section-subtitle mx-auto">
            28+ years of delivering protection across Pakistan — backed by Shaheen Foundation (PAF)
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {STATS.map(({ icon: Icon, value, suffix, label, sub }, i) => {
            const isNum = typeof value === 'number'
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white p-6 shadow-card border border-navy/8 text-center group cursor-default"
                style={{ borderTop: '3px solid #D6A65A' }}
              >
                <div className="w-11 h-11 bg-navy group-hover:bg-gold transition-colors flex items-center justify-center mx-auto mb-4">
                  <Icon size={20} className="text-gold group-hover:text-white transition-colors" />
                </div>
                <div className="font-display font-bold text-2xl text-navy mb-1">
                  {inView ? (
                    <CountUp target={value} suffix={suffix} isNum={isNum} />
                  ) : (
                    <span>{isNum ? 0 : value}{suffix}</span>
                  )}
                </div>
                <div className="font-semibold text-sm text-navy/80 leading-tight mb-1">{label}</div>
                <div className="text-xs text-navy/40">{sub}</div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-navy/40"
        >
          {[
            'Listed on Pakistan Stock Exchange (SHNI)',
            'Authorized Capital: Rs. 1 Billion',
            'SECP Regulated',
            'Audited by BDO Ebrahim & Co.',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
