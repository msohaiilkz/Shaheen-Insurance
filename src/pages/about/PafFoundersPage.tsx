import { motion } from 'framer-motion'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'

export default function PafFoundersPage() {
  return (
    <>
      <PageHero title="PAF Founders — Shaheen Foundation" subtitle="The institutional sponsor behind Shaheen Insurance — Pakistan Air Force's welfare foundation"
        breadcrumbs={[{ label: 'About Us', path: '/about' }, { label: 'PAF Founders' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-5">About Shaheen Foundation</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Shaheen Foundation was <strong className="text-navy">established in 1977</strong> essentially to promote welfare activities for the benefit of serving and retired Pakistan Air Force (PAF) personnel.</p>
                <p>The organization began operations in <strong className="text-navy">1978</strong> and is registered with the Government of Pakistan, specifically the <strong className="text-navy">Ministry of Health, Welfare and Population Planning</strong>.</p>
                <p>The Foundation generates revenue through <strong className="text-navy">commercial enterprises</strong> to finance its welfare initiatives, maintaining a balance sheet exceeding <strong className="text-navy">PKR 4 Billion</strong> with an annual business turnover surpassing <strong className="text-navy">PKR 1.50 Billion</strong>.</p>
                <p>Shaheen Insurance represents the <strong className="text-navy">flagship commercial project</strong> under Shaheen Foundation's ownership, with the Foundation holding substantial shareholding as its principal founder.</p>
              </div>
            </motion.div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Established', value: '1977' },
                { label: 'Operations Begin', value: '1978' },
                { label: 'Balance Sheet', value: 'PKR 4B+' },
                { label: 'Annual Turnover', value: 'PKR 1.5B+' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-navy text-center rounded-2xl p-5">
                  <div className="font-display font-bold text-gold text-xl mb-1">{value}</div>
                  <div className="text-white/55 text-xs">{label}</div>
                </div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-2xl font-bold text-navy mb-5">Foundation Objectives</h2>
              <div className="space-y-3">
                {[
                  'Promote welfare activities for serving and retired PAF personnel and their families',
                  'Generate sustainable revenue through commercial enterprises to fund welfare programs',
                  'Develop and manage commercial projects that create value for PAF community',
                  'Maintain fiscal responsibility with a balance sheet exceeding PKR 4 Billion',
                  'Place great importance on workforce quality and efficiency across all business operations',
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-surface rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                      <span className="text-gold font-bold text-xs">{i + 1}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="bg-hero-gradient rounded-2xl p-8">
                <h3 className="font-display font-bold text-gold text-xl mb-4">Institutional Strength</h3>
                <p className="text-white/75 leading-relaxed mb-4">Shaheen Foundation places <strong className="text-white">"great importance to its workforce"</strong> across all business operations, ensuring quality and efficiency in every commercial venture.</p>
                <p className="text-white/75 leading-relaxed">Besides Shaheen Insurance, Shaheen Foundation operates several additional commercial ventures that contribute to the PAF welfare fund — making it one of Pakistan's most institutionally stable corporate foundations.</p>
              </div>
            </motion.div>
          </div>
          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}
