const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/"
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      { 
        test: /\.js?$/, 
        use: "babel-loader", 
        exclude: /node_modules/ 
      },
      { 
        test: /\.css?$/, 
        use: ["style-loader", "css-loader"],
      },
      { 
        test: /\.(png|j?g|svg|gif)?$/, 
        use: "file-loader",
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html'
    })
  ]
}