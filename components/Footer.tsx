import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Mind Your Business Media</h3>
            <p className="text-gray-400">
              The marketing agency for businesses doing $100k+/month in revenue.
            </p>
            <p className="text-gray-400 mt-4 font-semibold">
              30% revenue increase guaranteed or we work for free.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/fractional-cmo" className="text-gray-400 hover:text-white">Fractional CMO</Link></li>
              <li><Link href="/services/marketing-strategy" className="text-gray-400 hover:text-white">Marketing Strategy</Link></li>
              <li><Link href="/services/paid-advertising" className="text-gray-400 hover:text-white">Paid Advertising</Link></li>
              <li><Link href="/services/funnel-optimization" className="text-gray-400 hover:text-white">Funnel Optimization</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-2">
              <li><Link href="/industries/coaches" className="text-gray-400 hover:text-white">High-Ticket Coaches</Link></li>
              <li><Link href="/industries/consultants" className="text-gray-400 hover:text-white">Consultants</Link></li>
              <li><Link href="/industries/course-creators" className="text-gray-400 hover:text-white">Course Creators</Link></li>
              <li><Link href="/industries/service-businesses" className="text-gray-400 hover:text-white">Service Businesses</Link></li>
              <li><Link href="/industries/product-businesses" className="text-gray-400 hover:text-white">Product Businesses</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="/results" className="text-gray-400 hover:text-white">Results</Link></li>
              <li><Link href="/guarantee" className="text-gray-400 hover:text-white">Our Guarantee</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link href="/apply" className="text-gray-400 hover:text-white">Apply Now</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Mind Your Business Media. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
