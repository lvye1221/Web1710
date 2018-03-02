
var fs = require('fs')                  // 引入fs模块
var express = require('express');       // 引入express模块, 存放在 express变量中

var app = express();                    // 使用 express，创建了1个服务器对象（启动服务器、配置接口...）

// app.get  是GET方法，作用是定义1个 请求方式为 GET 的接口
//     '/'  代表服务器请求的接口路径，这里 '/' 代表服务器根目录
//     function (req, res)  代表的是当前接口的处理程序
//               req        代表请求参数，从前台程序传递过来的数据都在这里
//               res        代表响应数据，从服务器返回给前端的东西
// app.get('/', function (req, res) {
//   res.send('Hello World!');  // 返回 HelloWorld 数据给前端页面
// });


// 新增1个接口
app.get('/xiaoming', function (req, res) {
    res.send('小明，棒棒棒!');  // 返回数据给前端页面
});

// 定义API接口
// 显示当前服务器下的所有文件
//  list
app.get('/list', function (req, res) {
    // 返回数据希望是 JSON格式
    // var files = ["文件夹1", "文件夹2"];   // 模拟的数据

    // 读取 images 下面的所有文件
    fs.readdir('./images', 'utf8', function(err, files) {
        res.json(files);  // 返回 JSON 数据给前端页面
    })
    
});



// 设置 html目录  为静态资源 的目录
//     其中的 index.html 就是默认打开的文件
//  意味着 ： 服务器的根目录是  html
//             localhost:3000
//             IP:3000
//             域名:3000
app.use(express.static('html'));


//           app.listen   启动服务器
//                      3000 端口
//                      function 启动成功会自动调用此函数
var server = app.listen(3000, function () {
  var host = server.address().address;    
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});