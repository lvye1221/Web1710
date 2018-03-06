
var mongoose = require('mongoose');

// 连接到本地数据库
mongoose.connect('mongodb://localhost:27017/photo-manager');

mongoose.connection.on("connected", function () {//连接成功事件
    console.log("MongoDB connected success.")
});
  

// 定义数据库的模型
// var Schema = mongoose.Schema;

// // 创建关联数据库的数据模型
// var user = new Schema({
//     username: String,     // 用户名 类型是 字符串
//     password: String      // 密码 类型是 字符串
// });


// var u = mongoose.model('user', user);

// u.find({}, function(err, docs) {
//     console.log(docs)
// })




