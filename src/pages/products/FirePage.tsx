import { motion } from 'framer-motion'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import { CheckCircle2, FileText, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const COVERAGE = ['Fire and lightning', 'Riot, strike and malicious damage', 'Explosion', 'Earthquake', 'Atmospheric disturbance / storm', 'Impact damage', 'Aircraft impact', 'Spontaneous fermentation or heating', 'Burglary and theft']

export default function FirePage() {
  return (
    <>
      <PageHero title="Fire & Property Insurance" subtitle="Protect your property against fire, lightning, explosion, earthquake, riot and allied perils"
        breadcrumbs={[{ label: 'Products', path: '/products' }, { label: 'Fire Insurance' }]} badge="Business Product" />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-4">About Fire Insurance</h2>
              <p className="text-gray-600 leading-relaxed">Shaheen Insurance's Fire & Property policy provides wide-ranging protection to residential and commercial properties against fire and a host of allied perils. Whether it's your home, factory, warehouse, or commercial establishment — you are protected.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <h2 className="font-display text-2xl font-bold text-navy mb-5">What's Covered</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {COVERAGE.map((item) => (
                  <div key={item} className="flex gap-3 p-4 bg-surface rounded-xl border border-navy/5">
                    <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-2xl font-bold text-navy mb-5">Fire Claims Procedure</h2>
              <div className="space-y-3">
                {[
                  { step: '01', title: 'Immediate Notification', desc: 'Inform Shaheen Insurance immediately by phone AND in writing, including your policy number.' },
                  { step: '02', title: 'Obtain Claim Form', desc: 'Obtain and complete the claim form from any Shaheen Insurance branch.' },
                  { step: '03', title: 'Police Complaint', desc: 'Lodge police complaint if applicable — for rioting, malicious damage, or terrorism.' },
                  { step: '04', title: 'Surveyor Deputation', desc: 'For large losses, prompt intimation required so a suitable surveyor can be sent.' },
                  { step: '05', title: 'Document Submission', desc: 'Provide documentary evidence — photocopies with acknowledgment from relevant authorities.' },
                  { step: '06', title: 'Authority Reports', desc: 'Report to fire station, police, and civil authorities. Obtain copies for submission to the surveyor.' },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4 p-4 bg-surface rounded-xl">
                    <span className="font-display font-bold text-gold/50 text-2xl leading-none shrink-0 w-10">{step}</span>
                    <div>
                      <h4 className="font-semibold text-navy text-sm mb-1">{title}</h4>
                      <p className="text-gray-500 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-4">
              <Link to="/claims/intimation" className="btn-primary"><FileText size={16} />File a Claim</Link>
              <a href="tel:111765111" className="btn-navy"><Phone size={16} />UAN: 111-765-111</a>
            </div>
          </div>
          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}
