import AboutHero from '../../components/layout/AboutHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import PageSEO from '../../components/shared/PageSEO'
import ScrollReveal from '../../components/shared/ScrollReveal'
import { StaggerReveal } from '../../components/shared/ScrollReveal'
import { Shield, Star, TrendingUp, Users, Building2, Award } from 'lucide-react'

const MILESTONES = [
  { year: '1977', event: 'Shaheen Foundation established by PAF to promote welfare activities' },
  { year: '1978', event: 'Shaheen Foundation begins commercial operations' },
  { year: '1996', event: 'Shaheen Insurance incorporated as public limited company with Rs. 20M capital' },
  { year: '2000s', event: 'Listed on all three Pakistani stock exchanges (PSX Symbol: SHNI)' },
  { year: '2018', event: 'Window Takaful Operations launched with SECP authorization' },
  { year: '2024', event: 'PACRA Rating upgraded to A++ Stable — Paid-up Capital Rs. 600 Million' },
]

const VALUES = [
  { icon: Shield, title: 'Trusted Protection', desc: 'Over 28 years of reliable insurance solutions for individuals and businesses across Pakistan.' },
  { icon: Star, title: 'PAF Backed', desc: 'Sponsored by Shaheen Foundation, established by Pakistan Air Force — ensuring institutional stability.' },
  { icon: TrendingUp, title: 'Financial Strength', desc: 'PACRA A++ rated with Rs. 600 Million paid-up capital and Rs. 1 Billion authorized capital.' },
  { icon: Users, title: 'Customer First', desc: '"A satisfied claimant is the most effective advertisement for an insurance company."' },
  { icon: Building2, title: 'Nationwide Network', desc: '12+ branch offices across Pakistan including Karachi, Lahore, Islamabad and more.' },
  { icon: Award, title: 'Regulatory Compliance', desc: 'SECP regulated, PSX listed, audited by BDO Ebrahim & Co. Chartered Accountants.' },
]

