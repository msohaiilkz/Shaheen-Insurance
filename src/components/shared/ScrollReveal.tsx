import { useEffect, useRef, ReactNode } from 'react'
import { gsap } from '../../lib/gsap'

interface RevealProps {
  children: ReactNode
  delay?: number
  from?: 'bottom' | 'left' | 'right' | 'scale'
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export default function ScrollReveal({ children, delay = 0, from = 'bottom', className, as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo(el,
        {
          opacity: 0,
          y: from === 'bottom' ? 30 : 0,
          x: from === 'left' ? -30 : from === 'right' ? 30 : 0,
          scale: from === 'scale' ? 0.96 : 1,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: 0.7,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 96%',
            once: true,
          },
        }
      )
    }, el)
    return () => ctx.revert()
  }, [delay, from])

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  )
}

interface StaggerProps {
  children: ReactNode
  className?: string
  stagger?: number
  startY?: number
}

export function StaggerReveal({ children, className, stagger = 0.07, startY = 24 }: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      const items = Array.from(el.children)
      if (items.length > 0) {
        gsap.fromTo(items,
          { opacity: 0, y: startY },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 96%',
              once: true,
            },
          }
        )
      }
    }, el)
    return () => ctx.revert()
  }, [stagger, startY])

  return <div ref={ref} className={className}>{children}</div>
}
