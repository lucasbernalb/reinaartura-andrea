'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { getProductById } from '@/data/mockProducts';
import { mockProducts } from '@/data/mockProducts';
import Price from '@/components/ui/Price';
import ProductCard from '@/components/product/ProductCard';

export default function ProductDetail() {
  const params = useParams();
  const { addItem } = useCart();
  const product = getProductById(params.id as string);

  const relatedProducts = product 
    ? mockProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)
    : [];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
            <h1 className="font-display text-3xl font-semibold text-ivory mb-4">
            Obra no encontrada
          </h1>
          <Link href="/" className="text-accent-violet-light hover:text-accent-violet transition-colors">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <Link 
          href="/" 
              className="inline-flex items-center text-ivory/70 hover:text-[#D8A0D8] transition-colors mb-8"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          Volver a colecciones
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-[#1a1412] border border-[#D8A0D8]/20">
              <Image
                src={product.image_url}
                alt={product.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {product.featured && (
                <div className="absolute top-4 left-4 bg-[#D8A0D8] text-[#0a0808] text-xs px-3 py-1 rounded-full font-medium">
                  Destacado
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-4">
              <span className="text-[#D8A0D8] text-sm tracking-wide uppercase font-medium">
                {product.category === 'classical' ? 'Arte Clásico' : 'Arte Moderno'}
                {product.medium && ` · ${product.medium}`}
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl font-semibold text-text-primary mb-6">
              {product.title}
            </h1>

            <Price amount={product.price} size="lg" className="mb-6 block" />

            <p className="text-ivory/70 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="space-y-3 text-sm text-ivory/70 mb-8">
              {product.dimensions && (
                <div className="flex justify-between">
                  <span>Dimensiones</span>
                    <span className="text-ivory">{product.dimensions}</span>
                </div>
              )}
              {product.year && (
                <div className="flex justify-between">
                  <span>Año</span>
                    <span className="text-ivory">{product.year}</span>
                </div>
              )}
              {product.medium && (
                <div className="flex justify-between">
                  <span>Técnica</span>
                    <span className="text-ivory capitalize">{product.medium}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Disponibilidad</span>
                <span className={product.in_stock ? 'text-green-400' : 'text-red-400'}>
                  {product.in_stock ? `En stock (${product.stock_quantity} disponible${(product.stock_quantity ?? 0) > 1 ? 's' : ''})` : 'Agotado'}
                </span>
              </div>
            </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(216, 160, 216, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => addItem(product)}
                disabled={!product.in_stock}
                className="w-full bg-[#D8A0D8] hover:bg-[#D8A0D8]/90 text-[#0a0808] py-4 px-8 rounded-lg font-medium text-lg tracking-wide transition-all duration-300 disabled:bg-[#1a1412] disabled:text-ivory/50 disabled:cursor-not-allowed border border-[#D8A0D8]/20"
              >
              {product.in_stock ? 'Agregar al Carrito' : 'No Disponible'}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="bg-[#1a1412]/50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-semibold text-text-primary mb-8 text-center">
              Obras Relacionadas
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p, index) => (
                <ProductCard key={p.id} product={p} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}