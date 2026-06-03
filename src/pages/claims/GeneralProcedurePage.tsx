import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import PageSEO from '../../components/shared/PageSEO'
import { Car, Flame, Home, Cog, Monitor, Package, Heart, ChevronRight, AlertCircle } from 'lucide-react'
import { useState } from 'react'

const GENERAL_STEPS = [
  { step: '01', title: 'Notification', desc: 'Intimate the claim immediately via phone, letter, fax, or email to the relevant Shaheen Insurance branch. Prompt notification is essential — delays may affect your claim.' },
  { step: '02', title: 'Claim Form', desc: 'Submit a completed claim form along with an itemized estimate of the loss. Claim forms are available from our offices or downloadable from our website.' },
  { step: '03', title: 'Inspection', desc: 'The insurer will arrange an inspection. For major or complex claims, a specialist surveyor will be appointed to assess the loss independently.' },
  { step: '04', title: 'Documentation', desc: 'Provide all documentary proof establishing the connection between the loss and the insured peril. Keep copies of all documents submitted.' },
  { step: '05', title: 'Settlement', desc: 'Upon agreement on the quantum of loss, the claim is settled promptly. For agreed claims, payment is processed without unnecessary delay.' },
]

const SECTIONS = [
  {
    id: 'auto',
    icon: Car,
    title: 'Auto / Motor Claims',
    color: 'bg-blue-600',
    required_info: [
      'Policy / Certificate number',
      'Vehicle registration number',
      'Insured name and contact details',
      'Date, time, and nature of loss',
    ],
    steps: [
      'File accident notice immediately with Shaheen Insurance.',
      'For major damage — report before the vehicle is removed from the accident spot.',
      'Move vehicle to an authorized workshop for inspection and repair estimation.',
      'Submit completed claim form along with the workshop estimate.',
      'Insurer conducts detailed inspection of the vehicle.',
      'Verify driver\'s license and vehicle registration documents.',
      'Claims are settled either via direct payment to the workshop or reimbursement to the insured.',
      'For theft — file a police report immediately and submit the final police report to Shaheen Insurance.',
    ],
  },
  {
    id: 'fire',
    icon: Flame,
    title: 'Fire Claims',
    color: 'bg-red-600',
    required_info: [
      'Policy number',
      'Date and nature of loss',
      'Contact number(s)',
      'Cause of the fire / damage details',
      'List of damaged or destroyed items',
    ],
    steps: [
      'Notify Shaheen Insurance by phone AND in writing immediately.',
      'Obtain a claim form from the nearest branch or download from our website.',
      'File a police complaint if loss is due to riot, malicious damage, or terrorism.',
      'A surveyor will be appointed for large or complex fire losses.',
      'Gather all documentary evidence and submit with official acknowledgment.',
      'Report the incident to the Fire Station, Police, or Civil Authorities as applicable.',
      'Obtain fire brigade report / police report / civil authority report.',
      'Submit all reports and documentation for claim disposal.',
    ],
  },
  {
    id: 'burglary',
    icon: Home,
    title: 'Burglary / Money Claims',
    color: 'bg-purple-600',
    required_info: [
      'Policy number',
      'Date and location of burglary / loss',
      'List of stolen / damaged items with values',
    ],
    steps: [
      'Report to police IMMEDIATELY — this is a legal requirement and essential for your claim.',
      'Obtain a non-traceable certificate from the police (after their investigation).',
      'Provide an undertaking on stamp paper confirming the loss.',
      'Submit a subrogation letter to Shaheen Insurance.',
      'Provide the final police report upon completion of police investigation.',
      'Submit complete books of accounts, bills, and supporting documents to the surveyor.',
    ],
    extra: 'Note: The police report and non-traceable certificate are mandatory documents for burglary and money claims. Ensure these are obtained promptly.',
  },
  {
    id: 'machinery',
    icon: Cog,
    title: 'Machinery Breakdown',
    color: 'bg-orange-600',
    required_info: [
      'Policy number and machinery details',
      'Date, time, and description of breakdown',
      'Estimated repair costs',
    ],
    steps: [
      'Notify Shaheen Insurance immediately — before any repair work begins.',
      'Submit a formal claim notice with estimated repair costs.',
      'Arrange for an insurer inspection before repairs commence.',
      'For partial losses — no depreciation is applied if the machinery is properly insured at full value.',
      'For underinsured machinery — loss settlement will be on a proportionate reduction basis.',
      'Approval from the insurer is required BEFORE commencing any repair work.',
    ],
    extra: 'Important: Commencing repairs before insurer inspection may invalidate your claim. Always obtain written approval before proceeding.',
  },
  {
    id: 'electronic',
    icon: Monitor,
    title: 'Electronic Equipment',
    color: 'bg-teal-600',
    required_info: [
      'Policy number and equipment details',
      'Date, time, and nature of damage',
      'Estimated repair or replacement cost',
    ],
    steps: [
      'Follow the same procedure as Machinery Breakdown for notification and inspection.',
      'Notify immediately and arrange insurer inspection before repairs.',
      'Obtain prior approval before commencing repairs.',
      'Depreciation is only applied on total loss assessments — not on partial/repairable losses.',
      'Submit all repair bills, service reports, and manufacturer specifications.',
    ],
  },
  {
    id: 'misc',
    icon: Package,
    title: 'Miscellaneous Claims',
    color: 'bg-gray-600',
    required_info: [
      'Policy number',
      'Date, time, and nature of loss',
      'Estimated value of loss',
    ],
    steps: [
      'Inform Shaheen Insurance immediately by both phone and writing.',
      'Submit completed claim form with an itemized loss estimate.',
      'A surveyor will be appointed for large miscellaneous losses.',
      'Provide photocopies of all documentary evidence supporting the claim.',
      'Cooperate fully with surveyors and inspectors during the assessment process.',
      'Report to relevant authorities (police, fire brigade, etc.) as applicable and obtain their reports.',
    ],
  },
  {
    id: 'health',
    icon: Heart,
    title: 'Health Claims',
    color: 'bg-rose-600',
    required_info: [
      'Contact numbers (claimant and next of kin)',
      'Policy number',
      'Name of the hospitalized person',
      'Nature of sickness or accident',
      'Date, time, and location of incident',
      'Description of symptoms',
    ],
    steps: [
      'NON-PANEL HOSPITAL: Settle hospital bills directly at the time of discharge.',
      'Collect all original receipts, investigation reports, and lab test results.',
      'Obtain Discharge Certificate from the hospital — must include: Chief Complaints, Present History, Past History.',
      'Get the IPD Claim Form completed and signed by the treating doctor.',
      'Submit all documents to Shaheen Insurance within 1 month of discharge.',
      'Claims are processed within 15–30 working days of receiving complete documentation.',
      'PANEL HOSPITAL: Visit the panel hospital and intimate the Health Department via the hospital.',
      'Ensure approval is obtained BEFORE planned admission.',
      'For emergencies — proceed with treatment immediately, intimate during first aid.',
      'Charges are settled per insurer approval before discharge from the panel hospital.',
    ],
  },
]

