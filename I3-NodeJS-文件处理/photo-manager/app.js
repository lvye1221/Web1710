
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


// 定义接口，列举所有图片
app.get('/photolist', function (req, res) {

    console.log(req)

    // req 获取前台传递过来的数据
    // name  是前台传递回来的数据
    var name = req.query.name;          // 文件夹名

    // 读取当前文件夹下 的所有图片的列表
    fs.readdir("./images/" + name, function(err, files) {
        res.json(files)
    })
});


// 引入表单格式化的模块
var formidable = require('formidable');
var path = require('path')

// 定义1个post接口
app.post('/upload', function (req, res) {
    
    // 格式化1个表单
    var form = new formidable.IncomingForm();

    // 设置文件的上传路径 
    //    __dirname  当前文件所在路径
    form.uploadDir = path.normalize(__dirname + "/tempup/");

    form.parse(req, function(err, fields, files, next) {

        console.log(fields.folder);


        // 输出图片路径, 上传到服务器的路径
        var filePath = files.tp.path;

        // 将图片移动到对应的图片文件夹中
        // 将图片移动到01图片文件夹中

        var newpath = path.normalize("./images/01/1.png");

        // rename 文件改名
        fs.rename(filePath, newpath, function(err) {
            if (err) {
                res.json({result: "失败"})
                return ;
            }
            res.json({result: "成功"})
        })

        
        // var newpath = path.normalize("./images/01/1.png");

        // // 1. 读出上传的图片内容
        // fs.readFile(filePath, 'utf8', function(err, str) {


        //     // 2. 图片内容写入到文件夹中
        //     fs.writeFile(newpath, str, function(err, str) {
        //         res.json({result: "成功！"})
        //     })
        // })
    });

})










// 设置 html目录  为静态资源 的目录
//     其中的 index.html 就是默认打开的文件
//  意味着 ： 服务器的根目录是  html
//             localhost:3000
//             IP:3000
//             域名:3000
app.use(express.static('html'));
app.use(express.static('images'));


//           app.listen   启动服务器
//                      3000 端口
//                      function 启动成功会自动调用此函数
var server = app.listen(3000, function () {
  var host = server.address().address;    
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});