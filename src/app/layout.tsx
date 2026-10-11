import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DOMAIN, SITE_NAME, TAGLINE, SUPPORTING_TEXT } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  title: {
    default: `${SITE_NAME} | Software House in Pakistan | AI, Web & Software Development`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SUPPORTING_TEXT,
  applicationName: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  classification: "Software development company",
  referrer: "origin-when-cross-origin",
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: DOMAIN,
    title: `${SITE_NAME} | Software House in Pakistan | AI, Web & Software Development`,
    description: SUPPORTING_TEXT,
    siteName: SITE_NAME,
    images: [{ url: "/logo.png", alt: `${SITE_NAME} software house logo` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Software House in Pakistan | AI, Web & Software Development`,
    description: SUPPORTING_TEXT,
    images: ["/logo.png"],
  },
  alternates: { canonical: DOMAIN },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: DOMAIN,
      logo: `${DOMAIN}/logo.png`,
      description: SUPPORTING_TEXT,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: DOMAIN,
      description: SUPPORTING_TEXT,
      inLanguage: "en-PK",
    },
  ];

  return (
    <html lang="en-PK" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="grow pt-16 sm:pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
