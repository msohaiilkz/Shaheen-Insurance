import { useEffect } from 'react'

const SITE_NAME = 'Shaheen Insurance Company Ltd'
const SITE_URL = 'https://www.shaheeninsurance.com'
const OG_IMAGE = `${SITE_URL}/og-image.jpg`

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'Shaheen Insurance Company Limited',
  alternateName: ['SICL', 'Shaheen Insurance', 'SHNI'],
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: 'PACRA A++ rated general insurance company in Pakistan, sponsored by Shaheen Foundation (PAF). Est. 1996.',
  telephone: '+92-21-32630370',
  email: 'info@shaheeninsurance.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '10th Floor, Shaheen Complex, M.R. Kayani Road',
    addressLocality: 'Karachi',
    addressRegion: 'Sindh',
    addressCountry: 'PK',
  },
  foundingDate: '1996',
  areaServed: 'PK',
}

interface Props {
  title: string
  description: string
  keywords?: string
  path?: string
  schema?: object | object[]
  includeOrg?: boolean
}

function setMeta(name: string, content: string, attr = 'name') {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function PageSEO({ title, description, keywords, path = '/', schema, includeOrg = false }: Props) {
  const fullTitle = title === 'Home'
    ? `${SITE_NAME} — A Sign of Protection`
    : `${title} | ${SITE_NAME}`
  const canonical = `${SITE_URL}${path}`

  useEffect(() => {
    document.title = fullTitle

    setMeta('description', description)
    setMeta('robots', 'index, follow')
    if (keywords) setMeta('keywords', keywords)

    setLink('canonical', canonical)

    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', canonical, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:site_name', SITE_NAME, 'property')
    setMeta('og:image', OG_IMAGE, 'property')

    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', description)

    const schemas: object[] = []
    if (includeOrg) schemas.push(ORG_SCHEMA)
    if (schema) {
      if (Array.isArray(schema)) schemas.push(...schema)
      else schemas.push(schema)
    }

    const injected: HTMLScriptElement[] = schemas.map(s => {
      const el = document.createElement('script')
      el.type = 'application/ld+json'
      el.textContent = JSON.stringify(s)
      document.head.appendChild(el)
      return el
    })

    return () => injected.forEach(el => el.remove())
  }, [fullTitle, description, keywords, canonical, schema, includeOrg])

  return null
}
