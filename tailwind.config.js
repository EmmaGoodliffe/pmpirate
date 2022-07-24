const colors = require("tailwindcss/colors");

const darkSlates = ["#20252E", "#2F3846", "#3F4B5D", "#4F5E74", "#5F718B"];

const lightSlates = ["#C5D0E0", "#D5DDE9", "#E5EAF1", "#F5F7FA"];

module.exports = {
  mode: "jit",
  content: ["./public/*.html", "./src/components/*.svelte"],
  theme: {
    extend: {
      colors: {
        bg: darkSlates[0],
        fg: lightSlates[2],
        "light-fg": lightSlates[3],
        "dark-fg": lightSlates[1],
        pri: colors.cyan[500],
        "dark-pri": colors.cyan[800],
      },
    },
  },
  plugins: [],
};
