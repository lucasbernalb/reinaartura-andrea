import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background - fondo oscuro elegante
        background: {
          DEFAULT: "#0a0808",
          warm: "#0f0c0a",
          light: "#1a1412",
        },
        // Surface - superficies
        surface: {
          DEFAULT: "#1a1412",
          elevated: "#231a16",
          frame: "#2d1f1a",
          hover: "#3d2a22",
        },
        // Accent - Nueva paleta principal
        accent: {
          // Marfil - crema cálido
          ivory: {
            DEFAULT: "#F5F0E6",
            light: "#FFFFF5",
            dark: "#E8E0D0",
            muted: "#D4CCC0",
          },
          // Verde oliva
          olive: {
            DEFAULT: "#6B8E23",
            light: "#8FBC3C",
            dark: "#4A6318",
            muted: "#9BAF5A",
          },
          // Lila
          lilac: {
            DEFAULT: "#C8A2C8",
            light: "#D8BFD8",
            dark: "#A87BA8",
            muted: "#E6D0E6",
          },
          // Mantener algunos colores anteriores para compatibilidad
          gold: {
            DEFAULT: "#c9a66b",
            light: "#d4b584",
            glow: "#e8d5b5",
            dark: "#a68550",
          },
          rose: {
            DEFAULT: "#d4a5a5",
            light: "#e5c4c4",
            muted: "#c49595",
          },
        },
        // Text colors
        text: {
          primary: "#f5f0eb",
          secondary: "#a89f94",
          muted: "#6b6560",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        signature: ["Caveat", "cursive"],
        heading: ["Cormorant Garamond", "serif"],
      },
      borderRadius: {
        sm: "4px",
      },
      boxShadow: {
        // Ivory glow
        'ivory-glow': '0 0 30px rgba(245, 240, 230, 0.15)',
        'ivory-glow-sm': '0 0 15px rgba(245, 240, 230, 0.1)',
        'ivory-glow-lg': '0 0 50px rgba(245, 240, 230, 0.2)',
        // Olive glow
        'olive-glow': '0 0 30px rgba(107, 142, 35, 0.25)',
        'olive-glow-sm': '0 0 15px rgba(107, 142, 35, 0.15)',
        // Lilac glow
        'lilac-glow': '0 0 30px rgba(200, 162, 200, 0.2)',
        'lilac-glow-sm': '0 0 15px rgba(200, 162, 200, 0.1)',
        // Mantener gold para compatibilidad
        'gold-glow': '0 0 30px rgba(201, 166, 107, 0.25)',
        'gold-glow-sm': '0 0 15px rgba(201, 166, 107, 0.15)',
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.8s ease-out forwards",
        "slide-in-right": "slideInRight 0.3s ease-out forwards",
        "slide-out-right": "slideOutRight 0.3s ease-in forwards",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOutRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        // Gradientes con la nueva paleta
        'ivory-gradient': 'linear-gradient(135deg, #F5F0E6 0%, #FFFFF5 100%)',
        'olive-gradient': 'linear-gradient(135deg, #6B8E23 0%, #8FBC3C 100%)',
        'lilac-gradient': 'linear-gradient(135deg, #C8A2C8 0%, #D8BFD8 100%)',
        'surface-gradient': 'linear-gradient(180deg, #1a1412 0%, #231a16 100%)',
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.4, 0, 0.2, 1)",
        elegant: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
