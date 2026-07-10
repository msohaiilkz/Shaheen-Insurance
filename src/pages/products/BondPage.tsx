import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, Phone, FileText, FileCheck, TrendingUp, Award } from 'lucide-react'
import InnerPageHero from '../../components/layout/InnerPageHero'
import PageSEO from '../../components/shared/PageSEO'
import ScrollReveal from '../../components/shared/ScrollReveal'
import { StaggerReveal } from '../../components/shared/ScrollReveal'
import { gsap } from '../../lib/gsap'
import { useJourney } from '../../context/JourneyContext'
import { takafulize } from '../../lib/wording'

const BONDS = [
  {
    icon: FileCheck,
    title: 'Bid Bond (Tender Bond)',
    desc: 'Issued on behalf of contractors in connection with the submission of tenders. Allows contractors to submit insurance guarantees instead of depositing earnest money with government or private entities.',
    features: ['Issued for government and private tenders', 'Replaces cash earnest money deposits', 'Protects the project owner during tender process', 'Standard format compliant with requirements'],
  },
  {
    icon: TrendingUp,
    title: 'Mobilization Advance Bond (MAB)',
    desc: 'Witnesses that the contractor shall use the advance for a specific purpose. Secures project owners when they provide advance financing to contractors, compensating employers if contractors fail to fulfill obligations.',
    features: ['Secures advance payments made by project owners', 'Bond auto-reduces as advance is adjusted', 'Protects employers against contractor default', 'Widely required by government projects'],
  },
  {
    icon: Award,
    title: 'Performance Bond',
    desc: "Issued on behalf of a contractor and in favor of the project owner to guarantee the contractor's compliance with obligations. Independent professionals verify non-performance before compensation.",
    features: ["Guarantees contractor's performance obligations", 'Independent verification before payout', 'Compensates project owner for default', 'Pays amounts specified in bond agreement'],
  },
]

const STEPS = [
  { num: '01', title: 'Bond Request', desc: 'Submit bond application with project details, contract value, and required bond amount.' },
  { num: '02', title: 'Financial Assessment', desc: 'Shaheen Insurance reviews contractor financials, track record, and project scope.' },
  { num: '03', title: 'Bond Issuance', desc: 'Bond is issued within 2–3 working days upon approval and premium payment.' },
  { num: '04', title: 'Project Execution', desc: 'Bond remains in force during the contract period, reducing as obligations are met.' },
  { num: '05', title: 'Bond Release', desc: 'Bond is released or renewed upon project completion or contract extension.' },
]

const BondSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="60" y="30" width="100" height="130" rx="6" fill="#D6A65A" opacity="0.08" stroke="#D6A65A" strokeWidth="1.5" />
    <rect x="75" y="50" width="70" height="8" rx="2" fill="#D6A65A" opacity="0.3" />
    <rect x="75" y="65" width="55" height="6" rx="2" fill="#D6A65A" opacity="0.2" />
    <rect x="75" y="78" width="60" height="6" rx="2" fill="#D6A65A" opacity="0.2" />
    <rect x="75" y="91" width="45" height="6" rx="2" fill="#D6A65A" opacity="0.15" />
    <rect x="75" y="104" width="65" height="6" rx="2" fill="#D6A65A" opacity="0.2" />
    <path d="M75 125 Q110 118 145 125" stroke="#D6A65A" strokeWidth="1" opacity="0.4" />
    <circle cx="87" cy="140" r="6" fill="#D6A65A" opacity="0.3" stroke="#D6A65A" strokeWidth="1" />
    <circle cx="133" cy="140" r="6" fill="#D6A65A" opacity="0.3" stroke="#D6A65A" strokeWidth="1" />
    <rect x="185" y="50" width="90" height="110" rx="6" fill="#D6A65A" opacity="0.06" stroke="#D6A65A" strokeWidth="1.2" />
    <rect x="198" y="65" width="64" height="7" rx="2" fill="#D6A65A" opacity="0.25" />
    <rect x="198" y="79" width="50" height="6" rx="2" fill="#D6A65A" opacity="0.18" />
    <rect x="198" y="92" width="58" height="6" rx="2" fill="#D6A65A" opacity="0.18" />
    <rect x="198" y="105" width="42" height="6" rx="2" fill="#D6A65A" opacity="0.15" />
    <circle cx="265" cy="25" r="12" fill="#D6A65A" opacity="0.5" stroke="#D6A65A" strokeWidth="1" />
    <path d="M262 28 L265 32 L270 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function BondPage() {
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
        title="Bond Insurance"
        description="Shaheen Insurance bond policies — bid bonds, mobilization advance bonds, and performance bonds for contractors and project owners in Pakistan."
        keywords="bond insurance Pakistan, bid bond, performance bond, mobilization advance bond, contractor insurance"
        path="/products/bond"
        schema={{ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Bond Insurance', provider: { '@type': 'InsuranceAgency', name: 'Shaheen Insurance Company Limited' }, areaServed: 'PK' }}
      />
      <InnerPageHero
        category={takafulize('Insurance Products', isTakaful)}
        title={takafulize('Bond Insurance', isTakaful)}
        subtitle="Bid bonds, mobilization advance bonds, and performance bonds — securing contractor-owner relationships across Pakistan"
        breadcrumbs={[{ label: 'Products', path: '/products' }, { label: takafulize('Bond Insurance', isTakaful) }]}
        stats={[{ value: '3', label: 'Bond Types' }, { value: '2–3 Days', label: 'Issuance' }, { value: 'Govt Approved', label: 'Recognized' }]}
        svgIllustration={<BondSVG />}
      />

      <section className="py-20 md:py-28 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Bond Products</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-6">
                Contractor<br /><span className="text-gold">Guarantees</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{takafulize('Shaheen Insurance provides three types of bond insurance products to protect both contractors and project owners in construction and infrastructure projects across Pakistan. Our bonds are recognized by government entities and replace costly cash deposits.', isTakaful)}</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { val: 'Bid', lbl: 'Tender Bond' },
                  { val: 'MAB', lbl: 'Advance Bond' },
                  { val: 'Perf', lbl: 'Performance' },
                ].map(({ val, lbl }) => (
                  <div key={val} className="bg-white rounded-xl p-4 border border-gray-100 text-center">
                    <p className="font-display font-black text-gold text-xl leading-none mb-1">{val}</p>
                    <p className="text-gray-500 text-[11px] leading-tight">{lbl}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal from="right">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-navy/15">
                <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80&auto=format&fit=crop"
                  alt="Bond Insurance" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center shrink-0">
                      <FileCheck size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-black text-navy text-lg leading-none">Government Recognized</p>
                      <p className="text-gray-500 text-xs mt-0.5">Replaces cash deposits for tenders</p>
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
          <defs><pattern id="bond-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,4 52,16 52,32 28,44 4,32 4,16" fill="none" stroke="#D6A65A" strokeWidth="1" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#bond-hex)" />
        </svg>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gold/6 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold-dark text-xs font-bold tracking-[0.25em] uppercase mb-3">Products</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight">Bond Types</h2>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BONDS.map(({ icon: Icon, title, desc, features }) => (
              <div key={title} className="p-6 bg-white border border-navy/10 shadow-card rounded-2xl hover:bg-white/10 hover:border-gold/30 transition-all duration-300 group">
                <div className="w-11 h-11 bg-gold/15 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={20} className="text-gold" />
                </div>
                <h4 className="font-display font-bold text-navy text-base mb-3 group-hover:text-gold transition-colors">{takafulize(title, isTakaful)}</h4>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{takafulize(desc, isTakaful)}</p>
                <ul className="space-y-2 border-t border-navy/10 pt-4">
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
            <div className="mt-10 bg-white border border-gold/20 shadow-card rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-gold-dark font-bold text-sm mb-3">{takafulize('Why Choose Bond Insurance?', isTakaful)}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {['Replaces costly cash deposits', 'Faster project mobilization', 'Protects project owners from default', 'Recognized by government entities', 'Competitive premium rates', 'Quick issuance process'].map((b) => (
                  <div key={b} className="flex gap-2 text-gray-600 text-sm">
                    <CheckCircle2 size={13} className="text-gold shrink-0 mt-0.5" />{takafulize(b, isTakaful)}
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
                <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Process</p>
                <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight">
                  Bond Issuance<br />Process
                </h2>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-navy text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-navy/90 transition-colors self-start">
                Request a Bond <ArrowRight size={15} />
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
          <defs><pattern id="bond-cg" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#D6A65A" strokeWidth="0.8" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#bond-cg)" />
        </svg>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <ScrollReveal>
          <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
            <p className="text-gold-dark text-xs font-bold tracking-[0.25em] uppercase mb-4">Get Protected</p>
            <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight mb-4">
              Need a <span className="text-gold-dark">Bond?</span>
            </h2>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto text-sm leading-relaxed">Get your bid bond, mobilization advance bond, or performance bond issued quickly. Government-recognized, competitive rates, issuance in 2–3 working days.</p>
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
