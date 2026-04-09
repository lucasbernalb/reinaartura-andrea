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
  title: "Reina Artura | Galería de Arte",
  description: "Galería de arte premium. Cuadros y prints de alta calidad. Arte clásico y moderno para tu hogar u oficina.",
  keywords: ["arte", "galería", "cuadros", "pinturas", "prints", "decoración"],
  openGraph: {
    title: "Reina Artura | Galería de Arte",
    description: "Galería de arte premium para tu hogar",
    type: "website",
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
