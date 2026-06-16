/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        knchr: {
          navy: '#0F172A',  // Authoritative deep slate/blue
          gold: '#F59E0B',  // Warm professional gold for CTAs
          light: '#F8FAFC', // Soft white/gray background contrast
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}