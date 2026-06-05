import { useState } from 'react'
import { FileText, Download, ChevronDown, Mail } from 'lucide-react'
import InnerPageHero from '../../components/layout/InnerPageHero'
import PageSEO from '../../components/shared/PageSEO'
import ScrollReveal from '../../components/shared/ScrollReveal'

type Report = { label: string; period?: string; url: string }
type YearGroup = { year: string | number; reports: Report[] }

const REPORTS: YearGroup[] = [
  {
    year: 2026,
    reports: [
      { label: 'First Quarter', period: 'Ended 31st March 2026', url: 'https://shaheeninsurance.com/wp-content/uploads/Annual report/1st Quarter Annual Financial Report Jan - March 2026.pdf' },
    ],
  },
  {
    year: 2025,
    reports: [
      { label: 'First Quarter', period: 'Ended 31st March 2025', url: 'https://shaheeninsurance.com/wp-content/uploads/Annual report/Shaheen Ins. Quarterly Report March 2025.pdf' },
      { label: 'Half Yearly', period: 'Ended 30th June 2025', url: 'https://shaheeninsurance.com/wp-content/uploads/Annual report/Shaheen Ins. Half Yearly June 2025 (29-08-2025).pdf' },
      { label: 'Nine Months', period: 'Ended 30th September 2025', url: 'https://shaheeninsurance.com/wp-content/uploads/Annual report/Shaheen Ins. QUARTERLY SEPT-2025 (30-10-2025).pdf' },
      { label: 'Annual Report', period: 'Ended 31st December 2025', url: 'http://www.shaheeninsurance.com/wp-content/uploads/Annual report/SICL Annual Report 2025.pdf' },
    ],
  },
  {
    year: 2024,
    reports: [
      { label: 'First Quarter (Unaudited)', period: 'Ended 31st March 2024', url: 'https://shaheeninsurance.com/wp-content/uploads/Annual report/SICL_First_Quarter_Report_2024.pdf' },
      { label: 'Half Yearly (Unaudited)', period: 'Ended 30th June 2024', url: 'http://shaheeninsurance.com/pdf/Half_Yearly_Report_2022.pdf' },
      { label: 'Third Quarter (Unaudited)', period: 'Ended 30th September 2024', url: 'http://www.shaheeninsurance.com/wp-content/uploads/2024/10/NINE-MONTHS-REPORT-2024.pdf' },
      { label: 'Annual Report', period: 'Ended 31st December 2024', url: 'http://www.shaheeninsurance.com/wp-content/uploads/Annual report/SICL_Annual_Report_2024.pdf' },
    ],
  },
  {
    year: 2023,
    reports: [
      { label: 'First Quarter (Unaudited)', period: 'Ended 31st March 2023', url: 'https://shaheeninsurance.com/wp-content/uploads/Annual report/Quarter Report March 2023.pdf' },
      { label: 'Half Yearly (Unaudited)', period: 'Ended 30th June 2023', url: 'https://www.shaheeninsurance.com/pdf/SICL_Half_Yearly_Report_2023.pdf' },
      { label: 'Third Quarter (Unaudited)', period: 'Ended 30th September 2023', url: 'https://www.shaheeninsurance.com/pdf/SICL_Third_Quarter_Report_2023.pdf' },
      { label: 'Annual Report', period: 'Ended 31st December 2023', url: 'https://shaheeninsurance.com/wp-content/uploads/Annual report/SICL_Annual_Report_2023.pdf' },
    ],
  },
  {
    year: 2022,
    reports: [
      { label: 'First Quarter (Unaudited)', period: 'Ended 31st March 2022', url: 'http://shaheeninsurance.com/pdf/First_Quarter_Report_2022.pdf' },
      { label: 'Half Yearly (Unaudited)', period: 'Ended 30th June 2022', url: 'http://shaheeninsurance.com/pdf/Half_Yearly_Report_2022.pdf' },
      { label: 'Third Quarter (Unaudited)', period: 'Ended 30th September 2022', url: 'http://shaheeninsurance.com/pdf/ThirdQuarterReport2022(Unaudited)Report.pdf' },
      { label: 'Annual Report', period: 'Ended 31st December 2022', url: 'http://shaheeninsurance.com/wp-content/uploads/Annual report/Shaheen Insurance 2022 Annual Report.pdf' },
    ],
  },
  {
    year: 2021,
    reports: [
      { label: 'First Quarter (Unaudited)', period: 'Ended 31st March 2021', url: 'http://shaheeninsurance.com/pdf/1st Quarter Report 2021.pdf' },
      { label: 'Half Yearly (Unaudited)', period: 'Ended 30th June 2021', url: 'http://shaheeninsurance.com/pdf/Financials for the period ended June 30, 2021.pdf' },
      { label: 'Third Quarter (Unaudited)', period: 'Ended 30th September 2021', url: 'http://shaheeninsurance.com/pdf/3rd Quarterly Report 2021.pdf' },
      { label: 'Annual Report', period: 'Ended 31st December 2021', url: 'http://shaheeninsurance.com/pdf/SICL_Annual_Report_2021.pdf' },
    ],
  },
  {
    year: 2020,
    reports: [
      { label: 'First Quarter (Unaudited)', period: 'Ended 31st March 2020', url: 'http://shaheeninsurance.com/pdf/1stQuarterReport2020.pdf' },
      { label: 'Half Yearly (Unaudited)', period: 'Ended 30th June 2020', url: 'http://shaheeninsurance.com/pdf/HalfYearlyReport2020.pdf' },
      { label: 'Third Quarter (Unaudited)', period: 'Ended 30th September 2020', url: 'http://shaheeninsurance.com/pdf/3rdQuarterlyReport2020.pdf' },
      { label: 'Annual Report', period: 'Ended 31st December 2020', url: 'http://shaheeninsurance.com/pdf/Annual Report 2020 Web.pdf' },
    ],
  },
  {
    year: 2019,
    reports: [
      { label: 'First Quarter (Unaudited)', period: 'Ended 31st March 2019', url: 'http://shaheeninsurance.com/pdf/1st_Quarterly_Report_2019.pdf' },
      { label: 'Half Yearly (Unaudited)', period: 'Ended 30th June 2019', url: 'http://shaheeninsurance.com/pdf/HalfYearlyReport2019.pdf' },
      { label: 'Third Quarter (Unaudited)', period: 'Ended 30th September 2019', url: 'http://shaheeninsurance.com/pdf/3rd_Quarter_Report_2019.pdf' },
      { label: 'Annual Report', period: 'Ended 31st December 2019', url: 'http://shaheeninsurance.com/pdf/AnnualReport2019.pdf' },
    ],
  },
  {
    year: 2018,
    reports: [
      { label: 'First Quarter (Unaudited)', period: 'Ended 31st March 2018', url: 'http://shaheeninsurance.com/pdf/FirstQuarterAccounts2018.pdf' },
      { label: 'Half Yearly (Unaudited)', period: 'Ended 30th June 2018', url: 'http://shaheeninsurance.com/pdf/FInancialStatementJune2018.compressed.pdf' },
      { label: 'Third Quarter (Unaudited)', period: 'Ended 30th September 2018', url: 'http://shaheeninsurance.com/pdf/ThirdQuarterAccounts2018.pdf' },
      { label: 'Annual Report', period: 'Ended 31st December 2018', url: 'http://shaheeninsurance.com/pdf/AnnualReport2018ENG.pdf' },
      { label: "Directors' Report (Urdu)", url: 'http://shaheeninsurance.com/pdf/AnnualReport2018Urdu.pdf' },
    ],
  },
  {
    year: 2017,
    reports: [
      { label: 'First Quarter (Unaudited)', period: 'Ended 31st March 2017', url: 'http://shaheeninsurance.com/pdf/1st%20Quarter%20Report%20-%202017.pdf' },
      { label: 'Half Yearly (Unaudited)', period: 'Ended 30th June 2017', url: 'http://shaheeninsurance.com/pdf/Half%20Year%20Accounts%20-%202017.pdf' },
      { label: 'Third Quarter (Unaudited)', period: 'Ended 30th September 2017', url: 'http://shaheeninsurance.com/pdf/Third%20Quarter%20Accounts%20-%202017.pdf' },
      { label: 'Annual Report', period: 'Ended 31st December 2017', url: 'http://shaheeninsurance.com/pdf/AnnualReport2017final.pdf' },
      { label: "Directors' Report (Urdu)", url: 'http://shaheeninsurance.com/pdf/DirectorReport(Urdu).pdf' },
    ],
  },
  {
    year: 2016,
    reports: [
      { label: 'First Quarter (Unaudited)', period: 'Ended 31st March 2016', url: 'http://shaheeninsurance.com/pdf/First%20Quarter%20Accounts%20-%202016.pdf' },
      { label: 'Half Yearly (Unaudited)', period: 'Ended 30th June 2016', url: 'http://shaheeninsurance.com/pdf/Half%20Yearly%20Accounts%20-%20June%202016.pdf' },
      { label: 'Third Quarter (Unaudited)', period: 'Ended 30th September 2016', url: 'http://shaheeninsurance.com/pdf/Third%20Quarter%20Accoounts.pdf' },
      { label: 'Annual Report', period: 'Ended 31st December 2016', url: 'http://shaheeninsurance.com/pdf/Annual%20Report%20-%202016.pdf' },
    ],
  },
  {
    year: 2015,
    reports: [
      { label: 'First Quarter (Unaudited)', period: 'Ended 31st March 2015', url: 'http://shaheeninsurance.com/pdf/FirstQuarterAccount-2015.pdf' },
      { label: 'Half Yearly (Unaudited)', period: 'Ended 30th June 2015', url: 'http://shaheeninsurance.com/pdf/Half-year-Accounts-2015.pdf' },
      { label: 'Third Quarter (Unaudited)', period: 'Ended 30th September 2015', url: 'http://shaheeninsurance.com/pdf/Third%20Quarter%20Accounts%20-%202015.pdf' },
      { label: 'Annual Report', period: 'Ended 31st December 2015', url: 'http://shaheeninsurance.com/pdf/Annual%20Report%20-%202015.pdf' },
    ],
  },
  {
    year: 2014,
    reports: [
      { label: 'First Quarter (Unaudited)', period: 'Ended 31st March 2014', url: 'http://shaheeninsurance.com/pdf/Shaheen1stQuarter2014.pdf' },
      { label: 'Half Yearly (Unaudited)', period: 'Ended 30th June 2014', url: 'http://shaheeninsurance.com/pdf/HalfYearlyReport-2014.pdf' },
      { label: 'Third Quarter (Unaudited)', period: 'Ended 30th September 2014', url: 'http://shaheeninsurance.com/pdf/ThirdQuarterAccounts2014.pdf' },
      { label: 'Annual Report', period: 'Ended 31st December 2014', url: 'http://shaheeninsurance.com/pdf/AnnualAcounts2014.pdf' },
    ],
  },
  {
    year: 2013,
    reports: [
      { label: 'First Quarter (Unaudited)', period: 'Ended 31st March 2013', url: 'http://shaheeninsurance.com/pdf/firstQuarter2013.pdf' },
      { label: 'Half Yearly (Unaudited)', period: 'Ended 30th June 2013', url: 'http://shaheeninsurance.com/pdf/halfYear2013.pdf' },
      { label: 'Third Quarter (Unaudited)', period: 'Ended 30th September 2013', url: 'http://shaheeninsurance.com/pdf/thirdQuarter2013.pdf' },
      { label: 'Annual Report', period: 'Ended 31st December 2013', url: 'http://shaheeninsurance.com/pdf/AnnualReport2013.pdf' },
    ],
  },
  {
    year: 2012,
    reports: [
      { label: 'First Quarter (Unaudited)', period: 'Ended 31st March 2012', url: 'http://shaheeninsurance.com/pdf/firstQuarter2012.pdf' },
      { label: 'Half Yearly (Unaudited)', period: 'Ended 30th June 2012', url: 'http://shaheeninsurance.com/pdf/halfYear2012.pdf' },
      { label: 'Third Quarter (Unaudited)', period: 'Ended 30th September 2012', url: 'http://shaheeninsurance.com/pdf/thirdQuarter2012.pdf' },
      { label: 'Annual Report', period: 'Ended 31st December 2012', url: 'http://shaheeninsurance.com/pdf/annualReport2012.pdf' },
    ],
  },
  {
    year: 2011,
    reports: [
      { label: 'First Quarter (Unaudited)', period: 'Ended 31st March 2011', url: 'http://shaheeninsurance.com/pdf/firstQuarte2011.pdf' },
      { label: 'Half Yearly (Unaudited)', period: 'Ended 30th June 2011', url: 'http://shaheeninsurance.com/pdf/halfYear2011.pdf' },
      { label: 'Third Quarter (Unaudited)', period: 'Ended 30th September 2011', url: 'http://shaheeninsurance.com/pdf/thirdQuarter2011.pdf' },
      { label: 'Annual Report', period: 'Ended 31st December 2011', url: 'http://shaheeninsurance.com/pdf/annualReport%202011.pdf' },
    ],
  },
  {
    year: 2010,
    reports: [
      { label: 'First Quarter (Unaudited)', period: 'Ended 31st March 2010', url: 'http://shaheeninsurance.com/pdf/firstQuarter2010.pdf' },
      { label: 'Half Yearly (Unaudited)', period: 'Ended 30th June 2010', url: 'http://shaheeninsurance.com/pdf/halfYear2010.pdf' },
      { label: 'Third Quarter (Unaudited)', period: 'Ended 30th September 2010', url: 'http://shaheeninsurance.com/pdf/thirdQuarter2010.pdf' },
      { label: 'Annual Report', period: 'Ended 31st December 2010', url: 'http://shaheeninsurance.com/pdf/annualReport2010.pdf' },
    ],
  },
  {
    year: 2009,
    reports: [
      { label: 'First Quarter (Unaudited)', period: 'Ended 31st March 2009', url: 'http://shaheeninsurance.com/pdf/firstQuarter2009.pdf' },
      { label: 'Half Yearly (Unaudited)', period: 'Ended 30th June 2009', url: 'http://shaheeninsurance.com/pdf/halfYear2009.pdf' },
      { label: 'Third Quarter (Unaudited)', period: 'Ended 30th September 2009', url: 'http://shaheeninsurance.com/pdf/thirdQuarter2009.pdf' },
      { label: 'Annual Report', period: 'Ended 31st December 2009', url: 'http://shaheeninsurance.com/pdf/annualReport2009.pdf' },
    ],
  },
  {
    year: 2008,
    reports: [
      { label: 'Half Yearly', period: 'Ended 30th June 2008', url: 'http://shaheeninsurance.com/pdf/halfYear2008.pdf' },
      { label: 'Annual Report', period: 'Ended 31st December 2008', url: 'http://shaheeninsurance.com/pdf/annualReport2008.pdf' },
    ],
  },
  {
    year: 2007,
    reports: [
      { label: 'Half Yearly', period: 'Ended 30th June 2007', url: 'http://shaheeninsurance.com/pdf/halfYear%202007.pdf' },
      { label: 'Annual Report', period: 'Ended 31st December 2007', url: 'http://shaheeninsurance.com/pdf/annualReport%202007.pdf' },
    ],
  },
  {
    year: 2006,
    reports: [
      { label: 'Annual Report', period: 'Ended 31st December 2006', url: 'http://shaheeninsurance.com/pdf/annualReport%202006.pdf' },
    ],
  },
]

