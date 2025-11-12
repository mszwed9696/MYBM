import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'Funnel Optimization TITLE_PLACEHOLDER Conversion Services',
  description: 'Expert funnel optimization services to increase conversion rates and revenue. Turn more visitors into high-ticket clients with data-driven funnel improvements.',
  path: '/services/funnel-optimization',
  keywords: ['KEYWORDS_PLACEHOLDER'],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
