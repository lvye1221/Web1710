
var mongoose = require('mongoose');

// 连接到本地数据库
mongoose.connect('mongodb://localhost:27017/photo-manager');

mongoose.connection.on("connected", function () {//连接成功事件
  console.log("MongoDB connected success.")
});

mongoose.connection.on("error", function () {//连接失败事件
  console.log("MongoDB connected fail.")
});

mongoose.connection.on("disconnected", function () {//断开连接事件
  console.log("MongoDB connected disconnected.")
});



// 创建关联数据库的数据模型
var userSchema = new mongoose.Schema({
    username: String,     // 用户名 类型是 字符串
    password: String      // 密码 类型是 字符串
});

// user 数据表，【注意】 mongoose 会自动在传入的表名后新增1个s
var u = mongoose.model('user', userSchema);

// 查找数据
u.find({}, function(err, docs) {
    console.log(docs)
})




