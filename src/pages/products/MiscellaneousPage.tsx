import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, FileText, Shield, DollarSign, Users, AlertTriangle, Lock, Package } from 'lucide-react'
import InnerPageHero from '../../components/layout/InnerPageHero'
import PageSEO from '../../components/shared/PageSEO'
import ScrollReveal from '../../components/shared/ScrollReveal'
import { StaggerReveal } from '../../components/shared/ScrollReveal'
import { gsap } from '../../lib/gsap'

const PRODUCTS = [
  { icon: DollarSign, title: 'Cash In Safe', desc: 'Covers money owned by the insured while lying in a safe against the risk of burglary, robbery, armed holdup and theft.' },
  { icon: DollarSign, title: 'Cash In Transit', desc: "Protection for funds in transit from insured's premises to the bank against robbery, armed holdup, and snatching through forcible means." },
  { icon: Lock, title: 'Plasticard Insurance', desc: 'Covers financial institution losses from misuse of credit card and/or fraud on issued debit and credit cards.' },
  { icon: Users, title: 'Personal Accident', desc: 'Provides indemnification for individuals against death, personal injury and physical incapacity due to involvement in any accident.' },
  { icon: AlertTriangle, title: 'Workmen Compensation', desc: 'Covers employer liability when employees sustain personal injury by accident or occupational disease in course of employment.' },
  { icon: Shield, title: 'Fidelity Guarantee', desc: 'Covers loss sustained by an act of fraud or dishonesty committed by the employee to the employer.' },
  { icon: Users, title: 'Public Liability', desc: 'Indemnifies the insured for legal liability to pay for death and/or bodily injury to any person and/or direct damage to property.' },
  { icon: Package, title: 'Product Liability', desc: "Covers insured's legal liability in respect of claims raised by third parties due to injury or damage caused by a product." },
  { icon: Shield, title: 'All Risks Insurance', desc: 'Provides wider coverage than normal fire policy for accidental loss or damage to the property insured.' },
  { icon: Lock, title: 'Burglary / Theft', desc: 'Compensates policyholders for loss of property as a result of burglary, robbery, armed holdup and theft due to house breaking.' },
]

const STEPS = [
  { num: '01', title: 'Immediate Notice', desc: 'Notify Shaheen Insurance immediately upon discovery of loss, theft, accident, or liability event.' },
  { num: '02', title: 'Police Report', desc: 'For theft, burglary or cash crimes — file a police FIR and obtain a copy immediately.' },
  { num: '03', title: 'Preserve Evidence', desc: 'Preserve all evidence, damaged goods, and CCTV recordings. Do not disturb the scene.' },
  { num: '04', title: 'Medical Reports', desc: 'For personal accident or workmen compensation — obtain medical reports and doctor certificates.' },
  { num: '05', title: 'Submit Claim', desc: 'Submit completed claim form with police report, medical documents, and loss details.' },
]

const MiscSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="160" cy="90" r="55" stroke="#D6A65A" strokeWidth="1.5" opacity="0.2" />
    <path d="M160 35 L160 90 L205 63" stroke="#D6A65A" strokeWidth="1" opacity="0.3" />
    <circle cx="160" cy="90" r="8" fill="#D6A65A" opacity="0.4" />
    {[0,36,72,108,144,180,216,252,288,324].map((angle, i) => (
      <circle key={i}
        cx={160 + 55 * Math.cos((angle - 90) * Math.PI / 180)}
        cy={90 + 55 * Math.sin((angle - 90) * Math.PI / 180)}
        r="5" fill="#D6A65A"
        opacity={i % 2 === 0 ? 0.4 : 0.25}
      />
    ))}
    <path d="M135 75 L185 75 L190 90 L180 105 L140 105 L130 90 Z" fill="#D6A65A" opacity="0.12" stroke="#D6A65A" strokeWidth="1" />
    <circle cx="265" cy="25" r="12" fill="#D6A65A" opacity="0.5" stroke="#D6A65A" strokeWidth="1" />
    <path d="M262 28 L265 32 L270 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="50" y="55" width="30" height="35" rx="3" fill="#D6A65A" opacity="0.15" stroke="#D6A65A" strokeWidth="1" />
    <rect x="57" y="70" width="16" height="12" rx="2" fill="#D6A65A" opacity="0.3" />
    <rect x="60" y="75" width="4" height="6" rx="1" fill="#D6A65A" opacity="0.5" />
    <rect x="245" y="110" width="40" height="28" rx="3" fill="#D6A65A" opacity="0.12" stroke="#D6A65A" strokeWidth="1" />
    <circle cx="265" cy="124" r="5" stroke="#D6A65A" strokeWidth="1" opacity="0.4" />
    <line x1="262" y1="124" x2="268" y2="124" stroke="#D6A65A" strokeWidth="0.8" opacity="0.4" />
    <line x1="265" y1="121" x2="265" y2="127" stroke="#D6A65A" strokeWidth="0.8" opacity="0.4" />
  </svg>
)

