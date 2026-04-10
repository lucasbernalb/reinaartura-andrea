'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Las 6 obras destacadas
const OBRAS_DESTACADAS = [
  {
    id: 'frida',
    productId: 'local-2',
    src: '/frida.jpeg',
    titulo: 'Frida',
    frase: '"Cada pincelada cuenta una historia"',
  },
  {
    id: 'bebe',
    productId: 'local-1',
    src: '/bebe.jpeg',
    titulo: 'Bebé',
    frase: '"La inocencia captured in oil"',
  },
  {
    id: 'img061',
    productId: 'local-35',
    src: '/img061.jpg',
    titulo: 'Obra 061',
    frase: '"Abstract emotions on canvas"',
  },
  {
    id: 'mi-condor',
    productId: 'local-3',
    src: '/mi condor.jpg',
    titulo: 'Mi Cóndor',
    frase: '"Freedom in every stroke"',
  },
  {
    id: 'sinpintura',
    productId: 'local-7',
    src: '/Sinpintura.jpg',
    titulo: 'Sin Pintura',
    frase: '"The essence of absence"',
  },
  {
    id: 'print',
    productId: 'local-13',
    src: '/WhatsApp Image 2025-09-14 at 8.43.11 PM.jpeg',
    titulo: 'Print 03',
    frase: '"Limited edition, infinite beauty"',
  },
];

// Frase inspiradora para el hero
const FRASE_HERO = 'El arte no se observa… se siente';

