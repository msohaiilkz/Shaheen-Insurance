import { motion } from 'framer-motion'
import PageHero from '../components/layout/PageHero'
import ContactSidebar from '../components/layout/ContactSidebar'
import PageSEO from '../components/shared/PageSEO'
import { Phone, Mail, MapPin, User } from 'lucide-react'

const BRANCHES = [
  {
    name: 'Head Office',
    person: null,
    title: null,
    address: '10th Floor, Shaheen Complex, M.R. Kayani Road, Karachi – 74000',
    phones: ['021-32630370-75', '021-32213950-51'],
    fax: '021-32626674',
    email: 'info@shaheeninsurance.com',
    isHQ: true,
  },
  {
    name: 'Karachi Corporate',
    person: 'Mr. Sohel N. Kidwai',
    title: 'Chief Marketing Officer (CMO)',
    address: 'Office No. 1001 & 1014, 10th Floor, Saima Trade Center, I.I Chundigar Road, Karachi',
    phones: ['021-32650031-3', 'Direct: 021-32213952'],
    fax: null,
    email: 'sohel.kidwai@shaheeninsurance.com',
    isHQ: false,
  },
  {
    name: 'Lahore Main',
    person: 'Mr. Ahsan ul Haq',
    title: null,
    address: 'Office #4-B, 6th Floor, Shaheen Complex, Opp. PTV Station 38, Abbott Road, Lahore',
    phones: ['042-36376270/74/78/79'],
    fax: '042-36376276',
    email: 'lhr_zone@shaheeninsurance.com',
    isHQ: false,
  },
  {
    name: 'Lahore Corporate',
    person: 'Mr. Sohaib Ansar Khan',
    title: 'Executive Vice President (EVP)',
    address: 'Office #6, 6th Floor, Shaheen Complex, Opp. PTV Station 38, Abbott Road, Lahore',
    phones: ['042-36370384/741/742'],
    fax: '042-36370385',
    email: 'lhr_corporate@shaheeninsurance.com',
    isHQ: false,
  },
  {
    name: 'Lahore Takaful',
    person: null,
    title: null,
    address: 'Office #4-B, 6th Floor, Shaheen Complex, Opp. PTV Station 38, Abbott Road, Lahore',
    phones: [],
    fax: null,
    email: 'lhr_zone@shaheeninsurance.com',
    isHQ: false,
  },
  {
    name: 'Islamabad',
    person: 'Mr. Abdul Hameed',
    title: null,
    address: 'Office #4, Mezzanine Floor, Black Horse Plaza, Fazl-e-Haq Road, Blue Area, Islamabad',
    phones: ['051-2000057'],
    fax: null,
    email: 'abdul.hameed@shaheeninsurance.com',
    isHQ: false,
  },
  {
    name: 'Faisalabad',
    person: 'Mr. Mohsin Khan',
    title: null,
    address: 'Office #1, 2nd Floor, Layllpur, Regency Plaza, Mall Road, Faisalabad',
    phones: ['(041) 2614112', '0341-2613514'],
    fax: null,
    email: 'fsd@shaheeninsurance.com',
    isHQ: false,
  },
  {
    name: 'Multan',
    person: 'Mr. Muhammad Naeem Baig',
    title: 'General Manager Marketing',
    address: 'Office No. 21, 1st Floor, Ali Arcade, LMQ Road, Chock Katchery, Multan',
    phones: ['061-4580190-2'],
    fax: null,
    email: 'naeem.baig@shaheeninsurance.com',
    isHQ: false,
  },
  {
    name: 'Peshawar',
    person: 'Mr. Gauhar Aziz',
    title: null,
    address: 'Office #C-3, Jasmin Arcade, Fakhr-e-Alam Road, Peshawar Cantt',
    phones: ['091-5273122', '0333-9201088'],
    fax: null,
    email: 'psw@shaheeninsurance.com',
    isHQ: false,
  },
  {
    name: 'Sialkot',
    person: 'Mr. Faisal Jamil',
    title: null,
    address: 'Office No. 210, Kareem Plaza, Defence Road, Near Iqbal Town, Sialkot',
    phones: ['(052) 3250982', '(052) 3550131'],
    fax: '(052) 3257412',
    email: 'sil@shaheeninsurance.com',
    isHQ: false,
  },
  {
    name: 'Hyderabad',
    person: 'Mr. Shakir Ali',
    title: null,
    address: 'Upper 2nd Floor, House #75, Soldier Bazar, Hyderabad',
    phones: ['(022) 2720487'],
    fax: '(022) 2720489',
    email: 'hyd@shaheeninsurance.com',
    isHQ: false,
  },
  {
    name: 'Sargodha',
    person: 'Mr. Nadeem Awan',
    title: null,
    address: 'Lahore Road, Sargodha',
    phones: ['0300-8602723'],
    fax: null,
    email: 'nadeemawan1975@gmail.com',
    isHQ: false,
  },
  {
    name: 'Rahim Yar Khan',
    person: 'Mr. Naveed Hussain',
    title: null,
    address: '1st Floor, Blue Building, Shaheen Road, Rahim Yar Khan',
    phones: ['068-5958037', '0321-4741424'],
    fax: null,
    email: 'naveed.hussain@shaheeninsurance.com',
    isHQ: false,
  },
]

