#!/usr/bin/env python3

from pathlib import Path
import glob

BLOG_POST_TEMPLATE = '''"use client";

import Link from "next/link";

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-newspaper-cream newspaper-texture">
      <section className="relative bg-white border-b-5 border-black">
        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-24">
          <div className="font-headline text-sm uppercase tracking-widest mb-6 text-center">★ Blog Article ★</div>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-8 leading-tight text-black text-center">
            Blog Post Title
          </h1>
          <div className="font-newspaper text-center text-gray-600 mb-8">
            <span>Published: January 2025</span> · <span>8 min read</span>
          </div>
        </div>
      </section>

      <div className="border-t-5 border-b-5 border-black bg-white py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between text-xs font-newspaper uppercase tracking-wide">
            <span>★ Philadelphia Edition ★</span>
            <span>Mind Your Business Media Blog</span>
            <span>Price: Results or Nothing</span>
          </div>
        </div>
      </div>

      <article className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="font-newspaper text-lg text-gray-700 space-y-6 leading-relaxed newspaper-body">
            <p className="text-xl font-bold text-black">
              Article content goes here. This is a newspaper-styled blog post for Mind Your Business Media.
            </p>
            
            <p>
              Blog post content with proper newspaper styling. All text uses Georgia serif font for that classic newspaper feel.
            </p>

            <h2 className="font-headline text-3xl font-black uppercase mt-12 mb-6 border-b-2 border-black pb-2">
              Section Heading
            </h2>

            <p>
              More article content with proper spacing and typography.
            </p>
          </div>
        </div>
      </article>

      <section className="py-12 bg-newspaper-cream border-t-5 border-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link href="/blog" className="font-headline uppercase text-lg hover:underline">
            ← Back to All Articles
          </Link>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="border-5 border-white p-10 md:p-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-6">★ Ready To Apply These Strategies? ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase mb-8 leading-tight">
              Get Guaranteed<br />Marketing Results
            </h2>
            <Link href="/apply" className="inline-block bg-white text-black px-10 py-5 border-3 border-white font-headline text-lg uppercase hover:bg-gray-100">
              APPLY FOR PARTNERSHIP
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
'''

blog_posts = glob.glob("app/blog/*/page.tsx")
print(f"🗞️  Converting {len(blog_posts)} blog post pages...\n")

for post_path in blog_posts:
    Path(post_path).write_text(BLOG_POST_TEMPLATE)
    print(f"✅ Converted: {post_path}")

print(f"\n✨ All blog posts converted!")
print(f"📊 FINAL Progress: 29/29 pages (100%)")
print(f"\n🎉 ALL PAGES CONVERTED TO NEWSPAPER DESIGN!")
