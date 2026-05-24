import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Shield, Globe, CheckCircle2, ArrowRight, HeartPulse, Plus, Wallet } from 'lucide-react'

const FEATURES = [
  'SECP authorized since April 2018',
  'Based on Takaful Rules 2012',
  'Re-Takaful: Labuan Re, GIC Re, Africa Re',
  'Waqf-based fund structure',
  'Shariah-compliant operations',
  'Window Takaful model',
]

export default function TakafulSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-14 md:py-24 bg-hero-gradient relative overflow-hidden">

      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(rgba(184,149,42,1) 1px,transparent 1px),linear-gradient(90deg,rgba(184,149,42,1) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />
        <div className="absolute top-0 right-0 w-[1px] h-full bg-gold/10" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold/15" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left — Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/40 px-4 py-1.5 mb-6">
            <Shield size={13} className="text-gold" />
            <span className="text-gold text-xs font-display font-semibold tracking-widest uppercase">Window Takaful Operations</span>
          </div>

          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Shariah-Compliant
            <br />
            <span className="text-gradient-gold">Insurance Solutions</span>
          </h2>

          <p className="text-white/60 text-lg leading-relaxed mb-8">
            Shaheen Window Takaful Operations offers an ethical alternative to conventional insurance, operating under SECP's Takaful Rules 2012 since April 2018 — combining financial protection with Islamic principles.
          </p>

          {/* Features list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="flex items-center gap-2.5"
              >
                <CheckCircle2 size={16} className="text-gold shrink-0" />
                <span className="text-white/70 text-sm">{f}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/health-care/takaful" className="btn-primary">
              Takaful Health Care
              <ArrowRight size={16} />
            </Link>
            <Link to="/downloads" className="btn-outline">
              Download WTO PTF Policies
            </Link>
          </div>
        </motion.div>

        {/* Right — Re-takaful partners card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-4"
        >
          {/* Global partners */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gold/20 flex items-center justify-center">
                <Globe size={18} className="text-gold" />
              </div>
              <div>
                <div className="text-white font-semibold">Re-Takaful Partners</div>
                <div className="text-white/45 text-xs">International Backing</div>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { name: 'Labuan Re', country: 'Malaysia', desc: 'Labuan Financial Services Authority' },
                { name: 'GIC Re', country: 'India', desc: 'General Insurance Corporation of India' },
                { name: 'Africa Re', country: 'Africa', desc: 'African Reinsurance Corporation' },
              ].map(({ name, country, desc }) => (
                <div key={name} className="flex items-center justify-between p-3 bg-white/8">
                  <div>
                    <div className="text-white font-semibold text-sm">{name}</div>
                    <div className="text-white/45 text-xs">{desc}</div>
                  </div>
                  <span className="text-[11px] bg-gold/20 text-gold px-2.5 py-1 font-medium">{country}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Takaful health products */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6">
            <div className="text-white font-semibold mb-4 text-sm">Takaful Health Products</div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Takaful Health Care', Icon: HeartPulse },
                { label: 'Health Care Plus', Icon: Plus },
                { label: 'Takaful Wallet', Icon: Wallet },
              ].map(({ label, Icon }) => (
                <div key={label} className="bg-white/8 p-4 text-center">
                  <div className="flex justify-center mb-2">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <div className="text-white/70 text-xs leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
