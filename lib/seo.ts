import { Metadata } from 'next';

export function generateMetadata({
  title,
  description,
  keywords,
  canonical,
}: {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
}): Metadata {
  const siteName = 'Mind Your Business Media';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords?.join(', '),
    authors: [{ name: siteName }],
    openGraph: {
      title: fullTitle,
      description,
      siteName,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: canonical || undefined,
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
  };
}
