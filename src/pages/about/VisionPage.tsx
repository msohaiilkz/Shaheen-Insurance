import { motion } from 'framer-motion'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import { Eye, Target, Heart, Globe } from 'lucide-react'

export default function VisionPage() {
  return (
    <>
      <PageHero
        title="Vision & Mission"
        subtitle="Our guiding principles — delivering insurance at its best while caring for society and our customers"
        breadcrumbs={[{ label: 'About Us', path: '/about' }, { label: 'Vision & Mission' }]}
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">

            {/* Vision */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center">
                  <Eye size={22} className="text-gold" />
                </div>
                <div>
                  <div className="gold-line mb-1" />
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-navy">Our Vision</h2>
                </div>
              </div>
              <div className="bg-hero-gradient p-6 md:p-8 mb-6">
                <p className="text-white text-lg md:text-xl font-display font-semibold leading-relaxed italic">
                  "To deliver general insurance at its best and to contribute positively and proactively for the welfare of our society at large as well as for the preservation of our environment, culture and ethics."
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Globe, label: 'Societal Welfare', desc: 'Contributing positively and proactively to the welfare of society at large.' },
                  { icon: Heart, label: 'Cultural Preservation', desc: 'Dedicated to preserving our environment, culture and ethical values.' },
                  { icon: Target, label: 'Insurance Excellence', desc: 'Delivering general insurance at its absolute best — no compromise.' },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="bg-surface border border-navy/8 p-5 text-center">
                    <div className="w-10 h-10 bg-gold/10 flex items-center justify-center mx-auto mb-3">
                      <Icon size={18} className="text-gold" />
                    </div>
                    <h4 className="font-semibold text-navy text-sm mb-1">{label}</h4>
                    <p className="text-navy/55 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Corporate Mission */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-navy/8 flex items-center justify-center">
                  <Target size={22} className="text-navy" />
                </div>
                <div>
                  <div className="gold-line mb-1" />
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-navy">Our Mission</h2>
                </div>
              </div>
              <div className="space-y-4 text-navy/65 leading-relaxed mb-6">
                <p>We aim to continuously improve and become a <strong className="text-navy">leading, profitable organization</strong> by meeting customer needs and enhancing shareholder value. This is accomplished through the strengths of our employees and innovative approaches to developing competitive, high-quality insurance products.</p>
                <div className="bg-gold/8 border border-gold/20 p-5">
                  <p className="text-navy font-semibold text-lg">"The interest of the policyholder is supreme."</p>
                  <p className="text-navy/55 text-sm mt-2">We commit to rendering exceptional service while providing comprehensive protection and peace of mind to all our policyholders.</p>
                </div>
              </div>
            </motion.div>

            {/* Health Division Mission */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-navy/8 flex items-center justify-center">
                  <Heart size={22} className="text-gold" />
                </div>
                <div>
                  <div className="gold-line mb-1" />
                  <h2 className="font-display text-xl md:text-2xl font-bold text-navy">Health Care Mission</h2>
                </div>
              </div>
              <div className="bg-hero-gradient p-6 md:p-8 mb-6 text-center">
                <p className="text-gold font-display font-bold text-2xl md:text-3xl italic mb-2">"We Care As You Prosper"</p>
                <p className="text-white/60 text-sm">The driving motto behind all our health care initiatives</p>
              </div>
              <div className="space-y-3">
                {[
                  'Establish nationwide home care and health services for policyholders and stakeholders',
                  'Create innovative health products addressing gaps where public healthcare falls short',
                  'Design premium services tailored to exceed customer expectations in a competitive market',
                  'Develop extended assistance offerings responsive to changing demographics and market demands',
                  'Deliver rapid, high-quality medical assistance throughout Pakistan while meeting customer expectations consistently',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-surface border border-navy/8">
                    <div className="w-6 h-6 bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-gold font-bold text-xs">{i + 1}</span>
                    </div>
                    <p className="text-navy/65 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Three benefits of health insurance */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <h3 className="font-display text-xl md:text-2xl font-bold text-navy mb-5">Three Primary Benefits of Health Insurance</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  { num: '01', title: 'Peace of Mind', desc: 'Protection against escalating medical costs rising 30%+ annually — so unexpected illness never becomes a financial crisis.' },
                  { num: '02', title: 'Quality Healthcare', desc: 'Partnerships with hospitals emphasizing service standards, ensuring policyholders receive care they deserve.' },
                  { num: '03', title: 'Enhanced Benefits', desc: 'Higher coverage limits for employers at lower premium costs — making quality health coverage affordable for organizations.' },
                ].map(({ num, title, desc }) => (
                  <div key={num} className="bg-navy p-6 text-white">
                    <div className="text-gold font-display font-bold text-4xl mb-3 opacity-40">{num}</div>
                    <h4 className="font-display font-bold text-lg mb-2">{title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}
