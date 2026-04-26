import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sales-end.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Apartment For Sale in JC Nagar, Bengaluru | Rs 42L",
    template: "%s | JC Nagar Apartment",
  },
  description:
    "Apartment for sale in JC Nagar, Bengaluru at Rs 42 lakh with current rental yield of Rs 18,500 per month including maintenance, 675 sq ft area, and 2 scooter parking.",
  keywords: [
    "apartment for sale in jc nagar",
    "property for sale in bangalore",
    "investment property bengaluru",
    "jc nagar apartment",
    "apartment near rt nagar",
    "apartment near manyata tech park",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Apartment For Sale in JC Nagar, Bengaluru | Rs 42L",
    description:
      "675 sq ft apartment with active monthly rent of Rs 18.5k including maintenance and strong connectivity to RT Nagar, MG Road, Manyata Tech Park, and upcoming Pink Line metro.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Apartment for sale in JC Nagar, Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartment For Sale in JC Nagar, Bengaluru | Rs 42L",
    description:
      "Current rent Rs 18.5k/month including maintenance, 675 sq ft, and good access to key Bengaluru commute corridors.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
