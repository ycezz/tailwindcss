/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      spacing: {
        '13': '3.25rem',
      },
      fontFamily: {
        inter: ['Inter'],
      },
      colors: {
        putri: '#bada55',
        kopi: '#c0ffee'
      },
    },
  },
  plugins: [],
}

