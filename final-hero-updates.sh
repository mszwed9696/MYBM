#!/bin/bash
# Add full hero cityscapes to remaining simple pages

# Course creators
echo "Updating course-creators..."
sed -i '' 's|<section className="py-20 bg-gradient-to-br from-\[#2a1a4a\] via-\[#1a1a2e\] to-black text-white">|<section className="relative py-20 bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-black text-white overflow-hidden">\
        <div className="absolute inset-0 z-0">\
          <img src="/heroes/Gemini_Generated_Image_6u49bp6u49bp6u49.png" alt="Cityscape" className="w-full h-full object-cover" style={{ objectPosition: "center center" }} />\
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a4a]/60 via-[#1a1a2e]/50 to-black/70"></div>\
        </div>\
|g' app/industries/course-creators/page.tsx

# Service businesses
echo "Updating service-businesses..."
sed -i '' 's|<section className="py-20 bg-gradient-to-br from-\[#2a1a4a\] via-\[#1a1a2e\] to-black text-white">|<section className="relative py-20 bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-black text-white overflow-hidden">\
        <div className="absolute inset-0 z-0">\
          <img src="/heroes/Gemini_Generated_Image_951cpn951cpn951c.png" alt="Cityscape" className="w-full h-full object-cover" style={{ objectPosition: "center center" }} />\
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a4a]/60 via-[#1a1a2e]/50 to-black/70"></div>\
        </div>\
|g' app/industries/service-businesses/page.tsx

# Product businesses
echo "Updating product-businesses..."
sed -i '' 's|<section className="py-20 bg-gradient-to-br from-\[#2a1a4a\] via-\[#1a1a2e\] to-black text-white">|<section className="relative py-20 bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-black text-white overflow-hidden">\
        <div className="absolute inset-0 z-0">\
          <img src="/heroes/Gemini_Generated_Image_an9k1ian9k1ian9k.png" alt="Cityscape" className="w-full h-full object-cover" style={{ objectPosition: "center center" }} />\
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a4a]/60 via-[#1a1a2e]/50 to-black/70"></div>\
        </div>\
|g' app/industries/product-businesses/page.tsx

# SaaS
echo "Updating saas..."
sed -i '' 's|<section className="py-20 bg-gradient-to-br from-\[#2a1a4a\] via-\[#1a1a2e\] to-black text-white">|<section className="relative py-20 bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-black text-white overflow-hidden">\
        <div className="absolute inset-0 z-0">\
          <img src="/heroes/Gemini_Generated_Image_aopvueaopvueaopv.png" alt="Cityscape" className="w-full h-full object-cover" style={{ objectPosition: "center center" }} />\
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a4a]/60 via-[#1a1a2e]/50 to-black/70"></div>\
        </div>\
|g' app/industries/saas/page.tsx

# Blog
echo "Updating blog..."
sed -i '' 's|<section className="py-20 bg-gradient-to-br from-\[#2a1a4a\] via-\[#1a1a2e\] to-black text-white">|<section className="relative py-20 bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-black text-white overflow-hidden">\
        <div className="absolute inset-0 z-0">\
          <img src="/heroes/Gemini_Generated_Image_dipn3bdipn3bdipn.png" alt="Cityscape" className="w-full h-full object-cover" style={{ objectPosition: "center center" }} />\
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a4a]/60 via-[#1a1a2e]/50 to-black/70"></div>\
        </div>\
|g' app/blog/page.tsx

# Privacy
echo "Updating privacy..."
sed -i '' 's|<div className="container mx-auto px-4 py-20">|<section className="relative py-20 bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-black overflow-hidden">\
        <div className="absolute inset-0 z-0">\
          <img src="/heroes/Gemini_Generated_Image_dlodzvdlodzvdlod.png" alt="Cityscape" className="w-full h-full object-cover" style={{ objectPosition: "center center" }} />\
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a4a]/60 via-[#1a1a2e]/50 to-black/70"></div>\
        </div>\
        <div className="container mx-auto px-4 py-20 relative z-10">|g' app/privacy/page.tsx

# Terms
echo "Updating terms..."
sed -i '' 's|<div className="container mx-auto px-4 py-20">|<section className="relative py-20 bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-black overflow-hidden">\
        <div className="absolute inset-0 z-0">\
          <img src="/heroes/Gemini_Generated_Image_dy38gmdy38gmdy38.png" alt="Cityscape" className="w-full h-full object-cover" style={{ objectPosition: "center center" }} />\
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a4a]/60 via-[#1a1a2e]/50 to-black/70"></div>\
        </div>\
        <div className="container mx-auto px-4 py-20 relative z-10">|g' app/terms/page.tsx

echo "✅ All remaining pages updated with hero cityscapes!"
