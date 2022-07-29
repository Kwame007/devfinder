/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        lighter: "#F5F8FE",
        light: "#FEFEFE",
        dark: "#23262F",
      },
      colors: {
        dark: "#23262F",
      },
    },
    plugins: [],
  },
};
