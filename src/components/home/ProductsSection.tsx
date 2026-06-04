import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Car, Flame, Anchor, Plane, Wrench, Package, Landmark, Heart, ArrowUpRight } from 'lucide-react'

const PRODUCTS = [
  { icon: Car,      title: 'Motor',         desc: 'Comprehensive & third-party cover for cars, bikes, and commercial vehicles.', path: '/products/motor',         color: 'bg-blue-50 text-blue-600' },
  { icon: Flame,    title: 'Fire',          desc: 'Property protection against fire, explosion, earthquake and allied perils.',   path: '/products/fire',          color: 'bg-orange-50 text-orange-600' },
  { icon: Anchor,   title: 'Marine',        desc: 'Import/export cargo and inland goods-in-transit coverage.',                   path: '/products/marine',        color: 'bg-cyan-50 text-cyan-600' },
  { icon: Plane,    title: 'Travel',        desc: 'Up to USD 50,000 medical cover for trips up to 92 days, worldwide.',         path: '/products/travel',        color: 'bg-indigo-50 text-indigo-600' },
  { icon: Wrench,   title: 'Engineering',   desc: 'CAR, EAR, Machinery Breakdown and MLOP for industrial projects.',            path: '/products/engineering',   color: 'bg-gray-100 text-gray-700' },
  { icon: Package,  title: 'Miscellaneous', desc: 'Cash transit, personal accident, workmen compensation and more.',            path: '/products/miscellaneous', color: 'bg-purple-50 text-purple-600' },
  { icon: Landmark, title: 'Bond',          desc: 'Bid, performance, and mobilization advance bonds for contractors.',          path: '/products/bond',          color: 'bg-yellow-50 text-yellow-700' },
  { icon: Heart,    title: 'Health',        desc: 'Takaful health, group and individual plans with panel hospital access.',      path: '/health-care',            color: 'bg-red-50 text-red-500' },
]

export default function ProductsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3"
            >
              Our Coverage
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display font-black text-navy text-4xl md:text-5xl lg:text-6xl uppercase leading-tight tracking-tight"
            >
              Insurance<br />Products
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-navy border-b-2 border-navy pb-0.5 text-sm font-bold hover:text-gold hover:border-gold transition-colors duration-200"
            >
              View All Products <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100">
          {PRODUCTS.map(({ icon: Icon, title, desc, path, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                to={path}
                className="group flex flex-col bg-white p-7 h-full hover:bg-navy transition-all duration-300 relative overflow-hidden"
              >
                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-white/10 ${color}`}>
                  <Icon size={20} className="group-hover:text-gold transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-navy text-lg uppercase tracking-wide mb-2 group-hover:text-white transition-colors duration-300">
                  {title}
                </h3>

                {/* Desc */}
                <p className="text-gray-500 text-sm leading-relaxed flex-1 group-hover:text-white/65 transition-colors duration-300">
                  {desc}
                </p>

                {/* Arrow */}
                <div className="mt-5 flex items-center gap-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-navy/40 group-hover:text-gold transition-colors duration-300">
                    Learn more
                  </span>
                  <ArrowUpRight size={13} className="text-navy/30 group-hover:text-gold transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
