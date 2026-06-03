import { motion } from 'framer-motion'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import PageSEO from '../../components/shared/PageSEO'
import { Download, Mail, AlertCircle, CheckCircle2, Building2, ClipboardList } from 'lucide-react'

const NETWORKS = [
  {
    name: 'Corporate Mentor',
    desc: 'Our primary corporate panel hospital network covering major cities across Pakistan. Provides cashless treatment facilities for corporate and group health policyholders.',
    features: [
      'Coverage in all major cities including Karachi, Lahore, Islamabad',
      'Direct billing — no upfront payment required at panel hospitals',
      'Discounted rates on all covered treatments and procedures',
      'Dedicated health desk at major empanelled hospitals',
    ],
  },
  {
    name: 'Crescent Care',
    desc: 'An extensive supplementary panel network that expands coverage reach to secondary cities and provides additional choice for policyholders seeking quality healthcare options.',
    features: [
      'Additional hospital options across Pakistan',
      'Competitive treatment rates negotiated by Shaheen Insurance',
      'Covers diagnostic centers, labs, and specialist clinics',
      'Available for both individual and group health policyholders',
    ],
  },
]

const HOW_TO_USE = [
  { step: '01', title: 'Visit a Panel Hospital', desc: 'Present your Shaheen Insurance health card or policy document at the reception / health desk of the panel hospital.' },
  { step: '02', title: 'Intimate via Hospital', desc: 'The hospital will contact Shaheen Insurance\'s Health Department directly on your behalf to initiate the pre-authorization process.' },
  { step: '03', title: 'Obtain Prior Approval', desc: 'Ensure approval is received from the Health Department BEFORE admission for planned procedures. Unauthorized admissions may not be covered.' },
  { step: '04', title: 'Emergency Cases', desc: 'For emergencies — proceed with immediate first aid and treatment. Intimate the Health Department during or immediately after the emergency. Charges will be settled per approval before discharge.' },
]

export default function PanelHospitalsPage() {
  return (
    <>
      <PageSEO
        title="Panel Hospitals Network"
        description="Shaheen Insurance panel hospital network — cashless treatment at hospitals across Karachi, Lahore, Islamabad, Faisalabad, Peshawar and more cities in Pakistan."
        keywords="panel hospitals Pakistan, cashless treatment insurance, Shaheen Insurance hospitals, health insurance network Pakistan"
        path="/health-care/panel-hospitals"
        schema={{ '@context': 'https://schema.org', '@type': 'MedicalOrganization', name: 'Shaheen Insurance Panel Hospital Network', description: 'Nationwide panel hospital network for cashless healthcare in Pakistan.', areaServed: 'PK' }}
      />
      <PageHero
        title="Panel Hospitals"
        subtitle="Nationwide network of panel hospitals offering cashless treatment, discounts, and quality healthcare services for Shaheen Insurance policyholders"
        breadcrumbs={[{ label: 'Health Care', path: '/health-care' }, { label: 'Panel Hospitals' }]}
        videoCategory="health"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">

            {/* Visual Collage */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              className="grid grid-cols-3 gap-3 h-52 md:h-64 overflow-hidden">
              <div className="col-span-2 relative rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80&auto=format&fit=crop"
                  alt="Panel Hospital Network" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/15 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                  <span className="bg-gold text-navy font-bold text-xs px-3 py-1 rounded-full">Corporate Mentor</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">Crescent Care</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative rounded-2xl overflow-hidden flex-1">
                  <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&q=80&auto=format&fit=crop"
                    alt="Hospital" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-navy/40" />
                </div>
                <div className="bg-navy rounded-2xl flex-1 flex flex-col items-center justify-center p-3 text-center">
                  <div className="text-gold font-display font-bold text-sm">Cashless</div>
                  <div className="text-white/60 text-[10px]">Direct Billing</div>
                </div>
              </div>
            </motion.div>

            {/* Intro */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-4">Our Panel Hospital Networks</h2>
              <p className="text-gray-600 leading-relaxed">
                Shaheen Insurance maintains two comprehensive panel hospital networks that give policyholders access to quality healthcare facilities across Pakistan. Panel hospital policyholders benefit from direct billing arrangements and preferential rates — eliminating the need for upfront payments at empanelled facilities.
              </p>
            </motion.div>

            {/* Two Networks */}
            <div className="space-y-6">
              {NETWORKS.map(({ name, desc, features }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="p-6 bg-surface rounded-2xl border border-navy/8"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center shrink-0">
                      <Building2 size={22} className="text-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-navy text-xl mb-1">{name}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 pl-16">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 size={14} className="text-gold shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 pl-16">
                    <a
                      href="/downloads"
                      className="inline-flex items-center gap-2 bg-gold/10 text-navy font-semibold text-sm px-4 py-2 rounded-lg hover:bg-gold/20 transition-colors"
                    >
                      <Download size={14} />
                      Download {name} Hospital List (PDF)
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Adobe Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl"
            >
              <AlertCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong>Note:</strong> Hospital network PDFs are in Adobe Acrobat format. You will need <strong>Adobe Acrobat Reader</strong> installed on your device to view and print these documents. Adobe Acrobat Reader is available free of charge from adobe.com.
              </p>
            </motion.div>

            {/* How to Use Panel Hospitals */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}>
                <div className="gold-line mb-4" />
                <h2 className="font-display text-2xl font-bold text-navy mb-2">How to Use Your Panel Hospital</h2>
                <p className="text-gray-500 text-sm mb-6">Follow these steps to ensure smooth cashless treatment at any panel hospital.</p>
              </motion.div>

              <div className="space-y-4">
                {HOW_TO_USE.map(({ step, title, desc }, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    className="flex gap-4 p-5 bg-surface rounded-xl"
                  >
                    <span className="font-display font-bold text-gold/50 text-2xl leading-none shrink-0 w-10">{step}</span>
                    <div>
                      <h4 className="font-semibold text-navy text-sm mb-1">{title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Health Department */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <div className="bg-navy rounded-2xl p-7 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <ClipboardList size={20} className="text-gold" />
                  <h3 className="font-display font-bold text-xl">Contact Health Department</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  For queries about panel hospital coverage, pre-authorization, or to request the latest hospital lists, please contact our Health Department directly.
                </p>
                <a href="mailto:info@shaheeninsurance.com" className="flex items-center gap-2 text-gold font-semibold text-sm hover:underline">
                  <Mail size={15} />
                  info@shaheeninsurance.com
                </a>
              </div>
            </motion.div>

          </div>
          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}

