const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.join(__dirname, "src/index.js"),
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },

  module: {
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
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "postcss-loader",
        ],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },

  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 3001,
  },

  resolve: {
    extensions: [".mjs", ".ts", ".tsx", ".js", ".jsx"],
    alias: {
      // Here is some example for aliases. now you can use absolute import.
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    // The plugin will generate an HTML5 file for you that includes all your
    // webpack bundles in the body using script tags.
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "tailwind.css",
    }),
  ],
  //   mode: "developer",
};
