import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-sans", subsets: ["latin", "cyrillic"] });
const playfair = Playfair_Display({ variable: "--font-serif", subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "TeleDent.help â€” Dental guidance, wherever you are",
  description: "AI-assisted remote dental consultations with professional oversight and clear next steps.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${manrope.variable} ${playfair.variable}`}>{children}</body></html>;
}

