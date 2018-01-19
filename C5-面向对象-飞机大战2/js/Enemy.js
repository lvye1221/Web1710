

function Enemy() {
	
	
	// 敌机的id不断自增
	//  this.id  代表在自己敌机中新增了属性 id
	this.id = "e" + gameEngine.enemys.len++

	// 将当前敌机的对象 保存到 游戏引擎中的enemys空间中
	gameEngine.enemys[this.id] = this
	
//	console.log(gameEngine.enemys)
	
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

// 让敌机掉血的方法
Enemy.prototype.looseBlood = function() {
	var self = this		// 备份
	
	this.hp--	// 自己血量减1
	
	if (this.hp <= 0) {		// 血量没了
		
		// 加分板加分
		//  this.score 当前敌机死亡的分数
		score.addScore(this.score)
		
		
		var i = 0			// 图片变化下标
		var timer = setInterval(function() {  // 图片变化定时器
			//  self.dieImg 自己的死亡图片数组
			self.ele.css("background", self.dieImg[i++])
			if (i >= self.dieImg.length) {	// 已经到最后一张图片了
				clearInterval(timer)		// 清除定时器
				self.ele.remove() 			// 删除自己的元素
			}
		}, 100)
		
		
		// 删除全局保存的敌机对象
		delete gameEngine.enemys[this.id]
	}
}
