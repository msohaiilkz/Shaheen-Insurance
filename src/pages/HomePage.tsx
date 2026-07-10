import PageSEO from '../components/shared/PageSEO'
import JourneyGate from '../components/home/JourneyGate'
import Hero from '../components/home/Hero'
import ProductsSection from '../components/home/ProductsSection'
import StatsSection from '../components/home/StatsSection'
import ClaimsProcess from '../components/home/ClaimsProcess'
import PhoneMockupSection from '../components/home/PhoneMockupSection'
import HealthBand from '../components/home/HealthBand'
import CTASection from '../components/home/CTASection'
import { useJourney } from '../context/JourneyContext'

export default function HomePage() {
  const { mode } = useJourney()

  return (
    <main>
      <PageSEO
        title="Home"
        description="Shaheen Insurance Company Ltd — Pakistan's PACRA A++ rated general insurance company. Motor, Fire, Marine, Health, Travel, Engineering & Takaful since 1996. Sponsored by Shaheen Foundation (PAF)."
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

      {!mode ? (
        /* Two clear options — the full-screen split entry gate */
        <JourneyGate />
      ) : (
        /* The selected customer journey */
        <div id="journey-content">
          <Hero />
          <ProductsSection />
          <StatsSection />
          <ClaimsProcess />
          <PhoneMockupSection />
          <HealthBand />
          <CTASection />
        </div>
      )}
    </main>
  )
}
