

function Enemy() {
	
	
	// 敌机的id不断自增
	//  this.id  代表在自己敌机中新增了属性 id
	this.id = "e" + gameEngine.enemys.len++

	// 将当前敌机的对象 保存到 游戏引擎中的enemys空间中
	gameEngine.enemys[this.id] = this
	
	console.log(gameEngine.enemys)
	
	// 上面因为id是变量，所以不能通过 . 的方式来新增
//	gameEngine.enemys.id = this
//	gameEngine.enemys["id"] = this

	
	this.hp = 1		    // 血量
	this.speed = 100 	// 速度
	
	// DOM 元素
	this.ele = $("<div></div>")
	this.ele.addClass("enemy")
	this.ele.appendTo("#box")
	
	// 随机x位置
	var x = $("body").width() * Math.random()
	this.ele.css({
		top: -500,
		left: x
	})
}

// 移动
Enemy.prototype.move = function() {
	var y = $("body").height() // 页面高度
	
	//              100000 / speed
	// 100 慢                1000
	// 200 较快               500
	// 300 快                   333.333
	var t = 100000 / this.speed
	
	// 测试输出当前飞机运动的时间
//	console.log("当前飞机的速度值: " + this.speed)
	
	
	var self = this  // 备份对象
	this.ele.animate({top: y}, t, "linear", function() {
		this.remove()
		
		// 删除已经飞到底部的 敌机对象
		delete gameEngine.enemys[self.id]
	})
}

