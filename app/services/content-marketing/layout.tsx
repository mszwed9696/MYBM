import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'Content Marketing Services for High-Ticket Businesses',
  description: 'Premium content marketing services for coaches, consultants, and high-ticket businesses. Authority-building content that attracts qualified leads and drives revenue growth.',
  path: '/services/content-marketing',
  keywords: ['KEYWORDS_PLACEHOLDER'],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
