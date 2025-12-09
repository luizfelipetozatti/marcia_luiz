/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        'nobel-gold': '#B69356',
        brand: {
          50: '#FDFBF7',  // Background Light
          100: '#F5F0E6', // Secondary Background
          200: '#E6DCC9', // Borders
          300: '#D4C5A9',
          400: '#C0AB8E', // Beige/Gold
          500: '#A68A6D', // Main Brand Color (Suit tone)
          600: '#8C7056',
          700: '#6B5441',
          800: '#4A3B32', // Dark Text
          900: '#2E231E', // Darkest Text
        }
      }
    }
  },
  plugins: [],
}
