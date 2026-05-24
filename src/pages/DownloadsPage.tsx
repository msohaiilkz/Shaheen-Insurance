import { motion } from 'framer-motion'
import PageHero from '../components/layout/PageHero'
import ContactSidebar from '../components/layout/ContactSidebar'
import { FileText, Download, AlertCircle, Mail } from 'lucide-react'

type DocItem = { title: string; desc?: string; url: string }
type DocCategory = { category: string; icon: React.ElementType; docs: DocItem[] }

const CATEGORIES: DocCategory[] = [
  {
    category: 'Policy Documents',
    icon: FileText,
    docs: [
      { title: 'WTO PTF Policies (Waqf Rules)', desc: 'Official Takaful Policy Document governing Window Takaful Operations — Waqf Fund Rules and Participant Takaful Fund (PTF) structure.', url: 'http://www.shaheeninsurance.com/new/wp-content/uploads/2017/09/WTO-PTF-Policies-Waqf-Rules.pdf' },
    ],
  },
  {
    category: 'Corporate Governance',
    icon: FileText,
    docs: [
      { title: 'Profile of Candidates — Election of Directors', desc: 'Individual candidate profiles for the election of directors.', url: 'http://shaheeninsurance.com/pdf/Profile%20of%20Candidates%20-%20Election%20of%20Directors.pdf' },
      { title: 'Web Compliance Certificate', desc: 'SECP-mandated web compliance certificate for PSX-listed companies.', url: 'http://www.shaheeninsurance.com/new/wp-content/uploads/2019/04/Website_Compliance_Certificate.pdf' },
    ],
  },
  {
    category: 'Administrative Forms',
    icon: FileText,
    docs: [
      { title: 'Request Form for Printed Annual Report', desc: 'Use this form to request a physical copy of the Shaheen Insurance Annual Report.', url: 'http://shaheeninsurance.com/pdf/Request%20Form%20for%20Printed%20Annual%20Report.pdf' },
      { title: 'Consent Form for Electronic Transmission of Annual Report and Notice of AGM', desc: 'Provide your consent to receive annual reports and AGM notices electronically.', url: 'http://www.shaheeninsurance.com/new/wp-content/uploads/2017/11/Consent-Form-for-Electronic-Transmission-of-Annual-Report.pdf' },
      { title: 'Transfer Deed', desc: 'Standard share transfer deed for Shaheen Insurance shareholders.', url: 'http://www.shaheeninsurance.com/new/wp-content/uploads/2017/11/TRANSFER-DEED.pdf' },
    ],
  },
  {
    category: 'Insurance Application Forms',
    icon: FileText,
    docs: [
      { title: "Shaheen's Secure Travel Application Form", desc: 'Application form for Shaheen Secure Travel Insurance — applicable for international travel.', url: 'http://shaheeninsurance.com/pdf/SecureTravelApplicationForm.pdf' },
    ],
  },
  {
    category: 'Investor Relations',
    icon: FileText,
    docs: [
      { title: 'Pattern of Share Holding (as of December 31, 2018)', desc: 'Shareholding pattern disclosing major shareholders and categories as of 31 December 2018.', url: 'http://www.shaheeninsurance.com/new/wp-content/uploads/2019/04/Pattern_of_Share_Holding_Dec-31-2018.pdf' },
      { title: 'Financial Highlights — Last Ten Years', desc: 'Historical financial highlights covering a ten-year period for performance comparison.', url: 'http://www.shaheeninsurance.com/new/wp-content/uploads/2019/04/Financial_Highlights_for_last_ten_years.pdf' },
      { title: 'Unclaimed Dividend Information', desc: 'Details of unclaimed dividends — for shareholders who have not yet received their dividend payments.', url: 'http://www.shaheeninsurance.com/new/wp-content/uploads/2019/04/SCIL UN-CLAIM DIVIDEND.pdf' },
      { title: 'Election of Directors Documentation', desc: 'Official documentation for the election of directors process.', url: 'http://www.shaheeninsurance.com/new/wp-content/uploads/2017/11/Election-of-Directors-Shaheen-Insurance.pdf' },
    ],
  },
  {
    category: 'Claim Forms',
    icon: FileText,
    docs: [
      { title: 'Motor / Auto Claim Form', desc: 'For motor vehicle claims — accidental damage, theft, fire, and third-party liability.', url: '/claims/forms' },
      { title: 'Fire Claim Form', desc: 'For fire, explosion, riot, strike, and allied perils claims.', url: '/claims/forms' },
      { title: 'Health / IPD Claim Form', desc: 'For inpatient health claims. Must be signed by the treating doctor.', url: '/claims/forms' },
      { title: 'General Claim Form', desc: 'For miscellaneous, engineering, marine, and other insurance types.', url: '/claims/forms' },
    ],
  },
]

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        title="Downloads"
        subtitle="All policy documents, governance forms, claim forms, and investor documents in one place — available as downloadable PDFs"
        breadcrumbs={[{ label: 'Downloads' }]}
        badge="Documents & Forms"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">

            {/* Intro */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-4">Document Center</h2>
              <p className="text-gray-600 leading-relaxed">
                Browse and download official Shaheen Insurance documents organized by category. All files are in PDF format. If you require assistance, contact us at <a href="mailto:info@shaheeninsurance.com" className="text-gold hover:underline">info@shaheeninsurance.com</a>.
              </p>
            </motion.div>

            {/* Adobe Reader Note */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl"
            >
              <AlertCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-amber-800 text-sm font-semibold mb-1">Adobe Acrobat Reader Required</p>
                <p className="text-amber-700 text-xs leading-relaxed">
                  All documents are in PDF format. Please ensure you have Adobe Acrobat Reader installed. It is available free from <strong>adobe.com</strong>.
                </p>
              </div>
            </motion.div>

            {/* Categories */}
            <div className="space-y-8">
              {CATEGORIES.map(({ category, docs }, catIdx) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.15 + catIdx * 0.07 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="gold-line flex-1" />
                    <h2 className="font-display font-bold text-navy text-lg whitespace-nowrap px-2">{category}</h2>
                    <div className="gold-line flex-1" />
                  </div>

                  <div className="space-y-2">
                    {docs.map(({ title, desc, url }) => (
                      <div
                        key={title}
                        className="flex items-center gap-4 p-4 bg-surface rounded-xl border border-navy/5 hover:border-gold/30 hover:bg-gold/5 transition-all duration-200 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-navy/8 flex items-center justify-center shrink-0 group-hover:bg-navy transition-colors duration-200">
                          <FileText size={15} className="text-gold" />
                        </div>
                        <div className="flex-1">
                          <p className="text-navy text-sm font-semibold group-hover:text-gold transition-colors duration-200">{title}</p>
                          {desc && <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{desc}</p>}
                        </div>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                          className="flex items-center gap-1.5 bg-gold text-navy font-bold text-xs px-3 py-2 rounded-lg hover:bg-gold/85 transition-colors shrink-0 opacity-0 group-hover:opacity-100 duration-200"
                        >
                          <Download size={12} />
                          PDF
                        </a>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Request Physical Copies */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
              <div className="bg-navy rounded-2xl p-7 text-white">
                <h3 className="font-display font-bold text-xl mb-2">Request Physical Copies</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  If you are unable to download documents or require certified physical copies for official purposes, please contact us and we will arrange to deliver them to you.
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
