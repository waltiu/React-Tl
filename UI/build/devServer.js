
const  path=require('path')
module.exports={
    // 根目录下dist为基本目录
    contentBase: path.join(__dirname, 'dist'),
    // 自动压缩代码
    compress: true,
    // 服务端口为1208
    port: 1208,
    // 自动打开浏览器
    open: true
}