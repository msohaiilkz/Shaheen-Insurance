import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, Phone, FileText, Globe, Shield, Plane, MapPin, ExternalLink, Clock } from 'lucide-react'
import InnerPageHero from '../../components/layout/InnerPageHero'
import PageSEO from '../../components/shared/PageSEO'
import ScrollReveal from '../../components/shared/ScrollReveal'
import { StaggerReveal } from '../../components/shared/ScrollReveal'
import { gsap } from '../../lib/gsap'
import { useJourney } from '../../context/JourneyContext'
import { takafulize } from '../../lib/wording'

const COVERAGE = [
  { icon: Shield, label: 'Emergency Medical', desc: 'Medical treatment abroad up to USD 50,000 per policy' },
  { icon: Globe, label: 'Medical Evacuation', desc: 'Emergency evacuation and repatriation to Pakistan' },
  { icon: Plane, label: 'Trip Cancellation', desc: 'Reimbursement for cancelled or curtailed trips' },
  { icon: MapPin, label: 'Baggage Loss', desc: 'Loss, theft or damage to baggage and personal effects' },
  { icon: Clock, label: 'Flight Delay', desc: 'Compensation for flight delays and missed connections' },
  { icon: Shield, label: 'Personal Liability', desc: 'Legal liability to third parties during travel' },
  { icon: Globe, label: 'Emergency Dental', desc: 'Emergency dental treatment expenses abroad' },
  { icon: Shield, label: 'Personal Accident', desc: 'Accidental death and permanent disability cover' },
]

const PLANS = [
  { title: 'Standard Travel Plan', duration: 'Up to 92 Days', limit: 'USD 50,000', age: 'Up to 75 Years', desc: 'Comprehensive coverage for leisure, business or family travel worldwide.' },
  { title: 'Student Travel Plan', duration: '184 – 365 Days', limit: 'USD 50,000', age: '16 – 50 Years', desc: 'Extended duration plan for students studying abroad — Schengen visa compliant.' },
  { title: 'Schengen Visa Plan', duration: 'Up to 92 Days', limit: 'EUR 30,000', age: 'Up to 75 Years', desc: 'Meets the mandatory Schengen visa insurance requirement for European travel.' },
]

const STEPS = [
  { num: '01', title: 'Contact Assistance', desc: 'Call MidEast Assistance or Eurocross immediately — 24/7 worldwide helpline.' },
  { num: '02', title: 'Get Pre-Authorization', desc: 'Obtain pre-authorization before major medical treatment or hospitalization.' },
  { num: '03', title: 'Collect Documents', desc: 'Gather medical bills, doctor reports, police report (for theft), and boarding passes.' },
  { num: '04', title: 'Submit Claim Form', desc: 'Complete the claim form and attach all supporting documents within 30 days of return.' },
  { num: '05', title: 'Claim Settlement', desc: 'Claims are assessed and settled in PKR at prevailing exchange rate.' },
]

const TravelSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="160" cy="90" r="70" stroke="#D6A65A" strokeWidth="1" opacity="0.2" />
    <circle cx="160" cy="90" r="50" stroke="#D6A65A" strokeWidth="0.8" opacity="0.15" />
    <ellipse cx="160" cy="90" rx="70" ry="25" stroke="#D6A65A" strokeWidth="0.8" opacity="0.2" />
    <ellipse cx="160" cy="90" rx="70" ry="50" stroke="#D6A65A" strokeWidth="0.5" opacity="0.12" />
    <line x1="160" y1="20" x2="160" y2="160" stroke="#D6A65A" strokeWidth="0.8" opacity="0.2" />
    <line x1="90" y1="90" x2="230" y2="90" stroke="#D6A65A" strokeWidth="0.8" opacity="0.2" />
    <path d="M60 80 L80 85 L72 90 L60 88 Z" fill="#D6A65A" opacity="0.6" />
    <path d="M72 90 L60 88 L65 95 L72 90 Z" fill="#D6A65A" opacity="0.4" />
    <path d="M80 85 L88 82" stroke="#D6A65A" strokeWidth="1" opacity="0.5" />
    <path d="M80 85 L86 89" stroke="#D6A65A" strokeWidth="1" opacity="0.4" />
    <circle cx="265" cy="35" r="12" fill="#D6A65A" opacity="0.4" stroke="#D6A65A" strokeWidth="1" />
    <path d="M262 38 L265 42 L270 33" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="120" cy="55" r="3" fill="#D6A65A" opacity="0.5" />
    <circle cx="195" cy="130" r="2.5" fill="#D6A65A" opacity="0.4" />
    <circle cx="215" cy="60" r="2" fill="#D6A65A" opacity="0.3" />
    <path d="M120 55 Q158 48 160 90" stroke="#D6A65A" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.3" />
  </svg>
)

