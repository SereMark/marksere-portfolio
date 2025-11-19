/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          main: '#050505', // Darker, richer black
          secondary: '#0a0a0a', // Subtle contrast
          tertiary: '#121212', // Borders/Accents
          card: 'rgba(18, 18, 18, 0.6)', // Glassmorphism base
        },
        primary: {
          100: '#E0F7FA',
          200: '#B2EBF2',
          300: '#80DEEA',
          400: '#4DD0E1',
          500: '#00E5FF', // Brighter Cyan
          600: '#00ACC1',
          700: '#0097A7',
          800: '#00838F',
          900: '#006064',
        },
        accent: {
          cyan: '#00E5FF', // Electric Cyan
          purple: '#9D00FF', // Electric Purple
          pink: '#FF0055', // Electric Pink
          green: '#00FF9D', // Electric Green
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Clean, modern sans
        display: ['Space Grotesk', 'sans-serif'], // Tech-focused display
        mono: ['JetBrains Mono', 'monospace'], // Developer-focused mono
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'meteor': 'meteor 5s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { transform: 'rotate(215deg) translateX(-500px)', opacity: '0' },
        },
        shimmer: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00E5FF, 0 0 10px #00E5FF' },
          '100%': { boxShadow: '0 0 20px #00E5FF, 0 0 30px #00E5FF' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cosmic-gradient': 'linear-gradient(to right, #050505, #0a0a0a)',
        'glass': 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'glass-hover': 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}