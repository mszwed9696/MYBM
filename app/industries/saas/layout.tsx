import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'Marketing for SaaS Companies | B2B SaaS Growth Services',
  description: 'Marketing solutions for B2B SaaS companies doing M+ ARR. Scale MRR, reduce churn, and grow your software business with proven SaaS marketing strategies.',
  path: '/industries/saas',
  keywords: ['KEYWORDS_PLACEHOLDER'],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
