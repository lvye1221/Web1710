

// 引入fs模块， 是 NodeJS 默认就提供了的
var fs = require("fs")

// readFile 读取文件
//              路径    文件的编码      读取文件后的回调函数
fs.readFile('./data.txt', 'utf8', function(err, data) {
    // 1. 得到内容
    var str = data;

    // 2. 按照 换行符(\n) 分隔    \r 回车但不换行
    //                           windows 系统的换行      \r\n
    //                           linux 系统的换行        \n
    var arr = str.split("\n")

    // 定义新数组，用于存储所有人的名字
    var newArr = []

    // 3. 遍历数组，找出所有的人
    for (var i = 0; i < arr.length; i++) {
        var line = arr[i]  // 下标为i的元素，是一行字符串：例如："9,,蒋艳,2017/2/27 8:48"
    
        // 3.1 按逗号分隔line，得到新数组 arr2
        var arr2 = line.split(",")

        // 3.2 名字
        var name = arr2[2]
        // if (undefined) {    // undefined 是条件。代表是false, 
        //     console.log("不会执行这句话！")
        // }

        if (name) {      // 去除不存在的名字       
            newArr.push(name)       // 将name值压入到数组 newArr
            // console.log(name)
        }
    }

    // 到这里，拿到了名字数组
    console.log(newArr.length)
    // 统计其中有多少个人
    // 思路：
    //     每个人的姓名是唯一的
    //      js: 对象 的属性名 ==> 用一个对象来存储它
    
    var obj = {}

    // obj.zhangsan = 0     // 将zhangsan保存到对象
    // obj.lisi = 0
    // obj.zhangsan = 0

    // obj.马琼琼 = 0
    // obj.马琼琼 = 0
    // obj.马琼琼 = 0
    // obj.何峰 = 0

    for (var i = 0; i < newArr.length; i++) {
        var name = newArr[i];    // 取出数组中保存的姓名
        
        obj[name] = 0             // 保存到对象中
    }
    
    
    var count = 0;
    for (var key in obj) {          // 遍历对象obj 
        count++                     // 有1个属性，那么计数器就加1
    }
    
    console.log("总人数：" + count)
});



