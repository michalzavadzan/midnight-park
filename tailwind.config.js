const { convertCompilerOptionsFromJson } = require('typescript')

const colors = require('./node_modules/tailwindcss/colors.js')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.trueGray,
      red: colors.red,
      yellow: colors.yellow,
      blue: colors.blue,
      green: colors.green,
      transparent: colors.transparent
    },
    backgroundColor: theme => ({
      ...theme('colors')
    }),
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
