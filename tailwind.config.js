/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "primary-dark": "#201f20",
        "primary-light": "#d9d9d9",
        "primary-color": "#d2c8fa",
        "secondary-dark": "#35323a",
      },
      backgroundImage: {
        header: "url('src/tom-parkes-Ns-BIiW_cNU-unsplash.jpg)",
      },
    },
  },

  plugins: [],
};
