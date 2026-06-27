import type { Metadata } from "next";
import { Bodoni_Moda, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTABar } from "@/components/MobileCTABar";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Mexican Food in Alexandria, LA`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Pedro's Tacos",
    "Mexican restaurant Alexandria LA",
    "tacos Alexandria Louisiana",
    "tequila bar",
    "margaritas",
    "fajitas",
  ],
  openGraph: {
    type: "website",
    title: `${site.name} | Mexican Food in Alexandria, LA`,
    description: site.description,
    siteName: site.name,
    locale: "en_US",
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${hanken.variable} h-full`}
    >
      <body className="flex min-h-full flex-col pb-[64px] lg:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
