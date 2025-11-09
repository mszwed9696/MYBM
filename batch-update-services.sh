#!/bin/bash

# Funnel Optimization - Detroit Skyline
echo "Updating funnel-optimization..."
sed -i '' 's/import { motion } from "framer-motion";/import { motion } from "framer-motion";\nimport SkylineDivider from "@\/components\/SkylineDivider";/' app/services/funnel-optimization/page.tsx
sed -i '' 's/<section className="relative bg-gradient-to-br from-\[#2a1a4a\] via-\[#1a1a2e\] to-black text-white py-20 overflow-hidden">/<section className="relative bg-black text-white py-32 overflow-hidden min-h-[70vh] flex items-center">\n        {\/\* Detroit Skyline cityscape - PROMINENT hero image \*\/}\n        <div className="absolute inset-0 z-0">\n          <img src="\/heroes\/detroit-skyline.png" alt="Detroit Skyline" className="w-full h-full object-cover" \/>\n          {\/\* Light gradient overlay for text readability \*\/}\n          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a4a]\/50 via-[#1a1a2e]\/40 to-black\/60"><\/div>\n        <\/div>/' app/services/funnel-optimization/page.tsx
sed -i '' 's/className="absolute right-0 bottom-0 w-72 md:w-96 opacity-60 z-0"/className="absolute right-10 md:right-20 bottom-0 w-72 md:w-96 opacity-80 z-10"/' app/services/funnel-optimization/page.tsx
sed -i '' 's/animate={{ x: 0, opacity: 0.6 }}/animate={{ x: 0, opacity: 0.8 }}/' app/services/funnel-optimization/page.tsx
sed -i '' 's/relative z-10">/relative z-20">/' app/services/funnel-optimization/page.tsx
sed -i '' 's/textShadow: "3px 3px 6px rgba(0,0,0,0.8)"/textShadow: "3px 3px 8px rgba(0,0,0,0.9)"/' app/services/funnel-optimization/page.tsx
sed -i '' 's/text-gray-300 mb-8/text-white\/90 mb-8/' app/services/funnel-optimization/page.tsx

# Content Marketing - Portland Mountain
echo "Updating content-marketing..."
sed -i '' 's/import { motion } from "framer-motion";/import { motion } from "framer-motion";\nimport SkylineDivider from "@\/components\/SkylineDivider";/' app/services/content-marketing/page.tsx
sed -i '' 's/<section className="relative bg-gradient-to-br from-\[#2a1a4a\] via-\[#1a1a2e\] to-black text-white py-20 overflow-hidden">/<section className="relative bg-black text-white py-32 overflow-hidden min-h-[70vh] flex items-center">\n        {\/\* Portland Mountain cityscape - PROMINENT hero image \*\/}\n        <div className="absolute inset-0 z-0">\n          <img src="\/heroes\/portland-mountain.png" alt="Portland Mountain" className="w-full h-full object-cover" \/>\n          {\/\* Light gradient overlay for text readability \*\/}\n          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a4a]\/50 via-[#1a1a2e]\/40 to-black\/60"><\/div>\n        <\/div>/' app/services/content-marketing/page.tsx
sed -i '' 's/className="absolute right-0 bottom-0 w-72 md:w-96 opacity-60 z-0"/className="absolute right-10 md:right-20 bottom-0 w-72 md:w-96 opacity-80 z-10"/' app/services/content-marketing/page.tsx
sed -i '' 's/animate={{ x: 0, opacity: 0.6 }}/animate={{ x: 0, opacity: 0.8 }}/' app/services/content-marketing/page.tsx
sed -i '' 's/relative z-10">/relative z-20">/' app/services/content-marketing/page.tsx
sed -i '' 's/textShadow: "3px 3px 6px rgba(0,0,0,0.8)"/textShadow: "3px 3px 8px rgba(0,0,0,0.9)"/' app/services/content-marketing/page.tsx
sed -i '' 's/text-gray-300 mb-8/text-white\/90 mb-8/' app/services/content-marketing/page.tsx

