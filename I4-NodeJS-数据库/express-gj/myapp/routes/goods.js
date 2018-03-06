var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// 新增1个接口
router.get("/list", function(req, res) {
  res.json({goodsname: "20yuan"})
})


module.exports = router;
