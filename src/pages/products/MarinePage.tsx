import { motion } from 'framer-motion'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import { CheckCircle2, Link as LinkIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MarinePage() {
  return (
    <>
      <PageHero title="Marine Insurance" subtitle="Import/export cargo and inland goods-in-transit coverage — protecting your goods from origin to destination"
        breadcrumbs={[{ label: 'Products', path: '/products' }, { label: 'Marine Insurance' }]} badge="Business Product" />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-4">About Marine Insurance</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Shaheen Insurance provides comprehensive marine coverage for businesses involved in import, export, and inland transportation of goods.</p>
                <div className="bg-gold/8 border border-gold/20 rounded-xl p-5">
                  <p className="text-navy font-semibold">"Marine Cargo Inland Insurance, also called goods-in-transit insurance, will cover for the loss or damage to the goods in transit."</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { title: 'Import / Export Cargo', items: ['Sea freight cargo', 'Air freight cargo', 'Coverage from loading to delivery', 'Port storage risks', 'International transit coverage'] },
                { title: 'Inland Transit', items: ['Road transport coverage', 'Rail freight coverage', 'Inland waterway transit', 'Door-to-door coverage', 'Coverage during loading and unloading'] },
              ].map(({ title, items }) => (
                <div key={title} className="bg-navy rounded-2xl p-6 text-white">
                  <h3 className="font-display font-bold text-lg mb-5 text-gold">{title}</h3>
                  <ul className="space-y-2.5">
                    {items.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-white/75">
                        <CheckCircle2 size={15} className="text-gold shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
              <h2 className="font-display text-2xl font-bold text-navy mb-5">Types of Risks Covered</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['Physical loss or damage', 'Total loss', 'Partial loss', 'General average', 'Theft and pilferage', 'Non-delivery', 'Contamination', 'Breakage', 'Fire and explosion'].map((item) => (
                  <div key={item} className="flex gap-2 p-3 bg-surface rounded-xl text-sm text-gray-600">
                    <CheckCircle2 size={14} className="text-gold shrink-0 mt-0.5" />{item}
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-4">
              <Link to="/claims/intimation" className="btn-primary"><LinkIcon size={16} />File a Claim</Link>
              <Link to="/contact" className="btn-navy">Get a Marine Quote</Link>
            </div>
          </div>
          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}
