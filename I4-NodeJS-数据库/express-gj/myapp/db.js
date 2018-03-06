
// 引入模块mongoose，       本地需要安装  cnpm install mongoose --save
var mongoose = require('mongoose');

// 连接到本地数据库           IP:端口   /      数据库名  
mongoose.connect('mongodb://localhost:27017/photo-manager');


// 将 mongoose 对象暴露出去
module.exports = mongoose
