import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import StepScrollShowcase from '../../components/shared/StepScrollShowcase'
import type { ShowcaseStep } from '../../components/shared/StepScrollShowcase'
import PageSEO from '../../components/shared/PageSEO'
import { FileText, ClipboardList, AlertCircle, Car, Flame, Home, Cog, Monitor, Package, Heart, Phone, Mail, ArrowRight, Clock, CheckCircle2, Upload, UserCheck, BarChart2, Banknote } from 'lucide-react'

const IntimateScreen = () => (
  <div className="space-y-2.5">
    <div className="flex items-center gap-2 mb-3">
      <img src="/logo.png" alt="" className="h-5 w-auto object-contain" />
      <span className="text-white/70 text-[9px] font-bold uppercase tracking-widest">Claims Portal</span>
    </div>
    <div className="text-gold text-xs font-bold mb-2">Submit Claim Intimation</div>
    {[
      { label: 'Policy Number', val: 'SI-2024-0891' },
      { label: 'Incident Date', val: '15 Jan 2025' },
      { label: 'Claim Type', val: 'Motor Claim ▾' },
    ].map(({ label, val }) => (
      <div key={label} className="bg-white/6 border border-white/10 rounded-lg px-3 py-2">
        <div className="text-white/35 text-[8px] mb-0.5">{label}</div>
        <div className="text-white text-[10px] font-medium">{val}</div>
      </div>
    ))}
    <div className="mt-2 bg-gold rounded-lg py-2 text-center">
      <span className="text-navy font-bold text-[10px]">Submit Intimation</span>
    </div>
  </div>
)

const DocumentsScreen = () => (
  <div className="space-y-2">
    <div className="flex items-center gap-2 mb-3">
      <Upload size={12} className="text-gold" />
      <span className="text-gold text-xs font-bold">Required Documents</span>
    </div>
    {[
      { label: 'Police Report / FIR', done: true },
      { label: 'Policy Certificate Copy', done: true },
      { label: 'Vehicle Registration Book', done: true },
      { label: 'Repair Estimates (2 garages)', done: false },
      { label: 'Driver License Copy', done: false },
    ].map(({ label, done }) => (
      <div key={label} className={`flex items-center gap-2.5 px-3 py-2 rounded-lg border ${done ? 'bg-gold/10 border-gold/30' : 'bg-white/4 border-white/8'}`}>
        <div className={`w-3.5 h-3.5 rounded-sm flex items-center justify-center shrink-0 ${done ? 'bg-gold' : 'border border-white/20'}`}>
          {done && <span className="text-navy text-[8px] font-black">✓</span>}
        </div>
        <span className={`text-[9px] ${done ? 'text-white/80' : 'text-white/40'}`}>{label}</span>
      </div>
    ))}
  </div>
)

const SurveyScreen = () => (
  <div className="space-y-3">
    <div className="flex items-center gap-2 mb-1">
      <UserCheck size={12} className="text-gold" />
      <span className="text-gold text-xs font-bold">Surveyor Assigned</span>
    </div>
    <div className="bg-white/6 border border-white/10 rounded-xl p-3 flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-navy/60 border-2 border-gold/40 flex items-center justify-center text-gold font-bold text-sm">MT</div>
      <div>
        <div className="text-white text-[10px] font-bold">Muhammad Tariq</div>
        <div className="text-white/50 text-[8px]">Senior Surveyor · Karachi</div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-2">
      {[
        { label: 'Inspection Date', val: 'Jan 18, 2025' },
        { label: 'Time Slot', val: '10:00 AM' },
        { label: 'Location', val: 'Site Visit' },
        { label: 'Status', val: '● In Progress' },
      ].map(({ label, val }) => (
        <div key={label} className="bg-white/5 border border-white/8 rounded-lg p-2">
          <div className="text-white/35 text-[7px] mb-0.5">{label}</div>
          <div className="text-white/90 text-[9px] font-medium">{val}</div>
        </div>
      ))}
    </div>
  </div>
)

