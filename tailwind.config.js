/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,css}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'Poppins', 'sans-serif'],
        body: ['Lato', 'Inter', 'sans-serif'],
      },
      colors: {
        yagolRed: '#C1272D',
        yagolSilver: '#C0C0C0',
        yagolGold: '#FFD700',
        yagolDark: '#0A0A0A',
      },
    },
  },
  plugins: [],
}

