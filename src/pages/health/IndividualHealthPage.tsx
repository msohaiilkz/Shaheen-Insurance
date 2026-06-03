import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import PageSEO from '../../components/shared/PageSEO'
import { CheckCircle2, PhoneCall, Clock, Building2, Tag, Users, TrendingDown, FileText } from 'lucide-react'

const KEY_BENEFITS = [
  { icon: Tag, title: 'Low Premium Rates', desc: 'Competitive per-head premium rates charged for comprehensive individual and family health coverage — making quality insurance accessible to everyone.' },
  { icon: Building2, title: 'Hospital Discounts', desc: 'Policyholders enjoy exclusive discounts at our nationwide panel hospital network — reducing your out-of-pocket expenses at the point of care.' },
  { icon: FileText, title: 'No Medical Check-ups Required', desc: 'No pre-enrollment medical examination needed. Quick, hassle-free enrollment without the burden of mandatory health screenings.' },
]

const DISCOUNTS = [
  {
    title: 'No-Claim Discount',
    items: [
      'First year renewal (no claims): 5% discount on renewal premium',
      'Subsequent years without claims: 10% discount on renewal premium',
    ],
  },
  {
    title: 'Family Discount',
    items: [
      '5% discount on total premium for children under 18 years of age',
      'Applicable from the second child onwards',
    ],
  },
]

const SERVICES = [
  { icon: PhoneCall, text: '24-hour hospital information helplines — get instant information anytime' },
  { icon: Clock, text: '24-hour dedicated nursing staff access for medical guidance and support' },
  { icon: Building2, text: 'Extensive panel hospital network with cashless treatment facilities' },
  { icon: CheckCircle2, text: 'Streamlined documentation — simplified claim submission process' },
]

const PROBLEM_AREAS = [
  { title: 'Simplified Documentation', desc: 'We have addressed the traditional complexity of insurance paperwork with a streamlined, user-friendly documentation process.' },
  { title: 'Competitive Pricing', desc: 'Our individual health packages are priced competitively to ensure families of all income levels can access meaningful health coverage.' },
  { title: 'Broader Coverage', desc: 'Unlike many market products, our policies cover a wider range of medical conditions and treatments without excessive exclusions.' },
]

export default function IndividualHealthPage() {
  return (
    <>
      <PageSEO
        title="Individual & Family Health Insurance"
        description="Shaheen Insurance individual and family health plans — no medical check-up required, covers up to 6 members, no-claim discounts, and access to panel hospitals across Pakistan."
        keywords="individual health insurance Pakistan, family health plan, health cover no medical checkup, personal health insurance Karachi"
        path="/health-care/individual"
        schema={{ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Individual Health Insurance', provider: { '@type': 'InsuranceAgency', name: 'Shaheen Insurance Company Limited' }, areaServed: 'PK' }}
      />
      <PageHero
        title="Individual & Family Health Insurance"
        subtitle="Affordable health packages with low premiums, no medical check-ups required, and generous no-claim discounts"
        breadcrumbs={[{ label: 'Health Care', path: '/health-care' }, { label: 'Individual/Family Health Insurance' }]}
        videoCategory="health"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">

            {/* Visual Collage */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              className="grid grid-cols-3 gap-3 h-52 md:h-64 overflow-hidden">
              <div className="col-span-2 relative rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&auto=format&fit=crop"
                  alt="Family Health Insurance" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/15 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                  <span className="bg-gold text-navy font-bold text-xs px-3 py-1 rounded-full">No Medical Check-up</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">Family Discount</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative rounded-2xl overflow-hidden flex-1">
                  <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80&auto=format&fit=crop"
                    alt="Health" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-navy/40" />
                </div>
                <div className="bg-navy rounded-2xl flex-1 flex flex-col items-center justify-center p-3 text-center">
                  <div className="text-gold font-display font-bold text-lg">5%</div>
                  <div className="text-white/60 text-[10px]">No-Claim Bonus</div>
                </div>
              </div>
            </motion.div>

            {/* Intro */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-4">Shaheen Health Care Packages</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Shaheen Insurance offers a comprehensive range of Individual and Family Health Care Packages, with <strong className="text-navy">basic premium rates charged per head</strong>. Our plans are designed to remove traditional barriers to health insurance — making coverage accessible, affordable, and straightforward for all Pakistanis.
              </p>
              <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
                <p className="text-navy font-semibold text-sm">
                  Premium Structure: Basic Premium Rates are charged Per Head — individual, spouse, and each dependent child can be enrolled separately or as a family package.
                </p>
              </div>
            </motion.div>

            {/* Key Benefits */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <div className="gold-line mb-4" />
                <h2 className="font-display text-2xl font-bold text-navy mb-6">Key Benefits</h2>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {KEY_BENEFITS.map(({ icon: Icon, title, desc }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                    className="p-5 bg-navy rounded-2xl text-white text-center"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gold/20 flex items-center justify-center mx-auto mb-4">
                      <Icon size={20} className="text-gold" />
                    </div>
                    <h3 className="font-display font-bold text-base mb-2">{title}</h3>
                    <p className="text-white/70 text-xs leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Discounts */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-2xl font-bold text-navy mb-6">Discount Structure</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {DISCOUNTS.map(({ title, items }) => (
                  <div key={title} className="p-6 bg-surface rounded-2xl border border-navy/8">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingDown size={18} className="text-gold" />
                      <h3 className="font-display font-bold text-navy">{title}</h3>
                    </div>
                    <ul className="space-y-2.5">
                      {items.map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-gray-600">
                          <CheckCircle2 size={14} className="text-gold shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-2xl font-bold text-navy mb-6">Policy Services</h2>
              <div className="space-y-3">
                {SERVICES.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-4 p-4 bg-surface rounded-xl">
                    <div className="w-9 h-9 rounded-lg bg-navy/8 flex items-center justify-center shrink-0">
                      <Icon size={17} className="text-gold" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed self-center">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Problem Areas Addressed */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-2xl font-bold text-navy mb-4">What Sets Us Apart</h2>
              <p className="text-gray-500 text-sm mb-5">We have specifically addressed the most common pain points in individual health insurance:</p>
              <div className="space-y-4">
                {PROBLEM_AREAS.map(({ title, desc }, i) => (
                  <div key={title} className="flex gap-4 p-5 bg-surface rounded-xl">
                    <span className="font-display font-bold text-gold/50 text-2xl leading-none shrink-0 w-8">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h4 className="font-semibold text-navy text-sm mb-1">{title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Link to="/claims/intimation" className="btn-primary">File a Claim</Link>
              <Link to="/health-care/panel-hospitals" className="btn-navy">
                <Users size={15} />
                View Panel Hospitals
              </Link>
            </div>

          </div>
          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}

