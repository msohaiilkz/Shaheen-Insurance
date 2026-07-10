import { Link } from 'react-router-dom'
import { Car, Flame, Home, Cog, Monitor, Package, Heart, ChevronRight, AlertCircle, FileText } from 'lucide-react'
import { useState } from 'react'
import InnerPageHero from '../../components/layout/InnerPageHero'
import PageSEO from '../../components/shared/PageSEO'
import ScrollReveal from '../../components/shared/ScrollReveal'
import { StaggerReveal } from '../../components/shared/ScrollReveal'
import { useJourney } from '../../context/JourneyContext'
import { takafulize } from '../../lib/wording'

const GENERAL_STEPS = [
  { num: '01', title: 'Notification', desc: 'Intimate the claim immediately via phone, letter, fax, or email to the relevant Shaheen Insurance branch. Prompt notification is essential.' },
  { num: '02', title: 'Claim Form', desc: 'Submit a completed claim form along with an itemized estimate of the loss. Forms are available from our offices or downloadable from our website.' },
  { num: '03', title: 'Inspection', desc: 'The insurer will arrange an inspection. For major claims, a specialist surveyor will be appointed to assess the loss independently.' },
  { num: '04', title: 'Documentation', desc: 'Provide all documentary proof establishing the connection between the loss and the insured peril. Keep copies of all documents submitted.' },
  { num: '05', title: 'Settlement', desc: 'Upon agreement on the quantum of loss, the claim is settled promptly. For agreed claims, payment is processed without unnecessary delay.' },
]

const SECTIONS = [
  {
    id: 'auto', icon: Car, title: 'Auto / Motor Claims',
    required_info: ['Policy / Certificate number', 'Vehicle registration number', 'Insured name and contact details', 'Date, time, and nature of loss'],
    steps: ['File accident notice immediately with Shaheen Insurance.', 'For major damage — report before the vehicle is removed from the accident spot.', 'Move vehicle to an authorized workshop for inspection and repair estimation.', 'Submit completed claim form along with the workshop estimate.', 'Insurer conducts detailed inspection of the vehicle.', "Verify driver's license and vehicle registration documents.", 'Claims settled via direct payment to workshop or reimbursement to insured.', 'For theft — file a police report immediately and submit the final police report.'],
  },
  {
    id: 'fire', icon: Flame, title: 'Fire Claims',
    required_info: ['Policy number', 'Date and nature of loss', 'Contact number(s)', 'Cause of the fire / damage details', 'List of damaged or destroyed items'],
    steps: ['Notify Shaheen Insurance by phone AND in writing immediately.', 'Obtain a claim form from the nearest branch or download from our website.', 'File a police complaint if loss is due to riot, malicious damage, or terrorism.', 'A surveyor will be appointed for large or complex fire losses.', 'Gather all documentary evidence and submit with official acknowledgment.', 'Report the incident to Fire Station, Police, or Civil Authorities as applicable.', 'Obtain fire brigade report / police report / civil authority report.', 'Submit all reports and documentation for claim disposal.'],
  },
  {
    id: 'burglary', icon: Home, title: 'Burglary / Money Claims',
    required_info: ['Policy number', 'Date and location of burglary / loss', 'List of stolen / damaged items with values'],
    steps: ['Report to police IMMEDIATELY — this is a legal requirement and essential for your claim.', 'Obtain a non-traceable certificate from the police (after their investigation).', 'Provide an undertaking on stamp paper confirming the loss.', 'Submit a subrogation letter to Shaheen Insurance.', 'Provide the final police report upon completion of police investigation.', 'Submit complete books of accounts, bills, and supporting documents to the surveyor.'],
    extra: 'Note: The police report and non-traceable certificate are mandatory for burglary and money claims. Ensure these are obtained promptly.',
  },
  {
    id: 'machinery', icon: Cog, title: 'Machinery Breakdown',
    required_info: ['Policy number and machinery details', 'Date, time, and description of breakdown', 'Estimated repair costs'],
    steps: ['Notify Shaheen Insurance immediately — before any repair work begins.', 'Submit a formal claim notice with estimated repair costs.', 'Arrange for an insurer inspection before repairs commence.', 'For partial losses — no depreciation applied if machinery is properly insured at full value.', 'For underinsured machinery — loss settlement will be on a proportionate reduction basis.', 'Written approval from the insurer is required BEFORE commencing any repair work.'],
    extra: 'Important: Commencing repairs before insurer inspection may invalidate your claim. Always obtain written approval before proceeding.',
  },
  {
    id: 'electronic', icon: Monitor, title: 'Electronic Equipment',
    required_info: ['Policy number and equipment details', 'Date, time, and nature of damage', 'Estimated repair or replacement cost'],
    steps: ['Follow the same procedure as Machinery Breakdown for notification and inspection.', 'Notify immediately and arrange insurer inspection before repairs.', 'Obtain prior approval before commencing repairs.', 'Depreciation is only applied on total loss assessments — not on partial/repairable losses.', 'Submit all repair bills, service reports, and manufacturer specifications.'],
  },
  {
    id: 'misc', icon: Package, title: 'Miscellaneous Claims',
    required_info: ['Policy number', 'Date, time, and nature of loss', 'Estimated value of loss'],
    steps: ['Inform Shaheen Insurance immediately by both phone and writing.', 'Submit completed claim form with an itemized loss estimate.', 'A surveyor will be appointed for large miscellaneous losses.', 'Provide photocopies of all documentary evidence supporting the claim.', 'Cooperate fully with surveyors and inspectors during the assessment process.', 'Report to relevant authorities (police, fire brigade, etc.) as applicable.'],
  },
  {
    id: 'health', icon: Heart, title: 'Health Claims',
    required_info: ['Contact numbers (claimant and next of kin)', 'Policy number', 'Name of the hospitalized person', 'Nature of sickness or accident', 'Date, time, and location of incident'],
    steps: ['NON-PANEL HOSPITAL: Settle hospital bills directly at the time of discharge.', 'Collect all original receipts, investigation reports, and lab test results.', 'Obtain Discharge Certificate from the hospital — must include Chief Complaints, Present History, Past History.', 'Get the IPD Claim Form completed and signed by the treating doctor.', 'Submit all documents to Shaheen Insurance within 1 month of discharge.', 'Claims are processed within 15–30 working days of receiving complete documentation.', 'PANEL HOSPITAL: Visit the panel hospital and intimate the Health Department via the hospital.', 'Ensure approval is obtained BEFORE planned admission.', 'For emergencies — proceed with treatment immediately, intimate during first aid.', 'Charges settled per insurer approval before discharge from the panel hospital.'],
  },
]

const ProcedureSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="60" y="30" width="85" height="110" rx="5" fill="#D6A65A" opacity="0.07" stroke="#D6A65A" strokeWidth="1.2" />
    <rect x="72" y="50" width="61" height="6" rx="2" fill="#D6A65A" opacity="0.3" />
    <rect x="72" y="63" width="50" height="5" rx="2" fill="#D6A65A" opacity="0.2" />
    <rect x="72" y="74" width="55" height="5" rx="2" fill="#D6A65A" opacity="0.2" />
    <rect x="72" y="85" width="43" height="5" rx="2" fill="#D6A65A" opacity="0.15" />
    <rect x="72" y="100" width="58" height="5" rx="2" fill="#D6A65A" opacity="0.2" />
    <rect x="72" y="111" width="48" height="5" rx="2" fill="#D6A65A" opacity="0.15" />
    <rect x="175" y="50" width="85" height="90" rx="5" fill="#D6A65A" opacity="0.05" stroke="#D6A65A" strokeWidth="1" />
    <rect x="185" y="65" width="65" height="6" rx="2" fill="#D6A65A" opacity="0.25" />
    <rect x="185" y="78" width="52" height="5" rx="2" fill="#D6A65A" opacity="0.18" />
    <rect x="185" y="89" width="58" height="5" rx="2" fill="#D6A65A" opacity="0.18" />
    <rect x="185" y="100" width="42" height="5" rx="2" fill="#D6A65A" opacity="0.15" />
    <rect x="185" y="111" width="55" height="5" rx="2" fill="#D6A65A" opacity="0.18" />
    <circle cx="265" cy="25" r="12" fill="#D6A65A" opacity="0.5" stroke="#D6A65A" strokeWidth="1" />
    <path d="M262 28 L265 32 L270 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function GeneralProcedurePage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const { isTakaful } = useJourney()

  return (
    <>
      <PageSEO
        title="General Claim Procedure"
        description="Shaheen Insurance claim procedures — detailed step-by-step guidance for motor, fire, burglary, machinery, electronics, and health claims."
        keywords="insurance claim procedure Pakistan, how to file motor claim, fire claim process, health claim procedure Shaheen Insurance"
        path="/claims/procedure"
      />
      <InnerPageHero
        category="Claims"
        title="General Claim Procedure"
        subtitle={takafulize("Step-by-step guidance for filing claims across all insurance types — auto, fire, burglary, machinery, electronics, health, and more", isTakaful)}
        breadcrumbs={[{ label: 'Claims', path: '/claims' }, { label: 'General Procedure' }]}
        stats={[{ value: '5', label: 'General Steps' }, { value: '7', label: 'Claim Types' }, { value: '5 Days', label: 'SLA' }]}
        svgIllustration={<ProcedureSVG />}
      />

      <section className="py-20 md:py-28 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">General Steps</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight">General Claim Steps</h2>
              <p className="text-gray-500 text-sm mt-3">These steps apply to all claim types. Specific requirements for each insurance class are detailed below.</p>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {GENERAL_STEPS.map(({ num, title, desc }) => (
              <div key={num} className="p-5 bg-white rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all group">
                <span className="font-display font-black text-gold/40 text-3xl leading-none block mb-3 group-hover:text-gold/70 transition-colors">{num}</span>
                <h4 className="font-display font-bold text-navy text-sm mb-2">{title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{takafulize(desc, isTakaful)}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">By Type</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight">Procedures by Claim Type</h2>
              <p className="text-gray-500 text-sm mt-3">Select a claim type to view specific documentation and steps required.</p>
            </div>
          </ScrollReveal>
          <div className="max-w-4xl mx-auto space-y-3">
            {SECTIONS.map(({ id, icon: Icon, title, required_info, steps, extra }) => {
              const isOpen = activeSection === id
              return (
                <div key={id} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-gold/30 shadow-md' : 'border-gray-200'}`}>
                  <button
                    onClick={() => setActiveSection(isOpen ? null : id)}
                    className="w-full flex items-center gap-4 p-5 text-left hover:bg-[#f8f7f5] transition-colors"
                  >
                    <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-gold" />
                    </div>
                    <span className="font-display font-bold text-navy text-base flex-1">{title}</span>
                    <ChevronRight size={18} className={`text-gold transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 space-y-5 border-t border-gray-100 pt-5">
                      <div>
                        <h4 className="font-semibold text-navy text-sm mb-3">Required Information:</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {required_info.map((info) => (
                            <li key={info} className="flex items-start gap-2 text-xs text-gray-600">
                              <ChevronRight size={11} className="text-gold shrink-0 mt-0.5" />{info}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy text-sm mb-3">Step-by-Step Procedure:</h4>
                        <div className="space-y-2">
                          {steps.map((step, idx) => (
                            <div key={idx} className="flex gap-3 text-sm text-gray-600">
                              <span className="font-bold text-gold/70 shrink-0 w-5">{idx + 1}.</span>
                              <span className="leading-relaxed">{takafulize(step, isTakaful)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {extra && (
                        <div className="flex items-start gap-2 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                          <AlertCircle size={13} className="text-amber-600 shrink-0 mt-0.5" />
                          <p className="text-amber-800 text-xs leading-relaxed">{extra}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-blue relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="proc-cg" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#D6A65A" strokeWidth="0.8" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#proc-cg)" />
        </svg>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <ScrollReveal>
          <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
            <p className="text-gold-dark text-xs font-bold tracking-[0.25em] uppercase mb-4">Take Action</p>
            <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight mb-4">
              Ready to <span className="text-gold-dark">File?</span>
            </h2>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto text-sm leading-relaxed">Submit your claim intimation or download the required claim forms to get started.</p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link to="/claims/intimation" className="inline-flex items-center gap-2 bg-navy text-white font-bold px-8 py-4 rounded-xl text-sm hover:bg-navy/90 transition-colors">
                <AlertCircle size={15} /> Submit Intimation
              </Link>
              <Link to="/claims/forms" className="inline-flex items-center gap-2 bg-white border border-navy/15 text-navy shadow-card font-semibold px-8 py-4 rounded-xl text-sm hover:bg-white/80 transition-colors">
                <FileText size={15} /> Download Forms
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
