import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'Marketing Strategy Services for 00k+ Businesses',
  description: 'Comprehensive marketing strategy services for established businesses doing 00k+ monthly. Custom strategies to achieve 30% revenue growth with guaranteed results.',
  path: '/services/marketing-strategy',
  keywords: ['KEYWORDS_PLACEHOLDER'],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
