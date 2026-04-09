'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import Price from '@/components/ui/Price';

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-text-muted mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <h1 className="font-display text-3xl font-semibold text-text-primary mb-4">
            Tu carrito está vacío
          </h1>
          <p className="text-text-secondary mb-8">
            Explora nuestra colección de obras de arte únicas
          </p>
          <Link 
            href="/" 
            className="inline-block bg-accent-violet hover:bg-accent-violet-light text-text-primary px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-violet-glow"
          >
            Descubrir Colecciones
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl md:text-4xl font-semibold text-text-primary mb-8"
        >
          Tu Carrito
        </motion.h1>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">
          <div className="lg:col-span-2 space-y-6">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface-light/50 p-6 rounded-lg flex gap-6"
              >
                <Link href={`/product/${item.id}`}>
                  <div className="relative w-32 h-32 md:w-40 md:h-40 bg-surface-dark rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image_url}
                      alt={item.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link 
                        href={`/product/${item.id}`}
                        className="font-display text-lg font-medium text-text-primary hover:text-accent-violet-light transition-colors line-clamp-1"
                      >
                        {item.title}
                      </Link>
                      {item.dimensions && (
                        <p className="text-text-muted text-xs mt-1">{item.dimensions}</p>
                      )}
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-text-muted hover:text-red-400 transition-colors p-1"
                      aria-label="Eliminar producto"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>

                  <Price amount={item.price} size="md" className="mt-4 block" />

                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center border border-surface-light rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-accent-violet hover:bg-accent-violet/10 transition-colors"
                      >
                        -
                      </button>
                      <span className="w-12 text-center text-text-primary font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-accent-violet hover:bg-accent-violet/10 transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <div className="ml-auto text-right">
                      <p className="text-text-secondary text-sm">Subtotal</p>
                      <Price amount={item.price * item.quantity} size="sm" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <button
              onClick={clearCart}
              className="text-text-muted hover:text-red-400 transition-colors text-sm flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Vaciar carrito
            </button>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-surface-light/50 p-8 rounded-lg sticky top-24"
            >
              <h2 className="font-display text-xl font-semibold text-text-primary mb-6">
                Resumen del Pedido
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Subtotal ({items.length} {items.length === 1 ? 'obra' : 'obras'})</span>
                  <Price amount={total} size="sm" />
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Envío</span>
                  <span className="text-accent-violet-light">Gratis</span>
                </div>
              </div>

              <div className="border-t border-surface-light my-6 pt-6">
                <div className="flex justify-between items-center">
                  <span className="font-display text-lg font-semibold text-text-primary">Total</span>
                  <Price amount={total} size="lg" />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(139, 92, 246, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-accent-violet-light hover:bg-accent-violet text-[#080510] py-4 rounded-lg font-medium text-lg tracking-wide transition-all duration-300"
              >
                Proceder al Checkout
              </motion.button>

              <p className="text-text-muted text-xs text-center mt-4">
                *Impuestos incluidos. Envío gratis a Montevideo y Interior.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}