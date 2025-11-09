#!/usr/bin/env python3
"""
Script to update industry pages with mobster theme
"""

industry_configs = {
    "consultants": {
        "character": "boss-city-hall.png",
        "character_name": "The Boss",
        "emoji": "👔",
        "title": "Build A Consulting Practice<br /><span class=\"text-[#FFD700]\">Nobody Can Touch</span>",
        "subtitle": "Stop chasing clients. Position yourself as the authority everyone wants to work with.<span class=\"text-[#FFD700] font-bold\"> Premium clients. Premium fees. No competition.</span>"
    },
    "course-creators": {
        "character": "driver-vintage-car.png",
        "character_name": "The Driver",
        "emoji": "🎓",
        "title": "Scale Your Course Business<br /><span class=\"text-[#FFD700]\">To 7-Figure Revenue</span>",
        "subtitle": "Stop launching to crickets. Build a marketing machine that fills your courses month after month.<span class=\"text-[#FFD700] font-bold\"> Predictable launches. Consistent revenue.</span>"
    },
    "service-businesses": {
        "character": "partner-contractor.png",
        "character_name": "The Partner",
        "emoji": "🏗️",
        "title": "Dominate Your Market<br /><span class=\"text-[#FFD700]\">With Service Business Marketing</span>",
        "subtitle": "Stop competing on price. Build a brand that commands premium rates and attracts ideal clients.<span class=\"text-[#FFD700] font-bold\"> Authority positioning. Premium pricing.</span>"
    },
    "product-businesses": {
        "character": "bagman-money.png",
        "character_name": "The Bagman",
        "emoji": "📦",
        "title": "Sell Premium Products<br /><span class=\"text-[#FFD700]\">At Premium Prices</span>",
        "subtitle": "Stop discounting. Build a brand that justifies premium pricing and attracts buyers who appreciate quality.<span class=\"text-[#FFD700] font-bold\"> High margins. High AOV. High respect.</span>"
    },
    "saas": {
        "character": "enforcer-statue.png",
        "character_name": "The Enforcer",
        "emoji": "💻",
        "title": "Scale Your SaaS<br /><span class=\"text-[#FFD700]\">From $1M to $10M ARR</span>",
        "subtitle": "Stop bleeding cash on inefficient acquisition. Build a customer acquisition engine that scales profitably.<span class=\"text-[#FFD700] font-bold\"> Lower CAC. Higher LTV. Sustainable growth.</span>"
    }
}

import re

for industry, config in industry_configs.items():
    file_path = f"app/industries/{industry}/page.tsx"

    try:
        with open(file_path, 'r') as f:
            content = f.read()

        # Replace imports and add "use client"
        new_header = '''\"use client\";

import Link from \"next/link\";
import { motion } from \"framer-motion\";

export default function'''

        # Find the component name
        match = re.search(r'export default function (\w+)', content)
        if match:
            component_name = match.group(1)

            # Create new hero section
            new_hero = f'''      {{/* Hero */}}
      <section className=\"relative bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-black text-white py-20 overflow-hidden\">
        {{/* {config['character_name']} character */}}
        <motion.div
          className=\"absolute right-0 bottom-0 w-64 md:w-80 opacity-60 z-0\"
          initial={{{{ x: 100, opacity: 0 }}}}
          animate={{{{ x: 0, opacity: 0.6 }}}}
          transition={{{{ duration: 1 }}}}
        >
          <img src=\"/characters/{config['character']}\" alt=\"{config['character_name']}\" className=\"w-full h-auto\" />
        </motion.div>

        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10\">
          <div className=\"max-w-4xl\">
            <motion.div
              className=\"inline-block mb-4 px-6 py-3 border-2 border-[#FFD700] rounded-full text-[#FFD700] text-sm font-bold tracking-wide\"
              style={{{{ fontFamily: \"'Georgia', serif\" }}}}
              initial={{{{ opacity: 0, y: -20 }}}}
              animate={{{{ opacity: 1, y: 0 }}}}
              transition={{{{ duration: 0.6 }}}}
            >
              {config['emoji']} FOR {industry.upper().replace('-', ' ')} {config['emoji']}
            </motion.div>
            <motion.h1
              className=\"text-5xl md:text-6xl font-bold mb-6 leading-tight\"
              style={{{{ fontFamily: \"'Georgia', serif\", textShadow: \"3px 3px 6px rgba(0,0,0,0.8)\" }}}}
              initial={{{{ opacity: 0, y: 20 }}}}
              animate={{{{ opacity: 1, y: 0 }}}}
              transition={{{{ duration: 0.8, delay: 0.2 }}}}
            >
              {config['title']}
            </motion.h1>
            <motion.p
              className=\"text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed\"
              style={{{{ fontFamily: \"'Georgia', serif\" }}}}
              initial={{{{ opacity: 0 }}}}
              animate={{{{ opacity: 1 }}}}
              transition={{{{ duration: 0.8, delay: 0.4 }}}}
            >
              {config['subtitle']}
            </motion.p>
            <motion.div
              className=\"flex flex-col sm:flex-row gap-4\"
              initial={{{{ opacity: 0, y: 20 }}}}
              animate={{{{ opacity: 1, y: 0 }}}}
              transition={{{{ duration: 0.8, delay: 0.6 }}}}
            >
              <Link
                href=\"/apply\"
                className=\"bg-[#8B0000] border-2 border-[#FFD700] text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-[#a00000] transition-all transform hover:scale-105 shadow-lg text-center\"
                style={{{{ fontFamily: \"'Georgia', serif\" }}}}
              >
                Join The Family
              </Link>
              <Link
                href=\"/results\"
                className=\"bg-black/50 border-2 border-[#FFD700] text-[#FFD700] px-10 py-5 rounded-lg font-bold text-lg hover:bg-black/70 transition-all text-center\"
                style={{{{ fontFamily: \"'Georgia', serif\" }}}}
              >
                See The Results
              </Link>
            </motion.div>
          </div>
        </div>
      </section>'''

            # Replace old hero with new hero
            # Find the first section tag and replace up to its closing tag
            hero_pattern = r'(<div>\s*{/\* Hero \*/}\s*<section[^>]*>.*?)</section>'

            if re.search(hero_pattern, content, re.DOTALL):
                content = re.sub(
                    hero_pattern,
                    f'<div>\\n{new_hero}',
                    content,
                    count=1,
                    flags=re.DOTALL
                )

            # Replace the header
            header_pattern = r'import.*?export default function'
            content = re.sub(header_pattern, new_header, content, flags=re.DOTALL)

            # Write back
            with open(file_path, 'w') as f:
                f.write(content)

            print(f"✅ Updated {industry}")

    except FileNotFoundError:
        print(f"❌ File not found: {file_path}")
    except Exception as e:
        print(f"❌ Error updating {industry}: {e}")

print("\n🎭 Industry pages update complete!")
