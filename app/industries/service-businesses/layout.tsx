import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'Marketing for Service Businesses | Scale Professional Services',
  description: 'Marketing services for professional service businesses. Generate qualified leads, increase project values, and scale your service-based business systematically.',
  path: '/industries/service-businesses',
  keywords: ['KEYWORDS_PLACEHOLDER'],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
