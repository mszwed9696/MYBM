import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'Why Most Marketing Agencies Fail High-Ticket Businesses (And What to Do Instead)',
  description: 'The fundamental misunderstanding most agencies have about high-ticket marketing, and how to find one that actually gets it.',
  path: '/blog/why-marketing-agencies-fail-high-ticket',
  keywords: ["strategy","marketing","high-ticket","business growth"],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
