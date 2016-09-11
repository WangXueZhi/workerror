var path = require('path');
var webpack = require("webpack");

module.exports = {
  entry: {
    index:[path.resolve(__dirname, 'app/js/index.js')],
    search:[path.resolve(__dirname, 'app/js/search.js')],
    baoliao:[path.resolve(__dirname, 'app/js/baoliao.js')],
    searchResult:[path.resolve(__dirname, 'app/js/searchResult.js')],
    companyDetail:[path.resolve(__dirname, 'app/js/companyDetail.js')],
    itemDetail:[path.resolve(__dirname, 'app/js/itemDetail.js')],
    login:[path.resolve(__dirname, 'app/js/login.js')],
    register:[path.resolve(__dirname, 'app/js/register.js')],
    user:[path.resolve(__dirname, 'app/js/user.js')],
    react: ['react']
  },
  output: {
    publicPath: "http://localhost:8080/build/js/",
    path: path.resolve(__dirname, 'build/js/'),
    filename: '[name].js'
  },
	module: {
    loaders: [
	    {
	      test: /\.jsx?$/,
	      exclude: /node_modules/,
	      loader: 'babel',
        query: {
          presets: ['es2015','react']
        }
	    },
      {test: /\.css$/,loader: 'style!css!autoprefixer'},
      {test: /\.less$/,loader:'style!css!autoprefixer!less'},
      {test: /\.(jpg|png)$/, loader: "url?limit=8192"}
    ]
  },
  devServer:{
      contentBase: path.resolve(__dirname),  //静态资源的目录 相对路径,相对于当前路径 默认为当前config所在的目录
      devtool: 'eval',
      hot: true,        //自动刷新
      inline: true,
      port: 8080
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),//这个好像也是必须的，虽然我还没搞懂它的作用
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('react',  'react.js')
  ]
}
