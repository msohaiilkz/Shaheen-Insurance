import { Link } from 'react-router-dom'
import { TrendingUp, Award, Building2, Users, FileText, Download, Mail, Phone, ExternalLink, ArrowRight } from 'lucide-react'
import InnerPageHero from '../../components/layout/InnerPageHero'
import PageSEO from '../../components/shared/PageSEO'
import ScrollReveal from '../../components/shared/ScrollReveal'
import { StaggerReveal } from '../../components/shared/ScrollReveal'

const KEY_INFO = [
  { icon: TrendingUp, label: 'PSX Symbol', value: 'SHNI' },
  { icon: Award, label: 'PACRA Rating', value: 'A++ (Stable Outlook)' },
  { icon: Building2, label: 'Legal Advisor', value: 'Allied Law Group' },
  { icon: FileText, label: 'Auditors', value: 'BDO Ebrahim & Co. CAs' },
]

const INNER_PAGES = [
  { icon: FileText, title: 'Financial Reports', desc: 'Complete archive of annual reports, quarterly, and half-yearly financial statements from 2006 to present.', link: '/investor/reports' },
  { icon: Users, title: 'Investor Relations', desc: 'Shareholder information, AGM notices, share holding patterns, and investor communications.', link: '/investor/relations' },
  { icon: Award, title: 'Election of Directors 2023', desc: 'Candidate profiles, proxy forms, and documentation for the 2023 election of board directors.', link: '/investor/election' },
]

const DOCUMENTS = [
  { label: 'Consent Form for Electronic Transmission of Annual Report and Notice of AGM', url: 'http://www.shaheeninsurance.com/new/wp-content/uploads/2017/11/Consent-Form-for-Electronic-Transmission-of-Annual-Report.pdf' },
  { label: 'Election of Directors Documentation', url: 'http://www.shaheeninsurance.com/new/wp-content/uploads/2017/11/Election-of-Directors-Shaheen-Insurance.pdf' },
  { label: 'Financial Highlights — Last Ten Years', url: 'http://www.shaheeninsurance.com/new/wp-content/uploads/2019/04/Financial_Highlights_for_last_ten_years.pdf' },
  { label: 'Pattern of Share Holding (as of December 31, 2018)', url: 'http://www.shaheeninsurance.com/new/wp-content/uploads/2019/04/Pattern_of_Share_Holding_Dec-31-2018.pdf' },
  { label: 'Unclaimed Dividend Information', url: 'http://www.shaheeninsurance.com/new/wp-content/uploads/2019/04/SCIL UN-CLAIM DIVIDEND.pdf' },
  { label: 'Transfer Deed', url: 'http://www.shaheeninsurance.com/new/wp-content/uploads/2017/11/TRANSFER-DEED.pdf' },
  { label: 'Web Compliance Certificate', url: 'http://www.shaheeninsurance.com/new/wp-content/uploads/2019/04/Website_Compliance_Certificate.pdf' },
]

const InvestorSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Chart area */}
    <rect x="60" y="30" width="160" height="110" rx="6" fill="#D6A65A" opacity="0.07" stroke="#D6A65A" strokeWidth="1.2" />
    {/* Y axis gridlines */}
    <line x1="75" y1="55" x2="205" y2="55" stroke="#D6A65A" strokeWidth="0.5" opacity="0.2" />
    <line x1="75" y1="75" x2="205" y2="75" stroke="#D6A65A" strokeWidth="0.5" opacity="0.2" />
    <line x1="75" y1="95" x2="205" y2="95" stroke="#D6A65A" strokeWidth="0.5" opacity="0.2" />
    <line x1="75" y1="115" x2="205" y2="115" stroke="#D6A65A" strokeWidth="0.5" opacity="0.2" />
    {/* Bar chart */}
    <rect x="85" y="100" width="15" height="30" rx="2" fill="#D6A65A" opacity="0.3" />
    <rect x="108" y="85" width="15" height="45" rx="2" fill="#D6A65A" opacity="0.35" />
    <rect x="131" y="72" width="15" height="58" rx="2" fill="#D6A65A" opacity="0.4" />
    <rect x="154" y="62" width="15" height="68" rx="2" fill="#D6A65A" opacity="0.45" />
    <rect x="177" y="52" width="15" height="78" rx="2" fill="#D6A65A" opacity="0.55" />
    {/* Trend line */}
    <path d="M92 98 L115 82 L138 70 L161 58 L184 48" stroke="#D6A65A" strokeWidth="1.5" opacity="0.6" fill="none" strokeLinecap="round" />
    {/* Rising arrow */}
    <circle cx="257" cy="55" r="18" fill="#D6A65A" opacity="0.12" stroke="#D6A65A" strokeWidth="1" />
    <path d="M250 62 L257 44 L264 62" stroke="#D6A65A" strokeWidth="1.5" opacity="0.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    {/* Checkmark badge */}
    <circle cx="265" cy="25" r="12" fill="#D6A65A" opacity="0.5" stroke="#D6A65A" strokeWidth="1" />
    <path d="M262 28 L265 32 L270 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function InvestorPage() {
  return (
    <>
      <PageSEO
        title="Investor Information"
        description="Shaheen Insurance investor relations — PSX listed (SHNI), annual reports, financial statements, AGM notices, and shareholder information for PACRA A++ rated SICL."
        keywords="Shaheen Insurance investor, SHNI PSX, SICL annual report, insurance company stock Pakistan, shareholder information"
        path="/investor"
        schema={{ '@context': 'https://schema.org', '@type': 'WebPage', name: 'Investor Information — Shaheen Insurance', description: 'Investor relations page for PSX-listed Shaheen Insurance Company Limited.' }}
      />
      <InnerPageHero
        category="Investor Relations"
        title="Investor Information"
        subtitle="Financial transparency, regulatory compliance, and shareholder services — Shaheen Insurance listed on PSX (SHNI)"
        breadcrumbs={[{ label: 'Investor Information' }]}
        stats={[{ value: 'SHNI', label: 'PSX Symbol' }, { value: 'A++', label: 'PACRA Stable' }, { value: 'Rs. 600M', label: 'Paid-up Capital' }]}
        svgIllustration={<InvestorSVG />}
      />

      {/* Key Info */}
      <section className="py-20 md:py-28 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Overview</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight">Company Overview</h2>
            </div>
          </ScrollReveal>

          <StaggerReveal className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-10">
            {KEY_INFO.map(({ icon: Icon, label, value }) => (
              <div key={label} className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all text-center group">
                <div className="w-11 h-11 bg-navy rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/10 transition-colors">
                  <Icon size={20} className="text-gold" />
                </div>
                <div className="font-display font-bold text-gold text-sm mb-1">{value}</div>
                <div className="text-gray-400 text-xs">{label}</div>
              </div>
            ))}
          </StaggerReveal>

          <ScrollReveal>
            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm max-w-2xl mx-auto">
              <h3 className="font-semibold text-navy mb-3 text-sm">Share Registrar</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong className="text-navy">M/s Corplink (Pvt) Ltd</strong><br />
                Wings Arcade, 1-K, Commercial, Model Town, Lahore
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 md:py-28 bg-navy relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="investor-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,4 52,16 52,32 28,44 4,32 4,16" fill="none" stroke="#D6A65A" strokeWidth="1" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#investor-hex)" />
        </svg>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gold/6 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Resources</p>
              <h2 className="font-display font-black text-white text-4xl md:text-5xl uppercase leading-tight tracking-tight">Investor Resources</h2>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {INNER_PAGES.map(({ icon: Icon, title, desc, link }) => (
              <Link key={title} to={link}
                className="group flex flex-col h-full p-6 bg-white/6 border border-white/10 rounded-2xl hover:border-gold/30 hover:bg-white/10 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2 group-hover:text-gold transition-colors">{title}</h3>
                <p className="text-white/45 text-xs leading-relaxed flex-1 mb-4">{desc}</p>
                <div className="flex items-center gap-1 text-gold text-sm font-semibold">
                  View <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            ))}
          </StaggerReveal>

          <ScrollReveal>
            <div className="p-6 bg-gold/10 border border-gold/30 rounded-2xl max-w-lg mx-auto text-center">
              <h3 className="font-display font-bold text-white text-xl mb-1">Company Secretary</h3>
              <p className="text-gold font-semibold text-lg mb-4">Aqeel Anwar Kamal</p>
              <p className="text-white/60 text-sm mb-5 leading-relaxed">For investor queries, shareholder services, AGM notices, and corporate governance matters.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="mailto:company.secretary@shaheeninsurance.com" className="inline-flex items-center gap-2 bg-gold text-navy font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-gold/90 transition-colors">
                  <Mail size={14} />Email Secretary
                </a>
                <a href="tel:02132630370" className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-white/14 transition-colors">
                  <Phone size={14} />(92-21) 32630370-75
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Downloads</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-4">Downloadable Documents</h2>
              <p className="text-gray-500 text-sm">Key investor and shareholder documents available in PDF format.</p>
            </div>
          </ScrollReveal>
          <StaggerReveal className="space-y-3 mb-8">
            {DOCUMENTS.map(({ label, url }) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer" download
                className="flex items-center gap-3 p-4 bg-[#f8f7f5] rounded-xl border border-gray-100 hover:border-gold/30 hover:bg-gold/5 transition-all duration-200 group">
                <FileText size={15} className="text-gold shrink-0" />
                <span className="text-navy text-sm flex-1 group-hover:text-gold transition-colors duration-200">{label}</span>
                <Download size={13} className="text-gray-400 group-hover:text-gold shrink-0 transition-colors duration-200" />
              </a>
            ))}
          </StaggerReveal>
          <ScrollReveal>
            <div className="p-5 bg-[#f8f7f5] border border-gray-100 rounded-2xl">
              <h3 className="font-semibold text-navy mb-2">SECP Investor Complaints</h3>
              <p className="text-gray-500 text-sm mb-3 leading-relaxed">Investors may file complaints directly with the Securities and Exchange Commission of Pakistan (SECP) through their official complaint portal.</p>
              <a href="http://secp.gov.pk/ComplaintForm1.asp" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:underline">
                <ExternalLink size={14} />SECP Investor Complaint Form
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
