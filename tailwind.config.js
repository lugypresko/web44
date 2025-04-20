/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0e4377",
        secondary: "#213547",
        accent: "#f9a826",
      },
      fontFamily: {
        sans: ["sans-serif"],
      },
    },
  },
  plugins: [],
};
