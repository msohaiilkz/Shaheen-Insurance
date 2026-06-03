import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight, Home, Shield, Star, Users, Phone } from 'lucide-react'

interface Crumb { label: string; path?: string }

export type VideoCategory =
  | 'default' | 'motor' | 'fire' | 'marine' | 'travel' | 'engineering'
  | 'aviation' | 'bond' | 'misc' | 'health' | 'takaful' | 'claims'
  | 'about' | 'branches' | 'investor' | 'media' | 'careers' | 'contact'
  | 'downloads' | 'feedback'

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumbs: Crumb[]
  badge?: string
  videoSrc?: string
  videoCategory?: VideoCategory
}

const CATEGORY_VIDEOS: Record<VideoCategory, string[]> = {
  motor: ['https://assets.mixkit.co/videos/preview/mixkit-driving-on-an-empty-highway-34422-large.mp4'],
  fire: ['https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-buildings-41723-large.mp4'],
  marine: ['https://assets.mixkit.co/videos/preview/mixkit-ocean-waves-under-a-clear-sky-4742-large.mp4'],
  travel: ['https://assets.mixkit.co/videos/preview/mixkit-airplane-flying-in-a-blue-sky-33640-large.mp4'],
  engineering: ['https://assets.mixkit.co/videos/preview/mixkit-construction-site-workers-34369-large.mp4'],
  aviation: ['https://assets.mixkit.co/videos/preview/mixkit-airplane-flying-in-a-blue-sky-33640-large.mp4'],
  bond: ['https://assets.mixkit.co/videos/preview/mixkit-business-people-walking-in-a-corporate-building-4357-large.mp4'],
  misc: ['https://assets.mixkit.co/videos/preview/mixkit-office-colleagues-discussing-a-project-4366-large.mp4'],
  health: ['https://assets.mixkit.co/videos/preview/mixkit-doctor-checking-a-patients-health-3014-large.mp4'],
  takaful: ['https://assets.mixkit.co/videos/preview/mixkit-doctor-checking-a-patients-health-3014-large.mp4'],
  claims: ['https://assets.mixkit.co/videos/preview/mixkit-business-people-walking-in-a-corporate-building-4357-large.mp4'],
  about: ['https://assets.mixkit.co/videos/preview/mixkit-business-people-walking-in-a-corporate-building-4357-large.mp4'],
  branches: ['https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-buildings-41723-large.mp4'],
  investor: ['https://assets.mixkit.co/videos/preview/mixkit-office-colleagues-discussing-a-project-4366-large.mp4'],
  media: ['https://assets.mixkit.co/videos/preview/mixkit-business-people-walking-in-a-corporate-building-4357-large.mp4'],
  careers: ['https://assets.mixkit.co/videos/preview/mixkit-business-people-walking-in-a-corporate-building-4357-large.mp4'],
  contact: ['https://assets.mixkit.co/videos/preview/mixkit-office-colleagues-discussing-a-project-4366-large.mp4'],
  downloads: ['https://assets.mixkit.co/videos/preview/mixkit-office-colleagues-discussing-a-project-4366-large.mp4'],
  feedback: ['https://assets.mixkit.co/videos/preview/mixkit-business-people-walking-in-a-corporate-building-4357-large.mp4'],
  default: ['https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-buildings-41723-large.mp4'],
}

const TRUST_BADGES = [
  { icon: Shield, label: 'PACRA A++' },
  { icon: Star, label: 'PAF Sponsored' },
  { icon: Users, label: '28+ Years' },
  { icon: Phone, label: '12 Branches' },
]

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  x: (i * 19 + 7) % 100,
  y: (i * 37 + 13) % 100,
  size: (i % 3) + 1.5,
  delay: (i * 0.3) % 4,
  duration: 5 + (i % 5),
}))

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  badge,
  videoSrc,
  videoCategory = 'default',
}: PageHeroProps) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  const videos = videoSrc ? [videoSrc] : CATEGORY_VIDEOS[videoCategory]
  const words = title.split(' ')

  return (
    <section
      ref={ref}
      className="relative overflow-hidden flex flex-col justify-end"
      style={{ minHeight: 'clamp(340px, 52vh, 560px)' }}
    >
      {/* ── Background Layers ─────────────────────────── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: videoY }}>

        {/* Base animated gradient — guaranteed */}
        <div className="absolute inset-0 hero-animated-bg" />

        {/* Video layer */}
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110 opacity-[0.22] mix-blend-luminosity"
        >
          {videos.map((src, i) => <source key={i} src={src} type="video/mp4" />)}
        </video>

        {/* Multi-layer overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/55 to-navy/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />

        {/* Animated grid */}
        <div className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(214,166,90,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(214,166,90,0.8) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Floating particles */}
        {PARTICLES.map(({ id, x, y, size, delay, duration }) => (
          <motion.div
            key={id}
            className="absolute rounded-full bg-gold/25"
            style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
            animate={{ y: [0, -22, 0], opacity: [0.15, 0.6, 0.15] }}
            transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* Radial glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/8 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Diagonal accent lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.12]" preserveAspectRatio="none">
          <line x1="100%" y1="0" x2="60%" y2="100%" stroke="#D6A65A" strokeWidth="1" />
          <line x1="88%" y1="0" x2="48%" y2="100%" stroke="#D6A65A" strokeWidth="0.5" />
        </svg>

        {/* Gold accent borders */}
        <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-gold/50 via-gold/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold/70 via-gold/30 to-transparent" />
      </motion.div>

      {/* ── Content ─────────────────────────────────────── */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full pt-24 pb-10 md:pt-32 md:pb-14"
        style={{ y: contentY, opacity }}
      >
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-1.5 text-[11px] text-white/50 mb-6 flex-wrap uppercase tracking-widest font-semibold"
        >
          <Link to="/" className="hover:text-gold transition-colors flex items-center gap-1.5">
            <Home size={12} />Home
          </Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <ChevronRight size={12} className="text-gold/40" />
              {crumb.path
                ? <Link to={crumb.path} className="hover:text-gold transition-colors">{crumb.label}</Link>
                : <span className="text-white/80">{crumb.label}</span>}
            </span>
          ))}
        </motion.nav>

        {/* Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="inline-flex items-center gap-3 bg-gold/10 border border-gold/30 backdrop-blur-sm px-4 py-2 mb-5"
          >
            <motion.div
              className="w-1.5 h-1.5 bg-gold rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            <span className="text-gold text-[11px] font-bold tracking-[0.25em] uppercase font-display">{badge}</span>
          </motion.div>
        )}

        {/* Title */}
        <div className="mb-4 overflow-hidden">
          <motion.h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.06] uppercase tracking-wide"
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                initial={{ opacity: 0, y: 50, rotateX: -25 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              >
                {word === words[words.length - 1]
                  ? <span className="text-gold">{word}</span>
                  : word}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="h-[2px] w-16 bg-gradient-to-r from-gold to-gold/20 mb-5"
        />

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4 }}
            className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed font-light mb-8"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Trust badges strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          {TRUST_BADGES.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.55 + i * 0.08 }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/12 backdrop-blur-sm px-3 py-1.5"
            >
              <Icon size={12} className="text-gold" />
              <span className="text-white/70 text-[10px] font-semibold uppercase tracking-wider">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1"
      >
        <motion.div
          className="w-[1px] h-7 bg-gradient-to-b from-gold/50 to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
