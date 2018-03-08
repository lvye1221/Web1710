var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// 获取用户模型，通过此对象来操作数据
var user = require("../models/user")

// 增加all接口
router.get('/all', function(req, res, next) {
  // 查询数据库中所有的用户
  user.find({}, function(err, data) {
    res.json(data)
  })
});

// 查询某个用户
router.get('/find', function(req, res, next) {
  // 查询某个用户
  //   req.query.username 前端传递过来的参数
  // var obj = {username: req.query.username}

  var obj = {}
  
  for (var key in req.query) {    // 遍历所有的查询参数
    obj[key] = req.query[key]
  }
  console.log( obj )

  user.findOne(obj, function(err, data) {
    res.json(data)
  })
});

module.exports = router;
