
// require 引入1个模块，引入1个功能的意思
// 系统的函数，引入 http 功能
var http = require('http');

// createServer 利用http功能，创建1个Web服务器
http.createServer(function(req,res) {    // 服务器的函数
    // res.end 设置返回给浏览器的内容
    res.end('hello world');

    // 监听端口号 3000
}).listen(3000);

