"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SkylineDivider from "@/components/SkylineDivider";

export default function SaaSPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Marketing for B2B SaaS Companies
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Scale your SaaS from $1M to $10M+ ARR with proven demand generation, product marketing,
              and growth strategies.
            </p>
            <Link href="/apply" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 inline-block">
              Scale Your SaaS
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">SaaS Growth Challenges</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">High CAC, Low LTV</h3>
              <p className="text-gray-600">Spending too much to acquire customers who churn before you break even. Unit economics don't work.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Long Sales Cycles</h3>
              <p className="text-gray-600">Enterprise sales take 6-12 months. Need sophisticated nurture and multi-stakeholder selling.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Commoditization Risk</h3>
              <p className="text-gray-600">Features can be copied. Need differentiation through brand, positioning, and category creation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-[#8B0000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our SaaS Marketing Approach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">Product-Led Growth (PLG)</h3>
              <p className="text-gray-200">Free trials, freemium models, and product virality to reduce CAC and accelerate growth.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">Enterprise Demand Gen</h3>
              <p className="text-gray-200">ABM, LinkedIn campaigns, and intent data to target and close enterprise accounts.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">Content & SEO</h3>
              <p className="text-gray-200">Rank for bottom-funnel keywords and establish thought leadership in your category.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">Customer Marketing</h3>
              <p className="text-gray-200">Reduce churn, increase expansion revenue, and build referral programs from happy customers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">SaaS Categories We Scale</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Marketing & Sales SaaS</h3>
              <p className="text-sm text-gray-600">CRM, marketing automation, sales enablement</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Productivity & Collaboration</h3>
              <p className="text-sm text-gray-600">Project management, communication, workflow tools</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">HR & Recruiting SaaS</h3>
              <p className="text-sm text-gray-600">HRIS, ATS, performance management</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">FinTech & Payments</h3>
              <p className="text-sm text-gray-600">Accounting, payments, financial management</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Development & Infrastructure</h3>
              <p className="text-sm text-gray-600">DevOps, cloud infrastructure, API platforms</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Vertical SaaS</h3>
              <p className="text-sm text-gray-600">Industry-specific software platforms</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Scale Your SaaS?</h2>
          <p className="text-xl mb-8">If you're doing $1M+ ARR and ready for predictable growth, let's talk.</p>
          <Link href="/apply" className="inline-block bg-blue-600 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-blue-700">
            Apply for Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
