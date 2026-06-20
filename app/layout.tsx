import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "./components/Footer";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Master Mudra",
  description: "Professional digital payment solutions for local businesses.",
  icons: {
    icon: "/febicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${onest.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}