'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import Price from '@/components/ui/Price';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();
  const isClassical = product.category === 'classical';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="group"
    >
      {/* Card with elegant frame - lilac */}
      <div className="relative rounded-lg overflow-hidden transition-all duration-500 hover:-translate-y-2">
        {/* Lilac wood-like frame */}
        <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-br from-lilac-dark via-lilac to-lilac-light opacity-70" />
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-lilac-dark/50 to-lilac/30" />
        
        {/* Card inner */}
        <div className="relative rounded-lg overflow-hidden bg-surface">
          {/* Subtle glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#D8A0D8]/10 via-transparent to-ivory/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30" />
          
          <Link href={`/product/${product.id}`}>
            <div className="relative aspect-[4/5] overflow-hidden">
              {/* Canvas shadow for depth */}
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] z-10 pointer-events-none" />
              
              <Image
                src={product.image_url}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Featured badge - lilac */}
              {product.featured && (
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-[#D8A0D8] to-lilac-light text-ivory-light text-[10px] px-3 py-1.5 rounded-full tracking-widest uppercase font-semibold shadow-lg">
                  Destacado
                </div>
              )}
            </div>
          </Link>
          
          {/* Quick Add Button - lilac */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="absolute bottom-4 left-4 right-4 z-20 bg-gradient-to-r from-[#D8A0D8] to-lilac-light hover:from-lilac-light hover:to-[#D8A0D8] text-ivory py-3 rounded-lg text-xs tracking-widest uppercase font-bold flex items-center justify-center gap-2 transition-all duration-300 border-2 border-[#D8A0D8]/50 hover:border-[#D8A0D8]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Agregar al Carrito
          </motion.button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="mt-5 space-y-2 px-1">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-display text-lg font-medium text-ivory group-hover:text-[#D8A0D8] transition-colors duration-300 line-clamp-1">
            {product.title}
          </h3>
        </Link>

        <div className="flex items-center justify-between">
          <Price amount={product.price} size="md" />
          <span style={{ color: isClassical ? '#D8A0D8' : '#8FBC3C' }} className="text-xs capitalize tracking-wide font-medium">
            {isClassical ? 'Clásico' : 'Moderno'}
          </span>
        </div>

        <p className="text-text-secondary text-xs">
          {product.medium && `${product.medium} · `}{product.dimensions}
        </p>
      </div>
    </motion.div>
  );
}
