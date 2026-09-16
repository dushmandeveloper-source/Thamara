import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Thamara Foreign Employment Agency",
  description:
    "Thamara Foreign Employment Agency (Pvt) Ltd — connecting Sri Lankan job seekers with trusted employment opportunities in Kuwait, UAE, Oman, Qatar, and Bahrain.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <head>
        <noscript>
          {/* Without JS: never leave reveal content hidden, and hide the preloader */}
          <style>{`.reveal,.stagger>*{opacity:1!important;transform:none!important}.preloader{display:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col bg-white text-ink">
        <Preloader />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
