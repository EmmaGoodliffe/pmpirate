const colors = require("tailwindcss/colors");

// TODO: uninstall sass

module.exports = {
  mode: "jit",
  // TODO: change to src html
  content: ["./public/*.html", "./src/*.svelte"],
  theme: {
    extend: {
      // TODO: check if colours actually get used
      colors: {
        bg: colors.gray[800],
        p: colors.cyan[500],
        s: colors.gray[700],
        "dark-p": colors.cyan[800],
        "dark-s": colors.gray[400],
        "light-s": colors.gray[200],
        good: colors.green[500],
        bad: colors.red[500],
      },
      transitionDuration: {
        long: "700ms",
        short: "400ms",
      },
    },
  },
  plugins: [],
};
