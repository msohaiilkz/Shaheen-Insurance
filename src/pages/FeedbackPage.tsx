import { useState } from 'react'
import { Send, CheckCircle2, ExternalLink, Phone, Mail, AlertCircle, MessageSquare, Star } from 'lucide-react'
import InnerPageHero from '../components/layout/InnerPageHero'
import PageSEO from '../components/shared/PageSEO'
import ScrollReveal from '../components/shared/ScrollReveal'
import { StaggerReveal } from '../components/shared/ScrollReveal'

const FEEDBACK_TYPES = [
  { icon: Star, title: 'Compliment', desc: 'Recognize outstanding service from our team.' },
  { icon: MessageSquare, title: 'Suggestion', desc: 'Help us improve with your ideas.' },
  { icon: AlertCircle, title: 'Complaint', desc: 'Report an issue for prompt resolution.' },
]

const FeedbackSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Speech bubbles */}
    <rect x="60" y="40" width="100" height="65" rx="10" fill="#D6A65A" opacity="0.08" stroke="#D6A65A" strokeWidth="1.5" />
    <path d="M80 105 L80 118 L95 105" fill="#D6A65A" opacity="0.08" stroke="#D6A65A" strokeWidth="1.2" strokeLinejoin="round" />
    {/* Text lines in bubble */}
    <rect x="73" y="53" width="74" height="6" rx="2" fill="#D6A65A" opacity="0.3" />
    <rect x="73" y="65" width="60" height="5" rx="2" fill="#D6A65A" opacity="0.2" />
    <rect x="73" y="76" width="68" height="5" rx="2" fill="#D6A65A" opacity="0.2" />
    <rect x="73" y="87" width="50" height="5" rx="2" fill="#D6A65A" opacity="0.15" />
    {/* Stars */}
    {[175, 193, 211, 229, 247].map((x, i) => (
      <path key={x} d={`M${x} 50 l3 7 7 0 -6 5 2 8 -6 -4 -6 4 2 -8 -6 -5 7 0 z`}
        fill="#D6A65A" opacity={i < 4 ? 0.5 : 0.2} />
    ))}
    {/* Reply bubble */}
    <rect x="170" y="75" width="90" height="55" rx="8" fill="#D6A65A" opacity="0.06" stroke="#D6A65A" strokeWidth="1" />
    <path d="M250 130 L255 140 L245 130" fill="#D6A65A" opacity="0.06" stroke="#D6A65A" strokeWidth="1" strokeLinejoin="round" />
    <rect x="180" y="87" width="70" height="5" rx="2" fill="#D6A65A" opacity="0.2" />
    <rect x="180" y="98" width="56" height="4" rx="2" fill="#D6A65A" opacity="0.15" />
    <rect x="180" y="108" width="63" height="4" rx="2" fill="#D6A65A" opacity="0.15" />
    {/* Checkmark badge */}
    <circle cx="265" cy="25" r="12" fill="#D6A65A" opacity="0.5" stroke="#D6A65A" strokeWidth="1" />
    <path d="M262 28 L265 32 L270 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', subject: '', cell: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(formData.subject || 'Feedback / Complaint')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nCell: ${formData.cell}\nSubject: ${formData.subject}\n\n${formData.message}`
    )
    window.location.href = `mailto:info@shaheeninsurance.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <>
      <PageSEO
        title="Feedback & Complaints"
        description="Share feedback or file a complaint with Shaheen Insurance. We take all feedback seriously and are committed to resolving issues within 5 business days."
        keywords="Shaheen Insurance feedback, complaint, customer service, insurance complaint Pakistan"
        path="/feedback"
      />
      <InnerPageHero
        category="Your Voice Matters"
        title="Feedback & Complaints"
        subtitle="Your feedback helps us improve. We take all complaints seriously and are committed to resolving them promptly"
        breadcrumbs={[{ label: 'Feedback & Complaints' }]}
        stats={[{ value: '5 Days', label: 'Response SLA' }, { value: 'Reviewed', label: 'By Management' }, { value: 'Secure', label: 'Submission' }]}
        svgIllustration={<FeedbackSVG />}
      />

      {/* Feedback Types */}
      <section className="py-20 md:py-28 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Share Your Experience</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight">Feedback</h2>
              <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">At Shaheen Insurance, every piece of feedback — positive or negative — makes us better. Submit your feedback, complaint, or suggestion using the form below.</p>
            </div>
          </ScrollReveal>

          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
            {FEEDBACK_TYPES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all text-center group">
                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/10 transition-colors">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="font-display font-bold text-navy text-base mb-2">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </StaggerReveal>

          {/* Form */}
          {!submitted ? (
            <ScrollReveal>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 max-w-3xl mx-auto">
                <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Form</p>
                <h3 className="font-display font-bold text-navy text-2xl mb-6">Share Your Feedback</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Full Name <span className="text-red-500">*</span></label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name"
                        className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Company Name</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Optional"
                        className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Email Address <span className="text-red-500">*</span></label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com"
                        className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Cell Number <span className="text-red-500">*</span></label>
                      <input type="tel" name="cell" value={formData.cell} onChange={handleChange} required placeholder="e.g. 0300-1234567"
                        className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Subject</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Brief subject of your feedback or complaint"
                      className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Message <span className="text-red-500">*</span></label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={6}
                      placeholder="Please describe your feedback, complaint, or suggestion in as much detail as possible..."
                      className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all resize-none" />
                  </div>
                  <div className="p-4 bg-[#f8f7f5] rounded-xl border border-gray-100 text-xs text-gray-500 leading-relaxed">
                    Your feedback will be reviewed by our management team. For urgent claims or policy matters, please call <strong className="text-navy">021-32630370-75</strong> directly.
                  </div>
                  <button type="submit" className="flex items-center gap-2 bg-gold text-navy font-bold px-8 py-3.5 rounded-xl hover:bg-gold/90 transition-colors text-sm">
                    <Send size={16} />Submit Feedback
                  </button>
                </form>
              </div>
            </ScrollReveal>
          ) : (
            <ScrollReveal>
              <div className="text-center py-16 px-8 bg-white rounded-2xl border border-gray-100 shadow-sm max-w-3xl mx-auto">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={32} className="text-green-600" />
                </div>
                <h3 className="font-display font-bold text-navy text-2xl mb-3">Thank You for Your Feedback</h3>
                <p className="text-gray-500 leading-relaxed max-w-md mx-auto">
                  Your feedback has been received and will be reviewed by our management team. We appreciate you taking the time to share your thoughts with us.
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* SECP + Direct Contact */}
      <section className="py-20 md:py-28 bg-navy relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="feedback-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,4 52,16 52,32 28,44 4,32 4,16" fill="none" stroke="#D6A65A" strokeWidth="1" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#feedback-hex)" />
        </svg>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gold/6 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Escalation</p>
              <h2 className="font-display font-black text-white text-4xl md:text-5xl uppercase leading-tight tracking-tight">SECP Investor Complaints</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="p-6 bg-white/6 border border-white/10 rounded-2xl hover:border-gold/30 transition-all h-full">
                <div className="w-11 h-11 bg-gold/15 rounded-xl flex items-center justify-center mb-4">
                  <ExternalLink size={20} className="text-gold" />
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-3">SECP Portal</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  Investors and shareholders with complaints related to securities regulations, corporate governance, or investor rights may file a formal complaint directly with the <strong className="text-white/80">Securities and Exchange Commission of Pakistan (SECP)</strong>.
                </p>
                <a href="http://secp.gov.pk/ComplaintForm1.asp" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold text-navy font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-gold/90 transition-colors">
                  <ExternalLink size={14} />SECP Investor Complaint Form
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="p-6 bg-white/6 border border-white/10 rounded-2xl hover:border-gold/30 transition-all h-full">
                <div className="w-11 h-11 bg-gold/15 rounded-xl flex items-center justify-center mb-4">
                  <Phone size={20} className="text-gold" />
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-3">Contact Us Directly</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">For urgent matters or if you prefer to speak with our team directly, please use the contact details below.</p>
                <div className="space-y-3">
                  <a href="tel:02132630370" className="flex items-center gap-2 text-white/70 text-sm hover:text-gold transition-colors">
                    <Phone size={14} className="text-gold" />021-32630370-75
                  </a>
                  <a href="mailto:info@shaheeninsurance.com" className="flex items-center gap-2 text-white/70 text-sm hover:text-gold transition-colors">
                    <Mail size={14} className="text-gold" />info@shaheeninsurance.com
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
