import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Shield } from 'lucide-react'

export interface ShowcaseStep {
  id: string
  step: string        // e.g. "STEP 01"
  title: string
  desc: string
  screen: React.ReactNode  // what shows inside the laptop
}

interface Props {
  steps: ShowcaseStep[]
  heading?: string
  subheading?: string
}

export default function StepScrollShowcase({ steps, heading, subheading }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    stepRefs.current.forEach((el, i) => {
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIndex(i) },
        { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [steps.length])

  return (
    <div ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Header */}
        {(heading || subheading) && (
          <div className="mb-14 text-center">
            <div className="w-10 h-[3px] bg-gold mx-auto mb-4" />
            {heading && (
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy uppercase tracking-wide mb-3">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="text-navy/55 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">{subheading}</p>
            )}
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* LEFT — Sticky laptop */}
          <div className="w-full lg:w-[480px] shrink-0 lg:sticky lg:top-24">
            {/* Laptop */}
            <div className="relative">
              {/* Glow */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={steps[activeIndex]?.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 rounded-3xl blur-2xl -z-10 scale-90"
                  style={{ background: 'radial-gradient(circle, rgba(40,54,143,0.15) 0%, transparent 70%)' }}
                />
              </AnimatePresence>

              {/* Screen bezel */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, #1a2470, #0d1440)',
                  padding: '10px 10px 0',
                  boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 24px 64px rgba(0,0,0,0.3)',
                }}
              >
                {/* Browser chrome */}
                <div className="bg-[#111d55] rounded-t-xl overflow-hidden">
                  {/* Title bar */}
                  <div className="flex items-center gap-2 px-3 py-2.5 border-b border-white/6">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                    </div>
                    {/* Address bar */}
                    <div className="flex-1 mx-3 flex items-center gap-1.5 bg-white/6 rounded-md px-2.5 py-1">
                      <Shield size={9} className="text-gold shrink-0" />
                      <span className="text-white/40 text-[9px] font-mono">shaheeninsurance.com</span>
                    </div>
                  </div>

                  {/* Step pill inside browser */}
                  <div className="px-3 pt-2 pb-1 border-b border-white/5 flex items-center gap-2">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={steps[activeIndex]?.step}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-1.5"
                      >
                        <span className="text-gold text-[9px] font-bold uppercase tracking-widest">{steps[activeIndex]?.step}</span>
                        <span className="text-white/30 text-[9px]">·</span>
                        <span className="text-white/50 text-[9px] font-medium">{steps[activeIndex]?.title}</span>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Screen content */}
                  <div className="h-[280px] md:h-[320px] overflow-hidden bg-[#0f1a50]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={steps[activeIndex]?.id}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}
                        className="h-full p-4 overflow-hidden"
                      >
                        {steps[activeIndex]?.screen}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Laptop base */}
              <div className="h-3 rounded-b-xl mx-2" style={{ background: 'linear-gradient(180deg,#1a2470,#0d1440)' }} />
              <div className="h-3 rounded-b-2xl mx-8" style={{ background: 'linear-gradient(180deg,#0d1440,#080e28)', boxShadow: '0 8px 24px rgba(0,0,0,0.35)' }} />

              {/* Progress dots */}
              <div className="flex justify-center gap-2 mt-5">
                {steps.map((s, i) => (
                  <motion.div
                    key={s.id}
                    animate={{ width: i === activeIndex ? 24 : 6, opacity: i === activeIndex ? 1 : 0.3 }}
                    transition={{ duration: 0.3 }}
                    className="h-1.5 rounded-full bg-navy"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Scrollable steps */}
          <div className="flex-1 space-y-6">
            {steps.map((s, i) => (
              <div
                key={s.id}
                ref={el => { stepRefs.current[i] = el }}
              >
                <motion.div
                  animate={{
                    opacity: i === activeIndex ? 1 : 0.45,
                    x: i === activeIndex ? 0 : -4,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`rounded-2xl p-6 border-2 transition-all duration-300 ${
                    i === activeIndex
                      ? 'border-navy/30 bg-white shadow-[0_4px_32px_rgba(40,54,143,0.1)]'
                      : 'border-navy/8 bg-surface'
                  }`}
                >
                  {/* Step label */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className={`flex items-center justify-center w-7 h-7 rounded-full text-[11px] font-bold transition-colors duration-300 ${
                      i === activeIndex ? 'bg-navy text-gold' : 'bg-navy/10 text-navy/40'
                    }`}>
                      {i < activeIndex ? <CheckCircle2 size={14} className="text-gold" /> : String(i + 1).padStart(2, '0')}
                    </div>
                    <span className={`text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 ${
                      i === activeIndex ? 'text-navy' : 'text-navy/35'
                    }`}>
                      {s.step}
                    </span>
                    {i === activeIndex && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto w-2 h-2 rounded-full bg-gold"
                        style={{ boxShadow: '0 0 8px rgba(214,166,90,0.8)' }}
                      />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className={`font-display font-bold text-2xl md:text-3xl leading-tight mb-2 transition-colors duration-300 ${
                    i === activeIndex ? 'text-navy' : 'text-navy/40'
                  }`}>
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm md:text-base leading-relaxed transition-colors duration-300 ${
                    i === activeIndex ? 'text-navy/60' : 'text-navy/30'
                  }`}>
                    {s.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
