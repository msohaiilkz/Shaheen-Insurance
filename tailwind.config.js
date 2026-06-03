/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── PRIMARY: Shaheen Blue ────────────────────
        navy: {
          DEFAULT: '#28368F',
          light:   '#3D4FA3',
          dark:    '#1A2570',
        },
        // ── ACCENT: Gold ─────────────────────────────
        gold: {
          DEFAULT: '#D6A65A',
          light:   '#E0BC7A',
          dark:    '#B8882A',
        },
        // ── SECONDARY: Shaheen Red ────────────────────
        red: {
          DEFAULT: '#E12A2E',
          dark:    '#C41E22',
        },
        // ── SURFACE ──────────────────────────────────
        surface: '#F8F9FA',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Barlow', 'system-ui', 'sans-serif'],
        sans:    ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(160deg, #0e1a60 0%, #1A2570 55%, #28368F 100%)',
        'gold-gradient': 'linear-gradient(135deg, #B8882A 0%, #D6A65A 50%, #E0BC7A 100%)',
        'navy-gradient': 'linear-gradient(180deg, #28368F 0%, #1A2570 100%)',
      },
      boxShadow: {
        'gold': '0 4px 20px rgba(214,166,90,0.25)',
        'navy': '0 4px 20px rgba(40,54,143,0.25)',
        'card': '0 2px 16px rgba(40,54,143,0.08)',
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
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(214,166,90,0.4)' },
          '50%':      { boxShadow: '0 0 0 8px rgba(214,166,90,0)' },
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
