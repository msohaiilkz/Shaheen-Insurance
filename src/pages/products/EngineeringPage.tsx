import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, Phone, FileText, Settings, Wrench, HardHat, Zap, TrendingDown } from 'lucide-react'
import InnerPageHero from '../../components/layout/InnerPageHero'
import PageSEO from '../../components/shared/PageSEO'
import ScrollReveal from '../../components/shared/ScrollReveal'
import { StaggerReveal } from '../../components/shared/ScrollReveal'
import { gsap } from '../../lib/gsap'
import { useJourney } from '../../context/JourneyContext'
import { takafulize } from '../../lib/wording'

const PRODUCTS = [
  {
    icon: HardHat,
    title: "Contractor's All Risks (CAR)",
    desc: "Wide protection for contractors working on construction projects against accidental loss or damage to the works during the construction period.",
    features: ['Annual policies for multiple simultaneous contracts', 'Single-contract policies for specific projects', 'Coverage during entire construction period', 'Protection for temporary works and structures'],
  },
  {
    icon: Settings,
    title: "Contractor's Plant & Equipment (CPM)",
    desc: "Separate coverage protecting construction equipment against damages or destruction within the construction site due to covered perils.",
    features: ['Coverage for all construction machinery', 'Protection against fire, theft, and accident', 'On-site and off-site coverage options', 'Breakdown and accidental damage'],
  },
  {
    icon: Wrench,
    title: 'Erection All Risks (EAR)',
    desc: "Protects against risks during the erection of machinery, plant and all kinds of steel structures. Testing and trial runs are included.",
    features: ['Protection during erection phase', 'Testing and trial run coverage', 'Third-party liability included', 'Steel structures and plant equipment'],
  },
  {
    icon: Zap,
    title: 'Machinery Insurance',
    desc: "Protection for mechanical equipment whilst in operation, at rest or under maintenance against sudden and unforeseen loss or damage.",
    features: ['Coverage during operation and rest', 'Breakdown protection', 'Maintenance period coverage', 'Sudden and unforeseen damage'],
  },
  {
    icon: TrendingDown,
    title: 'Machinery Loss of Profit (MLOP)',
    desc: "Coverage against loss of profit due to business interruption caused by an accident covered under the Machinery Policy.",
    features: ['Business interruption coverage', 'Loss of profit protection', 'Linked to machinery insurance policy', 'Financial protection during downtime'],
  },
]

const STEPS = [
  { num: '01', title: 'Immediate Notice', desc: 'Notify Shaheen Insurance within 24 hours of any accident, loss, or damage to works or machinery.' },
  { num: '02', title: 'Preserve Evidence', desc: 'Preserve the scene and damaged equipment. Do not repair or remove until surveyor has inspected.' },
  { num: '03', title: 'Survey & Assessment', desc: 'An independent surveyor will inspect and assess the extent of loss or damage at site.' },
  { num: '04', title: 'Submit Documents', desc: 'Provide contract details, bills, invoices, repair estimates, and site accident report.' },
  { num: '05', title: 'Claim Settlement', desc: 'Claims are settled on repair cost or replacement value basis, less excess as per policy terms.' },
]

const EngineeringSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="100" cy="90" r="45" stroke="#D6A65A" strokeWidth="1.5" opacity="0.3" />
    <circle cx="100" cy="90" r="30" stroke="#D6A65A" strokeWidth="1" opacity="0.2" />
    <circle cx="100" cy="90" r="10" fill="#D6A65A" opacity="0.4" />
    {[0,45,90,135,180,225,270,315].map((angle, i) => (
      <rect key={i}
        x={100 + 38 * Math.cos(angle * Math.PI / 180) - 5}
        y={90 + 38 * Math.sin(angle * Math.PI / 180) - 5}
        width="10" height="10" rx="2"
        fill="#D6A65A" opacity="0.35"
        transform={`rotate(${angle}, ${100 + 38 * Math.cos(angle * Math.PI / 180)}, ${90 + 38 * Math.sin(angle * Math.PI / 180)})`}
      />
    ))}
    <rect x="195" y="50" width="70" height="80" rx="4" fill="#D6A65A" opacity="0.08" stroke="#D6A65A" strokeWidth="1.2" />
    <rect x="205" y="65" width="50" height="8" rx="2" fill="#D6A65A" opacity="0.3" />
    <rect x="205" y="80" width="35" height="8" rx="2" fill="#D6A65A" opacity="0.2" />
    <rect x="205" y="95" width="45" height="8" rx="2" fill="#D6A65A" opacity="0.25" />
    <rect x="205" y="110" width="28" height="8" rx="2" fill="#D6A65A" opacity="0.2" />
    <line x1="50" y1="150" x2="270" y2="150" stroke="#D6A65A" strokeWidth="1" opacity="0.2" />
    <rect x="80" y="130" width="20" height="20" rx="2" fill="#D6A65A" opacity="0.3" />
    <rect x="110" y="120" width="20" height="30" rx="2" fill="#D6A65A" opacity="0.2" />
    <rect x="140" y="135" width="20" height="15" rx="2" fill="#D6A65A" opacity="0.25" />
    <circle cx="265" cy="25" r="12" fill="#D6A65A" opacity="0.5" stroke="#D6A65A" strokeWidth="1" />
    <path d="M262 28 L265 32 L270 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function EngineeringPage() {
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
        title="Engineering Insurance"
        description="Shaheen Insurance engineering insurance — CAR, EAR, CPM, Machinery Breakdown, and MLOP policies for construction projects and industrial operations in Pakistan."
        keywords="engineering insurance Pakistan, CAR insurance, contractors all risk, machinery breakdown insurance, EAR Pakistan"
        path="/products/engineering"
        schema={{ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Engineering Insurance', provider: { '@type': 'InsuranceAgency', name: 'Shaheen Insurance Company Limited' }, areaServed: 'PK' }}
      />
      <InnerPageHero
        category={takafulize('Insurance Products', isTakaful)}
        title={takafulize('Engineering Insurance', isTakaful)}
        subtitle="Comprehensive coverage for construction projects, machinery, and industrial operations — CAR, EAR, CPM, Machinery & MLOP"
        breadcrumbs={[{ label: 'Products', path: '/products' }, { label: takafulize('Engineering Insurance', isTakaful) }]}
        stats={[{ value: '5', label: 'Products' }, { value: '28+', label: 'Years' }, { value: 'All Phases', label: 'Coverage' }]}
        svgIllustration={<EngineeringSVG />}
      />

      <section className="py-20 md:py-28 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">{takafulize('About Engineering Insurance', isTakaful)}</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-6">
                Construction &<br /><span className="text-gold">Industrial Cover</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{takafulize('Shaheen Insurance provides five specialized engineering insurance products covering every phase of construction and industrial operations — from groundbreaking to commissioning and ongoing machinery operations.', isTakaful)}</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: 'CAR', lbl: "Contractor's All Risks" },
                  { val: 'EAR', lbl: 'Erection All Risks' },
                  { val: 'CPM', lbl: "Contractor's Plant" },
                  { val: 'MLOP', lbl: 'Machinery Loss of Profit' },
                ].map(({ val, lbl }) => (
                  <div key={val} className="bg-white rounded-xl p-4 border border-gray-100 flex items-center gap-3">
                    <span className="font-display font-black text-gold text-lg w-12 shrink-0">{val}</span>
                    <p className="text-gray-500 text-xs leading-tight">{lbl}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal from="right">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-navy/15">
                <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80&auto=format&fit=crop"
                  alt="Engineering Insurance" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center shrink-0">
                      <HardHat size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-black text-navy text-lg leading-none">5 Engineering Products</p>
                      <p className="text-gray-500 text-xs mt-0.5">Construction · Machinery · Operations</p>
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
          <defs><pattern id="eng-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,4 52,16 52,32 28,44 4,32 4,16" fill="none" stroke="#D6A65A" strokeWidth="1" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#eng-hex)" />
        </svg>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gold/6 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold-dark text-xs font-bold tracking-[0.25em] uppercase mb-3">Products</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight">Engineering Products</h2>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCTS.map(({ icon: Icon, title, desc, features }) => (
              <div key={title} className="p-6 bg-white border border-navy/10 shadow-card rounded-2xl hover:bg-white/10 hover:border-gold/30 transition-all duration-300 group">
                <div className="w-11 h-11 bg-gold/15 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={20} className="text-gold" />
                </div>
                <h4 className="font-display font-bold text-navy text-base mb-2 group-hover:text-gold transition-colors">{takafulize(title, isTakaful)}</h4>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{takafulize(desc, isTakaful)}</p>
                <ul className="space-y-1.5">
                  {features.map((f) => (
                    <li key={f} className="flex gap-2 text-xs text-gray-500">
                      <CheckCircle2 size={12} className="text-gold/70 shrink-0 mt-0.5" />{takafulize(f, isTakaful)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </StaggerReveal>

          <ScrollReveal>
            <div className="mt-10 bg-white border border-gold/20 shadow-card rounded-2xl p-6 max-w-3xl mx-auto">
              <p className="text-gold-dark font-bold text-sm mb-3">Key Benefits Across All Products:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {['Comprehensive construction protection', 'Third-party property and liability', 'Fire, burglary & natural calamities', 'Repair or replacement options', 'Business interruption protection', 'Coverage for testing & trial runs'].map((b) => (
                  <div key={b} className="flex gap-2 text-gray-600 text-sm">
                    <CheckCircle2 size={13} className="text-gold shrink-0 mt-0.5" />{b}
                  </div>
                ))}
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
                  Engineering Claims<br />Procedure
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
        </div>
      </section>

      <section className="py-20 bg-light-blue relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="eng-cg" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#D6A65A" strokeWidth="0.8" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#eng-cg)" />
        </svg>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <ScrollReveal>
          <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
            <p className="text-gold-dark text-xs font-bold tracking-[0.25em] uppercase mb-4">Get Protected</p>
            <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight mb-4">
              Protect Your <span className="text-gold-dark">Project</span>
            </h2>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto text-sm leading-relaxed">{takafulize('Comprehensive engineering insurance from groundbreaking to commissioning. CAR, EAR, CPM, Machinery and MLOP — all under one roof.', isTakaful)}</p>
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
