/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter"]
      },

      colors: {
        'jetblack': '#111111',
        'fontwhite': '#ececec',
        'neonblue': '#5452e2',
        'blackbrown': '#212121',
        'mandy': '#e25452',
        'cyanx': '#52e0e2'
      }
    },
  },
  plugins: [],
}
