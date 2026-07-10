import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useJourney, type JourneyMode } from '../../context/JourneyContext'
import { takafulize } from '../../lib/wording'

/** Compact segmented control to switch between Conventional and Takaful. */
function JourneySwitch() {
  const { mode, setMode } = useJourney()
  if (!mode) return null

  const opts: { value: JourneyMode; label: string }[] = [
    { value: 'conventional', label: 'Conventional' },
    { value: 'takaful', label: 'Takaful' },
  ]

  return (
    <div className="hidden md:inline-flex items-center rounded-full bg-navy/5 p-0.5" role="group" aria-label="Journey mode">
      {opts.map((o) => (
        <button
          key={o.value}
          onClick={() => setMode(o.value)}
          className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide rounded-full transition-colors ${
            mode === o.value ? 'bg-navy text-white shadow-sm' : 'text-navy/60 hover:text-navy'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

const NAV_ITEMS = [
  {
    label: 'About',
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
  { label: 'Branches', path: '/branches' },
  { label: 'Investor', path: '/investor' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const location = useLocation()
  const { isTakaful, mode, setMode } = useJourney()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMobileExpanded(null)
    setOpenDropdown(null)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Navbar sits over a light entry gate at the top of every page now, so it
  // stays solid (was transparent over the old dark hero).
  const navBg = scrolled ? 'bg-white shadow-sm' : 'bg-white/90 backdrop-blur-sm'
  const logoFilter = 'none'
  const linkColor = 'text-gray-700 hover:text-navy'
  const activeLinkColor = 'text-navy font-semibold'

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between h-16 lg:h-18">

          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img
              src="/logo.png"
              alt="Shaheen Insurance"
              className="h-9 w-auto object-contain transition-all duration-300"
              style={{ filter: logoFilter }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/')
              return (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors duration-150 ${isActive ? activeLinkColor : linkColor}`}
                  >
                    {takafulize(item.label, isTakaful)}
                    {item.children && <ChevronDown size={11} className="opacity-60 mt-px" />}
                  </Link>

                  <AnimatePresence>
                    {item.children && openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-52 bg-white border border-gray-100 shadow-xl shadow-navy/8 py-2 z-50 rounded-xl overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`flex items-center justify-between px-4 py-2.5 text-[13px] transition-colors ${
                              location.pathname === child.path
                                ? 'text-navy font-semibold bg-surface'
                                : 'text-gray-600 hover:text-navy hover:bg-surface'
                            }`}
                          >
                            {takafulize(child.label, isTakaful)}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <JourneySwitch />
            <Link
              to="/claims/intimation"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold transition-all duration-200 rounded-lg bg-navy text-white hover:bg-navy/90"
            >
              File a Claim
              <ArrowRight size={14} />
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors text-navy hover:bg-surface"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-navy/95 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />

            {/* Menu panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100">
                <img src="/logo.png" alt="Shaheen Insurance" className="h-8 w-auto object-contain" />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-gray-500 hover:text-navy rounded-lg hover:bg-surface transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav items */}
              <div className="flex-1 overflow-y-auto py-4 px-4">
                {NAV_ITEMS.map((item) => {
                  const isActive = location.pathname.startsWith(item.path)
                  const isExpanded = mobileExpanded === item.label
                  return (
                    <div key={item.path} className="mb-1">
                      <div
                        className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-colors ${
                          isActive ? 'bg-surface text-navy font-semibold' : 'text-gray-700 hover:bg-surface hover:text-navy'
                        }`}
                        onClick={() => {
                          if (item.children) {
                            setMobileExpanded(isExpanded ? null : item.label)
                          } else {
                            setMobileOpen(false)
                          }
                        }}
                      >
                        <Link
                          to={item.path}
                          className="flex-1 text-sm font-medium"
                          onClick={(e) => item.children && e.preventDefault()}
                        >
                          {takafulize(item.label, isTakaful)}
                        </Link>
                        {item.children && (
                          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                            <ChevronDown size={15} className="text-gray-400" />
                          </motion.div>
                        )}
                      </div>

                      <AnimatePresence>
                        {item.children && isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 mt-1 border-l-2 border-gold/20 pl-3 pb-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  onClick={() => setMobileOpen(false)}
                                  className={`block py-2.5 text-sm transition-colors ${
                                    location.pathname === child.path
                                      ? 'text-navy font-semibold'
                                      : 'text-gray-500 hover:text-navy'
                                  }`}
                                >
                                  {takafulize(child.label, isTakaful)}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>

              {/* Bottom CTA */}
              <div className="px-4 pb-6 pt-3 border-t border-gray-100">
                {/* Journey switch (mobile) */}
                {mode && (
                  <div className="mb-3">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 px-1">Journey</p>
                    <div className="flex gap-2">
                      {(['conventional', 'takaful'] as const).map((m) => (
                        <button
                          key={m}
                          onClick={() => setMode(m)}
                          className={`flex-1 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wide border transition-colors ${
                            mode === m ? 'bg-navy text-white border-navy' : 'bg-white text-navy border-navy/15'
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                <Link
                  to="/claims/intimation"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-navy text-white font-bold py-3.5 rounded-xl text-sm hover:bg-navy/90 transition-colors"
                >
                  File a Claim
                  <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
