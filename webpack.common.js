const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "build"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      { test: /\.(jpe?g|png|gif|ico|svg)$/i, use: "file?name=[name].[ext]" },
      {
        test: /\.(ts|tsx)$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "src/images/favicon.ico",
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
