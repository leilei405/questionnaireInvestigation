const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

console.log(process.env.NODE_ENV) // production

module.exports = {
  mode: 'development',
  // 入口
  entry: path.join(__dirname, './src/index.tsx'),
  // 出口
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  // 解析配置下的选项
  resolve: {
    extensions: ['.js', '.tsx', '.ts'],
  },
  // 规则配置 加载器
  module: {
    rules: [
      // ts
      {
        test: /.(ts|tsx)$/, //匹配ts、tsx文件
        use: {
          loader: 'babel-loader',
          options: {
            //预设执行顺序由右往左，所以这里是先处理ts再处理jsx
            presets: ['@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      // css
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // sass
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },
  // 插件配置
  plugins: [
    // 模板用定义root节点的模板
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      inject: true, // 自动注入静态资源
    }),
  ],
  // 代理配置
  devServer: {
    port: 8000, // 端口配置
    open: true,
    proxy: [
      {
        context: ['/api'],
        target: 'http://120.26.197.151:3333',
      },
    ],
  },
}
