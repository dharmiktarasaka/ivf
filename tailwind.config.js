/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          brand: '#0D5C46', // Elegant Emerald Green
        },
        blush: {
          brand: '#E9F2EE', // Soft Mint/Sage Tint
        },
        plum: {
          brand: '#133B2E', // Deep Forest Green / Charcoal
        },
        peach: {
          brand: '#D4B895', // Champagne Gold
        },
        lavender: {
          brand: '#C8D7CF', // Muted Sage Accent
        },
        sage: {
          brand: '#6E9C88', // Calm Sage Green
        },
        cream: {
          brand: '#FAF6F0', // Champagne Cream
        },
        bgLight: '#F6F8F6', // Very Light Mint-Cream Background
        darkText: '#1A2621', // Forest Charcoal Text
        mutedText: '#52665E', // Sage Gray Muted Text
      },
      fontFamily: {
        heading: ['"Playfair Display"', '"Cormorant Garamond"', '"DM Serif Display"', 'serif'],
        body: ['Inter', 'Manrope', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
