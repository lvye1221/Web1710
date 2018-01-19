
function Bullet(x, y) {	// 构造函数

	// 定义子弹编号
	this.id = "b" + gameEngine.bullets.len++

	// 新增 this.id 属性，因为this.id是变量，所以要用 [] 访问
	//   this 代表当前创建的子弹对象
	gameEngine.bullets[this.id] = this
	
	
	
	
	



	this.ele = $("<div></div>")	 //创建子弹
	this.ele.removeClass().addClass("bullet")  // 添加样式
	this.ele.appendTo( "#box" )  // 添加到游戏盒子中
	
	// 设置初始位置
	this.ele.css({
		left: x,
		top: y
	})
	
	this.move()	// 开始移动
}

// 移动
Bullet.prototype.move = function() {
	// 备份
	var self = this
	
	this.ele.animate({top: 0}, 1000, function() {
		this.remove() 	// 移除自己
		
		// 删除 全局保存下来的子弹对象
		delete gameEngine.bullets[self.id]
	})
}
