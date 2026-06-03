import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import StepScrollShowcase from '../../components/shared/StepScrollShowcase'
import type { ShowcaseStep } from '../../components/shared/StepScrollShowcase'
import PageSEO from '../../components/shared/PageSEO'
import { Heart, Users, User, Building2, Shield, PhoneCall, Clock, MapPin, CheckCircle2, ArrowRight } from 'lucide-react'

const TakafulScreen = () => (
  <div className="space-y-2.5">
    <div className="flex items-center gap-2 mb-2">
      <img src="/logo.png" alt="" className="h-5 w-auto object-contain" />
      <span className="text-gold text-[9px] font-bold uppercase tracking-widest">Window Takaful</span>
    </div>
    <div className="text-white text-xs font-bold">Takaful Health Care Plans</div>
    <div className="text-white/40 text-[9px] mb-2">Shariah-compliant · SECP Authorized</div>
    {[
      { name: 'Health Care', coverage: 'Rs. 200,000', badge: 'Basic' },
      { name: 'Health Care Plus', coverage: 'Rs. 500,000', badge: 'Popular' },
      { name: 'Takaful Wallet', coverage: 'Rs. 1,000,000', badge: 'Premium' },
    ].map(({ name, coverage, badge }) => (
      <div key={name} className={`flex items-center justify-between px-3 py-2 rounded-lg border ${badge === 'Popular' ? 'bg-gold/10 border-gold/30' : 'bg-white/5 border-white/8'}`}>
        <div>
          <div className={`text-[9px] font-bold ${badge === 'Popular' ? 'text-gold' : 'text-white/80'}`}>{name}</div>
          <div className="text-white/40 text-[7px]">Coverage: {coverage}</div>
        </div>
        <span className={`text-[7px] font-bold px-2 py-0.5 rounded-full ${badge === 'Popular' ? 'bg-gold text-navy' : 'bg-white/10 text-white/50'}`}>{badge}</span>
      </div>
    ))}
  </div>
)

const GroupHealthScreen = () => (
  <div className="space-y-2.5">
    <div className="flex items-center gap-2 mb-2">
      <Users size={12} className="text-gold" />
      <span className="text-gold text-xs font-bold">Group Health Insurance</span>
    </div>
    <div className="bg-white/6 border border-white/10 rounded-xl p-3 space-y-1.5">
      <div className="flex justify-between text-[9px]">
        <span className="text-white/50">Organization</span>
        <span className="text-white font-bold">Pak Textile Ltd</span>
      </div>
      <div className="flex justify-between text-[9px]">
        <span className="text-white/50">Total Employees</span>
        <span className="text-white font-bold">250 Members</span>
      </div>
      <div className="flex justify-between text-[9px]">
        <span className="text-white/50">Coverage / Member</span>
        <span className="text-gold font-bold">Rs. 2,000,000</span>
      </div>
      <div className="flex justify-between text-[9px]">
        <span className="text-white/50">Per-Head Premium</span>
        <span className="text-green-400 font-bold">Cost-Effective</span>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-2">
      {['Hospitalization', 'Maternity', 'OPD Option', 'Dental Option'].map(f => (
        <div key={f} className="flex items-center gap-1.5 bg-white/5 border border-white/8 rounded-lg px-2 py-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
          <span className="text-white/70 text-[8px]">{f}</span>
        </div>
      ))}
    </div>
  </div>
)

const IndividualScreen = () => (
  <div className="space-y-2.5">
    <div className="flex items-center gap-2 mb-2">
      <User size={12} className="text-gold" />
      <span className="text-gold text-xs font-bold">Individual / Family Plan</span>
    </div>
    <div className="flex gap-2 mb-2">
      {['Self', 'Family', 'Parents'].map((t, i) => (
        <div key={t} className={`flex-1 text-center py-2 rounded-lg text-[9px] font-bold border ${i === 1 ? 'bg-gold/15 border-gold/40 text-gold' : 'bg-white/5 border-white/8 text-white/50'}`}>{t}</div>
      ))}
    </div>
    <div className="space-y-1.5">
      {[
        { label: 'Sum Insured', val: 'Up to Rs. 500,000' },
        { label: 'Medical Check-up', val: 'Not Required' },
        { label: 'Family Members', val: 'Up to 6 Members' },
        { label: 'No-Claim Discount', val: '✓ Available' },
      ].map(({ label, val }) => (
        <div key={label} className="flex justify-between text-[9px] border-b border-white/5 pb-1">
          <span className="text-white/45">{label}</span>
          <span className="text-white/90 font-medium">{val}</span>
        </div>
      ))}
    </div>
  </div>
)

