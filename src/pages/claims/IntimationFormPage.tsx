import { useState } from 'react'
import { CheckCircle2, Clock, Send, Phone, Mail, AlertCircle } from 'lucide-react'
import InnerPageHero from '../../components/layout/InnerPageHero'
import PageSEO from '../../components/shared/PageSEO'
import ScrollReveal from '../../components/shared/ScrollReveal'
import { useJourney } from '../../context/JourneyContext'
import { takafulize } from '../../lib/wording'

const NATURE_OPTIONS = ['Auto / Motor', 'Fire', 'Marine', 'Health', 'Burglary', 'Engineering / Machinery', 'Miscellaneous']

const IntimationSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="80" y="30" width="130" height="110" rx="8" fill="#D6A65A" opacity="0.07" stroke="#D6A65A" strokeWidth="1.5" />
    <rect x="95" y="52" width="100" height="8" rx="2" fill="#D6A65A" opacity="0.3" />
    <rect x="95" y="68" width="80" height="7" rx="2" fill="#D6A65A" opacity="0.2" />
    <rect x="95" y="82" width="90" height="7" rx="2" fill="#D6A65A" opacity="0.2" />
    <rect x="95" y="96" width="70" height="7" rx="2" fill="#D6A65A" opacity="0.2" />
    <rect x="95" y="112" width="100" height="12" rx="4" fill="#D6A65A" opacity="0.35" />
    <path d="M100 118 L107 118 M110 118 L120 118" stroke="#D6A65A" strokeWidth="1" opacity="0.5" />
    <circle cx="265" cy="25" r="12" fill="#D6A65A" opacity="0.5" stroke="#D6A65A" strokeWidth="1" />
    <path d="M262 28 L265 32 L270 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M45 90 C45 80 55 75 65 80 C70 75 80 78 78 88 C85 87 85 97 78 97 L50 97 C43 97 40 91 45 90Z" fill="#D6A65A" opacity="0.2" />
  </svg>
)

