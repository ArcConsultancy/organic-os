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

export const metadata: Metadata = {
  title: "Organic OS",
  description:
    "Stop disappearing and start converting. OrganicOS plans, records, edits and publishes content on autopilot—consistent authority, measurable leads, zero guilt.",

  openGraph: {
    title: "Organic OS",
    description:
      "Stop disappearing and start converting. OrganicOS plans, records, edits and publishes content on autopilot—consistent authority, measurable leads, zero guilt.",
    url: "https://organic-os", // your full site URL
    siteName: "Organic OS",
    images: [
      {
        url: "https://budgetelec.com/images/organic-os-logo.png",
        width: 1200,
        height: 630,
        alt: "Organic OS",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
