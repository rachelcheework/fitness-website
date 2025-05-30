/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        // md: '768px',
        md: '955px',
        lg: '976px',
        xl: '1440px'
      },
      colors: {
        darkGray: '#141414',
        // darkGreen: '#27391C'
        darkGreen: '#006A4F'
      }
    },
  },
  plugins: [],
}