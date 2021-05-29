module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      'white': '#ffffff',
      'xieyezi-black': '#171717',
      'xieyezi-content':'#262626'
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
