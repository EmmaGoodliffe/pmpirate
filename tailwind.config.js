const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./public/*.html", "./src/components/*.svelte"],
  theme: {
    extend: {
      colors: {
        bg: colors.gray[800],
        pri: colors.cyan[500],
        "dark-pri": colors.cyan[800],
        sec: colors.gray[200],
        "light-sec": colors.gray[50],
        "dark-sec": colors.gray[400],
        // good: colors.green[500],
        // bad: colors.red[500],
      },
    },
  },
  plugins: [],
};
