import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import ThemeScript from "@/components/ThemeScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ami Rifansyah - Fullstack Developer Portfolio",
  description: "Portfolio Ami Rifansyah, seorang Fullstack Developer dengan pengalaman di Next.js, React, Node.js, dan berbagai teknologi modern.",
  keywords: ["Fullstack Developer", "Next.js", "React", "Node.js", "Portfolio", "Web Development"],
  authors: [{ name: "Ami Rifansyah" }],
  creator: "Ami Rifansyah",
  openGraph: {
    title: "Ami Rifansyah - Fullstack Developer Portfolio",
    description: "Portfolio Ami Rifansyah, seorang Fullstack Developer dengan pengalaman di Next.js, React, Node.js, dan berbagai teknologi modern.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors`}>
        <ThemeScript />
        <ThemeProvider>
          {children}
          <div className="fixed bottom-4 right-4 z-[9999] pointer-events-auto">
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
