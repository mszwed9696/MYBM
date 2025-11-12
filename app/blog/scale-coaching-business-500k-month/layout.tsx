import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'How to Scale a High-Ticket Coaching Business to $500k/Month',
  description: 'The exact playbook we use to scale coaching businesses from $100k to $500k+ monthly revenue. No fluff, just what actually works.',
  path: '/blog/scale-coaching-business-500k-month',
  keywords: ["coaching","marketing","high-ticket","business growth"],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
