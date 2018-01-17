

function FireWorm() {
	this.ele = $("<div></div>") 		// 创建div
	this.ele.addClass("fireworm")		// 添加样式
	this.ele.appendTo("body")			// 添加到页面body中
	
	
	var x = Math.random() * ($("body").width() - 50) // 随机位置
	var y = Math.random() * ($("body").height() - 50)
	
	this.ele.css({left: x, top: y})		// 初始位置
}

// 方法： 飞
FireWorm.prototype.fly = function() {
	
	var self = this 	// 先备份对象 萤火虫
	
	var x = Math.random() * ($("body").width() - 50) // 随机位置
	var y = Math.random() * ($("body").height() - 50)
	
	this.ele.animate({left:x, top:y}, 5000, function() {
		// 动画完成函数
		self.fly()
	})
}
