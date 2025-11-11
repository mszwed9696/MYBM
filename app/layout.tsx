import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL('https://mybm.vercel.app'),
  title: {
    default: "Mind Your Business Media | Marketing Agency for $100k+/Month Businesses",
    template: "%s | Mind Your Business Media"
  },
  description: "Marketing solutions for high-ticket coaches, consultants, and businesses generating $100k+ monthly. Guaranteed 30% revenue increase in year 1 or we work for free. Expert fractional CMO, paid advertising, and marketing strategy for scaling businesses.",
  keywords: [
    "marketing agency for high ticket businesses",
    "high ticket marketing agency",
    "marketing solutions for coaches",
    "marketing for consultants",
    "fractional CMO services",
    "fractional CMO for million dollar businesses",
    "marketing strategy for high ticket sales",
    "paid advertising for coaches",
    "marketing agency guaranteed results",
    "scale high ticket business",
    "grow 100k business",
    "marketing for six figure businesses",
    "marketing for seven figure businesses",
    "high ticket funnel optimization",
    "marketing automation for coaches",
    "B2B marketing agency",
    "high ticket sales funnel",
    "coaching business marketing",
    "consultant marketing services",
  ],
  authors: [{ name: "Mind Your Business Media" }],
  creator: "Mind Your Business Media",
  publisher: "Mind Your Business Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/myb-logo-gold.png', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mybm.vercel.app',
    siteName: 'Mind Your Business Media',
    title: 'Mind Your Business Media | Marketing Agency for $100k+/Month Businesses',
    description: 'Marketing solutions for high-ticket coaches, consultants, and businesses generating $100k+ monthly. Guaranteed 30% revenue increase in year 1 or we work for free.',
    images: [
      {
        url: '/myb-logo-gold.png',
        width: 1200,
        height: 630,
        alt: 'Mind Your Business Media - Marketing Agency for High-Ticket Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mind Your Business Media | Marketing Agency for $100k+/Month Businesses',
    description: 'Marketing solutions for high-ticket coaches, consultants, and businesses generating $100k+ monthly. Guaranteed 30% revenue increase.',
    images: ['/myb-logo-gold.png'],
    creator: '@mindyourbizmedia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://mybm.vercel.app',
  },
  category: 'business',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://mybm.vercel.app/#organization",
        "name": "Mind Your Business Media",
        "url": "https://mybm.vercel.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://mybm.vercel.app/myb-logo-gold.png",
          "width": 512,
          "height": 512
        },
        "description": "Marketing agency specializing in high-ticket businesses generating $100k+ monthly revenue. We guarantee a 30% revenue increase in year 1 or work for free.",
        "sameAs": [
          "https://facebook.com/mindyourbizmedia",
          "https://twitter.com/mindyourbizmedia",
          "https://linkedin.com/company/mindyourbizmedia",
          "https://instagram.com/mindyourbizmedia",
          "https://youtube.com/@mindyourbizmedia"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Sales",
          "url": "https://mybm.vercel.app/apply"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://mybm.vercel.app/#service",
        "name": "Mind Your Business Media",
        "image": "https://mybm.vercel.app/myb-logo-gold.png",
        "description": "Full-service marketing agency for high-ticket coaches, consultants, and businesses. Specializing in fractional CMO services, paid advertising, funnel optimization, and marketing strategy with guaranteed results.",
        "priceRange": "$$$",
        "areaServed": "Worldwide",
        "serviceType": [
          "Fractional CMO Services",
          "Marketing Strategy",
          "Paid Advertising Management",
          "Funnel Optimization",
          "Marketing Automation",
          "Content Marketing & SEO"
        ],
        "provider": {
          "@id": "https://mybm.vercel.app/#organization"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://mybm.vercel.app/#website",
        "url": "https://mybm.vercel.app",
        "name": "Mind Your Business Media",
        "publisher": {
          "@id": "https://mybm.vercel.app/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://mybm.vercel.app/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#1a1a2e" />

        {/* Performance optimization: Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-grow pt-16 sm:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