const AssessmentScreen = () => (
  <div className="space-y-3">
    <div className="flex items-center gap-2 mb-1">
      <BarChart2 size={12} className="text-gold" />
      <span className="text-gold text-xs font-bold">Claim Assessment</span>
    </div>
    <div className="bg-white/6 border border-white/10 rounded-xl p-3 space-y-2">
      <div className="flex justify-between text-[9px]">
        <span className="text-white/50">Claim Reference</span>
        <span className="text-white font-bold">SI-CLM-2025-4491</span>
      </div>
      <div className="flex justify-between text-[9px]">
        <span className="text-white/50">Amount Claimed</span>
        <span className="text-white font-bold">Rs. 185,000</span>
      </div>
      <div className="flex justify-between text-[9px]">
        <span className="text-white/50">Status</span>
        <span className="text-gold font-bold">Under Review</span>
      </div>
    </div>
    <div>
      <div className="flex justify-between text-[8px] text-white/50 mb-1.5">
        <span>Assessment Progress</span><span>65%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-gold/80 to-gold rounded-full" style={{ width: '65%' }} />
      </div>
    </div>
    <div className="text-[8px] text-white/40 text-center">Expected: 3–5 working days</div>
  </div>
)

const SettlementScreen = () => (
  <div className="flex flex-col items-center justify-center h-full space-y-4 py-2">
    <div className="w-14 h-14 rounded-full bg-gold/15 border-2 border-gold/40 flex items-center justify-center">
      <Banknote size={22} className="text-gold" />
    </div>
    <div className="text-center">
      <div className="text-gold font-display font-bold text-base mb-1">Claim Settled!</div>
      <div className="text-white/50 text-[9px]">SI-CLM-2025-4491</div>
    </div>
    <div className="bg-white/6 border border-white/10 rounded-xl p-3 w-full space-y-2">
      <div className="flex justify-between text-[9px]">
        <span className="text-white/50">Settlement Amount</span>
        <span className="text-gold font-bold">Rs. 162,500</span>
      </div>
      <div className="flex justify-between text-[9px]">
        <span className="text-white/50">Account</span>
        <span className="text-white font-bold">****4821</span>
      </div>
      <div className="flex justify-between text-[9px]">
        <span className="text-white/50">Transfer Date</span>
        <span className="text-white font-bold">Jan 28, 2025</span>
      </div>
    </div>
    <div className="bg-gold/10 border border-gold/30 rounded-lg px-4 py-2">
      <span className="text-gold text-[9px] font-bold">✓ Payment Processed</span>
    </div>
  </div>
)

const CLAIM_STEPS: ShowcaseStep[] = [
  {
    id: 'intimate',
    step: 'STEP 01',
    title: 'Report & Intimate',
    desc: 'Notify Shaheen Insurance immediately after any loss or incident. Submit your claim intimation online, by phone (021-32630370-75), or by email — within the required timeframe.',
    screen: <IntimateScreen />,
  },
  {
    id: 'documents',
    step: 'STEP 02',
    title: 'Submit Documents',
    desc: 'Upload or deliver the required documents: policy copy, FIR/police report, registration, repair estimates, and any other supporting evidence specific to your claim type.',
    screen: <DocumentsScreen />,
  },
  {
    id: 'survey',
    step: 'STEP 03',
    title: 'Surveyor Inspection',
    desc: 'Our qualified surveyor visits the site to assess the loss. For motor claims this means vehicle inspection; for property claims, on-site damage survey. You\'ll receive a confirmation with surveyor details.',
    screen: <SurveyScreen />,
  },
  {
    id: 'assessment',
    step: 'STEP 04',
    title: 'Assessment & Review',
    desc: 'Our claims team reviews the surveyor report and all documentation. The claim is assessed against your policy terms. You\'ll be kept informed of progress throughout this stage.',
    screen: <AssessmentScreen />,
  },
  {
    id: 'settlement',
    step: 'STEP 05',
    title: 'Settlement & Payment',
    desc: 'Once approved, the settlement amount is transferred directly to your account. All claims are acknowledged within 5 business days of intimation — our commitment to every policyholder.',
    screen: <SettlementScreen />,
  },
]

