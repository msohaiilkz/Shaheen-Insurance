import { Link } from 'react-router-dom'
import { CheckCircle2, Phone, Shield, Heart, Wallet, Download, Mail, Globe, Star } from 'lucide-react'
import InnerPageHero from '../../components/layout/InnerPageHero'
import PageSEO from '../../components/shared/PageSEO'
import ScrollReveal from '../../components/shared/ScrollReveal'
import { StaggerReveal } from '../../components/shared/ScrollReveal'
import { useJourney } from '../../context/JourneyContext'
import { takafulize } from '../../lib/wording'

const PRODUCTS = [
  {
    icon: Heart,
    title: 'Shaheen Takaful Health Care',
    desc: 'Primary health coverage under our Shariah-compliant Window Takaful framework. Provides comprehensive inpatient coverage including hospitalization, surgery, and intensive care.',
    features: ['Inpatient hospitalization coverage', 'Surgical and ICU benefits', 'Shariah-compliant Waqf-based fund', 'SECP authorized operations'],
  },
  {
    icon: Shield,
    title: 'Shaheen Takaful Health Care Plus',
    desc: 'Enhanced version with expanded coverage limits and additional benefits. Ideal for individuals and families seeking higher protection under a Shariah-compliant structure.',
    features: ['Higher room and board limits', 'Expanded surgical benefit schedule', 'Enhanced maternity coverage (optional)', 'Wider panel hospital access'],
  },
  {
    icon: Wallet,
    title: 'Shaheen Takaful Wallet',
    desc: 'A flexible health wallet for outpatient expenses — doctor consultations, diagnostic tests, medicines, and specialist visits. Draw from a defined annual wallet amount as needed.',
    features: ['Outpatient consultations', 'Diagnostic and lab tests', 'Prescribed medicines', 'Specialist referrals'],
  },
]

const RE_TAKAFUL = [
  { name: 'Labuan Re', country: 'Malaysia' },
  { name: 'GIC Re', country: 'India' },
  { name: 'Africa Re', country: 'Africa' },
]

const WAQF_STRUCTURE = [
  { icon: Star, title: 'Participant Contributions (Tabarru)', desc: 'Participants contribute to the Waqf fund with intention of mutual assistance — charitable donations for the common good, not insurance premiums.' },
  { icon: Shield, title: 'Shariah-Compliant Investments', desc: 'Waqf fund assets invested only in Shariah-compliant instruments as approved by our Shariah Advisor. No interest-bearing instruments.' },
  { icon: Globe, title: 'Surplus Distribution', desc: 'Any surplus remaining in the Waqf fund after claims and expenses is distributed back to participants — not retained by shareholders.' },
]

const TakafulSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M160 40 L175 55 L192 50 L190 67 L205 75 L195 90 L205 105 L190 113 L192 130 L175 125 L160 140 L145 125 L128 130 L130 113 L115 105 L125 90 L115 75 L130 67 L128 50 L145 55 Z" fill="#D6A65A" opacity="0.1" stroke="#D6A65A" strokeWidth="1.2" />
    <path d="M160 58 C152 66 140 72 140 83 C140 94 148 100 160 107 C172 100 180 94 180 83 C180 72 168 66 160 58 Z" fill="#D6A65A" opacity="0.25" />
    <circle cx="265" cy="25" r="12" fill="#D6A65A" opacity="0.5" stroke="#D6A65A" strokeWidth="1" />
    <path d="M262 28 L265 32 L270 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="160" y="95" textAnchor="middle" fill="#D6A65A" fontSize="9" fontWeight="bold" opacity="0.6">TAKAFUL</text>
    <circle cx="50" cy="90" r="18" stroke="#D6A65A" strokeWidth="1" opacity="0.2" />
    <circle cx="50" cy="90" r="10" stroke="#D6A65A" strokeWidth="0.8" opacity="0.15" />
    <circle cx="270" cy="130" r="18" stroke="#D6A65A" strokeWidth="1" opacity="0.2" />
    <circle cx="270" cy="130" r="10" stroke="#D6A65A" strokeWidth="0.8" opacity="0.15" />
  </svg>
)

