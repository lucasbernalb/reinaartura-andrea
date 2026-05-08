'use client';

export default function CrownSVG() {
  return (
    <div style={{ filter: 'drop-shadow(0 0 24px rgba(192, 132, 252, 0.5))' }}>
      <svg width="200" height="160" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="crownGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e879f9"/>
            <stop offset="40%" stopColor="#c084fc"/>
            <stop offset="100%" stopColor="#7c3aed"/>
          </linearGradient>
          <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35"/>
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0"/>
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1"/>
          </linearGradient>
          <linearGradient id="gemGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f9a8d4"/>
            <stop offset="100%" stopColor="#c084fc"/>
          </linearGradient>
        </defs>

        <style>{`
          .crown-group {
            animation: float 3.5s ease-in-out infinite;
            transform-origin: 100px 80px;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          .gem { animation: gemShine 2.5s ease-in-out infinite; }
          .gem:nth-child(2) { animation-delay: 0.4s; }
          .gem:nth-child(3) { animation-delay: 0.8s; }
          .gem:nth-child(4) { animation-delay: 1.2s; }
          .gem:nth-child(5) { animation-delay: 1.6s; }
          @keyframes gemShine {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
          .sparkle { animation: sparkleAnim 2s ease-in-out infinite; }
          .sparkle:nth-child(2) { animation-delay: 0.6s; }
          .sparkle:nth-child(3) { animation-delay: 1.2s; }
          @keyframes sparkleAnim {
            0%, 100% { opacity: 0; transform: scale(0.5); }
            50% { opacity: 1; transform: scale(1); }
          }
        `}</style>

        <g className="crown-group">
          <path
            d="M 20 110 L 30 68 L 55 90 L 100 40 L 145 90 L 170 68 L 180 110 Z"
            fill="url(#crownGrad)"
            stroke="#e879f9"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M 20 110 L 30 68 L 55 90 L 100 40 L 145 90 L 170 68 L 180 110 Z"
            fill="url(#shimmer)"
            opacity="0.6"
          />
          <rect x="16" y="110" width="168" height="26" rx="5"
            fill="url(#crownGrad)" stroke="#e879f9" strokeWidth="1"/>
          <rect x="16" y="110" width="168" height="26" rx="5"
            fill="url(#shimmer)" opacity="0.4"/>

          <circle className="gem" cx="36" cy="124" r="5" fill="url(#gemGrad)" stroke="#f0abfc" strokeWidth="0.8"/>
          <circle className="gem" cx="66" cy="124" r="5" fill="url(#gemGrad)" stroke="#f0abfc" strokeWidth="0.8"/>
          <circle className="gem" cx="100" cy="124" r="6" fill="#f9a8d4" stroke="#f0abfc" strokeWidth="0.8"/>
          <circle className="gem" cx="134" cy="124" r="5" fill="url(#gemGrad)" stroke="#f0abfc" strokeWidth="0.8"/>
          <circle className="gem" cx="164" cy="124" r="5" fill="url(#gemGrad)" stroke="#f0abfc" strokeWidth="0.8"/>

          <circle cx="30" cy="70" r="4" fill="#f9a8d4" stroke="#ffffff" strokeWidth="0.8" opacity="0.9"/>
          <circle cx="100" cy="42" r="5" fill="#f9a8d4" stroke="#ffffff" strokeWidth="0.8" opacity="0.9"/>
          <circle cx="170" cy="70" r="4" fill="#f9a8d4" stroke="#ffffff" strokeWidth="0.8" opacity="0.9"/>

          <g className="sparkle" style={{ transformOrigin: '75px 68px' }}>
            <line x1="75" y1="62" x2="75" y2="74" stroke="#f9a8d4" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="69" y1="68" x2="81" y2="68" stroke="#f9a8d4" strokeWidth="1.5" strokeLinecap="round"/>
          </g>
          <g className="sparkle" style={{ transformOrigin: '128px 65px' }}>
            <line x1="128" y1="59" x2="128" y2="71" stroke="#e879f9" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="122" y1="65" x2="134" y2="65" stroke="#e879f9" strokeWidth="1.5" strokeLinecap="round"/>
          </g>
        </g>
      </svg>
    </div>
  );
}
