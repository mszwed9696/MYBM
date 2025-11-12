import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'Fractional CMO vs Marketing Agency vs In-House: What's Right for Your $1M+ Business?',
  description: 'Compare the three options for marketing leadership and execution, with honest pros/cons for each at different revenue stages.',
  path: '/blog/fractional-cmo-vs-agency-vs-in-house',
  keywords: ["strategy","marketing","high-ticket","business growth"],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
