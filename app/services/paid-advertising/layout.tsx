import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'Paid Advertising Management for High-Ticket Businesses',
  description: 'Expert paid advertising management for coaches, consultants, and high-ticket businesses. ROI-focused campaigns across Facebook, Google, LinkedIn, and YouTube.',
  path: '/services/paid-advertising',
  keywords: ['KEYWORDS_PLACEHOLDER'],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
