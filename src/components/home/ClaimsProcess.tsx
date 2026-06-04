import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { FileText, Upload, Search, ClipboardCheck, Banknote, ArrowRight } from 'lucide-react'

const STEPS = [
  { icon: FileText,       num: '01', title: 'Report',    desc: 'Submit your claim intimation online or at any branch within 24 hours of the incident.' },
  { icon: Upload,         num: '02', title: 'Documents', desc: 'Upload supporting documents — photos, police reports, medical bills — through our portal.' },
  { icon: Search,         num: '03', title: 'Survey',    desc: 'A licensed surveyor is assigned and visits within 2 business days to assess the loss.' },
  { icon: ClipboardCheck, num: '04', title: 'Assessment',desc: 'Our claims team reviews the survey report and verifies coverage under your policy terms.' },
  { icon: Banknote,       num: '05', title: 'Settlement', desc: 'Approved claims are settled within 5 working days via direct bank transfer.' },
]

export default function ClaimsProcess() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3"
            >
              Claims
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 }}
              className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight"
            >
              How to File<br />a Claim
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
            <Link
              to="/claims/intimation"
              className="inline-flex items-center gap-2 bg-navy text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-navy/90 transition-colors"
            >
              Start a Claim <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-navy/10 z-0" style={{ top: '2.5rem' }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {STEPS.map(({ icon: Icon, num, title, desc }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Number circle */}
                <div className="flex lg:flex-col items-start lg:items-start gap-4 lg:gap-0">
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 lg:w-10 lg:h-10 rounded-full bg-white border-2 border-navy/10 flex items-center justify-center mb-0 lg:mb-4 shadow-sm">
                      <Icon size={18} className="text-navy lg:hidden" />
                      <span className="hidden lg:block text-[11px] font-black text-navy/50">{num}</span>
                    </div>
                  </div>
                  <div className="flex-1 lg:mt-0 pt-1 lg:pt-0">
                    <div className="flex items-center gap-2 mb-1 lg:mb-2">
                      <span className="text-gold text-[10px] font-black tracking-widest uppercase">{num}</span>
                      <h3 className="font-display font-bold text-navy text-lg uppercase">{title}</h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 pt-8 border-t border-navy/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="text-gray-400 text-sm">
            Average settlement time: <span className="text-navy font-semibold">5 working days</span>
          </p>
          <Link to="/claims/procedure" className="text-navy text-sm font-semibold hover:text-gold transition-colors flex items-center gap-1.5">
            Full Claims Procedure <ArrowRight size={13} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
