import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, FileText, Plane, Shield, Package, Users } from 'lucide-react'
import InnerPageHero from '../../components/layout/InnerPageHero'
import PageSEO from '../../components/shared/PageSEO'
import ScrollReveal from '../../components/shared/ScrollReveal'
import { StaggerReveal } from '../../components/shared/ScrollReveal'
import { gsap } from '../../lib/gsap'

const COVERAGE = [
  { icon: Plane, label: 'Aircraft Hull', desc: 'Accidental loss or damage to aircraft body, engines, fixtures and fittings — in-flight and on ground' },
  { icon: Shield, label: 'Airline Liability', desc: 'Legal liability of airlines against loss or damage to third parties — death, injury, and property damage' },
  { icon: Users, label: 'Passenger Liability', desc: 'Coverage for accidental death or injury of passengers during flight operations' },
  { icon: Package, label: 'Cargo Liability', desc: 'Legal liability for loss or damage to cargo carried on the aircraft' },
  { icon: Shield, label: 'Airport Liability', desc: 'Liability coverage for airport owners and ground handling operators' },
  { icon: Plane, label: 'Ground Operations', desc: 'Coverage for ground damage, hangar incidents, and maintenance operations' },
]

const CLIENTS = [
  'Commercial Airlines', 'Corporate Aircraft Operators', 'Private Aircraft Owners',
  'Flying Clubs', 'Airport Authorities', 'Aircraft Manufacturers',
]

const STEPS = [
  { num: '01', title: 'Immediate Notification', desc: 'Notify Shaheen Insurance immediately after any aviation incident or accident.' },
  { num: '02', title: 'Authority Reports', desc: 'Obtain Civil Aviation Authority (CAA) incident report and any police or airport authority reports.' },
  { num: '03', title: 'Preserve Evidence', desc: 'Preserve all evidence and do not repair or move aircraft until surveyor has completed assessment.' },
  { num: '04', title: 'Technical Survey', desc: 'Independent aviation surveyor will assess the extent of hull damage or liability exposure.' },
  { num: '05', title: 'Claim Submission', desc: 'Submit completed claim form with all CAA reports, technical assessments, and cost estimates.' },
]

const AviationSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M40 100 L120 80 L200 70 L280 60" stroke="#D6A65A" strokeWidth="1" opacity="0.2" strokeDasharray="4,4" />
    <path d="M160 90 L210 75 L230 78 L215 90 Z" fill="#D6A65A" opacity="0.5" />
    <path d="M200 80 L230 70 L225 65 L195 73 Z" fill="#D6A65A" opacity="0.35" />
    <path d="M205 85 L225 90 L220 95 L202 90 Z" fill="#D6A65A" opacity="0.3" />
    <path d="M160 90 L155 88" stroke="#D6A65A" strokeWidth="2" opacity="0.4" />
    <circle cx="50" cy="140" r="25" stroke="#D6A65A" strokeWidth="1" opacity="0.15" />
    <circle cx="50" cy="140" r="15" stroke="#D6A65A" strokeWidth="0.8" opacity="0.12" />
    <line x1="25" y1="140" x2="75" y2="140" stroke="#D6A65A" strokeWidth="0.8" opacity="0.2" />
    <line x1="50" y1="115" x2="50" y2="165" stroke="#D6A65A" strokeWidth="0.8" opacity="0.2" />
    <circle cx="100" cy="30" r="18" stroke="#D6A65A" strokeWidth="1" opacity="0.2" />
    <path d="M88 30 Q100 22 112 30 Q100 38 88 30 Z" fill="#D6A65A" opacity="0.2" />
    <circle cx="265" cy="25" r="12" fill="#D6A65A" opacity="0.5" stroke="#D6A65A" strokeWidth="1" />
    <path d="M262 28 L265 32 L270 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M245 145 L270 135 L270 155 Z" fill="#D6A65A" opacity="0.25" />
    <line x1="220" y1="145" x2="295" y2="145" stroke="#D6A65A" strokeWidth="1" opacity="0.2" />
  </svg>
)

export default function AviationPage() {
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
        title="Aviation Insurance"
        description="Shaheen Insurance aviation coverage — aircraft hull, airline liability, passengers, cargo, and airport liability insurance in Pakistan."
        keywords="aviation insurance Pakistan, aircraft insurance, airline liability, hull insurance, airport insurance"
        path="/products/aviation"
        schema={{ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Aviation Insurance', provider: { '@type': 'InsuranceAgency', name: 'Shaheen Insurance Company Limited' }, areaServed: 'PK' }}
      />
      <InnerPageHero
        category="Insurance Products"
        title="Aviation Insurance"
        subtitle="Comprehensive coverage for aircraft, airlines, cargo and passengers — hull and liability protection for aviation operations"
        breadcrumbs={[{ label: 'Products', path: '/products' }, { label: 'Aviation Insurance' }]}
        stats={[{ value: '6', label: 'Cover Types' }, { value: 'A++', label: 'PACRA Rating' }, { value: '28+', label: 'Years' }]}
        svgIllustration={<AviationSVG />}
      />

      <section className="py-20 md:py-28 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">About Aviation Insurance</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-6">
                Aircraft &<br /><span className="text-gold">Airline Cover</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">Aviation insurance covers aircraft and airlines, providing protection against loss or damage to aircraft, cargo, and passengers during flight operations and ground activities. Shaheen Insurance offers hull, liability, passenger, and cargo coverage for all aviation operators in Pakistan.</p>
              <div className="bg-gold/8 border border-gold/20 rounded-xl p-5">
                <p className="text-navy font-semibold text-sm leading-relaxed">"Aviation Insurance provides protection against loss of and/or damage to the Aircraft and/or cargo and/or passengers during flight operations and ground activities."</p>
              </div>
            </ScrollReveal>
            <ScrollReveal from="right">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-navy/15">
                <img src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=900&q=80&auto=format&fit=crop"
                  alt="Aviation Insurance" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center shrink-0">
                      <Plane size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-black text-navy text-lg leading-none">Hull & Liability</p>
                      <p className="text-gray-500 text-xs mt-0.5">In-flight · Ground · Cargo · Passengers</p>
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
          <defs><pattern id="avi-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,4 52,16 52,32 28,44 4,32 4,16" fill="none" stroke="#D6A65A" strokeWidth="1" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#avi-hex)" />
        </svg>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gold/6 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Coverage</p>
              <h2 className="font-display font-black text-white text-4xl md:text-5xl uppercase leading-tight tracking-tight">Aviation Cover Types</h2>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
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
            <div className="mb-8 text-center">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Clients</p>
              <h3 className="font-display font-black text-white text-3xl uppercase">Who We Cover</h3>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {CLIENTS.map((client) => (
              <div key={client} className="p-4 bg-white/8 border border-white/10 rounded-xl text-center hover:border-gold/30 hover:bg-white/12 transition-all">
                <p className="text-white text-xs font-semibold leading-tight">{client}</p>
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
                  Aviation Claims<br />Procedure
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
          <defs><pattern id="avi-cg" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#D6A65A" strokeWidth="0.8" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#avi-cg)" />
        </svg>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <ScrollReveal>
          <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
            <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">Get Protected</p>
            <h2 className="font-display font-black text-white text-4xl md:text-5xl uppercase leading-tight mb-4">
              Protect Your <span className="text-gold">Aircraft</span>
            </h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto text-sm leading-relaxed">Comprehensive aviation insurance for airlines, corporate operators, and private owners. Hull, liability, cargo, and passenger coverage — all from a PACRA A++ rated insurer.</p>
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
