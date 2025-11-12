import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: '7 Funnel Strategies for $10k+ Coaching Programs',
  description: 'The exact funnels we use to generate qualified applications for high-ticket coaching programs without relying on launches.',
  path: '/blog/funnel-strategies-high-ticket-coaching',
  keywords: ["coaching","marketing","high-ticket","business growth"],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
