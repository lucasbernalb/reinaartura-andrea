'use client';

import { useEffect, useState } from 'react';

const crownSvgPath = "M2 18 L5 8 L10 13 L14 4 L18 13 L23 8 L26 18 Z";

export default function PageLoader() {
  const [opacity, setOpacity] = useState(1);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    // Fade out loader starting at 4.2s
    const timer1 = setTimeout(() => {
      setOpacity(0);
    }, 4200);

    // Unmount after fade out completes (1s transition)
    const timer2 = setTimeout(() => {
      setDisplay(false);
    }, 5200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div
      style={{
        opacity,
        transition: 'opacity 1s ease',
        display: display ? 'flex' : 'none',
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a0a1e 0%, #0d0010 60%, #1a0510 100%)',
      }}
    >
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 300,
          height: 200,
        }}
      >
        {/* ── Phase 1 & 2: Initials (R + A + crown) ── */}
        <div className="splash-initials" style={{ position: 'absolute' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              gap: 4,
              position: 'relative',
            }}
          >
            <span
              className="splash-letter splash-letter-r"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(72px, 10vw, 100px)',
                fontWeight: 300,
                color: '#ffffff',
              }}
            >
              R
            </span>

            <div style={{ position: 'relative' }}>
              <span
                className="splash-letter splash-letter-a"
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(72px, 10vw, 100px)',
                  fontWeight: 700,
                  color: '#c084fc',
                }}
              >
                A
              </span>

              {/* Crown over A */}
              <div
                className="splash-crown"
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  top: -20,
                }}
              >
                <svg width="28" height="20" viewBox="0 0 28 20">
                  <path d={crownSvgPath} fill="#c084fc" stroke="#e879f9" strokeWidth="0.8" strokeLinejoin="round" />
                  <rect x="2" y="18" width="24" height="4" rx="1" fill="#c084fc" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ── Phase 3: Full logo ── */}
        <div className="splash-logo" style={{ position: 'absolute', textAlign: 'center' }}>
          {/* Crown */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
            <svg width="22" height="16" viewBox="0 0 28 20">
              <path d={crownSvgPath} fill="#c084fc" stroke="#e879f9" strokeWidth="0.8" strokeLinejoin="round" />
              <rect x="2" y="18" width="24" height="4" rx="1" fill="#c084fc" />
            </svg>
          </div>

          {/* Brand name */}
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 6 }}>
            <span
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 32,
                fontWeight: 300,
                color: '#ffffff',
              }}
            >
              Reina
            </span>
            <span
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 32,
                fontWeight: 700,
                color: '#c084fc',
              }}
            >
              Artura
            </span>
          </div>

          {/* Decorative line */}
          <div className="splash-line" style={{ margin: '0 auto', height: 1 }} />

          {/* By Andrea */}
          <p className="splash-byline" style={{ marginTop: 8, fontFamily: 'Georgia, serif', fontSize: 12, fontStyle: 'italic', color: '#c084fc', letterSpacing: 3 }}>
            by Andrea Bernasconi
          </p>

          {/* Loading dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 16 }}>
            {[0, 0.2, 0.4].map((delay, i) => (
              <div
                key={i}
                className="splash-dot"
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  backgroundColor: '#c084fc',
                  animationDelay: `${delay}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
