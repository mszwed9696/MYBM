"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SkylineDivider from "@/components/SkylineDivider";

export default function ProductBusinessesPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "\'Georgia\', serif" }}>
              Marketing for High-Ticket Product Businesses
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Drive qualified buyers for premium products $1k-100k+. Different strategies for high-ticket sales,
              not cheap ecommerce tactics.
            </p>
            <Link href="/apply" className="bg-[#8B0000] border-2 border-[#FFD700] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#a00000] inline-block">
              Scale Your Product Business
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>High-Ticket Product Challenges</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Wrong Audience</h3>
              <p className="text-gray-600">Standard ecommerce tactics bring tire-kickers, not qualified buyers who can afford premium pricing.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Long Sales Cycles</h3>
              <p className="text-gray-600">High-ticket purchases require education, trust-building, and often sales team involvement.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Low CAC:LTV Understanding</h3>
              <p className="text-gray-600">Agencies optimize for cheap cost-per-click, not customer lifetime value. Wrong metrics.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-[#8B0000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>High-Ticket Product Marketing Strategies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">Wealth-Based Targeting</h3>
              <p className="text-gray-200">Target by income level, net worth, job titles, and buying behavior—not demographics.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">Consultation Funnels</h3>
              <p className="text-gray-200">Route high-ticket traffic to consultation requests, not direct checkout. White-glove sales process.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">Luxury Brand Positioning</h3>
              <p className="text-gray-200">Premium messaging, aspirational imagery, and exclusivity positioning that commands high prices.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">Multi-Touch Attribution</h3>
              <p className="text-gray-200">Track the 7-12 touchpoints before purchase. Optimize entire customer journey, not just last click.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>Product Categories We Scale</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Luxury Goods & Jewelry</h3>
              <p className="text-sm text-gray-600">High-end watches, jewelry, designer goods</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Industrial Equipment</h3>
              <p className="text-sm text-gray-600">Manufacturing equipment, machinery, tools</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Medical Devices</h3>
              <p className="text-sm text-gray-600">Healthcare equipment, diagnostic tools</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Commercial Vehicles</h3>
              <p className="text-sm text-gray-600">Fleet vehicles, specialty vehicles, RVs</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Premium Home Goods</h3>
              <p className="text-sm text-gray-600">Furniture, appliances, home technology</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Technology & Electronics</h3>
              <p className="text-sm text-gray-600">Professional audio/video, enterprise hardware</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "\'Georgia\', serif" }}>Ready to Scale Premium Product Sales?</h2>
          <p className="text-xl mb-8">If you're selling high-ticket products and ready for qualified buyer generation, let's talk.</p>
          <Link href="/apply" className="inline-block bg-[#8B0000] border-2 border-[#FFD700] text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-[#a00000]">
            Apply for Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
