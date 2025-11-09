"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SkylineDivider from "@/components/SkylineDivider";

export default function ServiceBusinessesPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Marketing Solutions for High-Ticket Service Businesses
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Generate qualified leads for your professional services, agency, or B2B business. Predictable
              pipeline without relying solely on referrals.
            </p>
            <Link href="/apply" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 inline-block">
              Scale Your Service Business
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Service Business Challenges</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Referral Dependency</h3>
              <p className="text-gray-600">90% of revenue from word-of-mouth. Can't scale because you can't control lead flow.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Capacity Constraints</h3>
              <p className="text-gray-600">Can only serve so many clients. Need to raise prices but lack market positioning to justify it.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Commoditization</h3>
              <p className="text-gray-600">Prospects see all service providers as the same. Competing on price instead of value.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-[#8B0000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">How We Generate Service Business Leads</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">Thought Leadership & Content</h3>
              <p className="text-gray-200">Position as industry expert through strategic content, speaking, and media placements.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">LinkedIn Lead Generation</h3>
              <p className="text-gray-200">Systematic B2B outreach and content strategy targeting decision-makers in your ideal accounts.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">Account-Based Marketing</h3>
              <p className="text-gray-200">Target specific companies with personalized campaigns to land enterprise clients.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">Strategic Partnerships</h3>
              <p className="text-gray-200">Build referral networks with complementary service providers and industry partners.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Service Types We Scale</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Marketing & Creative Agencies</h3>
              <p className="text-sm text-gray-600">Digital agencies, creative studios, media buying</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Technology Services</h3>
              <p className="text-sm text-gray-600">Development, IT services, managed services</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Legal & Accounting</h3>
              <p className="text-sm text-gray-600">Law firms, accounting firms, financial advisors</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Design & Architecture</h3>
              <p className="text-sm text-gray-600">Interior design, architecture, engineering</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Recruiting & HR</h3>
              <p className="text-sm text-gray-600">Executive search, recruiting, HR consulting</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Business Services</h3>
              <p className="text-sm text-gray-600">Operations, strategy, implementation services</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Predictable Lead Flow?</h2>
          <p className="text-xl mb-8">If you're doing $100k+ monthly and ready to scale beyond referrals, let's talk.</p>
          <Link href="/apply" className="inline-block bg-blue-600 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-blue-700">
            Apply for Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