export default function TravelPage() {
  const { isTakaful } = useJourney()
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
        title="Travel Insurance"
        description="Shaheen Insurance Secure Travel — worldwide travel insurance with up to USD 50,000 medical coverage for Pakistani travelers."
        keywords="travel insurance Pakistan, overseas medical insurance, Schengen visa insurance, travel cover Pakistan"
        path="/products/travel"
        schema={{ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Travel Insurance', provider: { '@type': 'InsuranceAgency', name: 'Shaheen Insurance Company Limited' }, areaServed: { '@type': 'GeoShape', description: 'Worldwide' } }}
      />
      <InnerPageHero
        category={takafulize('Insurance Products', isTakaful)}
        title={takafulize('Travel Insurance', isTakaful)}
        subtitle="Worldwide coverage with up to USD 50,000 medical limit — your protection partner from takeoff to landing"
        breadcrumbs={[{ label: 'Products', path: '/products' }, { label: takafulize('Travel Insurance', isTakaful) }]}
        stats={[{ value: 'USD 50K', label: 'Medical Limit' }, { value: '92 Days', label: 'Max Duration' }, { value: 'Worldwide', label: 'Coverage' }]}
        svgIllustration={<TravelSVG />}
      />

      <section className="py-20 md:py-28 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Secure Travel</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-6">
                Travel<br /><span className="text-gold">With Confidence</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{takafulize("Shaheen Insurance's Secure Travel product provides comprehensive international travel insurance with worldwide medical coverage, emergency assistance, and 24/7 support — backed by global reinsurance partners rated A+ by Standard & Poor's.", isTakaful)}</p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { val: 'USD 50K', lbl: 'Medical Cover' },
                  { val: '24/7', lbl: 'Emergency Help' },
                  { val: 'S&P A+', lbl: 'Reinsurer Rating' },
                ].map(({ val, lbl }) => (
                  <div key={lbl} className="bg-white rounded-xl p-4 border border-gray-100 text-center">
                    <p className="font-display font-black text-gold text-xl leading-none mb-1">{val}</p>
                    <p className="text-gray-500 text-[11px] leading-tight">{lbl}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal from="right">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-navy/15">
                <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80&auto=format&fit=crop"
                  alt="Travel Insurance" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center shrink-0">
                      <Globe size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-black text-navy text-lg leading-none">Worldwide Coverage</p>
                      <p className="text-gray-500 text-xs mt-0.5">Medical · Baggage · Cancellation</p>
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
          <defs><pattern id="travel-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,4 52,16 52,32 28,44 4,32 4,16" fill="none" stroke="#D6A65A" strokeWidth="1" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#travel-hex)" />
        </svg>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gold/6 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold-dark text-xs font-bold tracking-[0.25em] uppercase mb-3">What's Covered</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight">Coverage Highlights</h2>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {COVERAGE.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex gap-4 p-5 bg-white border border-navy/10 shadow-card rounded-2xl hover:bg-white/10 hover:border-gold/30 transition-all duration-300 group">
                <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy text-sm mb-1 group-hover:text-gold transition-colors">{label}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </StaggerReveal>

          <ScrollReveal>
            <div className="mt-14 mb-8 text-center">
              <p className="text-gold-dark text-xs font-bold tracking-[0.25em] uppercase mb-3">Plan Options</p>
              <h3 className="font-display font-black text-navy text-3xl md:text-4xl uppercase">Choose Your Plan</h3>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PLANS.map(({ title, duration, limit, age, desc }) => (
              <div key={title} className="p-6 bg-white border border-navy/15 shadow-card rounded-2xl hover:border-gold/40 hover:bg-white/12 transition-all duration-300 group">
                <h4 className="font-display font-bold text-navy text-base mb-3 group-hover:text-gold transition-colors">{title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{desc}</p>
                <div className="space-y-2 border-t border-navy/10 pt-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Medical Limit</span>
                    <span className="text-gold-dark font-bold">{limit}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Duration</span>
                    <span className="text-navy font-semibold">{duration}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Age Limit</span>
                    <span className="text-navy font-semibold">{age}</span>
                  </div>
                </div>
              </div>
            ))}
          </StaggerReveal>

          <ScrollReveal>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white border border-gold/20 shadow-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Globe size={18} className="text-gold" />
                  <p className="text-gold-dark font-bold text-sm">Global Assistance Partner</p>
                </div>
                <p className="text-navy font-semibold text-sm">MidEast Assistance International S.A.L</p>
                <p className="text-gray-500 text-xs mt-1">Worldwide emergency medical assistance and coordination</p>
                <div className="mt-3 flex gap-4">
                  <div>
                    <p className="text-gray-500 text-[10px] uppercase tracking-wider">Middle East</p>
                    <a href="tel:+9614548348" className="text-gold-dark font-bold text-sm hover:text-gold/80 transition-colors">+961 4 548348</a>
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px] uppercase tracking-wider">Worldwide 24/7</p>
                    <a href="tel:+420296339623" className="text-gold-dark font-bold text-sm hover:text-gold/80 transition-colors">+420 296 339 623</a>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gold/20 shadow-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Shield size={18} className="text-gold" />
                  <p className="text-gold-dark font-bold text-sm">Reinsurance Partner</p>
                </div>
                <p className="text-navy font-semibold text-sm">Eurocross Assistance</p>
                <p className="text-gray-500 text-xs mt-1">Dutch company rated A+ by Standard & Poor's — one of Europe's leading assistance companies</p>
                <div className="mt-3">
                  <span className="inline-flex items-center gap-1.5 bg-gold/15 text-gold text-xs font-bold px-3 py-1.5 rounded-full">
                    <CheckCircle2 size={11} /> S&P A+ Rated
                  </span>
                </div>
              </div>
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
                  Travel Claims<br />Procedure
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
                  <p className="text-gray-500 text-sm leading-relaxed">{takafulize(desc, isTakaful)}</p>
                </div>
              ))}
            </div>
          </div>
          <ScrollReveal>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <a href="https://x360.tidal-waves.com:1197/TidalERP/TravelTakafulLogin.aspx" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-navy text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-navy/90 transition-colors">
                <ExternalLink size={15} /> Buy Policy Online
              </a>
              <a href="http://shaheeninsurance.com/pdf/SecureTravelApplicationForm.pdf" target="_blank" rel="noopener noreferrer" download
                className="inline-flex items-center gap-2 bg-[#f8f7f5] border border-gray-200 text-navy font-bold px-6 py-3 rounded-xl text-sm hover:border-gold/40 transition-colors">
                Download Application Form
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-light-blue relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="travel-cg" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#D6A65A" strokeWidth="0.8" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#travel-cg)" />
        </svg>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <ScrollReveal>
          <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
            <p className="text-gold-dark text-xs font-bold tracking-[0.25em] uppercase mb-4">Get Protected</p>
            <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight mb-4">
              Ready to <span className="text-gold-dark">Travel?</span>
            </h2>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto text-sm leading-relaxed">{takafulize('Get comprehensive travel insurance before your next trip. Schengen compliant, worldwide coverage, 24/7 emergency assistance.', isTakaful)}</p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-navy text-white font-bold px-8 py-4 rounded-xl text-sm hover:bg-navy/90 transition-colors">
                <FileText size={15} /> Get a Quote
              </Link>
              <a href="tel:111765111" className="inline-flex items-center gap-2 bg-white border border-navy/15 text-navy shadow-card font-semibold px-8 py-4 rounded-xl text-sm hover:bg-white/80 transition-colors">
                <Phone size={15} /> 111-765-111
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
