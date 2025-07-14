const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = 3000;

module.exports = {
  mode: 'development',

  entry: './app/index.js',
  output: {
    path: path.join(__dirname, 'build'),
	  filename: 'bundle.js'
  },
  module: {
    rules: [

      // First Rule
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      // Second Rule
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],

  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true
  }
};
