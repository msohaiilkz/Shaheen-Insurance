import AboutHero from '../../components/layout/AboutHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import PageSEO from '../../components/shared/PageSEO'
import ScrollReveal from '../../components/shared/ScrollReveal'
import { StaggerReveal } from '../../components/shared/ScrollReveal'

const FOUNDATION_STATS = [
  { label: 'Established', value: '1977' },
  { label: 'Operations Begin', value: '1978' },
  { label: 'Balance Sheet', value: 'PKR 4B+' },
  { label: 'Annual Turnover', value: 'PKR 1.5B+' },
]

const OBJECTIVES = [
  'Promote welfare activities for serving and retired PAF personnel and their families',
  'Generate sustainable revenue through commercial enterprises to fund welfare programs',
  'Develop and manage commercial projects that create value for PAF community',
  'Maintain fiscal responsibility with a balance sheet exceeding PKR 4 Billion',
  'Place great importance on workforce quality and efficiency across all business operations',
]

export default function PafFoundersPage() {
  return (
    <>
      <PageSEO
        title="PAF Founders — Shaheen Foundation"
        description="Shaheen Foundation — Pakistan Air Force's welfare foundation and institutional sponsor of Shaheen Insurance Company Limited. Learn about the PAF legacy behind our institution."
        keywords="Shaheen Foundation, PAF foundation, Pakistan Air Force insurance, Shaheen Insurance founders"
        path="/about/paf-founders"
      />
      <AboutHero
        category="About Shaheen Insurance"
        title="PAF Founders — Shaheen Foundation"
        subtitle="The institutional sponsor behind Shaheen Insurance — Pakistan Air Force's welfare foundation"
        breadcrumbs={[{ label: 'About Us', path: '/about' }, { label: 'PAF Founders' }]}
        accent={{ value: '1977', label: 'Established' }}
      />

      <section className="py-16 md:py-24 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">

            {/* About the Foundation */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-7 md:p-8 border border-gray-100">
                <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-2">Our Foundation</p>
                <h2 className="font-display font-black text-navy text-2xl md:text-3xl uppercase leading-tight tracking-tight mb-5">About Shaheen Foundation</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                  <p>Shaheen Foundation was <strong className="text-navy font-bold">established in 1977</strong> essentially to promote welfare activities for the benefit of serving and retired Pakistan Air Force (PAF) personnel.</p>
                  <p>The organization began operations in <strong className="text-navy font-bold">1978</strong> and is registered with the Government of Pakistan, specifically the <strong className="text-navy font-bold">Ministry of Health, Welfare and Population Planning</strong>.</p>
                  <p>The Foundation generates revenue through <strong className="text-navy font-bold">commercial enterprises</strong> to finance its welfare initiatives, maintaining a balance sheet exceeding <strong className="text-navy font-bold">PKR 4 Billion</strong> with an annual business turnover surpassing <strong className="text-navy font-bold">PKR 1.50 Billion</strong>.</p>
                  <p>Shaheen Insurance represents the <strong className="text-navy font-bold">flagship commercial project</strong> under Shaheen Foundation's ownership, with the Foundation holding substantial shareholding as its principal founder.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Foundation Stats */}
            <StaggerReveal className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {FOUNDATION_STATS.map(({ label, value }) => (
                <div key={label} className="bg-navy text-center rounded-2xl p-5">
                  <div className="font-display font-bold text-gold text-xl mb-1">{value}</div>
                  <div className="text-white/55 text-xs uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </StaggerReveal>

            {/* Objectives header */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-7 border border-gray-100">
                <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-2">Objectives</p>
                <h2 className="font-display font-black text-navy text-2xl md:text-3xl uppercase leading-tight tracking-tight mb-1">Foundation Objectives</h2>
                <p className="text-gray-500 text-sm">Core mandates guiding Shaheen Foundation's commercial and welfare activities.</p>
              </div>
            </ScrollReveal>

            {/* Objectives list */}
            <StaggerReveal className="space-y-3">
              {OBJECTIVES.map((item, i) => (
                <div key={i} className="flex gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-gold/30 transition-all duration-300">
                  <div className="w-7 h-7 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-gold font-bold text-xs">{i + 1}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </StaggerReveal>

            {/* Institutional Strength */}
            <ScrollReveal>
              <div className="bg-hero-gradient rounded-2xl p-7 md:p-9 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-48 h-48 border-[32px] border-white/5 rounded-full" />
                <div className="relative z-10">
                  <h3 className="font-display font-bold text-gold text-xl mb-4">Institutional Strength</h3>
                  <p className="text-white/75 leading-relaxed text-sm mb-4">Shaheen Foundation places <strong className="text-white">"great importance to its workforce"</strong> across all business operations, ensuring quality and efficiency in every commercial venture.</p>
                  <p className="text-white/75 leading-relaxed text-sm">Besides Shaheen Insurance, Shaheen Foundation operates several additional commercial ventures that contribute to the PAF welfare fund — making it one of Pakistan's most institutionally stable corporate foundations.</p>
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
