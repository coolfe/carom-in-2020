const HtmlWebpackPlugin  = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  entry: {
    "main": './config/main.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: './build.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    } ,{
      test: /\.(jpg|png|jpeg|gif|svg)$/,
        // loader: 'url-loader?limit=5073897'
        loader: 'url-loader',
        options: {
          limit: 5000,  //是把小于500B的文件打成Base64的格式，写入JS
          name: 'config/[name]-[hash:7].[ext]'
        }
    }, {
      test:/\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['env'],
        plugins: ['transform-runtime']
      }
      }, {
        test: /\.vue$/,
        loader: 'vue-loader'
      }]
  },
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      // 插件的执行顺序与元素有关
      template: `./config/index.html`
    })
  ]
}