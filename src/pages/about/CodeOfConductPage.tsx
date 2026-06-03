import { motion } from 'framer-motion'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import PageSEO from '../../components/shared/PageSEO'
import { CheckCircle2, AlertCircle } from 'lucide-react'

export default function CodeOfConductPage() {
  return (
    <>
      <PageSEO
        title="Code of Conduct"
        description="Shaheen Insurance's Code of Conduct outlines the ethical standards and professional behavior expected across all relationships — with employees, customers, shareholders, and the public."
        keywords="Shaheen Insurance code of conduct, ethics, professional standards insurance Pakistan"
        path="/about/code-of-conduct"
      />
      <PageHero title="Code of Conduct" subtitle="Standards governing our relationships with employees, customers, shareholders, and the public"
        breadcrumbs={[{ label: 'About Us', path: '/about' }, { label: 'Code of Conduct' }]}
        videoCategory="about" />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">

            {/* Visual Collage */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              className="grid grid-cols-3 gap-3 h-44 md:h-52">
              <div className="col-span-2 relative rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop"
                  alt="Code of Conduct" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                  <span className="bg-gold text-navy font-bold text-xs px-3 py-1 rounded-full">Ethics</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">6 Objectives</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative rounded-2xl overflow-hidden flex-1">
                  <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&q=80&auto=format&fit=crop"
                    alt="Conduct" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-navy/40" />
                </div>
                <div className="bg-gold rounded-2xl flex-1 flex flex-col items-center justify-center p-3 text-center">
                  <div className="text-navy font-display font-bold text-sm">PAF</div>
                  <div className="text-navy/70 text-[10px]">Sponsored</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-5">Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The Code of Conduct establishes standards governing Shaheen Insurance's relationships with employees, customers, shareholders, and the public.</p>
              <div className="bg-gold/8 border border-gold/20 rounded-xl p-5">
                <p className="text-navy font-semibold">"Complying with the Code is a part of the terms and conditions of employment."</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <h2 className="font-display text-2xl font-bold text-navy mb-5">Six Core Objectives</h2>
              <div className="space-y-3">
                {[
                  'Describe expected standard of good insurance practice',
                  'Promote disclosure of relevant and useful information to customers',
                  'Ensure advertising is current, clear, expressed in plain language and not misleading',
                  'Provide full cost transparency including premiums and additional fees',
                  'Send renewal notices at least 30 business days before expiry',
                  'Provide customers with documentation confirming coverage details',
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

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
              <h2 className="font-display text-2xl font-bold text-navy mb-5">Claims Handling Commitments</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Acknowledge within 5 days', desc: 'Every claim is formally acknowledged within 5 business days of receipt.' },
                  { title: 'Fair & Prompt Handling', desc: 'Claims are handled fairly and promptly without unnecessary delays.' },
                  { title: 'Surveyor Information', desc: "Policyholder is provided with the surveyor's contact information upon assignment." },
                  { title: 'Prompt Settlement', desc: 'Settlement is processed promptly upon receipt of all required documents.' },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-3 p-5 bg-green-50 rounded-xl border border-green-100">
                    <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-navy text-sm mb-1">{title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <h2 className="font-display text-2xl font-bold text-navy mb-5">Ethical Standards</h2>
              <div className="space-y-3">
                {[
                  'Employees must avoid conflicts of interest in all business dealings',
                  'Protection of company assets is mandatory at all times',
                  'Confidentiality of all client and company information must be maintained',
                  'Full compliance with Pakistani law and SECP regulations is required',
                  'Alcohol or drugs on company premises are strictly prohibited',
                  'All forms of gambling and betting are strictly prohibited',
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-surface rounded-xl">
                    <AlertCircle size={16} className="text-navy/40 shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}>
              <div className="bg-hero-gradient rounded-2xl p-8">
                <h3 className="font-display font-bold text-gold text-xl mb-3">Good Faith Principle</h3>
                <p className="text-white/80 leading-relaxed">Insurance contracts require <strong className="text-white">"utmost good faith"</strong> from all parties. Breaches of this principle render contracts <strong className="text-gold">"void ab initio"</strong> — from the very beginning. Shaheen Insurance upholds this principle in every policy and interaction.</p>
              </div>
            </motion.div>
          </div>
          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}
