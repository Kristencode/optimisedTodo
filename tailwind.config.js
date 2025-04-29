/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkgray: "#1c1c1e",
        lightGray: "#2c2c2e"
      },
    },
  },
  plugins: [],
};
