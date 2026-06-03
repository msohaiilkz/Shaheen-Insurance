import { motion } from 'framer-motion'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import PageSEO from '../../components/shared/PageSEO'

const BOARD = [
  { name: 'AVM Junaid Ahmed Siddiqui (Retd.)', role: 'Chairman', type: 'board' },
  { name: 'AVM Muhammad Qaiser Janjua (Retd.)', role: 'Director', type: 'board' },
  { name: 'Air Commodore Amer Altaf (Retd.)', role: 'Director', type: 'board' },
  { name: 'Air Commodore Wasim Ahmed Khan (Retd.)', role: 'Director', type: 'board' },
  { name: 'Mr. Adeel Ali Bokhari', role: 'Director', type: 'board' },
  { name: 'Ms. Farrah Azeem Khan', role: 'Female Independent Director', type: 'board' },
  { name: 'Mr. Jahangir Shah', role: 'Independent Director', type: 'board' },
]

const MANAGEMENT = [
  { name: 'Syed Rizwan Akhtar', role: 'Chief Executive Officer (CEO)', dept: 'Executive Management' },
  { name: 'Nisar Ahmed Almani', role: 'Chief Financial Officer (CFO)', dept: 'Finance' },
  { name: 'Aqeel Anwar Kamal', role: 'Company Secretary', dept: 'Corporate Affairs' },
  { name: 'Sohaib Ansar Khan', role: 'EVP & Country Head Business', dept: 'Business Development' },
  { name: 'Sohel N. Kidwai', role: 'Chief Marketing Officer (CMO)', dept: 'Marketing' },
  { name: 'Syed Bilal Ali Shah', role: 'Head of Internal Audit (Coordinator)', dept: 'Internal Audit' },
]

const ADVISORS = [
  { role: 'Legal Advisor', entity: 'Allied Law Group' },
  { role: 'Auditors', entity: 'BDO Ebrahim & Co. Chartered Accountants' },
  { role: 'Share Registrar', entity: 'M/s Corplink (Pvt) Ltd, Wings Arcade, 1-K, Commercial, Model Town, Lahore' },
]

export default function ManagementPage() {
  return (
    <>
      <PageSEO
        title="Board of Directors & Management"
        description="Meet the Board of Directors and senior management of Shaheen Insurance Company Limited — PAF-sponsored leadership guiding Pakistan's A++ rated general insurer."
        keywords="Shaheen Insurance board directors, management team, SICL leadership"
        path="/about/management"
      />
      <PageHero
        title="Board of Directors & Management"
        subtitle="The experienced leadership team guiding Shaheen Insurance towards continued growth and excellence"
        breadcrumbs={[{ label: 'About Us', path: '/about' }, { label: 'Board & Management' }]}
        videoCategory="about"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">

            {/* Visual Collage */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              className="grid grid-cols-3 gap-3 h-52 md:h-64 overflow-hidden">
              <div className="col-span-2 relative rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80&auto=format&fit=crop"
                  alt="Shaheen Insurance Leadership Team" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                  <span className="bg-gold text-navy font-bold text-xs px-3 py-1 rounded-full">PAF Sponsored</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">PSX Listed</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative rounded-2xl overflow-hidden flex-1">
                  <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&q=80&auto=format&fit=crop"
                    alt="Management Team" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-navy/40" />
                </div>
                <div className="bg-navy rounded-2xl flex-1 flex flex-col items-center justify-center p-3 text-center">
                  <div className="text-gold font-display font-bold text-lg">A++</div>
                  <div className="text-white/60 text-[10px]">PACRA Rating</div>
                </div>
              </div>
            </motion.div>

            {/* Board */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-8">Board of Directors</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {BOARD.map(({ name, role }, i) => (
                  <motion.div key={name} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-center gap-4 p-5 bg-surface rounded-2xl border border-navy/5 hover:border-gold/30 hover:shadow-card transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center shrink-0">
                      <span className="text-gold font-display font-bold text-lg">{name.split(' ').find(w => /^[A-Z]/.test(w) && w.length > 2)?.[0] ?? 'S'}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy text-sm leading-tight">{name}</h3>
                      <span className="text-xs text-gold font-medium mt-0.5 block">{role}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Executive Management */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-8">Executive Management</h2>
              <div className="space-y-3">
                {MANAGEMENT.map(({ name, role, dept }, i) => (
                  <motion.div key={name} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-navy/8 hover:border-gold/30 hover:shadow-card transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <span className="text-gold font-display font-bold text-lg">{name[0]}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-navy">{name}</h3>
                      <p className="text-gold text-sm font-medium">{role}</p>
                    </div>
                    <span className="text-xs bg-navy/5 text-navy/60 rounded-full px-3 py-1 font-medium hidden sm:block">{dept}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Company Details */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-6">Professional Advisors</h2>
              <div className="space-y-3">
                {ADVISORS.map(({ role, entity }) => (
                  <div key={role} className="flex gap-4 p-5 bg-surface rounded-xl">
                    <div className="text-gold font-semibold text-sm w-32 shrink-0">{role}</div>
                    <div className="text-navy text-sm">{entity}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Registration */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-2xl font-bold text-navy mb-6">Registration Details</h2>
              <div className="bg-hero-gradient rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: 'Company Registration No.', value: '1700980507364' },
                  { label: 'National Tax Number', value: '0701166-7' },
                  { label: 'PACRA Rating', value: 'A++ (Stable Outlook)' },
                  { label: 'PSX Symbol', value: 'SHNI' },
                  { label: 'Head Office', value: '10th Floor, Shaheen Complex, M.R. Kayani Road, Karachi' },
                  { label: 'Company Secretary Email', value: 'company.secretary@shaheeninsurance.com' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-white/8 rounded-xl p-4">
                    <div className="text-white/50 text-xs mb-1">{label}</div>
                    <div className="text-white font-semibold text-sm">{value}</div>
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

