/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          glacier: "#E6F2ED",
        },
        gray:{
          light:"#CACACA",
          charcol:"#1B1B1B",
          misty:"#D1D1D1"
        },
        green:{
          teal:"#69A88D"
        }
      },
      fontSize: {
        c2xl: ["1.5rem", "2.25rem"],
      },
    },
  },
  plugins: [],
};