export default function TakafulHealthPage() {
  const { isTakaful } = useJourney()
  return (
    <>
      <PageSEO
        title="Takaful Health Care"
        description="Shaheen Insurance Takaful Health Care — Shariah-compliant health insurance plans under SECP-authorized Window Takaful Operations since April 2018."
        keywords="Takaful health insurance Pakistan, Islamic health insurance, Window Takaful, Shariah health cover, halal insurance Pakistan"
        path="/health-care/takaful"
        schema={{ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Takaful Health Insurance', provider: { '@type': 'InsuranceAgency', name: 'Shaheen Insurance Company Limited' }, areaServed: 'PK' }}
      />
      <InnerPageHero
        category="Window Takaful"
        title="Takaful Health Care"
        subtitle={takafulize("Shariah-compliant health insurance under our SECP-authorized Window Takaful Operations — Waqf-based fund structure, launched April 2018", isTakaful)}
        breadcrumbs={[{ label: 'Health Care', path: '/health-care' }, { label: 'Takaful Health Care' }]}
        stats={[{ value: '2018', label: 'WTO Launched' }, { value: 'SECP', label: 'Authorized' }, { value: '3 Plans', label: 'Available' }]}
        svgIllustration={<TakafulSVG />}
      />

      <section className="py-20 md:py-28 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Window Takaful</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-6">
                Window Takaful<br /><span className="text-gold">Operations</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">{takafulize("Shaheen Insurance launched its Window Takaful Operations (WTO) in April 2018 following authorization from SECP. Our Takaful operations are governed by the Takaful Rules 2012 and operate on a Waqf-based fund structure — ensuring full Shariah compliance.", isTakaful)}</p>
              <p className="text-gray-600 leading-relaxed mb-5">Participants contribute to a Waqf fund managed separately from shareholders' funds. Any surplus is distributed back to participants in line with Islamic finance principles of mutual assistance (Ta'awun).</p>
              <div className="bg-gold/8 border border-gold/20 rounded-xl p-4">
                <p className="text-navy font-semibold text-sm">SECP Authorized · Takaful Rules 2012 · Waqf-Based Structure · Shariah Advisor Oversight</p>
              </div>
            </ScrollReveal>
            <ScrollReveal from="right">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-navy/15">
                <img src="https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=900&q=80&auto=format&fit=crop"
                  alt="Takaful Health Care" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center shrink-0">
                      <Shield size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-black text-navy text-lg leading-none">Shariah Compliant</p>
                      <p className="text-gray-500 text-xs mt-0.5">SECP Authorized · Since 2018</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-light-blue relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="tak-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,4 52,16 52,32 28,44 4,32 4,16" fill="none" stroke="#D6A65A" strokeWidth="1" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#tak-hex)" />
        </svg>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gold/6 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold-dark text-xs font-bold tracking-[0.25em] uppercase mb-3">Our Plans</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight">Takaful Health Products</h2>
              <p className="text-gray-500 text-sm mt-3">Three comprehensive health coverage options under our Shariah-compliant framework.</p>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {PRODUCTS.map(({ icon: Icon, title, desc, features }) => (
              <div key={title} className="p-6 bg-white border border-navy/10 rounded-2xl hover:bg-white/10 hover:border-gold/30 transition-all duration-300 group shadow-card">
                <div className="w-11 h-11 bg-gold/15 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={20} className="text-gold" />
                </div>
                <h4 className="font-display font-bold text-navy text-base mb-3 group-hover:text-gold transition-colors">{takafulize(title, isTakaful)}</h4>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{takafulize(desc, isTakaful)}</p>
                <ul className="space-y-2 border-t border-navy/10 pt-4">
                  {features.map((f) => (
                    <li key={f} className="flex gap-2 text-xs text-gray-500">
                      <CheckCircle2 size={12} className="text-gold/70 shrink-0 mt-0.5" />{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </StaggerReveal>

          <ScrollReveal>
            <div className="text-center mb-8">
              <p className="text-gold-dark text-xs font-bold tracking-[0.25em] uppercase mb-3">Re-Takaful Partners</p>
              <h3 className="font-display font-black text-navy text-3xl uppercase">Global Partners</h3>
              <p className="text-gray-500 text-xs mt-2">International Re-Takaful partners providing global risk-sharing capacity</p>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {RE_TAKAFUL.map(({ name, country }) => (
              <div key={name} className="bg-white border border-gold/20 rounded-xl p-5 text-center shadow-card">
                <p className="font-display font-bold text-gold-dark text-base">{name}</p>
                <p className="text-gray-500 text-xs mt-1">{country}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Structure</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight">Waqf Fund Structure</h2>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WAQF_STRUCTURE.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 bg-[#f8f7f5] rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all">
                <div className="w-11 h-11 bg-gold/15 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={20} className="text-gold" />
                </div>
                <h4 className="font-display font-bold text-navy text-sm mb-2">{takafulize(title, isTakaful)}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{takafulize(desc, isTakaful)}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="py-20 bg-light-blue relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="tak-cg" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#D6A65A" strokeWidth="0.8" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#tak-cg)" />
        </svg>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <ScrollReveal>
          <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
            <p className="text-gold-dark text-xs font-bold tracking-[0.25em] uppercase mb-4">Get Started</p>
            <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight mb-4">
              Shariah-Compliant <span className="text-gold-dark">Health Cover</span>
            </h2>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto text-sm leading-relaxed">SECP-authorized Takaful health plans since 2018. Download the WTO PTF Policies document or contact us for detailed plan brochures.</p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link to="/downloads" className="inline-flex items-center gap-2 bg-navy text-white font-bold px-8 py-4 rounded-xl text-sm hover:bg-navy/90 transition-colors">
                <Download size={15} /> Download WTO Policies
              </Link>
              <a href="mailto:info@shaheeninsurance.com" className="inline-flex items-center gap-2 bg-white border border-navy/15 text-navy shadow-card font-semibold px-8 py-4 rounded-xl text-sm hover:bg-white/80 transition-colors">
                <Mail size={15} /> info@shaheeninsurance.com
              </a>
            </div>
            <div className="mt-6">
              <a href="tel:111765111" className="inline-flex items-center gap-2 text-gray-500 hover:text-gold transition-colors text-sm">
                <Phone size={14} /> 111-765-111
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
