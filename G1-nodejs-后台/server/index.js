
// 引入express库文件， require 引入模块的意思
var express = require('express');

// 通过 express 函数获取到服务器的对象
//     接下来利用这个对象来定义接口
var app = express();


// .get 定义get方式的接口
// /goods  定义服务器的路径  
//             /goods 绝对路径   / 代表当前服务器根目录
//									http://csit.top
//    
app.get("/goods", function(req, res) {
	//  res  响应给客户端的对象
	// 返回给客户端的数据
	res.send("哈哈")
})

// 启动服务器，
//    3000  端口：（计算机有65535门）
//    web服务器  一般端口：80
app.listen(3000)