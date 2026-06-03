import { motion } from 'framer-motion'
import { useState } from 'react'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import PageSEO from '../../components/shared/PageSEO'
import { CheckCircle2, Clock, Send } from 'lucide-react'

const NATURE_OPTIONS = [
  'Auto / Motor',
  'Fire',
  'Marine',
  'Health',
  'Burglary',
  'Engineering / Machinery',
  'Miscellaneous',
]

export default function IntimationFormPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    policyNumber: '',
    claimantName: '',
    phone: '',
    email: '',
    vehicleProperty: '',
    dateOfLoss: '',
    natureOfLoss: '',
    description: '',
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
        description="Submit your Shaheen Insurance claim intimation online. Our claims team will acknowledge within 5 business days. Quick and easy online claim notification form."
        keywords="claim intimation Shaheen Insurance, online claim filing Pakistan, insurance claim notification, submit claim online"
        path="/claims/intimation"
        schema={{ '@context': 'https://schema.org', '@type': 'ContactPage', name: 'Shaheen Insurance Claim Intimation', description: 'Online claim intimation form for Shaheen Insurance policyholders.' }}
      />
      <PageHero
        title="Claim Intimation Form"
        subtitle="Submit your claim intimation online — our claims team will acknowledge and respond within 5 business days"
        breadcrumbs={[{ label: 'Claims', path: '/claims' }, { label: 'Claim Intimation Form' }]}
        videoCategory="claims"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">

            {/* Visual Collage */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              className="grid grid-cols-3 gap-3 h-44 md:h-52">
              <div className="col-span-2 relative rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80&auto=format&fit=crop"
                  alt="Online Claim Intimation" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                  <span className="bg-gold text-navy font-bold text-xs px-3 py-1 rounded-full">Online Intimation</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">5-Day SLA</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative rounded-2xl overflow-hidden flex-1">
                  <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80&auto=format&fit=crop"
                    alt="Claims" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-navy/40" />
                </div>
                <div className="bg-navy rounded-2xl flex-1 flex flex-col items-center justify-center p-3 text-center">
                  <div className="text-gold font-display font-bold text-sm">Fast</div>
                  <div className="text-white/60 text-[10px]">Response</div>
                </div>
              </div>
            </motion.div>

            {/* Intro */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-4">Online Claim Intimation</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Use this form to notify Shaheen Insurance of a new claim. Please provide as much detail as possible to allow our claims team to respond promptly and effectively.
              </p>
              <div className="flex items-center gap-3 p-4 bg-gold/10 border border-gold/30 rounded-xl">
                <Clock size={18} className="text-gold shrink-0" />
                <p className="text-navy text-sm font-medium">
                  Our claims team will acknowledge your intimation within <strong>5 business days</strong> and provide a reference number and next steps.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            {!submitted ? (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">
                        Policy Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="policyNumber"
                        value={formData.policyNumber}
                        onChange={handleChange}
                        required
                        placeholder="e.g. SICL/MO/2024/00123"
                        className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">
                        Claimant Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="claimantName"
                        value={formData.claimantName}
                        onChange={handleChange}
                        required
                        placeholder="Full name as on policy"
                        className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="e.g. 0300-1234567"
                        className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Vehicle / Property Description
                    </label>
                    <input
                      type="text"
                      name="vehicleProperty"
                      value={formData.vehicleProperty}
                      onChange={handleChange}
                      placeholder="e.g. Toyota Corolla 2021 ABC-123 / Commercial property at XYZ address"
                      className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                    />
                  </div>

                  {/* Row 4 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">
                        Date of Loss <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="dateOfLoss"
                        value={formData.dateOfLoss}
                        onChange={handleChange}
                        required
                        className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">
                        Nature of Loss <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="natureOfLoss"
                        value={formData.natureOfLoss}
                        onChange={handleChange}
                        required
                        className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all bg-white"
                      >
                        <option value="">Select claim type</option>
                        {NATURE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Brief Description of Loss <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Please describe the circumstances of the loss, including the date, location, and any relevant details about the incident..."
                      className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all resize-none"
                    />
                  </div>

                  {/* Disclaimer */}
                  <div className="p-4 bg-surface rounded-xl border border-navy/5 text-xs text-gray-500 leading-relaxed">
                    By submitting this form, you confirm that the information provided is accurate and complete to the best of your knowledge. Shaheen Insurance will contact you within 5 business days to acknowledge your claim and advise on the next steps.
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-gold text-navy font-bold px-8 py-3.5 rounded-xl hover:bg-gold/90 transition-colors text-sm"
                  >
                    <Send size={16} />
                    Submit Claim Intimation
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-16 px-8 bg-surface rounded-2xl border border-navy/8"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={32} className="text-green-600" />
                </div>
                <h3 className="font-display font-bold text-navy text-2xl mb-3">Intimation Submitted</h3>
                <p className="text-gray-500 leading-relaxed max-w-md mx-auto mb-6">
                  Thank you. Your claim intimation has been received. Our claims team will acknowledge your submission and contact you within <strong className="text-navy">5 business days</strong> with a reference number and the next steps.
                </p>
                <p className="text-sm text-gray-400">
                  If urgent, call us at <a href="tel:02132630370" className="text-navy font-semibold">021-32630370-75</a> or email <a href="mailto:info@shaheeninsurance.com" className="text-navy font-semibold">info@shaheeninsurance.com</a>
                </p>
              </motion.div>
            )}

          </div>
          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}
