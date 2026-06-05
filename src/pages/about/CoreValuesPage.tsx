import AboutHero from '../../components/layout/AboutHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import PageSEO from '../../components/shared/PageSEO'
import ScrollReveal from '../../components/shared/ScrollReveal'
import { StaggerReveal } from '../../components/shared/ScrollReveal'
import { CheckCircle2 } from 'lucide-react'

const CORE_VALUES = [
  { num: '01', value: 'Integrity', desc: 'We operate with the highest standards of honesty and ethical conduct in every interaction and decision.' },
  { num: '02', value: 'Responsibility', desc: 'We take ownership of our commitments to policyholders, shareholders, employees, and the nation.' },
  { num: '03', value: 'Modesty', desc: 'We serve with humility, recognizing that our clients trust us with their most critical needs.' },
  { num: '04', value: 'Dedication towards the Company & Management', desc: 'Our team is fully committed to the vision, goals, and direction of Shaheen Insurance and its leadership.' },
  { num: '05', value: 'Commitment', desc: 'We honor every promise — from policy terms to claim settlements — without exception.' },
  { num: '06', value: 'Accountability', desc: 'Every team member is responsible for their actions and decisions, ensuring transparency at every level.' },
  { num: '07', value: 'Conscience', desc: 'We act in the best interest of our policyholders, upholding ethical practices and societal wellbeing.' },
  { num: '08', value: 'Enjoy the Work', desc: 'A motivated, happy team delivers better results. We foster a positive work culture where people take pride in what they do.' },
]

export default function CoreValuesPage() {
  return (
    <>
      <PageSEO
        title="Core Values & Quality Policy"
        description="Shaheen Insurance's core values: Integrity, Responsibility, Modesty, and Dedication. Our quality policy commits to responsive service and fair claims for all policyholders in Pakistan."
        keywords="Shaheen Insurance values, quality policy, integrity insurance Pakistan"
        path="/about/core-values"
      />
      <AboutHero
        category="About Shaheen Insurance"
        title="Core Values & Quality Policy"
        subtitle="The principles that guide every decision, interaction, and commitment at Shaheen Insurance"
        breadcrumbs={[{ label: 'About Us', path: '/about' }, { label: 'Core Values & Quality Policy' }]}
        accent={{ value: '8', label: 'Core Values' }}
      />

      <section className="py-16 md:py-24 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">

            {/* Section header */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-7 border border-gray-100">
                <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-2">Our Values</p>
                <h2 className="font-display font-black text-navy text-2xl md:text-3xl uppercase leading-tight tracking-tight mb-4">Our 8 Core Values</h2>
                <p className="text-gray-600 text-sm leading-relaxed">These core values define who we are and how we operate — from every customer interaction to every business decision. They are the foundation of trust that Shaheen Insurance has built over 28+ years.</p>
              </div>
            </ScrollReveal>

            {/* Core values grid */}
            <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CORE_VALUES.map(({ num, value, desc }) => (
                <div key={num} className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="font-display font-bold text-3xl text-gold/30 group-hover:text-gold/60 transition-colors leading-none shrink-0">{num}</span>
                    <div>
                      <h3 className="font-display font-bold text-navy text-base mb-2 group-hover:text-gold transition-colors">{value}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </StaggerReveal>

            {/* Quality Policy header */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-7 border border-gray-100">
                <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-2">Quality</p>
                <h2 className="font-display font-black text-navy text-2xl md:text-3xl uppercase leading-tight tracking-tight mb-5">Quality Policy</h2>
                <div className="bg-hero-gradient rounded-xl p-6 mb-5">
                  <h3 className="text-gold font-display font-bold text-xl mb-2">Honesty · Dedication · Commitment</h3>
                  <p className="text-white/70 leading-relaxed text-sm">These three foundational themes serve as the cornerstone of every interaction and process at Shaheen Insurance — protecting the interests of all stakeholders.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Quality commitments */}
            <StaggerReveal className="space-y-3">
              {[
                { title: '"We invest in quality…"', desc: 'When it comes to certain things, compromise is out of the question. Shaheen Insurance commits to delivering superior client services without any justification for complaints regarding claims or any other matter.', highlight: true },
                { title: null, desc: 'Making optimal efforts to deliver superior client services at all times — in claims handling, policy issuance, and customer support.', highlight: false },
                { title: null, desc: 'This framework is designed to protect the interests of all parties involved — policyholders, shareholders, employees, and society at large.', highlight: false },
              ].map(({ title, desc, highlight }, i) => (
                <div key={i} className={`flex items-start gap-3 p-5 rounded-xl border ${highlight ? 'bg-gold/5 border-gold/20' : 'bg-white border-gray-100'}`}>
                  <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
                  <div>
                    {title && <p className="font-semibold text-navy mb-1 text-sm">{title}</p>}
                    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                  </div>
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
