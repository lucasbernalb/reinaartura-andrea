'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const HERO_IMAGE = '/hero.jpeg';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[650px] overflow-hidden">
      {/* Background Image con blur */}
      <div className="absolute inset-0">
        {/* Imagen con blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${HERO_IMAGE})`,
            filter: 'blur(8px) brightness(0.5) saturate(0.8)',
          }}
        />
        
        {/* Overlay oscuro fuerte */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0808]/85 via-[#0a0808]/70 to-[#0a0808]/90" />
        
        {/* Overlay lateral para crear viñeta */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0808]/50 via-transparent to-[#0a0808]/50" />
        
        {/* Overlay superior para fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0808]/60 via-transparent to-transparent" />
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
          {/* Crown - lilac con animación */}
          <div className="relative mb-8 inline-block">
            {/* Corona con glow pulsante y float */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -8, 0],
              }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="text-[#D8A0D8] text-5xl animate-crown-glow"
            >
              ♔
            </motion.div>
          </div>

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
            {/* Primary button - lilac filled */}
            <Link 
              href="#destacadas"
              className="bg-gradient-to-r from-[#D8A0D8] to-[#C8A2C8] hover:from-[#E0B0E0] hover:to-[#D8A0D8] text-ivory-dark px-10 py-4 rounded-lg font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(216,160,216,0.4)] hover:shadow-[0_6px_30px_rgba(216,160,216,0.6)]"
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
      </div>
    </section>
  );
}
