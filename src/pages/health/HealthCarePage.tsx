import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import { Heart, Users, User, Building2, Shield, PhoneCall, Clock, MapPin, CheckCircle2, ArrowRight } from 'lucide-react'

const PRODUCTS = [
  {
    icon: Heart,
    title: 'Shaheen Takaful Health Care',
    desc: 'Shariah-compliant health coverage under our Window Takaful Operations — includes Takaful Health Care, Health Care Plus, and Takaful Wallet.',
    link: '/health-care/takaful',
    badge: 'Window Takaful',
  },
  {
    icon: Users,
    title: 'Group Health Insurance',
    desc: 'Corporate health solutions offering higher coverage limits and lower per-head premiums for organizations and their employees.',
    link: '/health-care/group',
    badge: 'Corporate',
  },
  {
    icon: User,
    title: 'Individual / Family Health Insurance',
    desc: 'Affordable health packages for individuals and families with no medical check-up required and attractive no-claim discounts.',
    link: '/health-care/individual',
    badge: 'Personal',
  },
  {
    icon: Building2,
    title: 'Panel Hospital Network',
    desc: 'Access to our nationwide network of panel hospitals offering cashless treatment, discounts, and quality healthcare services.',
    link: '/health-care/panel-hospitals',
    badge: 'Nationwide',
  },
]

const BENEFITS = [
  {
    icon: Shield,
    title: 'Peace of Mind',
    desc: 'Medical costs in Pakistan are rising at 30%+ annually. Our health insurance shields you from escalating healthcare expenses so unexpected illness never becomes a financial crisis.',
  },
  {
    icon: Building2,
    title: 'Quality Healthcare',
    desc: 'Our partnerships with hospitals across Pakistan emphasize service standards and quality care — ensuring you receive the treatment you deserve, when you need it most.',
  },
  {
    icon: Users,
    title: 'Enhanced Employee Benefits',
    desc: 'Employers benefit from higher coverage limits at significantly lower per-head premium costs, making comprehensive employee health coverage both feasible and cost-effective.',
  },
]

const SERVICES = [
  { icon: PhoneCall, text: '24-hour hospital information helplines for immediate assistance' },
  { icon: Clock, text: '24-hour dedicated nursing staff access for medical guidance' },
  { icon: MapPin, text: 'Nationwide medical assistance network across Pakistan' },
  { icon: Building2, text: 'Panel hospital discounts on treatments and procedures' },
  { icon: CheckCircle2, text: 'Claim reimbursement services with dedicated processing team' },
]

export default function HealthCarePage() {
  return (
    <>
      <PageHero
        title="Health Care"
        subtitle="We Care As You Prosper — comprehensive health insurance solutions for individuals, families, and corporates across Pakistan"
        breadcrumbs={[{ label: 'Health Care' }]}
        badge="Health Care Division"
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">

            {/* Mission */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">Our Mission</h2>
              <div className="bg-navy p-6 md:p-8 text-white">
                <p className="font-display text-xl md:text-2xl font-semibold text-gold italic mb-4">"We Care As You Prosper"</p>
                <p className="text-white/75 leading-relaxed text-sm md:text-base">
                  Our Health Care Division provides dedicated coverage for individuals, families, and organizations. Whether you need personal protection, family health plans, or employee group coverage — our products are tailored to meet real needs at accessible premiums.
                </p>
              </div>
            </motion.div>

            {/* Health Products */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <div className="gold-line mb-4" />
                <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-2">Health Products</h2>
                <p className="text-navy/55 mb-6 text-sm">Explore our full range of health insurance products tailored to your needs.</p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PRODUCTS.map(({ icon: Icon, title, desc, link, badge }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  >
                    <Link
                      to={link}
                      className="group flex flex-col h-full p-5 bg-surface border border-navy/8 hover:border-gold/40 hover:shadow-card transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-11 h-11 bg-navy/8 flex items-center justify-center group-hover:bg-navy transition-colors duration-300">
                          <Icon size={20} className="text-navy group-hover:text-gold transition-colors duration-300" />
                        </div>
                        <span className="text-xs font-semibold text-gold bg-gold/10 px-2 py-1">{badge}</span>
                      </div>
                      <h3 className="font-display font-bold text-navy text-base mb-2 group-hover:text-gold transition-colors duration-200">{title}</h3>
                      <p className="text-navy/55 text-sm leading-relaxed flex-1 mb-4">{desc}</p>
                      <div className="flex items-center gap-1 text-gold text-sm font-semibold">
                        Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Three Benefits */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <div className="gold-line mb-4" />
                <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-2">Benefits of Health Insurance</h2>
                <p className="text-navy/55 mb-6 text-sm">Three compelling reasons why health insurance is essential for you and your organization.</p>
              </motion.div>

              <div className="space-y-4">
                {BENEFITS.map(({ icon: Icon, title, desc }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                    className="flex gap-4 md:gap-5 p-5 bg-surface border border-navy/8"
                  >
                    <div className="w-11 h-11 md:w-12 md:h-12 bg-navy flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-navy text-base md:text-lg mb-1">{title}</h3>
                      <p className="text-navy/55 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Health Care Services */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-6">Health Care Services</h2>
              <div className="bg-navy p-6 md:p-8">
                <p className="text-white/70 mb-6 leading-relaxed text-sm md:text-base">
                  Our Health Care Division provides a comprehensive suite of support services to ensure you receive the best possible care before, during, and after hospitalization.
                </p>
                <ul className="space-y-4">
                  {SERVICES.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={15} className="text-gold" />
                      </div>
                      <span className="text-white/80 text-sm leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Link to="/claims/intimation" className="btn-primary">File a Health Claim</Link>
              <Link to="/contact" className="btn-navy">Contact Health Division</Link>
            </div>
          </div>

          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}
