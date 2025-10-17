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
  title: "Ami Rifansyah - Konsultan IT, Fullstack Developer, Programmer IT, Mobile Developer, Android & iOS Programmer",
  description: "Portfolio Ami Rifansyah, konsultan IT, programmer, dan fullstack developer berpengalaman di Next.js, React, Node.js, mobile development (Android & iOS), serta berbagai teknologi modern. Tersedia untuk proyek freelance, konsultasi, dan pengembangan aplikasi.",
  keywords: [
    "Ami Rifansyah", "ami", "konsultan IT", "ahli IT", "programmer IT", "Fullstack Developer", "Mobile Developer", "Android Programmer", "iOS Programmer", "Next.js", "React", "Node.js", "Portfolio", "Web Development", "IT Consultant", "Software Engineer", "Developer Indonesia", "Jasa IT", "Jasa Pembuatan Website", "Jasa Pembuatan Aplikasi", "Freelance IT", "Pengembang Aplikasi", "Portofolio IT", "Portofolio Programmer"
  ],
  authors: [{ name: "Ami Rifansyah" }],
  creator: "Ami Rifansyah",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Ami Rifansyah - Konsultan IT, Fullstack Developer, Programmer IT, Mobile Developer, Android & iOS Programmer",
    description: "Portfolio Ami Rifansyah, konsultan IT, programmer, dan fullstack developer berpengalaman di Next.js, React, Node.js, mobile development (Android & iOS), serta berbagai teknologi modern.",
    type: "website",
    url: "https://ami-rifansyah.com", // Ganti dengan domain Anda jika sudah ada
    images: [
      {
        url: "/public/file.svg", // Ganti dengan gambar profil/logo jika ada
        width: 1200,
        height: 630,
        alt: "Ami Rifansyah - Konsultan IT & Fullstack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ami Rifansyah - Konsultan IT, Fullstack Developer, Programmer IT, Mobile Developer, Android & iOS Programmer",
    description: "Portfolio Ami Rifansyah, konsultan IT, programmer, dan fullstack developer berpengalaman di Next.js, React, Node.js, mobile development (Android & iOS), serta berbagai teknologi modern.",
    creator: "@ami_rifansyah", // Ganti jika punya akun Twitter
    images: ["/public/file.svg"] // Ganti dengan gambar profil/logo jika ada
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
        {/* Struktur data JSON-LD untuk personal portfolio */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ami Rifansyah",
            "jobTitle": "Konsultan IT, Fullstack Developer, Mobile Developer",
            "url": "https://ami-rifansyah.com", // Ganti dengan domain Anda jika sudah ada
            "sameAs": [
              "https://linkedin.com/in/ami-rifansyah",
              "https://github.com/ami-rifansyah"
            ],
            "description": "Portfolio Ami Rifansyah, konsultan IT, programmer, dan fullstack developer berpengalaman di Next.js, React, Node.js, mobile development (Android & iOS), serta berbagai teknologi modern.",
            "alumniOf": "TechStart Indonesia, Digital Solutions Co.",
            "email": "ami.rifansyah@email.com"
          })
        }} />
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
