const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

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
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".wrapper": {
          maxWidth: "1400px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "0.75rem",
          paddingRight: "0.75rem",

          "(min-width: 500px)": {
            paddingLeft: "2rem",
            paddingRight: "2rem",
          },
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
