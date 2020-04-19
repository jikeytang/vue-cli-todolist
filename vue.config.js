const jquery = require('jquery')
const webpack = require('webpack')

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery'
      })
    ]
  }
};
