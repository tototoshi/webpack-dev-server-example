const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // https://github.com/webpack/webpack-dev-server/issues/2758
  // https://github.com/pmmmwh/react-refresh-webpack-plugin/blob/main/docs/TROUBLESHOOTING.md#webpack-5-compatibility-issues-with-webpack-dev-server3
  // In webpack-dev-server@3, there is a bug causing it to mis-judge the runtime environment when the Webpack 5 browserslist target is used.
  target: "web",
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
