const purgeCSS = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    // tailwindcss("./tailwind.config.js"),
    // require("autoprefixer"),
    require("tailwindcss"),
    purgeCSS({
      content: ["./src/**/*.js"],
      css: ["./src/**/*.css"],
    }),
  ],
};
