let path = require('path');
let webpack = require('webpack');
let webpackDevServer = require('webpack-dev-server');
module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'dist'), //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        filename: "bundle.js"
    },
    mode: 'development', // 设置mode
    devServer:{
    	historyApiFallback:true,
    	port:3000,
    	open:true,
    	contentBase: './',
    	hot: true,
    	compress: true,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
};