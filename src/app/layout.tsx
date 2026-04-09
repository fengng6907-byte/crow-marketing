import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crow Marketing | Strategic Growth Partner",
  description: "A strategic growth partner for new brands in Singapore. We build premium brand perception and drive measurable growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
        <Navbar />
        <div className="flex-1 mt-[80px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
