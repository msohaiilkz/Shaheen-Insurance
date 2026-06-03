import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import PageSEO from '../../components/shared/PageSEO'
import { FileText, Download, Car, Flame, Heart, Home, Package, Mail, Phone, AlertCircle } from 'lucide-react'

const FORMS = [
  {
    icon: Car,
    title: 'Motor / Auto Claim Form',
    desc: 'For motor vehicle claims including accidental damage, theft, fire, and third-party liability.',
    type: 'PDF',
  },
  {
    icon: Flame,
    title: 'Fire Claim Form',
    desc: 'For fire, explosion, riot, strike, malicious damage, and allied perils claims.',
    type: 'PDF',
  },
  {
    icon: Heart,
    title: 'Health / IPD Claim Form',
    desc: 'For inpatient health claims at non-panel hospitals. Must be signed by the treating doctor.',
    type: 'PDF',
  },
  {
    icon: Home,
    title: 'Burglary Claim Form',
    desc: 'For burglary, housebreaking, larceny, and money insurance claims.',
    type: 'PDF',
  },
  {
    icon: Package,
    title: 'General Claim Form',
    desc: 'General-purpose claim form applicable to miscellaneous, engineering, marine, and other policy types.',
    type: 'PDF',
  },
]

export default function ClaimFormsPage() {
  return (
    <>
      <PageSEO
        title="Claim Forms Download"
        description="Download Shaheen Insurance claim forms — motor, fire, health, burglary, and general insurance claim forms available as PDF for easy printing and submission."
        keywords="Shaheen Insurance claim form, motor claim form download, health claim form, insurance forms PDF Pakistan"
        path="/claims/forms"
      />
      <PageHero
        title="Claim Forms"
        subtitle="Download the correct claim form for your insurance type — all forms available in PDF format for easy printing and submission"
        breadcrumbs={[{ label: 'Claims', path: '/claims' }, { label: 'Claim Forms' }]}
        videoCategory="claims"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">

            {/* Visual Collage */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              className="grid grid-cols-3 gap-3 h-44 md:h-52">
              <div className="col-span-2 relative rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80&auto=format&fit=crop"
                  alt="Claim Forms Download" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                  <span className="bg-gold text-navy font-bold text-xs px-3 py-1 rounded-full">PDF Forms</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">Free Download</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative rounded-2xl overflow-hidden flex-1">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop"
                    alt="Documentation" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-navy/40" />
                </div>
                <div className="bg-navy rounded-2xl flex-1 flex flex-col items-center justify-center p-3 text-center">
                  <div className="text-gold font-display font-bold text-lg">5</div>
                  <div className="text-white/60 text-[10px]">Form Types</div>
                </div>
              </div>
            </motion.div>

            {/* Intro */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-4">Available Claim Forms</h2>
              <p className="text-gray-600 leading-relaxed">
                Select and download the appropriate claim form for your insurance type. Complete the form fully and legibly, then submit it to the nearest Shaheen Insurance branch along with the required supporting documents. All forms are in PDF format — Adobe Acrobat Reader is required.
              </p>
            </motion.div>

            {/* Forms List */}
            <div className="space-y-4">
              {FORMS.map(({ icon: Icon, title, desc, type }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                  className="flex items-center gap-5 p-5 bg-surface rounded-2xl border border-navy/8 hover:border-gold/30 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display font-bold text-navy text-base">{title}</h3>
                      <span className="text-xs font-semibold text-gold bg-gold/10 px-2 py-0.5 rounded-full">{type}</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                  <Link
                    to="/downloads"
                    className="flex items-center gap-2 bg-gold text-navy font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-gold/85 transition-colors shrink-0 group-hover:scale-105 duration-200"
                  >
                    <Download size={15} />
                    Download
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Adobe Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl"
            >
              <AlertCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-amber-800 text-sm font-semibold mb-1">Adobe Acrobat Reader Required</p>
                <p className="text-amber-700 text-xs leading-relaxed">
                  All claim forms are in PDF format. Please ensure you have Adobe Acrobat Reader installed to open, complete, and print the forms. Adobe Acrobat Reader is available free from adobe.com.
                </p>
              </div>
            </motion.div>

            {/* How to Submit */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-2xl font-bold text-navy mb-5">How to Submit Your Claim Form</h2>
              <div className="space-y-3">
                {[
                  { n: '01', t: 'Download & Print', d: 'Download the correct form and print it on A4 paper. Use black or blue ink when completing the form.' },
                  { n: '02', t: 'Complete Fully', d: 'Fill in all required fields clearly and completely. Incomplete forms will delay processing.' },
                  { n: '03', t: 'Attach Documents', d: 'Attach all required supporting documents (receipts, police reports, medical certificates, etc.) as specified in the General Procedure.' },
                  { n: '04', t: 'Submit to Branch', d: 'Submit the completed form to the nearest Shaheen Insurance branch in person or via courier.' },
                  { n: '05', t: 'Obtain Acknowledgment', d: 'Always obtain a written acknowledgment receipt when submitting your claim form and documents.' },
                ].map(({ n, t, d }) => (
                  <div key={n} className="flex gap-4 p-4 bg-surface rounded-xl">
                    <span className="font-display font-bold text-gold/50 text-2xl leading-none shrink-0 w-10">{n}</span>
                    <div>
                      <h4 className="font-semibold text-navy text-sm mb-1">{t}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
              <div className="bg-navy rounded-2xl p-7 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <FileText size={20} className="text-gold" />
                  <h3 className="font-display font-bold text-xl">Need a Physical Copy?</h3>
                </div>
                <p className="text-white/70 text-sm mb-5 leading-relaxed">
                  If you are unable to download or print a form, contact us and we will arrange to send you a physical copy or assist you at our nearest branch.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:info@shaheeninsurance.com" className="flex items-center gap-2 bg-gold text-navy font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-gold/85 transition-colors">
                    <Mail size={15} />
                    info@shaheeninsurance.com
                  </a>
                  <a href="tel:02132630370" className="flex items-center gap-2 border border-white/30 text-white font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-white/10 transition-colors">
                    <Phone size={15} />
                    021-32630370-75
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}
