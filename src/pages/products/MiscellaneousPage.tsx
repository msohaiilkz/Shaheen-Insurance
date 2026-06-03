import { motion } from 'framer-motion'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import PageSEO from '../../components/shared/PageSEO'
import { Link } from 'react-router-dom'

const PRODUCTS = [
  { title: 'Cash In Safe', desc: 'Covers money owned by the insured while lying in a safe against the risk of burglary, robbery, armed holdup and theft.' },
  { title: 'Cash In Transit', desc: 'Protection for funds in transit from insured\'s business premises to the bank against robbery, armed holdup, and snatching through forcible means.' },
  { title: 'Plasticard Insurance', desc: 'Covers financial institution losses from misuse of credit card and/or fraud on issued debit and credit cards.' },
  { title: 'Personal Accident Insurance', desc: 'Provides indemnification for individuals against death, personal injury and physical incapacity due to involvement in any accident.' },
  { title: 'Workmen Compensation Insurance', desc: "Covers employer liability when employees sustain personal injury by accident or occupational disease in course of employment." },
  { title: 'Fidelity Guarantee Insurance', desc: 'Covers loss sustained by an act of fraud or dishonesty committed by the employee to the employer.' },
  { title: 'Public Liability Insurance', desc: 'Indemnifies the insured for legal liability to pay for death and/or bodily injury to any person and/or direct damage to property.' },
  { title: 'Product Liability Insurance', desc: "Covers insured's legal liability in respect of claims raised by third parties due to injury or damage caused by a product." },
  { title: 'All Risks Insurance', desc: 'Provides wider coverage than normal fire policy for accidental loss or damage to the property insured.' },
  { title: 'Burglary / Theft Insurance', desc: 'Compensates policyholders for loss of property as a result of burglary, robbery, armed holdup and theft due to house breaking.' },
]

export default function MiscellaneousPage() {
  return (
    <>
      <PageSEO
        title="Miscellaneous Insurance"
        description="Shaheen Insurance miscellaneous products — cash-in-transit, personal accident, plate glass, workmen compensation, fidelity guarantee, burglary, and liability insurance in Pakistan."
        keywords="miscellaneous insurance Pakistan, personal accident insurance, burglary insurance, workmen compensation, fidelity guarantee"
        path="/products/miscellaneous"
        schema={{ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Miscellaneous Insurance', provider: { '@type': 'InsuranceAgency', name: 'Shaheen Insurance Company Limited' }, areaServed: 'PK' }}
      />
      <PageHero title="Miscellaneous Insurance" subtitle="Ten specialized insurance products covering cash, personal accident, liability, and property risks"
        breadcrumbs={[{ label: 'Products', path: '/products' }, { label: 'Miscellaneous' }]} badge="Business Product" videoCategory="misc" />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-4">Miscellaneous Insurance Products</h2>
              <p className="text-gray-600 leading-relaxed">Shaheen Insurance offers a comprehensive range of miscellaneous products to protect businesses and individuals from specialized risks not covered by standard policies.</p>
            </motion.div>

            {/* Visual Collage */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }}
              className="grid grid-cols-3 gap-3 h-52 md:h-64 overflow-hidden">
              <div className="col-span-2 relative rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&auto=format&fit=crop"
                  alt="Miscellaneous Insurance" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-gold text-navy font-bold text-xs px-3 py-1 rounded-full">10 Products</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative rounded-2xl overflow-hidden flex-1">
                  <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=80&auto=format&fit=crop"
                    alt="Business" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-navy/45" />
                </div>
                <div className="bg-navy rounded-2xl flex-1 flex flex-col items-center justify-center p-3 text-center">
                  <div className="text-gold font-display font-bold text-lg">All</div>
                  <div className="text-white/60 text-[10px]">Risks Covered</div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PRODUCTS.map(({ title, desc }, i) => (
                <motion.div key={title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="p-5 bg-surface rounded-2xl border border-navy/5 hover:border-gold/30 hover:shadow-card transition-all duration-300 group">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="font-display font-bold text-xl text-gold/40 leading-none shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="font-display font-bold text-navy group-hover:text-gold transition-colors">{title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed pl-9">{desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/claims/intimation" className="btn-primary">File a Claim</Link>
              <Link to="/contact" className="btn-navy">Get a Quote</Link>
            </div>
          </div>
          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}

