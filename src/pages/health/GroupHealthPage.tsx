import { Link } from 'react-router-dom'
import { CheckCircle2, Phone, Mail, Users, TrendingUp, Building2, Heart, Shield, ArrowRight } from 'lucide-react'
import InnerPageHero from '../../components/layout/InnerPageHero'
import PageSEO from '../../components/shared/PageSEO'
import ScrollReveal from '../../components/shared/ScrollReveal'
import { StaggerReveal } from '../../components/shared/ScrollReveal'

const BENEFITS = [
  { icon: TrendingUp, title: 'Higher Coverage Limits', desc: 'Group policies offer significantly higher coverage thresholds per employee compared to individual plans — ensuring comprehensive protection for your workforce.' },
  { icon: Users, title: 'Lower Per-Head Premium', desc: 'Group risk-sharing delivers substantially lower per-head premium costs — making comprehensive coverage affordable for organizations of any size.' },
  { icon: Shield, title: 'Simplified Enrollment', desc: 'Streamlined bulk enrollment for all employees without individual medical examinations — onboard your entire team quickly and easily.' },
  { icon: Building2, title: 'Dedicated Account Manager', desc: 'Every corporate client receives a dedicated account manager for plan administration, claims coordination, and employee support.' },
]

const COVERAGE = [
  { icon: Heart, title: 'Hospitalization', desc: 'Inpatient room and board, ICU charges, surgical fees, anesthesia, and all related hospital expenses.' },
  { icon: Users, title: 'Outpatient (OPD)', desc: 'Doctor consultations, diagnostic tests, prescribed medicines, and specialist visits — available as add-on.' },
  { icon: Heart, title: 'Maternity Coverage', desc: 'Normal and C-section deliveries, pre and post-natal care — available as an optional add-on to the base plan.' },
  { icon: Shield, title: 'Dental Coverage', desc: 'Basic dental treatments including extractions, fillings, and consultations — optional add-on.' },
]

const PLAN_FEATURES = [
  'Coverage for permanent and contract employees',
  'Nationwide panel hospital network access',
  'Direct billing at panel hospitals — no upfront payment',
  'Cashless treatment at empanelled hospitals',
  'Dedicated corporate account manager',
  '24-hour helpline for HR and employees',
  'Annual renewal with flexible sum insured',
  'Claims settlement within defined SLA',
]

const GroupSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="160" cy="75" r="20" stroke="#D6A65A" strokeWidth="1.5" opacity="0.4" fill="#D6A65A" fillOpacity="0.08" />
    <circle cx="100" cy="95" r="16" stroke="#D6A65A" strokeWidth="1" opacity="0.3" fill="#D6A65A" fillOpacity="0.06" />
    <circle cx="220" cy="95" r="16" stroke="#D6A65A" strokeWidth="1" opacity="0.3" fill="#D6A65A" fillOpacity="0.06" />
    <circle cx="70" cy="125" r="13" stroke="#D6A65A" strokeWidth="0.8" opacity="0.2" />
    <circle cx="130" cy="125" r="13" stroke="#D6A65A" strokeWidth="0.8" opacity="0.2" />
    <circle cx="190" cy="125" r="13" stroke="#D6A65A" strokeWidth="0.8" opacity="0.2" />
    <circle cx="250" cy="125" r="13" stroke="#D6A65A" strokeWidth="0.8" opacity="0.2" />
    <path d="M160 95 L100 111 M160 95 L220 111" stroke="#D6A65A" strokeWidth="0.8" opacity="0.2" />
    <path d="M100 111 L70 138 M100 111 L130 138 M220 111 L190 138 M220 111 L250 138" stroke="#D6A65A" strokeWidth="0.8" opacity="0.15" />
    <circle cx="265" cy="25" r="12" fill="#D6A65A" opacity="0.5" stroke="#D6A65A" strokeWidth="1" />
    <path d="M262 28 L265 32 L270 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="148" y="40" width="24" height="8" rx="2" fill="#D6A65A" opacity="0.4" />
    <path d="M160 48 L160 55" stroke="#D6A65A" strokeWidth="1" opacity="0.3" />
  </svg>
)

