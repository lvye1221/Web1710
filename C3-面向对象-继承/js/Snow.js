

function Snow() {
	FireWorm.call(this)   // 继承萤火虫所有属性
	
	this.ele.removeClass().addClass("snow")		// 移除萤火虫样式，并添加雪花的样式
}
//Snow.prototype = new FireWorm()   // 继承萤火虫所有方法 【注意】 这种会自动创建1个萤火虫对象
//Snow.prototype = FireWorm.prototype   // 继承萤火虫所有方法   【浅拷贝】


//  【深拷贝】
Snow.prototype = {}	// 新创建1个对象
for (var k in FireWorm.prototype) {  // 遍历萤火虫原型对象
	Snow.prototype[k] = FireWorm.prototype[k]  // 复制了对象中所有属性
}



Snow.prototype.fly = function() {  // 重写飞的方法
	var y = $("body").height() - 50
	
	this.ele.animate({top:y}, 5000)
}
