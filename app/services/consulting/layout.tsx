import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'Business Consulting TITLE_PLACEHOLDER Strategy Services',
  description: 'Expert business consulting and strategy services for high-ticket businesses. Strategic guidance to scale your 00k+ monthly business with proven frameworks and execution.',
  path: '/services/consulting',
  keywords: ['KEYWORDS_PLACEHOLDER'],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
