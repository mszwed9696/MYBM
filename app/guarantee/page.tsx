"use client";

import Link from "next/link";

export default function GuaranteePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold mb-8" style={{ fontFamily: "'Georgia', serif" }}>
          Our 30% Revenue Guarantee
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          We guarantee to increase your revenue by at least 30% within 12 months, or you don't pay.
        </p>
        <div className="bg-white/10 p-8 rounded-xl mb-8">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-300 mb-4">
            If we don't help you achieve at least 30% revenue growth within 12 months of working together, 
            you receive a full refund of our fees.
          </p>
        </div>
        <Link
          href="/apply"
          className="inline-block bg-[#8B0000] border-2 border-[#FFD700] text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-[#a00000] transition-all"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}
