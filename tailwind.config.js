/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        greenPrimary: '#43a100',
        greenLight: '#e8fdc6',
        greenMid: '#abd770',
        orangePrimary: '#fd3900',
        orangeLight: '#ffecd2',
        orangeMid: '#ffaa79',
        neutralDark: '#2d2218',
        neutralLight: '#f5f5f4',
        neutralMid: '#b2b0ac',
        grayMid: '#838281',
        grayLight: '#e7e5e4',
      },
      boxShadow: {
        bottom: 'rgba(0, 0, 0, 0.15) 0px 1.5px 1.5px 0px',
      },
    },
  },
  plugins: [],
}
