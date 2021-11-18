const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: [
        `"Noto Serif", "Apple Garamond", "Baskerville", "Times New Roman", "Droid Serif", "Times","Source Serif Pro", serif`,
      ],
    },
    extend: {
      colors: {
        accent: colors.purple["800"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
