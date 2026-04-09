'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1920&h=1080&fit=crop"
            alt="Andrea Bernasconi - Artista Visual"
            fill
            priority
            className="object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory mb-4">
            Sobre el Artista
          </h1>
          <p className="text-ivory/70 text-lg md:text-xl max-w-2xl mx-auto">
            Conoce la pasión detrás de cada obra
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[3/4] rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=1000&fit=crop"
              alt="Andrea Bernasconi - Artista"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-ivory mb-2">
                Andrea Bernasconi
              </h2>
              <p className="text-[#D8A0D8] text-lg">Artista Visual</p>
            </div>

            <div className="space-y-4 text-ivory/70 leading-relaxed">
              <p>
                Desde temprana edad, Andrea descubrió en el arte un lenguaje universal que trasciende palabras. Su pasión por la pintura nació de la necesidad de expresar emociones que el mundo cotidiano no podía contener.
              </p>
              <p>
                Formada en las tradiciones del arte clásico pero con un espíritu inconformista, Andrea desarrolla un estilo único que fusiona técnicas tradicionales con expresiones contemporáneas. Cada pieza es una conversación entre el pasado y el presente, entre la técnica y la emoción.
              </p>
              <p>
                Su obra explora la relación entre color, luz y emoción. Los tonos violetas y lilas que caracterizan su paleta no son una elección arbitraria: representan la profundidad del pensamiento humano, la melancolía de los recuerdos y la esperanza que surge en los momentos de quietud.
              </p>
              <p>
                Cada cuadro que Andrea crea es una invitación a detenerse, observar y sentir. En un mundo de constante movimiento, sus obras son santuarios de paz que invitan a la reflexión y el descanso espiritual.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="font-display text-lg font-medium text-ivory mb-3">
                Filosofía Artística
              </h3>
              <p className="text-ivory/70 italic">
                &ldquo;El arte no es lo que ves, es lo que haces sentir. Cada obra es un puente entre mi alma y quien la contempla.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 md:mt-32 text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-ivory mb-6">
            ¿Te gustaría conocer más?
          </h3>
          <p className="text-ivory/70 max-w-xl mx-auto mb-8">
            Cada obra cuenta una historia. Te invito a explorar la colección y encontrar aquella que habla a tu corazón.
          </p>
          <Link
            href="/"
            className="inline-block border-2 border-[#D8A0D8]/50 bg-[#D8A0D8]/10 hover:bg-[#D8A0D8]/20 text-ivory px-8 py-3 rounded-lg font-medium transition-all duration-300"
          >
            Explorar Colección
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
