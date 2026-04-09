import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contacta a Andrea Bernasconi para adquirir obras, solicitar comisiones o planificar exhibiciones. Galería de arte en Montevideo, Uruguay.',
  openGraph: {
    title: 'Contacto | Reina Artura',
    description: 'Contacta a Andrea Bernasconi para adquirir obras o solicitar comisiones.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
