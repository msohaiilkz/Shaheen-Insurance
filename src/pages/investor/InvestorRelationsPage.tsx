import { Link } from 'react-router-dom'
import { FileText, Download, Mail, Phone, ExternalLink, TrendingUp, Users, Award, Building2 } from 'lucide-react'
import InnerPageHero from '../../components/layout/InnerPageHero'
import PageSEO from '../../components/shared/PageSEO'
import ScrollReveal from '../../components/shared/ScrollReveal'
import { StaggerReveal } from '../../components/shared/ScrollReveal'
import { useJourney } from '../../context/JourneyContext'
import { takafulize } from '../../lib/wording'

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

const RelationsSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Shareholders network */}
    <circle cx="160" cy="90" r="25" fill="#D6A65A" opacity="0.15" stroke="#D6A65A" strokeWidth="1.5" />
    <circle cx="160" cy="90" r="8" fill="#D6A65A" opacity="0.4" />
    {/* Satellite nodes */}
    {[[80, 55], [240, 55], [65, 130], [255, 130], [160, 160]].map(([cx, cy], i) => (
      <g key={i}>
        <line x1="160" y1="90" x2={cx} y2={cy} stroke="#D6A65A" strokeWidth="0.8" opacity="0.2" strokeDasharray="4,3" />
        <circle cx={cx} cy={cy} r="10" fill="#D6A65A" opacity={i === 0 ? 0.35 : 0.2} stroke="#D6A65A" strokeWidth="0.8" />
        <circle cx={cx} cy={cy} r="4" fill="#D6A65A" opacity={i === 0 ? 0.7 : 0.45} />
      </g>
    ))}
    {/* PSX ticker label */}
    <rect x="140" y="78" width="40" height="12" rx="3" fill="#D6A65A" opacity="0.3" />
    <text x="152" y="88" fill="white" fontSize="7" fontFamily="sans-serif" opacity="0.8">SHNI</text>
    {/* Checkmark badge */}
    <circle cx="265" cy="25" r="12" fill="#D6A65A" opacity="0.5" stroke="#D6A65A" strokeWidth="1" />
    <path d="M262 28 L265 32 L270 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function InvestorRelationsPage() {
  const { isTakaful } = useJourney()
  return (
    <>
      <PageSEO
        title="Investor Relations"
        description="Shaheen Insurance investor relations — shareholder services, corporate disclosures, AGM notices, and investor communications for PSX listed SHNI."
        keywords="Shaheen Insurance shareholder, SHNI investor, PSX SHNI, insurance company shareholder Pakistan"
        path="/investor/relations"
      />
      <InnerPageHero
        category="Investor Relations"
        title="Investor Relations"
        subtitle={takafulize("Shareholder services, corporate disclosures, and investor communications for Shaheen Insurance (PSX: SHNI)", isTakaful)}
        breadcrumbs={[{ label: 'Investor Information', path: '/investor' }, { label: 'Investor Relations' }]}
        stats={[{ value: 'SHNI', label: 'PSX Symbol' }, { value: 'A++', label: 'PACRA Stable' }, { value: 'Rs. 600M', label: 'Paid-up Capital' }]}
        svgIllustration={<RelationsSVG />}
      />

      {/* Key Facts */}
      <section className="py-20 md:py-28 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Shareholders</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-4">Shareholder Information</h2>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xl mx-auto">
                {takafulize('Shaheen Insurance Company Limited (PSX: SHNI) is committed to maintaining transparent and open communication with its shareholders and the investing public.', isTakaful)}
              </p>
            </div>
          </ScrollReveal>

          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {KEY_FACTS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="p-5 bg-white rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={15} className="text-gold" />
                  <span className="text-xs text-gray-400 font-medium">{label}</span>
                </div>
                <p className="font-display font-bold text-navy text-base">{value}</p>
              </div>
            ))}
          </StaggerReveal>

          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              <div className="p-7 bg-navy rounded-2xl">
                <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center mb-4">
                  <Building2 size={18} className="text-gold" />
                </div>
                <h3 className="font-display font-bold text-gold text-xl mb-2">M/s Corplink (Pvt) Ltd</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">Wings Arcade, 1-K, Commercial, Model Town, Lahore</p>
                <p className="text-white/50 text-xs leading-relaxed">For share transfer requests, dividend payment queries, change of address, and shareholder register updates — please contact M/s Corplink directly or through our Company Secretary.</p>
              </div>

              <div className="p-7 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-display font-bold text-navy text-xl mb-1">Company Secretary</h3>
                <p className="text-gold font-bold text-lg mb-4">Aqeel Anwar Kamal</p>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">For investor queries, AGM notices, and corporate governance matters.</p>
                <div className="space-y-3">
                  <a href="mailto:company.secretary@shaheeninsurance.com" className="flex items-center gap-2 text-gray-600 text-sm hover:text-gold transition-colors">
                    <Mail size={14} className="text-gold" />company.secretary@shaheeninsurance.com
                  </a>
                  <a href="tel:02132630370" className="flex items-center gap-2 text-gray-600 text-sm hover:text-gold transition-colors">
                    <Phone size={14} className="text-gold" />(92-21) 32630370-75
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20 md:py-28 bg-light-blue relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="ir-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,4 52,16 52,32 28,44 4,32 4,16" fill="none" stroke="#D6A65A" strokeWidth="1" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#ir-hex)" />
        </svg>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gold/6 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-gold-dark text-xs font-bold tracking-[0.25em] uppercase mb-3">Documents</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-4">Shareholder Documents</h2>
              <p className="text-gray-500 text-sm">{takafulize('Key documents for Shaheen Insurance shareholders, available in PDF format.', isTakaful)}</p>
            </div>
          </ScrollReveal>
          <StaggerReveal className="space-y-3 mb-10">
            {SHAREHOLDER_DOCS.map(({ title, desc }) => (
              <Link key={title} to="/downloads"
                className="flex items-center gap-4 p-4 bg-white border border-navy/10 rounded-xl shadow-card hover:border-gold/30 hover:bg-white/10 transition-all duration-200 group">
                <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                  <FileText size={15} className="text-gold" />
                </div>
                <div className="flex-1">
                  <p className="text-navy text-sm font-semibold group-hover:text-gold transition-colors duration-200">{title}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
                </div>
                <Download size={14} className="text-gray-500 group-hover:text-gold shrink-0 transition-colors duration-200" />
              </Link>
            ))}
          </StaggerReveal>

          <ScrollReveal>
            <div className="p-5 bg-white border border-navy/10 rounded-2xl shadow-card">
              <h3 className="font-semibold text-navy mb-2">SECP Investor Complaints</h3>
              <p className="text-gray-500 text-sm mb-3 leading-relaxed">Investors may submit formal complaints to the Securities and Exchange Commission of Pakistan via their official complaints portal.</p>
              <a href="http://secp.gov.pk/ComplaintForm1.asp" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold-dark font-semibold text-sm hover:underline">
                <ExternalLink size={14} />SECP Investor Complaint Form
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
