const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// log
console.log('NODE_ENV', process.env.NODE_ENV)
console.log('BASE_ENV', process.env.BASE_ENV)

module.exports = {
  /**
   * 入口文件
   */
  entry: path.join(__dirname, '../src/index.tsx'),

  /**
   *  出口文件
   */
  output: {
    //打包结果输出的路径
    path: path.join(__dirname, '../dist'),

    //每个输出的js文件的名称
    filename: 'static/js/[name].js',

    //webpack5内置的，webpack4中需要配置clean-webpack-plugin来删除之前的dist
    clean: true,

    //打包后文件的公共前缀路径
    publicPath: '/',
  },

  /**
   * 规则配置 加载器
   */
  module: {
    rules: [
      // 解析ts代码
      {
        test: /.(ts|tsx)$/, //匹配ts、tsx文件
        use: {
          loader: 'babel-loader',
          options: {
            // 执行顺序由右往左,所以先处理ts,再处理jsx,最后再试一下babel转换为低版本语法
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: 3,
                },
              ],
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      // 解析css代码
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // 解析sass代码
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  /**
   * 解析配置下的选项
   */
  resolve: {
    extensions: ['.tsx', '.js', '.ts'],
  },

  /**
   * 插件配置
   */
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      inject: true, // 自动注入静态资源
    }),
  ],
}
