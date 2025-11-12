import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'Marketing for Online Course Creators | Scale Course Sales',
  description: 'Marketing solutions for online course creators and educators. Launch successful courses, build automated funnels, and scale to 00k+ monthly with expert guidance.',
  path: '/industries/course-creators',
  keywords: ['KEYWORDS_PLACEHOLDER'],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
