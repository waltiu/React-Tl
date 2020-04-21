const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const basePath = path.resolve(__dirname, '../');

// 负责将html文档虚拟到根目录下
let htmlWebpackPlugin = new HtmlWebpackPlugin({
    // 虚拟的html文件名 index.html
    filename: 'index.html',
    // 虚拟html的模板为 src下的index.html
    template: path.resolve(__dirname, '../src/index.html')
})
module.exports = {
    // 开发模式
    mode: 'development',
    // 配置入口文件
    entry: {
app:path.resolve(basePath,'src','index.js'),
    },
    // 出口文件目录为根目录下dist, 输出的文件名为main
    // 配置开发服务器, 并配置自动刷新
    devServer: require('./devServer'),
    // 插件库
    plugins: [htmlWebpackPlugin],
    module: {
        // 根据文件后缀匹配规则
        rules: [
            // 配置js/jsx语法解析
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
            //scss解析
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            }
        ]
    }
}
