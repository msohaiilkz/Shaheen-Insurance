import AboutHero from '../../components/layout/AboutHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import PageSEO from '../../components/shared/PageSEO'
import ScrollReveal from '../../components/shared/ScrollReveal'
import { StaggerReveal } from '../../components/shared/ScrollReveal'

const BOARD = [
  { name: 'AVM Junaid Ahmed Siddiqui (Retd.)', role: 'Chairman' },
  { name: 'AVM Muhammad Qaiser Janjua (Retd.)', role: 'Director' },
  { name: 'Air Commodore Amer Altaf (Retd.)', role: 'Director' },
  { name: 'Air Commodore Wasim Ahmed Khan (Retd.)', role: 'Director' },
  { name: 'Mr. Adeel Ali Bokhari', role: 'Director' },
  { name: 'Ms. Farrah Azeem Khan', role: 'Female Independent Director' },
  { name: 'Mr. Jahangir Shah', role: 'Independent Director' },
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

const REGISTRATION = [
  { label: 'Company Registration No.', value: '1700980507364' },
  { label: 'National Tax Number', value: '0701166-7' },
  { label: 'PACRA Rating', value: 'A++ (Stable Outlook)' },
  { label: 'PSX Symbol', value: 'SHNI' },
  { label: 'Head Office', value: '10th Floor, Shaheen Complex, M.R. Kayani Road, Karachi' },
  { label: 'Company Secretary Email', value: 'company.secretary@shaheeninsurance.com' },
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
      <AboutHero
        category="About Shaheen Insurance"
        title="Board of Directors & Management"
        subtitle="The experienced leadership team guiding Shaheen Insurance towards continued growth and excellence"
        breadcrumbs={[{ label: 'About Us', path: '/about' }, { label: 'Board & Management' }]}
        accent={{ value: 'A++', label: 'PACRA Rating' }}
      />

      <section className="py-16 md:py-24 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">

            {/* Board section header */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-7 border border-gray-100">
                <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-2">Leadership</p>
                <h2 className="font-display font-black text-navy text-2xl md:text-3xl uppercase leading-tight tracking-tight mb-4">Board of Directors</h2>
                <p className="text-gray-600 text-sm leading-relaxed">Shaheen Insurance is governed by a seasoned Board drawn from PAF leadership and independent professionals, ensuring institutional governance and strategic oversight.</p>
              </div>
            </ScrollReveal>

            {/* Board grid */}
            <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BOARD.map(({ name, role }) => (
                <div key={name} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center shrink-0">
                    <span className="text-gold font-display font-bold text-lg">
                      {name.split(' ').find(w => /^[A-Z]/.test(w) && w.length > 2)?.[0] ?? 'S'}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-sm leading-tight group-hover:text-navy">{name}</h3>
                    <span className="text-xs text-gold font-medium mt-0.5 block">{role}</span>
                  </div>
                </div>
              ))}
            </StaggerReveal>

            {/* Management section header */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-7 border border-gray-100">
                <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-2">Management</p>
                <h2 className="font-display font-black text-navy text-2xl md:text-3xl uppercase leading-tight tracking-tight mb-4">Executive Management</h2>
                <p className="text-gray-600 text-sm leading-relaxed">Our executive team brings deep industry expertise and institutional knowledge to drive operational excellence across all departments.</p>
              </div>
            </ScrollReveal>

            {/* Management list */}
            <StaggerReveal className="space-y-3">
              {MANAGEMENT.map(({ name, role, dept }) => (
                <div key={name} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <span className="text-gold font-display font-bold text-lg">{name[0]}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-navy text-sm group-hover:text-gold transition-colors">{name}</h3>
                    <p className="text-gold text-xs font-medium mt-0.5">{role}</p>
                  </div>
                  <span className="text-xs bg-navy/5 text-navy/60 rounded-full px-3 py-1 font-medium hidden sm:block">{dept}</span>
                </div>
              ))}
            </StaggerReveal>

            {/* Advisors */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-7 border border-gray-100">
                <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-2">Advisors</p>
                <h2 className="font-display font-black text-navy text-2xl md:text-3xl uppercase leading-tight tracking-tight mb-5">Professional Advisors</h2>
                <div className="space-y-3">
                  {ADVISORS.map(({ role, entity }) => (
                    <div key={role} className="flex gap-4 p-4 bg-[#f8f7f5] rounded-xl border border-gray-100">
                      <div className="text-gold font-semibold text-sm w-32 shrink-0">{role}</div>
                      <div className="text-navy text-sm">{entity}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Registration */}
            <ScrollReveal>
              <div className="bg-hero-gradient rounded-2xl p-7 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-48 h-48 border-[32px] border-white/5 rounded-full" />
                <div className="relative z-10">
                  <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-2">Registration</p>
                  <h2 className="font-display font-black text-white text-xl uppercase mb-5">Registration Details</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {REGISTRATION.map(({ label, value }) => (
                      <div key={label} className="bg-white/8 rounded-xl p-4">
                        <div className="text-white/50 text-xs mb-1">{label}</div>
                        <div className="text-white font-semibold text-sm">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>

          <div className="sticky top-24 self-start"><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}