// ═══════════════════════════════════════════════════════════════
// COMPONENTE: Imagen SIN hover (para Frida y Print)
// ═══════════════════════════════════════════════════════════════
function ImagenSimple({ 
  src, 
  alt,
  className = '',
}: { 
  src: string; 
  alt: string; 
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 85vw, 800px"
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// COMPONENTE: Imagen CON hover "Ver obra"
// ═══════════════════════════════════════════════════════════════
function ImagenConHover({ 
  src, 
  alt, 
  productId,
  className = '',
}: { 
  src: string; 
  alt: string; 
  productId: string;
  className?: string;
}) {
  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      className={`relative overflow-hidden cursor-pointer ${className}`}
    >
      {/* Imagen base */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 80vw, 400px"
      />
      
      {/* Overlay oscuro */}
      <motion.div
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-[#0a0808]/70 backdrop-blur-[2px]"
      />
      
      {/* Texto "Ver obra" */}
      <motion.div
        variants={{
          initial: { opacity: 0, y: 10, filter: 'blur(4px)' },
          hover: { opacity: 1, y: 0, filter: 'blur(0px)' },
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Link href={`/product/${productId}`} className="relative z-10">
          <span className="text-ivory/90 text-xs tracking-[0.3em] uppercase font-light border border-ivory/30 px-6 py-3 rounded-sm hover:bg-ivory/10 transition-colors duration-300">
            Ver obra
          </span>
        </Link>
      </motion.div>
      
      {/* Borde sutil en hover */}
      <motion.div
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-sm pointer-events-none"
      />
    </motion.div>
  );
}

export default function ArtExperience() {
  return (
    <div className="bg-[#0a0808]">
      {/* SECCIÓN 1: Hero Artístico */}
      <HeroArtistico />

      {/* SECCIÓN 2: Frida - SIN hover (gran impacto) */}
      <ObraImpacto obra={OBRAS_DESTACADAS[0]} />

      {/* SECCIÓN 3: Bebe + Obra061 - Composición artística */}
      <ObrasComposicion obras={[OBRAS_DESTACADAS[1], OBRAS_DESTACADAS[2]]} />

      {/* SECCIÓN 4: Mi Cóndor + Sin Pintura - Composición artística */}
      <ObrasComposicion obras={[OBRAS_DESTACADAS[3], OBRAS_DESTACADAS[4]]} />

      {/* SECCIÓN 5: Print - SIN hover (cierre) */}
      <ObraCierre obra={OBRAS_DESTACADAS[5]} />

      {/* TRANSICIÓN AL ECOMMERCE */}
      <TransicionEcommerce />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// SECCIÓN 1: HERO ARTÍSTICO
// ═══════════════════════════════════════════════════════════════
function HeroArtistico() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.5], [10, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0808] via-[#1a1412] to-[#0a0808]" />

      {/* Texto central con animación */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        {/* Decoración superior */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D8A0D8]/60 to-transparent mx-auto mb-12"
        />

        {/* Texto principal */}
        <motion.h1
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-cormorant text-4xl md:text-6xl lg:text-7xl text-ivory/95 font-light leading-tight tracking-wide mb-8"
          style={{ filter: blur ? `blur(${blur}px)` : undefined }}
        >
          {FRASE_HERO}
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-work-sans text-ivory/50 text-sm md:text-base tracking-[0.3em] uppercase"
        >
          Andrea Bernasconi — Artista
        </motion.p>

        {/* Decoración inferior */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D8A0D8]/60 to-transparent mx-auto mt-12"
        />
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-ivory/30 text-[10px] tracking-[0.4em] uppercase">
            Scroll
          </span>
          <svg className="w-4 h-4 text-[#D8A0C8]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>

      <motion.div className="absolute inset-0 bg-gradient-to-b from-[#D8A0D8]/5 via-transparent to-transparent" style={{ scale }} />
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// SECCIÓN 2: FRIDA - SIN HOVER
// ═══════════════════════════════════════════════════════════════
function ObraImpacto({ obra }: { obra: typeof OBRAS_DESTACADAS[0] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);
  const textY = useTransform(scrollYProgress, [0.3, 0.5], [30, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

  return (
    <section ref={ref} className="relative min-h-[150vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y, scale }}
          className="relative w-[85vw] max-w-5xl aspect-[4/5] md:aspect-[3/4]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full h-full rounded-sm overflow-hidden shadow-2xl"
          >
            <ImagenSimple src={obra.src} alt={obra.titulo} className="w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0808]/60 via-transparent to-transparent" />
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="absolute bottom-20 left-0 right-0 text-center px-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-cormorant text-3xl md:text-5xl text-ivory mb-3"
          >
            {obra.titulo}
          </motion.h2>
          <p className="font-work-sans text-ivory/40 text-sm italic">{obra.frase}</p>
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// SECCIÓN 3 & 4: DOS CUADROS - COMPOSICIÓN ARTÍSTICA (ZIG-ZAG)
// ═══════════════════════════════════════════════════════════════
function ObrasComposicion({ obras }: { obras: typeof OBRAS_DESTACADAS }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section ref={ref} className="relative py-32 md:py-48">
      {/* Contenedor con los dos cuadros - ESTILO ZIG-ZAG */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative">
          {/* Cuadro izquierdo - entra desde la izquierda, arriba */}
          <motion.div
            initial={{ opacity: 0, x: -80, rotateY: -15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full md:w-[45%]"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto md:mx-0">
              <ImagenConHover
                src={obras[0].src}
                alt={obras[0].titulo}
                productId={obras[0].productId}
                className="w-full h-full rounded-sm shadow-2xl"
              />
              {/* Marco decorativo */}
              <div className="absolute -inset-4 border border-[#D8A0D8]/20 -z-10 rounded-sm" />
            </div>
            
            {/* Info - debajo del cuadro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 text-center md:text-left"
            >
              <h3 className="font-cormorant text-2xl md:text-3xl text-ivory mb-2">{obras[0].titulo}</h3>
              <p className="font-work-sans text-ivory/40 text-xs italic">{obras[0].frase}</p>
            </motion.div>
          </motion.div>

          {/* Cuadro derecho - entra desde abajo, más abajo que el izquierdo (zig-zag) */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full md:w-[45%] md:absolute md:top-24 md:right-0"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto md:mx-0 md:ml-auto">
              <ImagenConHover
                src={obras[1].src}
                alt={obras[1].titulo}
                productId={obras[1].productId}
                className="w-full h-full rounded-sm shadow-2xl"
              />
              {/* Marco decorativo */}
              <div className="absolute -inset-4 border border-[#D8A0D8]/20 -z-10 rounded-sm" />
            </div>
            
            {/* Info - debajo del cuadro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-8 text-center md:text-right"
            >
              <h3 className="font-cormorant text-2xl md:text-3xl text-ivory mb-2">{obras[1].titulo}</h3>
              <p className="font-work-sans text-ivory/40 text-xs italic">{obras[1].frase}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decoraciones laterales */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-[#D8A0D8]/30 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-[#D8A0D8]/30 to-transparent" />
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// SECCIÓN 5: PRINT - CIERRE (SIN hover)
// ═══════════════════════════════════════════════════════════════
function ObraCierre({ obra }: { obra: typeof OBRAS_DESTACADAS[0] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.05, 1]);

  return (
    <section ref={ref} className="relative min-h-[120vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity }} className="relative w-full max-w-4xl px-6">
          {/* Imagen con blur → sharp */}
          <motion.div
            initial={{ filter: 'blur(20px)', opacity: 0 }}
            animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
            transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ scale }}
            className="relative aspect-square md:aspect-[16/10]"
          >
            <ImagenSimple src={obra.src} alt={obra.titulo} className="w-full h-full rounded-sm shadow-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0808]/80 via-transparent to-transparent" />
          </motion.div>

          {/* Texto emocional */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-16 left-0 right-0 text-center"
          >
            <h2 className="font-cormorant text-4xl md:text-6xl text-ivory mb-4">{obra.titulo}</h2>
            <p className="font-work-sans text-ivory/50 text-sm md:text-base tracking-wider">{obra.frase}</p>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
              className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D8A0D8]/60 to-transparent mx-auto mt-8"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// TRANSICIÓN AL ECOMMERCE
// ═══════════════════════════════════════════════════════════════
function TransicionEcommerce() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });

  return (
    <section ref={ref} className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0808] to-[#0a0808]" />
      
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative text-center px-6"
      >
        <h2 className="font-cormorant text-3xl md:text-5xl text-ivory mb-6">Explora la Colección</h2>
        <p className="font-work-sans text-ivory/40 text-sm mb-12 max-w-md mx-auto">
          Cada obra es una ventana a emociones inexploradas
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-3"
        >
          <span className="w-8 h-[1px] bg-[#D8A0D8]/40" />
          <svg className="w-5 h-5 text-[#D8A0C8]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span className="w-8 h-[1px] bg-[#D8A0D8]/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
