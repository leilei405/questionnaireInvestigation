const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

module.exports = merge(baseConfig, {
  // 开发模式下打包速度更快，省去了一些代码优化步骤
  mode: 'development',

  devtool: 'eval-cheap-module-source-map',

  devServer: {
    port: 8000, //服务端口号
    hot: true, //开启热模块替换功能，后面会有对react模块热替换的具体配置
    compress: false, //gzip压缩，开发环境下不用开启，提升热更新的速度
    historyApiFallback: true, //解决history路由一刷新变404的问题
    static: {
      directory: path.join(__dirname, '../public'), //托管静态资源public文件夹
    },
  },
})
