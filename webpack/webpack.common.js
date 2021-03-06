/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.jsx',
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '..'),
    }),
    new HtmlWebpackPlugin({
      inject: 'true',
      template: path.resolve(__dirname, '..', 'src', 'index.template.html'),
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.rs$/,
        use: [{
          loader: 'wasm-loader',
        }, {
          loader: 'rust-native-wasm-loader',
          options: {
            gc: true,
            release: true,
          },
        }],
      },
    ],
  },
}
