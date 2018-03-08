
// 引入连接 数据库的文件
var mongoose = require("../db")

/*
{
    username: "张三",
    "age": 18,
    sex: "张三",
    minzu: "汉族",
    card: "430123456789101112",
    phone: "12345678910",
    job: "学生"
}
*/
// 创建关联数据库的数据模型
var userSchema = new mongoose.Schema({
    userId: String,
    userName: String, // 用户名 类型是 字符串
    userPwd: String,      // 类型是 字符串
    orderList: Array,
    cardList: Array,
    addressList: Array,
});
    
    
// user 数据表，【注意】 mongoose 会自动在传入的表名后新增1个s
var u = mongoose.model('user', userSchema);

// 暴露u，目的是给后面接口调用
module.exports = u
