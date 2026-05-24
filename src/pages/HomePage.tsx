import Hero from '../components/home/Hero'
import StatsSection from '../components/home/StatsSection'
import ProductsSection from '../components/home/ProductsSection'
import TakafulSection from '../components/home/TakafulSection'
import NewsSection from '../components/home/NewsSection'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsSection />
      <ProductsSection />
      <TakafulSection />
      <NewsSection />
    </main>
  )
}
