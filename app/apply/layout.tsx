import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'Apply for Partnership | Work With Mind Your Business Media',
  description: 'Apply to partner with Mind Your Business Media. We only work with businesses doing $100k+ monthly revenue. Get guaranteed 30% revenue growth or we work for free. Limited partnerships available.',
  path: '/apply',
  keywords: [
    'apply for marketing services',
    'partner with marketing agency',
    'high ticket business application',
    'marketing agency partnership',
    'guaranteed marketing results',
  ],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
