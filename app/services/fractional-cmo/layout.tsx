import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'Fractional CMO Services | Executive Marketing Leadership for $100k+ Businesses',
  description: 'Expert fractional CMO services for high-ticket businesses doing $100k+ monthly. Get executive-level marketing leadership without the $250k+ salary. Strategic guidance and complete execution.',
  path: '/services/fractional-cmo',
  keywords: [
    'fractional cmo services',
    'fractional cmo for high ticket business',
    'part time cmo',
    'fractional chief marketing officer',
    'outsourced cmo services',
    'executive marketing leadership',
    'fractional cmo for coaches',
    'fractional cmo for consultants',
  ],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
