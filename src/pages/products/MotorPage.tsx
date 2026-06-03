import { motion } from 'framer-motion'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import PageSEO from '../../components/shared/PageSEO'
import { CheckCircle2, Car, FileText, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const COMPREHENSIVE = [
  'Accidental external damage to the vehicle',
  'Fire and explosion damage',
  'Theft of the vehicle',
  'Malicious acts and vandalism',
  'Riot and strike damage',
  'Floods, storms and atmospheric disturbances',
  'Transit coverage (road, rail, inland waterway, elevator)',
  'Third-party liability (bodily injury and property damage)',
]

const THIRD_PARTY = [
  'Legal liability to third parties for bodily injury',
  'Legal liability to third parties for property damage',
  'Coverage as per Motor Vehicles Ordinance requirements',
]

export default function MotorPage() {
  return (
    <>
      <PageSEO
        title="Motor Insurance"
        description="Shaheen Insurance motor insurance — comprehensive and third-party vehicle coverage in Pakistan. Protection against accidental damage, theft, fire, and third-party liability."
        keywords="motor insurance Pakistan, car insurance, vehicle insurance, comprehensive motor cover, third party motor insurance Karachi"
        path="/products/motor"
        schema={{ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Motor Insurance', provider: { '@type': 'InsuranceAgency', name: 'Shaheen Insurance Company Limited' }, areaServed: 'PK', description: 'Comprehensive and third-party motor vehicle insurance in Pakistan.' }}
      />
      <PageHero title="Motor Insurance" subtitle="Comprehensive protection for your vehicle — covering accidental damage, theft, fire, and third-party liability"
        breadcrumbs={[{ label: 'Products', path: '/products' }, { label: 'Motor Insurance' }]} badge="Personal Product" videoCategory="motor" />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-4">About Motor Insurance</h2>
              <p className="text-gray-600 leading-relaxed">Shaheen Insurance offers comprehensive motor vehicle insurance protecting your car against a wide range of risks. Whether it's an accident, fire, theft, or natural calamity — your vehicle is protected with Shaheen's motor policy.</p>
            </motion.div>

            {/* Visual Collage */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }}
              className="grid grid-cols-3 gap-3 h-52 md:h-64 overflow-hidden">
              <div className="col-span-2 relative rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80&auto=format&fit=crop"
                  alt="Motor Insurance" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-gold text-navy font-bold text-xs px-3 py-1 rounded-full">Comprehensive Cover</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative rounded-2xl overflow-hidden flex-1">
                  <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&q=80&auto=format&fit=crop"
                    alt="Vehicle" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-navy/40" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-[10px] font-semibold">Third-Party</p>
                  </div>
                </div>
                <div className="bg-navy rounded-2xl flex-1 flex flex-col items-center justify-center p-3 text-center">
                  <div className="text-gold font-display font-bold text-2xl">28+</div>
                  <div className="text-white/60 text-[10px]">Years of Service</div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Comprehensive */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-navy rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-5">
                  <Car size={20} className="text-gold" />
                  <h3 className="font-display font-bold text-lg">Comprehensive Cover</h3>
                </div>
                <ul className="space-y-2.5">
                  {COMPREHENSIVE.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-white/75">
                      <CheckCircle2 size={15} className="text-gold shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Third Party */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-surface rounded-2xl p-6 border border-navy/8">
                <div className="flex items-center gap-3 mb-5">
                  <Car size={20} className="text-navy" />
                  <h3 className="font-display font-bold text-navy text-lg">Third-Party Liability</h3>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {THIRD_PARTY.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 size={15} className="text-gold shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-400 italic">As required by Motor Vehicles Ordinance, 1965</p>
              </motion.div>
            </div>

            {/* Auto Claims quick info */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-2xl font-bold text-navy mb-5">How to File a Motor Claim</h2>
              <div className="space-y-3">
                {[
                  { step: '01', title: 'Immediate Notification', desc: 'File accident notice immediately with Shaheen Insurance via phone, letter, fax, or email.' },
                  { step: '02', title: 'Vehicle Assessment', desc: 'For major damage, report before the vehicle is removed from the accident spot.' },
                  { step: '03', title: 'Authorized Workshop', desc: 'Move vehicle to an authorized workshop for repair estimation.' },
                  { step: '04', title: 'Submit Documents', desc: 'Provide completed claim form, repair estimate, driver\'s license and vehicle registration.' },
                  { step: '05', title: 'Inspection & Settlement', desc: 'Insurer conducts detailed inspection. Bills settled directly or reimbursed to insured.' },
                  { step: '06', title: 'Theft Claims', desc: 'For theft — report to police immediately and submit final police report to Shaheen Insurance.' },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4 p-4 bg-surface rounded-xl">
                    <span className="font-display font-bold text-gold/50 text-2xl leading-none shrink-0 w-10">{step}</span>
                    <div>
                      <h4 className="font-semibold text-navy text-sm mb-1">{title}</h4>
                      <p className="text-gray-500 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-4">
              <Link to="/claims/intimation" className="btn-primary"><FileText size={16} />File a Claim</Link>
              <a href="tel:111765111" className="btn-navy"><Phone size={16} />Call UAN: 111-765-111</a>
            </div>
          </div>
          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}

