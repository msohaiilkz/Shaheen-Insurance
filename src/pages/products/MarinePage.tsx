import { motion } from 'framer-motion'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import PageSEO from '../../components/shared/PageSEO'
import { CheckCircle2, Link as LinkIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MarinePage() {
  return (
    <>
      <PageSEO
        title="Marine Insurance"
        description="Shaheen Insurance marine cargo insurance — import/export and inland transit coverage in Pakistan. Protect your goods from origin to destination with ICC clauses A, B & C."
        keywords="marine insurance Pakistan, cargo insurance, import export insurance, goods in transit, marine cargo cover"
        path="/products/marine"
        schema={{ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Marine Cargo Insurance', provider: { '@type': 'InsuranceAgency', name: 'Shaheen Insurance Company Limited' }, areaServed: 'PK' }}
      />
      <PageHero title="Marine Insurance" subtitle="Import/export cargo and inland goods-in-transit coverage — protecting your goods from origin to destination"
        breadcrumbs={[{ label: 'Products', path: '/products' }, { label: 'Marine Insurance' }]} badge="Business Product" videoCategory="marine" />
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

            {/* Visual Collage */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }}
              className="grid grid-cols-3 gap-3 h-52 md:h-64 overflow-hidden">
              <div className="col-span-2 relative rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&q=80&auto=format&fit=crop"
                  alt="Marine Insurance" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-gold text-navy font-bold text-xs px-3 py-1 rounded-full">Import · Export · Transit</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative rounded-2xl overflow-hidden flex-1">
                  <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&auto=format&fit=crop"
                    alt="Cargo" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-navy/40" />
                </div>
                <div className="bg-navy rounded-2xl flex-1 flex flex-col items-center justify-center p-3 text-center">
                  <div className="text-gold font-display font-bold text-lg">9 Risks</div>
                  <div className="text-white/60 text-[10px]">Fully Covered</div>
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

