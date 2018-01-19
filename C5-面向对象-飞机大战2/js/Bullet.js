
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



// 子弹爆炸
Bullet.prototype.boom = function() {
	
	var self = this			// 备份子弹对象
	
	var arr = [				// 子弹死亡变化的图片
		"url(img/die1.png)",
		"url(img/die2.png)"
	]
	var i = 0				// 图片变化编号
	
	self.ele.stop()			// 停止动画移动
	// 创建定时器
	var timer = setInterval(function() {
		self.ele.css({"background": arr[i++]})  // 改变背景图片
		self.ele.css({			// 改变宽高
			width: 40,
			height: 43
		})
		if (i >= arr.length) {		// 已经变到最后一张图片
			clearInterval(timer)	// 清除定时器
			
			self.ele.remove()		// 删除子弹
		}
	}, 100)
	
	
	
	
	// 删除全局对象中保存的子弹对象
	delete gameEngine.bullets[this.id]
}
