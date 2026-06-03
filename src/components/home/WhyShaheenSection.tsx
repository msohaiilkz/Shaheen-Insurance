import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Shield, Star, Users, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react'

const REASONS = [
  { icon: Shield, title: 'PACRA A++ Rated', desc: 'Highest financial strength rating — your claims are always backed by solid capital.' },
  { icon: Star, title: 'PAF Sponsored', desc: 'Institutional backing of Shaheen Foundation (Pakistan Air Force) since 1996.' },
  { icon: Users, title: '28+ Years of Service', desc: 'Nearly three decades of protecting Pakistani families and businesses nationwide.' },
  { icon: TrendingUp, title: 'Rs. 600M Capital', desc: 'Strong paid-up capital ensures financial stability and prompt claim settlements.' },
]

const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600&q=80&auto=format&fit=crop',
    alt: 'Insurance policy documents',
    label: 'Secure Policies',
  },
  {
    src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80&auto=format&fit=crop',
    alt: 'Insurance claims processing Pakistan',
    label: 'Fast Claims',
  },
  {
    src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80&auto=format&fit=crop',
    alt: 'Pakistan office branches nationwide',
    label: '12+ Branches',
  },
]

export default function WhyShaheenSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-16 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-14"
        >
          <div className="gold-line mx-auto mb-4" />
          <h2 className="section-title text-navy">
            Why Pakistan <span className="text-gradient-gold">Trusts Shaheen</span>
          </h2>
          <p className="section-subtitle mt-3 max-w-2xl mx-auto text-center">
            From Karachi to Peshawar — trusted by Pakistani families and businesses since 1996.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT — Images */}
          <div className="space-y-4">

            {/* Main family image — BIG */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="relative rounded-3xl overflow-hidden h-72 sm:h-80 md:h-96 shadow-lg cursor-pointer group bg-gradient-to-b from-sky-50 via-blue-50 to-blue-100"
            >
              <motion.img
                src="/pakistani_family.png"
                alt="Pakistani family protected by Shaheen Insurance"
                className="w-full h-full object-contain mix-blend-multiply p-4"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
              {/* Bottom badge */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent px-5 pt-10 pb-4">
                <p className="text-gold font-display font-bold text-base">Family Protection</p>
                <p className="text-white/70 text-xs mt-0.5">Shaheen Insurance — A Sign of Protection</p>
              </div>
              <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/30 rounded-3xl transition-all duration-300" />
            </motion.div>

            {/* Three smaller images */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {IMAGES.map(({ src, alt, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.2 + i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative rounded-2xl overflow-hidden h-28 md:h-36 shadow-md group cursor-pointer"
                >
                  <motion.img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/50 transition-colors duration-300" />
                  {/* Gold border on hover */}
                  <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/50 rounded-2xl transition-all duration-300" />
                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 px-2 pb-2 pt-4 bg-gradient-to-t from-navy/90 to-transparent">
                    <p className="text-gold text-[10px] font-bold leading-tight">{label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — Reason cards */}
          <div className="space-y-4 lg:pt-2">
            {REASONS.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
                whileHover={{ x: 6, boxShadow: '0 4px 24px rgba(214,166,90,0.18)' }}
                className="flex gap-4 p-5 bg-surface rounded-2xl border border-navy/6 hover:border-gold/35 transition-all duration-300 cursor-default"
              >
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ duration: 0.25 }}
                  className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center shrink-0"
                >
                  <Icon size={22} className="text-gold" />
                </motion.div>
                <div>
                  <h4 className="font-display font-bold text-navy text-base mb-1">{title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-2"
            >
              <Link to="/products" className="btn-primary">
                Explore Our Products <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative rounded-2xl overflow-hidden mt-16"
        >
          <div className="absolute inset-0 hero-animated-bg" />
          <div className="absolute inset-0 bg-navy/30" />
          <div className="relative px-6 py-10 text-center">
            <p className="font-display text-gold font-bold text-xl md:text-2xl italic mb-2">
              "A satisfied claimant is the most effective advertisement for an insurance company."
            </p>
            <p className="text-white/60 text-sm mb-5">— Shaheen Insurance Philosophy</p>
            <div className="flex flex-wrap justify-center gap-5">
              {['SECP Regulated', 'PSX Listed (SHNI)', 'PACRA A++', '12+ Branches Pakistan', 'Window Takaful Operator'].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-white/80 text-xs">
                  <CheckCircle2 size={12} className="text-gold" />{item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
