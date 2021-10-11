const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

function resolveRoot(...args) {
  return path.resolve(__dirname, '../', ...args)
}

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  resolve: {
    extensions: ['.ts', '.js' ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: [/\.vert$/, /\.frag$/],
        type: "asset/source"
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml)$/i,
        type: 'assets/resource'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      root: resolveRoot()
    }),
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true)
    }),
    new HtmlWebpackPlugin({
      template: resolveRoot('public/index.html')
    })
  ],
  devServer: {
    static: {
      directory: resolveRoot('public')
    },
    compress: true
  }
};
