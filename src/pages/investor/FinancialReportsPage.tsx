import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../../components/layout/PageHero'
import ContactSidebar from '../../components/layout/ContactSidebar'
import { FileText, Download, ChevronDown, Mail } from 'lucide-react'

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

export default function FinancialReportsPage() {
  const [openYears, setOpenYears] = useState<Set<string | number>>(DEFAULT_OPEN)

  const toggle = (year: string | number) => {
    setOpenYears((prev) => {
      const next = new Set(prev)
      next.has(year) ? next.delete(year) : next.add(year)
      return next
    })
  }

  return (
    <>
      <PageHero
        title="Financial Reports"
        subtitle="Complete archive of annual reports, quarterly statements, and half-yearly accounts — transparently published for shareholders and investors"
        breadcrumbs={[{ label: 'Investor Information', path: '/investor' }, { label: 'Financial Reports' }]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy mb-4">Financial Report Archive</h2>
              <p className="text-gray-600 leading-relaxed">
                Shaheen Insurance (PSX: SHNI) publishes its financial statements in compliance with SECP regulations and the Companies Act 2017. All reports are available in PDF format. Contact{' '}
                <a href="mailto:info@shaheeninsurance.com" className="text-gold hover:underline">info@shaheeninsurance.com</a> if you require a report not listed below.
              </p>
            </motion.div>

            <div className="space-y-3">
              {REPORTS.map(({ year, reports }, groupIdx) => {
                const isOpen = openYears.has(year)
                return (
                  <motion.div
                    key={String(year)}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.03 + groupIdx * 0.02 }}
                    className="border border-navy/10 rounded-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggle(year)}
                      className="w-full flex items-center justify-between px-5 py-4 bg-navy hover:bg-navy/90 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <FileText size={16} className="text-gold" />
                        <span className="font-display font-bold text-white text-base">{year}</span>
                        <span className="text-white/40 text-xs font-normal">{reports.length} report{reports.length !== 1 ? 's' : ''}</span>
                      </div>
                      <ChevronDown
                        size={18}
                        className={`text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="divide-y divide-navy/5">
                            {reports.map(({ label, period, url }) => (
                              <div key={label} className="flex items-center gap-3 px-5 py-3.5 hover:bg-gold/5 transition-colors group">
                                <div className="flex-1">
                                  <span className="text-navy text-sm font-medium">{label}</span>
                                  {period && <span className="text-gray-400 text-xs ml-2">— {period}</span>}
                                </div>
                                <a
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  download
                                  className="flex items-center gap-1.5 bg-gold text-navy font-bold text-xs px-3 py-1.5 rounded-lg hover:bg-gold/85 transition-colors shrink-0 opacity-0 group-hover:opacity-100 duration-200"
                                >
                                  <Download size={12} />
                                  PDF
                                </a>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <div className="bg-navy rounded-2xl p-7 text-white">
                <h3 className="font-display font-bold text-xl mb-2">Need a Specific Report?</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  If you require a financial report not listed above, or wish to receive a physical copy of our Annual Report, please contact our investor relations team.
                </p>
                <a href="mailto:info@shaheeninsurance.com" className="flex items-center gap-2 text-gold font-semibold text-sm hover:underline">
                  <Mail size={15} />
                  info@shaheeninsurance.com
                </a>
              </div>
            </motion.div>

          </div>
          <div><ContactSidebar /></div>
        </div>
      </section>
    </>
  )
}
