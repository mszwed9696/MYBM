import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'The Ultimate Marketing Strategy for Business Consultants in 2025',
  description: 'How consultants can break free from referral dependency and build predictable $50k+ monthly pipelines through strategic marketing.',
  path: '/blog/marketing-strategy-consultants',
  keywords: ["consulting","marketing","high-ticket","business growth"],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
