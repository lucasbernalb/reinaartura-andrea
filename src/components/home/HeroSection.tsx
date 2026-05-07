'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/utils/cn';

const HERO_IMAGE = '/hero.jpeg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const crownVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: 0.2 },
  },
};

const dividerVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, delay: 0.1 },
  },
};

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection(props: HeroSectionProps) {
  const { className = '' } = props;
  
  return (
    <section className={`relative h-screen overflow-visible ${className}`}>
      {/* Background structure - covers full viewport including behind navbar */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background image with blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: `url(${HERO_IMAGE})`,
            filter: 'blur(8px) brightness(0.5) saturate(0.8)',
          }}
        />
        
        {/* Uniform dark overlay */}
        <div className="absolute inset-0 bg-[#0a0808]/80" />
        
        {/* Subtle side vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0808]/40 via-transparent to-[#0a0808]/40" />
        
        {/* Radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,#0a0808_100%)]" />
      </div>
      
      {/* Corner frames - positioned below navbar (z-20 to be above background) */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute top-24 left-4 w-20 h-20 border-l-2 border-t-2 border-[#D8A0D8]/40 z-20"
      />
      <motion.div
        initial={{ opacity: 0, x: 20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute top-24 right-4 w-20 h-20 border-r-2 border-t-2 border-[#D8A0D8]/40 z-20"
      />
      <motion.div
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-4 left-4 w-20 h-20 border-l-2 border-b-2 border-[#D8A0D8]/40 z-20"
      />
      <motion.div
        initial={{ opacity: 0, x: 20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-4 right-4 w-20 h-20 border-r-2 border-b-2 border-[#D8A0D8]/40 z-20"
      />
      
      {/* Content structure: spacer for navbar + centered content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Spacer div - reserves space for the fixed navbar */}
        <div className="h-16 md:h-20 flex-shrink-0" />
        
        {/* Content container - fills remaining space and centers content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 -mt-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl"
          >
            {/* Crown */}
            <motion.div variants={crownVariants} className="relative mb-4 inline-block">
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="text-[#D8A0D8] text-5xl animate-crown-glow"
              >
                ♔
              </motion.div>
            </motion.div>
            
            {/* Radial Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[600px] h-[600px] rounded-full bg-gradient-radial from-[#D8A0D8]/10 via-[#D8A0D8]/5 to-transparent" />
            </div>
            
            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-semibold text-ivory mb-2 tracking-wide leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
            >
              <span className="not-italic">Colecciones de</span>
              <br />
              <span className="italic" style={{ color: '#D8A0D8' }}>Arte Único</span>
            </motion.h1>
            
            {/* Divider */}
            <motion.div
              variants={dividerVariants}
              className="h-0.5 bg-gradient-to-r from-transparent via-[#D8A0D8] to-transparent w-32 mx-auto mb-4 shadow-[0_0_10px_rgba(216,160,216,0.5)]"
            />
            
            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-ivory/70 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed font-light tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
            >
              Descubre obras exclusivas de Andrea Bernasconi.
              <br className="hidden sm:block" />
              Pinturas originales y prints de edición limitada.
            </motion.p>
            
            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center gap-5"
            >
              {/* Primary button */}
              <Link
                href="#destacadas"
                className={cn(
                  'group relative overflow-hidden',
                  'bg-gradient-to-r from-[#D8A0D8] to-[#C8A2C8]',
                  'hover:from-[#E0B0E0] hover:to-[#D8A0D8]',
                  'text-ivory px-12 py-5 rounded-xl font-bold text-sm tracking-wider uppercase',
                  'transition-all duration-300',
                  'hover:scale-105',
                  'shadow-[0_4px_20px_rgba(216,160,216,0.4)]',
                  'hover:shadow-[0_6px_30px_rgba(216,160,216,0.6)]',
                  'shimmer-effect'
                )}
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.15) 55%, transparent 100%)',
                  backgroundSize: '200% 100%',
                }}
              >
                Explorar Colecciones
              </Link>
              
              {/* Secondary button */}
              <Link
                href="/about"
                className={cn(
                  'border-2 border-[#D8A0D8]/70',
                  'hover:border-[#D8A0D8]',
                  'hover:bg-[#D8A0D8]/10',
                  'backdrop-blur-sm',
                  'text-[#D8A0D8] hover:text-ivory',
                  'px-12 py-5 rounded-xl font-medium text-sm tracking-wider uppercase',
                  'transition-all duration-300',
                  'hover:scale-105'
                )}
              >
                Conocer a Andrea
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Artistic separator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#D8A0D8]/50 to-transparent pointer-events-none" />
    </section>
  );
}
