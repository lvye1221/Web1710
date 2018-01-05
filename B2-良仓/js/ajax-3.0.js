
// 登陆或注册函数
// 参数：
//    json json对象  是要发送给服务器的数据
//    cb   函数           回调函数。 收到数据之后主动通知这个函数

function loginOrRegister(json, cb)
{
	// 创建请求对象
	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			// 取出服务器返回的数据
			var str = xhr.responseText;
			
			// 将数据字符串转换成JSON对象
			var obj = JSON.parse(str)
			
			// cb 是函数
			// 这里 将获取到的数据传递给调用者
			cb(obj)
			
//			if (obj.code == 0) {
//				alert("登陆成功")
//			} else {
//				alert(obj.message)
//			}
		}
	}
	
	xhr.open("POST", "http://csit.top/api_user.php", true);
	
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	
	var obj = json
	
	var str = getParams(obj)
	
	xhr.send(str)
}




// getParams 函数功能： 将JSON对象转换成查询字符串（例如：username=zhangsan&possword=123456&status=register）
// 参数要求： JSON对象，里面只能存在一层键值对
// 返回值： 查询字符串
function getParams(obj)
{
	var str = ""

	// 快速遍历，可以遍历对象中的所有属性
	for (var k in obj) {
		// 拼接属性名
		str += k
		// 在中间拼接 = 号
		str += "="
		// 拼接属性值
		str += obj[k]
		// 在后面拼接 & 号
		str += "&"
	}
	
	// 删掉最后一个
	str = str.substring(0, str.length-1)
	
	// 输出循环拼接之后的值
	// console.log(str)
	return str
}




// obj 是一个对象
// 		json:  数据
// 		method: 请求方式 GET/POST
// 		cb: 回调函数
// 		url: 请求地址
function ajax(obj)
{
	
	
	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function() {
		
		
		if (xhr.readyState == 4 && xhr.status == 200) {
			// 获取到值
			var str = xhr.responseText;
			
		
			// 字符串转换成 JS的对象
			var o = JSON.parse(str)
			
			// 将获取回来的数据传递给回调函数
			obj.cb(o)
		}
		
	}
	
	// api_goods.php?cat_id=45&page=1
	//              ? 查询字符串
	if (obj.method == "GET") {  // GET 方式才要拼接数据
		obj.url += "?"  // 拼接?
		obj.url += getParams(obj.json)  // 拼接查询字符串
	}
	
	xhr.open(obj.method, obj.url, true)

	if (obj.token) {
		// 如果传递的参数中存在token值，那么设置ajax的请求头
		xhr.setRequestHeader("token", obj.token);
	}


	if (obj.method == "GET") {
		xhr.send()
	} else {
		// POST
		// 设置请求头
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	
		// obj.json JSON数据对象
		// getParams 自己定义的函数，用于将JSON对象转换成查询字符串
		var str = getParams(obj.json)
		
		// 发送数据到后台服务器
		xhr.send(str)
	}
}
