const path = require('path')

module.exports = {
  entry: './js/index.js',
  output: {
    filename: './bundle.js'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: 'style-loader!css-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loaders: 'style-loader!html-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {

        },
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, "app"), "node_modules"],
    alias: {
      vue: 'vue/dist/vue.js',
      SRC: path.resolve(__dirname, 'src/')
    },
  }
};
