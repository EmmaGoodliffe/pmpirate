const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./public/*.html", "./src/components/*.svelte"],
  theme: {
    extend: {
      colors: {
        bg: colors.gray[800],
        p: colors.cyan[500],
        // s: colors.gray[700],
        "dark-p": colors.cyan[800],
        "dark-s": colors.gray[400],
        "light-s": colors.gray[200],
        // good: colors.green[500],
        // bad: colors.red[500],
      },
    },
  },
  plugins: [],
};
