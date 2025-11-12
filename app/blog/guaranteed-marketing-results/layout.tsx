import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'Can Marketing Agencies Really Guarantee Results?',
  description: 'Breaking down what's possible (and what's BS) when it comes to marketing guarantees, plus our own 30% revenue guarantee explained.',
  path: '/blog/guaranteed-marketing-results',
  keywords: ["strategy","marketing","high-ticket","business growth"],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
