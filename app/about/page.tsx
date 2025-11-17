"use client";

import Link from "next/link";
import ComicPanel from "@/components/ComicPanel";
import CartoonButton from "@/components/CartoonButton";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-cartoon-cream border-b-5 border-cartoon-ink overflow-hidden">
        <div className="absolute inset-0 screen-tone opacity-40"></div>

        {/* Character */}
        <div className="absolute right-8 bottom-0 w-48 md:w-64 z-10 opacity-90">
          <img
            src="/characters/don-mobster.png"
            alt="The Boss"
            className="w-full h-auto"
            style={{ filter: "grayscale(100%) contrast(1.3) drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="vintage-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6">
              WE'RE NOT LIKE
              <br />
              THE OTHER
              <br />
              FAMILIES
            </h1>
            <p className="text-2xl md:text-3xl font-mobster text-black leading-tight">
              We only work with serious players doing $100k+ monthly.
              <br />
              We guarantee results. Most can't.
            </p>
          </div>

          <ComicPanel className="max-w-4xl mx-auto">
            <p className="text-xl font-newspaper leading-relaxed text-cartoon-ink">
              <strong className="text-black">Mind Your Business Media</strong> was built on one rule: marketing agencies should answer for revenue, not vanity metrics.
              <br /><br />
              After years in the trenches—scaling high-ticket coaches, consultants, course creators, premium services—we saw the same scam everywhere.
              Agencies charging $10k-20k/month for "clicks," "impressions," "engagement." Meanwhile, their clients couldn't pay rent.
              <br /><br />
              So we built it differently. <strong className="text-black">We only take clients we know we can grow 30%+ in year one.</strong> If we don't hit that number, we work for free until we do.
            </p>
          </ComicPanel>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <CartoonButton href="/apply" variant="primary" className="text-lg px-8 py-4">
              APPLY NOW →
            </CartoonButton>
            <CartoonButton href="/guarantee" variant="gold" className="text-lg px-8 py-4">
              See Our Guarantee
            </CartoonButton>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-cartoon-ink text-cartoon-cream border-b-5 border-cartoon-ink">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-cartoon text-white mb-2">87%</div>
              <div className="text-sm font-newspaper uppercase tracking-wide">Avg Revenue Growth</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-cartoon text-white mb-2">100%</div>
              <div className="text-sm font-newspaper uppercase tracking-wide">Hit Guarantee</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-cartoon text-white mb-2">$18M+</div>
              <div className="text-sm font-newspaper uppercase tracking-wide">Revenue Added</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-cartoon text-white mb-2">50+</div>
              <div className="text-sm font-newspaper uppercase tracking-wide">Businesses Scaled</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 md:py-32 bg-cartoon-sepia border-b-5 border-cartoon-ink crosshatch">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="sound-effect mb-6">THE METHOD!</div>
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">
              OUR
              <br />
              <span className="text-black">APPROACH</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ComicPanel className="halftone-overlay">
              <h3 className="font-cartoon text-2xl font-bold uppercase mb-4 text-black border-b-3 border-cartoon-ink pb-3">
                Revenue-First
              </h3>
              <p className="font-newspaper text-cartoon-ink leading-relaxed">
                We don't care about likes, followers, or impressions. Our sole focus is increasing your net
                revenue by 30% or more.
              </p>
            </ComicPanel>

            <ComicPanel className="halftone-overlay">
              <h3 className="font-cartoon text-2xl font-bold uppercase mb-4 text-black border-b-3 border-cartoon-ink pb-3">
                High-Ticket Specialized
              </h3>
              <p className="font-newspaper text-cartoon-ink leading-relaxed">
                We exclusively work with high-ticket businesses. Different strategies, different execution,
                different results.
              </p>
            </ComicPanel>

            <ComicPanel className="halftone-overlay">
              <h3 className="font-cartoon text-2xl font-bold uppercase mb-4 text-black border-b-3 border-cartoon-ink pb-3">
                Complete Execution
              </h3>
              <p className="font-newspaper text-cartoon-ink leading-relaxed">
                We don't just create strategy decks. We execute everything: ads, funnels, content, email,
                optimization.
              </p>
            </ComicPanel>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-32 bg-cartoon-cream border-b-5 border-cartoon-ink">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="sound-effect mb-6">THE CODE!</div>
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">
              OUR
              <br />
              <span className="text-black">VALUES</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ComicPanel className="halftone-overlay">
              <h3 className="font-cartoon text-xl font-bold uppercase mb-4 text-black border-b-3 border-cartoon-ink pb-2">
                Accountability Over Activity
              </h3>
              <p className="font-newspaper text-cartoon-ink leading-relaxed">
                We measure success by revenue growth, not how busy we look. Results matter, effort doesn't.
              </p>
            </ComicPanel>

            <ComicPanel className="halftone-overlay">
              <h3 className="font-cartoon text-xl font-bold uppercase mb-4 text-black border-b-3 border-cartoon-ink pb-2">
                Truth Over Comfort
              </h3>
              <p className="font-newspaper text-cartoon-ink leading-relaxed">
                We'll tell you what you need to hear, not what you want to hear. If your offer isn't strong enough to scale, we'll say so.
              </p>
            </ComicPanel>

            <ComicPanel className="halftone-overlay">
              <h3 className="font-cartoon text-xl font-bold uppercase mb-4 text-black border-b-3 border-cartoon-ink pb-2">
                Quality Over Quantity
              </h3>
              <p className="font-newspaper text-cartoon-ink leading-relaxed">
                We work with a limited number of clients because delivering guaranteed results requires deep partnership, not surface-level service.
              </p>
            </ComicPanel>

            <ComicPanel className="halftone-overlay">
              <h3 className="font-cartoon text-xl font-bold uppercase mb-4 text-black border-b-3 border-cartoon-ink pb-2">
                Long-Term Over Quick Wins
              </h3>
              <p className="font-newspaper text-cartoon-ink leading-relaxed">
                We build sustainable marketing systems that compound over years, not gimmicks that spike for a month then crash.
              </p>
            </ComicPanel>
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="py-20 md:py-32 bg-cartoon-sepia border-b-5 border-cartoon-ink crosshatch">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="sound-effect mb-6">THE DIFFERENCE!</div>
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">
              WHY WE'RE
              <br />
              <span className="text-black">DIFFERENT</span>
            </h2>
          </div>

          <ComicPanel className="halftone-overlay mb-8">
            <p className="text-xl font-newspaper leading-relaxed text-cartoon-ink">
              This model works because we're selective (only $100k+ monthly businesses) and because we've cracked the code on scaling high-ticket offers
              across channels and industries.
              <br /><br />
              <span className="font-bold text-black text-2xl">We don't guess. We execute what works.</span>
              <br /><br />
              No other agency makes this promise because they can't deliver. We can, and we do—100% of the time.
            </p>
          </ComicPanel>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-32 bg-cartoon-ink text-cartoon-cream border-b-5 border-black relative overflow-hidden">
        <div className="absolute inset-0 halftone-bg opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <div className="sound-effect text-white mb-8">JOIN US!</div>
          <h2 className="vintage-headline text-4xl md:text-6xl lg:text-7xl text-white mb-8">
            READY TO PARTNER
            <br />
            <span className="text-white">WITH US?</span>
          </h2>
          <ComicPanel className="mb-12 bg-cartoon-cream text-cartoon-ink">
            <p className="text-xl md:text-2xl font-newspaper leading-relaxed">
              If you're doing $100k+ monthly and ready for guaranteed growth...<br /><br />
              We'll add <span className="font-black text-black">30% to your revenue in 12 months</span>.<br /><br />
              <span className="font-black text-2xl text-black">Or we work for free.</span>
            </p>
          </ComicPanel>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <CartoonButton href="/apply" variant="gold" className="text-2xl px-16 py-6">
              APPLY FOR PARTNERSHIP →
            </CartoonButton>
          </div>
        </div>
      </section>
    </>
  );
}
