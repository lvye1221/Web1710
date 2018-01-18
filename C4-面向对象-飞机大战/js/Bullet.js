
function Bullet(x, y) {	// 构造函数

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
	this.ele.animate({top: 0}, 1000, function() {
		this.remove() 	// 移除自己
	})
}
