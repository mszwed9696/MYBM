import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'About Mind Your Business Media | Marketing Agency for High-Ticket Businesses',
  description: 'Learn about Mind Your Business Media, the marketing agency exclusively serving businesses doing $100k+ monthly. Meet our team, discover our story, and see why we guarantee 30% revenue growth in year 1.',
  path: '/about',
  keywords: [
    'about mind your business media',
    'high ticket marketing agency team',
    'guaranteed marketing results',
    'marketing agency for established businesses',
  ],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
