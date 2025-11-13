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
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6 text-[#FFD700]">🤝</div>
          <h1 className="text-5xl font-bold mb-6">
            Welcome To <span className="text-[#FFD700]">The Family</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Your application has been received. We will review it within 24-48 hours.
          </p>
          <Link href="/" className="inline-block bg-[#8B0000] border-2 border-[#FFD700] text-white px-10 py-5 rounded-lg font-bold hover:bg-[#a00000]">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-black text-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-8 text-center">Apply for Partnership</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 p-8 rounded-xl">
          <div>
            <label className="block text-sm font-bold mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Email *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400"
              placeholder="john@company.com"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Phone *</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400"
              placeholder="(555) 123-4567"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Company Name *</label>
            <input
              type="text"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400"
              placeholder="Your Company LLC"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Current Monthly Revenue *</label>
            <select
              name="monthlyRevenue"
              required
              value={formData.monthlyRevenue}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white"
            >
              <option value="" className="text-gray-900">Select revenue range</option>
              <option value="100k-250k" className="text-gray-900">$100k - $250k/month</option>
              <option value="250k-500k" className="text-gray-900">$250k - $500k/month</option>
              <option value="500k-1m" className="text-gray-900">$500k - $1M/month</option>
              <option value="1m+" className="text-gray-900">$1M+/month</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Business Type *</label>
            <select
              name="businessType"
              required
              value={formData.businessType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white"
            >
              <option value="" className="text-gray-900">Select business type</option>
              <option value="coach" className="text-gray-900">Coach</option>
              <option value="consultant" className="text-gray-900">Consultant</option>
              <option value="course-creator" className="text-gray-900">Course Creator</option>
              <option value="service-business" className="text-gray-900">Service Business</option>
              <option value="product-business" className="text-gray-900">Product Business</option>
              <option value="saas" className="text-gray-900">SaaS</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Biggest Marketing Challenge *</label>
            <textarea
              name="biggestChallenge"
              required
              value={formData.biggestChallenge}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400"
              placeholder="Describe your biggest challenge..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#8B0000] border-2 border-[#FFD700] text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-[#a00000] transition-all"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
