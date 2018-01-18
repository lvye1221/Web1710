

function Enemy() {
	
	this.ele = $("<div></div>")
	this.ele.addClass("enemy")
	this.ele.appendTo("#box")
	
	// 随机x位置
	var x = $("body").width() * Math.random()
	this.ele.css({left: x})
	
	// 创建时，立马移动
	this.move()
}

// 移动
Enemy.prototype.move = function() {
	var y = $("body").height() // 页面高度
	
	this.ele.animate({top: y}, 1000, function() {
		this.remove()
	})
}

