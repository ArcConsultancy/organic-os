import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Organic OS",
  description:
    "Your competitors shout into the void. You won’t. OrganicOS builds the content machine that makes your brand impossible to ignore — and even harder to outrank.",

  openGraph: {
    title: "Organic OS",
    description:
      "Your competitors shout into the void. You won’t. OrganicOS builds the content machine that makes your brand impossible to ignore — and even harder to outrank.",
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
      <body className={`${montserrat.variable} antialiased bg-background`}>
        {children}
      </body>
    </html>
  );
}
