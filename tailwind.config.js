/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        deltaPrimaryColor: '#00909e',
        deltaBg: '#171717'
      },
      fontFamily:{
        raleway : ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [],
}
