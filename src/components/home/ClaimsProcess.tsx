import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FileText, Upload, Search, ClipboardCheck, Banknote, ArrowRight } from 'lucide-react'
import { gsap } from '../../lib/gsap'

const STEPS = [
  { icon: FileText,       num: '01', title: 'Report',     desc: 'Submit your claim intimation online or at any branch within 24 hours of the incident.' },
  { icon: Upload,         num: '02', title: 'Documents',  desc: 'Upload supporting documents — photos, police reports, medical bills — through our portal.' },
  { icon: Search,         num: '03', title: 'Survey',     desc: 'A licensed surveyor is assigned and visits within 2 business days to assess the loss.' },
  { icon: ClipboardCheck, num: '04', title: 'Assessment', desc: 'Our claims team reviews the survey report and verifies coverage under your policy terms.' },
  { icon: Banknote,       num: '05', title: 'Settlement', desc: 'Approved claims are settled within 5 working days via direct bank transfer.' },
]

export default function ClaimsProcess() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          once: true,
        },
      })

      // Connecting line draw
      if (lineRef.current) {
        gsap.from(lineRef.current, {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 1.2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: lineRef.current,
            start: 'top 75%',
            once: true,
          },
        })
      }

      // Steps stagger in
      const steps = sectionRef.current?.querySelectorAll('.claim-step')
      if (steps) {
        gsap.from(steps, {
          opacity: 0,
          y: 32,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: steps[0],
            start: 'top 80%',
            once: true,
          },
        })
      }

      // Bottom note
      const note = sectionRef.current?.querySelector('.claims-note')
      if (note) {
        gsap.from(note, {
          opacity: 0,
          y: 16,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: note,
            start: 'top 90%',
            once: true,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white relative overflow-hidden">

      {/* SVG background squiggle decoration */}
      <svg className="absolute right-0 top-0 h-full opacity-[0.025] pointer-events-none" viewBox="0 0 300 600" fill="none" preserveAspectRatio="xMidYMid slice">
        <path d="M300 0 Q200 150 300 300 Q400 450 300 600" stroke="#0D1440" strokeWidth="120" fill="none" />
      </svg>

      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Claims</p>
            <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight">
              How to File<br />a Claim
            </h2>
          </div>
          <Link
            to="/claims/intimation"
            className="inline-flex items-center gap-2 bg-navy text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-navy/90 transition-colors self-start md:self-auto"
          >
            Start a Claim <ArrowRight size={15} />
          </Link>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Animated connecting line (desktop) */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute h-px bg-gradient-to-r from-gold/60 via-gold/30 to-gold/10 z-0"
            style={{ top: '1.75rem', left: '1.25rem', right: '1.25rem' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {STEPS.map(({ icon: Icon, num, title, desc }, i) => (
              <div key={num} className="claim-step">
                {/* Mobile: horizontal layout */}
                <div className="flex lg:flex-col items-start gap-4 lg:gap-0">

                  {/* Step circle */}
                  <div className="shrink-0 relative">
                    <div className="w-14 h-14 lg:w-10 lg:h-10 rounded-full bg-white border-2 border-gold/40 flex items-center justify-center mb-0 lg:mb-5 shadow-sm shadow-gold/10">
                      <Icon size={18} className="text-navy lg:hidden" />
                      <span className="hidden lg:block text-[11px] font-black text-navy/60">{num}</span>
                    </div>
                  </div>

                  <div className="flex-1 pt-1 lg:pt-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-gold text-[10px] font-black tracking-widest uppercase">{num}</span>
                      <h3 className="font-display font-bold text-navy text-base uppercase">{title}</h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>

                    {/* Step progress dot (desktop) */}
                    <div className="hidden lg:flex items-center gap-2 mt-4">
                      <div
                        className="w-1.5 h-1.5 rounded-full bg-gold/60"
                        style={{ opacity: 1 - i * 0.15 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="claims-note mt-10 pt-8 border-t border-navy/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Mini clock SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold shrink-0">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <p className="text-gray-400 text-sm">
              Average settlement time: <span className="text-navy font-semibold">5 working days</span>
            </p>
          </div>
          <Link to="/claims/procedure" className="text-navy text-sm font-semibold hover:text-gold transition-colors flex items-center gap-1.5">
            Full Claims Procedure <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  )
}
