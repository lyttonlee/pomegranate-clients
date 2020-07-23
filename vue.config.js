const CompressPlugin = require('compression-webpack-plugin')
module.exports = {
  publicPath: '/pomegranate',
  configureWebpack: {
    plugins: [
      new CompressPlugin({
        test: /\.(js|css|html|svg)$/
      })
    ],
  },
  devServer: {
    port: 9002,
    hot: true,
    open: true,
    proxy: {
      '^/pomegranate/api': {
        // target: 'http://www.huili.cool:9001'
        target: 'http://192.168.1.235:9003'
      }
    }
  }
}
