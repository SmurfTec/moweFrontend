/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          glacier: "#E6F2ED",
        },
        gray: {
          light: "#CACACA",
          charcol: "#1B1B1B",
          misty: "#D1D1D1",
          dark: "#686868",
          thin: "#DDDDDD",
          gunMetal:" #767676",
          snow:"#FAFAFA",
          platinum:"#E4E4E4"
        },
        green: {
          teal: "#69A88D",
        },
      },
      fontSize: {
        //    16px      22px
        cmd1: ["1rem", "1.375rem"],
        //    16px      24px
        cmd: ["1rem", "1.5rem"],

        //      20px       30px
        c2lg: ["1.25rem", "1.875rem"],
        //     24px      36px
        c2xl: ["1.5rem", "2.25rem"],
      },
    },
  },
  plugins: [],
};
