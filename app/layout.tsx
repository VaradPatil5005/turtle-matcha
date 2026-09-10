import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Turtle Matcha | Indiranagar's Only Matcha Cafe — Bengaluru",
  description:
    "Ceremonial matcha and roasted hojicha cafe in Indiranagar, Bengaluru. Hand-whisked, stone-ground, pet-friendly community space.",
  keywords: [
    "Turtle Matcha",
    "Matcha Cafe Indiranagar",
    "Matcha Bengaluru",
    "Hojicha Bengaluru",
    "Ceremonial Matcha",
    "Indiranagar Cafe",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${anton.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FFFFFF] text-[#000000] antialiased selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
