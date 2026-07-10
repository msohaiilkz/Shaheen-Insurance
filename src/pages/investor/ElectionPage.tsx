import { Link } from 'react-router-dom'
import { User, FileText, Download, Mail } from 'lucide-react'
import InnerPageHero from '../../components/layout/InnerPageHero'
import PageSEO from '../../components/shared/PageSEO'
import ScrollReveal from '../../components/shared/ScrollReveal'
import { StaggerReveal } from '../../components/shared/ScrollReveal'
import { useJourney } from '../../context/JourneyContext'
import { takafulize } from '../../lib/wording'

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
  { title: 'Notice u/s 159(4) Companies Act 2017 & Ballot Paper', desc: 'Official notice for election of directors with ballot paper for shareholders.' },
  { title: 'Notice of EOGM', desc: 'Notice of Extraordinary General Meeting convened for the election of directors.' },
  { title: 'SECP SRO Compliance Annexure I', desc: 'Compliance documentation per SECP SRO requirements for director elections.' },
  { title: 'SECP SRO Compliance Annexure II', desc: 'Additional compliance annexure as required by SECP regulations.' },
  { title: 'Proxy Form (English)', desc: 'Proxy form for shareholders unable to attend the EOGM in person — English version.' },
  { title: 'Proxy Form (Urdu)', desc: 'Proxy form for shareholders unable to attend the EOGM in person — Urdu version.' },
]

const ElectionSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Board table */}
    <rect x="70" y="85" width="160" height="55" rx="6" fill="#D6A65A" opacity="0.08" stroke="#D6A65A" strokeWidth="1.2" />
    {/* 8 seats around the table */}
    {[90, 118, 146, 174, 202].map((x, i) => (
      <g key={i}>
        <circle cx={x} cy="75" r="8" fill="#D6A65A" opacity={i < 3 ? 0.45 : 0.3} stroke="#D6A65A" strokeWidth="0.8" />
        <circle cx={x} cy="75" r="3.5" fill="#D6A65A" opacity={i < 3 ? 0.7 : 0.5} />
      </g>
    ))}
    {[100, 160, 210].map((x, i) => (
      <g key={i}>
        <circle cx={x} cy="150" r="8" fill="#D6A65A" opacity={0.25} stroke="#D6A65A" strokeWidth="0.8" />
        <circle cx={x} cy="150" r="3.5" fill="#D6A65A" opacity={0.45} />
      </g>
    ))}
    {/* Voting checkmark */}
    <circle cx="255" cy="65" r="20" fill="#D6A65A" opacity="0.1" stroke="#D6A65A" strokeWidth="1" />
    <path d="M247 65 L253 72 L264 56" stroke="#D6A65A" strokeWidth="2" opacity="0.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* PSX tag */}
    <rect x="65" y="35" width="45" height="18" rx="4" fill="#D6A65A" opacity="0.15" stroke="#D6A65A" strokeWidth="0.8" />
    <text x="74" y="48" fill="#D6A65A" fontSize="8" fontFamily="sans-serif" opacity="0.7">EOGM</text>
    {/* Checkmark badge */}
    <circle cx="265" cy="25" r="12" fill="#D6A65A" opacity="0.5" stroke="#D6A65A" strokeWidth="1" />
    <path d="M262 28 L265 32 L270 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function ElectionPage() {
  const { isTakaful } = useJourney()
  return (
    <>
      <PageSEO
        title="Election of Directors 2023"
        description="Documentation and candidate profiles for the Election of Directors — Extraordinary General Meeting of Shaheen Insurance Company Limited (PSX: SHNI)."
        keywords="Shaheen Insurance director election, SHNI EOGM, board directors Pakistan insurance"
        path="/investor/election"
      />
      <InnerPageHero
        category="Investor Relations"
        title="Election of Directors 2023"
        subtitle={takafulize("Documentation and candidate profiles for the Election of Directors — Extraordinary General Meeting of Shaheen Insurance Company Limited", isTakaful)}
        breadcrumbs={[{ label: 'Investor Information', path: '/investor' }, { label: 'Election of Directors 2023' }]}
        stats={[{ value: '8', label: 'Candidates' }, { value: 'EOGM', label: '2023' }, { value: 'PSX', label: 'Listed SHNI' }]}
        svgIllustration={<ElectionSVG />}
      />

      {/* Overview */}
      <section className="py-20 md:py-28 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Overview</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-4">Director Election Overview</h2>
              <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
                {takafulize('Shaheen Insurance Company Limited (PSX: SHNI) held an Extraordinary General Meeting (EOGM) for the election of its Board of Directors in 2023, in compliance with the ', isTakaful)}<strong className="text-navy">Companies Act 2017</strong> and SECP requirements. Below are the eight candidates who stood for election.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gold/25" />
                <h3 className="font-display font-bold text-navy text-lg whitespace-nowrap px-3">8 Nominees — Board of Directors</h3>
                <div className="h-px flex-1 bg-gold/25" />
              </div>
              <StaggerReveal className="space-y-3">
                {CANDIDATES.map(({ no, name, category }) => (
                  <div key={no} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-gold/30 hover:shadow-sm transition-all duration-200 group">
                    <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center shrink-0">
                      <span className="font-display font-bold text-gold text-sm">{no}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-navy text-sm group-hover:text-gold transition-colors duration-200">{name}</h3>
                      <span className={`text-xs mt-0.5 font-medium ${category === 'Independent Director' ? 'text-gold' : 'text-gray-400'}`}>{category}</span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <User size={13} className="text-gold" />
                      <Link to="/downloads" className="text-xs text-gold font-semibold hover:underline">Profile PDF</Link>
                    </div>
                  </div>
                ))}
              </StaggerReveal>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20 md:py-28 bg-light-blue relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="election-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,4 52,16 52,32 28,44 4,32 4,16" fill="none" stroke="#D6A65A" strokeWidth="1" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#election-hex)" />
        </svg>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gold/6 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-gold-dark text-xs font-bold tracking-[0.25em] uppercase mb-3">Documents</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-4">Election Documents</h2>
              <p className="text-gray-500 text-sm">All documents related to the 2023 Election of Directors. Shareholders may also request physical copies from our Company Secretary.</p>
            </div>
          </ScrollReveal>
          <StaggerReveal className="space-y-3 mb-10">
            {DOCUMENTS.map(({ title, desc }) => (
              <Link key={title} to="/downloads"
                className="flex items-center gap-4 p-4 bg-white border border-navy/10 rounded-xl shadow-card hover:border-gold/30 hover:bg-white/10 transition-all duration-200 group">
                <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                  <FileText size={15} className="text-gold" />
                </div>
                <div className="flex-1">
                  <h4 className="text-navy text-sm font-semibold group-hover:text-gold transition-colors duration-200">{title}</h4>
                  <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
                </div>
                <Download size={14} className="text-gray-500 group-hover:text-gold shrink-0 transition-colors duration-200" />
              </Link>
            ))}
          </StaggerReveal>

          <ScrollReveal>
            <div className="p-6 bg-gold/10 border border-gold/30 rounded-2xl max-w-lg mx-auto text-center">
              <h3 className="font-display font-bold text-navy text-xl mb-1">Company Secretary</h3>
              <p className="text-gold-dark font-semibold mb-3">Aqeel Anwar Kamal</p>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                For queries about the election process, proxy submission, or to request physical copies of any election documents.
              </p>
              <a href="mailto:company.secretary@shaheeninsurance.com" className="inline-flex items-center gap-2 bg-navy text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-navy/90 transition-colors">
                <Mail size={14} />company.secretary@shaheeninsurance.com
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
