import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ExternalLink, Shield } from 'lucide-react'

const PRODUCT_LINKS = [
  { label: 'Motor Insurance', path: '/products/motor' },
  { label: 'Fire Insurance', path: '/products/fire' },
  { label: 'Marine Insurance', path: '/products/marine' },
  { label: 'Travel Insurance', path: '/products/travel' },
  { label: 'Engineering', path: '/products/engineering' },
  { label: 'Aviation', path: '/products/aviation' },
  { label: 'Takaful Health Care', path: '/health-care/takaful' },
]

const QUICK_LINKS = [
  { label: 'About Us', path: '/about' },
  { label: 'Branch Network', path: '/branches' },
  { label: 'Claims Procedure', path: '/claims/procedure' },
  { label: 'File a Claim', path: '/claims/intimation' },
  { label: 'Investor Information', path: '/investor' },
  { label: 'Financial Reports', path: '/investor/reports' },
  { label: 'Media Center', path: '/media' },
  { label: 'Downloads', path: '/downloads' },
  { label: 'Careers', path: '/careers' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-gradient text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-10 pb-8 md:pt-16 md:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-5">
              <img
                src="/logo.png"
                alt="Shaheen Insurance"
                className="h-14 w-auto object-contain"
              />
              <div>
                <div className="font-display font-bold text-base text-white leading-tight tracking-wide uppercase">Shaheen Insurance</div>
                <div className="text-gold text-[10px] font-semibold tracking-widest uppercase mt-0.5">A Sign of Protection</div>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              A project of Shaheen Foundation (PAF), incorporated in 1996. Delivering trusted insurance solutions across Pakistan for over 28 years.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <Shield size={14} className="text-gold shrink-0" />
              <span className="text-xs text-white/60">PACRA Rated: <span className="text-gold font-semibold">A++ Stable</span></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/60">PSX Symbol: <span className="text-white font-semibold">SHNI</span></span>
            </div>

            {/* Social */}
            <div className="flex gap-2 mt-6">
              <a
                href="https://facebook.com/ShaheenInsuranceCompany/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-gold transition-colors flex items-center justify-center"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="https://linkedin.com/company/shaheen-insurance-company-limited"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-gold transition-colors flex items-center justify-center"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-base">Products</h4>
            <ul className="space-y-2.5">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/55 text-sm hover:text-gold transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-base">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/55 text-sm hover:text-gold transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-base">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={15} className="text-gold shrink-0 mt-0.5" />
                <span className="text-white/55 text-sm leading-relaxed">
                  10th Floor, Shaheen Complex,<br />M.R. Kayani Road, Karachi
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={15} className="text-gold shrink-0" />
                <div className="text-sm">
                  <div className="text-white font-medium">UAN: 111-765-111</div>
                  <div className="text-white/55">021-32630370-75</div>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={15} className="text-gold shrink-0" />
                <a href="mailto:info@shaheeninsurance.com" className="text-white/55 text-sm hover:text-gold transition-colors">
                  info@shaheeninsurance.com
                </a>
              </li>
            </ul>

            {/* Regulatory */}
            <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
              <a
                href="http://secp.gov.pk/ComplaintForm1.asp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-white/40 hover:text-gold transition-colors"
              >
                <ExternalLink size={11} />
                SECP Investor Complaints Portal
              </a>
              <a
                href="https://jamapunji.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="block opacity-60 hover:opacity-100 transition-opacity"
              >
                <img
                  src="/jamapunji.jpg"
                  alt="Jamapunji — SECP Investor Education"
                  className="h-8 w-auto object-contain"
                  style={{ filter: 'invert(1)' }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs">
            © {new Date().getFullYear()} Shaheen Insurance Company Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/about/code-of-conduct" className="text-white/35 text-xs hover:text-gold transition-colors">
              Code of Conduct
            </Link>
            <Link to="/feedback-complaints" className="text-white/35 text-xs hover:text-gold transition-colors">
              Feedback & Complaints
            </Link>
            <Link to="/site-map" className="text-white/35 text-xs hover:text-gold transition-colors">
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
