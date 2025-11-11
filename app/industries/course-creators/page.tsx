"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SkylineDivider from "@/components/SkylineDivider";

export default function CourseCreatorsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-black text-white py-20 overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0 z-0">
          <img src="/heroes/course-creators-hero.png" alt="Cityscape" className="w-full h-full object-cover opacity-40"  loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/95 via-[#2a1a4a]/90 to-[#1a1a2e]/80"></div>
        </div>

        {/* Character image */}
        <div className="absolute right-0 bottom-0 w-80 md:w-96 lg:w-[500px] z-0">
          <img src="/characters/course-creators-character.png" alt="The Professor" className="w-full h-auto opacity-90"  loading="lazy" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight" style={{ fontFamily: "\'Georgia\', serif" }}>
              Marketing Solutions for Online Course Creators
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Stop the launch roller coaster. Build evergreen funnels that fill your courses every month
              without live launches or constant promotion.
            </p>
            <Link href="/apply" className="bg-[#8B0000] border-2 border-[#FFD700] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#a00000] inline-block">
              Scale Your Course Business
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-[#8B0000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>Our Course Marketing Services</h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">Evergreen VSL Funnels</h3>
              <p className="text-gray-200">Automated video sales letter funnels that sell your course 24/7 without you.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">Webinar Automation</h3>
              <p className="text-gray-200">Automated webinar systems with email sequences, registration optimization, and replay funnels.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">Multi-Tier Offers</h3>
              <p className="text-gray-200">Create premium tiers: self-study ($997), group coaching ($3k-5k), 1-on-1 ($10k+).</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">YouTube SEO & Growth</h3>
              <p className="text-gray-200">Organic lead generation through YouTube search optimization and authority content.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>Course Types We Scale</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Business & Marketing Courses</h3>
              <p className="text-sm text-gray-600">Entrepreneurship, marketing, sales, agency growth</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Health & Fitness Programs</h3>
              <p className="text-sm text-gray-600">Nutrition, training, wellness, transformation programs</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Financial Education</h3>
              <p className="text-sm text-gray-600">Investing, trading, real estate, wealth building</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Professional Development</h3>
              <p className="text-sm text-gray-600">Leadership, career advancement, skill development</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Creative & Design</h3>
              <p className="text-sm text-gray-600">Photography, design, video editing, creative skills</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Technology & Software</h3>
              <p className="text-sm text-gray-600">Coding, data science, AI, tech skills</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#1a1a2e] to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "\'Georgia\', serif" }}>Real Course Creator Results</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/5 p-8 rounded-xl">
              <div className="text-5xl font-bold text-[#FFD700]" style={{ fontFamily: "\'Georgia\', serif" }}>+210%</div>
              <p className="text-gray-400 mt-4">Revenue growth for course creator scaling from $120k to $372k/mo with evergreen funnel</p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl">
              <div className="text-5xl font-bold text-[#FFD700]" style={{ fontFamily: "\'Georgia\', serif" }}>$15k</div>
              <p className="text-gray-400 mt-4">Average student value after adding group coaching tier to $997 course</p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl">
              <div className="text-5xl font-bold text-[#FFD700]" style={{ fontFamily: "\'Georgia\', serif" }}>87%</div>
              <p className="text-gray-400 mt-4">Reduction in launch workload while maintaining revenue through automation</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#8B0000] via-[#2a1a4a] to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "\'Georgia\', serif" }}>Ready to Automate Your Course Sales?</h2>
          <p className="text-xl mb-8">If you're doing $100k+ monthly and ready to scale without constant launches, let's talk.</p>
          <Link href="/apply" className="inline-block bg-white text-[#FFD700] px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100">
            Apply for Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