const INNER_PAGES = [
  {
    icon: ClipboardList,
    title: 'General Procedure',
    desc: 'Step-by-step claim procedures for all insurance types — auto, fire, burglary, machinery, engineering, health, and more.',
    link: '/claims/procedure',
    cta: 'View Procedures',
  },
  {
    icon: FileText,
    title: 'Claim Forms',
    desc: 'Download motor, fire, health, burglary, and general claim forms in PDF format for offline submission.',
    link: '/claims/forms',
    cta: 'Download Forms',
  },
  {
    icon: AlertCircle,
    title: 'Claim Intimation',
    desc: 'Submit your claim intimation online — our claims team will acknowledge within 5 business days.',
    link: '/claims/intimation',
    cta: 'Intimate a Claim',
  },
]

const CLAIM_TYPES = [
  { icon: Car, label: 'Auto / Motor' },
  { icon: Flame, label: 'Fire' },
  { icon: Home, label: 'Burglary' },
  { icon: Cog, label: 'Machinery' },
  { icon: Monitor, label: 'Electronic Equipment' },
  { icon: Package, label: 'Miscellaneous' },
  { icon: Heart, label: 'Health' },
]

const INTIMATION_CHANNELS = [
  { icon: Phone, label: 'Phone', detail: '021-32630370-75', href: 'tel:02132630370' },
  { icon: Mail, label: 'Email', detail: 'info@shaheeninsurance.com', href: 'mailto:info@shaheeninsurance.com' },
  { icon: FileText, label: 'Letter / Fax', detail: 'Fax: 021-32626674', href: '#' },
]

