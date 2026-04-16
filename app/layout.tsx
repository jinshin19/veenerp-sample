import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "veenERP — Enterprise Resource Planning for Modern Business",
  description:
    "Automate operations, streamline workflows, and gain real-time insights with veenERP. The modular ERP platform trusted by 500+ businesses worldwide.",
  keywords: [
    "ERP",
    "enterprise resource planning",
    "accounting software",
    "CRM",
    "manufacturing ERP",
    "HR software",
    "POS system",
    "business automation",
  ],
  openGraph: {
    title: "veenERP — Enterprise Resource Planning",
    description: "Automate operations, streamline workflows, and gain real-time insights.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
