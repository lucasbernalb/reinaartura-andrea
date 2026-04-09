'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-surface-frame">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="relative inline-block mb-4">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-olive-light text-xs">♔</span>
              <h3 className="font-display text-2xl font-semibold text-ivory">
                Reina<span className="text-olive-light">Artura</span>
              </h3>
            </div>
            <p className="text-ivory/60 text-sm leading-relaxed mb-4">
              Galería de arte especializada en obras contemporáneas de autor. Cada pieza es una expresión única de creatividad y pasión artística.
            </p>
            <p className="font-signature text-ivory/70 text-xl">Andrea Bernasconi</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg font-medium text-ivory mb-6">
              Navegación
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-ivory/60 hover:text-olive-light transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/#collections" className="text-ivory/60 hover:text-olive-light transition-colors text-sm">
                  Colecciones
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-ivory/60 hover:text-olive-light transition-colors text-sm">
                  Sobre el Artista
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-ivory/60 hover:text-olive-light transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-medium text-ivory mb-6">
              Contacto
            </h4>
            <ul className="space-y-3 text-ivory/60 text-sm">
              <li>contacto@reinaartura.com</li>
              <li>+598 XX XXX XXX</li>
              <li>Montevideo, Uruguay</li>
            </ul>
          </div>
        </div>

        {/* Olive divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-olive/30 to-transparent mt-12 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ivory/40 text-xs">
            © {currentYear} Reina Artura. Todos los derechos reservados.
          </p>
          <p className="text-ivory/40 text-xs">
            Arte de autor como forma de vida
          </p>
        </div>
      </div>
    </footer>
  );
}
