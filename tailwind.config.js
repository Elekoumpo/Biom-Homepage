module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './src/*.css'],
  darkMode: false,
  theme: {
    screens: {
      'md': '1440px',
    },
    extend: {
      fontSize: {
        '5xl': '25px',
        'md': '25px',
        'lg': '36px',
        'xl': '48px',
        '2xl': '60px',
        '3xl': '72px',
      },
      colors:{
        'custom-yellow': '#DDA74A',
        'light-green': '#DAE5E5',
        'dark-green':'#004A4C',
        'hover-color': "#FFFAFA",
        'darker-green':'#002D33',
        'hover-section2':'#023436',
        'quote-background':'#F2F2F2'
      },
      fontFamily: {
        'brandon': ['Brandon Grotesque Regular', 'sans-serif'],
        'chronicle-display': ['Chronicle Display', 'serif']
      },
      spacing: {
        '184': '735px',
      },
    },
  },
  variants: {
    extend: {
      translate: ['group-hover', 'hover'],
      opacity: ['group-hover', 'hover'],
    },
  },
  plugins: [],
}