const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(svg|png)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },

  devServer: {
    contentBase: path.resolve(__dirname, "/dist"),
    port: 3001,
  },

  // resolve: {
  //   extensions: [".mjs", ".ts", ".tsx", ".js", ".jsx"],
  //   alias: {
  //     // Here is some example for aliases. now you can use absolute import.
  //     "@components": path.resolve(__dirname, "./src/components"),
  //   },
  // },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "tailwind.css",
    }),
  ],
  //   mode: "developer",
};
