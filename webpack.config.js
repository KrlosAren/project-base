const path = require('path')
const HtmlWebpackPlugin  = require('html-webpack-plugin')


module.exports = {
  entry: {
    app : path.resolve(__dirname, 'src/index.js')
  },
  watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devServer: {
    port: 4000,
    open: true,
    watchContentBase: true
  },
  devtool: 'inline-source-map',
  plugins : [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    })
  ]
}