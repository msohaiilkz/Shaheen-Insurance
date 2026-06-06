import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { gsap } from '../../lib/gsap'

const PLANS = [
  { title: 'Individual & Family', desc: 'Personal health cover with optional maternity and outpatient wallet.' },
  { title: 'Group Health',        desc: 'Corporate plans for your entire workforce — scalable and cost-effective.' },
  { title: 'Takaful Health',      desc: 'Shariah-compliant health coverage under SECP-authorized Window Takaful.' },
  { title: 'Panel Hospitals',     desc: '50+ panel hospitals across Pakistan for cashless treatment.' },
]

export default function HealthBand() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      })

      gsap.from(rightRef.current, {
        opacity: 0,
        x: 50,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      })

      // Plan items stagger
      const items = leftRef.current?.querySelectorAll('.plan-item')
      if (items) {
        gsap.from(items, {
          opacity: 0,
          x: -20,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: leftRef.current,
            start: 'top 70%',
            once: true,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[#f8f7f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Text */}
          <div ref={leftRef}>
            <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Health Care</p>
            <h2 className="font-display font-black text-navy text-4xl md:text-5xl lg:text-6xl uppercase leading-tight tracking-tight mb-6">
              Your Health,<br />
              <span className="text-gold">Our Priority</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
              Comprehensive health insurance solutions for individuals, families, and corporations — Shariah-compliant and backed by a nationwide panel hospital network.
            </p>

            {/* Feature bullets */}
            <div className="flex flex-col gap-3 mb-8">
              {['SECP Licensed Window Takaful Operator', 'Inpatient, outpatient & maternity cover', 'Cashless treatment at 50+ hospitals'].map(pt => (
                <div key={pt} className="plan-item flex items-center gap-2.5">
                  <CheckCircle2 size={15} className="text-gold shrink-0" />
                  <span className="text-gray-600 text-sm">{pt}</span>
                </div>
              ))}
            </div>

            {/* Plan grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {PLANS.map((plan, i) => (
                <div
                  key={plan.title}
                  className={`plan-item p-4 rounded-xl border transition-colors duration-200 ${
                    i === 0
                      ? 'bg-navy border-navy text-white'
                      : 'bg-white border-gray-100 hover:border-gold/30'
                  }`}
                >
                  <h4 className={`font-bold text-xs uppercase tracking-wide mb-1 ${i === 0 ? 'text-gold' : 'text-navy'}`}>
                    {plan.title}
                  </h4>
                  <p className={`text-[11px] leading-relaxed ${i === 0 ? 'text-white/60' : 'text-gray-500'}`}>
                    {plan.desc}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/health-care"
              className="inline-flex items-center gap-2 bg-navy text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-navy/90 transition-colors"
            >
              View Health Plans <ArrowRight size={15} />
            </Link>
          </div>

          {/* RIGHT — Image */}
          <div ref={rightRef} className="relative">
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl shadow-navy/15">
              <img
                src="https://images.unsplash.com/photo-1648964388258-e71b58683ed0?w=900&q=80&auto=format&fit=crop"
                alt="Healthcare"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />

              {/* Floating stat card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gold">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="currentColor" />
                      <path d="M9 8h2v8H9zM13 8h2v8h-2z" fill="none" />
                      <path d="M12 4c-4.42 0-8 3.58-8 8 0 1.85.63 3.55 1.69 4.9L17.9 5.69C16.55 4.63 14.85 4 12 4zm0 16c4.42 0 8-3.58 8-8 0-1.85-.63-3.55-1.69-4.9L6.1 18.31C7.45 19.37 9.15 20 12 20z" fill="none" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-navy font-black text-xl leading-none">50+</p>
                    <p className="text-gray-500 text-xs mt-0.5">Panel hospitals across Pakistan</p>
                  </div>
                  <div className="ml-auto">
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(s => (
                        <svg key={s} width="10" height="10" viewBox="0 0 24 24" fill="#D6A65A">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-[10px] text-gray-400 mt-0.5">SECP Licensed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative offset card */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1710074213374-e68503a1b795?w=300&q=80&auto=format&fit=crop"
                alt="Medical care"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* SVG decorative rings */}
            <svg className="absolute -bottom-8 -left-8 opacity-10 pointer-events-none" width="120" height="120" viewBox="0 0 120 120" fill="none">
              <circle cx="60" cy="60" r="55" stroke="#D6A65A" strokeWidth="1.5" strokeDasharray="8 4" />
              <circle cx="60" cy="60" r="40" stroke="#D6A65A" strokeWidth="1" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  )
}
