import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import PageSEO from '../../components/shared/PageSEO'
import { CheckCircle2, Users, TrendingUp, Building2, Phone, Mail, Heart, Shield } from 'lucide-react'

const BENEFITS = [
  { icon: TrendingUp, title: 'Higher Coverage Limits', desc: 'Group policies offer significantly higher coverage thresholds per employee compared to individual plans — ensuring comprehensive protection for your workforce.' },
  { icon: Users, title: 'Lower Per-Head Premium', desc: 'The group structure allows risk to be spread across the entire workforce, resulting in substantially lower per-head premium costs for the employer.' },
  { icon: Shield, title: 'Simplified Enrollment', desc: 'Streamlined bulk enrollment for all employees without individual medical examinations — making it easy to onboard your entire team quickly.' },
]

const COVERAGE = [
  { title: 'Hospitalization', desc: 'Inpatient room and board, ICU charges, surgical fees, anesthesia, and related hospital expenses.' },
  { title: 'Outpatient Department (OPD)', desc: 'Doctor consultations, diagnostic tests, prescribed medicines, and specialist visits (where included in the plan).' },
  { title: 'Maternity Coverage', desc: 'Normal and C-section deliveries, pre and post-natal care — available as an optional add-on to the base plan.' },
  { title: 'Dental Coverage', desc: 'Basic dental treatments including extractions, fillings, and consultations — available as an optional add-on.' },
]

const PLAN_FEATURES = [
  'Coverage for permanent and contract employees',
  'Nationwide panel hospital network access',
  'Direct billing at panel hospitals — no upfront payment',
  'Cashless treatment at empanelled hospitals',
  'Dedicated corporate account manager',
  '24-hour helpline for HR and employees',
  'Annual renewal with flexible adjustment of sum insured',
  'Claims settlement within defined SLA',
]

export default function GroupHealthPage() {
  return (
    <>
      <PageSEO
        title="Group Health Insurance"
        description="Shaheen Insurance group health insurance for corporates — higher coverage limits at lower per-head premiums. Protect your employees with hospitalization, maternity, and OPD options."
        keywords="group health insurance Pakistan, corporate health insurance, employee health benefits, group medical cover Pakistan"
        path="/health-care/group"
        schema={{ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Group Health Insurance', provider: { '@type': 'InsuranceAgency', name: 'Shaheen Insurance Company Limited' }, areaServed: 'PK' }}
      />
      <PageHero
        title="Group Health Insurance"
        subtitle="Corporate health solutions that protect your employees with higher coverage limits, lower per-head premiums, and simplified administration"
        breadcrumbs={[{ label: 'Health Care', path: '/health-care' }, { label: 'Group Health Insurance' }]}
        videoCategory="health"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">

            {/* Visual Collage */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              className="grid grid-cols-3 gap-3 h-52 md:h-64 overflow-hidden">
              <div className="col-span-2 relative rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80&auto=format&fit=crop"
                  alt="Group Health Insurance" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/15 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="bg-gold text-navy font-bold text-xs px-3 py-1 rounded-full">Corporate Plans</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">Cashless</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative rounded-2xl overflow-hidden flex-1">
                  <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80&auto=format&fit=crop"
                    alt="Medical" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-navy/40" />
                </div>
                <div className="bg-navy rounded-2xl flex-1 flex flex-col items-center justify-center p-3 text-center">
                  <div className="text-gold font-display font-bold text-lg">Lower</div>
                  <div className="text-white/60 text-[10px]">Per-Head Premium</div>
                </div>
              </div>
            </motion.div>

            {/* Intro */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-4">Corporate Health Solutions</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Shaheen Insurance's <strong className="text-navy">Group Health Insurance</strong> is designed for organizations that want to provide their employees with meaningful health coverage while managing costs effectively. Our group plans leverage the power of collective risk-sharing to deliver superior benefits at competitive rates.
                </p>
                <p>
                  Whether you are a small business, a large corporation, or a public sector entity — our dedicated corporate team will design a customized health plan that fits your workforce size, needs, and budget.
                </p>
              </div>
            </motion.div>

            {/* Three Benefits */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <div className="gold-line mb-4" />
                <h2 className="font-display text-2xl font-bold text-navy mb-6">Key Advantages</h2>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {BENEFITS.map(({ icon: Icon, title, desc }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                    className="p-5 bg-navy text-white rounded-2xl"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center mb-4">
                      <Icon size={18} className="text-gold" />
                    </div>
                    <h3 className="font-display font-bold text-base mb-2">{title}</h3>
                    <p className="text-white/70 text-xs leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Coverage Types */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <div className="gold-line mb-4" />
                <h2 className="font-display text-2xl font-bold text-navy mb-6">Coverage Options</h2>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {COVERAGE.map(({ title, desc }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
                    className="p-5 bg-surface rounded-xl border border-navy/8"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Heart size={15} className="text-gold" />
                      <h3 className="font-semibold text-navy text-sm">{title}</h3>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Plan Features */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-2xl font-bold text-navy mb-5">Plan Features</h2>
              <div className="bg-surface rounded-2xl p-6 border border-navy/8">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PLAN_FEATURES.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 size={15} className="text-gold shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Panel Hospital Access */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}>
              <div className="bg-navy rounded-2xl p-7 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 size={20} className="text-gold" />
                  <h3 className="font-display font-bold text-xl">Nationwide Panel Hospital Access</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Your employees gain immediate access to our extensive network of panel hospitals across Pakistan — from major metropolitan cities to secondary towns. Direct billing arrangements mean employees pay no upfront costs for covered treatments at panel hospitals.
                </p>
                <Link to="/health-care/panel-hospitals" className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:underline">
                  View Panel Hospital Network →
                </Link>
              </div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-2xl font-bold text-navy mb-3">Request a Custom Corporate Plan</h2>
              <p className="text-gray-500 text-sm mb-5">Contact our Health Care Division for a customized group plan quotation tailored to your organization's size and requirements.</p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:info@shaheeninsurance.com" className="btn-primary">
                  <Mail size={15} />
                  info@shaheeninsurance.com
                </a>
                <a href="tel:02132630370" className="btn-navy">
                  <Phone size={15} />
                  021-32630370-75
                </a>
              </div>
            </motion.div>

          </div>
          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}

