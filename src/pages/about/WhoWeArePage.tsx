import { motion } from 'framer-motion'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import PageSEO from '../../components/shared/PageSEO'
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
      <PageSEO
        title="Who We Are"
        description="Shaheen Insurance Company Limited — established 1996, PACRA A++ rated, PAF Foundation sponsored. Learn about our 28+ years of trusted general insurance in Pakistan."
        keywords="Shaheen Insurance history, SICL, PAF insurance company, PACRA A++ insurance Pakistan, general insurance company Karachi"
        path="/about/who-we-are"
        includeOrg
      />
      <PageHero
        title="Who We Are"
        subtitle="Pakistan's trusted general insurance company since 1996 — sponsored by Shaheen Foundation (PAF)"
        breadcrumbs={[{ label: 'About Us', path: '/about' }, { label: 'Who We Are' }]}
        badge="About Shaheen Insurance" videoCategory="about"
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">

            {/* Intro with Visual */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-8 uppercase tracking-wide">Our Story</h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
                <div className="space-y-4 text-navy/70 leading-relaxed text-base font-light">
                  <p>Shaheen Insurance Company Limited (SICL) is a project of <strong className="text-navy font-bold">Shaheen Foundation</strong>, set up by Pakistan Air Force (PAF). The company was incorporated as a public limited company in <strong className="text-navy font-bold">1996</strong> under the Companies Ordinance 1979.</p>
                  <p>Over nearly three decades, Shaheen Insurance has grown its paid-up capital to <strong className="text-navy font-bold">Rs. 600 million</strong> and established itself as one of Pakistan's most reputable names in the general insurance sector. The company is listed on the <strong className="text-navy font-bold">Pakistan Stock Exchange (PSX Symbol: SHNI)</strong>.</p>
                </div>
                {/* Brand card — replaces illustration */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative rounded-3xl overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #0D1B4D 0%, #28368F 60%, #1a2a6e 100%)', boxShadow: '0 20px 60px rgba(40,54,143,0.3)' }}
                >
                  {/* Animated grid */}
                  <div className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(214,166,90,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(214,166,90,0.8) 1px,transparent 1px)',
                      backgroundSize: '32px 32px',
                    }}
                  />
                  {/* Glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/8 rounded-full blur-2xl" />

                  <div className="relative p-8 flex flex-col items-center text-center gap-6">
                    {/* Logo */}
                    <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-4" style={{ boxShadow: '0 0 40px rgba(214,166,90,0.2)' }}>
                      <img src="/logo.png" alt="Shaheen Insurance Company Limited" className="h-20 w-auto object-contain" />
                    </div>

                    <div>
                      <div className="text-gold font-display font-bold text-lg tracking-[0.15em] uppercase mb-1">Shaheen Insurance</div>
                      <div className="text-white/50 text-xs tracking-widest uppercase">A Sign of Protection</div>
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-3 w-full">
                      {[
                        { val: 'A++', label: 'PACRA', sub: 'Stable' },
                        { val: '1996', label: 'Est.', sub: 'PAF' },
                        { val: '600M', label: 'Capital', sub: 'Rs.' },
                      ].map(({ val, label, sub }) => (
                        <div key={label} className="bg-white/6 border border-white/10 rounded-xl py-3 px-2 text-center">
                          <div className="text-gold font-display font-bold text-base leading-none">{sub} {val}</div>
                          <div className="text-white/45 text-[9px] uppercase tracking-wider mt-1">{label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Trust badges */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {['SECP Regulated', 'PSX Listed: SHNI', 'Window Takaful', 'PAF Sponsored'].map(b => (
                        <span key={b} className="text-[9px] font-bold uppercase tracking-wide text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                          {b}
                        </span>
                      ))}
                    </div>

                    {/* Gold bottom line */}
                    <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
                  </div>
                </motion.div>
              </div>

              <div className="space-y-4 text-navy/70 leading-relaxed text-base font-light">
                <p>The company operates under the regulatory framework of SECP and is audited by <strong className="text-navy font-bold">BDO Ebrahim & Co. Chartered Accountants</strong>. Its legal affairs are managed by <strong className="text-navy font-bold">Allied Law Group</strong>, and shareholder services are provided by <strong className="text-navy font-bold">M/s Corplink (Pvt) Ltd, Lahore</strong>.</p>
                <p>In April 2018, Shaheen Insurance launched its <strong className="text-navy font-bold">Window Takaful Operations</strong> — an SECP-authorized Shariah-compliant alternative to conventional insurance — further expanding its service portfolio to meet diverse customer needs across Pakistan.</p>
              </div>
            </motion.div>

            {/* Core Philosophy */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="relative bg-navy p-8 md:p-10 text-white overflow-hidden shadow-2xl">
                {/* Abstract graphic */}
                <div className="absolute -right-16 -bottom-16 w-64 h-64 border-[40px] border-white/5 rounded-full" />
                <div className="relative z-10">
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 tracking-wide uppercase">Our Core Philosophy</h3>
                  <blockquote className="text-xl md:text-2xl text-gold font-display font-semibold mb-6 border-l-4 border-gold pl-5 leading-tight">
                    "A satisfied claimant is the most effective advertisement for an insurance company."
                  </blockquote>
                  <p className="text-white/80 leading-relaxed text-base font-light">
                    The leadership team at Shaheen Insurance delivers personalized, efficient service through a compact, dedicated workforce. Management expresses strong confidence in future expansion, attributing growth potential to stable economic conditions and active institutional support from the Shaheen Foundation.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-8 uppercase tracking-wide">Why Choose Shaheen Insurance</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {VALUES.map(({ icon: Icon, title, desc }, i) => (
                  <motion.div key={title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex gap-4 p-6 bg-surface border border-navy/5 hover:border-gold/30 hover:shadow-card transition-all duration-300">
                    <div className="w-12 h-12 bg-navy/5 flex items-center justify-center shrink-0 rounded-sm">
                      <Icon size={20} className="text-navy" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy mb-2 tracking-wide">{title}</h4>
                      <p className="text-navy/60 text-sm leading-relaxed font-light">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-8 uppercase tracking-wide">Our Journey</h2>
              <div className="relative pl-8 space-y-8 before:absolute before:left-3 before:top-0 before:bottom-0 before:w-[1px] before:bg-navy/10">
                {MILESTONES.map(({ year, event }, i) => (
                  <motion.div key={year} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="relative">
                    <div className="absolute -left-8 top-1 w-6 h-6 bg-surface border-2 border-gold rounded-full flex items-center justify-center shadow-sm">
                      <div className="w-1.5 h-1.5 bg-navy rounded-full" />
                    </div>
                    <div className="text-gold font-display font-bold text-lg mb-1 tracking-wider">{year}</div>
                    <p className="text-navy/70 text-sm leading-relaxed font-light">{event}</p>
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
                <div key={label} className="bg-navy border border-navy/20 p-6 text-center hover:-translate-y-1 transition-transform duration-300">
                  <div className="font-display font-bold text-2xl md:text-3xl text-gold mb-2">{value}</div>
                  <div className="text-white/60 text-xs tracking-wider uppercase font-semibold">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="sticky top-24">
              <ContactSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
