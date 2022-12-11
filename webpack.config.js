const webpack = require("webpack")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = (env, argv) => {
  const isDev = argv.mode === "development"

  return {
    entry: "./index.js",
    output: {
      clean: true,
    },
    devtool: isDev ? "eval-cheap-module-source-map" : "source-map",
    stats: "errors-warnings",
    devServer: {
      watchFiles: ["./sandbox/**/*.html"],
      open: true,
      historyApiFallback: true,
      client: {
        logging: "warn",
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/i,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.s?css$/i,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },
      ],
    },
    resolve: {
      extensions: ["...", ".jsx"],
    },
    plugins: [
      isDev && new ReactRefreshWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./sandbox/index.html",
      }),
      !isDev &&
        new MiniCssExtractPlugin({
          filename: "[name].[contenthash].css",
          chunkFilename: "[id].[contenthash].css",
        }),
      new webpack.ProvidePlugin({
        React: "react",
      }),
    ].filter(Boolean),
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  }
}
