/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── PRIMARY: Deep Navy ───────────────────────
        navy: {
          DEFAULT: '#0C1B33',
          light:   '#1A2E4A',
          dark:    '#070F1D',
        },
        // ── ACCENT: Institutional Gold ───────────────
        gold: {
          DEFAULT: '#B8952A',
          light:   '#CDA94A',
          dark:    '#8A6E18',
        },
        // ── SURFACE: Near-white (derived from white) ─
        surface: '#F8F9FA',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Barlow', 'system-ui', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(160deg, #070F1D 0%, #0C1B33 55%, #101F3A 100%)',
        'gold-gradient': 'linear-gradient(135deg, #B8952A 0%, #CDA94A 50%, #8A6E18 100%)',
        'navy-gradient': 'linear-gradient(180deg, #0C1B33 0%, #070F1D 100%)',
      },
      boxShadow: {
        'gold': '0 4px 20px rgba(184,149,42,0.25)',
        'navy': '0 4px 20px rgba(12,27,51,0.25)',
        'card': '0 2px 16px rgba(12,27,51,0.08)',
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(184,149,42,0.4)' },
          '50%':      { boxShadow: '0 0 0 8px rgba(184,149,42,0)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
