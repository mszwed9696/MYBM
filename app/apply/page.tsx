"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    monthlyRevenue: "",
    businessType: "",
    biggestChallenge: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your CRM/email
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-black text-white flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6 text-[#FFD700]">🤝</div>
          <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: "'Georgia', serif" }}>
            Welcome To <span className="text-[#FFD700]">The Family</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: "'Georgia', serif" }}>
            Your application has been received. We'll review it within 24-48 hours.
            <br /><span className="text-[#FFD700] font-bold">If you're serious, we'll be in touch.</span>
          </p>
          <p className="text-lg text-gray-400 mb-8">
            If you're a fit, we'll schedule a sit-down to discuss your business and how we'll deliver that 30% revenue increase. Guaranteed.
          </p>
          <Link href="/" className="inline-block bg-[#8B0000] border-2 border-[#FFD700] text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-lg font-bold text-base sm:text-lg hover:bg-[#a00000] transition-all" style={{ fontFamily: "'Georgia', serif" }}>
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-black text-white py-16 overflow-hidden">
        {/* Cityscape hero background */}
        <div className="absolute inset-0 z-0">
          <img src="/heroes/philadelphia-skyline.png" alt="Cityscape" className="w-full h-full object-cover" style={{ objectPosition: "center center" }}  loading="lazy" />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a4a]/60 via-[#1a1a2e]/50 to-black/70"></div>
        </div>

        {/* Character image */}
        <div className="absolute right-0 bottom-0 w-64 md:w-80 opacity-40 z-0">
          <img src="/characters/boss-city-hall.png" alt="The Don" className="w-full h-auto"  loading="lazy" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: "'Georgia', serif" }}>
            Join <span className="text-[#FFD700]">The Family</span>
          </h1>
          <p className="text-xl text-gray-300" style={{ fontFamily: "'Georgia', serif" }}>
            We're selective. We only work with businesses doing $100k+ monthly that we know we can grow 30%+.
            <br /><span className="text-[#FFD700] font-bold">If you're serious, apply below.</span>
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gradient-to-b from-[#1a1a2e] to-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-200 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-200 mb-2">
                  Company/Business Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your Company Name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="monthlyRevenue" className="block text-sm font-semibold text-gray-200 mb-2">
                Current Monthly Revenue *
              </label>
              <select
                id="monthlyRevenue"
                name="monthlyRevenue"
                required
                value={formData.monthlyRevenue}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                <option value="">Select Range</option>
                <option value="under-100k">Under $100k (not yet qualified)</option>
                <option value="100k-250k">$100k - $250k</option>
                <option value="250k-500k">$250k - $500k</option>
                <option value="500k-1m">$500k - $1M</option>
                <option value="1m-plus">$1M+</option>
              </select>
            </div>

            <div>
              <label htmlFor="businessType" className="block text-sm font-semibold text-gray-200 mb-2">
                Business Type *
              </label>
              <select
                id="businessType"
                name="businessType"
                required
                value={formData.businessType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                <option value="">Select Type</option>
                <option value="coach">High-Ticket Coach</option>
                <option value="consultant">Business Consultant</option>
                <option value="course-creator">Online Course Creator</option>
                <option value="service-business">Service Business</option>
                <option value="product-business">Product Business</option>
                <option value="saas">SaaS Company</option>
                <option value="agency">Agency</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="biggestChallenge" className="block text-sm font-semibold text-gray-200 mb-2">
                What's your biggest marketing challenge right now? *
              </label>
              <textarea
                id="biggestChallenge"
                name="biggestChallenge"
                required
                value={formData.biggestChallenge}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Tell us what you're struggling with most in your marketing..."
              />
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-sm text-gray-300">
                By submitting this form, you agree to be contacted by Mind Your Business Media regarding
                our marketing services. We typically respond within 24-48 hours. We respect your privacy
                and will never share your information.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#8B0000] border-2 border-[#FFD700] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#a00000] transition-all"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>
            Why Partner With Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-gradient-to-b from-[#1a1a2e] to-black p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-white mb-4">Guaranteed Results</h3>
              <p className="text-gray-300">
                30% revenue increase in year 1 or we work for free. No other agency backs their work like this.
              </p>
            </div>
            <div className="bg-gradient-to-b from-[#1a1a2e] to-black p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-white mb-4">High-Ticket Specialists</h3>
              <p className="text-gray-300">
                We exclusively work with high-ticket businesses. We understand premium positioning and sophisticated buyers.
              </p>
            </div>
            <div className="bg-gradient-to-b from-[#1a1a2e] to-black p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-white mb-4">Complete Execution</h3>
              <p className="text-gray-300">
                We don't just create strategies—we execute everything. Your entire marketing function, handled.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
