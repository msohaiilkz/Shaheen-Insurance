import { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle2, Building2, Clock } from 'lucide-react'
import InnerPageHero from '../components/layout/InnerPageHero'
import PageSEO from '../components/shared/PageSEO'
import ScrollReveal from '../components/shared/ScrollReveal'
import { StaggerReveal } from '../components/shared/ScrollReveal'
import { useJourney } from '../context/JourneyContext'
import { takafulize } from '../lib/wording'

const SUBJECT_OPTIONS = [
  'General Inquiry', 'Motor Insurance', 'Health Insurance', 'Claims', 'Investor Relations', 'Other',
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

const CHANNELS = [
  { icon: Phone, label: 'UAN', value: '111-765-111', href: 'tel:111765111', sub: 'Available during business hours' },
  { icon: Phone, label: 'Direct Lines', value: '021-32630370-75', href: 'tel:02132630370', sub: 'Head Office Karachi' },
  { icon: Mail, label: 'Email', value: 'info@shaheeninsurance.com', href: 'mailto:info@shaheeninsurance.com', sub: 'Response within 5 business days' },
  { icon: MapPin, label: 'Head Office', value: 'Shaheen Complex, Karachi', href: null, sub: 'M.R. Kayani Road, 10th Floor' },
]

const ContactSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Envelope body */}
    <rect x="70" y="55" width="130" height="90" rx="8" fill="#D6A65A" opacity="0.08" stroke="#D6A65A" strokeWidth="1.5" />
    {/* Envelope flap */}
    <path d="M70 63 L135 108 L200 63" stroke="#D6A65A" strokeWidth="1.5" opacity="0.4" fill="none" strokeLinejoin="round" />
    {/* Envelope fold lines */}
    <path d="M70 145 L110 108" stroke="#D6A65A" strokeWidth="1" opacity="0.2" />
    <path d="M200 145 L160 108" stroke="#D6A65A" strokeWidth="1" opacity="0.2" />
    {/* Speech bubble */}
    <rect x="195" y="30" width="60" height="45" rx="8" fill="#D6A65A" opacity="0.12" stroke="#D6A65A" strokeWidth="1" />
    <path d="M205 75 L205 85 L215 75" fill="#D6A65A" opacity="0.12" stroke="#D6A65A" strokeWidth="1" />
    {/* Speech bubble lines */}
    <rect x="203" y="40" width="44" height="5" rx="2" fill="#D6A65A" opacity="0.3" />
    <rect x="203" y="52" width="35" height="4" rx="2" fill="#D6A65A" opacity="0.2" />
    <rect x="203" y="62" width="40" height="4" rx="2" fill="#D6A65A" opacity="0.2" />
    {/* Phone icon small */}
    <circle cx="55" cy="45" r="14" fill="#D6A65A" opacity="0.12" stroke="#D6A65A" strokeWidth="1" />
    <path d="M50 40 C49 43 51 47 54 49 C57 51 60 53 63 52 L61 49 C60 49 58 49 57 48 C56 47 56 45 55 44 Z" fill="#D6A65A" opacity="0.5" />
    {/* Checkmark badge */}
    <circle cx="265" cy="25" r="12" fill="#D6A65A" opacity="0.5" stroke="#D6A65A" strokeWidth="1" />
    <path d="M262 28 L265 32 L270 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function ContactPage() {
  const { isTakaful } = useJourney()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '', company: '', phone: '', email: '', subject: '', message: '',
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
      <InnerPageHero
        category="Get In Touch"
        title="Contact Us"
        subtitle="Reach Shaheen Insurance — Head Office Karachi, branches nationwide, or connect with us online"
        breadcrumbs={[{ label: 'Contact Us' }]}
        stats={[{ value: '3', label: 'Offices' }, { value: '12+', label: 'Branches' }, { value: '5 Days', label: 'Response SLA' }]}
        svgIllustration={<ContactSVG />}
      />

      {/* Contact Channels */}
      <section className="py-20 md:py-28 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Reach Us</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight">Get In Touch</h2>
              <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">{takafulize('Multiple ways to connect — call, email, or visit. Our team is ready to assist with all insurance queries.', isTakaful)}</p>
            </div>
          </ScrollReveal>

          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {CHANNELS.map(({ icon: Icon, label, value, href, sub }) => (
              <div key={label} className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all group text-center">
                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/10 transition-colors">
                  <Icon size={20} className="text-gold" />
                </div>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">{label}</p>
                {href ? (
                  <a href={href} className="font-display font-bold text-navy text-sm hover:text-gold transition-colors block mb-1">{value}</a>
                ) : (
                  <p className="font-display font-bold text-navy text-sm mb-1">{value}</p>
                )}
                <p className="text-gray-400 text-xs">{sub}</p>
              </div>
            ))}
          </StaggerReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-2xl shadow-navy/15">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80&auto=format&fit=crop"
                  alt="Shaheen Insurance Head Office Karachi"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center shrink-0">
                        <Building2 size={18} className="text-gold" />
                      </div>
                      <div>
                        <p className="font-black text-navy text-sm leading-none">Head Office — Karachi</p>
                        <p className="text-gray-500 text-xs mt-0.5">10th Floor, Shaheen Complex, M.R. Kayani Road</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between gap-5">
                <div>
                  <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Business Hours</p>
                  <h3 className="font-display font-bold text-navy text-xl mb-4">When We're Available</h3>
                  <div className="space-y-3">
                    {[
                      { day: 'Monday – Thursday', hours: '9:00 AM – 5:30 PM' },
                      { day: 'Friday', hours: '9:00 AM – 1:00 PM' },
                      { day: 'Saturday – Sunday', hours: 'Closed' },
                    ].map(({ day, hours }) => (
                      <div key={day} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                        <span className="text-gray-600 text-sm">{day}</span>
                        <span className={`font-semibold text-sm ${hours === 'Closed' ? 'text-gray-400' : 'text-navy'}`}>{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gold/8 rounded-xl border border-gold/20">
                  <Clock size={16} className="text-gold shrink-0" />
                  <p className="text-navy text-sm">Queries acknowledged within <strong>5 business days</strong></p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 md:py-28 bg-light-blue relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="contact-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,4 52,16 52,32 28,44 4,32 4,16" fill="none" stroke="#D6A65A" strokeWidth="1" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#contact-hex)" />
        </svg>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gold/6 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold-dark text-xs font-bold tracking-[0.25em] uppercase mb-3">Offices</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight">Our Offices</h2>
              <p className="text-gray-500 text-sm mt-3">Head office in Karachi with branches and representatives nationwide.</p>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFFICES.map(({ name, isMain, address, phones, uan, fax, email, contact }) => (
              <div key={name} className={`p-6 rounded-2xl border transition-all hover:border-gold/40 ${isMain ? 'bg-gold/10 border-gold/30' : 'bg-white border-navy/10 shadow-card'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center shrink-0">
                    <Building2 size={18} className="text-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-navy text-sm leading-tight">{name}</h3>
                    {isMain && <span className="text-xs text-gold-dark font-semibold">Headquarters</span>}
                  </div>
                </div>
                {contact && <p className="text-gold-dark text-xs font-semibold mb-3">{contact}</p>}
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-xs text-gray-500">
                    <MapPin size={12} className="text-gold shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{address}</span>
                  </div>
                  {phones.length > 0 && (
                    <div className="flex items-start gap-2 text-xs text-gray-500">
                      <Phone size={12} className="text-gold shrink-0 mt-0.5" />
                      <div>
                        {phones.map(p => <p key={p}>{p}</p>)}
                        {uan && <p className="font-semibold text-gray-700">UAN: {uan}</p>}
                        {fax && <p className="text-gray-500">Fax: {fax}</p>}
                      </div>
                    </div>
                  )}
                  {email && (
                    <div className="flex items-center gap-2 text-xs">
                      <Mail size={12} className="text-gold shrink-0" />
                      <a href={`mailto:${email}`} className="text-gold-dark hover:text-gold-dark transition-colors truncate">{email}</a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Message</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-4">Send Us a Message</h2>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xl mx-auto">Have a question, need a quote, or want to learn more about our products? Fill in the form below and our team will respond promptly.</p>
            </div>
          </ScrollReveal>

          {!submitted ? (
            <ScrollReveal>
              <div className="bg-[#f8f7f5] rounded-2xl border border-gray-100 shadow-sm p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Full Name <span className="text-red-500">*</span></label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name"
                        className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Company / Organization</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Optional"
                        className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all bg-white" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="e.g. 0300-1234567"
                        className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Email Address <span className="text-red-500">*</span></label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com"
                        className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all bg-white" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Subject</label>
                    <select name="subject" value={formData.subject} onChange={handleChange}
                      className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all bg-white">
                      <option value="">Select a subject</option>
                      {SUBJECT_OPTIONS.map(opt => <option key={opt} value={opt}>{takafulize(opt, isTakaful)}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Message <span className="text-red-500">*</span></label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="How can we help you?"
                      className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all resize-none bg-white" />
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-gray-100 text-xs text-gray-500 leading-relaxed">
                    By submitting this form, your message will be sent to <strong>info@shaheeninsurance.com</strong>. Our team will acknowledge within 5 business days.
                  </div>
                  <button type="submit" className="flex items-center gap-2 bg-gold text-navy font-bold px-8 py-3.5 rounded-xl hover:bg-gold/90 transition-colors text-sm">
                    <Send size={16} />Send Message
                  </button>
                </form>
              </div>
            </ScrollReveal>
          ) : (
            <ScrollReveal>
              <div className="text-center py-16 px-8 bg-[#f8f7f5] rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={32} className="text-green-600" />
                </div>
                <h3 className="font-display font-bold text-navy text-2xl mb-3">Message Sent!</h3>
                <p className="text-gray-500 leading-relaxed max-w-md mx-auto">
                  Thank you for contacting Shaheen Insurance. Our team will review your message and get back to you shortly.
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-light-blue relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="contact-cg" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#D6A65A" strokeWidth="0.8" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#contact-cg)" />
        </svg>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <ScrollReveal>
          <div className="relative z-10 max-w-2xl mx-auto px-5 text-center">
            <p className="text-gold-dark text-xs font-bold tracking-[0.25em] uppercase mb-4">Find Us</p>
            <h2 className="font-display font-black text-navy text-3xl md:text-4xl uppercase leading-tight mb-4">
              Visit Our <span className="text-gold-dark">Branch Network</span>
            </h2>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">With 12+ branches across Pakistan, there's a Shaheen Insurance office near you. Find your nearest branch with full contact details.</p>
            <div className="flex justify-center gap-3 flex-wrap">
              <a href="/branches" className="inline-flex items-center gap-2 bg-navy text-white font-bold px-8 py-4 rounded-xl text-sm hover:bg-navy/90 transition-colors">
                <MapPin size={15} /> View All Branches
              </a>
              <a href="tel:111765111" className="inline-flex items-center gap-2 bg-white border border-navy/15 text-navy shadow-card font-semibold px-8 py-4 rounded-xl text-sm hover:bg-white/80 transition-colors">
                <Phone size={15} /> 111-765-111
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
