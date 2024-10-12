/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      playfair: ["Playfair Display", "serif"],
      dmsans: ["Dm Sans", "sans-serif"],
    },
    extend: {
      colors: {
        brand: {
          primary: "#AD343E",
          secondary: "#474747",
          black: "#2C2F24",
          gray: "#DBDFD0",
          darkblue: "#182226",
          white: "#F9F9F7",
        },
      },
    },
  },
  plugins: [],
};
