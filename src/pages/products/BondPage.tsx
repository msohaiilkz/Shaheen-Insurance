import { motion } from 'framer-motion'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const BONDS = [
  {
    title: 'Bid Bond (Tender Bond)',
    desc: 'Bid bond is issued on behalf of contractors in connection with the submission of tenders for contracts. It allows contractors to submit insurance guarantees instead of depositing earnest money with government or private entities.',
    features: ['Issued for government and private tenders', 'Replaces cash earnest money deposits', 'Protects the project owner during tender process', 'Standard bid bond format compliant with requirements'],
  },
  {
    title: 'Mobilization Advance Bond (MAB / APB)',
    desc: 'MAB/APB insurance witnesses that the contractor shall use the advance for a specific purpose. It secures project owners when they provide advance financing to contractors, compensating employers if contractors fail to fulfill obligations tied to advance payments.',
    features: ['Secures advance payments made by project owners', 'Bond auto-reduces as advance is adjusted against invoices', 'Protects employers against contractor default', 'Widely required by government projects in Pakistan'],
  },
  {
    title: 'Performance Bond',
    desc: 'Issued on behalf of a contractor and in favor of the project owner to guarantee the contractor\'s compliance with obligations. The insurer compensates project owners after independent professionals verify contractor non-performance.',
    features: ["Guarantees contractor's performance obligations", 'Independent verification of non-performance required', 'Compensates project owner for contractor default', 'Pays amounts specified in the bond agreement'],
  },
]

export default function BondPage() {
  return (
    <>
      <PageHero title="Bond Insurance" subtitle="Bid bonds, mobilization advance bonds, and performance bonds — securing contractor-owner relationships"
        breadcrumbs={[{ label: 'Products', path: '/products' }, { label: 'Bond Insurance' }]} badge="Business Product" />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-4">Bond Insurance Products</h2>
              <p className="text-gray-600 leading-relaxed">Shaheen Insurance provides three types of bond insurance products to protect both contractors and project owners in construction and infrastructure projects across Pakistan.</p>
            </motion.div>

            <div className="space-y-6">
              {BONDS.map(({ title, desc, features }, i) => (
                <motion.div key={title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-surface rounded-2xl p-6 border border-navy/5 hover:border-gold/30 hover:shadow-card transition-all duration-300">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="font-display font-bold text-3xl text-gold/35 leading-none shrink-0">{String(i + 1).padStart(2, '0')}</span>
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

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">Get Bond Quote</Link>
              <a href="tel:111765111" className="btn-navy">Call UAN: 111-765-111</a>
            </div>
          </div>
          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}
