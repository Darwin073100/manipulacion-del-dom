const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
console.log('Hola');
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },

  mode: 'development',
  watch: true,
  resolve: {
    extensions: [".js"],
    alias:{
        '@styles': path.resolve(__dirname, 'src/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
        filename: 'assets/[name].[contenthash].css'
    }),

    new CopyPlugin({
        patterns:[
            {
                from: path.resolve(__dirname, "src","assets"),
                to: "assets/images"
            }
        ]
    }),
    new Dotenv(),
  ],
};
