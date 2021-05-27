const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },

  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                strictMath: true,
              },
            }
          }
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'public', 'index.html')
    })
  ],
  devtool: "source-map",
  target: "web",
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    },
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: false,
    noInfo: true,
    port: 1234,
    open: true,
  },
};
