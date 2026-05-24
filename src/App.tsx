import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import BackToTop from './components/layout/BackToTop'

// Lazy load all pages
const HomePage           = lazy(() => import('./pages/HomePage'))
const WhoWeArePage       = lazy(() => import('./pages/about/WhoWeArePage'))
const VisionPage         = lazy(() => import('./pages/about/VisionPage'))
const CoreValuesPage     = lazy(() => import('./pages/about/CoreValuesPage'))
const CorporateProfilePage = lazy(() => import('./pages/about/CorporateProfilePage'))
const ManagementPage     = lazy(() => import('./pages/about/ManagementPage'))
const CodeOfConductPage  = lazy(() => import('./pages/about/CodeOfConductPage'))
const PafFoundersPage    = lazy(() => import('./pages/about/PafFoundersPage'))

const MotorPage          = lazy(() => import('./pages/products/MotorPage'))
const FirePage           = lazy(() => import('./pages/products/FirePage'))
const MarinePage         = lazy(() => import('./pages/products/MarinePage'))
const TravelPage         = lazy(() => import('./pages/products/TravelPage'))
const EngineeringPage    = lazy(() => import('./pages/products/EngineeringPage'))
const MiscellaneousPage  = lazy(() => import('./pages/products/MiscellaneousPage'))
const BondPage           = lazy(() => import('./pages/products/BondPage'))
const AviationPage       = lazy(() => import('./pages/products/AviationPage'))

const HealthCarePage     = lazy(() => import('./pages/health/HealthCarePage'))
const TakafulHealthPage  = lazy(() => import('./pages/health/TakafulHealthPage'))
const IndividualHealthPage = lazy(() => import('./pages/health/IndividualHealthPage'))
const GroupHealthPage    = lazy(() => import('./pages/health/GroupHealthPage'))
const PanelHospitalsPage = lazy(() => import('./pages/health/PanelHospitalsPage'))

const ClaimsPage         = lazy(() => import('./pages/claims/ClaimsPage'))
const GeneralProcedurePage = lazy(() => import('./pages/claims/GeneralProcedurePage'))
const ClaimFormsPage     = lazy(() => import('./pages/claims/ClaimFormsPage'))
const IntimationFormPage = lazy(() => import('./pages/claims/IntimationFormPage'))

const BranchNetworkPage  = lazy(() => import('./pages/BranchNetworkPage'))

const InvestorPage       = lazy(() => import('./pages/investor/InvestorPage'))
const FinancialReportsPage = lazy(() => import('./pages/investor/FinancialReportsPage'))
const ElectionPage       = lazy(() => import('./pages/investor/ElectionPage'))

const MediaCenterPage    = lazy(() => import('./pages/MediaCenterPage'))
const DownloadsPage      = lazy(() => import('./pages/DownloadsPage'))
const CareersPage        = lazy(() => import('./pages/CareersPage'))
const FeedbackPage       = lazy(() => import('./pages/FeedbackPage'))
const ContactPage        = lazy(() => import('./pages/ContactPage'))

function LoadingSpinner() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-navy/10 border-t-gold animate-spin" />
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    </div>
  )
}

function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-20 h-20 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
          <span className="font-display font-bold text-gold text-4xl">S</span>
        </div>
        <h1 className="font-display text-4xl font-bold text-navy mb-3">Page Not Found</h1>
        <p className="text-gray-400 mb-8">The page you are looking for does not exist or has been moved.</p>
        <a href="/" className="btn-primary">Back to Home</a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <BackToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Home */}
              <Route path="/" element={<HomePage />} />

              {/* About Us */}
              <Route path="/about" element={<WhoWeArePage />} />
              <Route path="/about/who-we-are" element={<WhoWeArePage />} />
              <Route path="/about/vision" element={<VisionPage />} />
              <Route path="/about/core-values" element={<CoreValuesPage />} />
              <Route path="/about/corporate-profile" element={<CorporateProfilePage />} />
              <Route path="/about/management" element={<ManagementPage />} />
              <Route path="/about/code-of-conduct" element={<CodeOfConductPage />} />
              <Route path="/about/paf-founders" element={<PafFoundersPage />} />

              {/* Products */}
              <Route path="/products" element={<MotorPage />} />
              <Route path="/products/motor" element={<MotorPage />} />
              <Route path="/products/fire" element={<FirePage />} />
              <Route path="/products/marine" element={<MarinePage />} />
              <Route path="/products/travel" element={<TravelPage />} />
              <Route path="/products/engineering" element={<EngineeringPage />} />
              <Route path="/products/miscellaneous" element={<MiscellaneousPage />} />
              <Route path="/products/bond" element={<BondPage />} />
              <Route path="/products/aviation" element={<AviationPage />} />

              {/* Health Care */}
              <Route path="/health-care" element={<HealthCarePage />} />
              <Route path="/health-care/takaful" element={<TakafulHealthPage />} />
              <Route path="/health-care/individual" element={<IndividualHealthPage />} />
              <Route path="/health-care/group" element={<GroupHealthPage />} />
              <Route path="/health-care/panel-hospitals" element={<PanelHospitalsPage />} />

              {/* Claims */}
              <Route path="/claims" element={<ClaimsPage />} />
              <Route path="/claims/procedure" element={<GeneralProcedurePage />} />
              <Route path="/claims/forms" element={<ClaimFormsPage />} />
              <Route path="/claims/intimation" element={<IntimationFormPage />} />

              {/* Branch Network */}
              <Route path="/branches" element={<BranchNetworkPage />} />

              {/* Investor */}
              <Route path="/investor" element={<InvestorPage />} />
              <Route path="/investor/reports" element={<FinancialReportsPage />} />
              <Route path="/investor/election" element={<ElectionPage />} />

              {/* Other */}
              <Route path="/media" element={<MediaCenterPage />} />
              <Route path="/downloads" element={<DownloadsPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/feedback-complaints" element={<FeedbackPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* 404 */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
