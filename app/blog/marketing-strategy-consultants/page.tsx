import Link from "next/link";

export default function BlogPost() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-black text-white py-20 overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0 opacity-20 z-0">
          <img 
            src="/heroes/detroit-skyline.png" 
            alt="Cityscape" 
            className="w-full h-full object-cover" 
            style={{ objectPosition: "center center" }}  
            loading="lazy" 
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6">
            <Link 
              href="/blog" 
              className="text-[#FFD700] hover:text-[#FFA500] transition-colors"
            >
              ← Back to Blog
            </Link>
          </div>
          
          <div className="mb-6">
            <span className="inline-block bg-[#FFD700] text-black px-4 py-2 rounded-full text-sm font-semibold">
              Consulting
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Georgia', serif" }}>
            The Ultimate Marketing Strategy for Business Consultants in 2025
          </h1>

          <div className="flex items-center gap-6 text-gray-300">
            <span>January 12, 2025</span>
            <span>•</span>
            <span>10 min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed font-semibold">
              How consultants can break free from referral dependency and build predictable $50k+ monthly pipelines through strategic marketing.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              Introduction
            </h2>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              Welcome to this comprehensive guide on the ultimate marketing strategy for business consultants in 2025. In this article, we'll break down proven strategies, frameworks, and actionable steps you can implement in your business today.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Whether you're just getting started or looking to scale to the next level, this guide will provide you with the insights you need to succeed.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              The Challenge
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Most businesses in your situation face similar challenges: inconsistent results, unclear strategy, and wasted marketing budget. The good news? These problems are solvable with the right approach.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              The Solution
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Through working with dozens of businesses just like yours, we've developed a proven framework that delivers consistent, predictable results. Here's what we've learned:
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Principle #1: Strategy First</h3>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              Before implementing any tactics, you need a clear strategic foundation. This means understanding your market, positioning, and unique value proposition.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Principle #2: Systems Over Hustle</h3>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              Sustainable growth comes from building systems that work without you. Focus on creating processes, automations, and team structures that scale.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Principle #3: Measure What Matters</h3>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              Don't get distracted by vanity metrics. Focus on the numbers that actually drive revenue: qualified leads, conversion rates, and customer lifetime value.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              Implementation Roadmap
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Ready to put this into action? Here's your step-by-step roadmap:
            </p>

            <ol className="list-decimal list-inside space-y-3 mb-6">
              <li className="text-gray-700"><strong>Audit your current situation</strong> - Understand where you are today</li>
              <li className="text-gray-700"><strong>Define clear goals</strong> - Know exactly where you're going</li>
              <li className="text-gray-700"><strong>Build your strategy</strong> - Create the plan to get there</li>
              <li className="text-gray-700"><strong>Implement systematically</strong> - Execute one step at a time</li>
              <li className="text-gray-700"><strong>Measure and optimize</strong> - Track results and improve continuously</li>
            </ol>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              Common Mistakes to Avoid
            </h2>

            <ul className="list-disc list-inside space-y-3 mb-6">
              <li className="text-gray-700">Moving too fast without proper foundation</li>
              <li className="text-gray-700">Copying competitors instead of finding your unique angle</li>
              <li className="text-gray-700">Neglecting to measure results properly</li>
              <li className="text-gray-700">Giving up too soon before seeing results</li>
              <li className="text-gray-700">Trying to do everything yourself instead of building a team</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              Next Steps
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              The strategies outlined in this article work—we've proven them with dozens of businesses doing $100k+ monthly revenue. But knowing what to do and actually implementing it successfully are two different things.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              If you'd like help implementing these strategies in your business, we'd love to talk. We offer Fractional CMO services with a 30% revenue growth guarantee for qualified businesses.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Book a strategy call below to discuss your specific situation and see if we're the right fit.
            </p>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "'Georgia', serif" }}>
            Ready to Apply These Strategies to Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a custom marketing strategy designed specifically for your business with our 30% revenue guarantee.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-[#8B0000] border-2 border-[#FFD700] text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-[#a00000] transition-colors"
          >
            Apply for Partnership
          </Link>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Georgia', serif" }}>
            Continue Reading
          </h2>
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-block bg-[#8B0000] border-2 border-[#FFD700] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#a00000] transition-colors"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
