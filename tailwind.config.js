/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Light theme: Warm Teal, Dark theme: Neural Violet
        primary: {
          DEFAULT: '#0F766E',  // Warm Teal (light mode)
          dark: '#7c3aed'      // Neural Violet (dark mode)
        },
        accent: {
          DEFAULT: '#14B8A6',  // Teal accent (light mode)
          dark: '#a78bfa'      // Purple accent (dark mode)
        },
        light: {
          DEFAULT: '#5EEAD4',  // Light teal
          dark: '#c4b5fd'      // Light purple
        },
        tint: {
          DEFAULT: '#CCFBF1',  // Very light teal
          dark: '#1e1b4b'      // Dark purple
        },
        'tint-text': {
          DEFAULT: '#0F766E',
          dark: '#a78bfa'
        },
        'body-main': {
          DEFAULT: '#1e293b',
          dark: '#e2e8f0'
        },
        'body-primary': {
          DEFAULT: '#334155',
          dark: '#cbd5e1'
        },
        'body-muted': {
          DEFAULT: '#94a3b8',
          dark: '#5a6b82'
        },
        subtitle: {
          DEFAULT: '#475569',
          dark: '#8fa4be'
        },
        headings: {
          DEFAULT: '#0F766E',
          dark: '#ffffff'
        },
        'skills-band': {
          DEFAULT: '#e8fdf4',
          dark: '#0f1322'
        },
        'contact-band': {
          DEFAULT: '#d1fae5',
          dark: '#1a1533'
        },
        'page-bg': {
          DEFAULT: '#F0FDF4',
          dark: '#0a0e1a'
        },
        'card-bg': {
          DEFAULT: '#ffffff',
          dark: '#111827'
        },
        'card-border': {
          DEFAULT: '#CCFBF1',
          dark: '#1f2a4a'
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      maxWidth: {
        'content': '1120px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'peek': 'peek 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'bounce-slow': 'bounce 2s infinite',
        'scroll': 'scroll 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
        peek: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        'xs': '475px',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        '.line-clamp-3': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '3',
        },
        '.text-gradient-hero': {
          background: 'linear-gradient(135deg, #ffffff 0%, #c4b5fd 60%, #a78bfa 100%)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.card-shadow': {
          'box-shadow': '0 2px 10px rgba(0,0,0,0.05)',
        },
        '.card-shadow-dark': {
          'box-shadow': '0 2px 10px rgba(0,0,0,0.28)',
        },
        '.header-glass': {
          'background': 'rgba(240,253,244,0.82)',
          'backdrop-filter': 'blur(14px)',
          '-webkit-backdrop-filter': 'blur(14px)',
        },
        '.header-glass-dark': {
          'background': 'rgba(10,14,26,0.75)',
          'backdrop-filter': 'blur(14px)',
          '-webkit-backdrop-filter': 'blur(14px)',
        },
        '.pause-animation': { 'animation-play-state': 'paused' }
      }
      addUtilities(newUtilities)
    }
  ],
}
