import { motion } from 'framer-motion'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const PRODUCTS = [
  {
    title: "Contractor's All Risks Insurance (CAR)",
    desc: "Provides very wide protection to the contractor working on a construction project against accidental loss and/or damage to the works during construction period.",
    features: ['Annual policies for multiple simultaneous contracts', 'Single-contract policies for specific projects', 'Coverage during entire construction period', 'Protection for temporary works and structures'],
  },
  {
    title: "Contractor's Plant, Equipment & Machinery (CPM)",
    desc: "Separate coverage option protecting construction equipment against damages or destruction within the construction site due to covered perils.",
    features: ['Coverage for all construction machinery', 'Protection against fire, theft, and accident', 'On-site and off-site coverage options', 'Breakdown and accidental damage'],
  },
  {
    title: 'Erection All Risks Insurance (EAR)',
    desc: "Protects against risks during the erection of machinery, plant and all kinds of steel structures. Testing and trial runs are included.",
    features: ['Protection during erection phase', 'Testing and trial run coverage', 'Third-party liability included', 'Steel structures and plant equipment'],
  },
  {
    title: 'Machinery Insurance',
    desc: "Protection for mechanical equipment whilst they are in operation, at rest or under maintenance against sudden and unforeseen loss or damage.",
    features: ['Coverage during operation and rest', 'Breakdown protection', 'Maintenance period coverage', 'Sudden and unforeseen damage'],
  },
  {
    title: 'Machinery Loss of Profit Insurance (MLOP)',
    desc: "Coverage against the loss of profit due to business interruption caused by an accident covered under the Machinery Policy.",
    features: ['Business interruption coverage', 'Loss of profit protection', 'Linked to machinery insurance policy', 'Financial protection during downtime'],
  },
]

export default function EngineeringPage() {
  return (
    <>
      <PageHero title="Engineering Insurance" subtitle="Comprehensive coverage for construction projects, machinery, and industrial operations — CAR, EAR, CPM, Machinery & MLOP"
        breadcrumbs={[{ label: 'Products', path: '/products' }, { label: 'Engineering' }]} badge="Business Product" />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-4">Engineering Insurance Products</h2>
              <p className="text-gray-600 leading-relaxed">Shaheen Insurance provides five specialized engineering insurance products covering every phase of construction and industrial operations — from groundbreaking to commissioning and ongoing operations.</p>
            </motion.div>

            <div className="space-y-5">
              {PRODUCTS.map(({ title, desc, features }, i) => (
                <motion.div key={title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-surface rounded-2xl p-6 border border-navy/5 hover:border-gold/30 hover:shadow-card transition-all duration-300">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="font-display font-bold text-2xl text-gold/40 leading-none shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="font-display font-bold text-navy text-xl">{title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {features.map((f) => (
                      <div key={f} className="flex gap-2 text-xs text-gray-500">
                        <CheckCircle2 size={13} className="text-gold shrink-0 mt-0.5" />{f}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <div className="bg-hero-gradient rounded-2xl p-6">
                <h3 className="font-display font-bold text-gold text-xl mb-4">Key Benefits</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Comprehensive construction protection', 'Third-party property and liability', 'Fire, burglary & natural calamities', 'Repair or replacement options', 'Business interruption protection', 'Coverage for testing & trial runs'].map((b) => (
                    <div key={b} className="flex gap-2 text-white/75 text-sm">
                      <CheckCircle2 size={14} className="text-gold shrink-0 mt-0.5" />{b}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-4">
              <Link to="/claims/intimation" className="btn-primary">File a Claim</Link>
              <Link to="/contact" className="btn-navy">Get Engineering Quote</Link>
            </div>
          </div>
          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}
