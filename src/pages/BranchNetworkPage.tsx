import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, User } from 'lucide-react'
import InnerPageHero from '../components/layout/InnerPageHero'
import PageSEO from '../components/shared/PageSEO'
import ScrollReveal from '../components/shared/ScrollReveal'
import { StaggerReveal } from '../components/shared/ScrollReveal'

const BRANCHES = [
  {
    name: 'Head Office',
    person: null, title: null,
    address: '10th Floor, Shaheen Complex, M.R. Kayani Road, Karachi – 74000',
    phones: ['021-32630370-75', '021-32213950-51'],
    fax: '021-32626674',
    email: 'info@shaheeninsurance.com',
    isHQ: true,
  },
  {
    name: 'Karachi Corporate',
    person: 'Mr. Sohel N. Kidwai', title: 'Chief Marketing Officer (CMO)',
    address: 'Office No. 1001 & 1014, 10th Floor, Saima Trade Center, I.I Chundigar Road, Karachi',
    phones: ['021-32650031-3', 'Direct: 021-32213952'],
    fax: null, email: 'sohel.kidwai@shaheeninsurance.com', isHQ: false,
  },
  {
    name: 'Lahore Main',
    person: 'Mr. Ahsan ul Haq', title: null,
    address: 'Office #4-B, 6th Floor, Shaheen Complex, Opp. PTV Station 38, Abbott Road, Lahore',
    phones: ['042-36376270/74/78/79'],
    fax: '042-36376276', email: 'lhr_zone@shaheeninsurance.com', isHQ: false,
  },
  {
    name: 'Lahore Corporate',
    person: 'Mr. Sohaib Ansar Khan', title: 'Executive Vice President (EVP)',
    address: 'Office #6, 6th Floor, Shaheen Complex, Opp. PTV Station 38, Abbott Road, Lahore',
    phones: ['042-36370384/741/742'],
    fax: '042-36370385', email: 'lhr_corporate@shaheeninsurance.com', isHQ: false,
  },
  {
    name: 'Lahore Takaful',
    person: null, title: null,
    address: 'Office #4-B, 6th Floor, Shaheen Complex, Opp. PTV Station 38, Abbott Road, Lahore',
    phones: [], fax: null, email: 'lhr_zone@shaheeninsurance.com', isHQ: false,
  },
  {
    name: 'Islamabad',
    person: 'Mr. Abdul Hameed', title: null,
    address: 'Office #4, Mezzanine Floor, Black Horse Plaza, Fazl-e-Haq Road, Blue Area, Islamabad',
    phones: ['051-2000057'],
    fax: null, email: 'abdul.hameed@shaheeninsurance.com', isHQ: false,
  },
  {
    name: 'Faisalabad',
    person: 'Mr. Mohsin Khan', title: null,
    address: 'Office #1, 2nd Floor, Layllpur, Regency Plaza, Mall Road, Faisalabad',
    phones: ['(041) 2614112', '0341-2613514'],
    fax: null, email: 'fsd@shaheeninsurance.com', isHQ: false,
  },
  {
    name: 'Multan',
    person: 'Mr. Muhammad Naeem Baig', title: 'General Manager Marketing',
    address: 'Office No. 21, 1st Floor, Ali Arcade, LMQ Road, Chock Katchery, Multan',
    phones: ['061-4580190-2'],
    fax: null, email: 'naeem.baig@shaheeninsurance.com', isHQ: false,
  },
  {
    name: 'Peshawar',
    person: 'Mr. Gauhar Aziz', title: null,
    address: 'Office #C-3, Jasmin Arcade, Fakhr-e-Alam Road, Peshawar Cantt',
    phones: ['091-5273122', '0333-9201088'],
    fax: null, email: 'psw@shaheeninsurance.com', isHQ: false,
  },
  {
    name: 'Sialkot',
    person: 'Mr. Faisal Jamil', title: null,
    address: 'Office No. 210, Kareem Plaza, Defence Road, Near Iqbal Town, Sialkot',
    phones: ['(052) 3250982', '(052) 3550131'],
    fax: '(052) 3257412', email: 'sil@shaheeninsurance.com', isHQ: false,
  },
  {
    name: 'Hyderabad',
    person: 'Mr. Shakir Ali', title: null,
    address: 'Upper 2nd Floor, House #75, Soldier Bazar, Hyderabad',
    phones: ['(022) 2720487'],
    fax: '(022) 2720489', email: 'hyd@shaheeninsurance.com', isHQ: false,
  },
  {
    name: 'Sargodha',
    person: 'Mr. Nadeem Awan', title: null,
    address: 'Lahore Road, Sargodha',
    phones: ['0300-8602723'],
    fax: null, email: 'nadeemawan1975@gmail.com', isHQ: false,
  },
  {
    name: 'Rahim Yar Khan',
    person: 'Mr. Naveed Hussain', title: null,
    address: '1st Floor, Blue Building, Shaheen Road, Rahim Yar Khan',
    phones: ['068-5958037', '0321-4741424'],
    fax: null, email: 'naveed.hussain@shaheeninsurance.com', isHQ: false,
  },
]

const MapSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Pakistan outline simplified */}
    <path d="M100,25 L115,20 L130,22 L148,18 L165,25 L178,38 L185,55 L182,70 L192,82 L196,100 L188,118 L174,132 L158,148 L140,158 L120,162 L100,156 L85,142 L72,125 L65,105 L68,85 L75,65 L85,45 Z"
      fill="#D6A65A" opacity="0.08" stroke="#D6A65A" strokeWidth="1.2" />
    {/* Branch dots */}
    <circle cx="108" cy="148" r="6" fill="#D6A65A" opacity="0.9" />
    <circle cx="108" cy="148" r="11" stroke="#D6A65A" strokeWidth="1" opacity="0.3" />
    <circle cx="125" cy="80" r="4.5" fill="#D6A65A" opacity="0.8" />
    <circle cx="140" cy="55" r="4" fill="#D6A65A" opacity="0.75" />
    <circle cx="115" cy="100" r="3.5" fill="#D6A65A" opacity="0.7" />
    <circle cx="105" cy="88" r="3" fill="#D6A65A" opacity="0.65" />
    <circle cx="148" cy="45" r="3" fill="#D6A65A" opacity="0.6" />
    <circle cx="132" cy="72" r="3" fill="#D6A65A" opacity="0.6" />
    <circle cx="118" cy="138" r="3" fill="#D6A65A" opacity="0.6" />
    {/* Connection lines from HQ */}
    <line x1="108" y1="148" x2="125" y2="80" stroke="#D6A65A" strokeWidth="0.8" opacity="0.2" strokeDasharray="4,3" />
    <line x1="108" y1="148" x2="140" y2="55" stroke="#D6A65A" strokeWidth="0.8" opacity="0.2" strokeDasharray="4,3" />
    <line x1="108" y1="148" x2="115" y2="100" stroke="#D6A65A" strokeWidth="0.8" opacity="0.2" strokeDasharray="4,3" />
    <line x1="108" y1="148" x2="105" y2="88" stroke="#D6A65A" strokeWidth="0.8" opacity="0.2" strokeDasharray="4,3" />
    <line x1="108" y1="148" x2="148" y2="45" stroke="#D6A65A" strokeWidth="0.8" opacity="0.2" strokeDasharray="4,3" />
    {/* City labels */}
    <text x="116" y="152" fill="#D6A65A" fontSize="7" fontFamily="sans-serif" opacity="0.7">Karachi</text>
    <text x="130" y="83" fill="#D6A65A" fontSize="6.5" fontFamily="sans-serif" opacity="0.65">Lahore</text>
    <text x="145" y="58" fill="#D6A65A" fontSize="6" fontFamily="sans-serif" opacity="0.6">Islamabad</text>
    <text x="120" y="104" fill="#D6A65A" fontSize="6" fontFamily="sans-serif" opacity="0.6">Multan</text>
    <text x="110" y="91" fill="#D6A65A" fontSize="6" fontFamily="sans-serif" opacity="0.6">Faisalabad</text>
    <text x="152" y="48" fill="#D6A65A" fontSize="6" fontFamily="sans-serif" opacity="0.6">Peshawar</text>
    {/* Checkmark badge */}
    <circle cx="265" cy="25" r="12" fill="#D6A65A" opacity="0.5" stroke="#D6A65A" strokeWidth="1" />
    <path d="M262 28 L265 32 L270 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function BranchNetworkPage() {
  const hq = BRANCHES.find(b => b.isHQ)!
  const branches = BRANCHES.filter(b => !b.isHQ)

  return (
    <>
      <PageSEO
        title="Branch Network"
        description="Shaheen Insurance branch offices across Pakistan — Karachi, Lahore, Islamabad, Faisalabad, Peshawar, Multan, and more. Find your nearest branch with contact details."
        keywords="Shaheen Insurance branches, insurance office Karachi, insurance office Lahore, Shaheen Insurance contact, branch network Pakistan"
        path="/branches"
        schema={{ '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Shaheen Insurance Company Limited', telephone: '+92-21-32630370', address: { '@type': 'PostalAddress', streetAddress: '10th Floor, Shaheen Complex, M.R. Kayani Road', addressLocality: 'Karachi', addressCountry: 'PK' }, areaServed: 'PK' }}
      />
      <InnerPageHero
        category="Nationwide Presence"
        title="Branch Network"
        subtitle="12+ branch offices spanning Pakistan — from Karachi to Peshawar, we bring Shaheen Insurance closer to you"
        breadcrumbs={[{ label: 'Branch Network' }]}
        stats={[{ value: '13', label: 'Offices' }, { value: '10+', label: 'Cities' }, { value: '28+', label: 'Years' }]}
        svgIllustration={<MapSVG />}
      />

      {/* Head Office Feature */}
      <section className="py-20 md:py-28 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Headquarters</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight">Head Office</h2>
              <p className="text-gray-500 text-sm mt-3">Our main operations center in the heart of Karachi's business district.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-navy/15">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80&auto=format&fit=crop"
                  alt="Shaheen Insurance Head Office"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-gold text-navy font-bold text-xs px-3 py-1.5 rounded-full">Shaheen Complex, Karachi</span>
                </div>
              </div>

              <div className="p-7 bg-navy rounded-2xl">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-xs bg-gold/20 text-gold px-3 py-1 rounded-full font-bold">Headquarters</span>
                </div>
                <h3 className="font-display font-bold text-white text-xl mb-5">{hq.name}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={15} className="text-gold shrink-0 mt-0.5" />
                    <p className="text-white/70 text-sm leading-relaxed">{hq.address}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={15} className="text-gold shrink-0 mt-0.5" />
                    <div className="text-sm">
                      {hq.phones.map(p => <p key={p} className="text-white/70">{p}</p>)}
                      <p className="text-white font-semibold">UAN: 111-765-111</p>
                      <p className="text-white/40 text-xs">Fax: {hq.fax}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={15} className="text-gold shrink-0" />
                    <a href={`mailto:${hq.email}`} className="text-gold text-sm hover:text-gold/80 transition-colors">{hq.email}</a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Branches Grid */}
      <section className="py-20 md:py-28 bg-light-blue relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="branches-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,4 52,16 52,32 28,44 4,32 4,16" fill="none" stroke="#D6A65A" strokeWidth="1" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#branches-hex)" />
        </svg>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gold/6 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold-dark text-xs font-bold tracking-[0.25em] uppercase mb-3">Branches</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight">Regional Offices</h2>
              <p className="text-gray-500 text-sm mt-3">Contact your nearest Shaheen Insurance branch directly.</p>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {branches.map(branch => (
              <div key={branch.name} className="p-5 bg-white border border-navy/10 rounded-2xl hover:border-gold/30 hover:bg-white/10 transition-all duration-300 group shadow-card">
                <h3 className="font-display font-bold text-navy text-base mb-3 group-hover:text-gold-dark transition-colors">{branch.name}</h3>
                {branch.person && (
                  <div className="flex items-start gap-2 mb-3">
                    <User size={12} className="text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="text-gray-700 text-xs font-semibold">{branch.person}</span>
                      {branch.title && <p className="text-gray-500 text-xs">{branch.title}</p>}
                    </div>
                  </div>
                )}
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin size={11} className="text-gold shrink-0 mt-0.5" />
                    <p className="text-gray-500 text-xs leading-relaxed">{branch.address}</p>
                  </div>
                  {branch.phones.length > 0 && (
                    <div className="flex items-start gap-2">
                      <Phone size={11} className="text-gold shrink-0 mt-0.5" />
                      <div>
                        {branch.phones.map(p => <p key={p} className="text-gray-500 text-xs">{p}</p>)}
                        {branch.fax && <p className="text-gray-500 text-xs">Fax: {branch.fax}</p>}
                      </div>
                    </div>
                  )}
                  {branch.email && (
                    <div className="flex items-center gap-2">
                      <Mail size={11} className="text-gold shrink-0" />
                      <a href={`mailto:${branch.email}`} className="text-gold-dark text-xs hover:text-gold-dark transition-colors truncate">{branch.email}</a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Pakistan Map + CTA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Coverage</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-6">
                Serving<br /><span className="text-gold">All of Pakistan</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">From Karachi to Peshawar, Shaheen Insurance has offices in Pakistan's major commercial centers. With 12+ branches, we're positioned to serve individuals, businesses, and corporates across the country.</p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[{ val: '13', label: 'Total Offices' }, { val: '10+', label: 'Cities' }, { val: '28+', label: 'Years of Trust' }].map(({ val, label }) => (
                  <div key={label} className="bg-[#f8f7f5] rounded-xl p-4 text-center border border-gray-100">
                    <p className="font-display font-black text-gold text-2xl">{val}</p>
                    <p className="text-gray-500 text-xs mt-1">{label}</p>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-7 py-3.5 rounded-xl hover:bg-gold/90 transition-colors text-sm">
                <Mail size={15} /> Contact Head Office
              </Link>
            </ScrollReveal>

            <ScrollReveal from="right">
              <div className="bg-navy rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(214,166,90,0.6) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                <div className="relative">
                  <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">Pakistan Office Network</p>
                  <svg width="100%" viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M120,30 L138,24 L158,28 L178,22 L198,32 L212,50 L218,72 L215,90 L228,106 L232,128 L222,150 L205,168 L185,184 L162,196 L138,200 L114,194 L96,178 L80,160 L70,138 L73,115 L82,92 L94,68 L106,48 Z"
                      fill="rgba(214,166,90,0.12)" stroke="rgba(214,166,90,0.45)" strokeWidth="1.5" />
                    {/* Northern territory */}
                    <path d="M178,22 L198,16 L212,28 L212,50 L198,32 Z"
                      fill="rgba(214,166,90,0.06)" stroke="rgba(214,166,90,0.25)" strokeWidth="1" strokeDasharray="3,2" />

                    {/* HQ dot - Karachi */}
                    <circle cx="112" cy="185" r="7" fill="#D6A65A" opacity="0.95" />
                    <circle cx="112" cy="185" r="13" stroke="#D6A65A" strokeWidth="1.2" opacity="0.35" />
                    <circle cx="112" cy="185" r="19" stroke="#D6A65A" strokeWidth="0.7" opacity="0.15" />

                    {/* Branch dots */}
                    <circle cx="148" cy="100" r="5" fill="#D6A65A" opacity="0.8" />
                    <circle cx="170" cy="68" r="4.5" fill="#D6A65A" opacity="0.75" />
                    <circle cx="142" cy="125" r="4" fill="#D6A65A" opacity="0.7" />
                    <circle cx="128" cy="108" r="3.5" fill="#D6A65A" opacity="0.65" />
                    <circle cx="178" cy="52" r="3.5" fill="#D6A65A" opacity="0.65" />
                    <circle cx="158" cy="88" r="3.5" fill="#D6A65A" opacity="0.6" />
                    <circle cx="122" cy="170" r="3" fill="#D6A65A" opacity="0.6" />
                    <circle cx="136" cy="145" r="3" fill="#D6A65A" opacity="0.55" />

                    {/* Lines from HQ */}
                    <line x1="112" y1="185" x2="148" y2="100" stroke="rgba(214,166,90,0.22)" strokeWidth="1" strokeDasharray="5,4" />
                    <line x1="112" y1="185" x2="170" y2="68" stroke="rgba(214,166,90,0.22)" strokeWidth="1" strokeDasharray="5,4" />
                    <line x1="112" y1="185" x2="142" y2="125" stroke="rgba(214,166,90,0.22)" strokeWidth="1" strokeDasharray="5,4" />
                    <line x1="112" y1="185" x2="128" y2="108" stroke="rgba(214,166,90,0.22)" strokeWidth="1" strokeDasharray="5,4" />
                    <line x1="112" y1="185" x2="178" y2="52" stroke="rgba(214,166,90,0.18)" strokeWidth="1" strokeDasharray="5,4" />
                    <line x1="112" y1="185" x2="158" y2="88" stroke="rgba(214,166,90,0.18)" strokeWidth="1" strokeDasharray="5,4" />

                    {/* City labels */}
                    <text x="122" y="190" fill="#D6A65A" fontSize="9" fontFamily="sans-serif" opacity="0.85">Karachi ★</text>
                    <text x="155" y="103" fill="white" fontSize="8" fontFamily="sans-serif" opacity="0.65">Lahore</text>
                    <text x="176" y="71" fill="white" fontSize="8" fontFamily="sans-serif" opacity="0.6">Islamabad</text>
                    <text x="148" y="128" fill="white" fontSize="7.5" fontFamily="sans-serif" opacity="0.58">Multan</text>
                    <text x="134" y="111" fill="white" fontSize="7.5" fontFamily="sans-serif" opacity="0.55">Faisalabad</text>
                    <text x="184" y="55" fill="white" fontSize="7.5" fontFamily="sans-serif" opacity="0.55">Peshawar</text>
                    <text x="164" y="91" fill="white" fontSize="7" fontFamily="sans-serif" opacity="0.5">Sialkot</text>
                    <text x="140" y="148" fill="white" fontSize="7" fontFamily="sans-serif" opacity="0.5">R.Y. Khan</text>
                  </svg>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-light-blue relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="branches-cg" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#D6A65A" strokeWidth="0.8" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#branches-cg)" />
        </svg>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <ScrollReveal>
          <div className="relative z-10 max-w-2xl mx-auto px-5 text-center">
            <p className="text-gold-dark text-xs font-bold tracking-[0.25em] uppercase mb-4">Connect</p>
            <h2 className="font-display font-black text-navy text-3xl md:text-4xl uppercase leading-tight mb-4">
              Call or <span className="text-gold-dark">Email Us</span>
            </h2>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">Reach our main office or your nearest branch directly. Our team is ready to assist with quotes, queries, and claims.</p>
            <div className="flex justify-center gap-3 flex-wrap">
              <a href="tel:111765111" className="inline-flex items-center gap-2 bg-navy text-white font-bold px-8 py-4 rounded-xl text-sm hover:bg-navy/90 transition-colors">
                <Phone size={15} /> 111-765-111
              </a>
              <a href="mailto:info@shaheeninsurance.com" className="inline-flex items-center gap-2 bg-white border border-navy/15 text-navy shadow-card font-semibold px-8 py-4 rounded-xl text-sm hover:bg-white/80 transition-colors">
                <Mail size={15} /> info@shaheeninsurance.com
              </a>
            </div>
            <div className="mt-5">
              <Link to="/contact" className="inline-flex items-center gap-2 text-gray-500 hover:text-gold-dark transition-colors text-sm">
                <MapPin size={13} /> Or send us a message online
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
