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
        // Fiery Red and Gold only
        yagolRed: '#FF3737',
        yagolGold: '#FFD700',
      },
    },
  },
  plugins: [],
}

