import { motion } from 'framer-motion'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import { Shield, Star, TrendingUp, Users, Building2, Award } from 'lucide-react'

const MILESTONES = [
  { year: '1977', event: 'Shaheen Foundation established by PAF to promote welfare activities' },
  { year: '1978', event: 'Shaheen Foundation begins commercial operations' },
  { year: '1996', event: 'Shaheen Insurance incorporated as public limited company with Rs. 20M capital' },
  { year: '2000s', event: 'Listed on all three Pakistani stock exchanges (PSX Symbol: SHNI)' },
  { year: '2018', event: 'Window Takaful Operations launched with SECP authorization' },
  { year: '2024', event: 'PACRA Rating upgraded to A++ Stable — Paid-up Capital Rs. 600 Million' },
]

const VALUES = [
  { icon: Shield, title: 'Trusted Protection', desc: 'Over 28 years of reliable insurance solutions for individuals and businesses across Pakistan.' },
  { icon: Star, title: 'PAF Backed', desc: 'Sponsored by Shaheen Foundation, established by Pakistan Air Force — ensuring institutional stability.' },
  { icon: TrendingUp, title: 'Financial Strength', desc: 'PACRA A++ rated with Rs. 600 Million paid-up capital and Rs. 1 Billion authorized capital.' },
  { icon: Users, title: 'Customer First', desc: '"A satisfied claimant is the most effective advertisement for an insurance company."' },
  { icon: Building2, title: 'Nationwide Network', desc: '12+ branch offices across Pakistan including Karachi, Lahore, Islamabad and more.' },
  { icon: Award, title: 'Regulatory Compliance', desc: 'SECP regulated, PSX listed, audited by BDO Ebrahim & Co. Chartered Accountants.' },
]

export default function WhoWeArePage() {
  return (
    <>
      <PageHero
        title="Who We Are"
        subtitle="Pakistan's trusted general insurance company since 1996 — sponsored by Shaheen Foundation (PAF)"
        breadcrumbs={[{ label: 'About Us', path: '/about' }, { label: 'Who We Are' }]}
        badge="About Shaheen Insurance"
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">

            {/* Intro */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-5">Our Story</h2>
              <div className="space-y-4 text-navy/65 leading-relaxed">
                <p>Shaheen Insurance Company Limited (SICL) is a project of <strong className="text-navy">Shaheen Foundation</strong>, set up by Pakistan Air Force (PAF). The company was incorporated as a public limited company in <strong className="text-navy">1996</strong> under the Companies Ordinance 1979, commencing operations with a paid-up capital of <strong className="text-navy">Rs. 20 million</strong>.</p>
                <p>Over nearly three decades, Shaheen Insurance has grown its paid-up capital to <strong className="text-navy">Rs. 600 million</strong> and established itself as one of Pakistan's most reputable names in the general insurance sector. The company is listed on the <strong className="text-navy">Pakistan Stock Exchange (PSX Symbol: SHNI)</strong> and serves corporate, multinational, and blue-chip clients across the country.</p>
                <p>The company operates under the regulatory framework of SECP and is audited by <strong className="text-navy">BDO Ebrahim & Co. Chartered Accountants</strong>. Its legal affairs are managed by <strong className="text-navy">Allied Law Group</strong>, and shareholder services are provided by <strong className="text-navy">M/s Corplink (Pvt) Ltd, Lahore</strong>.</p>
                <p>In April 2018, Shaheen Insurance launched its <strong className="text-navy">Window Takaful Operations</strong> — an SECP-authorized Shariah-compliant alternative to conventional insurance — further expanding its service portfolio to meet diverse customer needs.</p>
              </div>
            </motion.div>

            {/* Core Philosophy */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="bg-navy p-6 md:p-8 text-white">
                <h3 className="font-display text-xl md:text-2xl font-bold mb-4">Our Core Philosophy</h3>
                <blockquote className="text-lg md:text-xl text-gold font-display font-semibold italic mb-4">
                  "A satisfied claimant is the most effective advertisement for an insurance company."
                </blockquote>
                <p className="text-white/70 leading-relaxed text-sm md:text-base">
                  The leadership team at Shaheen Insurance delivers personalized, efficient service through a compact, dedicated workforce. Management expresses strong confidence in future expansion, attributing growth potential to stable economic conditions and active institutional support from the Shaheen Foundation.
                </p>
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-navy mb-6">Why Choose Shaheen Insurance</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {VALUES.map(({ icon: Icon, title, desc }, i) => (
                  <motion.div key={title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex gap-4 p-5 bg-surface border border-navy/8">
                    <div className="w-10 h-10 bg-navy/8 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1 text-sm">{title}</h4>
                      <p className="text-navy/55 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-navy mb-6">Our Journey</h2>
              <div className="relative pl-8 space-y-6 before:absolute before:left-3 before:top-0 before:bottom-0 before:w-0.5 before:bg-gold/30">
                {MILESTONES.map(({ year, event }, i) => (
                  <motion.div key={year} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="relative">
                    <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-gold/15 border-2 border-gold flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                    </div>
                    <div className="text-gold font-bold text-sm mb-1">{year}</div>
                    <p className="text-navy/65 text-sm leading-relaxed">{event}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: 'A++', label: 'PACRA Rating' },
                { value: 'Rs. 600M', label: 'Paid-up Capital' },
                { value: '28+', label: 'Years of Service' },
                { value: '12+', label: 'Branch Offices' },
              ].map(({ value, label }) => (
                <div key={label} className="bg-navy text-white p-5 text-center">
                  <div className="font-display font-bold text-xl md:text-2xl text-gold mb-1">{value}</div>
                  <div className="text-white/60 text-xs">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}
