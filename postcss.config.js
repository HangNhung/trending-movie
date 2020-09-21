const purgeCSS = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    require("autoprefixer"),
    require("tailwindcss"),
    // purgeCSS({
    //   content: ["./src/**/*.js"],
    //   css: ["./src/**/*.css"],
    // }),
  ],
};
