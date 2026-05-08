'use client';

import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<'initials' | 'fadeOut' | 'logo'>('initials');

  useEffect(() => {
    // Phase 1: Show initials (0-2200ms)
    const timer1 = setTimeout(() => {
      setPhase('fadeOut');
    }, 2200);

    // Phase 2: Fade out initials (2200-2900ms)
    const timer2 = setTimeout(() => {
      setPhase('logo');
    }, 2900);

    // Phase 3: Show full logo (2900-4200ms), then start fade out
    const timer3 = setTimeout(() => {
      setVisible(false);
    }, 4200);

    // Unmount after fade out transition completes
    const timer4 = setTimeout(() => {
      setPhase('logo'); // Keep showing logo until unmount
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  if (!visible) return null;

  const crownSvgPath = "M2 18 L5 8 L10 13 L14 4 L18 13 L23 8 L26 18 Z";

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-800 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        background: 'linear-gradient(135deg, #1a0a1e 0%, #0d0010 60%, #1a0510 100%)',
      }}
    >
      {/* Phase 1 & 2: Initials */}
      <div
        className={`transition-all duration-600 ${
          phase === 'initials' ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-85 -translate-y-2.5'
        }`}
        style={{ display: phase === 'logo' ? 'none' : 'block' }}
      >
        <div className="relative flex items-start justify-center gap-1">
          {/* R - appears at 400ms */}
          <span
            className="block"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(72px, 10vw, 100px)',
              fontWeight: 300,
              color: '#ffffff',
              opacity: phase === 'initials' ? 1 : 0,
              transform: phase === 'initials' ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s, transform 0.7s',
              transitionDelay: '400ms',
            }}
          >
            R
          </span>

          {/* A + Crown - appears at 900ms */}
          <div className="relative">
            <span
              className="block"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(72px, 10vw, 100px)',
                fontWeight: 700,
                color: '#c084fc',
                opacity: phase === 'initials' ? 1 : 0,
                transform: phase === 'initials' ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.7s, transform 0.7s',
                transitionDelay: '900ms',
              }}
            >
              A
            </span>
            {/* Crown SVG over A - appears at 1300ms */}
            <div
              className="absolute left-1/2 -translate-x-1/2 -top-5"
              style={{
                opacity: phase === 'initials' ? 1 : 0,
                transition: 'opacity 0.5s ease',
                transitionDelay: '1300ms',
              }}
            >
              <svg width="28" height="20" viewBox="0 0 28 20">
                <path
                  d={crownSvgPath}
                  fill="#c084fc"
                  stroke="#e879f9"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                />
                <rect x="2" y="18" width="24" height="4" rx="1" fill="#c084fc" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Phase 3: Full logo */}
      <div
        className={`text-center transition-all duration-900 ${
          phase === 'logo' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ display: phase !== 'logo' ? 'none' : 'block' }}
      >
        {/* Crown SVG */}
        <div className="flex justify-center mb-2">
          <svg width="22" height="16" viewBox="0 0 28 20">
            <path
              d={crownSvgPath}
              fill="#c084fc"
              stroke="#e879f9"
              strokeWidth="0.8"
              strokeLinejoin="round"
            />
            <rect x="2" y="18" width="24" height="4" rx="1" fill="#c084fc" />
          </svg>
        </div>

        {/* Brand name */}
        <div className="flex items-baseline justify-center gap-1.5">
          <span
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '32px',
              fontWeight: 300,
              color: '#ffffff',
            }}
          >
            Reina
          </span>
          <span
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '32px',
              fontWeight: 700,
              color: '#c084fc',
            }}
          >
            Artura
          </span>
        </div>

        {/* Decorative line */}
        <div
          className="mx-auto h-px bg-gradient-to-r from-transparent via-[#c084fc] to-transparent transition-all duration-800"
          style={{
            width: phase === 'logo' ? '180px' : '0px',
            transitionDelay: '200ms',
          }}
        />

        {/* By Andrea Bernasconi */}
        <p
          className="mt-2"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '12px',
            fontStyle: 'italic',
            color: '#c084fc',
            opacity: 0.55,
            letterSpacing: '3px',
            transition: 'opacity 0.5s',
            transitionDelay: '300ms',
          }}
        >
          by Andrea Bernasconi
        </p>

        {/* Loading dots - appear at 3300ms */}
        <div className="flex justify-center gap-1.5 mt-4">
          {[0, 0.2, 0.4].map((delay, i) => (
            <div
              key={i}
              className="w-1.25 h-1.25 rounded-full bg-[#c084fc] animate-pulse"
              style={{
                animationDelay: `${delay}s`,
                opacity: phase === 'logo' ? 1 : 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
