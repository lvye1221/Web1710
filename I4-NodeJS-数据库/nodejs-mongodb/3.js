

//  require('mongoskin') 引入数据库连接模块
//  localhost:27017/animals  数据库连接字符串
//                               IP:端口/数据库名
// var db = require('mongoskin').db('mongodb://localhost:27017/photo-manager', {native_parser:true});
// db.bind('users');
// var result = db.users.find()

// console.log(result)


//  user 代表找数据库中名称 为 user 的集合
//    .find() 查找集合中的所有内容
// db.collection('users').find().toArray(function(err, result) {
//   // 如果出错了，就抛出此错误，程序终止
//   if (err) throw err;

//   // 输出数据库集合中的所有内容
//   console.log(result);
// });