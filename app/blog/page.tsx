import Link from "next/link";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Marketing Blog | Strategies for High-Ticket Businesses",
  description: "Expert marketing insights for coaches, consultants, and high-ticket businesses. Learn strategies to scale from 6 to 7 and 7 to 8 figures.",
  keywords: [
    "marketing blog",
    "high ticket marketing",
    "marketing strategies",
    "business growth",
  ],
});

const blogPosts = [
  {
    slug: "scale-coaching-business-500k-month",
    title: "How to Scale a High-Ticket Coaching Business to $500k/Month",
    excerpt: "The exact playbook we use to scale coaching businesses from $100k to $500k+ monthly revenue. No fluff, just what actually works.",
    category: "Coaching",
    readTime: "12 min read",
    date: "January 15, 2025",
  },
  {
    slug: "marketing-strategy-consultants",
    title: "The Ultimate Marketing Strategy for Business Consultants in 2025",
    excerpt: "How consultants can break free from referral dependency and build predictable $50k+ monthly pipelines through strategic marketing.",
    category: "Consulting",
    readTime: "10 min read",
    date: "January 12, 2025",
  },
  {
    slug: "why-marketing-agencies-fail-high-ticket",
    title: "Why Most Marketing Agencies Fail High-Ticket Businesses (And What to Do Instead)",
    excerpt: "The fundamental misunderstanding most agencies have about high-ticket marketing, and how to find one that actually gets it.",
    category: "Strategy",
    readTime: "8 min read",
    date: "January 10, 2025",
  },
  {
    slug: "account-based-marketing-guide-consultants",
    title: "Account-Based Marketing for Consultants: A Complete Guide",
    excerpt: "How to target and close enterprise clients worth $100k-500k+ using systematic ABM strategies that actually work.",
    category: "Consulting",
    readTime: "15 min read",
    date: "January 8, 2025",
  },
  {
    slug: "funnel-strategies-high-ticket-coaching",
    title: "7 Funnel Strategies for $10k+ Coaching Programs",
    excerpt: "The exact funnels we use to generate qualified applications for high-ticket coaching programs without relying on launches.",
    category: "Coaching",
    readTime: "11 min read",
    date: "January 5, 2025",
  },
  {
    slug: "guaranteed-marketing-results",
    title: "Can Marketing Agencies Really Guarantee Results?",
    excerpt: "Breaking down what's possible (and what's BS) when it comes to marketing guarantees, plus our own 30% revenue guarantee explained.",
    category: "Strategy",
    readTime: "9 min read",
    date: "January 3, 2025",
  },
  {
    slug: "fractional-cmo-vs-agency-vs-in-house",
    title: "Fractional CMO vs Marketing Agency vs In-House: What's Right for Your $1M+ Business?",
    excerpt: "Compare the three options for marketing leadership and execution, with honest pros/cons for each at different revenue stages.",
    category: "Strategy",
    readTime: "13 min read",
    date: "December 30, 2024",
  },
  {
    slug: "course-creator-evergreen-funnel",
    title: "Building an Evergreen Funnel That Sells Your Course Without Launches",
    excerpt: "Stop living launch-to-launch. Build automated systems that sell your online course 24/7 while you focus on delivery.",
    category: "Course Creation",
    readTime: "14 min read",
    date: "December 27, 2024",
  },
];

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Marketing Insights for High-Ticket Businesses
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real strategies from scaling dozens of coaches, consultants, and businesses from 6 to 7 and 7 to 8 figures.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-600 hover:shadow-xl transition-all"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-blue-600">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="text-blue-600 font-semibold group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Apply These Strategies to Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get a custom marketing strategy designed specifically for your business with our 30% revenue guarantee.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-blue-600 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-blue-700"
          >
            Apply for Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
