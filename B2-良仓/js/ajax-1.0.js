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
