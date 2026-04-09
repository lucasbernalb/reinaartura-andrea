import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artista',
  description: 'Conoce a Andrea Bernasconi, artista visual uruguaya. Descubre su historia, filosofía artística y la pasión detrás de cada obra de Reina Artura.',
  openGraph: {
    title: 'Andrea Bernasconi - Artista | Reina Artura',
    description: 'Conoce a Andrea Bernasconi, artista visual uruguaya. Descubre su historia y filosofía artística.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
