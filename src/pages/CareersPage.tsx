import { motion } from 'framer-motion'
import PageHero from '../components/layout/PageHero'
import ContactSidebar from '../components/layout/ContactSidebar'
import PageSEO from '../components/shared/PageSEO'
import { Briefcase, Mail, Phone, CheckCircle2, Users, TrendingUp, Award } from 'lucide-react'

const CULTURE_POINTS = [
  { icon: Users, title: 'Team Oriented', desc: 'A collaborative, professional work environment backed by institutional stability of Shaheen Foundation (PAF).' },
  { icon: TrendingUp, title: 'Growth Focused', desc: 'Opportunities to advance within a nationally recognized general insurance company with 28+ years of operational excellence.' },
  { icon: Award, title: 'Recognized Excellence', desc: 'Annual award ceremonies recognizing top performers, best new talent, and outstanding contributions across departments.' },
]

export default function CareersPage() {
  return (
    <>
      <PageSEO
        title="Careers at Shaheen Insurance"
        description="Join Shaheen Insurance — build a career with Pakistan's PACRA A++ rated insurer. We offer a professional, growth-oriented environment backed by Shaheen Foundation (PAF)."
        keywords="insurance jobs Pakistan, Shaheen Insurance careers, insurance company jobs Karachi, PAF sponsored company jobs"
        path="/careers"
        schema={{ '@context': 'https://schema.org', '@type': 'EmployerAggregateRating', itemReviewed: { '@type': 'Organization', name: 'Shaheen Insurance Company Limited' } }}
      />
      <PageHero
        title="Careers"
        subtitle="Build your career with one of Pakistan's most trusted insurance institutions — backed by Shaheen Foundation (PAF)"
        breadcrumbs={[{ label: 'Careers' }]} videoCategory="careers"
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">

            {/* Visual Collage */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              className="grid grid-cols-3 gap-3 h-52 md:h-64 overflow-hidden">
              <div className="col-span-2 relative rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop"
                  alt="Careers at Shaheen Insurance Pakistan" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                  <span className="bg-gold text-navy font-bold text-xs px-3 py-1 rounded-full">PAF Sponsored</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">Since 1996</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative rounded-2xl overflow-hidden flex-1">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80&auto=format&fit=crop"
                    alt="Team" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-navy/40" />
                </div>
                <div className="bg-navy rounded-2xl flex-1 flex flex-col items-center justify-center p-3 text-center">
                  <div className="text-gold font-display font-bold text-lg">28+</div>
                  <div className="text-white/60 text-[10px]">Years of Growth</div>
                </div>
              </div>
            </motion.div>

            {/* No Openings State */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-6">Current Openings</h2>
              <div className="text-center py-12 px-6 bg-surface border border-navy/8">
                <div className="w-16 h-16 bg-navy/8 flex items-center justify-center mx-auto mb-5">
                  <Briefcase size={28} className="text-navy/40" />
                </div>
                <h3 className="font-display font-bold text-navy text-xl mb-3">No Vacancies at This Time</h3>
                <p className="text-navy/55 text-sm leading-relaxed max-w-md mx-auto">
                  There are no open positions currently. We do, however, keep CVs on file and reach out when suitable roles arise. Send your profile and we will contact you.
                </p>
              </div>
            </motion.div>

            {/* Encouragement Section */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="bg-navy p-6 md:p-8 text-white">
                <h3 className="font-display font-bold text-xl md:text-2xl mb-3">Send Your CV Anyway</h3>
                <p className="text-white/70 leading-relaxed text-sm mb-6">
                  Shaheen Insurance hires across underwriting, claims, sales, marketing, finance, IT, and administration. Candidates from business, actuarial, engineering, and IT backgrounds are welcome. Experienced insurance professionals are particularly valued.
                </p>
                <div className="space-y-3">
                  {[
                    'CVs are kept on file and reviewed when positions open.',
                    'Fresh graduates from business, finance, actuarial, and IT backgrounds are welcome.',
                    'Experienced insurance professionals — bring your expertise to a stable institution.',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-gold shrink-0 mt-0.5" />
                      <p className="text-white/75 text-sm leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Culture */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <div className="gold-line mb-4" />
                <h2 className="font-display text-xl md:text-2xl font-bold text-navy mb-6">Why Work at Shaheen Insurance</h2>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {CULTURE_POINTS.map(({ icon: Icon, title, desc }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                    className="p-5 bg-surface border border-navy/8"
                  >
                    <div className="w-10 h-10 bg-navy/8 flex items-center justify-center mb-4">
                      <Icon size={18} className="text-gold" />
                    </div>
                    <h3 className="font-semibold text-navy text-sm mb-2">{title}</h3>
                    <p className="text-navy/55 text-xs leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* How to Apply */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-xl md:text-2xl font-bold text-navy mb-5">How to Apply</h2>
              <p className="text-navy/55 text-sm mb-5 leading-relaxed">
                Send your CV with a brief cover letter to our Human Resources department via email or phone. Mention your area of interest and current experience level.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:info@shaheeninsurance.com?subject=Job Application — Shaheen Insurance"
                  className="btn-primary"
                >
                  <Mail size={15} />
                  Send Your CV
                </a>
                <a href="tel:02132630370" className="btn-navy">
                  <Phone size={15} />
                  021-32630370-75
                </a>
              </div>
              <p className="text-navy/40 text-xs mt-4">
                Email: <span className="text-navy font-medium">info@shaheeninsurance.com</span> &nbsp;|&nbsp; Subject: Job Application — [Your Name]
              </p>
            </motion.div>

          </div>
          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}

