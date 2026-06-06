import { Briefcase, Mail, Phone, CheckCircle2, Users, TrendingUp, Award } from 'lucide-react'
import InnerPageHero from '../components/layout/InnerPageHero'
import PageSEO from '../components/shared/PageSEO'
import ScrollReveal from '../components/shared/ScrollReveal'
import { StaggerReveal } from '../components/shared/ScrollReveal'

const CULTURE_POINTS = [
  { icon: Users, title: 'Team Oriented', desc: 'A collaborative, professional work environment backed by institutional stability of Shaheen Foundation (PAF).' },
  { icon: TrendingUp, title: 'Growth Focused', desc: 'Opportunities to advance within a nationally recognized general insurance company with 28+ years of operational excellence.' },
  { icon: Award, title: 'Recognized Excellence', desc: 'Annual award ceremonies recognizing top performers, best new talent, and outstanding contributions across departments.' },
]

const DEPARTMENTS = [
  'Underwriting', 'Claims', 'Sales & Marketing', 'Finance & Accounts',
  'Human Resources', 'Information Technology', 'Administration', 'Actuarial',
]

const CareersSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Briefcase */}
    <rect x="85" y="65" width="110" height="80" rx="8" fill="#D6A65A" opacity="0.08" stroke="#D6A65A" strokeWidth="1.5" />
    <path d="M115 65 L115 55 C115 51 118 48 122 48 L158 48 C162 48 165 51 165 55 L165 65" stroke="#D6A65A" strokeWidth="1.5" opacity="0.4" fill="none" />
    <rect x="130" y="100" width="20" height="8" rx="2" fill="#D6A65A" opacity="0.35" />
    {/* People icons */}
    <circle cx="55" cy="60" r="10" fill="#D6A65A" opacity="0.3" stroke="#D6A65A" strokeWidth="1" />
    <path d="M43 85 C43 78 48 74 55 74 C62 74 67 78 67 85" stroke="#D6A65A" strokeWidth="1.2" opacity="0.3" fill="none" />
    <circle cx="265" cy="60" r="10" fill="#D6A65A" opacity="0.25" stroke="#D6A65A" strokeWidth="1" />
    <path d="M253 85 C253 78 258 74 265 74 C272 74 277 78 277 85" stroke="#D6A65A" strokeWidth="1.2" opacity="0.25" fill="none" />
    {/* Growth arrow */}
    <path d="M60 130 L100 110 L140 120 L200 95 L245 105" stroke="#D6A65A" strokeWidth="1.5" opacity="0.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="245" cy="105" r="4" fill="#D6A65A" opacity="0.5" />
    {/* Checkmark badge */}
    <circle cx="265" cy="25" r="12" fill="#D6A65A" opacity="0.5" stroke="#D6A65A" strokeWidth="1" />
    <path d="M262 28 L265 32 L270 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

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
      <InnerPageHero
        category="Join Our Team"
        title="Careers"
        subtitle="Build your career with one of Pakistan's most trusted insurance institutions — backed by Shaheen Foundation (PAF)"
        breadcrumbs={[{ label: 'Careers' }]}
        stats={[{ value: 'A++', label: 'PACRA Rated' }, { value: '28+', label: 'Years of Growth' }, { value: 'PAF', label: 'Sponsored' }]}
        svgIllustration={<CareersSVG />}
      />

      {/* Current Openings */}
      <section className="py-20 md:py-28 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Openings</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-6">Current Openings</h2>
              <div className="py-12 px-8 bg-white rounded-2xl border border-gray-100 text-center">
                <div className="w-16 h-16 bg-navy/8 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Briefcase size={28} className="text-navy/40" />
                </div>
                <h3 className="font-display font-bold text-navy text-xl mb-3">No Vacancies at This Time</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
                  There are no open positions currently. We keep CVs on file and reach out when suitable roles arise. Send your profile and we will contact you.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal from="right">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-navy/15">
                <img
                  src="https://images.unsplash.com/photo-1565019011521-b0575cbb57c8?w=900&q=80&auto=format&fit=crop"
                  alt="Careers at Shaheen Insurance Pakistan"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 flex gap-2 flex-wrap">
                  <span className="bg-gold text-navy font-bold text-xs px-3 py-1.5 rounded-full">PAF Sponsored</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">Since 1996</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Join + Departments */}
      <section className="py-20 md:py-28 bg-navy relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="careers-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,4 52,16 52,32 28,44 4,32 4,16" fill="none" stroke="#D6A65A" strokeWidth="1" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#careers-hex)" />
        </svg>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gold/6 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Culture</p>
              <h2 className="font-display font-black text-white text-4xl md:text-5xl uppercase leading-tight tracking-tight">Why Work at Shaheen Insurance</h2>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
            {CULTURE_POINTS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 bg-white/6 border border-white/10 rounded-2xl hover:border-gold/30 hover:bg-white/10 transition-all group">
                <div className="w-11 h-11 bg-gold/15 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2 group-hover:text-gold transition-colors">{title}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </StaggerReveal>

          <ScrollReveal>
            <div className="text-center mb-8">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Departments</p>
              <h3 className="font-display font-black text-white text-2xl uppercase">We Hire Across All Departments</h3>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {DEPARTMENTS.map(dept => (
              <div key={dept} className="p-3 bg-white/6 border border-white/10 rounded-xl hover:border-gold/30 transition-all text-center">
                <span className="text-white/70 text-xs font-medium">{dept}</span>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Send CV */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Apply</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-4">Send Your CV Anyway</h2>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xl mx-auto">Shaheen Insurance hires across underwriting, claims, sales, marketing, finance, IT, and administration. Experienced insurance professionals are particularly valued.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-[#f8f7f5] rounded-2xl border border-gray-100 p-8">
              <div className="space-y-4 mb-8">
                {[
                  'CVs are kept on file and reviewed when positions open.',
                  'Fresh graduates from business, finance, actuarial, and IT backgrounds are welcome.',
                  'Experienced insurance professionals — bring your expertise to a stable institution.',
                ].map(point => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Send your CV with a brief cover letter to our Human Resources department via email or phone. Mention your area of interest and current experience level.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:info@shaheeninsurance.com?subject=Job Application — Shaheen Insurance" className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-7 py-3.5 rounded-xl hover:bg-gold/90 transition-colors text-sm">
                  <Mail size={15} />Send Your CV
                </a>
                <a href="tel:02132630370" className="inline-flex items-center gap-2 bg-navy text-white font-bold px-7 py-3.5 rounded-xl hover:bg-navy/90 transition-colors text-sm">
                  <Phone size={15} />021-32630370-75
                </a>
              </div>
              <p className="text-gray-400 text-xs mt-4">
                Subject line: <span className="text-navy font-medium">Job Application — [Your Name]</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="careers-cg" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#D6A65A" strokeWidth="0.8" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#careers-cg)" />
        </svg>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <ScrollReveal>
          <div className="relative z-10 max-w-2xl mx-auto px-5 text-center">
            <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">Get In Touch</p>
            <h2 className="font-display font-black text-white text-3xl md:text-4xl uppercase leading-tight mb-4">
              Questions About <span className="text-gold">Careers?</span>
            </h2>
            <p className="text-white/50 mb-8 text-sm leading-relaxed">Contact our HR department or head office for any career-related queries. We look forward to hearing from talented professionals.</p>
            <div className="flex justify-center gap-3 flex-wrap">
              <a href="mailto:info@shaheeninsurance.com?subject=Career Inquiry" className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-8 py-4 rounded-xl text-sm hover:bg-gold/90 transition-colors">
                <Mail size={15} /> Email HR Team
              </a>
              <a href="tel:111765111" className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-white font-semibold px-8 py-4 rounded-xl text-sm hover:bg-white/14 transition-colors">
                <Phone size={15} /> 111-765-111
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
