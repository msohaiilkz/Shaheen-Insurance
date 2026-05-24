import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react'

const NEWS = [
  {
    date: 'Feb 13, 2025',
    title: 'SECP Corporate Briefing Consultation',
    desc: "Shaheen Insurance compliance team participated in SECP's corporate briefing conduct and research analysts regulations session at Pakistan Stock Exchange, Karachi.",
    tag: 'Regulatory',
  },
  {
    date: 'Feb 12, 2025',
    title: 'InsureImpact Conference Pakistan 2025',
    desc: "SICL attended the InsureImpact Conference Pakistan 2025 organized by SECP in Karachi — driving innovation in Pakistan's insurance sector.",
    tag: 'Event',
    link: 'https://icp.secp.gov.pk/',
  },
  {
    date: 'Sep 13, 2024',
    title: 'Annual Award Ceremony at Port Grand',
    desc: 'Recognition ceremony honoring top business producers, best new talent, and punctuality. Chief Guest: Mr. Jehangir Shah, Independent Director.',
    tag: 'Corporate',
  },
]

export default function NewsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-14 md:py-24 bg-surface/40">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div>
            <div className="gold-line mb-4" />
            <h2 className="section-title text-navy">
              Latest <span className="text-gradient-gold">News & Events</span>
            </h2>
            <p className="section-subtitle mt-3">
              Stay updated with Shaheen Insurance's latest corporate events and announcements.
            </p>
          </div>
          <Link to="/media" className="btn-navy shrink-0 self-start lg:self-auto">
            View All News
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* News cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS.map(({ date, title, desc, tag, link }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white border border-navy/8 shadow-card p-6 flex flex-col group hover:-translate-y-1 hover:shadow-navy transition-all duration-300"
              style={{ borderTop: '3px solid #D6A65A' }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] bg-gold/10 text-gold-dark font-semibold px-3 py-1 uppercase tracking-wide">
                  {tag}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Calendar size={12} />
                  {date}
                </div>
              </div>
              <h3 className="font-display font-bold text-navy text-lg mb-2 group-hover:text-gold transition-colors leading-snug">
                {title}
              </h3>
              <p className="text-navy/55 text-sm leading-relaxed flex-1">
                {desc}
              </p>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:underline"
                >
                  Visit Event Portal <ExternalLink size={11} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
