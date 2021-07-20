const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    divideWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      colors: {
        teal: colors.teal,
        sky: colors.sky,
        trueGray: colors.trueGray,
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      backgroundImage: ["hover", "focus", "active"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
