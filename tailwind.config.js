/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          main: '#030014', // Deep space blue-black
          secondary: '#0f0c29', // Slightly lighter for sections
          card: 'rgba(255, 255, 255, 0.03)',
          tertiary: '#1a1a2e',
          hover: 'rgba(255, 255, 255, 0.05)',
        },
        primary: {
          main: '#7000ff', // Electric Purple
          light: '#a259ff',
          dark: '#4c00b0',
          glow: 'rgba(112, 0, 255, 0.3)',
        },
        secondary: {
          main: '#00f0ff', // Cyan Neon
          light: '#5ff8ff',
          dark: '#0099a3',
          glow: 'rgba(0, 240, 255, 0.3)',
        },
        accent: {
          cyan: '#00E5FF',
          purple: '#BD00FF',
          pink: '#FF0099',
          green: '#00FF94',
        },
        text: {
          main: '#ffffff',
          secondary: '#b3b3b3',
          muted: '#666666',
          darker: '#4a4a4a',
        }
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(3.5rem, 8vw, 11rem)', { lineHeight: '0.85', letterSpacing: '-0.05em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 3.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-soft': 'glow-soft 3s ease-in-out infinite alternate',
        'blob': 'blob 7s infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'spin-slow': 'spin 10s linear infinite',
        'spin-slower': 'spin 20s linear infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #7000ff, 0 0 10px #7000ff' },
          '100%': { boxShadow: '0 0 20px #7000ff, 0 0 30px #7000ff' },
        },
        'glow-soft': {
          '0%': { boxShadow: '0 0 10px rgba(112, 0, 255, 0.2), 0 0 20px rgba(112, 0, 255, 0.1)' },
          '100%': { boxShadow: '0 0 20px rgba(112, 0, 255, 0.3), 0 0 40px rgba(112, 0, 255, 0.2)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-radial-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
        'gradient-radial-at-b': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
        'cosmic-gradient': 'linear-gradient(to right, #030014, #0f0c29)',
        'glass': 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'glass-hover': 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
        'neon-gradient': 'linear-gradient(to right, #7000ff, #00f0ff)',
        'neon-gradient-vertical': 'linear-gradient(to bottom, #7000ff, #00f0ff)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(112, 0, 255, 0.3)',
        'glow-primary-lg': '0 0 30px rgba(112, 0, 255, 0.4)',
        'glow-secondary': '0 0 20px rgba(0, 240, 255, 0.3)',
        'glow-secondary-lg': '0 0 30px rgba(0, 240, 255, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(255, 255, 255, 0.05)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}