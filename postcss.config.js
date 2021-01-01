// postcss.config.js
const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/index.js"],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  css: ["./dist/index.css"],
});
module.exports = {
  plugins: [
    require("autoprefixer"),
    tailwindcss("./tailwind.config.js"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
