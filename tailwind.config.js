/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          pale: "#F1E8D1",
        },
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
          medium: "#ADADAD",
          lightMedium: "#737373",
          dark1: "#E0E0E0",
          white: "#FBFBFB",
          greenish: "#E0EFE8",
          slate:"#294439",
          whitish:"#DADADA"
        },
        grey:{
          light:"#EDEDED"
        },
        green: {
          teal: "#69A88D",
          pale: "#A5D9DC6B",
          seafFoam: "#69A88D40",
          gray: "rgba(105, 168, 141, 0.25)",
          none: "#436757",
          pastel:"#EAF3EF",
        },
        red: {
          fiery: "#FD26266B",
        },
        brown: {
          deep: "#1E03246B",
        },
        beige: "#E2C7BD6B",
        black: {
          pitch: "#000000",
          deep: "#1B1B1B",
          gray: "#4D4D4D",
          charcol:"#020202B2",
          semi: "rgba(0, 0, 0, 0.41)",
          opaque: "rgba(0, 0, 0, 0.66)",

        },
        silver: {
          dull: "#A7A7A7",
          light:"#C9C9C9"
        },
        smoke: {
          white: "rgba(255, 255, 255, 0.6);",
        },
      },
      fontSize: {
        //    14px      21px
        csm: ["0.875rem", "1.313rem"],
        //    16px      22px
        cmd1: ["1rem", "1.375rem"],
        //    16px      18.75px
        cmd3: ["1rem", "1.172rem"],
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
        //     40px      60px
        c3xl1: ["2.5rem", "3.75rem"],
        //     48px      72px
        c3xl2: ["3rem", "4.5rem"],
        //     64px     96px
        c4xl1: ["4rem", "6rem"],
        //     64px     102.4px
        c4xl: ["4rem", "6.4rem"],
      },
    },
  },
  plugins: [],
};
