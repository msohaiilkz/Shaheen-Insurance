import { Phone, Mail, MapPin, Clock, Shield, Star, TrendingUp, Users, Car, Flame, Anchor, Plane, Wrench, Heart, ArrowRight, FileText, Download, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const STATS = [
  { label: 'PACRA Rating', value: 'A++', icon: Shield, color: 'text-gold', bar: 100 },
  { label: 'Paid-up Capital', value: 'Rs.600M', icon: TrendingUp, color: 'text-blue-400', bar: 85 },
  { label: 'Years of Service', value: '28+', icon: Star, color: 'text-gold', bar: 90 },
  { label: 'Branch Offices', value: '12+', icon: Users, color: 'text-green-400', bar: 70 },
]

const QUICK_PRODUCTS = [
  { Icon: Car, label: 'Motor', path: '/products/motor' },
  { Icon: Flame, label: 'Fire', path: '/products/fire' },
  { Icon: Anchor, label: 'Marine', path: '/products/marine' },
  { Icon: Plane, label: 'Travel', path: '/products/travel' },
  { Icon: Wrench, label: 'Engineering', path: '/products/engineering' },
  { Icon: Heart, label: 'Health', path: '/health-care' },
]

export default function ContactSidebar() {
  return (
    <aside className="space-y-4">

      {/* ── Brand trust card ── */}
      <div className="relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0 hero-animated-bg" />
        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'linear-gradient(rgba(214,166,90,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(214,166,90,0.8) 1px,transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative p-5">
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="Shaheen Insurance" className="h-10 w-auto object-contain" />
            <div>
              <div className="text-white font-display font-bold text-sm tracking-wide">SHAHEEN</div>
              <div className="text-gold text-[10px] font-semibold tracking-widest">INSURANCE</div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {STATS.map(({ label, value, icon: Icon, color, bar }) => (
              <div key={label} className="bg-white/6 border border-white/10 rounded-xl p-2.5">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Icon size={11} className={color} />
                  <span className={`font-display font-bold text-sm ${color}`}>{value}</span>
                </div>
                <div className="text-white/55 text-[9px] leading-none mb-1.5">{label}</div>
                <div className="h-[2px] bg-white/10 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${bar}%` }}
                    transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gold/60"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {['SECP Regulated', 'PSX: SHNI', 'Window Takaful', 'PAF Sponsored'].map(b => (
              <span key={b} className="inline-flex items-center gap-1 text-[8px] font-bold uppercase tracking-wide text-white/60 bg-white/6 border border-white/10 px-2 py-0.5 rounded-full">
                <CheckCircle2 size={7} className="text-gold" />{b}
              </span>
            ))}
          </div>

          {/* Contact info */}
          <div className="space-y-2.5 mb-4">
            <a href="tel:111765111" className="flex items-center gap-2.5 group">
              <div className="w-7 h-7 rounded-lg bg-white/8 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                <Phone size={12} className="text-gold" />
              </div>
              <div>
                <div className="text-white font-bold text-xs group-hover:text-gold transition-colors">111-765-111</div>
                <div className="text-white/40 text-[9px]">021-32630370-75</div>
              </div>
            </a>
            <a href="mailto:info@shaheeninsurance.com" className="flex items-center gap-2.5 group">
              <div className="w-7 h-7 rounded-lg bg-white/8 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                <Mail size={12} className="text-gold" />
              </div>
              <span className="text-white/70 text-xs group-hover:text-gold transition-colors">info@shaheeninsurance.com</span>
            </a>
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-white/8 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin size={12} className="text-gold" />
              </div>
              <span className="text-white/55 text-[10px] leading-relaxed">10th Floor, Shaheen Complex,<br />M.R. Kayani Road, Karachi</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-white/8 flex items-center justify-center shrink-0">
                <Clock size={12} className="text-gold" />
              </div>
              <span className="text-white/55 text-[10px]">Mon–Fri: 9:00 AM – 5:00 PM</span>
            </div>
          </div>

          <Link to="/contact"
            className="flex items-center justify-center gap-2 w-full bg-gold hover:bg-gold-light text-navy font-bold text-xs py-2.5 transition-colors">
            Contact Us <ArrowRight size={13} />
          </Link>
        </div>
      </div>

      {/* ── Quick Products ── */}
      <div className="bg-white border border-navy/8 rounded-2xl p-4 shadow-card">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display font-bold text-navy text-sm uppercase tracking-wide">Our Products</h3>
          <Link to="/products" className="text-gold text-[10px] font-bold hover:underline flex items-center gap-0.5">
            All <ArrowRight size={10} />
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {QUICK_PRODUCTS.map(({ Icon, label, path }) => (
            <Link key={label} to={path}
              className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl bg-surface border border-navy/5 hover:border-gold/40 hover:bg-gold/5 transition-all group">
              <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center group-hover:bg-gold transition-colors">
                <Icon size={14} className="text-gold group-hover:text-navy transition-colors" />
              </div>
              <span className="text-navy/70 text-[9px] font-semibold group-hover:text-gold transition-colors">{label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* ── File a Claim ── */}
      <div className="relative rounded-2xl overflow-hidden bg-red">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 80% 20%, white 0%, transparent 50%)',
          }}
        />
        <div className="relative p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center">
              <FileText size={18} className="text-white" />
            </div>
            <div>
              <div className="text-white font-display font-bold text-sm">File a Claim</div>
              <div className="text-white/70 text-[10px]">Quick 5-step process</div>
            </div>
          </div>
          <div className="flex gap-1.5 mb-4">
            {['Report', 'Upload', 'Survey', 'Review', 'Settle'].map((s, i) => (
              <div key={s} className="flex-1 text-center">
                <div className="w-5 h-5 rounded-full bg-white/20 text-white text-[8px] font-bold flex items-center justify-center mx-auto mb-0.5">{i + 1}</div>
                <div className="text-white/50 text-[7px] font-medium">{s}</div>
              </div>
            ))}
          </div>
          <Link to="/claims/intimation"
            className="flex items-center justify-center gap-2 w-full bg-white text-red font-bold text-xs py-2.5 rounded-lg hover:bg-white/90 transition-colors">
            Start Claim <ArrowRight size={13} />
          </Link>
        </div>
      </div>

      {/* ── Downloads ── */}
      <div className="bg-surface border border-navy/8 rounded-2xl p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 bg-navy/8 rounded-xl flex items-center justify-center">
            <Download size={16} className="text-navy" />
          </div>
          <div>
            <h3 className="font-display font-bold text-navy text-sm">Downloads</h3>
            <p className="text-gray-400 text-[10px]">Forms & policy documents</p>
          </div>
        </div>
        {['Claim Forms', 'Policy Wordings', 'Application Forms'].map(item => (
          <div key={item} className="flex items-center gap-2 py-1.5 border-b border-navy/5 last:border-0">
            <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
            <span className="text-navy/60 text-xs">{item}</span>
          </div>
        ))}
        <Link to="/downloads"
          className="mt-3 flex items-center justify-center gap-2 w-full border-2 border-navy text-navy font-bold text-xs py-2.5 rounded-xl hover:bg-navy hover:text-white transition-all">
          View All Downloads
        </Link>
      </div>

    </aside>
  )
}
