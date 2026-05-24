import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import { TrendingUp, Award, Building2, Users, FileText, Download, Mail, Phone, ExternalLink, ArrowRight } from 'lucide-react'

const KEY_INFO = [
  { icon: TrendingUp, label: 'PSX Symbol', value: 'SHNI' },
  { icon: Award, label: 'PACRA Rating', value: 'A++ (Stable Outlook)' },
  { icon: Building2, label: 'Legal Advisor', value: 'Allied Law Group' },
  { icon: FileText, label: 'Auditors', value: 'BDO Ebrahim & Co. CAs' },
]

const INNER_PAGES = [
  {
    icon: FileText,
    title: 'Financial Reports',
    desc: 'Complete archive of annual reports, quarterly, and half-yearly financial statements from 2006 to present.',
    link: '/investor/reports',
  },
  {
    icon: Users,
    title: 'Investor Relations',
    desc: 'Shareholder information, AGM notices, share holding patterns, and investor communications.',
    link: '/investor/relations',
  },
  {
    icon: Award,
    title: 'Election of Directors 2023',
    desc: 'Candidate profiles, proxy forms, and documentation for the 2023 election of board directors.',
    link: '/investor/election',
  },
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

export default function InvestorPage() {
  return (
    <>
      <PageHero
        title="Investor Information"
        subtitle="Financial transparency, regulatory compliance, and shareholder services — Shaheen Insurance listed on PSX (SHNI)"
        breadcrumbs={[{ label: 'Investor Information' }]}
        badge="Investor Relations"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">

            {/* Key Stats */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-6">Company Overview</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {KEY_INFO.map(({ icon: Icon, label, value }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 + i * 0.07 }}
                    className="bg-navy text-white rounded-2xl p-4 text-center"
                  >
                    <Icon size={18} className="text-gold mx-auto mb-2" />
                    <div className="font-display font-bold text-gold text-sm mb-1">{value}</div>
                    <div className="text-white/50 text-xs">{label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Share Registrar */}
              <div className="p-5 bg-surface rounded-2xl border border-navy/8">
                <h3 className="font-semibold text-navy mb-3 text-sm">Share Registrar</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong className="text-navy">M/s Corplink (Pvt) Ltd</strong><br />
                  Wings Arcade, 1-K, Commercial, Model Town, Lahore
                </p>
              </div>
            </motion.div>

            {/* Company Secretary */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="bg-navy rounded-2xl p-7 text-white">
                <h3 className="font-display font-bold text-xl mb-1">Company Secretary</h3>
                <p className="text-gold font-semibold text-lg mb-4">Aqeel Anwar Kamal</p>
                <p className="text-white/70 text-sm mb-5 leading-relaxed">
                  For investor queries, shareholder services, AGM notices, and corporate governance matters, please contact our Company Secretary directly.
                </p>
                <div className="space-y-2">
                  <a href="mailto:company.secretary@shaheeninsurance.com" className="flex items-center gap-2 text-white/80 text-sm hover:text-gold transition-colors">
                    <Mail size={14} className="text-gold" />
                    company.secretary@shaheeninsurance.com
                  </a>
                  <a href="tel:02132630370" className="flex items-center gap-2 text-white/80 text-sm hover:text-gold transition-colors">
                    <Phone size={14} className="text-gold" />
                    (92-21) 32630370-75
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Inner Pages */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
                <div className="gold-line mb-4" />
                <h2 className="font-display text-2xl font-bold text-navy mb-6">Investor Resources</h2>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {INNER_PAGES.map(({ icon: Icon, title, desc, link }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
                  >
                    <Link
                      to={link}
                      className="group flex flex-col h-full p-6 bg-surface rounded-2xl border border-navy/8 hover:border-gold/40 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-11 h-11 rounded-xl bg-navy/8 flex items-center justify-center mb-4 group-hover:bg-navy transition-colors duration-300">
                        <Icon size={20} className="text-navy group-hover:text-gold transition-colors duration-300" />
                      </div>
                      <h3 className="font-display font-bold text-navy text-base mb-2">{title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{desc}</p>
                      <div className="flex items-center gap-1 text-gold text-sm font-semibold">
                        View <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Downloadable Documents */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                <div className="gold-line mb-4" />
                <h2 className="font-display text-2xl font-bold text-navy mb-5">Downloadable Documents</h2>
              </motion.div>
              <div className="space-y-2">
                {DOCUMENTS.map(({ label, url }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.35 + i * 0.05 }}
                  >
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="flex items-center gap-3 p-4 bg-surface rounded-xl border border-navy/5 hover:border-gold/30 hover:bg-gold/5 transition-all duration-200 group"
                    >
                      <FileText size={15} className="text-gold shrink-0" />
                      <span className="text-navy text-sm flex-1 group-hover:text-gold transition-colors duration-200">{label}</span>
                      <Download size={13} className="text-gray-400 group-hover:text-gold shrink-0 transition-colors duration-200" />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* SECP Complaint Link */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
              <div className="p-5 bg-surface border border-navy/8 rounded-2xl">
                <h3 className="font-semibold text-navy mb-2">SECP Investor Complaints</h3>
                <p className="text-gray-500 text-sm mb-3 leading-relaxed">
                  Investors may file complaints directly with the Securities and Exchange Commission of Pakistan (SECP) through their official complaint portal.
                </p>
                <a
                  href="http://secp.gov.pk/ComplaintForm1.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:underline"
                >
                  <ExternalLink size={14} />
                  SECP Investor Complaint Form
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
