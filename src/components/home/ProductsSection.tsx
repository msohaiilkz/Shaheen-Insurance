import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Car, Flame, Anchor, Plane, Wrench, Package, Landmark, Heart, ArrowRight } from 'lucide-react'

const PRODUCTS = [
  {
    icon: Car,
    title: 'Motor Insurance',
    desc: 'Comprehensive cover against accidental damage, fire, theft, riots, floods, and third-party liability.',
    path: '/products/motor',
    tags: ['Comprehensive', 'Third-Party'],
  },
  {
    icon: Flame,
    title: 'Fire Insurance',
    desc: 'Protection against fire, lightning, explosion, earthquake, riot, burglary and allied perils.',
    path: '/products/fire',
    tags: ['Property', 'Allied Perils'],
  },
  {
    icon: Anchor,
    title: 'Marine Insurance',
    desc: 'Import/export cargo and inland goods-in-transit coverage against loss or damage during transit.',
    path: '/products/marine',
    tags: ['Cargo', 'Inland Transit'],
  },
  {
    icon: Plane,
    title: 'Travel Insurance',
    desc: 'Up to USD 50,000 medical cover, 92-day trips, worldwide emergency assistance via Eurocross (S&P A+).',
    path: '/products/travel',
    tags: ['Up to 92 Days', 'USD 50K Cover'],
  },
  {
    icon: Wrench,
    title: 'Engineering Insurance',
    desc: 'CAR, EAR, Machinery Breakdown, CPM and MLOP — complete protection for construction & industrial projects.',
    path: '/products/engineering',
    tags: ['CAR', 'Machinery', 'MLOP'],
  },
  {
    icon: Package,
    title: 'Miscellaneous',
    desc: 'Cash in safe/transit, personal accident, workmen compensation, fidelity guarantee, and more.',
    path: '/products/miscellaneous',
    tags: ['Personal Accident', 'Liability'],
  },
  {
    icon: Landmark,
    title: 'Bond Insurance',
    desc: 'Bid bonds, mobilization advance bonds, and performance bonds for contractors and project owners.',
    path: '/products/bond',
    tags: ['Bid Bond', 'Performance Bond'],
  },
  {
    icon: Heart,
    title: 'Health Insurance',
    desc: 'Takaful health care, group & individual plans with panel hospital access across Pakistan.',
    path: '/health-care',
    tags: ['Takaful', 'Group', 'Individual'],
  },
]

export default function ProductsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
    }
  }

  return (
    <section ref={ref} className="py-20 md:py-32 bg-surface relative overflow-hidden">
      {/* Logical Abstract Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#28368F" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-20"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-12 h-[2px] bg-gold" />
              <span className="font-display font-bold text-navy tracking-[0.2em] uppercase text-sm">Portfolio</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
              Our <span className="text-gold relative inline-block">
                Insurance
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="#D6A65A" strokeWidth="2" fill="none" />
                </svg>
              </span> Products
            </h2>
            <p className="text-navy/60 text-lg mt-6 font-light">
              Comprehensive and logical solutions for individuals, businesses, and corporations — designed for ultimate security.
            </p>

          </div>
          <Link to="/products" className="group flex items-center justify-center gap-2 bg-navy hover:bg-gold text-white hover:text-navy font-bold px-8 py-4 transition-all duration-300 shrink-0 self-start lg:self-auto overflow-hidden relative">
             <span className="relative z-10 flex items-center gap-2">
               View All Products
               <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
             </span>
          </Link>
        </motion.div>

        {/* Products grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {PRODUCTS.map(({ icon: Icon, title, desc, path, tags }, i) => (
            <motion.div
              key={title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="relative group h-full"
            >
              <Link to={path} className="flex flex-col h-full bg-white p-8 shadow-[0_4px_20px_rgba(40,54,143,0.05)] border border-navy/5 overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(40,54,143,0.12)] relative">
                
                {/* Animated Top Border */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-navy/10">
                  <motion.div 
                    className="h-full bg-gold"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1, delay: i * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>

                {/* Background Animation Element */}
                <div className="absolute -right-12 -top-12 w-32 h-32 bg-navy/5 rounded-full blur-2xl group-hover:bg-gold/20 transition-all duration-500 transform group-hover:scale-150 pointer-events-none" />

                {/* Icon Wrapper with "Logical" animation */}
                <div className="relative mb-8 shrink-0">
                  <div className="w-14 h-14 bg-navy flex items-center justify-center transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 relative z-10">
                    <Icon size={24} className="text-gold" />
                  </div>
                  {/* Decorative dots behind icon */}
                  <div className="absolute top-2 left-2 w-14 h-14 border border-gold/30 -z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-navy text-xl mb-3 tracking-wide uppercase group-hover:text-gold transition-colors duration-300 shrink-0">
                  {title}
                </h3>
                <p className="text-navy/60 text-sm leading-relaxed mb-6 flex-grow">
                  {desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6 shrink-0 mt-auto">
                  {tags.map((tag) => (
                    <span key={tag} className="text-[10px] bg-surface text-navy font-semibold px-3 py-1 border border-navy/10 uppercase tracking-wider group-hover:border-gold/30 transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-sm font-bold text-navy group-hover:text-gold transition-colors duration-300 pt-4 border-t border-navy/5 shrink-0">
                  <span className="relative">
                    Learn More
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-300" />
                  </span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
