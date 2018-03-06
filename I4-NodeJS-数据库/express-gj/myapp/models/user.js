

var mongoose = require("../db")

// 创建关联数据库的数据模型
var userSchema = new mongoose.Schema({
    username: String,     // 用户名 类型是 字符串
    password: String      // 密码 类型是 字符串
});

// user 数据表，【注意】 mongoose 会自动在传入的表名后新增1个s
//       user  ==> users
var u = mongoose.model(
    'user', 
    userSchema
);

// module 自带的，代表可以导出模块
module.exports = u;
