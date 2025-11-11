import Link from "next/link";
import { generateMetadata } from "@/lib/seo";
import ResultsHero from "@/components/ResultsHero";
import SkylineDivider from "@/components/SkylineDivider";

export const metadata = generateMetadata({
  title: "Client Results & Case Studies | Marketing Agency Success Stories",
  description: "Real results from high-ticket coaches, consultants, and businesses we've scaled. See case studies showing 30%-300%+ revenue increases.",
  keywords: [
    "marketing agency results",
    "marketing case studies",
    "client success stories",
    "marketing agency testimonials",
  ],
});

export default function ResultsPage() {
  const caseStudies = [
    {
      title: "High-Ticket Business Coaching Program",
      industry: "Business Coaching",
      before: "$80k/mo",
      after: "$310k/mo",
      increase: "+287%",
      timeframe: "9 months",
      description: "Scaled from 8 clients/month to 31 clients/month at $10k average ticket through Facebook ads, automated webinar funnel, and strategic partnerships.",
      challenges: [
        "Inconsistent lead flow from referrals only",
        "No paid acquisition strategy",
        "Sales team overwhelmed with unqualified leads",
      ],
      solutions: [
        "Built application funnel with qualification quiz",
        "Launched Facebook and YouTube ads targeting business owners",
        "Implemented automated webinar for pre-selling",
        "Created partnership program with complementary coaches",
      ],
      results: [
        "31 new clients per month (up from 8)",
        "67% application-to-close rate (up from 34%)",
        "$310k average monthly revenue",
        "Reduced cost per acquisition by 58%",
      ],
    },
    {
      title: "B2B Strategy Consulting Firm",
      industry: "Management Consulting",
      before: "$150k/mo",
      after: "$385k/mo",
      increase: "+156%",
      timeframe: "12 months",
      description: "Landed 3 enterprise clients worth $500k+ each through account-based marketing, LinkedIn outreach, and thought leadership content.",
      challenges: [
        "Network-dependent lead generation",
        "Long sales cycles (6-9 months average)",
        "Difficulty breaking into enterprise accounts",
      ],
      solutions: [
        "Launched targeted ABM campaigns for Fortune 1000 companies",
        "Built CEO thought leadership platform (LinkedIn + articles)",
        "Created executive briefing program",
        "Developed strategic partnership with PE firm",
      ],
      results: [
        "3 enterprise clients signed ($500k-700k each)",
        "45 qualified discovery calls per quarter",
        "$385k average monthly revenue",
        "Sales cycle reduced to 4.5 months average",
      ],
    },
    {
      title: "Online Course Creator (Business Training)",
      industry: "Course Creation",
      before: "$120k/mo",
      after: "$372k/mo",
      increase: "+210%",
      timeframe: "11 months",
      description: "Launched $15k group program with automated evergreen funnel generating consistent enrollments without live launches.",
      challenges: [
        "Revenue roller coaster from launches",
        "Burnout from constant live webinars",
        "Low email list engagement",
      ],
      solutions: [
        "Created $15k group coaching tier (previously only $2k course)",
        "Built evergreen VSL funnel for automated selling",
        "Launched YouTube organic content strategy",
        "Implemented sophisticated email segmentation and nurture",
      ],
      results: [
        "24-28 students enrolling monthly in $15k program",
        "Evergreen funnel generating $280k-320k/mo",
        "YouTube channel generating 40% of new leads",
        "87% reduction in live launch workload",
      ],
    },
    {
      title: "Fractional CFO Practice",
      industry: "Financial Consulting",
      before: "$110k/mo",
      after: "$333k/mo",
      increase: "+203%",
      timeframe: "10 months",
      description: "Scaled from 11 to 37 monthly retainer clients through LinkedIn lead generation and strategic content marketing.",
      challenges: [
        "Difficulty explaining value proposition",
        "Competing with full-time CFO hires",
        "Long sales cycles and price objections",
      ],
      solutions: [
        "Repositioned messaging around CFO outcomes vs. activities",
        "Built LinkedIn authority platform (3x posts/week + outreach)",
        "Created \"CFO Scorecard\" lead magnet",
        "Developed case study library showing ROI",
      ],
      results: [
        "37 active retainer clients (up from 11)",
        "$9k average monthly retainer",
        "72% of leads from LinkedIn (organic + paid)",
        "84% client retention rate",
      ],
    },
    {
      title: "Leadership Coaching & Masterminds",
      industry: "Executive Coaching",
      before: "$95k/mo",
      after: "$295k/mo",
      increase: "+210%",
      timeframe: "11 months",
      description: "Filled 12-month mastermind program at $25k/person and scaled 1-on-1 executive coaching pipeline.",
      challenges: [
        "Mastermind not filling consistently",
        "Difficulty reaching C-suite executives",
        "High cost per lead from cold advertising",
      ],
      solutions: [
        "Created executive briefing series targeting VPs and C-suite",
        "Launched LinkedIn ads + retargeting campaigns",
        "Built referral incentive program for current clients",
        "Implemented application funnel with video testimonials",
      ],
      results: [
        "12-month mastermind filled (24 members at $25k)",
        "18 active 1-on-1 clients at $3.5k/mo average",
        "Cost per qualified lead reduced 64%",
        "Waitlist of 11 for next mastermind cohort",
      ],
    },
    {
      title: "HR & Talent Consulting Firm",
      industry: "HR Consulting",
      before: "$135k/mo",
      after: "$375k/mo",
      increase: "+178%",
      timeframe: "11 months",
      description: "Built thought leadership platform generating 40+ qualified leads monthly for high-ticket HR transformation services.",
      challenges: [
        "Viewed as commodity service provider",
        "Price pressure from larger firms",
        "Inconsistent lead generation",
      ],
      solutions: [
        "Launched \"Future of Work\" thought leadership platform",
        "Published research report (gated lead magnet)",
        "Speaking engagements at HR conferences",
        "Strategic partnerships with compensation software companies",
      ],
      results: [
        "40-50 qualified leads per month",
        "9 retained clients for $20k-60k projects",
        "Featured in 3 major HR publications",
        "Average project value increased from $35k to $67k",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section - Vegas Strip (Winner's Row) */}
      <ResultsHero />

      {/* Skyline Divider */}
      <div className="relative -mt-1">
        <SkylineDivider className="text-white" />
      </div>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#FFD700] mb-2" style={{ fontFamily: "\'Georgia\', serif" }}>87%</div>
              <div className="text-gray-700">Average Revenue Increase Year 1</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#FFD700] mb-2" style={{ fontFamily: "\'Georgia\', serif" }}>100%</div>
              <div className="text-gray-700">Clients Hit 30% Guarantee</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#FFD700] mb-2" style={{ fontFamily: "\'Georgia\', serif" }}>$18M+</div>
              <div className="text-gray-700">Revenue Added for Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#FFD700] mb-2" style={{ fontFamily: "\'Georgia\', serif" }}>9.2</div>
              <div className="text-gray-700">Average Month to ROI Positive</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>
            Client Case Studies
          </h2>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-[#1a1a2e] to-black text-white p-8">
                  <div className="flex flex-wrap items-center justify-between mb-4">
                    <div>
                      <div className="text-sm font-semibold text-blue-200 mb-2">{study.industry}</div>
                      <h3 className="text-3xl font-bold">{study.title}</h3>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-lg mt-4 md:mt-0">
                      <div className="text-5xl font-bold text-green-300" style={{ fontFamily: "\'Georgia\', serif" }}>{study.increase}</div>
                      <div className="text-sm text-gray-200">Revenue Growth</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-blue-200">Before</div>
                      <div className="text-xl font-bold">{study.before}</div>
                    </div>
                    <div>
                      <div className="text-blue-200">After</div>
                      <div className="text-xl font-bold">{study.after}</div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-lg text-gray-700 mb-8">{study.description}</p>

                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Challenges</h4>
                      <ul className="space-y-2">
                        {study.challenges.map((challenge, i) => (
                          <li key={i} className="flex items-start text-gray-700">
                            <span className="text-red-500 mr-2">•</span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Solutions</h4>
                      <ul className="space-y-2">
                        {study.solutions.map((solution, i) => (
                          <li key={i} className="flex items-start text-gray-700">
                            <span className="text-blue-500 mr-2">→</span>
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start text-gray-700">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-sm text-gray-500">Timeframe: {study.timeframe}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-[#8B0000] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "\'Georgia\', serif" }}>
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            If you're doing $100k+ monthly and ready for guaranteed growth, let's talk.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-white text-[#FFD700] px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all"
          >
            Apply for Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
