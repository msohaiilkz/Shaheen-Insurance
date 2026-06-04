import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Heart, Shield, Users, Building2, ArrowRight, CheckCircle2 } from 'lucide-react'

const PLANS = [
  { icon: Heart,     title: 'Individual & Family', desc: 'Personal health cover with optional maternity and outpatient wallet benefits.' },
  { icon: Users,     title: 'Group Health',        desc: 'Corporate plans covering your entire workforce — scalable and cost-effective.' },
  { icon: Shield,    title: 'Takaful Health Care', desc: 'Shariah-compliant health coverage under SECP-authorized Window Takaful operations.' },
  { icon: Building2, title: 'Panel Hospitals',     desc: '50+ panel hospitals across Pakistan for cashless treatment with your health card.' },
]

export default function HealthBand() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Health Care</p>
            <h2 className="font-display font-black text-navy text-4xl md:text-5xl lg:text-6xl uppercase leading-tight tracking-tight mb-6">
              Your Health,<br />
              <span className="text-gold">Our Priority</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
              Comprehensive health insurance solutions for individuals, families, and corporations — Shariah-compliant and backed by a nationwide panel hospital network.
            </p>
            <div className="flex flex-col gap-2.5 mb-8">
              {['SECP Licensed Window Takaful Operator', 'Inpatient, outpatient & maternity cover', 'Cashless treatment at 50+ hospitals'].map(pt => (
                <div key={pt} className="flex items-center gap-2.5">
                  <CheckCircle2 size={15} className="text-gold shrink-0" />
                  <span className="text-gray-600 text-sm">{pt}</span>
                </div>
              ))}
            </div>
            <Link
              to="/health-care"
              className="inline-flex items-center gap-2 bg-navy text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-navy/90 transition-colors"
            >
              View Health Plans <ArrowRight size={15} />
            </Link>
          </motion.div>

          {/* RIGHT — Plan cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {PLANS.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
                className={`p-6 rounded-2xl border ${i === 0 ? 'bg-navy text-white border-navy' : 'bg-white border-gray-100 shadow-sm'}`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${i === 0 ? 'bg-gold/20' : 'bg-white'}`}>
                  <Icon size={18} className={i === 0 ? 'text-gold' : 'text-navy'} />
                </div>
                <h3 className={`font-display font-bold text-sm uppercase tracking-wide mb-2 ${i === 0 ? 'text-white' : 'text-navy'}`}>{title}</h3>
                <p className={`text-xs leading-relaxed ${i === 0 ? 'text-white/60' : 'text-gray-500'}`}>{desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
