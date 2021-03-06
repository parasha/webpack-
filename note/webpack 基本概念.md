## webpack的基本概念
> ver : 4.0.0

[官方文档](https://www.webpackjs.com/concepts/)

### 入口
入口可以指定一个或多个。默认值为：'./src'
1. 单入口
~~~JavaScript
module.exports = {
    entry: './src/index'
}
~~~
2. 多入口
~~~javascript
module.exports = {
    entry:{
        main: './src/main',
        vendor: './src/vendor',
        ...
    }
}
~~~
###  出口
规定输出的路径喝指定的文件名
~~~JavaScript
const past = require('path') // 这是 node 的标准模块，用来处理路径地址
module.exports = {
    input: './src/index'
    // __dirname : 当前工作目录的绝对路径
    // path.resolve(__dirname,'dist') 会返回一个拼接后的绝对路径
    output:{
        path: path.resolve(__dirname,'dist');
        filename: 'test.js'
    }
}
~~~
对多入口配置，使用占位符来保证文件名的唯一性
~~~JavaScript
module.exports = {
    entry:{
        main: './src/main',
        vendor: './src/vendor',
    },
    ooutput:{
        filename: '[name].js',
        path: path.resolve(__dirname,'./dist')
    }
}
~~~
### loader
配置在 modules.rules 数组中，用来处理所有非 js 文件。

每个 loader 的配置项有两个关键属性：test（识别文件） 和 use（执行 loader）
~~~JavaScript
const past = require('path') // 这是 node 的标准模块，用来处理路径地址
module.exports = {
    input: './src/index'
    // __dirname : 当前工作目录的绝对路径
    // path.resolve(__dirname,'dist') 会返回一个拼接后的绝对路径
    output:{
        path: path.resolve(__dirname,'dist');
        filename: 'test.js'
    },
    modules:{
        rules:[
            {test:/\.txt$/,use: 'raw-loader'}
        ]
    }
}
~~~
### plugins插件
插件都配置在 plugins 数组中。

功能很杂，基本什么都能做。

传入的都是 new 插件实例。
~~~JavaScript
const past = require('path') // 这是 node 的标准模块，用来处理路径地址
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件

module.exports = {
    input: './src/index'
    // __dirname : 当前工作目录的绝对路径
    // path.resolve(__dirname,'dist') 会返回一个拼接后的绝对路径
    output:{
        path: path.resolve(__dirname,'dist');
        filename: 'test.js'
    },
    modules:{
        rules:[
            {test:/\.txt$/,use: 'raw-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
}
~~~