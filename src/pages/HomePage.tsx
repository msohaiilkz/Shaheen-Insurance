import PageSEO from '../components/shared/PageSEO'
import Hero from '../components/home/Hero'
import StatsSection from '../components/home/StatsSection'
import ProductsSection from '../components/home/ProductsSection'
import TakafulSection from '../components/home/TakafulSection'
import WhyShaheenSection from '../components/home/WhyShaheenSection'
import ScrollPhoneSection from '../components/home/ScrollPhoneSection'
import LaptopShowcaseSection from '../components/home/LaptopShowcaseSection'
import NewsSection from '../components/home/NewsSection'

export default function HomePage() {
  return (
    <main>
      <PageSEO
        title="Home"
        description="Shaheen Insurance Company Ltd — Pakistan's PACRA A++ rated general insurance company. Motor, Fire, Marine, Health, Travel, Engineering & Takaful insurance since 1996. Sponsored by Shaheen Foundation (PAF)."
        keywords="insurance Pakistan, general insurance, motor insurance, health insurance, fire insurance, Shaheen Insurance, SICL, SHNI, Takaful"
        path="/"
        includeOrg
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Shaheen Insurance',
          url: 'https://www.shaheeninsurance.com',
        }}
      />
      <Hero />
      <StatsSection />
      <ProductsSection />
      <LaptopShowcaseSection />
      <TakafulSection />
      <WhyShaheenSection />
      <ScrollPhoneSection />
      <NewsSection />
    </main>
  )
}