# Marketing Automation - Detroit Skyline
echo "Updating marketing-automation..."
sed -i '' 's/import { motion } from "framer-motion";/import { motion } from "framer-motion";\nimport SkylineDivider from "@\/components\/SkylineDivider";/' app/services/marketing-automation/page.tsx
sed -i '' 's/<section className="relative bg-gradient-to-br from-\[#2a1a4a\] via-\[#1a1a2e\] to-black text-white py-20 overflow-hidden">/<section className="relative bg-black text-white py-32 overflow-hidden min-h-[70vh] flex items-center">\n        {\/\* Detroit Skyline cityscape - PROMINENT hero image \*\/}\n        <div className="absolute inset-0 z-0">\n          <img src="\/heroes\/detroit-skyline.png" alt="Detroit Skyline" className="w-full h-full object-cover" \/>\n          {\/\* Light gradient overlay for text readability \*\/}\n          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a4a]\/50 via-[#1a1a2e]\/40 to-black\/60"><\/div>\n        <\/div>/' app/services/marketing-automation/page.tsx
sed -i '' 's/className="absolute right-0 bottom-0 w-72 md:w-96 opacity-60 z-0"/className="absolute right-10 md:right-20 bottom-0 w-72 md:w-96 opacity-80 z-10"/' app/services/marketing-automation/page.tsx
sed -i '' 's/animate={{ x: 0, opacity: 0.6 }}/animate={{ x: 0, opacity: 0.8 }}/' app/services/marketing-automation/page.tsx
sed -i '' 's/relative z-10">/relative z-20">/' app/services/marketing-automation/page.tsx
sed -i '' 's/textShadow: "3px 3px 6px rgba(0,0,0,0.8)"/textShadow: "3px 3px 8px rgba(0,0,0,0.9)"/' app/services/marketing-automation/page.tsx
sed -i '' 's/text-gray-300 mb-8/text-white\/90 mb-8/' app/services/marketing-automation/page.tsx

# Marketing Strategy - Chicago Bean
echo "Updating marketing-strategy..."
sed -i '' 's/import { motion } from "framer-motion";/import { motion } from "framer-motion";\nimport SkylineDivider from "@\/components\/SkylineDivider";/' app/services/marketing-strategy/page.tsx
sed -i '' 's/<section className="relative bg-gradient-to-br from-\[#2a1a4a\] via-\[#1a1a2e\] to-black text-white py-20 overflow-hidden">/<section className="relative bg-black text-white py-32 overflow-hidden min-h-[70vh] flex items-center">\n        {\/\* Chicago Bean cityscape - PROMINENT hero image \*\/}\n        <div className="absolute inset-0 z-0">\n          <img src="\/heroes\/chicago-bean.png" alt="Chicago Bean" className="w-full h-full object-cover" \/>\n          {\/\* Light gradient overlay for text readability \*\/}\n          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a4a]\/50 via-[#1a1a2e]\/40 to-black\/60"><\/div>\n        <\/div>/' app/services/marketing-strategy/page.tsx
sed -i '' 's/className="absolute right-0 bottom-0 w-72 md:w-96 opacity-60 z-0"/className="absolute right-10 md:right-20 bottom-0 w-72 md:w-96 opacity-80 z-10"/' app/services/marketing-strategy/page.tsx
sed -i '' 's/animate={{ x: 0, opacity: 0.6 }}/animate={{ x: 0, opacity: 0.8 }}/' app/services/marketing-strategy/page.tsx
sed -i '' 's/relative z-10">/relative z-20">/' app/services/marketing-strategy/page.tsx
sed -i '' 's/textShadow: "3px 3px 6px rgba(0,0,0,0.8)"/textShadow: "3px 3px 8px rgba(0,0,0,0.9)"/' app/services/marketing-strategy/page.tsx
sed -i '' 's/text-gray-300 mb-8/text-white\/90 mb-8/' app/services/marketing-strategy/page.tsx

# Paid Advertising - Vegas Strip
echo "Updating paid-advertising..."
sed -i '' 's/import { motion } from "framer-motion";/import { motion } from "framer-motion";\nimport SkylineDivider from "@\/components\/SkylineDivider";/' app/services/paid-advertising/page.tsx
sed -i '' 's/<section className="relative bg-gradient-to-br from-\[#2a1a4a\] via-\[#1a1a2e\] to-black text-white py-20 overflow-hidden">/<section className="relative bg-black text-white py-32 overflow-hidden min-h-[70vh] flex items-center">\n        {\/\* Vegas Strip cityscape - PROMINENT hero image \*\/}\n        <div className="absolute inset-0 z-0">\n          <img src="\/heroes\/vegas-strip.png" alt="Vegas Strip" className="w-full h-full object-cover" \/>\n          {\/\* Light gradient overlay for text readability \*\/}\n          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a4a]\/50 via-[#1a1a2e]\/40 to-black\/60"><\/div>\n        <\/div>/' app/services/paid-advertising/page.tsx
sed -i '' 's/className="absolute right-0 bottom-0 w-72 md:w-96 opacity-60 z-0"/className="absolute right-10 md:right-20 bottom-0 w-72 md:w-96 opacity-80 z-10"/' app/services/paid-advertising/page.tsx
sed -i '' 's/animate={{ x: 0, opacity: 0.6 }}/animate={{ x: 0, opacity: 0.8 }}/' app/services/paid-advertising/page.tsx
sed -i '' 's/relative z-10">/relative z-20">/' app/services/paid-advertising/page.tsx
sed -i '' 's/textShadow: "3px 3px 6px rgba(0,0,0,0.8)"/textShadow: "3px 3px 8px rgba(0,0,0,0.9)"/' app/services/paid-advertising/page.tsx
sed -i '' 's/text-gray-300 mb-8/text-white\/90 mb-8/' app/services/paid-advertising/page.tsx

echo "✅ All service pages updated!"
