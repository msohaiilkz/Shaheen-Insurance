import { motion } from 'framer-motion'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import { CheckCircle2, Plane } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AviationPage() {
  return (
    <>
      <PageHero title="Aviation Insurance" subtitle="Comprehensive coverage for aircraft, airlines, cargo, and passengers — hull and liability protection"
        breadcrumbs={[{ label: 'Products', path: '/products' }, { label: 'Aviation' }]} badge="Specialized Product" />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-4">About Aviation Insurance</h2>
              <div className="bg-gold/8 border border-gold/20 rounded-xl p-5 mb-4">
                <p className="text-navy font-semibold leading-relaxed">"Aviation Insurance related to Aircraft & the Airlines. It provides protection against loss of and/or damage to the Aircraft and/or cargo and/or passengers during flight operations and ground activities."</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-navy rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-5">
                  <Plane size={20} className="text-gold" />
                  <h3 className="font-display font-bold text-lg">Aviation Hull Insurance</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-4">"The insurance of the Aircraft itself which includes accidental damage to structure/body of the Aircraft and/or its fixtures, fittings and all items thereon including engines."</p>
                <ul className="space-y-2.5">
                  {['Aircraft fuselage and body damage', 'Engine damage and failure', 'Fixtures, fittings and equipment', 'Ground damage coverage', 'In-flight accidental damage'].map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-white/70">
                      <CheckCircle2 size={14} className="text-gold shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-surface rounded-2xl p-6 border border-navy/8">
                <div className="flex items-center gap-3 mb-5">
                  <Plane size={20} className="text-navy" />
                  <h3 className="font-display font-bold text-navy text-lg">Aviation Liability Insurance</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"Protects against legal liability of the Airlines against loss and/or damage to third party(s)." Indemnifies clients for sums legally liable to pay as damages.</p>
                <ul className="space-y-2.5">
                  {['Accidental death of third parties', 'Personal injury to third parties', 'Third-party property damage', 'Passenger liability', 'Cargo legal liability'].map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 size={14} className="text-gold shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <h2 className="font-display text-2xl font-bold text-navy mb-5">Who We Cover</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['Commercial Airlines', 'Corporate Aircraft Operators', 'Private Operators', 'Flying Clubs', 'Airport Authorities', 'Aircraft Manufacturers'].map((item) => (
                  <div key={item} className="bg-navy text-center rounded-xl p-4">
                    <div className="text-gold text-sm font-semibold">{item}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">Get Aviation Quote</Link>
              <a href="tel:111765111" className="btn-navy">UAN: 111-765-111</a>
            </div>
          </div>
          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}
