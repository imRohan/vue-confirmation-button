const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  watch: true,
  devServer: {
    disableHostCheck: true,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    },
  },
});
