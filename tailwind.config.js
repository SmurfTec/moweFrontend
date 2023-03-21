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
          gunMetal: " #767676",
          snow: "#FAFAFA",
          platinum: "#E4E4E4",
          cool: "#202020F2",

        },
        green: {
          teal: "#69A88D",
          pale: "#A5D9DC6B",
          seafFoam:"#69A88D40"
          

        },
        red: {
          fiery: "#FD26266B",
        },
        brown: {
          deep: "#1E03246B",
        },
        beige: "#E2C7BD6B",
        black:{
          deep:"#1B1B1B"
        },
        silver:{
         dull: "#A7A7A7"
        }
      },
      fontSize: {
        //    14px      21px
        csm: ["0.875rem", "1.313rem"],
        //    16px      22px
        cmd1: ["1rem", "1.375rem"],
        //    16px      24px
        cmd: ["1rem", "1.5rem"],
        //    20px      23px
        cmd2: ["1.25rem", "1.46rem"],
        //      20px       30px
        c2lg: ["1.25rem", "1.875rem"],
        //     24px      36px
        c2xl: ["1.5rem", "2.25rem"],
        //     24px      36px
        c2xl2: ["1.5rem", "2.4rem"],
        //     32px      48px
        c3xl: ["2rem", "3rem"],
        //     64px     102.4px
        c4xl: ["4rem", "6.4rem"],
      },
    },
  },
  plugins: [],
};
