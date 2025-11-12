import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'Marketing for High-Ticket Coaches | Scale Your Coaching Business',
  description: 'Marketing solutions for high-ticket coaches doing 00k+ monthly. Scale your coaching programs, masterminds, and 1-on-1 services with guaranteed 30% revenue growth.',
  path: '/industries/coaches',
  keywords: ['KEYWORDS_PLACEHOLDER'],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
