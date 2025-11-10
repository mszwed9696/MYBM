import { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  path?: string
  image?: string
  type?: 'website' | 'article' | 'profile'
}

export function generateSEO({
  title,
  description,
  keywords = [],
  path = '',
  image = '/myb-logo-gold.png',
  type = 'website',
}: SEOProps): Metadata {
  const baseUrl = 'https://mybm.vercel.app'
  const url = `${baseUrl}${path}`

  // High-ticket business keywords to always include
  const baseKeywords = [
    'marketing agency for high ticket businesses',
    'high ticket marketing',
    'scale high ticket business',
    'marketing for six figure businesses',
    'marketing for seven figure businesses',
  ]

  const allKeywords = [...baseKeywords, ...keywords]

  return {
    title,
    description,
    keywords: allKeywords,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Mind Your Business Media',
      images: [
        {
          url: `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}${image}`],
      creator: '@mindyourbizmedia',
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// Structured data generators for different page types
export function generateServiceSchema(service: {
  name: string
  description: string
  url: string
  price?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'Organization',
      name: 'Mind Your Business Media',
      url: 'https://mybm.vercel.app',
    },
    areaServed: 'Worldwide',
    ...(service.price && { offers: {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'USD',
    }}),
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  const baseUrl = 'https://mybm.vercel.app'

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  }
}

// Image alt text generator for SEO
export function generateAltText(imageName: string, context?: string): string {
  const contextPrefix = context ? `${context} - ` : ''

  // Clean up the image name
  const cleanName = imageName
    .replace(/\.(png|jpg|jpeg|webp|svg)$/i, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())

  return `${contextPrefix}${cleanName} | Mind Your Business Media - Marketing Agency for High-Ticket Businesses`
}
