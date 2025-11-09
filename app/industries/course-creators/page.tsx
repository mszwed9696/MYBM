"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SkylineDivider from "@/components/SkylineDivider";

export default function CourseCreatorsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "\'Georgia\', serif" }}>
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>Course Creator Challenges We Solve</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Launch Burnout</h3>
              <p className="text-gray-600">Living launch-to-launch is exhausting. Build evergreen systems that sell daily.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Low Course Prices</h3>
              <p className="text-gray-600">Stuck at $997 when you should be charging $3k-15k+. Premium positioning and packaging.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Poor Completion Rates</h3>
              <p className="text-gray-600">Students don't finish or get results. We help you add done-for-you and coaching tiers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-[#8B0000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>Our Course Marketing Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>Course Types We Scale</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "\'Georgia\', serif" }}>Real Course Creator Results</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/5 p-8 rounded-xl">
              <div className="text-5xl font-bold text-blue-400" style={{ fontFamily: "\'Georgia\', serif" }}>+210%</div>
              <p className="text-gray-400 mt-4">Revenue growth for course creator scaling from $120k to $372k/mo with evergreen funnel</p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl">
              <div className="text-5xl font-bold text-blue-400" style={{ fontFamily: "\'Georgia\', serif" }}>$15k</div>
              <p className="text-gray-400 mt-4">Average student value after adding group coaching tier to $997 course</p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl">
              <div className="text-5xl font-bold text-blue-400" style={{ fontFamily: "\'Georgia\', serif" }}>87%</div>
              <p className="text-gray-400 mt-4">Reduction in launch workload while maintaining revenue through automation</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#8B0000] via-[#2a1a4a] to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "\'Georgia\', serif" }}>Ready to Automate Your Course Sales?</h2>
          <p className="text-xl mb-8">If you're doing $100k+ monthly and ready to scale without constant launches, let's talk.</p>
          <Link href="/apply" className="inline-block bg-white text-[#FFD700] px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100">
            Apply for Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
