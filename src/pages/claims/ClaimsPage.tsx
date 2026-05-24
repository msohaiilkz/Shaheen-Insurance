import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import { FileText, ClipboardList, AlertCircle, Car, Flame, Home, Cog, Monitor, Package, Heart, Phone, Mail, ArrowRight, Clock, CheckCircle2 } from 'lucide-react'

const INNER_PAGES = [
  {
    icon: ClipboardList,
    title: 'General Procedure',
    desc: 'Step-by-step claim procedures for all insurance types — auto, fire, burglary, machinery, engineering, health, and more.',
    link: '/claims/procedure',
    cta: 'View Procedures',
  },
  {
    icon: FileText,
    title: 'Claim Forms',
    desc: 'Download motor, fire, health, burglary, and general claim forms in PDF format for offline submission.',
    link: '/claims/forms',
    cta: 'Download Forms',
  },
  {
    icon: AlertCircle,
    title: 'Claim Intimation',
    desc: 'Submit your claim intimation online — our claims team will acknowledge within 5 business days.',
    link: '/claims/intimation',
    cta: 'Intimate a Claim',
  },
]

const CLAIM_TYPES = [
  { icon: Car, label: 'Auto / Motor' },
  { icon: Flame, label: 'Fire' },
  { icon: Home, label: 'Burglary' },
  { icon: Cog, label: 'Machinery' },
  { icon: Monitor, label: 'Electronic Equipment' },
  { icon: Package, label: 'Miscellaneous' },
  { icon: Heart, label: 'Health' },
]

const INTIMATION_CHANNELS = [
  { icon: Phone, label: 'Phone', detail: '021-32630370-75', href: 'tel:02132630370' },
  { icon: Mail, label: 'Email', detail: 'info@shaheeninsurance.com', href: 'mailto:info@shaheeninsurance.com' },
  { icon: FileText, label: 'Letter / Fax', detail: 'Fax: 021-32626674', href: '#' },
]

export default function ClaimsPage() {
  return (
    <>
      <PageHero
        title="Claims Center"
        subtitle="Prompt, fair, and transparent claims settlement — because a satisfied claimant is our most effective advertisement"
        breadcrumbs={[{ label: 'Claims' }]}
        badge="Claims Center"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">

            {/* SLA Promise */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-4">Our Claims Commitment</h2>
              <div className="bg-navy rounded-2xl p-8 text-white">
                <p className="font-display text-xl font-semibold text-gold italic mb-4">
                  "A satisfied claimant is the most effective advertisement for an insurance company."
                </p>
                <p className="text-white/75 leading-relaxed mb-5">
                  At Shaheen Insurance, our claims process is designed to be transparent, efficient, and fair. We are committed to prompt response and equitable settlement for every policyholder.
                </p>
                <div className="flex items-center gap-3 bg-gold/15 rounded-xl p-4">
                  <Clock size={20} className="text-gold shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-sm">Claims Acknowledgment SLA</p>
                    <p className="text-white/70 text-xs mt-0.5">All claims are acknowledged within <strong className="text-gold">5 business days</strong> of intimation.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Three Inner Pages */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <div className="gold-line mb-4" />
                <h2 className="font-display text-2xl font-bold text-navy mb-6">Claims Resources</h2>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {INNER_PAGES.map(({ icon: Icon, title, desc, link, cta }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  >
                    <Link
                      to={link}
                      className="group flex flex-col h-full p-6 bg-surface rounded-2xl border border-navy/8 hover:border-gold/40 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-11 h-11 rounded-xl bg-navy/8 flex items-center justify-center mb-4 group-hover:bg-navy transition-colors duration-300">
                        <Icon size={20} className="text-navy group-hover:text-gold transition-colors duration-300" />
                      </div>
                      <h3 className="font-display font-bold text-navy text-lg mb-2">{title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{desc}</p>
                      <div className="flex items-center gap-1 text-gold text-sm font-semibold">
                        {cta} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Claim Types */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <div className="gold-line mb-4" />
                <h2 className="font-display text-2xl font-bold text-navy mb-6">Claim Types We Handle</h2>
              </motion.div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
                {CLAIM_TYPES.map(({ icon: Icon, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.05 }}
                    className="flex flex-col items-center gap-2 p-4 bg-surface rounded-xl border border-navy/5 text-center"
                  >
                    <Icon size={22} className="text-gold" />
                    <span className="text-navy text-xs font-semibold leading-tight">{label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Health Claims Special Note */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <div className="p-6 bg-surface rounded-2xl border border-navy/8">
                <div className="flex items-center gap-2 mb-4">
                  <Heart size={18} className="text-gold" />
                  <h3 className="font-display font-bold text-navy text-lg">Health Claims Processing</h3>
                </div>
                <div className="space-y-2">
                  {[
                    'Health claims are processed within 15–30 working days of receiving complete documentation.',
                    'Non-panel hospital claim submissions must be made within 1 month of discharge.',
                    'Panel hospital claims are processed via direct billing — no upfront payment required.',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={14} className="text-gold shrink-0 mt-0.5" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Intimation Channels */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-2xl font-bold text-navy mb-5">Intimation Channels</h2>
              <p className="text-gray-500 text-sm mb-5">You can intimate a claim through any of the following channels. Always retain a reference number or acknowledgment.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {INTIMATION_CHANNELS.map(({ icon: Icon, label, detail, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex flex-col items-center text-center p-5 bg-navy text-white rounded-2xl hover:bg-navy/90 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center mb-3">
                      <Icon size={18} className="text-gold" />
                    </div>
                    <span className="font-semibold text-sm mb-1">{label}</span>
                    <span className="text-white/60 text-xs">{detail}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4">
              <Link to="/claims/intimation" className="btn-primary">
                <AlertCircle size={15} />
                Submit Claim Intimation
              </Link>
              <Link to="/claims/procedure" className="btn-navy">
                <ClipboardList size={15} />
                View Claim Procedures
              </Link>
            </div>

          </div>
          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}
