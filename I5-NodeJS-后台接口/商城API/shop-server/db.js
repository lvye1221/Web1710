
// mongoose 连接的是 MongoDB 数据库
var mongoose = require('mongoose');

// 连接到本地数据库
// 【注意】 数据库名一定要与 mongodb 中对应起来
mongoose.connect('mongodb://localhost:27017/shop');


// 暴露
module.exports = mongoose
