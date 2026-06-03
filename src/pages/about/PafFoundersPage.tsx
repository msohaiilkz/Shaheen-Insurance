import { motion } from 'framer-motion'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import PageSEO from '../../components/shared/PageSEO'

export default function PafFoundersPage() {
  return (
    <>
      <PageSEO
        title="PAF Founders — Shaheen Foundation"
        description="Shaheen Foundation — Pakistan Air Force's welfare foundation and institutional sponsor of Shaheen Insurance Company Limited. Learn about the PAF legacy behind our institution."
        keywords="Shaheen Foundation, PAF foundation, Pakistan Air Force insurance, Shaheen Insurance founders"
        path="/about/paf-founders"
      />
      <PageHero title="PAF Founders — Shaheen Foundation" subtitle="The institutional sponsor behind Shaheen Insurance — Pakistan Air Force's welfare foundation"
        breadcrumbs={[{ label: 'About Us', path: '/about' }, { label: 'PAF Founders' }]}
        videoCategory="about" />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">

            {/* Visual Collage */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              className="grid grid-cols-3 gap-3 h-52 md:h-64 overflow-hidden">
              <div className="col-span-2 relative rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=800&q=80&auto=format&fit=crop"
                  alt="Pakistan Air Force — Shaheen Foundation" className="w-full h-full object-cover object-top" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                  <span className="bg-gold text-navy font-bold text-xs px-3 py-1 rounded-full">Est. 1977</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">Ministry Registered</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="bg-navy rounded-2xl flex-1 flex flex-col items-center justify-center p-3 text-center">
                  <div className="text-gold font-display font-bold text-base">PKR 4B+</div>
                  <div className="text-white/60 text-[10px]">Balance Sheet</div>
                </div>
                <div className="bg-gold rounded-2xl flex-1 flex flex-col items-center justify-center p-3 text-center">
                  <div className="text-navy font-display font-bold text-base">PKR 1.5B+</div>
                  <div className="text-navy/70 text-[10px]">Annual Turnover</div>
                </div>
              </div>
            </motion.div>

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

