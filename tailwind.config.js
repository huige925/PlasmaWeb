/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D4AF37',
        'background-dark': '#080808',
        charcoal: '#0f0f0f',
        surface: '#161616',
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        serif: ['Noto Serif SC', 'serif'],
        sans: ['Inter Variable', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0px',
      },
    },
  },
  plugins: [],
}
