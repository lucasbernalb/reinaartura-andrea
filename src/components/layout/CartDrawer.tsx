'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import Price from '@/components/ui/Price';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, total } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-surface border-l border-surface-frame flex flex-col rounded-l-lg z-50"
          >
            <div className="flex items-center justify-between p-6 border-b border-surface-frame">
              <h2 className="font-display text-2xl font-semibold text-ivory">
                Tu Carrito
              </h2>
              <button
                onClick={closeCart}
                className="p-2 text-ivory/60 hover:text-olive-light transition-colors cursor-pointer"
                aria-label="Cerrar carrito"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-16">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-surface-hover mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ strokeWidth: '0.5' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <p className="text-ivory/60 mb-3">Tu carrito está vacío</p>
                  <p className="text-ivory/40 text-sm">Explora nuestras obras exclusivas</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div 
                      key={item.id} 
                      className="flex gap-4 bg-surface-elevated/50 p-4 rounded-lg border border-surface-frame"
                    >
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-surface-frame">
                        <Image
                          src={item.image_url}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link 
                          href={`/product/${item.id}`}
                          onClick={closeCart}
                          className="text-ivory font-medium text-sm hover:text-olive-light transition-colors line-clamp-1"
                        >
                          {item.title}
                        </Link>
                        <Price amount={item.price} size="sm" className="mt-1 text-olive-light block" />
                        <div className="flex items-center gap-3 mt-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 border border-surface-frame hover:border-olive hover:text-olive rounded-lg flex items-center justify-center text-ivory/60 transition-colors cursor-pointer text-sm"
                          >
                            −
                          </button>
                          <span className="text-ivory text-sm w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 border border-surface-frame hover:border-olive hover:text-olive rounded-lg flex items-center justify-center text-ivory/60 transition-colors cursor-pointer text-sm"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="ml-auto text-ivory/40 hover:text-red-400 transition-colors text-xs cursor-pointer"
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-surface-frame">
                {/* Olive divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-olive/30 to-transparent mb-6" />
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-ivory/60">Total</span>
                  <Price amount={total} size="md" />
                </div>
                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="block w-full bg-gradient-to-r from-ivory to-ivory-light hover:shadow-[0_4px_20px_rgba(245,240,230,0.3)] text-olive-dark py-4 rounded-lg font-medium text-center text-sm tracking-wider uppercase transition-all duration-300 border border-olive/30"
                >
                  Ver Carrito Completo
                </Link>
                <p className="text-ivory/40 text-xs text-center mt-4">
                  Envío gratis en Montevideo y Interior
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
