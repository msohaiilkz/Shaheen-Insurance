import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import { User, FileText, Download } from 'lucide-react'

const CANDIDATES = [
  { no: 1, name: 'Air Marshal Muhammad Arif Pervaiz (Retd.)', category: 'Independent Director' },
  { no: 2, name: 'Air Vice Marshal Salman Ahsan Bokahri (Retd.)', category: 'Independent Director' },
  { no: 3, name: 'Air Commodore Tausif Sadiq (Retd.)', category: 'Director' },
  { no: 4, name: 'Air Commodore Wasim Ahmed Khan (Retd.)', category: 'Director' },
  { no: 5, name: 'Mr. Adeel Ali', category: 'Director' },
  { no: 6, name: 'Ms. Farrah Azeem Khan', category: 'Independent Director' },
  { no: 7, name: 'Mr. Jehangir Shah', category: 'Independent Director' },
  { no: 8, name: 'Mr. Muhammad Qasim', category: 'Director' },
]

const DOCUMENTS = [
  {
    title: 'Notice u/s 159(4) Companies Act 2017 & Ballot Paper',
    desc: 'Official notice for election of directors with ballot paper for shareholders.',
  },
  {
    title: 'Notice of EOGM',
    desc: 'Notice of Extraordinary General Meeting convened for the election of directors.',
  },
  {
    title: 'SECP SRO Compliance Annexure I',
    desc: 'Compliance documentation per SECP SRO requirements for director elections.',
  },
  {
    title: 'SECP SRO Compliance Annexure II',
    desc: 'Additional compliance annexure as required by SECP regulations.',
  },
  {
    title: 'Proxy Form (English)',
    desc: 'Proxy form for shareholders unable to attend the EOGM in person — English version.',
  },
  {
    title: 'Proxy Form (Urdu)',
    desc: 'Proxy form for shareholders unable to attend the EOGM in person — Urdu version.',
  },
]

export default function ElectionPage() {
  return (
    <>
      <PageHero
        title="Election of Directors 2023"
        subtitle="Documentation and candidate profiles for the Election of Directors — Extraordinary General Meeting of Shaheen Insurance Company Limited"
        breadcrumbs={[{ label: 'Investor Information', path: '/investor' }, { label: 'Election of Directors 2023' }]}
        videoCategory="investor"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">

            {/* Visual Collage */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              className="grid grid-cols-3 gap-3 h-44 md:h-52">
              <div className="col-span-2 relative rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80&auto=format&fit=crop"
                  alt="Election of Directors" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                  <span className="bg-gold text-navy font-bold text-xs px-3 py-1 rounded-full">EOGM 2023</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">8 Candidates</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative rounded-2xl overflow-hidden flex-1">
                  <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&q=80&auto=format&fit=crop"
                    alt="Board" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-navy/40" />
                </div>
                <div className="bg-navy rounded-2xl flex-1 flex flex-col items-center justify-center p-3 text-center">
                  <div className="text-gold font-display font-bold text-lg">PSX</div>
                  <div className="text-white/60 text-[10px]">Listed SHNI</div>
                </div>
              </div>
            </motion.div>

            {/* Intro */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-4">Director Election Overview</h2>
              <p className="text-gray-600 leading-relaxed">
                Shaheen Insurance Company Limited (PSX: SHNI) held an Extraordinary General Meeting (EOGM) for the election of its Board of Directors in 2023, in compliance with the <strong className="text-navy">Companies Act 2017</strong> and SECP requirements. Below are the eight candidates who stood for election.
              </p>
            </motion.div>

            {/* Candidates */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <div className="gold-line mb-4" />
                <h2 className="font-display text-2xl font-bold text-navy mb-6">Candidates — 8 Nominees</h2>
              </motion.div>
              <div className="space-y-3">
                {CANDIDATES.map(({ no, name, category }, i) => (
                  <motion.div
                    key={no}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                    className="flex items-center gap-4 p-4 bg-surface rounded-xl border border-navy/8 hover:border-gold/30 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center shrink-0">
                      <span className="font-display font-bold text-gold text-sm">{no}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-navy text-sm group-hover:text-gold transition-colors duration-200">{name}</h3>
                      <span className="text-xs text-gray-400 mt-0.5">{category}</span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <User size={13} className="text-gold" />
                      <Link
                        to="/downloads"
                        className="text-xs text-gold font-semibold hover:underline"
                      >
                        Profile PDF
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Documents */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                <div className="gold-line mb-4" />
                <h2 className="font-display text-2xl font-bold text-navy mb-5">Election Documents</h2>
                <p className="text-gray-500 text-sm mb-5">All documents related to the 2023 Election of Directors are available for download. Shareholders may also request physical copies from our Company Secretary.</p>
              </motion.div>
              <div className="space-y-3">
                {DOCUMENTS.map(({ title, desc }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.45 + i * 0.06 }}
                  >
                    <Link
                      to="/downloads"
                      className="flex items-center gap-4 p-4 bg-surface rounded-xl border border-navy/5 hover:border-gold/30 hover:bg-gold/5 transition-all duration-200 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-navy/8 flex items-center justify-center shrink-0 group-hover:bg-navy transition-colors duration-200">
                        <FileText size={15} className="text-gold" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-navy text-sm font-semibold group-hover:text-gold transition-colors duration-200">{title}</h4>
                        <p className="text-gray-400 text-xs mt-0.5">{desc}</p>
                      </div>
                      <Download size={14} className="text-gray-400 group-hover:text-gold shrink-0 transition-colors duration-200" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Secretary */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
              <div className="bg-navy rounded-2xl p-7 text-white">
                <h3 className="font-display font-bold text-xl mb-2">Company Secretary</h3>
                <p className="text-gold font-semibold mb-3">Aqeel Anwar Kamal</p>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  For queries about the election process, proxy submission, or to request physical copies of any election documents, please contact the Company Secretary.
                </p>
                <a href="mailto:company.secretary@shaheeninsurance.com" className="text-gold text-sm font-semibold hover:underline">
                  company.secretary@shaheeninsurance.com
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
