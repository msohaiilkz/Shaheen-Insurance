import { motion } from 'framer-motion'
import { useState } from 'react'
import PageHero from '../components/layout/PageHero'
import ContactSidebar from '../components/layout/ContactSidebar'
import { Send, CheckCircle2, ExternalLink, Phone, Mail, AlertCircle } from 'lucide-react'

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    subject: '',
    cell: '',
    message: '',
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
      <PageHero
        title="Feedback & Complaints"
        subtitle="Your feedback helps us improve. We take all complaints seriously and are committed to resolving them promptly."
        breadcrumbs={[{ label: 'Feedback & Complaints' }]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">

            {/* Intro */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-4">Share Your Feedback</h2>
              <p className="text-gray-600 leading-relaxed">
                At Shaheen Insurance, we believe that every piece of feedback — positive or negative — makes us better. Please use the form below to submit your feedback, complaint, or suggestion. Our team will review your submission and respond promptly.
              </p>
            </motion.div>

            {/* Feedback Form */}
            {!submitted ? (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <form onSubmit={handleSubmit} className="space-y-5">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your organization (optional)"
                        className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">
                        Cell Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="cell"
                        value={formData.cell}
                        onChange={handleChange}
                        required
                        placeholder="e.g. 0300-1234567"
                        className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Brief subject of your feedback or complaint"
                      className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Please describe your feedback, complaint, or suggestion in as much detail as possible..."
                      className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all resize-none"
                    />
                  </div>

                  <div className="p-4 bg-surface rounded-xl text-xs text-gray-500 leading-relaxed">
                    Your feedback will be reviewed by our management team. For urgent claims or policy matters, please call <strong className="text-navy">021-32630370-75</strong> directly.
                  </div>

                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-gold text-navy font-bold px-8 py-3.5 rounded-xl hover:bg-gold/90 transition-colors text-sm"
                  >
                    <Send size={16} />
                    Submit Feedback
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
                <h3 className="font-display font-bold text-navy text-2xl mb-3">Thank You for Your Feedback</h3>
                <p className="text-gray-500 leading-relaxed max-w-md mx-auto">
                  Your feedback has been received and will be reviewed by our management team. We appreciate you taking the time to share your thoughts with us.
                </p>
              </motion.div>
            )}

            {/* SECP Complaints Section */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-2xl font-bold text-navy mb-4">SECP Investor Complaints</h2>
              <div className="p-6 bg-surface rounded-2xl border border-navy/8">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle size={18} className="text-gold shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Investors and shareholders with complaints related to securities regulations, corporate governance, or investor rights may file a formal complaint directly with the <strong className="text-navy">Securities and Exchange Commission of Pakistan (SECP)</strong> through their official complaints portal.
                  </p>
                </div>
                <a
                  href="http://secp.gov.pk/ComplaintForm1.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-navy text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-navy/90 transition-colors"
                >
                  <ExternalLink size={15} />
                  SECP Investor Complaint Form
                </a>
              </div>
            </motion.div>

            {/* Direct Contact */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <div className="bg-navy rounded-2xl p-7 text-white">
                <h3 className="font-display font-bold text-xl mb-3">Contact Us Directly</h3>
                <p className="text-white/70 text-sm mb-5 leading-relaxed">
                  For urgent matters or if you prefer to speak with our team directly, please use the contact details below.
                </p>
                <div className="space-y-3">
                  <a href="tel:02132630370" className="flex items-center gap-2 text-white/80 text-sm hover:text-gold transition-colors">
                    <Phone size={15} className="text-gold" />
                    021-32630370-75
                  </a>
                  <a href="mailto:info@shaheeninsurance.com" className="flex items-center gap-2 text-white/80 text-sm hover:text-gold transition-colors">
                    <Mail size={15} className="text-gold" />
                    info@shaheeninsurance.com
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}
