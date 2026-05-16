import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Playfair_Display, Inter, Cormorant_Garamond, Work_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const PageLoader = dynamic(() => import("@/components/PageLoader"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#0a0808",
        zIndex: 9999,
      }}
    />
  ),
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://reinaartura.com'),
  title: {
    default: "Reina Artura | Galería de Arte Premium",
    template: "%s | Reina Artura",
  },
  description: "Galería de arte premium en Uruguay. Cuadros originales y prints de edición limitada por Andrea Bernasconi. Arte clásico y moderno para tu hogar u oficina.",
  keywords: ["arte", "galería", "cuadros", "pinturas", "prints", "decoración", "Andrea Bernasconi", "Uruguay", "Montevideo", "arte único"],
  authors: [{ name: "Andrea Bernasconi" }],
  creator: "Andrea Bernasconi",
  publisher: "Reina Artura",
  openGraph: {
    type: "website",
    locale: "es_UY",
    url: "https://reinaartura.com",
    siteName: "Reina Artura",
    title: "Reina Artura | Galería de Arte Premium",
    description: "Galería de arte premium en Uruguay. Cuadros originales y prints de edición limitada por Andrea Bernasconi.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reina Artura - Galería de Arte Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reina Artura | Galería de Arte Premium",
    description: "Galería de arte premium en Uruguay. Cuadros originales y prints de edición limitada por Andrea Bernasconi.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://reinaartura.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for ArtGallery
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ArtGallery",
    "name": "Reina Artura",
    "description": "Galería de arte premium en Uruguay. Cuadros originales y prints de edición limitada por Andrea Bernasconi.",
    "url": "https://reinaartura.com",
    "logo": "https://reinaartura.com/icon.svg",
    "image": "https://reinaartura.com/og-image.jpg",
    "founder": {
      "@type": "Person",
      "name": "Andrea Bernasconi",
      "jobTitle": "Artista Visual"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Montevideo",
      "addressCountry": "UY"
    },
    "sameAs": [
      "https://instagram.com/reinaartura",
      "https://facebook.com/reinaartura"
    ]
  };

  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable} ${cormorant.variable} ${workSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <PageLoader />
        <div style={{ animation: "pageIn 0.8s ease 4.8s forwards", opacity: 0 }}>
          <ClientLayout>{children}</ClientLayout>
        </div>
      </body>
    </html>
  );
}
