function Snow() {
	
	// 属性
	this.ele = $("<div></div>")	// 创建节点
	this.ele.addClass("snow")  // 添加样式： 设置了位置、大小等
	
	this.ele.appendTo("body")      // 添加到body节点中
	
	
	// 方法： 让萤火虫飞
	this.move = function() {
		// 移动萤火虫：
		//    1. 创建1个随机位置
		//    2. 调用jQuery 动画函数 animate
		//    3. 移动完成之后继续飞
		
		var x = Math.random() * ($("body").width() - 100)
		var y = Math.random() * ($("body").height() - 100)
		
		// 备份当前对象。在这里就是萤火虫对象
		var self = this
		
		// 对象的方法中可以任意使用 自己对象的属性
		this.ele.animate({
			left: x,
			top: y
		}, 1000, function() {
			// 回调函数，动画完成, 让萤火虫飞
			self.move()
		})
	}
	
}
