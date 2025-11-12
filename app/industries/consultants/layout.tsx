import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'Marketing for Business Consultants | Grow Your Consulting Firm',
  description: 'Marketing services for business consultants and advisory firms. Attract enterprise clients, fill your pipeline, and scale your consulting practice profitably.',
  path: '/industries/consultants',
  keywords: ['KEYWORDS_PLACEHOLDER'],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