const PanelScreen = () => (
  <div className="space-y-2">
    <div className="flex items-center gap-2 mb-2">
      <Building2 size={12} className="text-gold" />
      <span className="text-gold text-xs font-bold">Panel Hospital Network</span>
    </div>
    <div className="grid grid-cols-3 gap-1.5 mb-2">
      {['Karachi', 'Lahore', 'Islamabad', 'Faisalabad', 'Peshawar', 'Multan'].map(city => (
        <div key={city} className="bg-white/5 border border-white/8 rounded-lg py-1.5 text-center">
          <div className="w-1.5 h-1.5 bg-gold rounded-full mx-auto mb-0.5" />
          <span className="text-white/60 text-[7px]">{city}</span>
        </div>
      ))}
    </div>
    <div className="space-y-1.5">
      {[
        '✓ Cashless direct billing',
        '✓ 24-hr helpline access',
        '✓ Hospital discounts',
      ].map(f => (
        <div key={f} className="text-[9px] text-gold/80 bg-gold/5 border border-gold/15 rounded-lg px-3 py-1.5">{f}</div>
      ))}
    </div>
  </div>
)

const HEALTH_STEPS: ShowcaseStep[] = [
  {
    id: 'takaful',
    step: 'STEP 01',
    title: 'Takaful Health Care',
    desc: 'Our Window Takaful Operations offer Shariah-compliant health coverage — SECP authorized since 2018. Choose from three plans: Health Care, Health Care Plus, and Takaful Wallet with coverage up to Rs. 1,000,000.',
    screen: <TakafulScreen />,
  },
  {
    id: 'group',
    step: 'STEP 02',
    title: 'Group Health Insurance',
    desc: 'Comprehensive corporate health solutions designed for businesses. Benefit from higher coverage limits at significantly lower per-head premiums — making employee health coverage cost-effective for organizations of any size.',
    screen: <GroupHealthScreen />,
  },
  {
    id: 'individual',
    step: 'STEP 03',
    title: 'Individual & Family Plans',
    desc: 'Affordable health coverage for individuals and families with no medical check-up required. Cover up to 6 family members, enjoy no-claim discounts, and access our panel hospital network across Pakistan.',
    screen: <IndividualScreen />,
  },
  {
    id: 'panel',
    step: 'STEP 04',
    title: 'Panel Hospital Network',
    desc: 'Access our nationwide network of empanelled hospitals offering cashless treatment, discounts on procedures, 24-hour helplines, and dedicated nursing staff — so you get quality care without upfront financial burden.',
    screen: <PanelScreen />,
  },
]

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
      <PageSEO
        title="Health Care Insurance"
        description="Shaheen Insurance health care — individual, family, group corporate, Takaful health plans, and panel hospital network across Pakistan. We Care As You Prosper."
        keywords="health insurance Pakistan, group health insurance, individual health plan, Takaful health, panel hospitals Pakistan, health cover Karachi"
        path="/health-care"
        schema={{ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Health Insurance', provider: { '@type': 'InsuranceAgency', name: 'Shaheen Insurance Company Limited' }, areaServed: 'PK', description: 'Individual, family, group, and Takaful health insurance in Pakistan.' }}
      />
      <PageHero
        title="Health Care"
        subtitle="We Care As You Prosper — comprehensive health insurance solutions for individuals, families, and corporates across Pakistan"
        breadcrumbs={[{ label: 'Health Care' }]}
        badge="Health Care Division" videoCategory="health"
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">

            {/* Mission with Visual */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-8 uppercase tracking-wide">Our Mission</h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
                <div className="bg-navy p-8 text-white h-full flex flex-col justify-center relative overflow-hidden shadow-xl border border-navy/10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10" />
                  <p className="font-display text-2xl md:text-3xl font-bold text-gold italic mb-6 leading-tight">"We Care As You Prosper"</p>
                  <p className="text-white/80 leading-relaxed text-base font-light relative z-10">
                    Our Health Care Division provides dedicated coverage for individuals, families, and organizations in Pakistan. Whether you need personal protection, family health plans, or employee group coverage — our products are tailored to meet real needs at accessible premiums.
                  </p>
                </div>
                
                <div className="relative group h-full">
                  <div className="absolute -inset-2 bg-gold/10 transform -rotate-2 group-hover:rotate-1 transition-transform duration-500" />
                  <img 
                    src="/pakistani_family.png" 
                    alt="Pakistani family health insurance protection" 
                    className="relative w-full h-full object-cover shadow-lg border border-gold/20 group-hover:-translate-y-1 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>

            {/* Health Products */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <div className="gold-line mb-4" />
                <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-2 uppercase tracking-wide">Health Products</h2>
                <p className="text-navy/60 mb-8 text-base font-light">Explore our full range of health insurance products tailored to your needs.</p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {PRODUCTS.map(({ icon: Icon, title, desc, link, badge }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  >
                    <Link
                      to={link}
                      className="group flex flex-col h-full p-6 bg-surface border border-navy/5 hover:border-gold/40 hover:shadow-card transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-navy/5 rounded-bl-full transition-transform duration-500 group-hover:scale-110" />
                      
                      <div className="flex items-start justify-between mb-6 relative z-10">
                        <div className="w-12 h-12 bg-navy/5 flex items-center justify-center group-hover:bg-navy transition-colors duration-300 rounded-sm">
                          <Icon size={22} className="text-navy group-hover:text-gold transition-colors duration-300" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gold bg-gold/10 px-3 py-1.5 border border-gold/20">{badge}</span>
                      </div>
                      
                      <h3 className="font-display font-bold text-navy text-lg mb-3 group-hover:text-gold transition-colors duration-200 tracking-wide uppercase">{title}</h3>
                      <p className="text-navy/60 text-sm leading-relaxed flex-grow mb-6 font-light">{desc}</p>
                      
                      <div className="flex items-center gap-2 text-navy text-sm font-bold group-hover:text-gold transition-colors duration-200 mt-auto pt-4 border-t border-navy/5">
                        <span className="relative">
                          Learn More
                          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-300" />
                        </span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Health Products Showcase */}
            <div className="-mx-4 lg:-mx-8">
              <StepScrollShowcase
                steps={HEALTH_STEPS}
                heading="Our Health Products"
                subheading="Four coverage solutions designed for every stage of life — from individual plans to corporate group policies and Shariah-compliant Takaful."
              />
            </div>

            {/* Three Benefits */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <div className="gold-line mb-4" />
                <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-2 uppercase tracking-wide">Benefits of Health Insurance</h2>
                <p className="text-navy/60 mb-8 text-base font-light">Three compelling reasons why health insurance is essential for you and your organization.</p>
              </motion.div>

              <div className="space-y-4">
                {BENEFITS.map(({ icon: Icon, title, desc }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                    className="flex gap-4 md:gap-6 p-6 bg-surface border border-navy/5 hover:shadow-md transition-shadow duration-300 group"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-navy flex items-center justify-center shrink-0 rounded-sm group-hover:bg-gold transition-colors duration-300">
                      <Icon size={24} className="text-gold group-hover:text-navy transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-navy text-lg md:text-xl mb-2 tracking-wide group-hover:text-gold transition-colors duration-300">{title}</h3>
                      <p className="text-navy/60 text-sm leading-relaxed font-light">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Health Care Services */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-8 uppercase tracking-wide">Health Care Services</h2>
              <div className="relative bg-navy p-8 md:p-10 overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 border-[40px] border-white/5 rounded-full transform translate-x-32 -translate-y-32" />
                <div className="relative z-10">
                  <p className="text-white/80 mb-8 leading-relaxed text-base font-light border-l-2 border-gold pl-4">
                    Our Health Care Division provides a comprehensive suite of support services to ensure you receive the best possible care before, during, and after hospitalization.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-6">
                    {SERVICES.map(({ icon: Icon, text }) => (
                      <li key={text} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0 rounded-sm backdrop-blur-sm">
                          <Icon size={18} className="text-gold" />
                        </div>
                        <span className="text-white/90 text-sm leading-relaxed font-light">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/claims/intimation" className="btn-primary">File a Health Claim</Link>
              <Link to="/contact" className="btn-navy">Contact Health Division</Link>
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
