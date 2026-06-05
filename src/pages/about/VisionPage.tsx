import AboutHero from '../../components/layout/AboutHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import PageSEO from '../../components/shared/PageSEO'
import ScrollReveal from '../../components/shared/ScrollReveal'
import { StaggerReveal } from '../../components/shared/ScrollReveal'
import { Eye, Target, Heart, Globe } from 'lucide-react'

export default function VisionPage() {
  return (
    <>
      <PageSEO
        title="Vision & Mission"
        description="Shaheen Insurance's vision: to be Pakistan's most trusted insurer. Our mission focuses on prompt claims, customer satisfaction, and building financial security for policyholders nationwide."
        keywords="Shaheen Insurance vision, mission, values, insurance company goals Pakistan"
        path="/about/vision"
      />
      <AboutHero
        category="About Shaheen Insurance"
        title="Vision & Mission"
        subtitle="Our guiding principles — delivering insurance at its best while caring for society and our customers"
        breadcrumbs={[{ label: 'About Us', path: '/about' }, { label: 'Vision & Mission' }]}
        accent={{ value: '1996', label: 'Incorporated' }}
      />

      <section className="py-16 md:py-24 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">

            {/* Vision */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-7 md:p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                    <Eye size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-0.5">Statement</p>
                    <h2 className="font-display font-black text-navy text-2xl md:text-3xl uppercase leading-tight">Our Vision</h2>
                  </div>
                </div>
                <div className="bg-hero-gradient rounded-xl p-6 mb-5">
                  <p className="text-white text-lg font-display font-semibold leading-relaxed italic">
                    "To deliver general insurance at its best and to contribute positively and proactively for the welfare of our society at large as well as for the preservation of our environment, culture and ethics."
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Vision Pillars */}
            <StaggerReveal className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Globe, label: 'Societal Welfare', desc: 'Contributing positively and proactively to the welfare of society at large.' },
                { icon: Heart, label: 'Cultural Preservation', desc: 'Dedicated to preserving our environment, culture and ethical values.' },
                { icon: Target, label: 'Insurance Excellence', desc: 'Delivering general insurance at its absolute best — no compromise.' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="bg-white border border-gray-100 rounded-xl p-5 text-center hover:border-gold/30 hover:shadow-sm transition-all duration-300">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <h4 className="font-semibold text-navy text-sm mb-1">{label}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </StaggerReveal>

            {/* Mission */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-7 md:p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 bg-navy/8 rounded-xl flex items-center justify-center shrink-0">
                    <Target size={20} className="text-navy" />
                  </div>
                  <div>
                    <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-0.5">Statement</p>
                    <h2 className="font-display font-black text-navy text-2xl md:text-3xl uppercase leading-tight">Our Mission</h2>
                  </div>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                  <p>We aim to continuously improve and become a <strong className="text-navy">leading, profitable organization</strong> by meeting customer needs and enhancing shareholder value. This is accomplished through the strengths of our employees and innovative approaches to developing competitive, high-quality insurance products.</p>
                  <div className="bg-gold/8 border border-gold/20 rounded-xl p-5">
                    <p className="text-navy font-semibold text-base">"The interest of the policyholder is supreme."</p>
                    <p className="text-gray-500 text-sm mt-2">We commit to rendering exceptional service while providing comprehensive protection and peace of mind to all our policyholders.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Health Care Mission */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-7 md:p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 bg-navy/8 rounded-xl flex items-center justify-center shrink-0">
                    <Heart size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-0.5">Health Division</p>
                    <h2 className="font-display font-black text-navy text-xl md:text-2xl uppercase leading-tight">Health Care Mission</h2>
                  </div>
                </div>
                <div className="bg-hero-gradient rounded-xl p-5 mb-5 text-center">
                  <p className="text-gold font-display font-bold text-2xl italic mb-1">"We Care As You Prosper"</p>
                  <p className="text-white/60 text-xs">The driving motto behind all our health care initiatives</p>
                </div>
              </div>
            </ScrollReveal>

            <StaggerReveal className="space-y-3">
              {[
                'Establish nationwide home care and health services for policyholders and stakeholders',
                'Create innovative health products addressing gaps where public healthcare falls short',
                'Design premium services tailored to exceed customer expectations in a competitive market',
                'Develop extended assistance offerings responsive to changing demographics and market demands',
                'Deliver rapid, high-quality medical assistance throughout Pakistan while meeting customer expectations consistently',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100">
                  <div className="w-6 h-6 bg-gold/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-gold font-bold text-xs">{i + 1}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </StaggerReveal>

            {/* Health Insurance Benefits */}
            <div>
              <ScrollReveal>
                <h3 className="font-display font-black text-navy text-xl md:text-2xl uppercase mb-5 tracking-tight">Three Primary Benefits of Health Insurance</h3>
              </ScrollReveal>
              <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { num: '01', title: 'Peace of Mind', desc: 'Protection against escalating medical costs rising 30%+ annually — so unexpected illness never becomes a financial crisis.' },
                  { num: '02', title: 'Quality Healthcare', desc: 'Partnerships with hospitals emphasizing service standards, ensuring policyholders receive care they deserve.' },
                  { num: '03', title: 'Enhanced Benefits', desc: 'Higher coverage limits for employers at lower premium costs — making quality health coverage affordable for organizations.' },
                ].map(({ num, title, desc }) => (
                  <div key={num} className="bg-navy p-6 text-white rounded-2xl">
                    <div className="text-gold font-display font-bold text-4xl mb-3 opacity-40">{num}</div>
                    <h4 className="font-display font-bold text-lg mb-2">{title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </StaggerReveal>
            </div>
          </div>

          <div className="sticky top-24 self-start"><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}
