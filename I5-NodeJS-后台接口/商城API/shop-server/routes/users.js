import { request } from 'https';

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// req.query 用于获取get的参数
// 

// 引入数据库模块
var user = require("../models/user")

// POST 请求 body
router.post('/login', function(req, res, next) {

  // req.body 用于获取post的参数
  var userName = req.body.userName
  var userPwd = req.body.userPwd

  var obj = {
    userName: userName, 
    userPwd: userPwd
  }

  user.findOne(obj, function(err, data) {

    if (data == null) {
      res.json({
        msg: "登陆失败，用户名或密码错误"
      })
      return
    }


    // 设置1个标记，标志用户已经登陆成功
    //    cookie 
    //  会自动将 cookie 发送给浏览器端

    res.cookie("a", "1", {
      maxAge: 60 * 60 * 1000           // 设置超时时间为 1小时
    })


    res.json({
      msg: "登陆成功"
    })




  })

  // console.log(userName, userPwd )

  // res.json({})
});







router.post("/logout", function(req, res) {
  var userName = req.cookies("a")
  if (userName) {
    // 说明之前登陆过了
  }
})






var good = require("../models/good")

// GET 请求   query
router.post('/list', function(req, res, next) {
  var page = req.query.page              // 分页功能
  var pagesize = req.query.pagesize
  var sort = req.query.sort              // 是否排序， 1正序，2，倒叙

  good.find({}, function(err, data) {
    // data 是1个数组
    //  page: 1, pagesize: 8     ==> 0, 7
    //  page: 2, pagesize: 8     ==> 8, 15
    //  page: 3, pagesize: 8     ==> 16, 23
    //  page: n, pagesize: m     ==> (n-1)*m, n*m-1
    var start = (page-1) * pagesize;
    var end = page * pagesize;

    // 筛选出对应分页的数据
    var arr = [];
    for (var i = start; i < end; i++) {
      arr.push( data[i] )
    }

    if (sort == 1) {
      arr.sort(function(a, b) {
        return a.salePrice > b.salePrice
      })
    } else {
      arr.sort(function(a, b) {
        return a.salePrice < b.salePrice
      })

    }

    res.json({
      msg: "获取成功",
      data: arr
    })
  })


}


module.exports = router;