export default function ClaimsPage() {
  return (
    <>
      <PageSEO
        title="Claims Center"
        description="File an insurance claim with Shaheen Insurance — prompt, fair settlement within 5 business days. Motor, fire, health, burglary, and miscellaneous claims. Submit online or by phone."
        keywords="insurance claim Pakistan, file claim Shaheen Insurance, motor claim, health claim, claim intimation, insurance settlement Pakistan"
        path="/claims"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'How to File an Insurance Claim with Shaheen Insurance',
          description: 'Step-by-step claim process from intimation to settlement',
          step: [
            { '@type': 'HowToStep', name: 'Report & Intimate', text: 'Notify Shaheen Insurance immediately after any loss via phone, email, or online form.' },
            { '@type': 'HowToStep', name: 'Submit Documents', text: 'Provide required documents: policy copy, FIR, damage evidence, and other supporting material.' },
            { '@type': 'HowToStep', name: 'Surveyor Inspection', text: 'A qualified surveyor inspects and assesses the loss on-site.' },
            { '@type': 'HowToStep', name: 'Assessment & Review', text: 'Claims team reviews the survey report against policy terms.' },
            { '@type': 'HowToStep', name: 'Settlement', text: 'Approved settlement amount is transferred to your account.' },
          ],
        }}
      />
      <PageHero
        title="Claims Center"
        subtitle="Prompt, fair, and transparent claims settlement — because a satisfied claimant is our most effective advertisement"
        breadcrumbs={[{ label: 'Claims' }]}
        badge="Claims Center" videoCategory="claims"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">

            {/* Visual Collage */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              className="grid grid-cols-3 gap-3 h-52 md:h-64 overflow-hidden">
              <div className="col-span-2 relative rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop"
                  alt="Claims Settlement" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/15 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="bg-gold text-navy font-bold text-xs px-3 py-1 rounded-full">5-Day SLA</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">7 Claim Types</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative rounded-2xl overflow-hidden flex-1">
                  <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80&auto=format&fit=crop"
                    alt="Documentation" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-navy/40" />
                </div>
                <div className="bg-navy rounded-2xl flex-1 flex flex-col items-center justify-center p-3 text-center">
                  <div className="text-gold font-display font-bold text-lg">28+</div>
                  <div className="text-white/60 text-[10px]">Years Experience</div>
                </div>
              </div>
            </motion.div>

            {/* SLA Promise */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-4">Our Claims Commitment</h2>
              <div className="bg-navy rounded-2xl p-8 text-white">
                <p className="font-display text-xl font-semibold text-gold italic mb-4">
                  "A satisfied claimant is the most effective advertisement for an insurance company."
                </p>
                <p className="text-white/75 leading-relaxed mb-5">
                  At Shaheen Insurance, our claims process is designed to be transparent, efficient, and fair. We are committed to prompt response and equitable settlement for every policyholder.
                </p>
                <div className="flex items-center gap-3 bg-gold/15 rounded-xl p-4">
                  <Clock size={20} className="text-gold shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-sm">Claims Acknowledgment SLA</p>
                    <p className="text-white/70 text-xs mt-0.5">All claims are acknowledged within <strong className="text-gold">5 business days</strong> of intimation.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Claims Process Showcase */}
            <div className="-mx-4 lg:-mx-8">
              <StepScrollShowcase
                steps={CLAIM_STEPS}
                heading="How Claims Work"
                subheading="Five transparent steps from intimation to settlement — so you always know where your claim stands."
              />
            </div>

            {/* Three Inner Pages */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <div className="gold-line mb-4" />
                <h2 className="font-display text-2xl font-bold text-navy mb-6">Claims Resources</h2>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {INNER_PAGES.map(({ icon: Icon, title, desc, link, cta }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  >
                    <Link
                      to={link}
                      className="group flex flex-col h-full p-6 bg-surface rounded-2xl border border-navy/8 hover:border-gold/40 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-11 h-11 rounded-xl bg-navy/8 flex items-center justify-center mb-4 group-hover:bg-navy transition-colors duration-300">
                        <Icon size={20} className="text-navy group-hover:text-gold transition-colors duration-300" />
                      </div>
                      <h3 className="font-display font-bold text-navy text-lg mb-2">{title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{desc}</p>
                      <div className="flex items-center gap-1 text-gold text-sm font-semibold">
                        {cta} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Claim Types */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <div className="gold-line mb-4" />
                <h2 className="font-display text-2xl font-bold text-navy mb-6">Claim Types We Handle</h2>
              </motion.div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
                {CLAIM_TYPES.map(({ icon: Icon, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.05 }}
                    className="flex flex-col items-center gap-2 p-4 bg-surface rounded-xl border border-navy/5 text-center"
                  >
                    <Icon size={22} className="text-gold" />
                    <span className="text-navy text-xs font-semibold leading-tight">{label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Health Claims Special Note */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <div className="p-6 bg-surface rounded-2xl border border-navy/8">
                <div className="flex items-center gap-2 mb-4">
                  <Heart size={18} className="text-gold" />
                  <h3 className="font-display font-bold text-navy text-lg">Health Claims Processing</h3>
                </div>
                <div className="space-y-2">
                  {[
                    'Health claims are processed within 15–30 working days of receiving complete documentation.',
                    'Non-panel hospital claim submissions must be made within 1 month of discharge.',
                    'Panel hospital claims are processed via direct billing — no upfront payment required.',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={14} className="text-gold shrink-0 mt-0.5" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Intimation Channels */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-2xl font-bold text-navy mb-5">Intimation Channels</h2>
              <p className="text-gray-500 text-sm mb-5">You can intimate a claim through any of the following channels. Always retain a reference number or acknowledgment.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {INTIMATION_CHANNELS.map(({ icon: Icon, label, detail, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex flex-col items-center text-center p-5 bg-navy text-white rounded-2xl hover:bg-navy/90 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center mb-3">
                      <Icon size={18} className="text-gold" />
                    </div>
                    <span className="font-semibold text-sm mb-1">{label}</span>
                    <span className="text-white/60 text-xs">{detail}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4">
              <Link to="/claims/intimation" className="btn-primary">
                <AlertCircle size={15} />
                Submit Claim Intimation
              </Link>
              <Link to="/claims/procedure" className="btn-navy">
                <ClipboardList size={15} />
                View Claim Procedures
              </Link>
            </div>

          </div>
          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}

