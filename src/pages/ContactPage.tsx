import { motion } from 'framer-motion'
import { useState } from 'react'
import PageHero from '../components/layout/PageHero'
import ContactSidebar from '../components/layout/ContactSidebar'
import PageSEO from '../components/shared/PageSEO'
import { Phone, Mail, MapPin, Send, CheckCircle2, Building2 } from 'lucide-react'

const SUBJECT_OPTIONS = [
  'General Inquiry',
  'Motor Insurance',
  'Health Insurance',
  'Claims',
  'Investor Relations',
  'Other',
]

const OFFICES = [
  {
    name: 'Head Office — Karachi',
    isMain: true,
    address: '10th Floor, Shaheen Complex, M.R. Kayani Road, Karachi – 74000',
    phones: ['021-32630370-75', '021-32213950-51'],
    uan: '111-765-111',
    fax: '021-32626674',
    email: 'info@shaheeninsurance.com',
    contact: null,
  },
  {
    name: 'Islamabad Branch',
    isMain: false,
    address: 'Office No 4, First Floor, Zaki Center, I-8 Markaz, Islamabad',
    phones: [],
    uan: null,
    fax: null,
    email: 'Abdul.hameed@shaheeninsurance.com',
    contact: 'Mr. Abdul Hameed',
  },
  {
    name: 'Company Secretary (Investor Queries)',
    isMain: false,
    address: '10th Floor, Shaheen Complex, M.R. Kayani Road, Karachi',
    phones: ['(92-21) 32630370-75'],
    uan: null,
    fax: null,
    email: 'company.secretary@shaheeninsurance.com',
    contact: 'Aqeel Anwar Kamal',
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(formData.subject || 'Contact Inquiry')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\n${formData.message}`
    )
    window.location.href = `mailto:info@shaheeninsurance.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <>
      <PageSEO
        title="Contact Us"
        description="Contact Shaheen Insurance — call 111-765-111, email info@shaheeninsurance.com, or visit our 10th Floor office in Shaheen Complex, Karachi. We respond within 5 business days."
        keywords="contact Shaheen Insurance, insurance company phone number, insurance office Karachi, 111-765-111"
        path="/contact"
        schema={{ '@context': 'https://schema.org', '@type': 'ContactPage', name: 'Contact Shaheen Insurance', description: 'Get in touch with Shaheen Insurance Company Limited.', url: 'https://www.shaheeninsurance.com/contact' }}
      />
      <PageHero
        title="Contact Us"
        subtitle="Reach Shaheen Insurance — Head Office Karachi, branches nationwide, or connect with us online"
        breadcrumbs={[{ label: 'Contact Us' }]} videoCategory="contact"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">

            {/* Visual Collage */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              className="grid grid-cols-3 gap-3 h-44 md:h-52">
              <div className="col-span-2 relative rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format&fit=crop"
                  alt="Shaheen Insurance Head Office Karachi" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-gold text-navy font-bold text-xs px-3 py-1 rounded-full">Shaheen Complex, Karachi</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="bg-navy rounded-2xl flex-1 flex flex-col items-center justify-center p-2 text-center overflow-hidden">
                  <div className="text-gold font-display font-bold text-[10px] sm:text-sm truncate w-full text-center">111-765-111</div>
                  <div className="text-white/60 text-[9px]">UAN</div>
                </div>
                <div className="bg-gold rounded-2xl flex-1 flex flex-col items-center justify-center p-2 text-center">
                  <div className="text-navy font-display font-bold text-sm">12+</div>
                  <div className="text-navy/70 text-[9px]">Branches</div>
                </div>
              </div>
            </motion.div>

            {/* Office Cards */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="gold-line mb-4" />
                <h2 className="font-display text-3xl font-bold text-navy mb-6">Our Offices</h2>
              </motion.div>

              <div className="space-y-5">
                {OFFICES.map(({ name, isMain, address, phones, uan, fax, email, contact }, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.05 + i * 0.1 }}
                    className={`p-6 rounded-2xl ${isMain ? 'bg-navy text-white' : 'bg-surface border border-navy/8'}`}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Building2 size={16} className={isMain ? 'text-gold' : 'text-gold'} />
                      <h3 className={`font-display font-bold text-lg ${isMain ? 'text-white' : 'text-navy'}`}>{name}</h3>
                      {isMain && <span className="ml-auto text-xs bg-gold/20 text-gold px-2 py-1 rounded-full font-semibold">Headquarters</span>}
                    </div>

                    {contact && (
                      <p className={`text-sm font-semibold mb-3 ${isMain ? 'text-gold' : 'text-gold'}`}>{contact}</p>
                    )}

                    <div className={`flex items-start gap-2 mb-2 text-sm ${isMain ? 'text-white/80' : 'text-gray-600'}`}>
                      <MapPin size={14} className={`shrink-0 mt-0.5 ${isMain ? 'text-gold' : 'text-gold'}`} />
                      {address}
                    </div>

                    {phones.length > 0 && (
                      <div className={`flex items-start gap-2 mb-1 text-sm ${isMain ? 'text-white/80' : 'text-gray-600'}`}>
                        <Phone size={14} className={`shrink-0 mt-0.5 ${isMain ? 'text-gold' : 'text-gold'}`} />
                        <div>
                          {phones.map(p => <p key={p}>{p}</p>)}
                          {uan && <p className="font-semibold">UAN: {uan}</p>}
                          {fax && <p className={isMain ? 'text-white/50' : 'text-gray-400'}>Fax: {fax}</p>}
                        </div>
                      </div>
                    )}

                    {email && (
                      <div className={`flex items-center gap-2 mt-2 text-sm`}>
                        <Mail size={14} className="text-gold shrink-0" />
                        <a
                          href={`mailto:${email}`}
                          className={`hover:underline ${isMain ? 'text-gold' : 'text-navy font-medium'}`}
                        >
                          {email}
                        </a>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}>
              <div className="w-full h-56 bg-navy rounded-2xl flex flex-col items-center justify-center text-white">
                <MapPin size={32} className="text-gold mb-3" />
                <p className="font-display font-bold text-lg mb-1">Head Office Location</p>
                <p className="text-white/60 text-sm text-center px-6">Shaheen Complex, M.R. Kayani Road, Karachi – 74000</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                <div className="gold-line mb-4" />
                <h2 className="font-display text-3xl font-bold text-navy mb-6">Send Us a Message</h2>
              </motion.div>

              {!submitted ? (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
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
                      <label className="block text-sm font-semibold text-navy mb-2">Company / Organization</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Optional"
                        className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 0300-1234567"
                        className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                      />
                    </div>
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
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all bg-white"
                    >
                      <option value="">Select a subject</option>
                      {SUBJECT_OPTIONS.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
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
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-gold text-navy font-bold px-8 py-3.5 rounded-xl hover:bg-gold/90 transition-colors text-sm"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </motion.form>
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
                  <h3 className="font-display font-bold text-navy text-2xl mb-3">Message Sent!</h3>
                  <p className="text-gray-500 leading-relaxed max-w-md mx-auto">
                    Thank you for contacting Shaheen Insurance. Our team will review your message and get back to you shortly.
                  </p>
                </motion.div>
              )}
            </div>

          </div>
          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}
