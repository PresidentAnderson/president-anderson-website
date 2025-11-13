import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "President Anderson | Premium Brand & Productions",
  description: "President Anderson - Impresario, Producer, and Creative Visionary. Crafting exceptional experiences and premium entertainment.",
  keywords: ["President Anderson", "producer", "impresario", "entertainment", "premium brand"],
  openGraph: {
    title: "President Anderson | Premium Brand",
    description: "Impresario, Producer, and Creative Visionary",
    images: ["/logo.jpg"],
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
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
