"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="text-2xl font-bold text-gray-900">
              Mind Your Business Media
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 font-medium">
                Services
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/services/fractional-cmo" className="block px-4 py-2 hover:bg-gray-50">Fractional CMO</Link>
                  <Link href="/services/paid-advertising" className="block px-4 py-2 hover:bg-gray-50">Paid Advertising</Link>
                  <Link href="/services/marketing-strategy" className="block px-4 py-2 hover:bg-gray-50">Marketing Strategy</Link>
                  <Link href="/services/funnel-optimization" className="block px-4 py-2 hover:bg-gray-50">Funnel Optimization</Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 font-medium">
                Industries
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/industries/coaches" className="block px-4 py-2 hover:bg-gray-50">High-Ticket Coaches</Link>
                  <Link href="/industries/consultants" className="block px-4 py-2 hover:bg-gray-50">Consultants</Link>
                  <Link href="/industries/course-creators" className="block px-4 py-2 hover:bg-gray-50">Course Creators</Link>
                  <Link href="/industries/service-businesses" className="block px-4 py-2 hover:bg-gray-50">Service Businesses</Link>
                  <Link href="/industries/product-businesses" className="block px-4 py-2 hover:bg-gray-50">Product Businesses</Link>
                </div>
              </div>
            </div>

            <Link href="/results" className="text-gray-700 hover:text-gray-900 font-medium">
              Results
            </Link>
            <Link href="/guarantee" className="text-gray-700 hover:text-gray-900 font-medium">
              Our Guarantee
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium">
              About
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900 font-medium">
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/apply"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/services/fractional-cmo" className="text-gray-700">Fractional CMO</Link>
              <Link href="/services/paid-advertising" className="text-gray-700">Paid Advertising</Link>
              <Link href="/industries/coaches" className="text-gray-700">High-Ticket Coaches</Link>
              <Link href="/industries/consultants" className="text-gray-700">Consultants</Link>
              <Link href="/results" className="text-gray-700">Results</Link>
              <Link href="/guarantee" className="text-gray-700">Our Guarantee</Link>
              <Link href="/about" className="text-gray-700">About</Link>
              <Link href="/apply" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center">
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
