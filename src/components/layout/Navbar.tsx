'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { itemCount, openCart } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-surface-frame/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20 relative">
          {/* Logo container */}
          <Link 
            href="/" 
            className="relative group flex flex-col"
          >
            {/* Crown - lilac */}
            <span 
              className="absolute -top-4 left-1/2 -translate-x-1/2"
              style={{ color: '#D8A0D8', fontSize: '14px' }}
            >
              ♔
            </span>
            
            {/* Main logo text */}
            <span className="font-display text-2xl md:text-3xl font-semibold tracking-wide text-ivory group-hover:text-ivory-light transition-colors duration-300">
              Reina<span style={{ color: '#D8A0D8' }}>Artura</span>
            </span>
            
            {/* Signature - below the logo, right-aligned, lilac */}
            <span 
              className="absolute -bottom-4 left-full ml-2 font-signature whitespace-nowrap"
              style={{ color: '#D8A0D8', fontSize: '13px' }}
            >
              by Andrea Bernasconi
            </span>
          </Link>

          {/* Navigation - hover with lilac */}
          <div className="flex items-center gap-8 md:gap-10">
            <Link 
              href="/#destacadas" 
              className="hidden md:block text-ivory hover:text-[#D8A0D8] transition-colors duration-300 text-xs tracking-widest uppercase relative group py-2"
            >
              Colecciones
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D8A0D8] transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link 
              href="/about" 
              className="hidden md:block text-ivory hover:text-[#D8A0D8] transition-colors duration-300 text-xs tracking-widest uppercase relative group py-2"
            >
              Artista
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D8A0D8] transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link 
              href="/contact" 
              className="hidden md:block text-ivory hover:text-[#D8A0D8] transition-colors duration-300 text-xs tracking-widest uppercase relative group py-2"
            >
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D8A0D8] transition-all duration-300 group-hover:w-full" />
            </Link>
            
            {/* Cart Button - lilac badge */}
            <button 
              onClick={openCart}
              className="relative p-2 text-ivory hover:text-[#D8A0D8] transition-colors duration-300 group cursor-pointer"
              aria-label="Carrito"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
                />
              </svg>
              <AnimatePresence>
                {itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 bg-[#D8A0D8] text-ivory text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile Menu */}
          <button className="md:hidden p-2 text-ivory cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
