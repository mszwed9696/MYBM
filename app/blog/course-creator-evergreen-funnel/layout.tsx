import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'Building an Evergreen Funnel That Sells Your Course Without Launches',
  description: 'Stop living launch-to-launch. Build automated systems that sell your online course 24/7 while you focus on delivery.',
  path: '/blog/course-creator-evergreen-funnel',
  keywords: ["course creation","marketing","high-ticket","business growth"],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
