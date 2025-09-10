import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { Funnel_Display } from 'next/font/google';

const funnel = Funnel_Display({ subsets: ['latin'], weight: ['300','400','500','700', '800'], variable: '--font-funnel' });

export const metadata: Metadata = {
  title: {
    default: "David Urbano - Software Engineer & Web Developer",
    template: "%s | David Urbano"
  },
  description: "Software Engineer and Web Developer from Lima, Peru. Specialized in React, Next.js, TypeScript, and modern web technologies. Check out my portfolio and projects.",
  keywords: ["David Urbano", "Software Engineer", "Web Developer", "React", "Next.js", "TypeScript", "Lima Peru", "Frontend Developer"],
  authors: [{ name: "David Urbano", url: "https://davidurbano.dev" }],
  creator: "David Urbano",
  metadataBase: new URL("https://davidurbano.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://davidurbano.dev",
    title: "David Urbano - Software Engineer & Web Developer",
    description: "Software Engineer and Web Developer from Lima, Peru. Specialized in React, Next.js, TypeScript, and modern web technologies.",
    siteName: "David Urbano Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "David Urbano - Software Engineer & Web Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "David Urbano - Software Engineer & Web Developer", 
    description: "Software Engineer and Web Developer from Lima, Peru.",
    creator: "@da_lo_wa",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "tu-google-verification-code", // Agregar cuando tengas Google Search Console
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-black-dalowa flex flex-col items-center ${funnel.className}`}
      >
        <Navbar />
        <main className="px-5 pt-24 pb-5">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
