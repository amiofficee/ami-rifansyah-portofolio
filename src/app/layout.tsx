import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import ThemeScript from "@/components/ThemeScript";
import { personalInfo } from "@/data/portfolio";
import { siteUrl, siteName, siteDescription } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  jobTitle: personalInfo.title,
  url: siteUrl,
  image: `${siteUrl}${personalInfo.image}`,
  email: `mailto:${personalInfo.email}`,
  sameAs: [personalInfo.linkedin, personalInfo.github, personalInfo.instagram],
  description: siteDescription,
  knowsAbout: ["Next.js", "React", "Node.js", "Laravel", "TypeScript", "Mobile Development"],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ami Rifansyah - Fullstack Developer & IT Consultant",
    template: "%s | Ami Rifansyah",
  },
  description: siteDescription,
  keywords: [
    "Ami Rifansyah", "konsultan IT", "programmer IT", "Fullstack Developer", "Mobile Developer", "Android Programmer", "iOS Programmer", "Next.js", "React", "Node.js", "Laravel", "Web Development", "IT Consultant", "Software Engineer", "Developer Indonesia", "Jasa Pembuatan Website", "Jasa Pembuatan Aplikasi", "Freelance IT", "Portofolio Programmer"
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Ami Rifansyah - Fullstack Developer & IT Consultant",
    description: siteDescription,
    type: "website",
    url: "/",
    siteName,
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ami Rifansyah - Fullstack Developer & IT Consultant",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
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
