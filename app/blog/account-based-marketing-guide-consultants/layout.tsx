import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'Account-Based Marketing for Consultants: A Complete Guide',
  description: 'How to target and close enterprise clients worth $100k-500k+ using systematic ABM strategies that actually work.',
  path: '/blog/account-based-marketing-guide-consultants',
  keywords: ["consulting","marketing","high-ticket","business growth"],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
