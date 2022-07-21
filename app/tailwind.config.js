const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'open-sans': ["Open Sans", ...defaultTheme.fontFamily.sans],
      'inter': ['Inter', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      borderRadius: {
        full: '50%',
      },
      colors: {
        // Colors for Housepets! characters
        'sp-grape': '#c694c7',
        'sp-peanut': '#6b5019',
        'sp-king': '#e0b574',
        'sp-bailey': '#76758f',
        'sp-great-kitsune': '#faebd9',
        'sp-maxwell': '#645b59',

        // Assigned colors for other Housepets! characters
        'sp-brown': '#4a3223',
        'sp-pale': '#ddad74',

        // Misc colors
        'sp-char-person': 'green',
        'sp-char-other': 'blue',
        'sp-char-unknown': 'red',
      }
    },
  },
  plugins: [],
}
