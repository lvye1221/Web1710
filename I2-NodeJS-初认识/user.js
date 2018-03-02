
var userId = 100;     // 定义变量 userId

// 将变量暴露出给其他程序
//  a 暴露出来的名字
exports.a = userId
exports.add = function(a, b) {
    return a + b
}



// NodeJS -> Google V8 引擎
// 微信小程序 -> V8 引擎

// ES6 语法
// 