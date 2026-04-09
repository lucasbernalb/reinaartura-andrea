'use client';

import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { Product } from '@/types/product';

interface ProductGridProps {
  products: Product[];
  title?: string;
  description?: string;
}

export default function ProductGrid({ products, title, description }: ProductGridProps) {
  return (
    <section className="py-20 md:py-28">
      {(title || description) && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          {title && (
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-text-primary mb-5">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed-custom">
              {description}
            </p>
          )}
        </motion.div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-24">
          <p className="text-text-secondary text-lg">
            No se encontraron productos
          </p>
        </div>
      )}
    </section>
  );
}