import { Link } from 'react-router-dom'
import { CheckCircle2, Phone, FileText, PhoneCall, Clock, Building2, Tag, Users, TrendingDown, ArrowRight } from 'lucide-react'
import InnerPageHero from '../../components/layout/InnerPageHero'
import PageSEO from '../../components/shared/PageSEO'
import ScrollReveal from '../../components/shared/ScrollReveal'
import { StaggerReveal } from '../../components/shared/ScrollReveal'

const KEY_BENEFITS = [
  { icon: Tag, title: 'Low Premium Rates', desc: 'Competitive per-head premium rates for comprehensive individual and family health coverage — making quality insurance accessible to everyone.' },
  { icon: Building2, title: 'Hospital Discounts', desc: 'Policyholders enjoy exclusive discounts at our nationwide panel hospital network — reducing out-of-pocket expenses at the point of care.' },
  { icon: FileText, title: 'No Medical Check-ups', desc: 'No pre-enrollment medical examination needed. Quick, hassle-free enrollment without the burden of mandatory health screenings.' },
  { icon: Users, title: 'Up to 6 Members', desc: 'Cover your entire family — self, spouse, and up to 4 dependent children — under a single comprehensive family plan.' },
]

const DISCOUNTS = [
  {
    icon: TrendingDown,
    title: 'No-Claim Discount',
    items: ['First year renewal (no claims): 5% discount on renewal premium', 'Subsequent years without claims: 10% discount on renewal premium'],
  },
  {
    icon: Users,
    title: 'Family Discount',
    items: ['5% discount on total premium for children under 18 years of age', 'Applicable from the second child onwards'],
  },
]

const SERVICES = [
  { icon: PhoneCall, text: '24-hour hospital information helplines for immediate assistance' },
  { icon: Clock, text: '24-hour dedicated nursing staff access for medical guidance' },
  { icon: Building2, text: 'Extensive panel hospital network with cashless treatment' },
  { icon: CheckCircle2, text: 'Streamlined documentation and simplified claim submission' },
]

const IndividualSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="160" cy="60" r="22" stroke="#D6A65A" strokeWidth="1.5" opacity="0.4" fill="#D6A65A" fillOpacity="0.08" />
    <circle cx="100" cy="80" r="16" stroke="#D6A65A" strokeWidth="1" opacity="0.3" fill="#D6A65A" fillOpacity="0.06" />
    <circle cx="220" cy="80" r="16" stroke="#D6A65A" strokeWidth="1" opacity="0.3" fill="#D6A65A" fillOpacity="0.06" />
    <circle cx="130" cy="115" r="12" stroke="#D6A65A" strokeWidth="1" opacity="0.25" fill="#D6A65A" fillOpacity="0.05" />
    <circle cx="190" cy="115" r="12" stroke="#D6A65A" strokeWidth="1" opacity="0.25" fill="#D6A65A" fillOpacity="0.05" />
    <path d="M160 82 L130 115 M160 82 L190 115 M160 82 L100 96 M160 82 L220 96" stroke="#D6A65A" strokeWidth="0.8" opacity="0.2" />
    <path d="M145 140 L175 140" stroke="#D6A65A" strokeWidth="1.5" opacity="0.4" />
    <path d="M160 130 L160 150" stroke="#D6A65A" strokeWidth="1.5" opacity="0.4" />
    <circle cx="265" cy="25" r="12" fill="#D6A65A" opacity="0.5" stroke="#D6A65A" strokeWidth="1" />
    <path d="M262 28 L265 32 L270 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function IndividualHealthPage() {
  return (
    <>
      <PageSEO
        title="Individual & Family Health Insurance"
        description="Shaheen Insurance individual and family health plans — no medical check-up required, covers up to 6 members, no-claim discounts, and access to panel hospitals across Pakistan."
        keywords="individual health insurance Pakistan, family health plan, health cover no medical checkup, personal health insurance"
        path="/health-care/individual"
        schema={{ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Individual Health Insurance', provider: { '@type': 'InsuranceAgency', name: 'Shaheen Insurance Company Limited' }, areaServed: 'PK' }}
      />
      <InnerPageHero
        category="Health Care"
        title="Individual & Family Health"
        subtitle="Affordable health packages with low premiums, no medical check-ups required, and generous no-claim discounts — up to 6 family members covered"
        breadcrumbs={[{ label: 'Health Care', path: '/health-care' }, { label: 'Individual / Family' }]}
        stats={[{ value: '6', label: 'Members Covered' }, { value: '10%', label: 'No-Claim Bonus' }, { value: 'No Checkup', label: 'Required' }]}
        svgIllustration={<IndividualSVG />}
      />

      <section className="py-20 md:py-28 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Individual Plans</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-6">
                Shaheen Health<br /><span className="text-gold">Care Packages</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">Shaheen Insurance offers a comprehensive range of Individual and Family Health Care Packages, with basic premium rates charged per head. Our plans are designed to remove traditional barriers — making coverage accessible, affordable, and straightforward for all Pakistanis.</p>
              <div className="bg-gold/8 border border-gold/20 rounded-xl p-4">
                <p className="text-navy font-semibold text-sm">Premium Structure: Basic rates are charged Per Head — individual, spouse, and each dependent child enrolled separately or as a family package.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal from="right">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-navy/15">
                <img src="https://images.unsplash.com/photo-mDHwzrrIcpA?w=900&q=80&auto=format&fit=crop"
                  alt="Family Health Insurance" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center shrink-0">
                      <Users size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-black text-navy text-lg leading-none">Family Coverage</p>
                      <p className="text-gray-500 text-xs mt-0.5">No medical check-up required</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-navy relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="ind-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,4 52,16 52,32 28,44 4,32 4,16" fill="none" stroke="#D6A65A" strokeWidth="1" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#ind-hex)" />
        </svg>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gold/6 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Key Benefits</p>
              <h2 className="font-display font-black text-white text-4xl md:text-5xl uppercase leading-tight tracking-tight">What You Get</h2>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {KEY_BENEFITS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 bg-white/6 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-gold/30 transition-all group">
                <div className="w-11 h-11 bg-gold/15 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="font-display font-bold text-white text-sm mb-2 group-hover:text-gold transition-colors">{title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </StaggerReveal>

          <ScrollReveal>
            <div className="mb-10 text-center">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Discounts</p>
              <h3 className="font-display font-black text-white text-3xl uppercase">Discount Structure</h3>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {DISCOUNTS.map(({ icon: Icon, title, items }) => (
              <div key={title} className="p-6 bg-white/8 border border-gold/20 rounded-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <Icon size={18} className="text-gold" />
                  <h4 className="font-display font-bold text-white">{title}</h4>
                </div>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex gap-2 text-xs text-white/60">
                      <CheckCircle2 size={12} className="text-gold shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Services</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight">Policy Services</h2>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {SERVICES.map(({ icon: Icon, text }) => (
              <div key={text} className="flex flex-col items-center text-center p-6 bg-[#f8f7f5] rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all">
                <div className="w-11 h-11 bg-navy rounded-xl flex items-center justify-center mb-4">
                  <Icon size={18} className="text-gold" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </StaggerReveal>

          <ScrollReveal>
            <div className="bg-navy rounded-2xl p-8 max-w-3xl mx-auto text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3 relative z-10">What Sets Us Apart</p>
              <h3 className="font-display font-black text-white text-2xl uppercase mb-6 relative z-10">Our Advantages</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
                {[
                  { title: 'Simplified Documentation', desc: 'Streamlined paperwork — no complex forms or lengthy processes.' },
                  { title: 'Competitive Pricing', desc: 'Priced for families of all income levels to access meaningful coverage.' },
                  { title: 'Broader Coverage', desc: 'Wider range of conditions without excessive exclusions.' },
                ].map(({ title, desc }) => (
                  <div key={title} className="p-4 bg-white/6 rounded-xl border border-white/10 text-left">
                    <h4 className="font-semibold text-gold text-sm mb-1">{title}</h4>
                    <p className="text-white/55 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-navy relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="ind-cg" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#D6A65A" strokeWidth="0.8" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#ind-cg)" />
        </svg>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <ScrollReveal>
          <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
            <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">Get Covered</p>
            <h2 className="font-display font-black text-white text-4xl md:text-5xl uppercase leading-tight mb-4">
              Protect Your <span className="text-gold">Family</span>
            </h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto text-sm leading-relaxed">Affordable individual and family health plans with no medical check-up required. Up to 6 members covered, no-claim discounts, and nationwide panel hospitals.</p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-8 py-4 rounded-xl text-sm hover:bg-gold/90 transition-colors">
                <FileText size={15} /> Get a Quote
              </Link>
              <Link to="/health-care/panel-hospitals" className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-white font-semibold px-8 py-4 rounded-xl text-sm hover:bg-white/14 transition-colors">
                <ArrowRight size={15} /> Panel Hospitals
              </Link>
            </div>
            <div className="mt-6">
              <a href="tel:111765111" className="inline-flex items-center gap-2 text-white/50 hover:text-gold transition-colors text-sm">
                <Phone size={14} /> 111-765-111
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
