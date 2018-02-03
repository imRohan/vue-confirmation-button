const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/vue-confirmation-button.vue'),
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'vue-confirmation-button.js'
  },
  module: {
    rules: [
      {
				test: /\.vue$/, 
				loader: 'vue-loader', 
				options: {
						loaders: {
								js: 'babel-loader?presets[]=es2015&plugins[]=transform-runtime'
						}
				}
      },
    ],
  },
	plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    })
  ],
  resolve: {
    modules: [path.resolve(__dirname, "app"), "node_modules"],
    alias: {
      vue: 'vue/dist/vue.js',
    },
  }
};
