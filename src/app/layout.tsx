import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

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
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
