import { FileText, Download, AlertCircle, Mail } from 'lucide-react'
import InnerPageHero from '../components/layout/InnerPageHero'
import PageSEO from '../components/shared/PageSEO'
import ScrollReveal from '../components/shared/ScrollReveal'
import { StaggerReveal } from '../components/shared/ScrollReveal'

type DocItem = { title: string; desc?: string; url: string }
type DocCategory = { category: string; icon: React.ElementType; docs: DocItem[] }

const CATEGORIES: DocCategory[] = [
  {
    category: 'Policy Documents', icon: FileText,
    docs: [
      { title: 'WTO PTF Policies (Waqf Rules)', desc: 'Official Takaful Policy Document governing Window Takaful Operations — Waqf Fund Rules and Participant Takaful Fund (PTF) structure.', url: 'http://www.shaheeninsurance.com/new/wp-content/uploads/2017/09/WTO-PTF-Policies-Waqf-Rules.pdf' },
    ],
  },
  {
    category: 'Corporate Governance', icon: FileText,
    docs: [
      { title: 'Profile of Candidates — Election of Directors', desc: 'Individual candidate profiles for the election of directors.', url: 'http://shaheeninsurance.com/pdf/Profile%20of%20Candidates%20-%20Election%20of%20Directors.pdf' },
      { title: 'Web Compliance Certificate', desc: 'SECP-mandated web compliance certificate for PSX-listed companies.', url: 'http://www.shaheeninsurance.com/new/wp-content/uploads/2019/04/Website_Compliance_Certificate.pdf' },
    ],
  },
  {
    category: 'Administrative Forms', icon: FileText,
    docs: [
      { title: 'Request Form for Printed Annual Report', desc: 'Use this form to request a physical copy of the Shaheen Insurance Annual Report.', url: 'http://shaheeninsurance.com/pdf/Request%20Form%20for%20Printed%20Annual%20Report.pdf' },
      { title: 'Consent Form for Electronic Transmission of Annual Report and Notice of AGM', desc: 'Provide your consent to receive annual reports and AGM notices electronically.', url: 'http://www.shaheeninsurance.com/new/wp-content/uploads/2017/11/Consent-Form-for-Electronic-Transmission-of-Annual-Report.pdf' },
      { title: 'Transfer Deed', desc: 'Standard share transfer deed for Shaheen Insurance shareholders.', url: 'http://www.shaheeninsurance.com/new/wp-content/uploads/2017/11/TRANSFER-DEED.pdf' },
    ],
  },
  {
    category: 'Insurance Application Forms', icon: FileText,
    docs: [
      { title: "Shaheen's Secure Travel Application Form", desc: 'Application form for Shaheen Secure Travel Insurance — applicable for international travel.', url: 'http://shaheeninsurance.com/pdf/SecureTravelApplicationForm.pdf' },
    ],
  },
  {
    category: 'Investor Relations', icon: FileText,
    docs: [
      { title: 'Pattern of Share Holding (as of December 31, 2018)', desc: 'Shareholding pattern disclosing major shareholders and categories as of 31 December 2018.', url: 'http://www.shaheeninsurance.com/new/wp-content/uploads/2019/04/Pattern_of_Share_Holding_Dec-31-2018.pdf' },
      { title: 'Financial Highlights — Last Ten Years', desc: 'Historical financial highlights covering a ten-year period for performance comparison.', url: 'http://www.shaheeninsurance.com/new/wp-content/uploads/2019/04/Financial_Highlights_for_last_ten_years.pdf' },
      { title: 'Unclaimed Dividend Information', desc: 'Details of unclaimed dividends — for shareholders who have not yet received their dividend payments.', url: 'http://www.shaheeninsurance.com/new/wp-content/uploads/2019/04/SCIL UN-CLAIM DIVIDEND.pdf' },
      { title: 'Election of Directors Documentation', desc: 'Official documentation for the election of directors process.', url: 'http://www.shaheeninsurance.com/new/wp-content/uploads/2017/11/Election-of-Directors-Shaheen-Insurance.pdf' },
    ],
  },
  {
    category: 'Claim Forms', icon: FileText,
    docs: [
      { title: 'Motor / Auto Claim Form', desc: 'For motor vehicle claims — accidental damage, theft, fire, and third-party liability.', url: '/claims/forms' },
      { title: 'Fire Claim Form', desc: 'For fire, explosion, riot, strike, and allied perils claims.', url: '/claims/forms' },
      { title: 'Health / IPD Claim Form', desc: 'For inpatient health claims. Must be signed by the treating doctor.', url: '/claims/forms' },
      { title: 'General Claim Form', desc: 'For miscellaneous, engineering, marine, and other insurance types.', url: '/claims/forms' },
    ],
  },
]

const DownloadsSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Stack of documents */}
    <rect x="90" y="25" width="80" height="105" rx="5" fill="#D6A65A" opacity="0.07" stroke="#D6A65A" strokeWidth="1.5" />
    <rect x="100" y="45" width="60" height="6" rx="2" fill="#D6A65A" opacity="0.3" />
    <rect x="100" y="58" width="48" height="5" rx="2" fill="#D6A65A" opacity="0.2" />
    <rect x="100" y="69" width="52" height="5" rx="2" fill="#D6A65A" opacity="0.2" />
    <rect x="100" y="80" width="40" height="5" rx="2" fill="#D6A65A" opacity="0.15" />
    <rect x="100" y="95" width="55" height="5" rx="2" fill="#D6A65A" opacity="0.2" />
    <rect x="100" y="106" width="45" height="5" rx="2" fill="#D6A65A" opacity="0.15" />
    {/* Download arrow */}
    <circle cx="215" cy="90" r="30" fill="#D6A65A" opacity="0.08" stroke="#D6A65A" strokeWidth="1.2" />
    <path d="M215 72 L215 95 M205 85 L215 97 L225 85" stroke="#D6A65A" strokeWidth="2" opacity="0.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="203" y="100" width="24" height="4" rx="1.5" fill="#D6A65A" opacity="0.4" />
    {/* Checkmark badge */}
    <circle cx="265" cy="25" r="12" fill="#D6A65A" opacity="0.5" stroke="#D6A65A" strokeWidth="1" />
    <path d="M262 28 L265 32 L270 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function DownloadsPage() {
  return (
    <>
      <PageSEO
        title="Downloads"
        description="Download Shaheen Insurance policy documents, claim forms, application forms, and wordings. All documents available as PDF for easy access."
        keywords="Shaheen Insurance forms download, policy wording, claim forms PDF, insurance application form Pakistan"
        path="/downloads"
      />
      <InnerPageHero
        category="Document Center"
        title="Downloads"
        subtitle="All policy documents, governance forms, claim forms, and investor documents in one place — available as downloadable PDFs"
        breadcrumbs={[{ label: 'Downloads' }]}
        stats={[{ value: '6', label: 'Categories' }, { value: '15+', label: 'Documents' }, { value: 'PDF', label: 'Format' }]}
        svgIllustration={<DownloadsSVG />}
      />

      {/* Document Center */}
      <section className="py-20 md:py-28 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Documents</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-4">Document Center</h2>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xl mx-auto">
                Browse and download official Shaheen Insurance documents organized by category. All files are in PDF format. If you require assistance, contact us at{' '}
                <a href="mailto:info@shaheeninsurance.com" className="text-gold hover:underline">info@shaheeninsurance.com</a>.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex items-start gap-3 p-5 bg-amber-50 border border-amber-200 rounded-xl mb-12 max-w-3xl mx-auto">
              <AlertCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-amber-800 text-sm font-semibold mb-1">Adobe Acrobat Reader Required</p>
                <p className="text-amber-700 text-xs leading-relaxed">All documents are in PDF format. Please ensure you have Adobe Acrobat Reader installed. It is available free from <strong>adobe.com</strong>.</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            {CATEGORIES.map(({ category, docs }) => (
              <ScrollReveal key={category} delay={0.05}>
                <div className="flex items-center gap-4 mb-5">
                  <div className="h-px flex-1 bg-gold/25" />
                  <h2 className="font-display font-bold text-navy text-lg whitespace-nowrap px-3">{category}</h2>
                  <div className="h-px flex-1 bg-gold/25" />
                </div>
                <StaggerReveal className="space-y-3">
                  {docs.map(({ title, desc, url }) => (
                    <div key={title} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-gold/30 hover:shadow-sm transition-all duration-200 group">
                      <div className="w-10 h-10 rounded-xl bg-navy/8 flex items-center justify-center shrink-0 group-hover:bg-navy transition-colors duration-200">
                        <FileText size={16} className="text-gold" />
                      </div>
                      <div className="flex-1">
                        <p className="text-navy text-sm font-semibold group-hover:text-gold transition-colors duration-200">{title}</p>
                        {desc && <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{desc}</p>}
                      </div>
                      <a href={url} target="_blank" rel="noopener noreferrer" download
                        className="flex items-center gap-1.5 bg-gold text-navy font-bold text-xs px-3 py-2 rounded-lg hover:bg-gold/85 transition-colors shrink-0">
                        <Download size={12} />PDF
                      </a>
                    </div>
                  ))}
                </StaggerReveal>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="downloads-cg" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#D6A65A" strokeWidth="0.8" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#downloads-cg)" />
        </svg>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <ScrollReveal>
          <div className="relative z-10 max-w-2xl mx-auto px-5 text-center">
            <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">Need More?</p>
            <h2 className="font-display font-black text-white text-3xl md:text-4xl uppercase leading-tight mb-4">
              Request <span className="text-gold">Physical Copies</span>
            </h2>
            <p className="text-white/50 mb-8 text-sm leading-relaxed">If you are unable to download documents or require certified physical copies for official purposes, please contact us and we will arrange delivery.</p>
            <div className="flex justify-center gap-3 flex-wrap">
              <a href="mailto:info@shaheeninsurance.com" className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-8 py-4 rounded-xl text-sm hover:bg-gold/90 transition-colors">
                <Mail size={15} /> Email Us
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
