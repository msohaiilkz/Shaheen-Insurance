import { motion } from 'framer-motion'
import PageHero from '../components/layout/PageHero'
import ContactSidebar from '../components/layout/ContactSidebar'
import PageSEO from '../components/shared/PageSEO'
import { Calendar, Tag, ExternalLink } from 'lucide-react'

type EventItem = {
  date: string
  title: string
  desc: string
  tags: string[]
  link?: string
}

const EVENTS: EventItem[] = [
  {
    date: 'February 13, 2025',
    title: 'SECP Corporate Briefing Consultation — Pakistan Stock Exchange',
    desc: 'Shaheen Insurance\'s compliance team participated in the SECP consultation session on the Code of Corporate Governance\'s requirements for corporate briefings and the draft regulations for research analysts. The session was held at the Pakistan Stock Exchange, Karachi, and brought together senior management from listed companies across all sectors.',
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
    desc: 'A corporate dinner was hosted by Nasco, one of Shaheen Insurance\'s valued reinsurance partners, to celebrate and strengthen the long-standing business relationship. Senior management from both organizations attended the evening, which recognized years of successful collaboration and looked ahead to continued growth and partnership.',
    tags: ['Corporate', 'Reinsurance', 'Partnership'],
  },
  {
    date: 'September 13, 2024',
    title: 'Annual Award Ceremony at Port Grand, Karachi',
    desc: 'Shaheen Insurance held its Annual Award Ceremony at the iconic Port Grand venue in Karachi. The event recognized and celebrated the company\'s top business producers, best new talent, and employees with the best punctuality records. Chief Guest Mr. Jehangir Shah (Independent Director) presided over the ceremony and presented awards to the outstanding performers.',
    tags: ['Event', 'Awards', 'Corporate'],
  },
  {
    date: 'December 13–14, 2023',
    title: 'International InsureImpact Conference 2023',
    desc: 'Shaheen Insurance representatives attended the International InsureImpact Conference 2023, organized by SECP over two days. The conference featured international insurance industry experts, discussions on regulatory reform, microinsurance, health insurance penetration, and climate-related risk — positioning Pakistan\'s insurance sector for the next decade.',
    tags: ['Conference', 'International', 'SECP'],
  },
  {
    date: '2023',
    title: 'International Women\'s Day Celebration',
    desc: 'Shaheen Insurance celebrated International Women\'s Working Day with an internal event recognizing the contributions of women professionals across the organization. The celebration highlighted Shaheen Insurance\'s commitment to an inclusive workplace and the growing role of women in Pakistan\'s financial services sector.',
    tags: ['Corporate', 'Inclusion', 'Culture'],
  },
  {
    date: 'January 17, 2019',
    title: 'Senior Management Meeting — JB Boda & Co. PTE Ltd. (Singapore)',
    desc: 'A high-level meeting was held at Shaheen Insurance Company\'s Head Office in Karachi between senior management teams of JB Boda & Co. PTE Ltd. (Singapore) — one of Asia\'s leading insurance broking and reinsurance groups — and Shaheen Insurance. The meeting focused on strengthening bilateral business cooperation and exploring expanded reinsurance arrangements.',
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

export default function MediaCenterPage() {
  return (
    <>
      <PageSEO
        title="Media Center"
        description="Shaheen Insurance news, announcements, and press releases. Stay updated with the latest developments from Pakistan's A++ rated general insurance company."
        keywords="Shaheen Insurance news, press release, insurance announcements Pakistan, SHNI PSX news"
        path="/media"
      />
      <PageHero
        title="Media Center"
        subtitle="Latest news, events, conferences, and corporate updates from Shaheen Insurance"
        breadcrumbs={[{ label: 'Media Center' }]}
        badge="News &amp; Events" videoCategory="media"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">

            {/* Visual Collage */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              className="grid grid-cols-3 gap-3 h-52 md:h-64 overflow-hidden">
              <div className="col-span-2 relative rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80&auto=format&fit=crop"
                  alt="Shaheen Insurance Media Center" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                  <span className="bg-gold text-navy font-bold text-xs px-3 py-1 rounded-full">Corporate News</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">Events</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative rounded-2xl overflow-hidden flex-1">
                  <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80&auto=format&fit=crop"
                    alt="Conference" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-navy/40" />
                </div>
                <div className="bg-navy rounded-2xl flex-1 flex flex-col items-center justify-center p-3 text-center">
                  <div className="text-gold font-display font-bold text-lg">2025</div>
                  <div className="text-white/60 text-[10px]">Latest Updates</div>
                </div>
              </div>
            </motion.div>

            {/* Intro */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-4">News & Events</h2>
              <p className="text-gray-600 leading-relaxed">
                Stay updated with Shaheen Insurance's corporate activities, industry engagements, regulatory participation, and team milestones.
              </p>
            </motion.div>

            {/* Events */}
            <div className="space-y-6">
              {EVENTS.map(({ date, title, desc, tags, link }, i) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.08 }}
                  className="p-6 bg-surface rounded-2xl border border-navy/8 hover:border-gold/30 hover:shadow-md transition-all duration-300"
                >
                  {/* Date Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-2 bg-navy text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                      <Calendar size={11} />
                      {date}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-navy text-xl mb-3 leading-snug">{title}</h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>

                  {/* Footer */}
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Tag size={12} className="text-gray-400" />
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${TAG_COLORS[tag] || 'bg-gray-100 text-gray-600'}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {link && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-gold text-xs font-semibold hover:underline"
                      >
                        Visit Website <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>

          </div>
          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}

