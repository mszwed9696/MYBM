import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mind Your Business Media | Marketing Agency for $100k+/Month Businesses",
  description: "Marketing solutions for high-ticket coaches, consultants, and businesses generating $100k+ monthly. Guaranteed 30% revenue increase in year 1 or we work for free.",
  keywords: [
    "marketing agency for high ticket businesses",
    "marketing solutions for coaches",
    "marketing solutions for consultants",
    "fractional CMO for million dollar businesses",
    "high ticket marketing agency",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
