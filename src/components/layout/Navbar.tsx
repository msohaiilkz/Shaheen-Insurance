import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  {
    label: 'About Us',
    path: '/about',
    children: [
      { label: 'Who We Are', path: '/about/who-we-are' },
      { label: 'Vision & Mission', path: '/about/vision' },
      { label: 'Core Values', path: '/about/core-values' },
      { label: 'Corporate Profile', path: '/about/corporate-profile' },
      { label: 'Board & Management', path: '/about/management' },
      { label: 'PAF Founders', path: '/about/paf-founders' },
    ],
  },
  {
    label: 'Products',
    path: '/products',
    children: [
      { label: 'Motor Insurance', path: '/products/motor' },
      { label: 'Fire Insurance', path: '/products/fire' },
      { label: 'Marine Insurance', path: '/products/marine' },
      { label: 'Travel Insurance', path: '/products/travel' },
      { label: 'Engineering', path: '/products/engineering' },
      { label: 'Miscellaneous', path: '/products/miscellaneous' },
      { label: 'Bond Insurance', path: '/products/bond' },
      { label: 'Aviation', path: '/products/aviation' },
    ],
  },
  {
    label: 'Health Care',
    path: '/health-care',
    children: [
      { label: 'Takaful Health Care', path: '/health-care/takaful' },
      { label: 'Group Health', path: '/health-care/group' },
      { label: 'Individual / Family', path: '/health-care/individual' },
      { label: 'Panel Hospitals', path: '/health-care/panel-hospitals' },
    ],
  },
  {
    label: 'Claims',
    path: '/claims',
    children: [
      { label: 'General Procedure', path: '/claims/procedure' },
      { label: 'Claim Forms', path: '/claims/forms' },
      { label: 'Intimation Form', path: '/claims/intimation' },
    ],
  },
  { label: 'Branch Network', path: '/branches' },
  { label: 'Investor Info', path: '/investor' },
  { label: 'Media Center', path: '/media' },
  { label: 'Contact Us', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location.pathname])

  return (
    <>
      {/* Top accent bar */}
      <div className="text-white/70 text-[11px] py-1.5 px-4 lg:px-6 flex justify-between items-center" style={{ backgroundColor: '#1A2570' }}>
        <span className="hidden sm:flex items-center gap-4 truncate">
          <span>Shaheen Insurance Company Ltd — A Sign of Protection</span>
        </span>
        <div className="flex items-center gap-3 ml-auto">
          <a href="tel:111765111" className="flex items-center gap-1.5 hover:text-gold transition-colors">
            <Phone size={10} className="text-gold" />
            <span className="hidden xs:inline">UAN: </span><span className="text-white font-medium">111-765-111</span>
          </a>
          <span className="w-px h-3 bg-white/20" />
          <span className="text-gold font-semibold">PACRA: A++</span>
        </div>
      </div>

      {/* Main navbar — always white */}
      <motion.header
        id="main-navbar"
        className={`sticky top-0 z-50 bg-white border-b border-navy/10 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-14 md:h-16">

          {/* Logo */}
          <Link to="/" className="shrink-0 flex items-center">
            <img
              src="/logo.png"
              alt="Shaheen Insurance Company Ltd"
              className="h-9 lg:h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium tracking-wide transition-colors duration-150 ${
                    location.pathname === item.path || location.pathname.startsWith(item.path + '/')
                      ? 'text-gold'
                      : 'text-navy hover:text-gold'
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown size={11} className="opacity-50 mt-px" />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-0 w-52 bg-white shadow-navy border border-navy/8 py-1 z-50"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-4 py-2.5 text-[13px] hover:bg-surface hover:text-gold transition-colors border-l-2 ${
                            location.pathname === child.path
                              ? 'text-gold border-gold bg-surface'
                              : 'text-navy/70 border-transparent'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/claims/intimation"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2 bg-red text-white font-semibold text-[13px] tracking-wide hover:bg-red-dark transition-colors"
            >
              File a Claim
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-navy hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed left-0 right-0 z-40 bg-white border-b border-navy/10 shadow-xl overflow-y-auto"
            style={{ top: 'calc(var(--navbar-offset, 82px))', maxHeight: 'calc(100vh - 82px)' }}
          >
            <div className="px-4 py-3 space-y-0.5">
              {NAV_ITEMS.map((item) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center justify-between px-4 py-3 font-semibold text-sm border-l-2 transition-colors ${
                      location.pathname.startsWith(item.path) && item.path !== '/' || location.pathname === item.path
                        ? 'text-gold border-gold bg-surface'
                        : 'text-navy border-transparent hover:text-gold hover:bg-surface hover:border-gold'
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown size={13} className="opacity-40" />}
                  </Link>
                  {item.children && (
                    <div className="ml-4 border-l-2 border-gold/20 mb-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            location.pathname === child.path
                              ? 'text-gold font-semibold'
                              : 'text-navy/55 hover:text-gold'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 pb-2 border-t border-navy/10">
                <Link to="/claims/intimation" className="block w-full text-center bg-red text-white font-bold py-3.5 text-sm tracking-wide hover:bg-red-dark transition-colors rounded">
                  File a Claim
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
