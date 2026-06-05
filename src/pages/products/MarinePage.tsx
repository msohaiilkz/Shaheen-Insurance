import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, FileText, Anchor, Shield, Package } from 'lucide-react'
import InnerPageHero from '../../components/layout/InnerPageHero'
import PageSEO from '../../components/shared/PageSEO'
import ScrollReveal from '../../components/shared/ScrollReveal'
import { StaggerReveal } from '../../components/shared/ScrollReveal'
import { gsap } from '../../lib/gsap'

const COVERED = [
  { icon: Anchor, label: 'Sinking & Stranding', desc: 'Loss from vessel sinking or running aground' },
  { icon: Shield, label: 'Fire & Explosion', desc: 'Damage caused by fire on vessel or at port' },
  { icon: Anchor, label: 'Collision', desc: 'Damage from collision of carrying vessel' },
  { icon: Package, label: 'Jettison', desc: 'Cargo jettisoned to save the ship' },
  { icon: Shield, label: 'Theft & Pilferage', desc: 'Theft, pilferage and non-delivery' },
  { icon: Anchor, label: 'Leakage & Breakage', desc: 'Leakage of liquids or breakage of fragile goods' },
]

const TYPES = [
  { title: 'Marine Cargo — Open Policy', desc: 'Blanket coverage for all shipments over a period — ideal for regular importers/exporters. One policy covers multiple consignments.' },
  { title: 'Marine Cargo — Specific Voyage', desc: 'Single shipment coverage for specific voyage from origin to destination. Ideal for one-off imports or exports.' },
  { title: 'Inland Transit', desc: 'Coverage for goods transported within Pakistan by road, rail, or inland waterway — from warehouse to warehouse.' },
]

const STEPS = [
  { num: '01', title: 'Immediate Notice', desc: 'Notify Shaheen Insurance immediately upon arrival of goods — before unloading or delivery.' },
  { num: '02', title: 'Survey Appointment', desc: 'Arrange an independent surveyor to inspect and assess the loss before goods are touched.' },
  { num: '03', title: 'Shipping Documents', desc: 'Obtain Bill of Lading, Airway Bill or railway receipt from the carrier.' },
  { num: '04', title: 'Supporting Documents', desc: 'Gather invoice, packing list, weight note, and survey report from port/customs authorities.' },
  { num: '05', title: 'Claim Form Submission', desc: 'Submit completed claim form with all supporting documents to the nearest Shaheen branch.' },
]

const MarineSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M0 130 Q40 115 80 130 Q120 145 160 130 Q200 115 240 130 Q280 145 320 130" stroke="#D6A65A" strokeWidth="1.5" opacity="0.4" fill="none" />
    <path d="M0 145 Q40 130 80 145 Q120 160 160 145 Q200 130 240 145 Q280 160 320 145" stroke="#D6A65A" strokeWidth="1" opacity="0.2" fill="none" />
    <path d="M80 100 L240 100 L250 130 L70 130 Z" fill="#D6A65A" opacity="0.15" stroke="#D6A65A" strokeWidth="1.5" />
    <rect x="100" y="75" width="120" height="26" rx="3" fill="#D6A65A" opacity="0.1" stroke="#D6A65A" strokeWidth="1.5" />
    <rect x="110" y="82" width="28" height="16" rx="2" fill="#D6A65A" opacity="0.3" />
    <rect x="145" y="82" width="28" height="16" rx="2" fill="#D6A65A" opacity="0.2" />
    <rect x="180" y="82" width="28" height="16" rx="2" fill="#D6A65A" opacity="0.3" />
    <line x1="160" y1="75" x2="160" y2="30" stroke="#D6A65A" strokeWidth="1.5" opacity="0.5" />
    <line x1="140" y1="45" x2="180" y2="45" stroke="#D6A65A" strokeWidth="1" opacity="0.4" />
    <path d="M275 20 L290 28 L290 44 C290 52 285 58 275 62 C265 58 260 52 260 44 L260 28 Z" fill="#D6A65A" opacity="0.5" />
    <path d="M272 42 L277 47 L285 36" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function MarinePage() {
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
        title="Marine Insurance"
        description="Shaheen Insurance marine cargo insurance — import/export and inland transit coverage for goods in Pakistan."
        keywords="marine insurance Pakistan, cargo insurance, import export insurance, transit insurance"
        path="/products/marine"
        schema={{ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Marine Insurance', provider: { '@type': 'InsuranceAgency', name: 'Shaheen Insurance Company Limited' }, areaServed: 'PK' }}
      />
      <InnerPageHero
        category="Insurance Products"
        title="Marine Insurance"
        subtitle="Import/export cargo and inland goods-in-transit coverage — open policy and specific voyage cover for all trade routes"
        breadcrumbs={[{ label: 'Products', path: '/products' }, { label: 'Marine Insurance' }]}
        stats={[{ value: '3 Types', label: 'Marine Cover' }, { value: '28+', label: 'Years' }, { value: 'Worldwide', label: 'Coverage' }]}
        svgIllustration={<MarineSVG />}
      />

      <section className="py-20 md:py-28 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">About Marine Insurance</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-6">
                Cargo<br /><span className="text-gold">Protected</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">Marine insurance covers the loss or damage of cargo — whether by sea, air, or land. It protects importers, exporters, and traders against risks in transporting goods across Pakistan and internationally.</p>
              <div className="space-y-3">
                {TYPES.map(({ title, desc }) => (
                  <div key={title} className="flex gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-gold/30 transition-all">
                    <Anchor size={16} className="text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy text-sm mb-1">{title}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal from="right">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-navy/15">
                <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=900&q=80&auto=format&fit=crop"
                  alt="Marine Cargo Insurance" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center shrink-0">
                      <Package size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-black text-navy text-lg leading-none">Worldwide Cover</p>
                      <p className="text-gray-500 text-xs mt-0.5">Sea, air and inland transit</p>
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
          <defs><pattern id="marine-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,4 52,16 52,32 28,44 4,32 4,16" fill="none" stroke="#D6A65A" strokeWidth="1" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#marine-hex)" />
        </svg>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gold/6 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Coverage</p>
              <h2 className="font-display font-black text-white text-4xl md:text-5xl uppercase leading-tight tracking-tight">Marine Perils Covered</h2>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COVERED.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex gap-4 p-5 bg-white/6 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-gold/30 transition-all duration-300 group">
                <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm mb-1 group-hover:text-gold transition-colors">{label}</h4>
                  <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </StaggerReveal>
          <ScrollReveal>
            <div className="mt-8 bg-white/6 border border-gold/20 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-gold font-bold text-sm mb-2">Exclusions (not covered):</p>
              <p className="text-white/55 text-sm leading-relaxed">Willful misconduct · Inherent vice or nature of goods · Normal wear and tear · Delay losses · War and strikes (unless endorsed)</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Claims</p>
                <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight">
                  Marine Claims<br />Procedure
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
          <defs><pattern id="marine-cg" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#D6A65A" strokeWidth="0.8" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#marine-cg)" />
        </svg>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <ScrollReveal>
          <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
            <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">Get Protected</p>
            <h2 className="font-display font-black text-white text-4xl md:text-5xl uppercase leading-tight mb-4">
              Protect Your <span className="text-gold">Cargo</span>
            </h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto text-sm leading-relaxed">Secure your imports and exports with comprehensive marine insurance. Open policy or specific voyage.</p>
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
