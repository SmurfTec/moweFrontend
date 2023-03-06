/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          glacier:"#E6F2ED"
        }
      }
    },
  },
  plugins: [],
}