"use client";

import { motion } from "framer-motion";

export default function ResultsHero() {
  return (
    <section className="relative bg-black text-white py-32 overflow-hidden min-h-[70vh] flex items-center">
      {/* Vegas Strip cityscape - PROMINENT hero image */}
      <div className="absolute inset-0 z-0">
        <img src="/heroes/vegas-strip.png" alt="Vegas" className="w-full h-full object-cover" />
        {/* Light gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a4a]/50 via-[#1a1a2e]/40 to-black/60"></div>
      </div>

      {/* Money Stack character */}
      <motion.div
        className="absolute right-10 md:right-20 bottom-0 w-64 md:w-80 opacity-80 z-10"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 0.8 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img src="/characters/money-stack.png" alt="Money Stack" className="w-full h-auto" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          style={{ fontFamily: "'Georgia', serif", textShadow: "3px 3px 8px rgba(0,0,0,0.9)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Real Results. <span className="text-[#FFD700]">Real Revenue Growth.</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          style={{ fontFamily: "'Georgia', serif", textShadow: "2px 2px 6px rgba(0,0,0,0.8)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          These aren't cherry-picked success stories. Every client we accept gets results like these—
          <br /><span className="text-[#FFD700] font-bold">or we work for free until they do.</span>
        </motion.p>
      </div>
    </section>
  );
}
