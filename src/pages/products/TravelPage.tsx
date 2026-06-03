import { motion } from 'framer-motion'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import PageSEO from '../../components/shared/PageSEO'
import { CheckCircle2, Phone, Globe, Shield, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function TravelPage() {
  return (
    <>
      <PageSEO
        title="Travel Insurance"
        description="Shaheen Insurance Secure Travel — worldwide travel insurance with up to USD 50,000 medical coverage. Emergency medical, trip cancellation, baggage loss, and flight delay for Pakistani travelers."
        keywords="travel insurance Pakistan, overseas medical insurance, Schengen visa insurance, travel cover Pakistan, trip insurance"
        path="/products/travel"
        schema={{ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Travel Insurance', provider: { '@type': 'InsuranceAgency', name: 'Shaheen Insurance Company Limited' }, areaServed: { '@type': 'GeoShape', description: 'Worldwide' } }}
      />
      <PageHero title="Travel Insurance — Secure Travel" subtitle="Worldwide coverage with up to USD 50,000 medical limit — your protection partner from takeoff to landing"
        breadcrumbs={[{ label: 'Products', path: '/products' }, { label: 'Travel Insurance' }]} badge="Personal Product" videoCategory="travel" />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-4">Shaheen Secure Travel Insurance</h2>
              <p className="text-gray-600 leading-relaxed">Shaheen Insurance's Secure Travel product provides comprehensive international travel insurance with worldwide medical coverage, emergency assistance, and support — backed by global reinsurance partners rated A+ by Standard & Poor's.</p>
            </motion.div>

            {/* Visual Collage */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }}
              className="grid grid-cols-3 gap-3 h-52 md:h-64 overflow-hidden">
              <div className="col-span-2 relative rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80&auto=format&fit=crop"
                  alt="Travel Insurance" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/15 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="bg-gold text-navy font-bold text-xs px-3 py-1 rounded-full">USD 50K Medical</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white font-semibold text-xs px-3 py-1 rounded-full">92 Days</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative rounded-2xl overflow-hidden flex-1">
                  <img src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=400&q=80&auto=format&fit=crop"
                    alt="Travel" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-navy/40" />
                </div>
                <div className="bg-navy rounded-2xl flex-1 flex flex-col items-center justify-center p-3 text-center">
                  <div className="text-gold font-display font-bold text-lg">24/7</div>
                  <div className="text-white/60 text-[10px]">Emergency Help</div>
                </div>
              </div>
            </motion.div>

            {/* Key Plan Details */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: 'Medical Coverage Limit', value: 'USD 50,000', sub: 'Per plan' },
                { label: 'Trip Duration', value: 'Up to 92 Days', sub: 'Consecutive days' },
                { label: 'Student Plans', value: '184–365 Days', sub: 'Extended duration' },
                { label: 'Age Limit', value: 'Up to 75 Years', sub: 'Standard plan' },
                { label: 'Student Age Range', value: '16–50 Years', sub: 'Student plan' },
                { label: 'Reinsurer Rating', value: 'S&P A+', sub: 'Eurocross Assistance' },
              ].map(({ label, value, sub }) => (
                <div key={label} className="bg-navy text-center rounded-2xl p-5">
                  <div className="font-display font-bold text-gold text-lg mb-1">{value}</div>
                  <div className="text-white font-medium text-xs mb-0.5">{label}</div>
                  <div className="text-white/45 text-xs">{sub}</div>
                </div>
              ))}
            </div>

            {/* Partners */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-2xl font-bold text-navy mb-5">Global Partners</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-surface rounded-2xl p-5 border border-navy/8">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe size={18} className="text-gold" />
                    <h3 className="font-bold text-navy">Global Assistance Partner</h3>
                  </div>
                  <a href="http://www.mideast-assistance.com" target="_blank" rel="noopener noreferrer" className="text-navy font-semibold hover:text-gold transition-colors inline-flex items-center gap-1">MidEast Assistance International S.A.L <ExternalLink size={12} /></a>
                  <p className="text-gray-500 text-sm mt-2">Providing worldwide emergency medical assistance and coordination</p>
                  <img src="http://shaheeninsurance.com/images/jpgs/mideast-logo.jpg" alt="MidEast Assistance" className="mt-3 h-8 w-auto object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
                </div>
                <div className="bg-surface rounded-2xl p-5 border border-navy/8">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield size={18} className="text-gold" />
                    <h3 className="font-bold text-navy">Reinsurance Partner</h3>
                  </div>
                  <a href="http://www.eurocross.nl/en" target="_blank" rel="noopener noreferrer" className="text-navy font-semibold hover:text-gold transition-colors inline-flex items-center gap-1">Eurocross Assistance <ExternalLink size={12} /></a>
                  <p className="text-gray-500 text-sm mt-1">Dutch company, rated A+ by Standard & Poor's — one of Europe's leading assistance companies</p>
                </div>
              </div>
            </motion.div>

            {/* Coverage */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
              <h2 className="font-display text-2xl font-bold text-navy mb-5">Coverage Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Emergency medical treatment abroad', 'Hospitalization expenses', 'Medical evacuation & repatriation', 'Emergency dental treatment',
                  'Trip cancellation coverage', 'Baggage loss and delay', 'Personal accident cover', 'Flight delay compensation',
                  'Personal liability coverage', '24/7 worldwide emergency helpline',
                ].map((item) => (
                  <div key={item} className="flex gap-2.5 p-3 bg-surface rounded-xl text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-gold shrink-0 mt-0.5" />{item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Emergency Contacts */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="bg-hero-gradient rounded-2xl p-6">
                <h3 className="font-display font-bold text-gold text-xl mb-5 flex items-center gap-2">
                  <Phone size={18} />Worldwide Emergency Contacts
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-white/50 text-xs mb-1">Middle East</div>
                    <a href="tel:+9614548348" className="text-white font-bold text-lg hover:text-gold transition-colors">+961 4 548348</a>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-white/50 text-xs mb-1">Worldwide (24/7)</div>
                    <a href="tel:+420296339623" className="text-white font-bold text-lg hover:text-gold transition-colors">+420 296 339 623</a>
                  </div>
                </div>
                <p className="text-white/50 text-xs mt-4">Available 24 hours a day, 7 days a week, 365 days a year</p>
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://x360.tidal-waves.com:1197/TidalERP/TravelTakafulLogin.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <ExternalLink size={16} />
                Buy Policy Online
              </a>
              <a
                href="http://shaheeninsurance.com/pdf/SecureTravelApplicationForm.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="btn-navy inline-flex items-center gap-2"
              >
                Download Application Form
              </a>
              <Link to="/contact" className="border-2 border-navy text-navy font-bold text-sm px-6 py-3 rounded-full hover:bg-navy hover:text-white transition-all duration-200 inline-flex items-center gap-2">Get a Quote</Link>
            </div>
          </div>
          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}

