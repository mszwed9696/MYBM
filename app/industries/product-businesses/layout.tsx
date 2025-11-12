import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'Marketing for Product Businesses | E-commerce Growth Services',
  description: 'Marketing services for product businesses and premium e-commerce brands. Scale your product sales, optimize conversions, and build a profitable online store.',
  path: '/industries/product-businesses',
  keywords: ['KEYWORDS_PLACEHOLDER'],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
