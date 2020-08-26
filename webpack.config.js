const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "boundle.js",
    publicPath: "/",
  },

  module: {
    //  webpack only understands JavaScript and JSON files.
    // Loaders allow webpack to process other types of files
    // and convert them into valid modules that can be consumed by your application
    // and added to the dependency graph.
    rules: [
      {
        // which file or files should be transformed
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // which loader should be used to do the transforming
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        // css-loader giúp biên dịch @import và url()
        // style-loader: ghi style vào trong tag
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
  },

  resolve: {
    extensions: [".mjs", ".ts", ".tsx", ".js", ".jsx"],
    alias: {
      // Here is some example for aliases. now you can use absolute import. for example:
      // import Box from '@components/box/box;
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },

  plugins: [
    // The plugin will generate an HTML5 file for you that includes all your
    // webpack bundles in the body using script tags.
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  //   mode: "developer",
};
