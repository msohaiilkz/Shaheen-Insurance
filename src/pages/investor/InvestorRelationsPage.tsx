import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import { FileText, Download, Mail, Phone, ExternalLink, TrendingUp, Users, Award } from 'lucide-react'

const SHAREHOLDER_DOCS = [
  { title: 'Pattern of Share Holding (December 31, 2018)', desc: 'Disclosure of major shareholders and shareholder categories.' },
  { title: 'Unclaimed Dividend Information', desc: 'For shareholders who have not yet collected their dividend payments.' },
  { title: 'Transfer Deed', desc: 'Standard share transfer documentation for SHNI shareholders.' },
  { title: 'Consent Form for Electronic Transmission', desc: 'Opt in to receive annual reports and AGM notices electronically.' },
  { title: 'Request Form for Printed Annual Report', desc: 'Request a physical copy of the Annual Report by mail.' },
]

const KEY_FACTS = [
  { icon: TrendingUp, label: 'PSX Symbol', value: 'SHNI' },
  { icon: Award, label: 'PACRA Rating', value: 'A++ Stable' },
  { icon: Users, label: 'Share Registrar', value: 'M/s Corplink (Pvt) Ltd, Lahore' },
  { icon: FileText, label: 'Auditors', value: 'BDO Ebrahim & Co. CAs' },
]

export default function InvestorRelationsPage() {
  return (
    <>
      <PageHero
        title="Investor Relations"
        subtitle="Shareholder services, corporate disclosures, and investor communications for Shaheen Insurance (PSX: SHNI)"
        breadcrumbs={[{ label: 'Investor Information', path: '/investor' }, { label: 'Investor Relations' }]}
        videoCategory="investor"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">

            {/* Visual Collage */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              className="grid grid-cols-3 gap-3 h-44 md:h-52">
              <div className="col-span-2 relative rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80&auto=format&fit=crop"
                  alt="Investor Relations" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                  <span className="bg-gold text-navy font-bold text-xs px-3 py-1 rounded-full">PSX: SHNI</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">Shareholders</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative rounded-2xl overflow-hidden flex-1">
                  <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=80&auto=format&fit=crop"
                    alt="Investor" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-navy/40" />
                </div>
                <div className="bg-gold rounded-2xl flex-1 flex flex-col items-center justify-center p-3 text-center">
                  <div className="text-navy font-display font-bold text-lg">A++</div>
                  <div className="text-navy/70 text-[10px]">PACRA Stable</div>
                </div>
              </div>
            </motion.div>

            {/* Intro */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-4">Shareholder Information</h2>
              <p className="text-gray-600 leading-relaxed">
                Shaheen Insurance Company Limited (PSX: SHNI) is committed to maintaining transparent and open communication with its shareholders and the investing public. This page provides key investor information, shareholder documents, and contact details for investor queries.
              </p>
            </motion.div>

            {/* Key Facts */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="grid grid-cols-2 gap-4">
                {KEY_FACTS.map(({ icon: Icon, label, value }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                    className="p-5 bg-surface rounded-2xl border border-navy/8"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={15} className="text-gold" />
                      <span className="text-xs text-gray-400 font-medium">{label}</span>
                    </div>
                    <p className="font-display font-bold text-navy text-base">{value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Share Registrar */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-2xl font-bold text-navy mb-4">Share Registrar</h2>
              <div className="p-6 bg-navy text-white rounded-2xl">
                <h3 className="font-display font-bold text-xl text-gold mb-2">M/s Corplink (Pvt) Ltd</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Wings Arcade, 1-K, Commercial, Model Town, Lahore
                </p>
                <p className="text-white/60 text-xs leading-relaxed">
                  For share transfer requests, dividend payment queries, change of address, and shareholder register updates — please contact M/s Corplink directly or through our Company Secretary.
                </p>
              </div>
            </motion.div>

            {/* Shareholder Documents */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}>
                <div className="gold-line mb-4" />
                <h2 className="font-display text-2xl font-bold text-navy mb-5">Shareholder Documents</h2>
              </motion.div>
              <div className="space-y-2">
                {SHAREHOLDER_DOCS.map(({ title, desc }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.3 + i * 0.06 }}
                  >
                    <Link
                      to="/downloads"
                      className="flex items-center gap-4 p-4 bg-surface rounded-xl border border-navy/5 hover:border-gold/30 hover:bg-gold/5 transition-all duration-200 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-navy/8 flex items-center justify-center shrink-0 group-hover:bg-navy transition-colors duration-200">
                        <FileText size={15} className="text-gold" />
                      </div>
                      <div className="flex-1">
                        <p className="text-navy text-sm font-semibold group-hover:text-gold transition-colors duration-200">{title}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{desc}</p>
                      </div>
                      <Download size={14} className="text-gray-400 group-hover:text-gold shrink-0 transition-colors duration-200" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Company Secretary Contact */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-2xl font-bold text-navy mb-4">Investor Contact</h2>
              <div className="p-6 bg-surface rounded-2xl border border-navy/8">
                <p className="font-semibold text-navy mb-0.5">Company Secretary</p>
                <p className="text-gold font-bold text-lg mb-4">Aqeel Anwar Kamal</p>
                <div className="space-y-2">
                  <a href="mailto:company.secretary@shaheeninsurance.com" className="flex items-center gap-2 text-gray-600 text-sm hover:text-gold transition-colors">
                    <Mail size={14} className="text-gold" />
                    company.secretary@shaheeninsurance.com
                  </a>
                  <a href="tel:02132630370" className="flex items-center gap-2 text-gray-600 text-sm hover:text-gold transition-colors">
                    <Phone size={14} className="text-gold" />
                    (92-21) 32630370-75
                  </a>
                </div>
              </div>
            </motion.div>

            {/* SECP Link */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }}>
              <div className="p-5 bg-surface border border-navy/8 rounded-2xl">
                <h3 className="font-semibold text-navy mb-2">SECP Investor Complaints</h3>
                <p className="text-gray-500 text-sm mb-3 leading-relaxed">
                  Investors may submit formal complaints to the Securities and Exchange Commission of Pakistan via their official complaints portal.
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
