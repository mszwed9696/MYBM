"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <header className="fixed w-full bg-gradient-to-r from-[#1a1a2e] via-[#2a1a4a] to-[#1a1a2e] backdrop-blur-sm z-50 border-b border-[#FFD700]/30">
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 md:h-24 lg:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <img
              src="/myb-logo-gold.png"
              alt="Mind Your Business Media"
              className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto group-hover:opacity-80 transition-opacity"
              loading="eager"
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

          {/* Mobile menu button - optimized touch target */}
          <button
            className="lg:hidden text-white p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Optimized for touch */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 bg-gradient-to-br from-[#1a1a2e] to-[#2a1a4a] border-t border-[#FFD700]/20">
            <div className="flex flex-col space-y-1">
              {/* Services Dropdown */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full text-left text-gray-200 hover:text-[#FFD700] hover:bg-[#FFD700]/10 px-4 py-3 transition-colors flex items-center justify-between"
                >
                  <span>Services</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="bg-[#1a1a2e]/50 py-1">
                    <Link href="/services/fractional-cmo" className="block text-gray-200 hover:text-[#FFD700] hover:bg-[#FFD700]/10 px-8 py-2 text-sm transition-colors" onClick={() => setMobileMenuOpen(false)}>Fractional CMO</Link>
                    <Link href="/services/paid-advertising" className="block text-gray-200 hover:text-[#FFD700] hover:bg-[#FFD700]/10 px-8 py-2 text-sm transition-colors" onClick={() => setMobileMenuOpen(false)}>Paid Advertising</Link>
                    <Link href="/services/marketing-strategy" className="block text-gray-200 hover:text-[#FFD700] hover:bg-[#FFD700]/10 px-8 py-2 text-sm transition-colors" onClick={() => setMobileMenuOpen(false)}>Marketing Strategy</Link>
                    <Link href="/services/funnel-optimization" className="block text-gray-200 hover:text-[#FFD700] hover:bg-[#FFD700]/10 px-8 py-2 text-sm transition-colors" onClick={() => setMobileMenuOpen(false)}>Funnel Optimization</Link>
                    <Link href="/services/content-marketing" className="block text-gray-200 hover:text-[#FFD700] hover:bg-[#FFD700]/10 px-8 py-2 text-sm transition-colors" onClick={() => setMobileMenuOpen(false)}>Content & SEO</Link>
                    <Link href="/services/marketing-automation" className="block text-gray-200 hover:text-[#FFD700] hover:bg-[#FFD700]/10 px-8 py-2 text-sm transition-colors" onClick={() => setMobileMenuOpen(false)}>Marketing Automation</Link>
                  </div>
                )}
              </div>

              {/* Industries Dropdown */}
              <div>
                <button
                  onClick={() => setIndustriesOpen(!industriesOpen)}
                  className="w-full text-left text-gray-200 hover:text-[#FFD700] hover:bg-[#FFD700]/10 px-4 py-3 transition-colors flex items-center justify-between"
                >
                  <span>Industries</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${industriesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {industriesOpen && (
                  <div className="bg-[#1a1a2e]/50 py-1">
                    <Link href="/industries/coaches" className="block text-gray-200 hover:text-[#FFD700] hover:bg-[#FFD700]/10 px-8 py-2 text-sm transition-colors" onClick={() => setMobileMenuOpen(false)}>High-Ticket Coaches</Link>
                    <Link href="/industries/consultants" className="block text-gray-200 hover:text-[#FFD700] hover:bg-[#FFD700]/10 px-8 py-2 text-sm transition-colors" onClick={() => setMobileMenuOpen(false)}>Consultants</Link>
                    <Link href="/industries/course-creators" className="block text-gray-200 hover:text-[#FFD700] hover:bg-[#FFD700]/10 px-8 py-2 text-sm transition-colors" onClick={() => setMobileMenuOpen(false)}>Course Creators</Link>
                    <Link href="/industries/service-businesses" className="block text-gray-200 hover:text-[#FFD700] hover:bg-[#FFD700]/10 px-8 py-2 text-sm transition-colors" onClick={() => setMobileMenuOpen(false)}>Service Businesses</Link>
                    <Link href="/industries/product-businesses" className="block text-gray-200 hover:text-[#FFD700] hover:bg-[#FFD700]/10 px-8 py-2 text-sm transition-colors" onClick={() => setMobileMenuOpen(false)}>Product Businesses</Link>
                    <Link href="/industries/saas" className="block text-gray-200 hover:text-[#FFD700] hover:bg-[#FFD700]/10 px-8 py-2 text-sm transition-colors" onClick={() => setMobileMenuOpen(false)}>SaaS</Link>
                  </div>
                )}
              </div>

              <Link href="/results" className="text-gray-200 hover:text-[#FFD700] hover:bg-[#FFD700]/10 px-4 py-3 transition-colors" onClick={() => setMobileMenuOpen(false)}>Results</Link>
              <Link href="/guarantee" className="text-gray-200 hover:text-[#FFD700] hover:bg-[#FFD700]/10 px-4 py-3 transition-colors" onClick={() => setMobileMenuOpen(false)}>Our Guarantee</Link>
              <Link href="/about" className="text-gray-200 hover:text-[#FFD700] hover:bg-[#FFD700]/10 px-4 py-3 transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link href="/blog" className="text-gray-200 hover:text-[#FFD700] hover:bg-[#FFD700]/10 px-4 py-3 transition-colors" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
              <div className="pt-2 px-4">
                <Link href="/apply" className="block bg-[#8B0000] border-2 border-[#FFD700] text-white px-6 py-4 rounded-lg font-semibold text-center hover:bg-[#a00000] transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
