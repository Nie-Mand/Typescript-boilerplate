module.exports = {
  content: ['./apps/webapp/**/*.{html,tsx}', './libs/ui/**/*.tsx'],
  // darkMode: class
  theme: {
    extend: {
      colors: {
        primary: '#fdac07',
        'primary-lighter': '#fdca62',
        'primary-darker': '#ca8702',

        social: {
          github: '#171515',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
