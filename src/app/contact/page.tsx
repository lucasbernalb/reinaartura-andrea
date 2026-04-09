'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useCallback } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  }, [formData]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1920&h=1080&fit=crop"
            alt="Contacto"
            fill
            priority
            className="object-cover brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        </div>

        {/* Corner decorations */}
        <div className="absolute top-20 left-8 w-20 h-20 border-l-2 border-t-2 border-[#D8A0D8]/40" />
        <div className="absolute top-20 right-8 w-20 h-20 border-r-2 border-t-2 border-[#D8A0D8]/40" />
        <div className="absolute bottom-20 left-8 w-20 h-20 border-l-2 border-b-2 border-[#D8A0D8]/40" />
        <div className="absolute bottom-20 right-8 w-20 h-20 border-r-2 border-b-2 border-[#D8A0D8]/40" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory mb-4">
            Contacto
          </h1>
          <p className="text-ivory/70 text-lg md:text-xl max-w-2xl mx-auto">
            ¿Te gustaría adquirir una obra o tienes preguntas? Estoy aquí para ayudarte
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-ivory mb-2">
                Conversemos
              </h2>
              <p className="text-ivory/70 leading-relaxed">
                Cada obra es una conexión única. Me encantaría conocerte y ayudarte a encontrar 
                la pieza perfecta para tu espacio.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Email */}
              <motion.a
                href="mailto:andrea@reinaartura.com"
                whileHover={{ scale: 1.02 }}
                className="block p-6 rounded-lg border border-[#D8A0D8]/20 bg-[#1a1412]/50 backdrop-blur-sm hover:border-[#D8A0D8]/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#D8A0D8]/10 border border-[#D8A0D8]/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" style={{ color: '#D8A0D8' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-ivory mb-1">Email</h3>
                    <p className="text-[#D8A0D8] group-hover:underline">andrea@reinaartura.com</p>
                  </div>
                </div>
              </motion.a>

              {/* Phone / WhatsApp */}
              <motion.a
                href="https://wa.me/59891234567"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="block p-6 rounded-lg border border-[#D8A0D8]/20 bg-[#1a1412]/50 backdrop-blur-sm hover:border-[#D8A0D8]/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#D8A0D8]/10 border border-[#D8A0D8]/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" style={{ color: '#D8A0D8' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-ivory mb-1">WhatsApp</h3>
                    <p className="text-[#D8A0D8] group-hover:underline">+598 91 234 567</p>
                  </div>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-lg border border-[#D8A0D8]/20 bg-[#1a1412]/50 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#D8A0D8]/10 border border-[#D8A0D8]/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" style={{ color: '#D8A0D8' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-ivory mb-1">Ubicación</h3>
                    <p className="text-ivory/70">Montevideo, Uruguay</p>
                    <p className="text-ivory/50 text-sm mt-1">Entregas y exhibiciones por cita previa</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-display text-lg font-medium text-ivory mb-4">Sígueme</h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://instagram.com/reinaartura"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-lg border border-[#D8A0D8]/30 bg-[#D8A0D8]/5 hover:bg-[#D8A0D8]/20 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg className="h-6 w-6" style={{ color: '#D8A0D8' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://facebook.com/reinaartura"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-lg border border-[#D8A0D8]/30 bg-[#D8A0D8]/5 hover:bg-[#D8A0D8]/20 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg className="h-6 w-6" style={{ color: '#D8A0D8' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 md:p-10 rounded-xl border border-[#D8A0D8]/20 bg-[#1a1412]/80 backdrop-blur-sm">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#D8A0D8]/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" style={{ color: '#D8A0D8' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-ivory mb-2">¡Mensaje enviado!</h3>
                  <p className="text-ivory/70">Te responderé pronto. Gracias por tu mensaje.</p>
                </motion.div>
              ) : (
                <>
                  <h2 className="font-display text-2xl font-semibold text-ivory mb-6">
                    Envíame un mensaje
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm text-ivory/70 mb-2">
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#0a0808]/80 border border-[#D8A0D8]/30 text-ivory placeholder-ivory/40 focus:outline-none focus:border-[#D8A0D8] transition-colors duration-300"
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm text-ivory/70 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#0a0808]/80 border border-[#D8A0D8]/30 text-ivory placeholder-ivory/40 focus:outline-none focus:border-[#D8A0D8] transition-colors duration-300"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm text-ivory/70 mb-2">
                        Asunto
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#0a0808]/80 border border-[#D8A0D8]/30 text-ivory focus:outline-none focus:border-[#D8A0D8] transition-colors duration-300 appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#1a1412]">Selecciona una opción</option>
                        <option value="compra" className="bg-[#1a1412]">Quiero adquirir una obra</option>
                        <option value="consulta" className="bg-[#1a1412]">Consulta general</option>
                        <option value="comision" className="bg-[#1a1412]">Solicitar comisión</option>
                        <option value="exhibicion" className="bg-[#1a1412]">Exhibiciones y eventos</option>
                        <option value="prensa" className="bg-[#1a1412]">Prensa y medios</option>
                        <option value="otro" className="bg-[#1a1412]">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm text-ivory/70 mb-2">
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-[#0a0808]/80 border border-[#D8A0D8]/30 text-ivory placeholder-ivory/40 focus:outline-none focus:border-[#D8A0D8] transition-colors duration-300 resize-none"
                        placeholder="Cuéntame sobre tu interés en mis obras..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={!isSubmitting ? { scale: 1.02, boxShadow: '0 0 30px rgba(216, 160, 216, 0.4)' } : {}}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-lg font-medium text-sm tracking-wider uppercase transition-all duration-300 border-2 border-[#D8A0D8]/70 bg-[#D8A0D8]/10 hover:bg-[#D8A0D8]/20 text-ivory disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        'Enviar Mensaje'
                      )}
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center p-10 md:p-14 rounded-2xl border border-[#D8A0D8]/20 bg-gradient-to-b from-[#1a1412]/50 to-transparent"
        >
          <div className="text-4xl mb-4" style={{ color: '#D8A0D8' }}>♔</div>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-ivory mb-4">
            ¿Prefieres explorar primero?
          </h2>
          <p className="text-ivory/70 max-w-xl mx-auto mb-8">
            Descubre la colección completa de obras disponibles. Cada pieza cuenta una historia esperando ser conocida.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 rounded-lg font-medium text-sm tracking-wider uppercase transition-all duration-300 border-2 border-[#D8A0D8]/50 bg-[#D8A0D8]/10 hover:bg-[#D8A0D8]/20 text-ivory"
          >
            Ver Colecciones
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
