'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { itemCount, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  const navLinks = [
    { href: '/#destacadas', label: 'Colecciones' },
    { href: '/about', label: 'Artista' },
    { href: '/contact', label: 'Contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-surface-frame/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20 relative">
          {/* Logo container */}
          <Link
            href="/"
            className="relative group flex flex-col items-center"
          >
            {/* Main logo text */}
            <div className="flex flex-col items-center leading-none">
              <span className="font-cormorant text-xl md:text-2xl font-light tracking-wide text-ivory group-hover:text-ivory-light transition-colors duration-300">
                Reina<span className="font-semibold relative" style={{ color: '#D8A0D8' }}>
                  Artura
                  {/* Crown integrated over the "A" */}
                  <span
                    className="absolute left-1/2 -translate-x-1/2 -top-1.5 md:-top-2 text-[10px] md:text-xs leading-none"
                    style={{ color: '#D8A0D8' }}
                  >
                    ♔
                  </span>
                </span>
              </span>

              {/* Decorative separator */}
              <div className="w-full h-px bg-[#D8A0D8]/40 mt-0.5" />

              {/* Signature - italic, muted */}
              <span
                className="font-signature whitespace-nowrap mt-0.5"
                style={{ color: '#D8A0D8', fontSize: '10px', opacity: 0.7 }}
              >
                by Andrea Bernasconi
              </span>
            </div>
          </Link>

          {/* Navigation - hover with lilac */}
          <div className="flex items-center gap-8 md:gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="hidden md:block text-ivory hover:text-[#D8A0D8] transition-colors duration-300 text-xs tracking-widest uppercase relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D8A0D8] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            
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

            {/* Hamburger / Close toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-ivory hover:text-[#D8A0D8] transition-colors duration-300 cursor-pointer"
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass-dark border-b border-[#D8A0D8]/20 transition-all duration-300 ${
          mobileOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-1 px-4 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="block text-center text-ivory hover:text-[#D8A0D8] transition-colors duration-300 text-sm tracking-widest uppercase py-3 px-8 w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
