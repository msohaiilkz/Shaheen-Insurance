import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

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

const CATEGORY_VIDEOS: Record<VideoCategory, string> = {
  motor:       'https://assets.mixkit.co/videos/preview/mixkit-driving-on-an-empty-highway-34422-large.mp4',
  fire:        'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-buildings-41723-large.mp4',
  marine:      'https://assets.mixkit.co/videos/preview/mixkit-ocean-waves-under-a-clear-sky-4742-large.mp4',
  travel:      'https://assets.mixkit.co/videos/preview/mixkit-airplane-flying-in-a-blue-sky-33640-large.mp4',
  engineering: 'https://assets.mixkit.co/videos/preview/mixkit-construction-site-workers-34369-large.mp4',
  aviation:    'https://assets.mixkit.co/videos/preview/mixkit-airplane-flying-in-a-blue-sky-33640-large.mp4',
  bond:        'https://assets.mixkit.co/videos/preview/mixkit-business-people-walking-in-a-corporate-building-4357-large.mp4',
  misc:        'https://assets.mixkit.co/videos/preview/mixkit-office-colleagues-discussing-a-project-4366-large.mp4',
  health:      'https://assets.mixkit.co/videos/preview/mixkit-doctor-checking-a-patients-health-3014-large.mp4',
  takaful:     'https://assets.mixkit.co/videos/preview/mixkit-doctor-checking-a-patients-health-3014-large.mp4',
  claims:      'https://assets.mixkit.co/videos/preview/mixkit-business-people-walking-in-a-corporate-building-4357-large.mp4',
  about:       'https://assets.mixkit.co/videos/preview/mixkit-business-people-walking-in-a-corporate-building-4357-large.mp4',
  branches:    'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-buildings-41723-large.mp4',
  investor:    'https://assets.mixkit.co/videos/preview/mixkit-office-colleagues-discussing-a-project-4366-large.mp4',
  media:       'https://assets.mixkit.co/videos/preview/mixkit-business-people-walking-in-a-corporate-building-4357-large.mp4',
  careers:     'https://assets.mixkit.co/videos/preview/mixkit-business-people-walking-in-a-corporate-building-4357-large.mp4',
  contact:     'https://assets.mixkit.co/videos/preview/mixkit-office-colleagues-discussing-a-project-4366-large.mp4',
  downloads:   'https://assets.mixkit.co/videos/preview/mixkit-office-colleagues-discussing-a-project-4366-large.mp4',
  feedback:    'https://assets.mixkit.co/videos/preview/mixkit-business-people-walking-in-a-corporate-building-4357-large.mp4',
  default:     'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-buildings-41723-large.mp4',
}

export default function PageHero({ title, subtitle, breadcrumbs, badge, videoSrc, videoCategory = 'default' }: PageHeroProps) {
  const videoUrl = videoSrc ?? CATEGORY_VIDEOS[videoCategory]

  return (
    <section
      className="relative flex flex-col justify-end overflow-hidden"
      style={{ minHeight: 'clamp(320px, 45vh, 480px)' }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 scale-105"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-navy" style={{ opacity: 0.82 }} />
        {/* Bottom gold line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-gold/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 w-full pt-28 pb-10 md:pt-36 md:pb-12">

        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-1.5 text-[10px] text-white/40 mb-5 flex-wrap uppercase tracking-widest font-semibold"
        >
          <Link to="/" className="hover:text-gold transition-colors flex items-center gap-1">
            <Home size={11} />
          </Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <ChevronRight size={10} className="text-white/25" />
              {crumb.path
                ? <Link to={crumb.path} className="hover:text-gold transition-colors">{crumb.label}</Link>
                : <span className="text-white/70">{crumb.label}</span>}
            </span>
          ))}
        </motion.nav>

        {/* Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 px-3 py-1.5 mb-4 rounded-full"
          >
            <div className="w-1.5 h-1.5 bg-gold rounded-full" />
            <span className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase">{badge}</span>
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="font-display font-black text-white uppercase leading-tight tracking-tight mb-3"
          style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-white/55 text-sm md:text-base max-w-2xl leading-relaxed font-light"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
