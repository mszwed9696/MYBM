import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mybm.vercel.app'
  const currentDate = new Date()

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/results`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guarantee`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/apply`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  // Service pages
  const services = [
    'fractional-cmo',
    'marketing-strategy',
    'paid-advertising',
    'funnel-optimization',
    'content-marketing',
    'marketing-automation',
    'consulting',
    'skool-community',
  ]

  const servicePages = services.map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Industry pages
  const industries = [
    'coaches',
    'consultants',
    'course-creators',
    'service-businesses',
    'product-businesses',
    'saas',
  ]

  const industryPages = industries.map(industry => ({
    url: `${baseUrl}/industries/${industry}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Blog posts
  const blogPosts = [
    'account-based-marketing-guide-consultants',
    'course-creator-evergreen-funnel',
    'fractional-cmo-vs-agency-vs-in-house',
    'funnel-strategies-high-ticket-coaching',
    'guaranteed-marketing-results',
    'marketing-strategy-consultants',
    'scale-coaching-business-500k-month',
    'why-marketing-agencies-fail-high-ticket',
  ]

  const blogPostPages = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...mainPages, ...servicePages, ...industryPages, ...blogPostPages]
}