export default function GroupHealthPage() {
  return (
    <>
      <PageSEO
        title="Group Health Insurance"
        description="Shaheen Insurance group health insurance for corporates — higher coverage limits at lower per-head premiums. Protect your employees with hospitalization, maternity, and OPD options."
        keywords="group health insurance Pakistan, corporate health insurance, employee health benefits, group medical cover Pakistan"
        path="/health-care/group"
        schema={{ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Group Health Insurance', provider: { '@type': 'InsuranceAgency', name: 'Shaheen Insurance Company Limited' }, areaServed: 'PK' }}
      />
      <InnerPageHero
        category="Health Care"
        title="Group Health Insurance"
        subtitle="Corporate health solutions that protect your employees with higher coverage limits, lower per-head premiums, and simplified administration"
        breadcrumbs={[{ label: 'Health Care', path: '/health-care' }, { label: 'Group Health Insurance' }]}
        stats={[{ value: 'Lower', label: 'Per-Head Premium' }, { value: 'Cashless', label: 'Treatment' }, { value: '24/7', label: 'Helpline' }]}
        svgIllustration={<GroupSVG />}
      />

      <section className="py-20 md:py-28 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Corporate Health</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-6">
                Corporate Health<br /><span className="text-gold">Solutions</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">Shaheen Insurance's Group Health Insurance is designed for organizations that want to provide their employees with meaningful health coverage while managing costs effectively. Our group plans leverage collective risk-sharing to deliver superior benefits at competitive rates.</p>
              <p className="text-gray-600 leading-relaxed">Whether a small business, large corporation, or public sector entity — our dedicated corporate team will design a customized health plan that fits your workforce size, needs, and budget.</p>
            </ScrollReveal>
            <ScrollReveal from="right">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-navy/15">
                <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80&auto=format&fit=crop"
                  alt="Group Health Insurance" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center shrink-0">
                      <Users size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-black text-navy text-lg leading-none">Corporate Plans</p>
                      <p className="text-gray-500 text-xs mt-0.5">Higher limits · Lower premiums · Cashless</p>
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
          <defs><pattern id="grp-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,4 52,16 52,32 28,44 4,32 4,16" fill="none" stroke="#D6A65A" strokeWidth="1" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#grp-hex)" />
        </svg>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gold/6 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Advantages</p>
              <h2 className="font-display font-black text-white text-4xl md:text-5xl uppercase leading-tight tracking-tight">Key Advantages</h2>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
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
            <div className="text-center mb-10">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Coverage</p>
              <h3 className="font-display font-black text-white text-3xl uppercase">Coverage Options</h3>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {COVERAGE.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-5 bg-white/6 border border-white/10 rounded-2xl hover:border-gold/30 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={14} className="text-gold shrink-0" />
                  <h4 className="font-bold text-white text-sm">{title}</h4>
                </div>
                <p className="text-white/45 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Features</p>
              <h2 className="font-display font-black text-navy text-3xl md:text-4xl uppercase leading-tight tracking-tight mb-6">Plan Features</h2>
              <div className="bg-[#f8f7f5] rounded-2xl p-6 border border-gray-100">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PLAN_FEATURES.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 size={14} className="text-gold shrink-0 mt-0.5" />{feature}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal from="right">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Panel Network</p>
              <h2 className="font-display font-black text-navy text-3xl md:text-4xl uppercase leading-tight tracking-tight mb-6">Panel Hospital Access</h2>
              <div className="bg-navy rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
                <p className="text-white/70 text-sm leading-relaxed mb-5">Your employees gain immediate access to our extensive network of panel hospitals across Pakistan. Direct billing arrangements mean employees pay no upfront costs for covered treatments.</p>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {['Karachi', 'Lahore', 'Islamabad', 'Faisalabad', 'Peshawar', 'Multan'].map(city => (
                    <div key={city} className="flex items-center gap-2 text-xs text-white/60">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                      {city}
                    </div>
                  ))}
                </div>
                <Link to="/health-care/panel-hospitals" className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:text-gold/80 transition-colors">
                  View All Panel Hospitals <ArrowRight size={14} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="grp-cg" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#D6A65A" strokeWidth="0.8" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#grp-cg)" />
        </svg>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <ScrollReveal>
          <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
            <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">Get a Corporate Plan</p>
            <h2 className="font-display font-black text-white text-4xl md:text-5xl uppercase leading-tight mb-4">
              Protect Your <span className="text-gold">Team</span>
            </h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto text-sm leading-relaxed">Contact our Health Care Division for a customized group plan quotation tailored to your organization's size and requirements.</p>
            <div className="flex justify-center gap-3 flex-wrap">
              <a href="mailto:info@shaheeninsurance.com" className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-8 py-4 rounded-xl text-sm hover:bg-gold/90 transition-colors">
                <Mail size={15} /> Email Us
              </a>
              <a href="tel:02132630370" className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-white font-semibold px-8 py-4 rounded-xl text-sm hover:bg-white/14 transition-colors">
                <Phone size={15} /> 021-32630370-75
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
