const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path');


module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, 'demo'),
  },
  plugins : [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new CopyWebpackPlugin([
      { from: 'index.html', to: 'index.html'}
    ]),
    new UglifyJsPlugin({
      uglifyOptions: {
        ecma: 8,
        output: {
          comments: false,
        },
        compress: {
          warnings: false,
          drop_console: true,
          drop_debugger: true,
        }
      }
    }),
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.min.js',
    },
  },
});
