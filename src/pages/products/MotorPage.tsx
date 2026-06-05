import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, Phone, FileText, Car, Shield, AlertCircle } from 'lucide-react'
import InnerPageHero from '../../components/layout/InnerPageHero'
import PageSEO from '../../components/shared/PageSEO'
import ScrollReveal from '../../components/shared/ScrollReveal'
import { StaggerReveal } from '../../components/shared/ScrollReveal'
import { gsap } from '../../lib/gsap'

const COMPREHENSIVE = [
  'Accidental external damage to the vehicle',
  'Fire and explosion damage',
  'Theft of the vehicle',
  'Malicious acts and vandalism',
  'Riot and strike damage',
  'Floods, storms and atmospheric disturbances',
  'Transit coverage (road, rail, inland waterway, elevator)',
  'Third-party liability (bodily injury and property damage)',
]

const THIRD_PARTY = [
  'Legal liability to third parties for bodily injury',
  'Legal liability to third parties for property damage',
  'Coverage as per Motor Vehicles Ordinance requirements',
]

const STEPS = [
  { num: '01', title: 'Immediate Notification', desc: 'File accident notice immediately with Shaheen Insurance via phone, letter, fax, or email.' },
  { num: '02', title: 'Vehicle Assessment', desc: 'For major damage, report before the vehicle is removed from the accident spot.' },
  { num: '03', title: 'Authorized Workshop', desc: 'Move vehicle to an authorized workshop for repair estimation.' },
  { num: '04', title: 'Submit Documents', desc: 'Provide completed claim form, repair estimate, driver\'s license and vehicle registration.' },
  { num: '05', title: 'Inspection & Settlement', desc: 'Insurer conducts detailed inspection. Bills settled directly or reimbursed to insured.' },
  { num: '06', title: 'Theft Claims', desc: 'For theft — report to police immediately and submit final police report to Shaheen Insurance.' },
]

const CarSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="240" cy="90" r="70" stroke="#D6A65A" strokeWidth="0.5" opacity="0.3" />
    <circle cx="240" cy="90" r="50" stroke="#D6A65A" strokeWidth="0.5" opacity="0.2" />
    {/* Car body */}
    <rect x="40" y="90" width="220" height="55" rx="8" fill="#D6A65A" opacity="0.15" stroke="#D6A65A" strokeWidth="1.5" />
    <path d="M80 90 L110 60 L200 60 L230 90" fill="#D6A65A" opacity="0.1" stroke="#D6A65A" strokeWidth="1.5" />
    {/* Windows */}
    <rect x="115" y="65" width="35" height="22" rx="3" fill="white" opacity="0.15" />
    <rect x="158" y="65" width="35" height="22" rx="3" fill="white" opacity="0.15" />
    {/* Wheels */}
    <circle cx="100" cy="148" r="22" fill="none" stroke="#D6A65A" strokeWidth="2" />
    <circle cx="100" cy="148" r="12" fill="#D6A65A" opacity="0.3" />
    <circle cx="210" cy="148" r="22" fill="none" stroke="#D6A65A" strokeWidth="2" />
    <circle cx="210" cy="148" r="12" fill="#D6A65A" opacity="0.3" />
    {/* Shield */}
    <path d="M265 20 L280 28 L280 44 C280 52 275 58 265 62 C255 58 250 52 250 44 L250 28 Z" fill="#D6A65A" opacity="0.6" />
    <path d="M262 42 L267 47 L275 36" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function MotorPage() {
  const stepsRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!stepsRef.current || !lineRef.current) return
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
        title="Motor Insurance"
        description="Shaheen Insurance motor insurance — comprehensive and third-party vehicle coverage in Pakistan. Protection against accidental damage, theft, fire, and third-party liability."
        keywords="motor insurance Pakistan, car insurance, vehicle insurance, comprehensive motor cover, third party motor insurance"
        path="/products/motor"
        schema={{ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Motor Insurance', provider: { '@type': 'InsuranceAgency', name: 'Shaheen Insurance Company Limited' }, areaServed: 'PK' }}
      />
      <InnerPageHero
        category="Insurance Products"
        title="Motor Insurance"
        subtitle="Comprehensive protection for your vehicle — covering accidental damage, theft, fire, flood, and third-party liability nationwide"
        breadcrumbs={[{ label: 'Products', path: '/products' }, { label: 'Motor Insurance' }]}
        stats={[{ value: 'Rs. 5M+', label: 'Max Coverage' }, { value: '28+', label: 'Years' }, { value: '5 Days', label: 'Settlement' }]}
        svgIllustration={<CarSVG />}
      />

      {/* Overview */}
      <section className="py-20 md:py-28 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">About Motor Insurance</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-6">
                Drive with<br /><span className="text-gold">Full Confidence</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">Shaheen Insurance offers comprehensive motor vehicle insurance protecting your car against a wide range of risks. Whether it's an accident, fire, theft, or natural calamity — your vehicle is protected.</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Car, label: 'All Vehicle Types', desc: 'Cars, bikes, commercial vehicles' },
                  { icon: Shield, label: 'Comprehensive Cover', desc: 'Damage, theft, third-party' },
                  { icon: AlertCircle, label: 'Third Party Only', desc: 'Statutory minimum coverage' },
                  { icon: CheckCircle2, label: 'Quick Settlement', desc: '5 working days SLA' },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-gold/30 transition-all">
                    <Icon size={18} className="text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy text-sm">{label}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal from="right">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-navy/15">
                <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900&q=80&auto=format&fit=crop"
                  alt="Motor Insurance" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center shrink-0">
                      <Shield size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-black text-navy text-lg leading-none">A++</p>
                      <p className="text-gray-500 text-xs mt-0.5">PACRA Rating — Stable Outlook</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Coverage section */}
      <section className="py-20 md:py-28 bg-navy relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="motor-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,4 52,16 52,32 28,44 4,32 4,16" fill="none" stroke="#D6A65A" strokeWidth="1" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#motor-hex)" />
        </svg>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gold/6 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Coverage</p>
              <h2 className="font-display font-black text-white text-4xl md:text-5xl uppercase leading-tight tracking-tight">What's Covered</h2>
            </div>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-white/6 border border-white/10 rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center">
                    <Car size={18} className="text-gold" />
                  </div>
                  <h3 className="font-display font-bold text-white text-xl uppercase">Comprehensive Cover</h3>
                </div>
                <div className="space-y-3">
                  {COMPREHENSIVE.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 size={15} className="text-gold shrink-0 mt-0.5" />
                      <span className="text-white/70 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal from="right">
              <div className="bg-gold/10 border border-gold/25 rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center">
                    <Shield size={18} className="text-gold" />
                  </div>
                  <h3 className="font-display font-bold text-white text-xl uppercase">Third-Party Liability</h3>
                </div>
                <div className="space-y-3 mb-6">
                  {THIRD_PARTY.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 size={15} className="text-gold shrink-0 mt-0.5" />
                      <span className="text-white/70 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-white/6 rounded-xl p-4 mt-4">
                  <p className="text-white/50 text-xs italic">As required by Motor Vehicles Ordinance, 1965</p>
                </div>
              </div>
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mt-5">
                {[{ val: '28+', label: 'Years' }, { val: 'A++', label: 'PACRA' }, { val: '5 Days', label: 'SLA' }].map(({ val, label }) => (
                  <div key={label} className="bg-white/6 border border-white/10 rounded-xl p-4 text-center">
                    <div className="font-display font-black text-gold text-xl leading-none mb-1">{val}</div>
                    <div className="text-white/45 text-[10px] uppercase tracking-wider">{label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
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
                  How to File<br />a Motor Claim
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

      {/* Documents required */}
      <section className="py-20 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Documents</p>
              <h2 className="font-display font-black text-navy text-4xl uppercase leading-tight tracking-tight">Required Documents</h2>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: '01', doc: 'Completed Claim Form', note: 'From any Shaheen branch' },
              { num: '02', doc: 'Vehicle Registration', note: 'RC Book / Log Book copy' },
              { num: '03', doc: "Driver's License", note: 'Valid and current' },
              { num: '04', doc: 'Police Report / FIR', note: 'For accident / theft cases' },
              { num: '05', doc: 'Repair Estimates', note: 'From authorized workshop' },
              { num: '06', doc: 'Policy Certificate', note: 'Original or copy' },
              { num: '07', doc: 'Photographs', note: 'Damage photos if available' },
              { num: '08', doc: 'Surveyor Report', note: 'Issued after inspection' },
            ].map(({ num, doc, note }) => (
              <div key={num} className="flex gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-gold/30 transition-all">
                <span className="font-display font-black text-gold/40 text-xl leading-none shrink-0 w-8">{num}</span>
                <div>
                  <p className="font-semibold text-navy text-sm">{doc}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{note}</p>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="motor-cg" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#D6A65A" strokeWidth="0.8" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#motor-cg)" />
        </svg>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.025] pointer-events-none" width="350" height="350" viewBox="0 0 24 24" fill="#D6A65A">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
        </svg>
        <ScrollReveal>
          <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
            <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">Get Protected</p>
            <h2 className="font-display font-black text-white text-4xl md:text-5xl uppercase leading-tight mb-4">
              Ready to Get <span className="text-gold">Covered?</span>
            </h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto text-sm leading-relaxed">Get a motor insurance quote today or file a claim. Our team is ready to help.</p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-8 py-4 rounded-xl text-sm hover:bg-gold/90 transition-colors">
                <FileText size={15} /> Get a Quote
              </Link>
              <Link to="/claims/intimation" className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-white font-semibold px-8 py-4 rounded-xl text-sm hover:bg-white/14 transition-colors">
                File a Claim <ArrowRight size={15} />
              </Link>
              <a href="tel:111765111" className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-white font-semibold px-8 py-4 rounded-xl text-sm hover:bg-white/14 transition-colors">
                <Phone size={15} /> 111-765-111
              </a>
            </div>
            <div className="mt-10 flex items-center justify-center gap-6 opacity-35 flex-wrap">
              {['SECP Regulated', 'PACRA A++', 'PAF Sponsored', 'PSX: SHNI'].map((b, i, arr) => (
                <span key={b} className="text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase">
                  {b}{i < arr.length - 1 && <span className="inline-block mx-3 w-1 h-1 bg-gold/60 rounded-full align-middle" />}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
