"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-gradient-to-r from-[#1a1a2e] via-[#2a1a4a] to-[#1a1a2e] backdrop-blur-sm z-50 border-b border-[#FFD700]/30">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img
              src="/myb-logo-gold.png"
              alt="Mind Your Business Media"
              className="h-24 w-auto group-hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-gray-200 hover:text-[#FFD700] font-medium transition-colors">
                Services
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-gradient-to-br from-[#1a1a2e] to-[#2a1a4a] border border-[#FFD700]/30 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/services/fractional-cmo" className="block px-4 py-2 text-gray-200 hover:text-[#FFD700] hover:bg-[#FFD700]/10">Fractional CMO</Link>
                  <Link href="/services/paid-advertising" className="block px-4 py-2 text-gray-200 hover:text-[#FFD700] hover:bg-[#FFD700]/10">Paid Advertising</Link>
                  <Link href="/services/marketing-strategy" className="block px-4 py-2 text-gray-200 hover:text-[#FFD700] hover:bg-[#FFD700]/10">Marketing Strategy</Link>
                  <Link href="/services/funnel-optimization" className="block px-4 py-2 text-gray-200 hover:text-[#FFD700] hover:bg-[#FFD700]/10">Funnel Optimization</Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-200 hover:text-[#FFD700] font-medium transition-colors">
                Industries
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-gradient-to-br from-[#1a1a2e] to-[#2a1a4a] border border-[#FFD700]/30 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/industries/coaches" className="block px-4 py-2 text-gray-200 hover:text-[#FFD700] hover:bg-[#FFD700]/10">High-Ticket Coaches</Link>
                  <Link href="/industries/consultants" className="block px-4 py-2 text-gray-200 hover:text-[#FFD700] hover:bg-[#FFD700]/10">Consultants</Link>
                  <Link href="/industries/course-creators" className="block px-4 py-2 text-gray-200 hover:text-[#FFD700] hover:bg-[#FFD700]/10">Course Creators</Link>
                  <Link href="/industries/service-businesses" className="block px-4 py-2 text-gray-200 hover:text-[#FFD700] hover:bg-[#FFD700]/10">Service Businesses</Link>
                  <Link href="/industries/product-businesses" className="block px-4 py-2 text-gray-200 hover:text-[#FFD700] hover:bg-[#FFD700]/10">Product Businesses</Link>
                </div>
              </div>
            </div>

            <Link href="/results" className="text-gray-200 hover:text-[#FFD700] font-medium transition-colors">
              Results
            </Link>
            <Link href="/guarantee" className="text-gray-200 hover:text-[#FFD700] font-medium transition-colors">
              Our Guarantee
            </Link>
            <Link href="/about" className="text-gray-200 hover:text-[#FFD700] font-medium transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-gray-200 hover:text-[#FFD700] font-medium transition-colors">
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/apply"
              className="bg-[#8B0000] border-2 border-[#FFD700] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a00000] transition-colors"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 bg-gradient-to-br from-[#1a1a2e] to-[#2a1a4a]">
            <div className="flex flex-col space-y-4">
              <Link href="/services/fractional-cmo" className="text-gray-200 hover:text-[#FFD700] px-4">Fractional CMO</Link>
              <Link href="/services/paid-advertising" className="text-gray-200 hover:text-[#FFD700] px-4">Paid Advertising</Link>
              <Link href="/industries/coaches" className="text-gray-200 hover:text-[#FFD700] px-4">High-Ticket Coaches</Link>
              <Link href="/industries/consultants" className="text-gray-200 hover:text-[#FFD700] px-4">Consultants</Link>
              <Link href="/results" className="text-gray-200 hover:text-[#FFD700] px-4">Results</Link>
              <Link href="/guarantee" className="text-gray-200 hover:text-[#FFD700] px-4">Our Guarantee</Link>
              <Link href="/about" className="text-gray-200 hover:text-[#FFD700] px-4">About</Link>
              <Link href="/apply" className="bg-[#8B0000] border-2 border-[#FFD700] text-white px-6 py-3 rounded-lg font-semibold text-center mx-4">
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
