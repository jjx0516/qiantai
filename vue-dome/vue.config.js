module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {   // 只针对/api开头的请求
        target: 'http://39.98.123.211', // 转发的目标url
        changeOrigin: true,   // 支持跨域
        
      }
    }
  }
}