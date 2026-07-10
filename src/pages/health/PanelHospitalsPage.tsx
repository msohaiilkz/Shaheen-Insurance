import { Link } from 'react-router-dom'
import { Download, Mail, AlertCircle, CheckCircle2, Building2, MapPin, Phone } from 'lucide-react'
import InnerPageHero from '../../components/layout/InnerPageHero'
import PageSEO from '../../components/shared/PageSEO'
import ScrollReveal from '../../components/shared/ScrollReveal'
import { StaggerReveal } from '../../components/shared/ScrollReveal'
import { useJourney } from '../../context/JourneyContext'
import { takafulize } from '../../lib/wording'

const NETWORKS = [
  {
    name: 'Corporate Mentor',
    desc: 'Our primary corporate panel hospital network covering major cities across Pakistan. Provides cashless treatment for corporate and group health policyholders.',
    features: ['Coverage in all major cities — Karachi, Lahore, Islamabad', 'Direct billing — no upfront payment required', 'Discounted rates on all covered treatments', 'Dedicated health desk at major hospitals'],
  },
  {
    name: 'Crescent Care',
    desc: 'An extensive supplementary panel network that expands coverage to secondary cities and provides additional choice for policyholders.',
    features: ['Additional hospital options across Pakistan', 'Competitive treatment rates negotiated by Shaheen', 'Covers diagnostic centers, labs, and specialist clinics', 'Available for both individual and group policyholders'],
  },
]

const HOW_TO_USE = [
  { num: '01', title: 'Visit Panel Hospital', desc: 'Present your Shaheen Insurance health card or policy document at the reception or health desk of the panel hospital.' },
  { num: '02', title: 'Hospital Intimates', desc: "The hospital will contact Shaheen Insurance's Health Department directly on your behalf to initiate the pre-authorization process." },
  { num: '03', title: 'Obtain Approval', desc: 'Ensure approval is received BEFORE admission for planned procedures. Unauthorized admissions may not be covered under the policy.' },
  { num: '04', title: 'Emergency Cases', desc: 'For emergencies — proceed with treatment immediately. Intimate the Health Department during or after the emergency. Charges settled per approval before discharge.' },
]

const CITIES = ['Karachi', 'Lahore', 'Islamabad', 'Faisalabad', 'Peshawar', 'Multan', 'Quetta', 'Sialkot', 'Rawalpindi', 'Hyderabad', 'Gujranwala', 'Abbottabad']

const PanelSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <ellipse cx="160" cy="105" rx="110" ry="55" stroke="#D6A65A" strokeWidth="1" opacity="0.15" />
    <ellipse cx="160" cy="105" rx="75" ry="38" stroke="#D6A65A" strokeWidth="0.8" opacity="0.12" />
    {[
      [160, 55], [100, 75], [215, 80], [80, 105], [230, 110], [120, 130], [200, 135], [160, 145],
    ].map(([cx, cy], i) => (
      <g key={i}>
        <circle cx={cx} cy={cy} r="5" fill="#D6A65A" opacity={i < 3 ? 0.5 : 0.3} />
        <circle cx={cx} cy={cy} r="9" stroke="#D6A65A" strokeWidth="0.8" opacity={i < 3 ? 0.25 : 0.15} />
      </g>
    ))}
    <path d="M160 55 L100 75 M160 55 L215 80 M100 75 L80 105 M215 80 L230 110 M80 105 L120 130 M230 110 L200 135 M120 130 L160 145 M200 135 L160 145" stroke="#D6A65A" strokeWidth="0.7" opacity="0.2" />
    <circle cx="265" cy="25" r="12" fill="#D6A65A" opacity="0.5" stroke="#D6A65A" strokeWidth="1" />
    <path d="M262 28 L265 32 L270 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function PanelHospitalsPage() {
  const { isTakaful } = useJourney()
  return (
    <>
      <PageSEO
        title="Panel Hospitals Network"
        description="Shaheen Insurance panel hospital network — cashless treatment at hospitals across Karachi, Lahore, Islamabad, Faisalabad, Peshawar and more cities in Pakistan."
        keywords="panel hospitals Pakistan, cashless treatment insurance, Shaheen Insurance hospitals, health insurance network Pakistan"
        path="/health-care/panel-hospitals"
        schema={{ '@context': 'https://schema.org', '@type': 'MedicalOrganization', name: 'Shaheen Insurance Panel Hospital Network', areaServed: 'PK' }}
      />
      <InnerPageHero
        category="Health Care"
        title="Panel Hospitals"
        subtitle={takafulize("Nationwide network of panel hospitals offering cashless treatment, discounts, and quality healthcare for Shaheen Insurance policyholders", isTakaful)}
        breadcrumbs={[{ label: 'Health Care', path: '/health-care' }, { label: 'Panel Hospitals' }]}
        stats={[{ value: '50+', label: 'Panel Hospitals' }, { value: 'Cashless', label: 'Treatment' }, { value: '12+', label: 'Cities' }]}
        svgIllustration={<PanelSVG />}
      />

      <section className="py-20 md:py-28 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Panel Networks</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-6">
                Our Hospital<br /><span className="text-gold">Networks</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{takafulize("Shaheen Insurance maintains two comprehensive panel hospital networks giving policyholders access to quality healthcare facilities across Pakistan. Panel policyholders benefit from direct billing arrangements and preferential rates — eliminating upfront payments.", isTakaful)}</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: 'Corporate Mentor', lbl: 'Primary Network' },
                  { val: 'Crescent Care', lbl: 'Extended Network' },
                ].map(({ val, lbl }) => (
                  <div key={val} className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="font-bold text-navy text-sm mb-1">{val}</p>
                    <p className="text-gray-500 text-xs">{lbl}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal from="right">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-navy/15">
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&q=80&auto=format&fit=crop"
                  alt="Panel Hospital Network" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center shrink-0">
                      <Building2 size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-black text-navy text-lg leading-none">Cashless Direct Billing</p>
                      <p className="text-gray-500 text-xs mt-0.5">No upfront payment at panel hospitals</p>
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
          <defs><pattern id="panel-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,4 52,16 52,32 28,44 4,32 4,16" fill="none" stroke="#D6A65A" strokeWidth="1" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#panel-hex)" />
        </svg>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gold/6 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold-dark text-xs font-bold tracking-[0.25em] uppercase mb-3">Network Details</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight">Hospital Networks</h2>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {NETWORKS.map(({ name, desc, features }) => (
              <div key={name} className="p-6 bg-white border border-navy/10 rounded-2xl hover:border-gold/30 transition-all shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 bg-gold/15 rounded-xl flex items-center justify-center shrink-0">
                    <Building2 size={20} className="text-gold" />
                  </div>
                  <h4 className="font-display font-bold text-navy text-lg">{takafulize(name, isTakaful)}</h4>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{takafulize(desc, isTakaful)}</p>
                <ul className="space-y-2 mb-5">
                  {features.map((f) => (
                    <li key={f} className="flex gap-2 text-xs text-gray-500">
                      <CheckCircle2 size={12} className="text-gold/70 shrink-0 mt-0.5" />{f}
                    </li>
                  ))}
                </ul>
                <Link to="/downloads" className="inline-flex items-center gap-2 bg-gold/15 text-gold text-xs font-semibold px-4 py-2 rounded-lg hover:bg-gold/25 transition-colors">
                  <Download size={13} /> Download {name} Hospital List
                </Link>
              </div>
            ))}
          </StaggerReveal>

          <ScrollReveal>
            <div className="text-center mb-8">
              <p className="text-gold-dark text-xs font-bold tracking-[0.25em] uppercase mb-3">Coverage</p>
              <h3 className="font-display font-black text-navy text-3xl uppercase">Cities Covered</h3>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {CITIES.map((city) => (
              <div key={city} className="flex items-center gap-1.5 p-3 bg-white border border-navy/10 rounded-xl hover:border-gold/30 transition-all justify-center shadow-card">
                <MapPin size={11} className="text-gold shrink-0" />
                <span className="text-gray-600 text-xs font-medium">{city}</span>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">How To Use</p>
                <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight">
                  Using Your<br />Panel Hospital
                </h2>
              </div>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {HOW_TO_USE.map(({ num, title, desc }) => (
              <div key={num} className="p-5 bg-[#f8f7f5] rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all group">
                <span className="font-display font-black text-gold/40 text-3xl leading-none block mb-3 group-hover:text-gold/70 transition-colors">{num}</span>
                <h4 className="font-display font-bold text-navy text-base mb-2">{takafulize(title, isTakaful)}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{takafulize(desc, isTakaful)}</p>
              </div>
            ))}
          </StaggerReveal>

          <ScrollReveal>
            <div className="flex items-start gap-3 p-5 bg-amber-50 border border-amber-200 rounded-xl max-w-2xl">
              <AlertCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong>Note:</strong> Hospital network PDFs are in Adobe Acrobat format. You will need Adobe Acrobat Reader installed to view and print these documents.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-light-blue relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="panel-cg" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#D6A65A" strokeWidth="0.8" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#panel-cg)" />
        </svg>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <ScrollReveal>
          <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
            <p className="text-gold-dark text-xs font-bold tracking-[0.25em] uppercase mb-4">Contact Health Dept</p>
            <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight mb-4">
              Need <span className="text-gold-dark">Assistance?</span>
            </h2>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto text-sm leading-relaxed">For queries about panel coverage, pre-authorization, or to request the latest hospital lists — contact our Health Department directly.</p>
            <div className="flex justify-center gap-3 flex-wrap">
              <a href="mailto:info@shaheeninsurance.com" className="inline-flex items-center gap-2 bg-navy text-white font-bold px-8 py-4 rounded-xl text-sm hover:bg-navy/90 transition-colors">
                <Mail size={15} /> Email Health Dept
              </a>
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
