const path = require('path');
const HtmlWepackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: './src/index.js',
    sub: './src/index.js'
  },

  output: {
    // publicPath: '/', // 配合 server.js 使用
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 9000,
    open: true,
    hot: true,
    hotOnly: true
  },
  module: {
    rules: [{
      test: /\.(jpg|png)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name].[ext]?[hash]',
          outputPath: 'images/',
          limit: 1024
        }
      }
    }, {
      test: /\.(less)$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          // Enables/ Disables or setups number of loaders applied before CSS loader.
          // 0 => no loaders (default);
          // 1 => postcss-loader;
          // 2 => postcss-loader, less-loader
          importLoaders: 2,
          // modules: true
        }
      }, 'postcss-loader', 'less-loader']
    }, {
      test: /\.(eot|ttf|svg|woff)$/,
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'fonts'
        }
      }
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        "presets": [['@babel/preset-env', {
          useBuiltIns: 'usage' // 用到的 es6 的语法才会解析
        }]]
        // "presets": ['@babel/preset-env']
      }
    }]
  },
  plugins: [
    new HtmlWepackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}