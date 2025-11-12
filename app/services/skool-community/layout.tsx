import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'Skool Community Management Services',
  description: 'Professional Skool community management and growth services. Build engaged communities that drive recurring revenue and increase customer lifetime value.',
  path: '/services/skool-community',
  keywords: ['KEYWORDS_PLACEHOLDER'],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
