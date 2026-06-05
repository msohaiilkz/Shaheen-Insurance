import AboutHero from '../../components/layout/AboutHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import PageSEO from '../../components/shared/PageSEO'
import ScrollReveal from '../../components/shared/ScrollReveal'
import { StaggerReveal } from '../../components/shared/ScrollReveal'
import { CheckCircle2, AlertCircle } from 'lucide-react'

const OBJECTIVES = [
  'Describe expected standard of good insurance practice',
  'Promote disclosure of relevant and useful information to customers',
  'Ensure advertising is current, clear, expressed in plain language and not misleading',
  'Provide full cost transparency including premiums and additional fees',
  'Send renewal notices at least 30 business days before expiry',
  'Provide customers with documentation confirming coverage details',
]

const CLAIMS_COMMITMENTS = [
  { title: 'Acknowledge within 5 days', desc: 'Every claim is formally acknowledged within 5 business days of receipt.' },
  { title: 'Fair & Prompt Handling', desc: 'Claims are handled fairly and promptly without unnecessary delays.' },
  { title: 'Surveyor Information', desc: "Policyholder is provided with the surveyor's contact information upon assignment." },
  { title: 'Prompt Settlement', desc: 'Settlement is processed promptly upon receipt of all required documents.' },
]

const ETHICAL_STANDARDS = [
  'Employees must avoid conflicts of interest in all business dealings',
  'Protection of company assets is mandatory at all times',
  'Confidentiality of all client and company information must be maintained',
  'Full compliance with Pakistani law and SECP regulations is required',
  'Alcohol or drugs on company premises are strictly prohibited',
  'All forms of gambling and betting are strictly prohibited',
]

export default function CodeOfConductPage() {
  return (
    <>
      <PageSEO
        title="Code of Conduct"
        description="Shaheen Insurance's Code of Conduct outlines the ethical standards and professional behavior expected across all relationships — with employees, customers, shareholders, and the public."
        keywords="Shaheen Insurance code of conduct, ethics, professional standards insurance Pakistan"
        path="/about/code-of-conduct"
      />
      <AboutHero
        category="About Shaheen Insurance"
        title="Code of Conduct"
        subtitle="Standards governing our relationships with employees, customers, shareholders, and the public"
        breadcrumbs={[{ label: 'About Us', path: '/about' }, { label: 'Code of Conduct' }]}
        accent={{ value: '6', label: 'Core Objectives' }}
      />

      <section className="py-16 md:py-24 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">

            {/* Introduction */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-7 border border-gray-100">
                <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-2">Introduction</p>
                <h2 className="font-display font-black text-navy text-2xl md:text-3xl uppercase leading-tight tracking-tight mb-4">Our Code of Conduct</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">The Code of Conduct establishes standards governing Shaheen Insurance's relationships with employees, customers, shareholders, and the public.</p>
                <div className="bg-gold/8 border border-gold/20 rounded-xl p-5">
                  <p className="text-navy font-semibold text-sm">"Complying with the Code is a part of the terms and conditions of employment."</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Objectives header */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-7 border border-gray-100">
                <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-2">Objectives</p>
                <h2 className="font-display font-black text-navy text-2xl md:text-3xl uppercase leading-tight tracking-tight mb-1">Six Core Objectives</h2>
                <p className="text-gray-500 text-sm">The Code is designed to uphold best practices in insurance service delivery and customer protection.</p>
              </div>
            </ScrollReveal>

            {/* Objectives list */}
            <StaggerReveal className="space-y-3">
              {OBJECTIVES.map((item, i) => (
                <div key={i} className="flex gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-gold/30 transition-all duration-300">
                  <div className="w-7 h-7 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-gold font-bold text-xs">{i + 1}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </StaggerReveal>

            {/* Claims Handling header */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-7 border border-gray-100">
                <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-2">Claims</p>
                <h2 className="font-display font-black text-navy text-2xl md:text-3xl uppercase leading-tight tracking-tight mb-1">Claims Handling Commitments</h2>
                <p className="text-gray-500 text-sm">Our binding commitments to every policyholder when a claim is made.</p>
              </div>
            </ScrollReveal>

            {/* Claims cards */}
            <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CLAIMS_COMMITMENTS.map(({ title, desc }) => (
                <div key={title} className="flex gap-3 p-5 bg-white rounded-xl border border-gray-100 hover:border-gold/30 hover:shadow-sm transition-all duration-300">
                  <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-navy text-sm mb-1">{title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </StaggerReveal>

            {/* Ethical Standards header */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-7 border border-gray-100">
                <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-2">Standards</p>
                <h2 className="font-display font-black text-navy text-2xl md:text-3xl uppercase leading-tight tracking-tight mb-1">Ethical Standards</h2>
                <p className="text-gray-500 text-sm">Non-negotiable conduct standards applied to all Shaheen Insurance employees.</p>
              </div>
            </ScrollReveal>

            {/* Ethical Standards list */}
            <StaggerReveal className="space-y-3">
              {ETHICAL_STANDARDS.map((item, i) => (
                <div key={i} className="flex gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-gold/20 transition-all duration-300">
                  <AlertCircle size={16} className="text-navy/40 shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </StaggerReveal>

            {/* Good Faith */}
            <ScrollReveal>
              <div className="bg-hero-gradient rounded-2xl p-7 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-48 h-48 border-[32px] border-white/5 rounded-full" />
                <div className="relative z-10">
                  <h3 className="font-display font-bold text-gold text-xl mb-3">Good Faith Principle</h3>
                  <p className="text-white/80 leading-relaxed text-sm">Insurance contracts require <strong className="text-white">"utmost good faith"</strong> from all parties. Breaches of this principle render contracts <strong className="text-gold">"void ab initio"</strong> — from the very beginning. Shaheen Insurance upholds this principle in every policy and interaction.</p>
                </div>
              </div>
            </ScrollReveal>

          </div>

          <div className="sticky top-24 self-start"><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}
