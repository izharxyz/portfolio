/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter"]
      },

      colors: {
        'bg': '#17171F',
        'selected-text': '#A3A3FF',
        'primary': '#3F3FFF',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35',
        'secondary-text': '#8f8f8f',
        'jetblack': '#111111',
        'dimwhite': '#ececec',
        'neonblue': '#5452e2',
        'blackbrown': '#212121',
        'mandy': '#e25452',
        'cyanx': '#52e0e2' 
      }
    },
  },
  plugins: [],
}