const DEFAULT_OPEN = new Set([2026, 2025, 2024])

const ReportsSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Annual report stacked pages */}
    <rect x="75" y="38" width="90" height="115" rx="6" fill="#D6A65A" opacity="0.07" stroke="#D6A65A" strokeWidth="1.5" />
    <rect x="80" y="32" width="90" height="115" rx="6" fill="#D6A65A" opacity="0.05" stroke="#D6A65A" strokeWidth="1" />
    <rect x="85" y="26" width="90" height="115" rx="6" fill="#D6A65A" opacity="0.04" stroke="#D6A65A" strokeWidth="0.8" />
    {/* Content lines */}
    <rect x="88" y="54" width="65" height="6" rx="2" fill="#D6A65A" opacity="0.3" />
    <rect x="88" y="66" width="52" height="4" rx="2" fill="#D6A65A" opacity="0.2" />
    <rect x="88" y="75" width="58" height="4" rx="2" fill="#D6A65A" opacity="0.2" />
    {/* Mini chart */}
    <rect x="88" y="88" width="8" height="20" rx="1" fill="#D6A65A" opacity="0.25" />
    <rect x="100" y="80" width="8" height="28" rx="1" fill="#D6A65A" opacity="0.3" />
    <rect x="112" y="72" width="8" height="36" rx="1" fill="#D6A65A" opacity="0.38" />
    <rect x="124" y="66" width="8" height="42" rx="1" fill="#D6A65A" opacity="0.45" />
    <rect x="136" y="58" width="8" height="50" rx="1" fill="#D6A65A" opacity="0.5" />
    {/* Year label */}
    <rect x="88" y="120" width="40" height="10" rx="3" fill="#D6A65A" opacity="0.25" />
    {/* PSX badge */}
    <rect x="198" y="65" width="60" height="32" rx="6" fill="#D6A65A" opacity="0.12" stroke="#D6A65A" strokeWidth="1" />
    <text x="208" y="79" fill="#D6A65A" fontSize="8" fontFamily="sans-serif" opacity="0.7">PSX: SHNI</text>
    <text x="212" y="90" fill="#D6A65A" fontSize="7" fontFamily="sans-serif" opacity="0.5">A++ Rating</text>
    {/* Checkmark badge */}
    <circle cx="265" cy="25" r="12" fill="#D6A65A" opacity="0.5" stroke="#D6A65A" strokeWidth="1" />
    <path d="M262 28 L265 32 L270 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function FinancialReportsPage() {
  const [openYears, setOpenYears] = useState<Set<string | number>>(DEFAULT_OPEN)

  const toggle = (year: string | number) => {
    setOpenYears(prev => {
      const next = new Set(prev)
      next.has(year) ? next.delete(year) : next.add(year)
      return next
    })
  }

  return (
    <>
      <PageSEO
        title="Financial Reports"
        description="Shaheen Insurance annual reports and financial statements — audited by BDO Ebrahim & Co. Chartered Accountants. Download quarterly and annual reports for PSX-listed SHNI."
        keywords="Shaheen Insurance annual report, financial statements, SHNI PSX financial, insurance company accounts Pakistan"
        path="/investor/reports"
      />
      <InnerPageHero
        category="Investor Relations"
        title="Financial Reports"
        subtitle="Complete archive of annual reports, quarterly statements, and half-yearly accounts — transparently published for shareholders and investors"
        breadcrumbs={[{ label: 'Investor Information', path: '/investor' }, { label: 'Financial Reports' }]}
        stats={[{ value: '20+', label: 'Years of Reports' }, { value: '2006', label: 'Archive From' }, { value: 'BDO', label: 'Audited By' }]}
        svgIllustration={<ReportsSVG />}
      />

      {/* Archive */}
      <section className="py-20 md:py-28 bg-[#f8f7f5]">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Archive</p>
              <h2 className="font-display font-black text-navy text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-4">Financial Report Archive</h2>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xl mx-auto">
                Shaheen Insurance (PSX: SHNI) publishes its financial statements in compliance with SECP regulations and the Companies Act 2017. All reports are available in PDF format. Contact{' '}
                <a href="mailto:info@shaheeninsurance.com" className="text-gold hover:underline">info@shaheeninsurance.com</a> if you require a report not listed below.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {REPORTS.map(({ year, reports }) => {
              const isOpen = openYears.has(year)
              return (
                <div key={String(year)} className="border border-navy/10 rounded-2xl overflow-hidden bg-white">
                  <button onClick={() => toggle(year)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-navy hover:bg-navy/90 transition-colors">
                    <div className="flex items-center gap-3">
                      <FileText size={16} className="text-gold" />
                      <span className="font-display font-bold text-white text-base">{year}</span>
                      <span className="text-white/40 text-xs font-normal">{reports.length} report{reports.length !== 1 ? 's' : ''}</span>
                    </div>
                    <ChevronDown size={18} className={`text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="divide-y divide-navy/5">
                      {reports.map(({ label, period, url }) => (
                        <div key={label} className="flex items-center gap-3 px-5 py-3.5 hover:bg-gold/5 transition-colors group">
                          <div className="flex-1">
                            <span className="text-navy text-sm font-medium">{label}</span>
                            {period && <span className="text-gray-400 text-xs ml-2">— {period}</span>}
                          </div>
                          <a href={url} target="_blank" rel="noopener noreferrer" download
                            className="flex items-center gap-1.5 bg-gold text-navy font-bold text-xs px-3 py-1.5 rounded-lg hover:bg-gold/85 transition-colors shrink-0">
                            <Download size={12} />PDF
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="reports-cg" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#D6A65A" strokeWidth="0.8" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#reports-cg)" />
        </svg>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <ScrollReveal>
          <div className="relative z-10 max-w-2xl mx-auto px-5 text-center">
            <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">Need More?</p>
            <h2 className="font-display font-black text-white text-3xl md:text-4xl uppercase leading-tight mb-4">
              Request a <span className="text-gold">Specific Report</span>
            </h2>
            <p className="text-white/50 mb-8 text-sm leading-relaxed">If you require a financial report not listed above, or wish to receive a physical copy of our Annual Report, please contact our investor relations team.</p>
            <a href="mailto:info@shaheeninsurance.com" className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-8 py-4 rounded-xl text-sm hover:bg-gold/90 transition-colors">
              <Mail size={15} />info@shaheeninsurance.com
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
