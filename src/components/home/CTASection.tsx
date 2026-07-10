import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { gsap } from '../../lib/gsap'

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.97,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      })

      // Stagger the buttons
      const btns = contentRef.current?.querySelectorAll('.cta-btn')
      if (btns) {
        gsap.from(btns, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-light-cream relative overflow-hidden">

      {/* SVG grid background */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="cta-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#28368F" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cta-grid)" />
      </svg>

      {/* Gold glow top right */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      {/* Gold glow bottom left */}
      <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-gold/6 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative SVG shield */}
      <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.025] pointer-events-none" width="400" height="400" viewBox="0 0 24 24" fill="#D6A65A">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
      </svg>

      <div className="relative z-10 max-w-3xl mx-auto px-5 text-center" ref={contentRef}>
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-gold/60" />
          <span className="text-gold-dark text-[11px] font-bold tracking-[0.3em] uppercase">Get Protected Today</span>
          <div className="h-px w-8 bg-gold/60" />
        </div>

        <h2 className="font-display font-black text-navy text-4xl md:text-5xl lg:text-6xl uppercase leading-tight tracking-tight mb-6">
          Ready to Get<br />
          <span className="text-gold-dark">Covered?</span>
        </h2>

        <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-lg mx-auto">
          Talk to our team today. Get a quote, learn about our products, or file a claim — we're here to help.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/contact"
            className="cta-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all duration-200"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
          <a
            href="tel:111765111"
            className="cta-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-white/80 border border-navy/15 text-navy font-semibold px-8 py-4 rounded-xl text-sm transition-all duration-200 shadow-card"
          >
            <Phone size={15} /> Call 111-765-111
          </a>
        </div>

        {/* Trust badge row */}
        <div className="mt-12 flex items-center justify-center gap-6 opacity-60">
          <div className="h-px w-12 bg-navy/20" />
          <span className="text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase">SECP Regulated</span>
          <div className="w-1 h-1 rounded-full bg-gold-dark/60" />
          <span className="text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase">PACRA A++</span>
          <div className="w-1 h-1 rounded-full bg-gold-dark/60" />
          <span className="text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase">PAF Sponsored</span>
          <div className="h-px w-12 bg-navy/20" />
        </div>
      </div>
    </section>
  )
}
