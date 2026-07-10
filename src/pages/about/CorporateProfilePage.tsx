import AboutHero from '../../components/layout/AboutHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import PageSEO from '../../components/shared/PageSEO'
import ScrollReveal from '../../components/shared/ScrollReveal'
import { StaggerReveal } from '../../components/shared/ScrollReveal'
import { useJourney } from '../../context/JourneyContext'
import { takafulize } from '../../lib/wording'

const STATS = [
  { label: 'Incorporated', value: '1996' },
  { label: 'Initial Capital', value: 'Rs. 20M' },
  { label: 'Current Capital', value: 'Rs. 600M' },
  { label: 'PACRA Rating', value: 'A++' },
  { label: 'PSX Symbol', value: 'SHNI' },
  { label: 'Authorized Capital', value: 'Rs. 1B' },
]

const REGULATORY = [
  { label: 'Regulator', value: 'Securities and Exchange Commission of Pakistan (SECP)' },
  { label: 'Company Registration No.', value: '1700980507364' },
  { label: 'National Tax Number', value: '0701166-7' },
  { label: 'Auditors', value: 'BDO Ebrahim & Co. Chartered Accountants' },
  { label: 'Legal Advisor', value: 'Allied Law Group' },
  { label: 'Share Registrar', value: 'M/s Corplink (Pvt) Ltd, Lahore' },
  { label: 'Registered Office', value: '10th Floor, Shaheen Complex, M.R. Kayani Road, Karachi' },
]

export default function CorporateProfilePage() {
  const { isTakaful } = useJourney()
  return (
    <>
      <PageSEO
        title="Corporate Profile"
        description="Shaheen Insurance Company Limited — public limited company incorporated 1996, listed on PSX (SHNI), SECP regulated, PACRA A++ rated with Rs. 600 million paid-up capital."
        keywords="Shaheen Insurance corporate profile, SHNI PSX, SECP regulated insurer, public limited company Pakistan"
        path="/about/corporate-profile"
      />
      <AboutHero
        category="About Shaheen Insurance"
        title="Corporate Profile"
        subtitle="A public limited company incorporated in 1996 — a flagship project of Shaheen Foundation (PAF)"
        breadcrumbs={[{ label: 'About Us', path: '/about' }, { label: 'Corporate Profile' }]}
        accent={{ value: 'Rs. 600M', label: 'Paid-up Capital' }}
      />

      <section className="py-16 md:py-24 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">

            {/* Company Overview */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-7 md:p-8 border border-gray-100">
                <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-2">Our Story</p>
                <h2 className="font-display font-black text-navy text-2xl md:text-3xl uppercase leading-tight tracking-tight mb-5">Company Overview</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                  <p>Shaheen Insurance Company Limited (SICL) is a project of <strong className="text-navy font-bold">Shaheen Foundation</strong>, set up by Pakistan Air Force (PAF), incorporated as a public limited company in <strong className="text-navy font-bold">1996</strong> under the Companies Ordinance 1979.</p>
                  <p>The company commenced operations with a paid-up capital of <strong className="text-navy font-bold">Rs. 20 million</strong>, which has since expanded to <strong className="text-navy font-bold">Rs. 600 million</strong> — reflecting decades of sustained growth and investor confidence.</p>
                  <p>Shaheen Insurance operates as a publicly listed entity on the <strong className="text-navy font-bold">Pakistan Stock Exchange (PSX Symbol: SHNI)</strong>{takafulize(' and engages in general insurance operations across all major product lines. The Shaheen Foundation (PAF) maintains the primary shareholding position in the company.', isTakaful)}</p>
                  <p>The company serves <strong className="text-navy font-bold">corporate, multinational, and blue-chip clients</strong>, delivering personalized and efficient service through a compact, dedicated workforce structure.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Stats grid */}
            <StaggerReveal className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {STATS.map(({ label, value }) => (
                <div key={label} className="bg-navy text-center rounded-2xl p-5">
                  <div className="font-display font-bold text-gold text-2xl mb-1">{value}</div>
                  <div className="text-white/55 text-xs uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </StaggerReveal>

            {/* Philosophy */}
            <ScrollReveal>
              <div className="bg-hero-gradient rounded-2xl p-7 md:p-9 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-48 h-48 border-[32px] border-white/5 rounded-full" />
                <div className="relative z-10">
                  <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-2">Philosophy</p>
                  <h2 className="font-display font-black text-white text-xl uppercase mb-4">Corporate Philosophy</h2>
                  <blockquote className="text-gold font-display font-bold text-xl italic mb-4 border-l-4 border-gold pl-5 leading-tight">
                    {takafulize('"A satisfied claimant is the most effective advertisement for an insurance company."', isTakaful)}
                  </blockquote>
                  <p className="text-white/70 leading-relaxed text-sm">The leadership team delivers personalized, efficient service through a compact, dedicated workforce structure. Management expresses strong confidence in future expansion prospects, attributing growth potential to stable economic conditions and active institutional support from the Shaheen Foundation.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Regulatory Information */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-7 border border-gray-100">
                <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-2">Regulatory</p>
                <h2 className="font-display font-black text-navy text-2xl md:text-3xl uppercase leading-tight tracking-tight mb-5">Regulatory & Legal Information</h2>
                <div className="space-y-3">
                  {REGULATORY.map(({ label, value }) => (
                    <div key={label} className="flex gap-4 p-4 bg-[#f8f7f5] rounded-xl border border-gray-100">
                      <div className="text-gold font-semibold text-sm w-44 shrink-0">{label}</div>
                      <div className="text-navy text-sm">{value}</div>
                    </div>
                  ))}
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
