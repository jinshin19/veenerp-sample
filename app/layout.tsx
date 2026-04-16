import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "veenERP — The All-in-One ERP Platform for Growing Businesses",
  description:
    "Automate operations, streamline workflows, and gain real-time insights with veenERP. The modern, modular ERP platform trusted by businesses worldwide.",
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
    title: "veenERP — The All-in-One ERP Platform",
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
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
