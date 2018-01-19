

function Enemy() {
	
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
	console.log("当前飞机的速度值: " + this.speed)
	
	this.ele.animate({top: y}, t, "linear", function() {
		this.remove()
	})
}

