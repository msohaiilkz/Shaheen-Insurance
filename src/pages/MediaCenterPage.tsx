import { Calendar, Tag, ExternalLink, Mail, Phone } from 'lucide-react'
import InnerPageHero from '../components/layout/InnerPageHero'
import PageSEO from '../components/shared/PageSEO'
import ScrollReveal from '../components/shared/ScrollReveal'
import { StaggerReveal } from '../components/shared/ScrollReveal'
import { useJourney } from '../context/JourneyContext'
import { takafulize } from '../lib/wording'

type EventItem = { date: string; title: string; desc: string; tags: string[]; link?: string }

const EVENTS: EventItem[] = [
  {
    date: 'February 13, 2025',
    title: 'SECP Corporate Briefing Consultation — Pakistan Stock Exchange',
    desc: "Shaheen Insurance's compliance team participated in the SECP consultation session on the Code of Corporate Governance's requirements for corporate briefings and the draft regulations for research analysts. The session was held at the Pakistan Stock Exchange, Karachi, and brought together senior management from listed companies across all sectors.",
    tags: ['Regulatory', 'Compliance', 'PSX'],
  },
  {
    date: 'February 12, 2025',
    title: 'InsureImpact Conference Pakistan 2025',
    desc: 'Shaheen Insurance participated in the InsureImpact Conference Pakistan 2025, organized by the Securities and Exchange Commission of Pakistan (SECP) in Karachi. The conference gathered insurance industry leaders, regulators, and innovators to discuss the future of insurance in Pakistan, digital transformation, and the role of Takaful.',
    tags: ['Conference', 'Industry', 'SECP'],
    link: 'https://icp.secp.gov.pk/',
  },
  {
    date: 'February 10, 2025',
    title: 'Corporate Dinner with Nasco — Celebrating a Valued Reinsurance Partnership',
    desc: "A corporate dinner was hosted by Nasco, one of Shaheen Insurance's valued reinsurance partners, to celebrate and strengthen the long-standing business relationship. Senior management from both organizations attended the evening, which recognized years of successful collaboration and looked ahead to continued growth and partnership.",
    tags: ['Corporate', 'Reinsurance', 'Partnership'],
  },
  {
    date: 'September 13, 2024',
    title: 'Annual Award Ceremony at Port Grand, Karachi',
    desc: "Shaheen Insurance held its Annual Award Ceremony at the iconic Port Grand venue in Karachi. The event recognized and celebrated the company's top business producers, best new talent, and employees with the best punctuality records. Chief Guest Mr. Jehangir Shah (Independent Director) presided over the ceremony and presented awards to the outstanding performers.",
    tags: ['Event', 'Awards', 'Corporate'],
  },
  {
    date: 'December 13–14, 2023',
    title: 'International InsureImpact Conference 2023',
    desc: "Shaheen Insurance representatives attended the International InsureImpact Conference 2023, organized by SECP over two days. The conference featured international insurance industry experts, discussions on regulatory reform, microinsurance, health insurance penetration, and climate-related risk — positioning Pakistan's insurance sector for the next decade.",
    tags: ['Conference', 'International', 'SECP'],
  },
  {
    date: '2023',
    title: "International Women's Day Celebration",
    desc: "Shaheen Insurance celebrated International Women's Working Day with an internal event recognizing the contributions of women professionals across the organization. The celebration highlighted Shaheen Insurance's commitment to an inclusive workplace and the growing role of women in Pakistan's financial services sector.",
    tags: ['Corporate', 'Inclusion', 'Culture'],
  },
  {
    date: 'January 17, 2019',
    title: 'Senior Management Meeting — JB Boda & Co. PTE Ltd. (Singapore)',
    desc: "A high-level meeting was held at Shaheen Insurance Company's Head Office in Karachi between senior management teams of JB Boda & Co. PTE Ltd. (Singapore) — one of Asia's leading insurance broking and reinsurance groups — and Shaheen Insurance. The meeting focused on strengthening bilateral business cooperation and exploring expanded reinsurance arrangements.",
    tags: ['Corporate', 'International', 'Reinsurance'],
  },
]

const TAG_COLORS: Record<string, string> = {
  Regulatory: 'bg-blue-100 text-blue-700',
  Compliance: 'bg-indigo-100 text-indigo-700',
  PSX: 'bg-purple-100 text-purple-700',
  Conference: 'bg-emerald-100 text-emerald-700',
  Industry: 'bg-teal-100 text-teal-700',
  SECP: 'bg-cyan-100 text-cyan-700',
  Corporate: 'bg-navy/10 text-navy',
  Reinsurance: 'bg-amber-100 text-amber-700',
  Partnership: 'bg-orange-100 text-orange-700',
  Event: 'bg-rose-100 text-rose-700',
  Awards: 'bg-gold/15 text-yellow-700',
  International: 'bg-sky-100 text-sky-700',
  Inclusion: 'bg-pink-100 text-pink-700',
  Culture: 'bg-violet-100 text-violet-700',
}

const MediaSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Newspaper layout */}
    <rect x="65" y="30" width="140" height="110" rx="6" fill="#D6A65A" opacity="0.07" stroke="#D6A65A" strokeWidth="1.5" />
    {/* Header bar */}
    <rect x="65" y="30" width="140" height="20" rx="6" fill="#D6A65A" opacity="0.15" />
    <rect x="73" y="36" width="60" height="7" rx="2" fill="#D6A65A" opacity="0.4" />
    {/* Columns */}
    <rect x="73" y="58" width="55" height="35" rx="3" fill="#D6A65A" opacity="0.12" stroke="#D6A65A" strokeWidth="0.8" />
    <rect x="75" y="62" width="50" height="4" rx="1" fill="#D6A65A" opacity="0.3" />
    <rect x="75" y="69" width="42" height="3" rx="1" fill="#D6A65A" opacity="0.2" />
    <rect x="75" y="75" width="46" height="3" rx="1" fill="#D6A65A" opacity="0.2" />
    <rect x="75" y="81" width="38" height="3" rx="1" fill="#D6A65A" opacity="0.15" />
    <rect x="140" y="58" width="55" height="35" rx="3" fill="#D6A65A" opacity="0.1" stroke="#D6A65A" strokeWidth="0.8" />
    <rect x="143" y="62" width="48" height="4" rx="1" fill="#D6A65A" opacity="0.25" />
    <rect x="143" y="69" width="40" height="3" rx="1" fill="#D6A65A" opacity="0.18" />
    <rect x="143" y="75" width="44" height="3" rx="1" fill="#D6A65A" opacity="0.18" />
    {/* Lower section */}
    <rect x="73" y="100" width="122" height="4" rx="1" fill="#D6A65A" opacity="0.2" />
    <rect x="73" y="110" width="100" height="3" rx="1" fill="#D6A65A" opacity="0.15" />
    <rect x="73" y="118" width="115" height="3" rx="1" fill="#D6A65A" opacity="0.15" />
    {/* Checkmark badge */}
    <circle cx="265" cy="25" r="12" fill="#D6A65A" opacity="0.5" stroke="#D6A65A" strokeWidth="1" />
    <path d="M262 28 L265 32 L270 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function MediaCenterPage() {
  const { isTakaful } = useJourney()
  return (
    <>
      <PageSEO
        title="Media Center"
        description="Shaheen Insurance news, announcements, and press releases. Stay updated with the latest developments from Pakistan's A++ rated general insurance company."
        keywords="Shaheen Insurance news, press release, insurance announcements Pakistan, SHNI PSX news"
        path="/media"
      />
      <InnerPageHero
        category="News & Events"
        title="Media Center"
        subtitle="Latest news, events, conferences, and corporate updates from Shaheen Insurance"
        breadcrumbs={[{ label: 'Media Center' }]}
        stats={[{ value: '2025', label: 'Latest Updates' }, { value: '7+', label: 'News Items' }, { value: 'PSX', label: 'Listed SHNI' }]}
        svgIllustration={<MediaSVG />}
      />

      {/* News Grid */}
      <section className="py-20 md:py-28 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Latest</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-4">News & Events</h2>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xl mx-auto">
                Stay updated with Shaheen Insurance's corporate activities, industry engagements, regulatory participation, and team milestones.
              </p>
            </div>
          </ScrollReveal>

          <StaggerReveal className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {EVENTS.map(({ date, title, desc, tags, link }, idx) => (
              <article key={title} className={`p-6 bg-white rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all duration-300 ${idx === 0 ? 'lg:col-span-2' : ''}`}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="inline-flex items-center gap-2 bg-navy text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                    <Calendar size={11} />{date}
                  </div>
                </div>
                <h3 className={`font-display font-bold text-navy leading-snug mb-3 ${idx === 0 ? 'text-xl md:text-2xl' : 'text-lg'}`}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{takafulize(desc, isTakaful)}</p>
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag size={12} className="text-gray-400" />
                    {tags.map(tag => (
                      <span key={tag} className={`text-xs font-semibold px-2 py-0.5 rounded-full ${TAG_COLORS[tag] || 'bg-gray-100 text-gray-600'}`}>{tag}</span>
                    ))}
                  </div>
                  {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-gold text-xs font-semibold hover:underline">
                      Visit Website <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-light-blue relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="media-cg" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#D6A65A" strokeWidth="0.8" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#media-cg)" />
        </svg>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <ScrollReveal>
          <div className="relative z-10 max-w-2xl mx-auto px-5 text-center">
            <p className="text-gold-dark text-xs font-bold tracking-[0.25em] uppercase mb-4">Press Queries</p>
            <h2 className="font-display font-black text-navy text-3xl md:text-4xl uppercase leading-tight mb-4">
              Media <span className="text-gold-dark">Inquiries</span>
            </h2>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">For press releases, media inquiries, or corporate announcements, please contact our head office directly.</p>
            <div className="flex justify-center gap-3 flex-wrap">
              <a href="mailto:info@shaheeninsurance.com" className="inline-flex items-center gap-2 bg-navy text-white font-bold px-8 py-4 rounded-xl text-sm hover:bg-navy/90 transition-colors">
                <Mail size={15} /> Email Us
              </a>
              <a href="tel:02132630370" className="inline-flex items-center gap-2 bg-white border border-navy/15 text-navy shadow-card font-semibold px-8 py-4 rounded-xl text-sm hover:bg-white/80 transition-colors">
                <Phone size={15} /> 021-32630370-75
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
