import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'Marketing Automation Services for Scaling Businesses',
  description: 'Marketing automation solutions for high-ticket businesses. Streamline your marketing operations, nurture leads automatically, and scale revenue without adding team members.',
  path: '/services/marketing-automation',
  keywords: ['KEYWORDS_PLACEHOLDER'],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
