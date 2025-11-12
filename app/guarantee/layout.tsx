import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: '30% Revenue Growth Guarantee | Risk-Free Marketing Services',
  description: 'Our unprecedented 30% net revenue increase guarantee in year 1 or we work for free. See how our guaranteed marketing results protect your investment and ensure growth for your high-ticket business.',
  path: '/guarantee',
  keywords: [
    'guaranteed marketing results',
    'marketing agency guarantee',
    '30% revenue growth guarantee',
    'risk free marketing services',
    'guaranteed business growth',
    'marketing ROI guarantee',
  ],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
