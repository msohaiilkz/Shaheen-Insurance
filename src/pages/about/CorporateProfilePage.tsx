import { motion } from 'framer-motion'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'

export default function CorporateProfilePage() {
  return (
    <>
      <PageHero title="Corporate Profile" subtitle="A public limited company incorporated in 1996 — a flagship project of Shaheen Foundation (PAF)"
        breadcrumbs={[{ label: 'About Us', path: '/about' }, { label: 'Corporate Profile' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-5">Company Overview</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Shaheen Insurance Company Limited (SICL) is a project of <strong className="text-navy">Shaheen Foundation</strong>, set up by Pakistan Air Force (PAF), incorporated as a public limited company in <strong className="text-navy">1996</strong> under the Companies Ordinance 1979.</p>
                <p>The company commenced operations with a paid-up capital of <strong className="text-navy">Rs. 20 million</strong>, which has since expanded to <strong className="text-navy">Rs. 600 million</strong> — reflecting decades of sustained growth and investor confidence.</p>
                <p>Shaheen Insurance operates as a publicly listed entity on the <strong className="text-navy">Pakistan Stock Exchange (PSX Symbol: SHNI)</strong> and engages in general insurance operations across all major product lines. The Shaheen Foundation (PAF) maintains the primary shareholding position in the company.</p>
                <p>The company serves <strong className="text-navy">corporate, multinational, and blue-chip clients</strong>, delivering personalized and efficient service through a compact, dedicated workforce structure.</p>
              </div>
            </motion.div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: 'Incorporated', value: '1996' },
                { label: 'Initial Capital', value: 'Rs. 20M' },
                { label: 'Current Capital', value: 'Rs. 600M' },
                { label: 'PACRA Rating', value: 'A++' },
                { label: 'PSX Symbol', value: 'SHNI' },
                { label: 'Authorized Capital', value: 'Rs. 1 Billion' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-navy text-center rounded-2xl p-5">
                  <div className="font-display font-bold text-gold text-2xl mb-1">{value}</div>
                  <div className="text-white/55 text-xs">{label}</div>
                </div>
              ))}
            </div>

            {/* Philosophy */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-2xl font-bold text-navy mb-4">Corporate Philosophy</h2>
              <div className="bg-hero-gradient rounded-2xl p-8">
                <blockquote className="text-gold font-display font-bold text-2xl italic mb-4">
                  "A satisfied claimant is the most effective advertisement for an insurance company."
                </blockquote>
                <p className="text-white/70 leading-relaxed">The leadership team delivers personalized, efficient service through a compact, dedicated workforce structure. Management expresses strong confidence in future expansion prospects, attributing growth potential to stable economic conditions and active institutional support from the Shaheen Foundation.</p>
              </div>
            </motion.div>

            {/* Regulatory Info */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-2xl font-bold text-navy mb-5">Regulatory & Legal Information</h2>
              <div className="space-y-3">
                {[
                  { label: 'Regulator', value: 'Securities and Exchange Commission of Pakistan (SECP)' },
                  { label: 'Company Registration No.', value: '1700980507364' },
                  { label: 'National Tax Number', value: '0701166-7' },
                  { label: 'Auditors', value: 'BDO Ebrahim & Co. Chartered Accountants' },
                  { label: 'Legal Advisor', value: 'Allied Law Group' },
                  { label: 'Share Registrar', value: 'M/s Corplink (Pvt) Ltd, Lahore' },
                  { label: 'Registered Office', value: '10th Floor, Shaheen Complex, M.R. Kayani Road, Karachi' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-4 p-4 bg-surface rounded-xl">
                    <div className="text-gold font-semibold text-sm w-44 shrink-0">{label}</div>
                    <div className="text-navy text-sm">{value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}
