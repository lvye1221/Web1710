
// 引入模块mongoose，       本地需要安装  cnpm install mongoose --save
var mongoose = require('mongoose');

// 连接到本地数据库           IP:端口   /      数据库名  
mongoose.connect('mongodb://localhost:27017/photo-manager');

// 创建关联数据库的数据模型
var userSchema = new mongoose.Schema({
    username: String,     // 用户名 类型是 字符串
    password: String      // 密码 类型是 字符串
});

// user 数据表，【注意】 mongoose 会自动在传入的表名后新增1个s
//       user  ==> users
var u = mongoose.model('user', userSchema);

// 查找数据
// u.find({}, function(err, docs) {
//     console.log(docs)
// })

// 1. 查找
// 根据传入的条件查找 数据库中的数据
// u.find({username: "zhangsan"}, function(err, docs) {
//   console.log(docs)
// })

// u.findOne({username: "zhangsan"}, function(err, docs) {
//   console.log(docs)
// })

// 2. 增加数据
//          数据，                       回调函数
// u.create({username: "new", password: "123"}, function(err, docs) {
//   console.log("create ok")
// })

// 3. 删除数据
// u.findOne({username: "zhangsan"}, function(err, docs) { // 查找我们的1条数据
//   // 找到的数据是 docs
//   docs.remove(function(err) {        // 删除记录
//     if (err) {
//       console.log("删除失败");
//       return ;
//     }
//     console.log("删除成功")
//   })
// })

// 4. 修改

// u.findOne({username: "zhangsan"}, function(err, docs) { // 查找我们的1条数据

//   docs.password = "888888"  // 修改对象的密码

//   docs.save(function() {
//     console.log("修改成功")
//   })

// })

//             条件                        新的物体                        回调函数
u.update({username: "zhangsan"}, {username:"xiaoming", password: "6666"}, function() {
  console.log("更新成功")
})




