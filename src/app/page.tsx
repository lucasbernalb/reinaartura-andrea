import type { Metadata } from "next";
import ArtExperience from '@/components/home/ArtExperience';
import ProductGrid from '@/components/product/ProductGrid';
import { getFeaturedProducts, mockProducts } from '@/data/mockProducts';

export const metadata: Metadata = {
  title: "Inicio",
  description: "Descubre colecciones exclusivas de arte premium. Cuadros originales y prints de edición limitada por Andrea Bernasconi en Reina Artura.",
  openGraph: {
    title: "Reina Artura | Galería de Arte Premium",
    description: "Descubre colecciones exclusivas de arte premium. Cuadros originales y prints de edición limitada.",
  },
};

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const classicalProducts = mockProducts.filter(p => p.category === 'classical');
  const modernProducts = mockProducts.filter(p => p.category === 'modern');

  return (
    <>
      {/* Experiencia Artística - Storytelling */}
      <ArtExperience />
      
      {/* Ecommerce - Grid de Productos */}
      <section id="destacadas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <ProductGrid
          products={featuredProducts}
          title="Obras Destacadas"
          description="Selección curada de las piezas más exclusivas de nuestra colección"
        />

        <ProductGrid
          products={classicalProducts}
          title="Arte Clásico"
          description="Pinturas tradicionales, paisajes y composiciones que evocan la elegancia del pasado"
        />

        <ProductGrid
          products={modernProducts}
          title="Arte Moderno"
          description="Obras contemporáneas y abstractas para espacios que respiran vanguardia"
        />
      </section>
    </>
  );
}