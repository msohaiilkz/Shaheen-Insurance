import { motion } from 'framer-motion'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import PageSEO from '../../components/shared/PageSEO'
import { CheckCircle2, FileText, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const COVERAGE = ['Fire and lightning', 'Riot, strike and malicious damage', 'Explosion', 'Earthquake', 'Atmospheric disturbance / storm', 'Impact damage', 'Aircraft impact', 'Spontaneous fermentation or heating', 'Burglary and theft']

export default function FirePage() {
  return (
    <>
      <PageSEO
        title="Fire & Property Insurance"
        description="Shaheen Insurance fire and property insurance — protection against fire, lightning, explosion, earthquake, riot, and allied perils for residential and commercial properties in Pakistan."
        keywords="fire insurance Pakistan, property insurance, commercial fire cover, earthquake insurance Pakistan, building insurance"
        path="/products/fire"
        schema={{ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Fire Insurance', provider: { '@type': 'InsuranceAgency', name: 'Shaheen Insurance Company Limited' }, areaServed: 'PK', description: 'Fire and allied perils insurance for properties in Pakistan.' }}
      />
      <PageHero title="Fire & Property Insurance" subtitle="Protect your property against fire, lightning, explosion, earthquake, riot and allied perils"
        breadcrumbs={[{ label: 'Products', path: '/products' }, { label: 'Fire Insurance' }]} badge="Business Product" videoCategory="fire" />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-4">About Fire Insurance</h2>
              <p className="text-gray-600 leading-relaxed">Shaheen Insurance's Fire & Property policy provides wide-ranging protection to residential and commercial properties against fire and a host of allied perils. Whether it's your home, factory, warehouse, or commercial establishment — you are protected.</p>
            </motion.div>

            {/* Visual Collage */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }}
              className="grid grid-cols-3 gap-3 h-52 md:h-64 overflow-hidden">
              <div className="col-span-2 relative rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop"
                  alt="Fire Insurance" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-gold text-navy font-bold text-xs px-3 py-1 rounded-full">Property & Fire Cover</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative rounded-2xl overflow-hidden flex-1">
                  <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&q=80&auto=format&fit=crop"
                    alt="Building" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-navy/40" />
                  <div className="absolute bottom-2 left-2">
                    <p className="text-white text-[10px] font-semibold">Commercial</p>
                  </div>
                </div>
                <div className="bg-navy rounded-2xl flex-1 flex flex-col items-center justify-center p-3 text-center">
                  <div className="text-gold font-display font-bold text-lg">9 Perils</div>
                  <div className="text-white/60 text-[10px]">Fully Covered</div>
                </div>
              </div>
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

