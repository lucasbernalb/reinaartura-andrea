'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1920&q=80';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[650px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Arte de Andrea Bernasconi"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        
        {/* Elegant gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
      </div>

      {/* Decorative corner elements - lilac */}
      <div className="absolute top-20 left-8 w-20 h-20 border-l-2 border-t-2 border-[#D8A0D8]/40" />
      <div className="absolute top-20 right-8 w-20 h-20 border-r-2 border-t-2 border-[#D8A0D8]/40" />
      <div className="absolute bottom-20 left-8 w-20 h-20 border-l-2 border-b-2 border-[#D8A0D8]/40" />
      <div className="absolute bottom-20 right-8 w-20 h-20 border-r-2 border-b-2 border-[#D8A0D8]/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-4xl"
        >
          {/* Crown - lilac */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#D8A0D8] text-5xl mb-8 drop-shadow-[0_0_15px_rgba(216,160,216,0.5)]"
          >
            ♔
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-5xl md:text-6xl lg:text-8xl font-semibold text-ivory mb-6 tracking-wide drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
          >
            Colecciones de<br />
            <span style={{ color: '#D8A0D8' }} className="italic drop-shadow-[0_0_10px_rgba(216,160,216,0.4)]">Arte Único</span>
          </motion.h1>

          {/* Divider - lilac */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-[#D8A0D8] to-transparent w-32 mx-auto mb-8 shadow-[0_0_10px_rgba(216,160,216,0.5)]"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-ivory/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
          >
            Descubre obras exclusivas de Andrea Bernasconi.<br className="hidden sm:block" />
            Pinturas originales y prints de edición limitada.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-5"
          >
            {/* Primary button - ivory with lilac border */}
            <Link 
              href="#destacadas"
              className="bg-gradient-to-r from-ivory to-ivory-light hover:from-ivory-light hover:to-ivory text-olive-dark px-10 py-4 rounded-lg font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 border-2 border-[#D8A0D8]/50 shadow-[0_4px_20px_rgba(216,160,216,0.3)] hover:shadow-[0_6px_30px_rgba(216,160,216,0.5)]"
            >
              Explorar Colecciones
            </Link>
            
            {/* Secondary button - outlined lilac */}
            <Link 
              href="/about"
              className="border-2 border-[#D8A0D8]/70 hover:border-[#D8A0D8] hover:bg-[#D8A0D8]/10 px-10 py-4 rounded-lg font-medium text-sm tracking-wider uppercase transition-all duration-300"
              style={{ color: '#D8A0D8' }}
            >
              Conocer a Andrea
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-ivory/50 text-xs tracking-widest uppercase">Scroll</span>
            <svg className="h-5 w-5 text-[#D8A0D8]/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
