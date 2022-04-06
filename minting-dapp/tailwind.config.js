const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.tsx', './public/index.html'],
  theme: {
    extend: {
      colors: {
        popupsbg: colors.white,
        neutral: colors.slate,
        primary: colors.indigo,
        primarytxt: colors.white,
        warning: colors.yellow,
        warningtxt: colors.black,
        error: colors.red,
        errortxt: colors.white,
      },
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    // ...
    backdropOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    ringOpacity: false,
    textOpacity: false,
  },
};
