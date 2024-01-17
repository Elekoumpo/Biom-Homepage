module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'custom-yellow': '#DDA74A'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}