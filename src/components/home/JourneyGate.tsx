import { useState } from 'react'
import { ArrowRight, ShieldCheck, Moon, Check } from 'lucide-react'
import { useJourney, type JourneyMode } from '../../context/JourneyContext'

interface SideConfig {
  mode: JourneyMode
  icon: typeof ShieldCheck
  tag: string
  title: string
  desc: string
  points: string[]
  img: string
}

const SIDES: SideConfig[] = [
  {
    mode: 'conventional',
    icon: ShieldCheck,
    tag: 'General Insurance',
    title: 'Conventional',
    desc: 'Our full suite of protection — Motor, Fire, Marine, Health, Travel and more.',
    points: ['Comprehensive cover', 'PACRA A++ rated', 'Nationwide claims network'],
    img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1400&q=75&auto=format&fit=crop',
  },
  {
    mode: 'takaful',
    icon: Moon,
    tag: 'Shariah-Compliant',
    title: 'Takaful',
    desc: 'Shariah-compliant protection under our SECP-authorized Window Takaful — built on mutual cooperation.',
    points: ['Shariah-compliant', 'Participant contributions', 'Ethical & interest-free'],
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&q=75&auto=format&fit=crop',
  },
]

export default function JourneyGate() {
  const { mode, setMode } = useJourney()
  const [hovered, setHovered] = useState<JourneyMode | null>(null)

  const flexFor = (m: JourneyMode) => {
    if (!hovered) return 1
    return hovered === m ? 1.45 : 0.7
  }

  return (
    <section className="relative flex flex-col md:flex-row h-screen min-h-[640px] w-full overflow-hidden">
      {SIDES.map((side) => {
        const { icon: Icon } = side
        const isTakaful = side.mode === 'takaful'
        const selected = mode === side.mode

        return (
          <button
            key={side.mode}
            onMouseEnter={() => setHovered(side.mode)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setMode(side.mode)}
            style={{ flexGrow: flexFor(side.mode) }}
            className="group relative flex-1 min-h-[50vh] md:min-h-0 overflow-hidden transition-[flex-grow] duration-500 ease-out text-left focus:outline-none"
          >
            {/* Background image */}
            <img
              src={side.img}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[1200ms] group-hover:scale-110"
              loading="eager"
            />

            {/* Brand color overlay */}
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                isTakaful
                  ? 'bg-gradient-to-br from-[#063d33]/95 via-[#0B5D4E]/88 to-[#0B5D4E]/78'
                  : 'bg-gradient-to-br from-navy-dark/95 via-navy/88 to-navy/78'
              }`}
            />
            {/* Subtle darken on the non-hovered side */}
            <div
              className={`absolute inset-0 bg-black/30 transition-opacity duration-500 ${
                hovered && hovered !== side.mode ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Geometric accent lines */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none" viewBox="0 0 400 800" fill="none" preserveAspectRatio="xMidYMid slice">
              <circle cx="200" cy="400" r="150" stroke="#D6A65A" strokeWidth="0.7" />
              <circle cx="200" cy="400" r="250" stroke="#D6A65A" strokeWidth="0.5" />
              <line x1="200" y1="0" x2="200" y2="800" stroke="#D6A65A" strokeWidth="0.5" />
            </svg>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-start px-8 sm:px-12 lg:px-16 py-24 max-w-xl mx-auto md:mx-0 md:ml-auto md:mr-auto">
              {/* Selected badge */}
              {selected && (
                <span className="absolute top-24 right-8 sm:right-12 inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-[10px] font-bold tracking-wide uppercase px-3 py-1.5 rounded-full">
                  <Check size={12} className="text-gold" /> Your Selection
                </span>
              )}

              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center mb-6">
                <Icon size={26} className="text-gold" />
              </div>

              <div className="flex items-center gap-2.5 mb-3">
                <div className="h-px w-6 bg-gold/70" />
                <span className="text-gold text-[11px] font-bold tracking-[0.3em] uppercase">{side.tag}</span>
              </div>

              <h2 className="font-display font-black text-white uppercase leading-[0.95] tracking-tight mb-4"
                  style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)' }}>
                {side.title}
              </h2>

              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 max-w-sm">
                {side.desc}
              </p>

              <ul className="flex flex-col gap-2.5 mb-9">
                {side.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2.5 text-white/85 text-sm">
                    <Check size={16} className="text-gold shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>

              <span className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 group-hover:gap-3 group-hover:bg-gold-light">
                Explore {side.title}
                <ArrowRight size={16} />
              </span>
            </div>
          </button>
        )
      })}

      {/* Center divider (desktop) */}
      <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gold/30 z-20 pointer-events-none" />

      {/* Top overline */}
      <div className="absolute top-20 lg:top-24 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none px-4">
        <p className="text-white/90 text-[11px] font-bold tracking-[0.35em] uppercase drop-shadow">
          Choose Your Journey
        </p>
      </div>

      {/* Bottom brand line */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none px-4">
        <p className="text-white/50 text-[10px] font-semibold tracking-[0.25em] uppercase">
          Shaheen Foundation — Pakistan Air Force · Since 1996
        </p>
      </div>
    </section>
  )
}