export default function MiscellaneousPage() {
  const stepsRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!stepsRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, transformOrigin: 'left center', duration: 1.4, ease: 'power2.inOut',
          scrollTrigger: { trigger: lineRef.current, start: 'top 80%', once: true } }
      )
      gsap.fromTo(stepsRef.current!.querySelectorAll('.claim-step'),
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: stepsRef.current, start: 'top 80%', once: true } }
      )
    }, stepsRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <PageSEO
        title="Miscellaneous Insurance"
        description="Shaheen Insurance miscellaneous products — cash-in-transit, personal accident, workmen compensation, fidelity guarantee, burglary, and liability insurance in Pakistan."
        keywords="miscellaneous insurance Pakistan, personal accident insurance, burglary insurance, workmen compensation, fidelity guarantee"
        path="/products/miscellaneous"
        schema={{ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Miscellaneous Insurance', provider: { '@type': 'InsuranceAgency', name: 'Shaheen Insurance Company Limited' }, areaServed: 'PK' }}
      />
      <InnerPageHero
        category="Insurance Products"
        title="Miscellaneous Insurance"
        subtitle="Ten specialized insurance products covering cash, personal accident, liability, and property risks for businesses and individuals"
        breadcrumbs={[{ label: 'Products', path: '/products' }, { label: 'Miscellaneous Insurance' }]}
        stats={[{ value: '10', label: 'Products' }, { value: 'All Risks', label: 'Coverage' }, { value: '28+', label: 'Years' }]}
        svgIllustration={<MiscSVG />}
      />

      <section className="py-20 md:py-28 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">About Miscellaneous Insurance</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-6">
                Specialized<br /><span className="text-gold">Coverage</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">Shaheen Insurance offers a comprehensive range of miscellaneous products to protect businesses and individuals from specialized risks not covered by standard policies — from cash-in-transit to personal accident, liability, and fidelity guarantee.</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: 'Cash', lbl: 'Safe & Transit' },
                  { val: 'PA', lbl: 'Personal Accident' },
                  { val: 'WC', lbl: 'Workmen Compensation' },
                  { val: 'PL', lbl: 'Public Liability' },
                ].map(({ val, lbl }) => (
                  <div key={val} className="bg-white rounded-xl p-4 border border-gray-100 flex items-center gap-3">
                    <span className="font-display font-black text-gold text-base w-10 shrink-0">{val}</span>
                    <p className="text-gray-500 text-xs leading-tight">{lbl}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal from="right">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-navy/15">
                <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=900&q=80&auto=format&fit=crop"
                  alt="Miscellaneous Insurance" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center shrink-0">
                      <Shield size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-black text-navy text-lg leading-none">10 Specialized Products</p>
                      <p className="text-gray-500 text-xs mt-0.5">Cash · Liability · Accident · Theft</p>
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
          <defs><pattern id="misc-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,4 52,16 52,32 28,44 4,32 4,16" fill="none" stroke="#D6A65A" strokeWidth="1" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#misc-hex)" />
        </svg>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gold/6 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Products</p>
              <h2 className="font-display font-black text-white text-4xl md:text-5xl uppercase leading-tight tracking-tight">All Miscellaneous Products</h2>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PRODUCTS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-5 bg-white/6 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-gold/30 transition-all duration-300 group">
                <div className="w-9 h-9 bg-gold/15 rounded-xl flex items-center justify-center mb-3">
                  <Icon size={16} className="text-gold" />
                </div>
                <h4 className="font-display font-bold text-white text-sm mb-2 group-hover:text-gold transition-colors">{title}</h4>
                <p className="text-white/45 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Claims</p>
                <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight">
                  Claims<br />Procedure
                </h2>
              </div>
              <Link to="/claims/intimation" className="inline-flex items-center gap-2 bg-navy text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-navy/90 transition-colors self-start">
                Start a Claim <ArrowRight size={15} />
              </Link>
            </div>
          </ScrollReveal>
          <div ref={stepsRef} className="relative">
            <div ref={lineRef} className="hidden lg:block absolute h-px bg-gradient-to-r from-gold/60 via-gold/30 to-gold/10 z-0"
              style={{ top: '1.75rem', left: '1.25rem', right: '1.25rem' }} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10">
              {STEPS.map(({ num, title, desc }) => (
                <div key={num} className="claim-step group p-5 bg-[#f8f7f5] rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all duration-300">
                  <span className="font-display font-black text-gold/40 text-3xl leading-none block mb-3 group-hover:text-gold/70 transition-colors">{num}</span>
                  <h4 className="font-display font-bold text-navy text-base mb-2">{title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="misc-cg" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#D6A65A" strokeWidth="0.8" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#misc-cg)" />
        </svg>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <ScrollReveal>
          <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
            <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">Get Protected</p>
            <h2 className="font-display font-black text-white text-4xl md:text-5xl uppercase leading-tight mb-4">
              Specialized <span className="text-gold">Protection</span>
            </h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto text-sm leading-relaxed">From cash-in-transit to personal accident and liability — Shaheen Insurance covers the risks that matter most to your business.</p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-8 py-4 rounded-xl text-sm hover:bg-gold/90 transition-colors">
                <FileText size={15} /> Get a Quote
              </Link>
              <a href="tel:111765111" className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-white font-semibold px-8 py-4 rounded-xl text-sm hover:bg-white/14 transition-colors">
                <Phone size={15} /> 111-765-111
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
