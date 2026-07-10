import { Link } from 'react-router-dom'
import { Download, Car, Flame, Heart, Home, Package, Mail, Phone, AlertCircle, ArrowRight } from 'lucide-react'
import InnerPageHero from '../../components/layout/InnerPageHero'
import PageSEO from '../../components/shared/PageSEO'
import ScrollReveal from '../../components/shared/ScrollReveal'
import { StaggerReveal } from '../../components/shared/ScrollReveal'
import { useJourney } from '../../context/JourneyContext'
import { takafulize } from '../../lib/wording'

const FORMS = [
  { icon: Car, title: 'Motor / Auto Claim Form', desc: 'For motor vehicle claims including accidental damage, theft, fire, and third-party liability.' },
  { icon: Flame, title: 'Fire Claim Form', desc: 'For fire, explosion, riot, strike, malicious damage, and allied perils claims.' },
  { icon: Heart, title: 'Health / IPD Claim Form', desc: 'For inpatient health claims at non-panel hospitals. Must be signed by the treating doctor.' },
  { icon: Home, title: 'Burglary Claim Form', desc: 'For burglary, housebreaking, larceny, and money insurance claims.' },
  { icon: Package, title: 'General Claim Form', desc: 'General-purpose form applicable to miscellaneous, engineering, marine, and other policy types.' },
]

const SUBMIT_STEPS = [
  { num: '01', title: 'Download & Print', desc: 'Download the correct form and print on A4 paper. Use black or blue ink when completing.' },
  { num: '02', title: 'Complete Fully', desc: 'Fill in all required fields clearly. Incomplete forms will delay processing of your claim.' },
  { num: '03', title: 'Attach Documents', desc: 'Attach all required supporting documents — receipts, police reports, medical certificates as specified in the General Procedure.' },
  { num: '04', title: 'Submit to Branch', desc: 'Submit completed form to the nearest Shaheen Insurance branch in person or via courier.' },
  { num: '05', title: 'Get Acknowledgment', desc: 'Always obtain a written acknowledgment receipt when submitting your claim form and documents.' },
]

const FormsSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="50" y="25" width="75" height="95" rx="5" fill="#D6A65A" opacity="0.07" stroke="#D6A65A" strokeWidth="1.2" />
    <rect x="62" y="42" width="51" height="6" rx="2" fill="#D6A65A" opacity="0.3" />
    <rect x="62" y="55" width="42" height="5" rx="2" fill="#D6A65A" opacity="0.2" />
    <rect x="62" y="66" width="47" height="5" rx="2" fill="#D6A65A" opacity="0.2" />
    <rect x="62" y="77" width="36" height="5" rx="2" fill="#D6A65A" opacity="0.15" />
    <rect x="62" y="92" width="50" height="5" rx="2" fill="#D6A65A" opacity="0.2" />
    <rect x="115" y="40" width="75" height="95" rx="5" fill="#D6A65A" opacity="0.06" stroke="#D6A65A" strokeWidth="1" />
    <rect x="127" y="57" width="51" height="6" rx="2" fill="#D6A65A" opacity="0.25" />
    <rect x="127" y="70" width="42" height="5" rx="2" fill="#D6A65A" opacity="0.18" />
    <rect x="127" y="81" width="47" height="5" rx="2" fill="#D6A65A" opacity="0.18" />
    <rect x="127" y="92" width="36" height="5" rx="2" fill="#D6A65A" opacity="0.12" />
    <rect x="127" y="107" width="50" height="5" rx="2" fill="#D6A65A" opacity="0.18" />
    <rect x="195" y="55" width="75" height="95" rx="5" fill="#D6A65A" opacity="0.05" stroke="#D6A65A" strokeWidth="0.8" />
    <rect x="207" y="72" width="51" height="6" rx="2" fill="#D6A65A" opacity="0.2" />
    <rect x="207" y="85" width="42" height="5" rx="2" fill="#D6A65A" opacity="0.15" />
    <rect x="207" y="96" width="47" height="5" rx="2" fill="#D6A65A" opacity="0.15" />
    <circle cx="265" cy="25" r="12" fill="#D6A65A" opacity="0.5" stroke="#D6A65A" strokeWidth="1" />
    <path d="M262 28 L265 32 L270 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function ClaimFormsPage() {
  const { isTakaful } = useJourney()
  return (
    <>
      <PageSEO
        title="Claim Forms Download"
        description="Download Shaheen Insurance claim forms — motor, fire, health, burglary, and general insurance claim forms available as PDF."
        keywords="Shaheen Insurance claim form, motor claim form download, health claim form, insurance forms PDF Pakistan"
        path="/claims/forms"
      />
      <InnerPageHero
        category="Claims"
        title="Claim Forms"
        subtitle={takafulize("Download the correct claim form for your insurance type — all forms available in PDF format for easy printing and submission", isTakaful)}
        breadcrumbs={[{ label: 'Claims', path: '/claims' }, { label: 'Claim Forms' }]}
        stats={[{ value: '5', label: 'Form Types' }, { value: 'PDF', label: 'Format' }, { value: 'Free', label: 'Download' }]}
        svgIllustration={<FormsSVG />}
      />

      <section className="py-20 md:py-28 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Downloads</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight">Available Claim Forms</h2>
              <p className="text-gray-500 text-sm mt-3">Select and download the appropriate form. Complete fully and submit with required supporting documents.</p>
            </div>
          </ScrollReveal>
          <StaggerReveal className="space-y-4 max-w-3xl mx-auto">
            {FORMS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-gold" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display font-bold text-navy text-sm">{title}</h3>
                    <span className="text-xs font-semibold text-gold bg-gold/10 px-2 py-0.5 rounded-full">PDF</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{takafulize(desc, isTakaful)}</p>
                </div>
                <Link to="/downloads" className="flex items-center gap-2 bg-gold text-navy font-semibold text-xs px-4 py-2.5 rounded-lg hover:bg-gold/85 transition-colors shrink-0">
                  <Download size={13} />Download
                </Link>
              </div>
            ))}
          </StaggerReveal>
          <ScrollReveal>
            <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mt-6 max-w-3xl mx-auto">
              <AlertCircle size={17} className="text-amber-600 shrink-0 mt-0.5" />
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong>Adobe Acrobat Reader Required.</strong> All forms are in PDF format. Adobe Acrobat Reader is available free from adobe.com.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-light-blue relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="forms-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,4 52,16 52,32 28,44 4,32 4,16" fill="none" stroke="#D6A65A" strokeWidth="1" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#forms-hex)" />
        </svg>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gold/6 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold-dark text-xs font-bold tracking-[0.25em] uppercase mb-3">Submission</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight">How to Submit Your Claim Form</h2>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SUBMIT_STEPS.map(({ num, title, desc }) => (
              <div key={num} className="p-5 bg-white border border-navy/10 rounded-2xl shadow-card hover:border-gold/30 hover:bg-white/10 transition-all group">
                <span className="font-display font-black text-gold/40 text-3xl leading-none block mb-3 group-hover:text-gold/70 transition-colors">{num}</span>
                <h4 className="font-display font-bold text-navy text-sm mb-2 group-hover:text-gold transition-colors">{title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{takafulize(desc, isTakaful)}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <ScrollReveal>
            <div className="bg-navy rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Need a Physical Copy?</p>
                <h3 className="font-display font-black text-white text-2xl uppercase mb-4">Can't Download?</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">If you are unable to download or print a form, contact us and we will arrange to send you a physical copy or assist you at our nearest branch.</p>
                <div className="flex justify-center gap-3 flex-wrap">
                  <a href="mailto:info@shaheeninsurance.com" className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-6 py-3 rounded-xl text-sm hover:bg-gold/90 transition-colors">
                    <Mail size={14} /> Email Us
                  </a>
                  <a href="tel:02132630370" className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-white font-semibold px-6 py-3 rounded-xl text-sm hover:bg-white/14 transition-colors">
                    <Phone size={14} /> 021-32630370-75
                  </a>
                </div>
                <div className="mt-5 pt-5 border-t border-white/10">
                  <Link to="/claims/intimation" className="inline-flex items-center gap-2 text-gold/70 text-sm hover:text-gold transition-colors">
                    <ArrowRight size={14} /> Or submit claim intimation online
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
