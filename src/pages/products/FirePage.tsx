import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, Phone, FileText, Flame, Shield, AlertTriangle } from 'lucide-react'
import InnerPageHero from '../../components/layout/InnerPageHero'
import PageSEO from '../../components/shared/PageSEO'
import ScrollReveal from '../../components/shared/ScrollReveal'
import { StaggerReveal } from '../../components/shared/ScrollReveal'
import { gsap } from '../../lib/gsap'

const COVERAGE = [
  { icon: Flame, label: 'Fire & Lightning', desc: 'Direct damage caused by fire and lightning strikes' },
  { icon: AlertTriangle, label: 'Explosion', desc: 'Explosion of gas, boiler or pressure vessels' },
  { icon: Shield, label: 'Earthquake', desc: 'Earthquake, volcanic eruption and allied perils' },
  { icon: AlertTriangle, label: 'Riot & Strike', desc: 'Malicious damage due to riot or strike action' },
  { icon: Shield, label: 'Storm & Flood', desc: 'Atmospheric disturbances, storm, cyclone, flood' },
  { icon: AlertTriangle, label: 'Impact Damage', desc: 'Damage caused by impact from vehicles or aircraft' },
  { icon: Flame, label: 'Aircraft Impact', desc: 'Damage caused by aircraft or aerial objects' },
  { icon: Shield, label: 'Burglary & Theft', desc: 'Loss by burglary, housebreaking or theft' },
  { icon: AlertTriangle, label: 'Spontaneous Combustion', desc: 'Spontaneous fermentation or heating losses' },
]

const STEPS = [
  { num: '01', title: 'Immediate Notification', desc: 'Inform Shaheen Insurance immediately by phone AND in writing, including your policy number.' },
  { num: '02', title: 'Obtain Claim Form', desc: 'Obtain and complete the claim form from any Shaheen Insurance branch or online.' },
  { num: '03', title: 'Lodge Police Complaint', desc: 'Lodge police complaint if applicable — for rioting, malicious damage, or terrorism incidents.' },
  { num: '04', title: 'Surveyor Deputation', desc: 'For large losses, prompt intimation ensures a suitable surveyor can be sent immediately.' },
  { num: '05', title: 'Document Submission', desc: 'Provide documentary evidence — photocopies with acknowledgment from relevant authorities.' },
  { num: '06', title: 'Authority Reports', desc: 'Report to fire station, police, and civil authorities. Obtain copies for the surveyor.' },
]

const BuildingSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="240" cy="90" r="75" stroke="#D6A65A" strokeWidth="0.5" opacity="0.25" />
    {/* Building */}
    <rect x="70" y="55" width="160" height="105" rx="4" fill="#D6A65A" opacity="0.1" stroke="#D6A65A" strokeWidth="1.5" />
    <rect x="90" y="75" width="25" height="30" rx="2" fill="white" opacity="0.15" />
    <rect x="127" y="75" width="25" height="30" rx="2" fill="white" opacity="0.15" />
    <rect x="163" y="75" width="25" height="30" rx="2" fill="white" opacity="0.15" />
    <rect x="90" y="115" width="25" height="30" rx="2" fill="white" opacity="0.15" />
    <rect x="127" y="115" width="25" height="30" rx="2" fill="white" opacity="0.15" />
    <rect x="163" y="115" width="25" height="30" rx="2" fill="white" opacity="0.15" />
    {/* Roof */}
    <path d="M60 58 L150 20 L240 58" fill="#D6A65A" opacity="0.2" stroke="#D6A65A" strokeWidth="1.5" />
    {/* Flame */}
    <path d="M260 55 C255 45 265 35 258 25 C268 32 272 45 265 55 C262 60 258 60 260 55Z" fill="#D6A65A" opacity="0.7" />
    {/* Shield badge */}
    <path d="M30 30 L50 40 L50 58 C50 68 40 75 30 78 C20 75 10 68 10 58 L10 40 Z" fill="#D6A65A" opacity="0.5" />
    <path d="M27 55 L32 60 L42 47" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function FirePage() {
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
        title="Fire & Property Insurance"
        description="Shaheen Insurance fire and property insurance — protection against fire, lightning, explosion, earthquake, riot, and allied perils for residential and commercial properties in Pakistan."
        keywords="fire insurance Pakistan, property insurance, commercial fire cover, earthquake insurance, building insurance"
        path="/products/fire"
        schema={{ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Fire Insurance', provider: { '@type': 'InsuranceAgency', name: 'Shaheen Insurance Company Limited' }, areaServed: 'PK' }}
      />
      <InnerPageHero
        category="Insurance Products"
        title="Fire & Property Insurance"
        subtitle="Comprehensive protection for your property against fire, lightning, explosion, earthquake, riot and 9 allied perils"
        breadcrumbs={[{ label: 'Products', path: '/products' }, { label: 'Fire Insurance' }]}
        stats={[{ value: '9 Perils', label: 'Covered' }, { value: '28+', label: 'Years' }, { value: '5 Days', label: 'Settlement' }]}
        svgIllustration={<BuildingSVG />}
      />

      {/* Overview */}
      <section className="py-20 md:py-28 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">About Fire Insurance</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-6">
                Property<br /><span className="text-gold">Protection</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">Shaheen Insurance's Fire & Property policy provides wide-ranging protection to residential and commercial properties against fire and a host of allied perils. Whether it's your home, factory, warehouse, or commercial establishment — you are protected.</p>
              <div className="space-y-3">
                {['Residential homes and apartments', 'Commercial buildings and offices', 'Factories, warehouses and stores', 'Stocks, machinery and equipment', 'Furniture and fixtures'].map(item => (
                  <div key={item} className="flex gap-2.5">
                    <CheckCircle2 size={15} className="text-gold shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal from="right">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-navy/15">
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80&auto=format&fit=crop"
                  alt="Fire Insurance" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center shrink-0">
                      <Flame size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-black text-navy text-lg leading-none">9 Allied Perils</p>
                      <p className="text-gray-500 text-xs mt-0.5">Comprehensive property coverage</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Coverage grid */}
      <section className="py-20 md:py-28 bg-navy relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="fire-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,4 52,16 52,32 28,44 4,32 4,16" fill="none" stroke="#D6A65A" strokeWidth="1" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#fire-hex)" />
        </svg>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gold/6 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Coverage</p>
              <h2 className="font-display font-black text-white text-4xl md:text-5xl uppercase leading-tight tracking-tight">What's Covered</h2>
              <p className="text-white/40 mt-3 max-w-lg mx-auto text-sm">Nine comprehensive perils covered under the standard fire and allied perils policy.</p>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COVERAGE.map(({ icon: Icon, label, desc }) => (
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
            <div className="grid grid-cols-3 gap-4 mt-10 max-w-lg mx-auto">
              {[{ val: '28+', label: 'Years' }, { val: 'A++', label: 'PACRA' }, { val: '5 Days', label: 'SLA' }].map(({ val, label }) => (
                <div key={label} className="bg-white/6 border border-white/10 rounded-xl p-4 text-center">
                  <div className="font-display font-black text-gold text-xl leading-none mb-1">{val}</div>
                  <div className="text-white/45 text-[10px] uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Claims Process */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <svg className="absolute right-0 top-0 h-full opacity-[0.025] pointer-events-none" viewBox="0 0 300 600" fill="none" preserveAspectRatio="xMidYMid slice">
          <path d="M300 0 Q200 150 300 300 Q400 450 300 600" stroke="#0D1440" strokeWidth="120" fill="none" />
        </svg>
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Claims</p>
                <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight">
                  Fire Claims<br />Procedure
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
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

      {/* CTA */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="fire-cg" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#D6A65A" strokeWidth="0.8" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#fire-cg)" />
        </svg>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <ScrollReveal>
          <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
            <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">Get Protected</p>
            <h2 className="font-display font-black text-white text-4xl md:text-5xl uppercase leading-tight mb-4">
              Protect Your <span className="text-gold">Property</span>
            </h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto text-sm leading-relaxed">Get fire and property insurance for your home or business. Fast quotes, reliable service.</p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-8 py-4 rounded-xl text-sm hover:bg-gold/90 transition-colors">
                <FileText size={15} /> Get a Quote
              </Link>
              <a href="tel:111765111" className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-white font-semibold px-8 py-4 rounded-xl text-sm hover:bg-white/14 transition-colors">
                <Phone size={15} /> 111-765-111
              </a>
            </div>
            <div className="mt-10 flex items-center justify-center gap-4 opacity-35 flex-wrap">
              {['SECP Regulated', 'PACRA A++', 'PAF Sponsored', 'PSX: SHNI'].map(b => (
                <span key={b} className="text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase">{b}</span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
