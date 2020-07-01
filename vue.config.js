module.exports = {
  publicPath: '/pomegranate',
  devServer: {
    port: 9002,
    hot: true,
    open: true,
    proxy: {
      '^/pomegranate/api': {
        target: 'http://localhost:9001'
      }
    }
  }
}
