import { Link } from 'react-router-dom'
import { FileText, ClipboardList, AlertCircle, Car, Flame, Home, Cog, Monitor, Package, Heart, Phone, Mail, ArrowRight, Clock, CheckCircle2 } from 'lucide-react'
import InnerPageHero from '../../components/layout/InnerPageHero'
import PageSEO from '../../components/shared/PageSEO'
import ScrollReveal from '../../components/shared/ScrollReveal'
import { StaggerReveal } from '../../components/shared/ScrollReveal'

const CLAIM_STEPS = [
  { num: '01', title: 'Report & Intimate', desc: 'Notify Shaheen Insurance immediately after any loss. Submit claim intimation online, by phone (021-32630370-75), or by email.' },
  { num: '02', title: 'Submit Documents', desc: 'Provide policy copy, FIR/police report, repair estimates, and supporting evidence specific to your claim type.' },
  { num: '03', title: 'Surveyor Inspection', desc: 'Our qualified surveyor visits the site to assess the loss — vehicle inspection for motor, on-site survey for property claims.' },
  { num: '04', title: 'Assessment & Review', desc: 'Our claims team reviews the surveyor report and all documentation against your policy terms.' },
  { num: '05', title: 'Settlement & Payment', desc: 'Approved settlement is transferred to your account. All claims acknowledged within 5 business days of intimation.' },
]

const INNER_PAGES = [
  { icon: ClipboardList, title: 'General Procedure', desc: 'Step-by-step claim procedures for all insurance types — auto, fire, burglary, machinery, health, and more.', link: '/claims/procedure', cta: 'View Procedures' },
  { icon: FileText, title: 'Claim Forms', desc: 'Download motor, fire, health, burglary, and general claim forms in PDF format for offline submission.', link: '/claims/forms', cta: 'Download Forms' },
  { icon: AlertCircle, title: 'Claim Intimation', desc: 'Submit your claim intimation online — our claims team will acknowledge within 5 business days.', link: '/claims/intimation', cta: 'Intimate a Claim' },
]

const CLAIM_TYPES = [
  { icon: Car, label: 'Auto / Motor' },
  { icon: Flame, label: 'Fire' },
  { icon: Home, label: 'Burglary' },
  { icon: Cog, label: 'Machinery' },
  { icon: Monitor, label: 'Electronics' },
  { icon: Package, label: 'Miscellaneous' },
  { icon: Heart, label: 'Health' },
]

const INTIMATION_CHANNELS = [
  { icon: Phone, label: 'Phone', detail: '021-32630370-75', href: 'tel:02132630370' },
  { icon: Mail, label: 'Email', detail: 'info@shaheeninsurance.com', href: 'mailto:info@shaheeninsurance.com' },
  { icon: FileText, label: 'Letter / Fax', detail: 'Fax: 021-32626674', href: '#' },
]

const ClaimsSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="80" y="30" width="110" height="140" rx="6" fill="#D6A65A" opacity="0.07" stroke="#D6A65A" strokeWidth="1.5" />
    <rect x="95" y="50" width="80" height="8" rx="2" fill="#D6A65A" opacity="0.35" />
    <rect x="95" y="66" width="65" height="6" rx="2" fill="#D6A65A" opacity="0.2" />
    <rect x="95" y="79" width="72" height="6" rx="2" fill="#D6A65A" opacity="0.2" />
    <rect x="95" y="92" width="55" height="6" rx="2" fill="#D6A65A" opacity="0.15" />
    <rect x="95" y="108" width="78" height="6" rx="2" fill="#D6A65A" opacity="0.2" />
    <rect x="95" y="121" width="62" height="6" rx="2" fill="#D6A65A" opacity="0.15" />
    <path d="M95 143 Q135 136 175 143" stroke="#D6A65A" strokeWidth="1" opacity="0.4" />
    <circle cx="107" cy="155" r="6" fill="#D6A65A" opacity="0.3" stroke="#D6A65A" strokeWidth="1" />
    <circle cx="163" cy="155" r="6" fill="#D6A65A" opacity="0.3" stroke="#D6A65A" strokeWidth="1" />
    <circle cx="250" cy="75" r="30" stroke="#D6A65A" strokeWidth="1.2" opacity="0.2" fill="#D6A65A" fillOpacity="0.04" />
    <path d="M238 75 L248 85 L265 65" stroke="#D6A65A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    <circle cx="265" cy="25" r="12" fill="#D6A65A" opacity="0.5" stroke="#D6A65A" strokeWidth="1" />
    <path d="M262 28 L265 32 L270 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function ClaimsPage() {
  return (
    <>
      <PageSEO
        title="Claims Center"
        description="File an insurance claim with Shaheen Insurance — prompt, fair settlement within 5 business days. Motor, fire, health, burglary, and miscellaneous claims."
        keywords="insurance claim Pakistan, file claim Shaheen Insurance, motor claim, health claim, claim intimation"
        path="/claims"
        schema={{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to File an Insurance Claim with Shaheen Insurance', description: '5-step claim process from intimation to settlement' }}
      />
      <InnerPageHero
        category="Claims Center"
        title="Claims Center"
        subtitle="Prompt, fair, and transparent claims settlement — because a satisfied claimant is our most effective advertisement"
        breadcrumbs={[{ label: 'Claims' }]}
        stats={[{ value: '5 Days', label: 'Acknowledgment SLA' }, { value: '7', label: 'Claim Types' }, { value: '28+', label: 'Years' }]}
        svgIllustration={<ClaimsSVG />}
      />

      <section className="py-20 md:py-28 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Our Promise</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-6">
                Claims<br /><span className="text-gold">Commitment</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">At Shaheen Insurance, our claims process is designed to be transparent, efficient, and fair. We are committed to prompt response and equitable settlement for every policyholder — no unnecessary delays, no complications.</p>
              <div className="bg-navy rounded-xl p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
                <p className="font-display text-base font-bold text-gold italic mb-2 leading-tight">"A satisfied claimant is the most effective advertisement for an insurance company."</p>
                <div className="flex items-center gap-3 mt-4">
                  <Clock size={16} className="text-gold shrink-0" />
                  <p className="text-white/65 text-xs">All claims acknowledged within <strong className="text-gold">5 business days</strong> of intimation</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal from="right">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-navy/15">
                <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80&auto=format&fit=crop"
                  alt="Claims Settlement" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center shrink-0">
                      <CheckCircle2 size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-black text-navy text-lg leading-none">5-Day SLA Commitment</p>
                      <p className="text-gray-500 text-xs mt-0.5">Prompt · Fair · Transparent</p>
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
          <defs><pattern id="claims-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,4 52,16 52,32 28,44 4,32 4,16" fill="none" stroke="#D6A65A" strokeWidth="1" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#claims-hex)" />
        </svg>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gold/6 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Process</p>
              <h2 className="font-display font-black text-white text-4xl md:text-5xl uppercase leading-tight tracking-tight">How Claims Work</h2>
              <p className="text-white/45 text-sm mt-3">Five transparent steps from intimation to settlement — so you always know where your claim stands.</p>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
            {CLAIM_STEPS.map(({ num, title, desc }) => (
              <div key={num} className="p-5 bg-white/6 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-gold/30 transition-all group">
                <span className="font-display font-black text-gold/40 text-3xl leading-none block mb-3 group-hover:text-gold/70 transition-colors">{num}</span>
                <h4 className="font-display font-bold text-white text-sm mb-2 group-hover:text-gold transition-colors">{title}</h4>
                <p className="text-white/45 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </StaggerReveal>

          <ScrollReveal>
            <div className="text-center mb-8">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Claim Types</p>
              <h3 className="font-display font-black text-white text-3xl uppercase">Claim Types We Handle</h3>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {CLAIM_TYPES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 p-4 bg-white/6 border border-white/10 rounded-xl hover:border-gold/30 hover:bg-white/10 transition-all text-center">
                <Icon size={20} className="text-gold" />
                <span className="text-white/65 text-xs font-medium leading-tight">{label}</span>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Resources</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight">Claims Resources</h2>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {INNER_PAGES.map(({ icon: Icon, title, desc, link, cta }) => (
              <Link key={title} to={link}
                className="group flex flex-col h-full p-6 bg-[#f8f7f5] rounded-2xl border border-gray-100 hover:border-gold/40 hover:shadow-md transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center mb-4 group-hover:bg-gold transition-colors duration-300">
                  <Icon size={20} className="text-gold group-hover:text-navy transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-navy text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{desc}</p>
                <div className="flex items-center gap-1 text-gold text-sm font-semibold">
                  {cta} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </StaggerReveal>

          <ScrollReveal>
            <div className="bg-[#f8f7f5] rounded-2xl p-6 border border-gray-100 max-w-2xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <Heart size={18} className="text-gold" />
                <h3 className="font-display font-bold text-navy text-base">Health Claims Note</h3>
              </div>
              <div className="space-y-2">
                {['Health claims processed within 15–30 working days of receiving complete documentation.', 'Non-panel hospital submissions must be made within 1 month of discharge.', 'Panel hospital claims processed via direct billing — no upfront payment required.'].map((point) => (
                  <div key={point} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={13} className="text-gold shrink-0 mt-0.5" />{point}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-navy relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="claims-cg" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#D6A65A" strokeWidth="0.8" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#claims-cg)" />
        </svg>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Contact</p>
              <h2 className="font-display font-black text-white text-4xl md:text-5xl uppercase leading-tight mb-4">Intimation Channels</h2>
              <p className="text-white/45 text-sm">Always retain a reference number or acknowledgment when submitting.</p>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
            {INTIMATION_CHANNELS.map(({ icon: Icon, label, detail, href }) => (
              <a key={label} href={href} className="flex flex-col items-center text-center p-6 bg-white/6 border border-white/10 rounded-2xl hover:border-gold/30 hover:bg-white/10 transition-all">
                <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center mb-3">
                  <Icon size={18} className="text-gold" />
                </div>
                <span className="font-semibold text-white text-sm mb-1">{label}</span>
                <span className="text-white/50 text-xs">{detail}</span>
              </a>
            ))}
          </StaggerReveal>
          <ScrollReveal>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link to="/claims/intimation" className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-8 py-4 rounded-xl text-sm hover:bg-gold/90 transition-colors">
                <AlertCircle size={15} /> Submit Claim Intimation
              </Link>
              <Link to="/claims/procedure" className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-white font-semibold px-8 py-4 rounded-xl text-sm hover:bg-white/14 transition-colors">
                <ClipboardList size={15} /> View Procedures
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
