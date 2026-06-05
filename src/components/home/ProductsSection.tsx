import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { gsap } from '../../lib/gsap'

const PRODUCTS = [
  {
    title: 'Motor',
    desc: 'Comprehensive & third-party cover for cars, bikes, and commercial vehicles.',
    path: '/products/motor',
    img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=900&q=75&auto=format&fit=crop',
    featured: true,
  },
  {
    title: 'Travel',
    desc: 'Up to USD 50,000 medical cover for trips up to 92 days, worldwide.',
    path: '/products/travel',
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=700&q=75&auto=format&fit=crop',
  },
  {
    title: 'Health',
    desc: 'Takaful health, group & individual plans with panel hospital access.',
    path: '/health-care',
    img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=700&q=75&auto=format&fit=crop',
  },
  {
    title: 'Fire',
    desc: 'Property protection against fire, explosion, earthquake and allied perils.',
    path: '/products/fire',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=75&auto=format&fit=crop',
  },
  {
    title: 'Marine',
    desc: 'Import/export cargo and inland goods-in-transit coverage.',
    path: '/products/marine',
    img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=700&q=75&auto=format&fit=crop',
  },
  {
    title: 'Engineering',
    desc: 'CAR, EAR, Machinery Breakdown and MLOP for industrial projects.',
    path: '/products/engineering',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=75&auto=format&fit=crop',
  },
  {
    title: 'Miscellaneous',
    desc: 'Cash transit, personal accident, workmen compensation and more.',
    path: '/products/miscellaneous',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=75&auto=format&fit=crop',
  },
  {
    title: 'Bond',
    desc: 'Bid, performance, and mobilization advance bonds for contractors.',
    path: '/products/bond',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=75&auto=format&fit=crop',
  },
]

export default function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          once: true,
        },
      })

      // Cards stagger
      const cards = cardsRef.current?.querySelectorAll('.prod-card')
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 50,
          duration: 0.7,
          stagger: 0.07,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
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

        {/* Header */}
        <div ref={headingRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Our Coverage</p>
            <h2 className="font-display font-black text-navy text-4xl md:text-5xl lg:text-6xl uppercase leading-tight tracking-tight">
              Insurance<br />Products
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-navy border-b-2 border-navy pb-0.5 text-sm font-bold hover:text-gold hover:border-gold transition-colors duration-200 self-start md:self-auto"
          >
            View All Products <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* Magazine Grid — 4×2 balanced */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {PRODUCTS.map((p, i) => (
            <Link
              key={p.title}
              to={p.path}
              className="prod-card group relative overflow-hidden rounded-2xl min-h-[220px] lg:min-h-[260px] block"
            >
              <img
                src={p.img}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5" />
              <div className="absolute inset-0 bg-navy/20" />

              {/* Featured badge on Motor */}
              {i === 0 && (
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-navy text-[9px] font-black tracking-[0.2em] uppercase px-2.5 py-1 rounded-full">
                    Featured
                  </span>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display font-bold text-white text-lg uppercase tracking-wide mb-1">
                  {p.title}
                </h3>
                <p className="text-white/0 group-hover:text-white/70 text-xs leading-relaxed transition-all duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                  {p.desc}
                </p>
                <span className="inline-flex items-center gap-1 text-gold/0 group-hover:text-gold text-[10px] font-bold uppercase tracking-wider transition-all duration-300 mt-1">
                  Learn more <ArrowUpRight size={11} />
                </span>
              </div>

              <div className="absolute inset-0 rounded-2xl border-2 border-gold/0 group-hover:border-gold/50 transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* SVG decorative divider */}
        <div className="flex items-center gap-4 mt-16 opacity-30">
          <div className="flex-1 h-px bg-navy/20" />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold">
            <path d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z" fill="currentColor" />
          </svg>
          <div className="flex-1 h-px bg-navy/20" />
        </div>
      </div>
    </section>
  )
}
