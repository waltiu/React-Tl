const merge = require('webpack-merge');
const config =require('./build/index')
const path=require('path')
module.exports=merge(config,{
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
})