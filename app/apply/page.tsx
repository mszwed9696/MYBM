"use client";

import { useState } from "react";
import Link from "next/link";

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
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">✓</div>
          <h1 className="text-5xl font-bold mb-6">Application Received!</h1>
          <p className="text-xl text-gray-300 mb-8">
            Thank you for your interest in partnering with Mind Your Business Media. We'll review your
            application and get back to you within 24-48 hours.
          </p>
          <p className="text-lg text-gray-400 mb-8">
            If you're a good fit, we'll schedule a strategy call to discuss your business goals and how
            we can help you achieve guaranteed 30% revenue growth.
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Apply for Partnership
          </h1>
          <p className="text-xl text-gray-300">
            We're selective about who we work with. We only partner with businesses doing $100k+ monthly
            that we're confident we can grow by 30% or more.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-2">What Happens Next?</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Submit your application below (takes 2 minutes)</li>
              <li>We'll review within 24-48 hours</li>
              <li>If you're a fit, we'll schedule a strategy call</li>
              <li>On the call, we'll outline exactly how we'll grow your business</li>
              <li>If we both agree it makes sense, we start immediately</li>
            </ol>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
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
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
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
              <label htmlFor="monthlyRevenue" className="block text-sm font-semibold text-gray-700 mb-2">
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
              <label htmlFor="businessType" className="block text-sm font-semibold text-gray-700 mb-2">
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
              <label htmlFor="biggestChallenge" className="block text-sm font-semibold text-gray-700 mb-2">
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
              <p className="text-sm text-gray-600">
                By submitting this form, you agree to be contacted by Mind Your Business Media regarding
                our marketing services. We typically respond within 24-48 hours. We respect your privacy
                and will never share your information.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Partner With Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Guaranteed Results</h3>
              <p className="text-gray-600">
                30% revenue increase in year 1 or we work for free. No other agency backs their work like this.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">High-Ticket Specialists</h3>
              <p className="text-gray-600">
                We exclusively work with high-ticket businesses. We understand premium positioning and sophisticated buyers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Execution</h3>
              <p className="text-gray-600">
                We don't just create strategies—we execute everything. Your entire marketing function, handled.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
