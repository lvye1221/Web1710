var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


var user = require("../models/user")

// 新增1个接口, 显示所有用户
router.get("/list", function(req, res) {
  
  // 查询所有用户
  user.find({}, function(err, data) {
    res.json(data)
  })
  
})


module.exports = router;
