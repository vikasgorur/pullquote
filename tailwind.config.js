module.exports = {
  purge: [
    './components/**/*.tsx',
    './pages/**/*.tsx'
  ],
  theme: {
    backgroundColor: theme => ({
      primary: '#FBF0D9',   /* Kindle sepia background color */
      secondary: '#635bff', /* Stripe button color -- stripe.com */
      paper: 'rgb(238, 238, 240)'
    }),
    extend: {},
  },
  variants: {},
  plugins: [],
}
