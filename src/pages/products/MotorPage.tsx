import { motion } from 'framer-motion'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
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
      <PageHero title="Motor Insurance" subtitle="Comprehensive protection for your vehicle — covering accidental damage, theft, fire, and third-party liability"
        breadcrumbs={[{ label: 'Products', path: '/products' }, { label: 'Motor Insurance' }]} badge="Personal Product" />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-4">About Motor Insurance</h2>
              <p className="text-gray-600 leading-relaxed">Shaheen Insurance offers comprehensive motor vehicle insurance protecting your car against a wide range of risks. Whether it's an accident, fire, theft, or natural calamity — your vehicle is protected with Shaheen's motor policy.</p>
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