export default function IntimationFormPage() {
  const { isTakaful } = useJourney()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    policyNumber: '', claimantName: '', phone: '', email: '',
    vehicleProperty: '', dateOfLoss: '', natureOfLoss: '', description: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Claim Intimation — Policy ${formData.policyNumber}`)
    const body = encodeURIComponent(
      `Policy Number: ${formData.policyNumber}\nClaimant: ${formData.claimantName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nVehicle/Property: ${formData.vehicleProperty}\nDate of Loss: ${formData.dateOfLoss}\nNature of Loss: ${formData.natureOfLoss}\n\nDescription:\n${formData.description}`
    )
    window.location.href = `mailto:info@shaheeninsurance.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <>
      <PageSEO
        title="Claim Intimation Form"
        description="Submit your Shaheen Insurance claim intimation online. Our claims team will acknowledge within 5 business days."
        keywords="claim intimation Shaheen Insurance, online claim filing Pakistan, insurance claim notification"
        path="/claims/intimation"
        schema={{ '@context': 'https://schema.org', '@type': 'ContactPage', name: 'Shaheen Insurance Claim Intimation' }}
      />
      <InnerPageHero
        category="Claims"
        title="Claim Intimation"
        subtitle="Submit your claim intimation online — our claims team will acknowledge and respond within 5 business days"
        breadcrumbs={[{ label: 'Claims', path: '/claims' }, { label: 'Claim Intimation' }]}
        stats={[{ value: '5 Days', label: 'Response SLA' }, { value: 'Online', label: 'Submission' }, { value: 'Secure', label: 'Process' }]}
        svgIllustration={<IntimationSVG />}
      />

      <section className="py-20 md:py-28 bg-[#f8f7f5]">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Claim Intimation</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-4">Online Claim Intimation</h2>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xl mx-auto">Provide as much detail as possible to allow our claims team to respond promptly.</p>
              <div className="inline-flex items-center gap-3 mt-5 px-5 py-3 bg-gold/10 border border-gold/30 rounded-xl">
                <Clock size={16} className="text-gold shrink-0" />
                <p className="text-navy text-sm font-medium">Claims acknowledged within <strong>5 business days</strong></p>
              </div>
            </div>
          </ScrollReveal>

          {!submitted ? (
            <ScrollReveal>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Policy Number <span className="text-red-500">*</span></label>
                      <input type="text" name="policyNumber" value={formData.policyNumber} onChange={handleChange} required
                        placeholder="e.g. SICL/MO/2024/00123"
                        className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Claimant Name <span className="text-red-500">*</span></label>
                      <input type="text" name="claimantName" value={formData.claimantName} onChange={handleChange} required
                        placeholder="Full name as on policy"
                        className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Phone Number <span className="text-red-500">*</span></label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                        placeholder="e.g. 0300-1234567"
                        className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Vehicle / Property Description</label>
                    <input type="text" name="vehicleProperty" value={formData.vehicleProperty} onChange={handleChange}
                      placeholder="e.g. Toyota Corolla 2021 ABC-123 / Commercial property at XYZ address"
                      className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Date of Loss <span className="text-red-500">*</span></label>
                      <input type="date" name="dateOfLoss" value={formData.dateOfLoss} onChange={handleChange} required
                        className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Nature of Loss <span className="text-red-500">*</span></label>
                      <select name="natureOfLoss" value={formData.natureOfLoss} onChange={handleChange} required
                        className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all bg-white">
                        <option value="">Select claim type</option>
                        {NATURE_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Brief Description of Loss <span className="text-red-500">*</span></label>
                    <textarea name="description" value={formData.description} onChange={handleChange} required rows={5}
                      placeholder="Please describe the circumstances of the loss, including the date, location, and any relevant details..."
                      className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all resize-none" />
                  </div>

                  <div className="p-4 bg-[#f8f7f5] rounded-xl border border-gray-100 text-xs text-gray-500 leading-relaxed">
                    {takafulize('By submitting this form, you confirm that the information provided is accurate and complete. Shaheen Insurance will contact you within 5 business days with acknowledgment and next steps.', isTakaful)}
                  </div>

                  <button type="submit" className="flex items-center gap-2 bg-gold text-navy font-bold px-8 py-3.5 rounded-xl hover:bg-gold/90 transition-colors text-sm">
                    <Send size={16} /> Submit Claim Intimation
                  </button>
                </form>
              </div>
            </ScrollReveal>
          ) : (
            <ScrollReveal>
              <div className="text-center py-16 px-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={32} className="text-green-600" />
                </div>
                <h3 className="font-display font-bold text-navy text-2xl mb-3">Intimation Submitted</h3>
                <p className="text-gray-500 leading-relaxed max-w-md mx-auto mb-6">Thank you. Our claims team will acknowledge your submission and contact you within <strong className="text-navy">5 business days</strong> with a reference number and next steps.</p>
                <p className="text-sm text-gray-400">
                  If urgent, call <a href="tel:02132630370" className="text-navy font-semibold">021-32630370-75</a> or email <a href="mailto:info@shaheeninsurance.com" className="text-navy font-semibold">info@shaheeninsurance.com</a>
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      <section className="py-20 bg-light-blue relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="int-cg" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#D6A65A" strokeWidth="0.8" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#int-cg)" />
        </svg>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <ScrollReveal>
          <div className="relative z-10 max-w-2xl mx-auto px-5 text-center">
            <p className="text-gold-dark text-xs font-bold tracking-[0.25em] uppercase mb-4">Prefer Phone?</p>
            <h2 className="font-display font-black text-navy text-3xl md:text-4xl uppercase leading-tight mb-4">
              Call or <span className="text-gold-dark">Email Us</span>
            </h2>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">You can also intimate your claim directly by phone or email. Our claims team is ready to assist.</p>
            <div className="flex justify-center gap-3 flex-wrap">
              <a href="tel:02132630370" className="inline-flex items-center gap-2 bg-navy text-white font-bold px-8 py-4 rounded-xl text-sm hover:bg-navy/90 transition-colors">
                <Phone size={15} /> 021-32630370-75
              </a>
              <a href="mailto:info@shaheeninsurance.com" className="inline-flex items-center gap-2 bg-white border border-navy/15 text-navy shadow-card font-semibold px-8 py-4 rounded-xl text-sm hover:bg-white/80 transition-colors">
                <Mail size={15} /> info@shaheeninsurance.com
              </a>
            </div>
            <div className="mt-6">
              <a href="tel:111765111" className="inline-flex items-center gap-2 text-gray-500 hover:text-gold transition-colors text-sm">
                <AlertCircle size={13} /> UAN: 111-765-111
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
