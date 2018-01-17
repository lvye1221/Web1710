

function DragBoxText(boxId) {
	DragBoxLimit.call(this, boxId)   // 继承 DragBoxLimit 所有属性
}

DragBoxText.prototype = new DragBoxLimit(); // 继承 DragBoxLimit 所有方法


DragBoxText.prototype.move = function(x, y) { // 【重写】 DragBoxLimit move 方法
	if (x < 0) {
		x = 0
	}
	if (y < 0) {
		y = 0
	}
	// 自己对象中的方法，可以自由使用 自己的所有属性 和 方法
	this.ele.css({
		left: x,
		top: y
	})

	this.ele.html("left: "+x+"px <br> top: "+y+"px")
}
