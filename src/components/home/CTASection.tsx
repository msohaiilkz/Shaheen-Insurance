import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 bg-navy relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(214,166,90,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(214,166,90,0.8) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
      {/* Gold glow top right */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold/60" />
            <span className="text-gold text-[11px] font-bold tracking-[0.3em] uppercase">Get Protected Today</span>
            <div className="h-px w-8 bg-gold/60" />
          </div>

          <h2 className="font-display font-black text-white text-4xl md:text-5xl lg:text-6xl uppercase leading-tight tracking-tight mb-6">
            Ready to Get<br />
            <span className="text-gold">Covered?</span>
          </h2>

          <p className="text-white/55 text-base leading-relaxed mb-10 max-w-lg mx-auto">
            Talk to our team today. Get a quote, learn about our products, or file a claim — we're here to help.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-navy font-bold px-8 py-4 rounded-xl text-sm transition-all duration-200"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
            <a
              href="tel:111765111"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/14 border border-white/15 text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all duration-200"
            >
              <Phone size={15} /> Call 111-765-111
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
