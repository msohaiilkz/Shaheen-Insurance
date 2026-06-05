import { Link } from 'react-router-dom'
import { Heart, Users, User, Building2, Shield, PhoneCall, Clock, MapPin, CheckCircle2, ArrowRight } from 'lucide-react'
import InnerPageHero from '../../components/layout/InnerPageHero'
import PageSEO from '../../components/shared/PageSEO'
import ScrollReveal from '../../components/shared/ScrollReveal'
import { StaggerReveal } from '../../components/shared/ScrollReveal'

const PRODUCTS = [
  { icon: Heart, title: 'Shaheen Takaful Health Care', desc: 'Shariah-compliant health coverage — Health Care, Health Care Plus, and Takaful Wallet with coverage up to Rs. 1,000,000.', link: '/health-care/takaful', badge: 'Window Takaful' },
  { icon: Users, title: 'Group Health Insurance', desc: 'Corporate health solutions offering higher coverage limits and lower per-head premiums for organizations and their employees.', link: '/health-care/group', badge: 'Corporate' },
  { icon: User, title: 'Individual / Family Health', desc: 'Affordable health packages for individuals and families — no medical check-up required, up to 6 members, no-claim discounts.', link: '/health-care/individual', badge: 'Personal' },
  { icon: Building2, title: 'Panel Hospital Network', desc: 'Nationwide network of panel hospitals offering cashless treatment, discounts, and quality healthcare services across Pakistan.', link: '/health-care/panel-hospitals', badge: 'Nationwide' },
]

const BENEFITS = [
  { icon: Shield, title: 'Peace of Mind', desc: 'Medical costs in Pakistan are rising 30%+ annually. Our health insurance shields you from escalating healthcare expenses.' },
  { icon: Building2, title: 'Quality Healthcare', desc: 'Partnerships with hospitals across Pakistan emphasizing service standards and quality care — when you need it most.' },
  { icon: Users, title: 'Enhanced Employee Benefits', desc: 'Higher coverage limits at significantly lower per-head premiums — making employee health coverage feasible for every organization.' },
  { icon: Heart, title: 'Takaful Compliance', desc: 'SECP-authorized Window Takaful Operations since 2018 — Shariah-compliant health coverage for the entire family.' },
]

const SERVICES = [
  { icon: PhoneCall, text: '24-hour hospital information helplines for immediate assistance' },
  { icon: Clock, text: '24-hour dedicated nursing staff access for medical guidance' },
  { icon: MapPin, text: 'Nationwide medical assistance network across Pakistan' },
  { icon: Building2, text: 'Panel hospital discounts on treatments and procedures' },
  { icon: CheckCircle2, text: 'Claim reimbursement services with dedicated processing team' },
]

const HealthSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M160 130 C140 110 100 95 100 70 C100 50 120 38 140 50 C150 55 155 62 160 70 C165 62 170 55 180 50 C200 38 220 50 220 70 C220 95 180 110 160 130 Z" fill="#D6A65A" opacity="0.2" stroke="#D6A65A" strokeWidth="1.5" />
    <line x1="30" y1="90" x2="80" y2="90" stroke="#D6A65A" strokeWidth="1" opacity="0.3" />
    <line x1="55" y1="65" x2="55" y2="115" stroke="#D6A65A" strokeWidth="1" opacity="0.3" />
    <rect x="48" y="83" width="14" height="14" rx="2" fill="#D6A65A" opacity="0.35" />
    <line x1="240" y1="90" x2="290" y2="90" stroke="#D6A65A" strokeWidth="1" opacity="0.3" />
    <line x1="265" y1="65" x2="265" y2="115" stroke="#D6A65A" strokeWidth="1" opacity="0.3" />
    <rect x="258" y="83" width="14" height="14" rx="2" fill="#D6A65A" opacity="0.35" />
    <circle cx="160" cy="145" r="10" fill="#D6A65A" opacity="0.2" stroke="#D6A65A" strokeWidth="1" />
    <path d="M155 142 L158 148 L165 138" stroke="#D6A65A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
    <circle cx="100" cy="30" r="5" fill="#D6A65A" opacity="0.3" />
    <circle cx="220" cy="30" r="5" fill="#D6A65A" opacity="0.3" />
    <circle cx="265" cy="25" r="12" fill="#D6A65A" opacity="0.5" stroke="#D6A65A" strokeWidth="1" />
    <path d="M262 28 L265 32 L270 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function HealthCarePage() {
  return (
    <>
      <PageSEO
        title="Health Care Insurance"
        description="Shaheen Insurance health care — individual, family, group corporate, Takaful health plans, and panel hospital network across Pakistan. We Care As You Prosper."
        keywords="health insurance Pakistan, group health insurance, individual health plan, Takaful health, panel hospitals Pakistan"
        path="/health-care"
        schema={{ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Health Insurance', provider: { '@type': 'InsuranceAgency', name: 'Shaheen Insurance Company Limited' }, areaServed: 'PK' }}
      />
      <InnerPageHero
        category="Health Care Division"
        title="Health Care"
        subtitle="We Care As You Prosper — comprehensive health insurance solutions for individuals, families, and corporates across Pakistan"
        breadcrumbs={[{ label: 'Health Care' }]}
        stats={[{ value: '4', label: 'Plan Types' }, { value: 'Rs. 1M+', label: 'Max Coverage' }, { value: '50+', label: 'Panel Hospitals' }]}
        svgIllustration={<HealthSVG />}
      />

      <section className="py-20 md:py-28 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Our Mission</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-6">
                We Care<br /><span className="text-gold">As You Prosper</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">Our Health Care Division provides dedicated coverage for individuals, families, and organizations across Pakistan — tailored to meet real needs at accessible premiums. With conventional and Takaful options, we cover every Pakistani's healthcare needs.</p>
              <div className="bg-navy rounded-xl p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
                <p className="font-display text-lg font-bold text-gold italic mb-2 leading-tight">"We Care As You Prosper"</p>
                <p className="text-white/65 text-sm leading-relaxed">Health insurance that removes the financial burden of medical emergencies — keeping your family protected and your savings intact.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal from="right">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-navy/15">
                <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80&auto=format&fit=crop"
                  alt="Health Care Insurance" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center shrink-0">
                      <Heart size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-black text-navy text-lg leading-none">24/7 Health Support</p>
                      <p className="text-gray-500 text-xs mt-0.5">Individual · Group · Takaful</p>
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
          <defs><pattern id="health-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,4 52,16 52,32 28,44 4,32 4,16" fill="none" stroke="#D6A65A" strokeWidth="1" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#health-hex)" />
        </svg>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gold/6 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Health Products</p>
              <h2 className="font-display font-black text-white text-4xl md:text-5xl uppercase leading-tight tracking-tight">Our Coverage Range</h2>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRODUCTS.map(({ icon: Icon, title, desc, link, badge }) => (
              <Link key={title} to={link}
                className="group flex flex-col p-6 bg-white/6 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-gold/30 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 bg-gold/15 rounded-xl flex items-center justify-center">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold bg-gold/10 px-2 py-1 rounded-full border border-gold/20">{badge}</span>
                </div>
                <h3 className="font-display font-bold text-white text-sm mb-2 group-hover:text-gold transition-colors">{title}</h3>
                <p className="text-white/45 text-xs leading-relaxed flex-grow mb-4">{desc}</p>
                <div className="flex items-center gap-2 text-gold/70 text-xs font-bold group-hover:text-gold transition-colors">
                  <span>Learn More</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Benefits</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight">Why Health Insurance Matters</h2>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-6 bg-[#f8f7f5] rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-300">
                  <Icon size={22} className="text-gold group-hover:text-navy transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy text-base mb-1 group-hover:text-gold transition-colors">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="py-20 bg-navy relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="health-cg" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#D6A65A" strokeWidth="0.8" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#health-cg)" />
        </svg>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Services</p>
              <h2 className="font-display font-black text-white text-4xl md:text-5xl uppercase leading-tight">Health Care Services</h2>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
            {SERVICES.map(({ icon: Icon, text }) => (
              <div key={text} className="flex flex-col items-center text-center p-5 bg-white/6 border border-white/10 rounded-2xl hover:border-gold/30 hover:bg-white/10 transition-all">
                <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center mb-3">
                  <Icon size={18} className="text-gold" />
                </div>
                <p className="text-white/65 text-xs leading-relaxed">{text}</p>
              </div>
            ))}
          </StaggerReveal>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">Get Protected</p>
              <h2 className="font-display font-black text-white text-3xl md:text-4xl uppercase leading-tight mb-4">
                Ready to <span className="text-gold">Get Covered?</span>
              </h2>
              <p className="text-white/50 mb-8 text-sm leading-relaxed">Contact our Health Care Division for personalized plans — individual, family, group or Takaful.</p>
              <div className="flex justify-center gap-3 flex-wrap">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-8 py-4 rounded-xl text-sm hover:bg-gold/90 transition-colors">
                  Contact Health Division
                </Link>
                <Link to="/health-care/panel-hospitals" className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-white font-semibold px-8 py-4 rounded-xl text-sm hover:bg-white/14 transition-colors">
                  View Panel Hospitals
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