export default function GeneralProcedurePage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  return (
    <>
      <PageSEO
        title="General Claim Procedure"
        description="Shaheen Insurance claim procedures — detailed step-by-step guidance for motor, fire, burglary, machinery, electronics, and health claims. Know exactly what to do when loss occurs."
        keywords="insurance claim procedure Pakistan, how to file motor claim, fire claim process, health claim procedure Shaheen Insurance"
        path="/claims/procedure"
      />
      <PageHero
        title="General Claim Procedure"
        subtitle="Step-by-step guidance for filing claims across all insurance types — auto, fire, burglary, machinery, electronics, health, and more"
        breadcrumbs={[{ label: 'Claims', path: '/claims' }, { label: 'General Procedure' }]}
        videoCategory="claims"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">

            {/* Visual Collage */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              className="grid grid-cols-3 gap-3 h-44 md:h-52">
              <div className="col-span-2 relative rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop"
                  alt="Claim Procedure" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                  <span className="bg-gold text-navy font-bold text-xs px-3 py-1 rounded-full">5-Step Process</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">7 Claim Types</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative rounded-2xl overflow-hidden flex-1">
                  <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80&auto=format&fit=crop"
                    alt="Documentation" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-navy/40" />
                </div>
                <div className="bg-navy rounded-2xl flex-1 flex flex-col items-center justify-center p-3 text-center">
                  <div className="text-gold font-display font-bold text-sm">5 Days</div>
                  <div className="text-white/60 text-[10px]">Acknowledgment</div>
                </div>
              </div>
            </motion.div>

            {/* General Steps */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-2">General Claim Steps</h2>
              <p className="text-gray-500 text-sm mb-6">These steps apply to all claim types. Specific requirements for each insurance class are detailed below.</p>
              <div className="space-y-3">
                {GENERAL_STEPS.map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4 p-4 bg-surface rounded-xl">
                    <span className="font-display font-bold text-gold/50 text-2xl leading-none shrink-0 w-10">{step}</span>
                    <div>
                      <h4 className="font-semibold text-navy text-sm mb-1">{title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Claim Type Specific */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <div className="gold-line mb-4" />
                <h2 className="font-display text-3xl font-bold text-navy mb-2">Procedures by Claim Type</h2>
                <p className="text-gray-500 text-sm mb-6">Select a claim type below to view the specific documentation and steps required.</p>
              </motion.div>

              <div className="space-y-4">
                {SECTIONS.map(({ id, icon: Icon, title, color, required_info, steps, extra }, i) => {
                  const isOpen = activeSection === id
                  return (
                    <motion.div
                      key={id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
                      className="border border-navy/10 rounded-2xl overflow-hidden"
                    >
                      <button
                        onClick={() => setActiveSection(isOpen ? null : id)}
                        className="w-full flex items-center gap-4 p-5 text-left hover:bg-surface transition-colors"
                      >
                        <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shrink-0`}>
                          <Icon size={18} className="text-white" />
                        </div>
                        <span className="font-display font-bold text-navy text-lg flex-1">{title}</span>
                        <ChevronRight size={18} className={`text-gold transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-6 space-y-5 border-t border-navy/5 pt-5">
                          {/* Required Info */}
                          <div>
                            <h4 className="font-semibold text-navy text-sm mb-3">Required Information to Provide:</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                              {required_info.map((info) => (
                                <li key={info} className="flex items-start gap-2 text-xs text-gray-600">
                                  <ChevronRight size={12} className="text-gold shrink-0 mt-0.5" />
                                  {info}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Steps */}
                          <div>
                            <h4 className="font-semibold text-navy text-sm mb-3">Step-by-Step Procedure:</h4>
                            <div className="space-y-2">
                              {steps.map((step, idx) => (
                                <div key={idx} className="flex gap-3 text-sm text-gray-600">
                                  <span className="font-bold text-gold/70 shrink-0 w-5">{idx + 1}.</span>
                                  <span className="leading-relaxed">{step}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {extra && (
                            <div className="flex items-start gap-2 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                              <AlertCircle size={14} className="text-amber-600 shrink-0 mt-0.5" />
                              <p className="text-amber-800 text-xs leading-relaxed">{extra}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Link to="/claims/intimation" className="btn-primary">
                <AlertCircle size={15} />
                Submit Claim Intimation
              </Link>
              <Link to="/claims/forms" className="btn-navy">Download Claim Forms</Link>
            </div>

          </div>
          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}
