/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E293B',
        secondary: '#374151',
        accent: '#10B981',
        backgroundGradientStart: '#1E293B',
        backgroundGradientEnd: '#111827',
        'text-primary': '#E5E7EB',
        'text-secondary': '#9CA3AF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientBackground: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        float: 'float 4s ease-in-out infinite',
        gradientBackground: 'gradientBackground 10s ease infinite',
      },
      backgroundSize: {
        '200%': '200%',
      },
      boxShadow: {
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};