export default function BranchNetworkPage() {
  return (
    <>
      <PageSEO
        title="Branch Network"
        description="Shaheen Insurance branch offices across Pakistan — Karachi, Lahore, Islamabad, Faisalabad, Peshawar, Multan, and more. Find your nearest branch with contact details."
        keywords="Shaheen Insurance branches, insurance office Karachi, insurance office Lahore, Shaheen Insurance contact, branch network Pakistan"
        path="/branches"
        schema={{ '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Shaheen Insurance Company Limited', telephone: '+92-21-32630370', address: { '@type': 'PostalAddress', streetAddress: '10th Floor, Shaheen Complex, M.R. Kayani Road', addressLocality: 'Karachi', addressCountry: 'PK' }, areaServed: 'PK' }}
      />
      <PageHero
        title="Branch Network"
        subtitle="12 branch offices spanning Pakistan — from Karachi to Peshawar, we bring Shaheen Insurance closer to you"
        breadcrumbs={[{ label: 'Branch Network' }]}
        badge="12 Branch Offices" videoCategory="branches"
      />

      {/* Pakistan Map Banner */}
      <section className="bg-surface border-b border-navy/8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden bg-navy">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(214,166,90,0.4) 1px, transparent 0)', backgroundSize: '28px 28px' }} />
            <div className="relative flex flex-col md:flex-row items-center gap-6 p-8">
              {/* Pakistan Map SVG */}
              <div className="shrink-0">
                <svg width="220" height="200" viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
                  {/* Simplified Pakistan map outline */}
                  <path d="M60,20 L80,15 L100,18 L120,12 L145,20 L160,35 L170,55 L165,75 L175,90 L180,110 L170,130 L155,145 L140,160 L120,170 L100,175 L80,168 L65,155 L50,140 L40,120 L35,100 L38,80 L45,60 L55,40 Z" fill="rgba(214,166,90,0.15)" stroke="rgba(214,166,90,0.5)" strokeWidth="1.5"/>
                  {/* Kashmir region */}
                  <path d="M120,12 L145,8 L160,20 L160,35 L145,20 Z" fill="rgba(214,166,90,0.08)" stroke="rgba(214,166,90,0.3)" strokeWidth="1" strokeDasharray="3,2"/>
                  {/* City dots */}
                  <circle cx="75" cy="148" r="5" fill="#D6A65A" opacity="0.9"/>
                  <text x="83" y="152" fill="white" fontSize="8" fontFamily="sans-serif" opacity="0.8">Karachi</text>
                  <circle cx="90" cy="75" r="4" fill="#D6A65A" opacity="0.9"/>
                  <text x="97" y="79" fill="white" fontSize="8" fontFamily="sans-serif" opacity="0.8">Lahore</text>
                  <circle cx="100" cy="55" r="4" fill="#D6A65A" opacity="0.9"/>
                  <text x="108" y="59" fill="white" fontSize="8" fontFamily="sans-serif" opacity="0.8">Islamabad</text>
                  <circle cx="82" cy="100" r="3.5" fill="#D6A65A" opacity="0.8"/>
                  <text x="89" y="104" fill="white" fontSize="7" fontFamily="sans-serif" opacity="0.7">Multan</text>
                  <circle cx="70" cy="85" r="3" fill="#D6A65A" opacity="0.8"/>
                  <text x="76" y="89" fill="white" fontSize="7" fontFamily="sans-serif" opacity="0.7">Faisalabad</text>
                  <circle cx="110" cy="45" r="3" fill="#D6A65A" opacity="0.7"/>
                  <text x="116" y="49" fill="white" fontSize="7" fontFamily="sans-serif" opacity="0.7">Peshawar</text>
                  <circle cx="95" cy="88" r="3" fill="#D6A65A" opacity="0.7"/>
                  <text x="100" y="92" fill="white" fontSize="7" fontFamily="sans-serif" opacity="0.7">Sialkot</text>
                  <circle cx="80" cy="140" r="3" fill="#D6A65A" opacity="0.7"/>
                  <text x="86" y="144" fill="white" fontSize="7" fontFamily="sans-serif" opacity="0.7">Hyderabad</text>
                  {/* Connection lines from Karachi HQ */}
                  <line x1="75" y1="148" x2="90" y2="75" stroke="rgba(214,166,90,0.25)" strokeWidth="1" strokeDasharray="4,3"/>
                  <line x1="75" y1="148" x2="100" y2="55" stroke="rgba(214,166,90,0.25)" strokeWidth="1" strokeDasharray="4,3"/>
                  <line x1="75" y1="148" x2="82" y2="100" stroke="rgba(214,166,90,0.25)" strokeWidth="1" strokeDasharray="4,3"/>
                  <line x1="75" y1="148" x2="70" y2="85" stroke="rgba(214,166,90,0.25)" strokeWidth="1" strokeDasharray="4,3"/>
                  <line x1="75" y1="148" x2="110" y2="45" stroke="rgba(214,166,90,0.25)" strokeWidth="1" strokeDasharray="4,3"/>
                </svg>
              </div>
              {/* Text content */}
              <div className="text-white flex-1 text-center md:text-left">
                <div className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Nationwide Presence</div>
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-3">Serving Pakistan Since 1996</h2>
                <p className="text-white/65 text-sm leading-relaxed mb-5 max-w-lg">From Karachi to Peshawar, Shaheen Insurance has 12+ branch offices across Pakistan's major cities, bringing trusted insurance solutions closer to every Pakistani family and business.</p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="bg-white/10 rounded-xl px-5 py-3 text-center">
                    <div className="text-gold font-bold text-xl">12+</div>
                    <div className="text-white/60 text-xs">Branch Offices</div>
                  </div>
                  <div className="bg-white/10 rounded-xl px-5 py-3 text-center">
                    <div className="text-gold font-bold text-xl">10+</div>
                    <div className="text-white/60 text-xs">Cities</div>
                  </div>
                  <div className="bg-white/10 rounded-xl px-5 py-3 text-center">
                    <div className="text-gold font-bold text-xl">28+</div>
                    <div className="text-white/60 text-xs">Years of Trust</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-3 gap-4 mb-10"
            >
              {[
                { value: '12+', label: 'Branch Offices' },
                { value: '10+', label: 'Cities Covered' },
                { value: '28+', label: 'Years of Service' },
              ].map(({ value, label }) => (
                <div key={label} className="bg-navy text-white rounded-2xl p-5 text-center">
                  <div className="font-display font-bold text-3xl text-gold mb-1">{value}</div>
                  <div className="text-white/60 text-xs">{label}</div>
                </div>
              ))}
            </motion.div>

            {/* Head Office featured */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mb-6 p-6 bg-navy rounded-2xl text-white"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <span className="font-display font-bold text-gold text-lg">Head Office</span>
                <span className="ml-auto text-xs bg-gold/20 text-gold px-2 py-1 rounded-full font-semibold">Headquarters</span>
              </div>
              <div className="flex items-start gap-2 mb-2 text-sm text-white/80">
                <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                10th Floor, Shaheen Complex, M.R. Kayani Road, Karachi – 74000
              </div>
              <div className="flex items-center gap-2 mb-1 text-sm text-white/80">
                <Phone size={14} className="text-gold shrink-0" />
                021-32630370-75 &nbsp;|&nbsp; 021-32213950-51 &nbsp;|&nbsp; UAN: 111-765-111
              </div>
              <div className="flex items-center gap-2 mb-2 text-sm text-white/80">
                <Phone size={14} className="text-gold/50 shrink-0" />
                Fax: 021-32626674
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Mail size={14} className="text-gold shrink-0" />
                <a href="mailto:info@shaheeninsurance.com" className="hover:text-gold transition-colors">info@shaheeninsurance.com</a>
              </div>
            </motion.div>

            {/* Branch Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {BRANCHES.filter(b => !b.isHQ).map((branch, i) => (
                <motion.div
                  key={branch.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.05 }}
                  className="p-5 bg-surface rounded-2xl border border-navy/8 hover:border-gold/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display font-bold text-navy text-base">{branch.name}</h3>
                  </div>

                  {branch.person && (
                    <div className="flex items-start gap-2 mb-3">
                      <User size={13} className="text-gold shrink-0 mt-0.5" />
                      <div>
                        <span className="text-navy text-sm font-semibold">{branch.person}</span>
                        {branch.title && <p className="text-gray-400 text-xs">{branch.title}</p>}
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-2 mb-2">
                    <MapPin size={13} className="text-gold shrink-0 mt-0.5" />
                    <p className="text-gray-500 text-xs leading-relaxed">{branch.address}</p>
                  </div>

                  {branch.phones.length > 0 && (
                    <div className="flex items-start gap-2 mb-1">
                      <Phone size={13} className="text-gold shrink-0 mt-0.5" />
                      <div>
                        {branch.phones.map((p) => (
                          <p key={p} className="text-gray-600 text-xs">{p}</p>
                        ))}
                        {branch.fax && <p className="text-gray-400 text-xs">Fax: {branch.fax}</p>}
                      </div>
                    </div>
                  )}

                  {branch.email && (
                    <div className="flex items-center gap-2 mt-2">
                      <Mail size={13} className="text-gold shrink-0" />
                      <a href={`mailto:${branch.email}`} className="text-navy text-xs font-medium hover:text-gold transition-colors truncate">
                        {branch.email}
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

          </div>

          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}
