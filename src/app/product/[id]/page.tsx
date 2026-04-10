'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { getProductById } from '@/data/mockProducts';
import { mockProducts } from '@/data/mockProducts';
import ProductCard from '@/components/product/ProductCard';

export default function ProductDetail() {
  const params = useParams();
  const { addItem } = useCart();
  const product = getProductById(params.id as string);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax suave para el fondo
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.15]);

  const relatedProducts = product 
    ? mockProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)
    : [];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0808]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h1 className="font-cormorant text-3xl font-semibold text-ivory mb-4">
            Obra no encontrada
          </h1>
          <Link 
            href="/" 
            className="text-[#D8A0D8] hover:text-[#E0B0E0] transition-colors font-light tracking-wider"
          >
            Volver al inicio
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#0a0808]">
      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* FONDO INMERSIVO - Imagen blur con zoom lento */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ y: backgroundY, scale: backgroundScale }}
        >
          <Image
            src={product.image_url}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>
        
        {/* Overlays para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0808]/90 via-[#0a0808]/70 to-[#0a0808]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0808]/60 via-transparent to-[#0a0808]/60" />
        
        {/* Vignette effect */}
        <motion.div 
          className="absolute inset-0"
          style={{ opacity: backgroundOpacity }}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 0.3 }}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CONTENIDO PRINCIPAL */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 min-h-screen">
        {/* Link de regreso - minimalista */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="fixed top-6 left-6 md:top-10 md:left-10 z-20"
        >
          <Link 
            href="/" 
            className="group flex items-center gap-2 text-ivory/50 hover:text-[#D8A0D8] transition-colors duration-500"
          >
            <span className="text-xs tracking-[0.3em] uppercase font-light">
              ← Volver
            </span>
          </Link>
        </motion.div>

        {/* Layout principal - imagen grande + info */}
        <div className="flex flex-col lg:flex-row min-h-screen">
          
          {/* ═══════════════════════════════════════════════════════════ */}
          {/* IMAGEN PRINCIPAL - Obra protagonista */}
          {/* ═══════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full lg:w-[60%] min-h-[60vh] lg:min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-24"
          >
            {/* Marco decorativo tipo galería */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full max-w-2xl aspect-[4/5]"
            >
              {/* Sombra profunda */}
              <div className="absolute inset-0 bg-[#0a0808]/40 blur-xl transform translate-y-8 scale-105" />
              
              {/* Marco exterior */}
              <div className="absolute -inset-4 border border-[#D8A0D8]/10" />
              
              {/* Imagen */}
              <div className="relative w-full h-full rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src={product.image_url}
                  alt={product.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                
                {/* Overlay sutil tipo spotlight */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0808]/20 via-transparent to-transparent" />
                
                {/* Borde interior sutil */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
              </div>
              
              {/* Detalle de esquina - marca de galería */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-[#D8A0D8]/30" />
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-[#D8A0D8]/30" />
            </motion.div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* INFORMACIÓN - Texto artístico */}
          {/* ═══════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full lg:w-[40%] flex flex-col justify-center px-6 md:px-12 lg:px-16 py-12 lg:py-20"
          >
            {/* Contenido con espaciado elegante */}
            <div className="space-y-8 max-w-lg">
              
              {/* Técnica + Año */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-[1px] bg-[#D8A0D8]/50" />
                <span className="text-[#D8A0D8]/80 text-xs tracking-[0.25em] uppercase font-light">
                  {product.medium ? `${product.medium} sobre lienzo` : 'Óleo sobre lienzo'} · {product.year}
                </span>
              </motion.div>

              {/* Nombre de la obra - GRANDE */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1 }}
                className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-ivory font-light leading-none tracking-wide"
              >
                {product.title}
              </motion.h1>

              {/* Descripción emocional */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="text-ivory/60 text-base md:text-lg leading-relaxed font-light"
              >
                {product.description}
              </motion.p>

              {/* Divisor elegante */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="w-16 h-[1px] bg-gradient-to-r from-[#D8A0D8]/40 to-transparent"
              />

              {/* Precio - MENOS PROTAGONISTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="flex items-baseline gap-3"
              >
                <span className="font-cormorant text-3xl md:text-4xl text-ivory/90">
                  ${product.price.toLocaleString('es-AR')}
                </span>
                <span className="text-ivory/40 text-sm font-light">
                  USD
                </span>
              </motion.div>

              {/* Datos secundarios - discretos */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="pt-4 space-y-3"
              >
                {product.dimensions && (
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                    <span className="text-ivory/30 text-xs tracking-wider uppercase">Dimensión</span>
                    <span className="text-ivory/70 text-sm font-light">{product.dimensions}</span>
                  </div>
                )}
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="text-ivory/30 text-xs tracking-wider uppercase">Disponibilidad</span>
                  <span className={product.in_stock 
                    ? 'text-[#D8A0D8]/80 text-sm font-light' 
                    : 'text-ivory/40 text-sm font-light'
                  }>
                    {product.in_stock 
                      ? `${product.stock_quantity === 1 ? 'Obra única' : `Edición de ${product.stock_quantity}`}`
                      : 'Agotado'
                    }
                  </span>
                </div>
              </motion.div>

              {/* Botón de adquisición - elegante */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="pt-6"
              >
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 0 50px rgba(216, 160, 216, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => addItem(product)}
                  disabled={!product.in_stock}
                  className="w-full bg-gradient-to-r from-[#D8A0D8]/90 to-[#C8A2C8]/90 hover:from-[#D8A0D8] hover:to-[#C8A2C8] text-[#0a0808] py-5 px-10 rounded-sm font-light text-base tracking-[0.2em] uppercase transition-all duration-500 disabled:from-[#1a1412] disabled:to-[#1a1412] disabled:text-ivory/40 disabled:cursor-not-allowed disabled:hover:shadow-none border border-[#D8A0D8]/30 disabled:border-[#D8A0D8]/10"
                >
                  {product.in_stock ? 'Adquirir Obra' : 'No Disponible'}
                </motion.button>
                
                {/* Indicador sutil de garantía */}
                <p className="text-center text-ivory/30 text-[10px] mt-4 tracking-wider">
                  Envío certificado · Garantía de autenticidad
                </p>
              </motion.div>
            </div>

            {/* Decoración lateral */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-[#D8A0D8]/20 to-transparent hidden lg:block" />
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* OBRAS RELACIONADAS - Transición suave */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      {relatedProducts.length > 0 && (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="relative z-10 bg-gradient-to-b from-[#0a0808] to-[#1a1412] py-24"
        >
          {/* Línea decorativa superior */}
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-center mb-16">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D8A0D8]/40" />
              <span className="mx-6 text-ivory/30 text-xs tracking-[0.3em] uppercase font-light">
                Obras Relacionadas
              </span>
              <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D8A0D8]/40" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {relatedProducts.map((p, index) => (
                <ProductCard key={p.id} product={p} index={index} />
              ))}
            </div>
          </div>
        </motion.section>
      )}
    </div>
  );
}
