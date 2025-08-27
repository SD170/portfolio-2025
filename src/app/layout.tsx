import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saswata Dutta — Portfolio",
  description: "Software Developer specializing in blockchain, web3, and full-stack development. Experience with AWS, TypeScript, React, and scalable systems.",
  keywords: ["Software Developer", "Blockchain", "Web3", "TypeScript", "React", "AWS", "Full Stack"],
  authors: [{ name: "Saswata Dutta" }],
  creator: "Saswata Dutta",
  publisher: "Saswata Dutta",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saztech.org",
    title: "Saswata Dutta — Portfolio",
    description: "Software Developer specializing in blockchain, web3, and full-stack development.",
    siteName: "Saswata Dutta Portfolio",
    images: [
      {
        url: "https://saztech.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saswata Dutta Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saswata Dutta — Portfolio",
    description: "Software Developer specializing in blockchain, web3, and full-stack development.",
    images: ["https://saztech.org/og-image.png"],
    creator: "@SD170",
  },
  alternates: {
    canonical: "https://saztech.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Saswata Dutta",
              jobTitle: "Software Developer",
              url: "https://saztech.org",
              sameAs: [
                "https://github.com/SD170",
                "https://linkedin.com/in/sd170"
              ],
              worksFor: {
                "@type": "Organization",
                name: "Intract"
              },
              knowsAbout: [
                "TypeScript", "Node.js", "Solidity", "React", "AWS", 
                "Blockchain", "Web3", "Full Stack Development"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Saswata Dutta Portfolio",
              url: "https://saztech.org",
              description: "Software Developer specializing in blockchain, web3, and full-stack development.",
              author: {
                "@type": "Person",
                name: "Saswata Dutta"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
