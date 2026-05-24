import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ContactSidebar() {
  return (
    <aside className="space-y-5">
      <div className="bg-navy rounded-2xl p-6 text-white">
        <h3 className="font-display font-bold text-lg mb-5">Need Help?</h3>
        <div className="space-y-4">
          <div className="flex gap-3">
            <Phone size={16} className="text-gold shrink-0 mt-0.5" />
            <div>
              <div className="text-xs text-white/50 mb-0.5">UAN</div>
              <a href="tel:111765111" className="font-semibold hover:text-gold transition-colors">111-765-111</a>
              <div className="text-white/50 text-xs mt-0.5">021-32630370-75</div>
            </div>
          </div>
          <div className="flex gap-3">
            <Mail size={16} className="text-gold shrink-0 mt-0.5" />
            <div>
              <div className="text-xs text-white/50 mb-0.5">Email</div>
              <a href="mailto:info@shaheeninsurance.com" className="text-sm hover:text-gold transition-colors">info@shaheeninsurance.com</a>
            </div>
          </div>
          <div className="flex gap-3">
            <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
            <div>
              <div className="text-xs text-white/50 mb-0.5">Head Office</div>
              <p className="text-sm text-white/75 leading-relaxed">10th Floor, Shaheen Complex, M.R. Kayani Road, Karachi</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Clock size={16} className="text-gold shrink-0 mt-0.5" />
            <div>
              <div className="text-xs text-white/50 mb-0.5">Business Hours</div>
              <p className="text-sm text-white/75">Mon–Fri: 9:00 AM – 5:00 PM</p>
            </div>
          </div>
        </div>
        <Link to="/contact" className="mt-6 block w-full text-center btn-primary text-xs py-2.5">
          Contact Us
        </Link>
      </div>

      <div className="bg-gold/10 border border-gold/20 rounded-2xl p-6">
        <h3 className="font-display font-bold text-navy text-base mb-3">File a Claim</h3>
        <p className="text-gray-500 text-sm mb-4">Submit your claim online quickly and easily.</p>
        <Link to="/claims/intimation" className="block w-full text-center btn-navy text-xs py-2.5">
          File a Claim Now
        </Link>
      </div>

      <div className="bg-surface rounded-2xl p-6">
        <h3 className="font-display font-bold text-navy text-base mb-3">Downloads</h3>
        <p className="text-gray-500 text-sm mb-4">Access claim forms, application forms and policy documents.</p>
        <Link to="/downloads" className="block w-full text-center btn-outline-navy text-xs py-2.5 border-2 border-navy text-navy rounded-full font-semibold hover:bg-navy hover:text-white transition-colors">
          View Downloads
        </Link>
      </div>
    </aside>
  )
}
