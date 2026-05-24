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

  return (
    <section ref={ref} className="py-14 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div>
            <div className="gold-line mb-4" />
            <h2 className="section-title text-navy">
              Our <span className="text-gradient-gold">Insurance</span> Products
            </h2>
            <p className="section-subtitle mt-3">
              Comprehensive solutions for individuals, businesses, and corporations — all under one roof.
            </p>

          </div>
          <Link to="/products" className="btn-navy shrink-0 self-start lg:self-auto">
            View All Products
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {PRODUCTS.map(({ icon: Icon, title, desc, path, tags }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link to={path} className="group block h-full">
                <div className="h-full bg-white border border-navy/8 p-6 transition-all duration-300 group-hover:shadow-navy group-hover:-translate-y-1 group-hover:bg-navy" style={{ borderTop: '3px solid #B8952A' }}>

                  {/* Icon */}
                  <div className="w-11 h-11 bg-navy group-hover:bg-gold flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon size={20} className="text-gold group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-navy group-hover:text-white text-lg mb-2 tracking-wide uppercase transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-navy/55 group-hover:text-white/60 text-sm leading-relaxed mb-4 transition-colors duration-300">
                    {desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {tags.map((tag) => (
                      <span key={tag} className="text-[11px] bg-navy/6 text-navy/55 group-hover:bg-white/10 group-hover:text-white/60 px-2.5 py-0.5 font-medium transition-colors duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-1 text-xs font-semibold text-gold group-hover:text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Learn More <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
