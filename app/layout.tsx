// SLOŽKA: app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Tangerine, Tinos, Zen_Dots } from "next/font/google";
import Navbar from "./commponents/Navbar";
import Footer from "./commponents/Footer";
import "./globals.css"; // Import globálních stylů

// Nastavení fontů
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tangerine = Tangerine({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-primary",
});

const tinos = Tinos({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-secondary",
});

const zenDots = Zen_Dots({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-logo",
});

// SPRÁVNÁ metadata
export const metadata: Metadata = {
  title: "Allnat Web | Moderní a rychlé webové stránky na míru",
  description: "Tvoříme moderní, rychlé a responzivní webové stránky na míru pro vaše podnikání.",
  keywords: "webové stránky, moderní web, responzivní design, vývoj webu, web na míru",
  icons: {
    icon: "/favicon.ico", // favicon
  },
  openGraph: {
    title: "Allnat Web | Moderní a rychlé webové stránky na míru",
    description: "Tvoříme moderní, rychlé a responzivní webové stránky na míru pro vaše podnikání.",
    url: "https://www.allnatweb.cz",
    siteName: "Allnat Web",
    images: [
      {
        url: "https://www.allnatweb.cz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Allnat Web - Moderní webové stránky na míru",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Allnat Web | Moderní a rychlé webové stránky na míru",
    description: "Tvoříme moderní, rychlé a responzivní webové stránky na míru pro vaše podnikání.",
    images: ["https://www.allnatweb.cz/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="cs"
      className={`${geistSans.variable} ${geistMono.variable} ${tangerine.variable} ${tinos.variable} ${zenDots.variable}`}
    >
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
