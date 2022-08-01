/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        lighter: "#F5F8FE",
        light: "#FEFEFE",
        dark: "#1F2A48",
        darker: "#131C2F",
      },
      colors: {
        dark: "#23262F",
      },
    },
    plugins: [],
  },
};
