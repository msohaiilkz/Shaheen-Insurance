import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import PageSEO from '../../components/shared/PageSEO'
import { Shield, Heart, Wallet, Download, Mail, CheckCircle2, Globe, Star } from 'lucide-react'

const PRODUCTS = [
  {
    icon: Heart,
    title: 'Shaheen Takaful Health Care',
    desc: 'Primary health coverage under our Shariah-compliant Window Takaful framework. Provides comprehensive inpatient coverage including hospitalization, surgery, and intensive care — with all operations governed by Takaful Rules 2012.',
    features: ['Inpatient hospitalization coverage', 'Surgical and ICU benefits', 'Shariah-compliant Waqf-based fund structure', 'SECP authorized operations'],
  },
  {
    icon: Shield,
    title: 'Shaheen Takaful Health Care Plus',
    desc: 'An enhanced version of our core Takaful health plan with expanded coverage limits and additional benefits. Ideal for individuals and families seeking higher protection thresholds under a Shariah-compliant structure.',
    features: ['Higher room and board limits', 'Expanded surgical benefit schedule', 'Enhanced maternity coverage (optional)', 'Wider panel hospital access'],
  },
  {
    icon: Wallet,
    title: 'Shaheen Takaful Wallet',
    desc: 'A flexible health wallet product designed for outpatient expenses — doctor consultations, diagnostic tests, medicines, and specialist visits. Provides a defined annual wallet amount that participants can draw from as needed.',
    features: ['Outpatient consultations', 'Diagnostic and lab tests', 'Prescribed medicines', 'Specialist referrals'],
  },
]

const RE_TAKAFUL_PARTNERS = [
  { name: 'Labuan Re', country: 'Malaysia', flag: '🇲🇾' },
  { name: 'GIC Re', country: 'India', flag: '🇮🇳' },
  { name: 'Africa Re', country: 'Africa', flag: '🌍' },
]

export default function TakafulHealthPage() {
  return (
    <>
      <PageSEO
        title="Takaful Health Care"
        description="Shaheen Insurance Takaful Health Care — Shariah-compliant health insurance plans under SECP-authorized Window Takaful Operations. Health Care, Health Care Plus, and Takaful Wallet plans."
        keywords="Takaful health insurance Pakistan, Islamic health insurance, Window Takaful, Shariah health cover, halal insurance Pakistan"
        path="/health-care/takaful"
        schema={{ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Takaful Health Insurance', provider: { '@type': 'InsuranceAgency', name: 'Shaheen Insurance Company Limited' }, areaServed: 'PK' }}
      />
      <PageHero
        title="Takaful Health Care"
        subtitle="Shariah-compliant health insurance solutions under our SECP-authorized Window Takaful Operations — launched April 2018"
        breadcrumbs={[{ label: 'Health Care', path: '/health-care' }, { label: 'Takaful Health Care' }]}
        badge="Window Takaful" videoCategory="takaful"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">

            {/* Visual Collage */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              className="grid grid-cols-3 gap-3 h-52 md:h-64 overflow-hidden">
              <div className="col-span-2 relative rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80&auto=format&fit=crop"
                  alt="Takaful Health Insurance" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="bg-gold text-navy font-bold text-xs px-3 py-1 rounded-full">Window Takaful</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white font-semibold text-xs px-3 py-1 rounded-full">SECP Authorized</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative rounded-2xl overflow-hidden flex-1">
                  <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80&auto=format&fit=crop"
                    alt="Medical care" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-navy/40" />
                </div>
                <div className="bg-navy rounded-2xl flex-1 flex flex-col items-center justify-center p-3 text-center">
                  <div className="text-gold font-display font-bold text-sm">Since</div>
                  <div className="text-gold font-display font-bold text-xl">2018</div>
                  <div className="text-white/60 text-[10px]">WTO Operations</div>
                </div>
              </div>
            </motion.div>

            {/* Intro */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-4">Window Takaful Operations</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Shaheen Insurance launched its <strong className="text-navy">Window Takaful Operations (WTO)</strong> in <strong className="text-navy">April 2018</strong> following authorization from the Securities and Exchange Commission of Pakistan (SECP). Our Takaful operations are governed by the <strong className="text-navy">Takaful Rules 2012</strong> and operate on a <strong className="text-navy">Waqf-based fund structure</strong> — ensuring full Shariah compliance.
                </p>
                <p>
                  Under the Window Takaful model, participants contribute to a Waqf fund managed separately from shareholders' funds. The Waqf fund is used exclusively for the benefit of participants, with any surplus distributed back to participants — in line with Islamic finance principles of mutual assistance (Ta'awun).
                </p>
              </div>
            </motion.div>

            {/* Three Products */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <div className="gold-line mb-4" />
                <h2 className="font-display text-3xl font-bold text-navy mb-2">Takaful Health Products</h2>
                <p className="text-gray-500 mb-6">Three comprehensive health coverage options under our Shariah-compliant framework.</p>
              </motion.div>

              <div className="space-y-6">
                {PRODUCTS.map(({ icon: Icon, title, desc, features }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                    className="p-6 bg-surface rounded-2xl border border-navy/8"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center shrink-0">
                        <Icon size={22} className="text-gold" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-navy text-xl mb-2">{title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>
                    <div className="pl-16">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle2 size={14} className="text-gold shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Re-Takaful Partners */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-2xl font-bold text-navy mb-6">Re-Takaful Partners</h2>
              <p className="text-gray-500 mb-5 text-sm leading-relaxed">
                Our Window Takaful Operations are supported by reputable international Re-Takaful partners, ensuring our participants benefit from global risk-sharing capacity.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {RE_TAKAFUL_PARTNERS.map(({ name, country, flag }) => (
                  <div key={name} className="bg-navy rounded-xl p-5 text-center text-white">
                    <div className="text-3xl mb-2">{flag}</div>
                    <div className="font-display font-bold text-gold text-lg">{name}</div>
                    <div className="text-white/60 text-xs mt-1">{country}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Waqf Fund Structure */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-2xl font-bold text-navy mb-4">Waqf Fund Structure</h2>
              <div className="bg-surface rounded-2xl p-6 border border-navy/8">
                <div className="space-y-4">
                  {[
                    { icon: Star, title: 'Participant Contributions (Tabarru)', desc: 'Participants make contributions to the Waqf fund with the intention of mutual assistance. These are not insurance premiums — they are charitable donations for the common good.' },
                    { icon: Shield, title: 'Shariah-Compliant Investments', desc: 'Waqf fund assets are invested only in Shariah-compliant instruments as approved by our Shariah Advisor. No investment in interest-bearing instruments.' },
                    { icon: Globe, title: 'Surplus Distribution', desc: 'Any surplus remaining in the Waqf fund after claims and expenses is distributed back to participants — not retained by shareholders.' },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex gap-4">
                      <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy text-sm mb-1">{title}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Downloads & Contact */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <div className="bg-navy rounded-2xl p-7 text-white">
                <h3 className="font-display font-bold text-xl mb-2">Documents & Enquiries</h3>
                <p className="text-white/70 text-sm mb-5 leading-relaxed">
                  Download the WTO PTF Policies (Waqf Rules) document or contact us for detailed Takaful health plan brochures.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/downloads" className="flex items-center gap-2 bg-gold text-navy font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-gold/90 transition-colors">
                    <Download size={15} />
                    Download WTO PTF Policies
                  </Link>
                  <a href="mailto:info@shaheeninsurance.com" className="flex items-center gap-2 border border-white/30 text-white font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-white/10 transition-colors">
                    <Mail size={15} />
                    info@shaheeninsurance.com
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}

