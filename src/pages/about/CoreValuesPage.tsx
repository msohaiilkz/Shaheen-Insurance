import { motion } from 'framer-motion'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import { CheckCircle2 } from 'lucide-react'

const CORE_VALUES = [
  { num: '01', value: 'Integrity', desc: 'We operate with the highest standards of honesty and ethical conduct in every interaction and decision.' },
  { num: '02', value: 'Responsibility', desc: 'We take ownership of our commitments to policyholders, shareholders, employees, and the nation.' },
  { num: '03', value: 'Modesty', desc: 'We serve with humility, recognizing that our clients trust us with their most critical needs.' },
  { num: '04', value: 'Dedication towards the Company & Management', desc: 'Our team is fully committed to the vision, goals, and direction of Shaheen Insurance and its leadership.' },
  { num: '05', value: 'Commitment', desc: 'We honor every promise — from policy terms to claim settlements — without exception.' },
  { num: '06', value: 'Accountability', desc: 'Every team member is responsible for their actions and decisions, ensuring transparency at every level.' },
  { num: '07', value: 'Conscience', desc: 'We act in the best interest of our policyholders, upholding ethical practices and societal wellbeing.' },
  { num: '08', value: 'Enjoy the Work', desc: 'A motivated, happy team delivers better results. We foster a positive work culture where people take pride in what they do.' },
]

export default function CoreValuesPage() {
  return (
    <>
      <PageHero
        title="Core Values & Quality Policy"
        subtitle="The principles that guide every decision, interaction, and commitment at Shaheen Insurance"
        breadcrumbs={[{ label: 'About Us', path: '/about' }, { label: 'Core Values & Quality Policy' }]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">

            {/* Core Values Grid */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-8">Our 8 Core Values</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {CORE_VALUES.map(({ num, value, desc }, i) => (
                  <motion.div key={num} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="group p-6 bg-surface rounded-2xl border border-navy/5 hover:border-gold/30 hover:shadow-gold transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <span className="font-display font-bold text-3xl text-gold/30 group-hover:text-gold/60 transition-colors leading-none shrink-0">{num}</span>
                      <div>
                        <h3 className="font-display font-bold text-navy text-lg mb-2 group-hover:text-gold transition-colors">{value}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quality Policy */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-5">Quality Policy</h2>

              <div className="bg-hero-gradient rounded-2xl p-8 mb-6">
                <h3 className="text-gold font-display font-bold text-2xl mb-3">Honesty · Dedication · Commitment</h3>
                <p className="text-white/70 leading-relaxed">
                  These three foundational themes serve as the cornerstone of every interaction and process at Shaheen Insurance — protecting the interests of all stakeholders.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-5 bg-gold/5 border border-gold/20 rounded-xl">
                  <CheckCircle2 size={20} className="text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-navy mb-1">"We invest in quality…"</p>
                    <p className="text-gray-600 text-sm leading-relaxed">When it comes to certain things, compromise is out of the question. Shaheen Insurance commits to delivering superior client services without any justification for complaints regarding claims or any other matter.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-5 bg-surface rounded-xl">
                  <CheckCircle2 size={20} className="text-gold shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm leading-relaxed">Making optimal efforts to deliver superior client services at all times — in claims handling, policy issuance, and customer support.</p>
                </div>
                <div className="flex items-start gap-3 p-5 bg-surface rounded-xl">
                  <CheckCircle2 size={20} className="text-gold shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm leading-relaxed">This framework is designed to protect the interests of all parties involved — policyholders, shareholders, employees, and society at large.</p>
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