export default function WhoWeArePage() {
  return (
    <>
      <PageSEO
        title="Who We Are"
        description="Shaheen Insurance Company Limited — established 1996, PACRA A++ rated, PAF Foundation sponsored. Learn about our 28+ years of trusted general insurance in Pakistan."
        keywords="Shaheen Insurance history, SICL, PAF insurance company, PACRA A++ insurance Pakistan, general insurance company Karachi"
        path="/about/who-we-are"
        includeOrg
      />
      <AboutHero
        category="About Shaheen Insurance"
        title="Who We Are"
        subtitle="Pakistan's trusted general insurance company since 1996 — sponsored by Shaheen Foundation (PAF)"
        breadcrumbs={[{ label: 'About Us', path: '/about' }, { label: 'Who We Are' }]}
        accent={{ value: 'A++', label: 'PACRA Rating' }}
      />

      <section className="py-16 md:py-24 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">

            {/* Company Overview */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-7 md:p-8 border border-gray-100">
                <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-2">Our Story</p>
                <h2 className="font-display font-black text-navy text-2xl md:text-3xl uppercase leading-tight tracking-tight mb-5">Established 1996</h2>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                    <p>Shaheen Insurance Company Limited (SICL) is a project of <strong className="text-navy font-bold">Shaheen Foundation</strong>, set up by Pakistan Air Force (PAF). The company was incorporated as a public limited company in <strong className="text-navy font-bold">1996</strong> under the Companies Ordinance 1979.</p>
                    <p>Over nearly three decades, Shaheen Insurance has grown its paid-up capital to <strong className="text-navy font-bold">Rs. 600 million</strong> and established itself as one of Pakistan's most reputable names in the general insurance sector. The company is listed on the <strong className="text-navy font-bold">Pakistan Stock Exchange (PSX Symbol: SHNI)</strong>.</p>
                  </div>
                  <div className="relative rounded-xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #0D1B4D 0%, #28368F 60%, #1a2a6e 100%)', boxShadow: '0 16px 40px rgba(40,54,143,0.25)' }}>
                    <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(rgba(214,166,90,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(214,166,90,0.8) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
                    <div className="relative p-6 flex flex-col items-center text-center gap-4">
                      <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-3">
                        <img src="/logo.png" alt="Shaheen Insurance" className="h-14 w-auto object-contain" />
                      </div>
                      <div className="grid grid-cols-3 gap-2 w-full">
                        {[{ val: 'A++', label: 'PACRA', sub: '' }, { val: '1996', label: 'Est.', sub: '' }, { val: '600M', label: 'Capital', sub: 'Rs.' }].map(({ val, label, sub }) => (
                          <div key={label} className="bg-white/6 border border-white/10 rounded-lg py-2.5 px-1 text-center">
                            <div className="text-gold font-display font-bold text-sm leading-none">{sub}{val}</div>
                            <div className="text-white/45 text-[8px] uppercase tracking-wider mt-1">{label}</div>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1.5 justify-center">
                        {['SECP Regulated', 'PSX: SHNI', 'Window Takaful', 'PAF Sponsored'].map(b => (
                          <span key={b} className="text-[8px] font-bold uppercase tracking-wide text-white/55 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">{b}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 space-y-3 text-gray-600 leading-relaxed text-sm">
                  <p>The company operates under the regulatory framework of SECP and is audited by <strong className="text-navy font-bold">BDO Ebrahim & Co. Chartered Accountants</strong>. Its legal affairs are managed by <strong className="text-navy font-bold">Allied Law Group</strong>, and shareholder services are provided by <strong className="text-navy font-bold">M/s Corplink (Pvt) Ltd, Lahore</strong>.</p>
                  <p>In April 2018, Shaheen Insurance launched its <strong className="text-navy font-bold">Window Takaful Operations</strong> — an SECP-authorized Shariah-compliant alternative to conventional insurance.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Philosophy */}
            <ScrollReveal>
              <div className="bg-hero-gradient rounded-2xl p-7 md:p-9 relative overflow-hidden">
                <div className="absolute -right-12 -bottom-12 w-56 h-56 border-[36px] border-white/5 rounded-full" />
                <div className="relative z-10">
                  <h3 className="font-display font-black text-white text-xl uppercase mb-4">Our Core Philosophy</h3>
                  <blockquote className="text-lg text-gold font-display font-semibold mb-4 border-l-4 border-gold pl-5 leading-tight">
                    "A satisfied claimant is the most effective advertisement for an insurance company."
                  </blockquote>
                  <p className="text-white/70 leading-relaxed text-sm">The leadership team at Shaheen Insurance delivers personalized, efficient service through a compact, dedicated workforce. Management expresses strong confidence in future expansion, attributing growth potential to stable economic conditions and active institutional support from the Shaheen Foundation.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Why Choose Us */}
            <div>
              <ScrollReveal>
                <div className="mb-5">
                  <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-2">Why Choose Us</p>
                  <h2 className="font-display font-black text-navy text-2xl md:text-3xl uppercase leading-tight tracking-tight">Why Choose Shaheen Insurance</h2>
                </div>
              </ScrollReveal>
              <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {VALUES.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-gold/30 hover:shadow-sm transition-all duration-300 group">
                    <div className="w-11 h-11 bg-navy/8 rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-navy group-hover:text-gold transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy mb-1 text-sm group-hover:text-gold transition-colors">{title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </StaggerReveal>
            </div>

            {/* Timeline */}
            <div>
              <ScrollReveal>
                <div className="mb-6">
                  <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-2">History</p>
                  <h2 className="font-display font-black text-navy text-2xl md:text-3xl uppercase leading-tight tracking-tight">Our Journey</h2>
                </div>
              </ScrollReveal>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8">
                <div className="relative pl-8 space-y-7 before:absolute before:left-3 before:top-0 before:bottom-0 before:w-[1px] before:bg-gray-200">
                  {MILESTONES.map(({ year, event }) => (
                    <div key={year} className="relative">
                      <div className="absolute -left-8 top-1 w-6 h-6 bg-white border-2 border-gold rounded-full flex items-center justify-center shadow-sm">
                        <div className="w-1.5 h-1.5 bg-navy rounded-full" />
                      </div>
                      <div className="text-gold font-display font-bold text-base mb-1 tracking-wider">{year}</div>
                      <p className="text-gray-600 text-sm leading-relaxed">{event}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <StaggerReveal className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: 'A++', label: 'PACRA Rating' },
                { value: 'Rs. 600M', label: 'Paid-up Capital' },
                { value: '28+', label: 'Years of Service' },
                { value: '12+', label: 'Branch Offices' },
              ].map(({ value, label }) => (
                <div key={label} className="bg-navy p-5 rounded-2xl text-center">
                  <div className="font-display font-bold text-2xl text-gold mb-2">{value}</div>
                  <div className="text-white/60 text-xs tracking-wider uppercase font-semibold">{label}</div>
                </div>
              ))}
            </StaggerReveal>
          </div>

          <div className="sticky top-24 self-start"><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}
