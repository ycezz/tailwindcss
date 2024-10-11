/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      general: ["General Sans", "sans-serif"],
    },
    extend: {
      colors: {
        brand: {
          primary: "#3461FF",
          secondary: "#000000",
          gray: "#FAFAFA",
          blackopacity: "#00000099",
          arrowopacity: "#0000004D",
          btngray: "#F8F9FF",
        },
      },
    },
  },
  plugins: [],
};
