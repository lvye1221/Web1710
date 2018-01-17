

function DragBoxLimit(boxId) {  
	DragBox.call(this, boxId)   // 继承父类中所有属性
}

//DragBoxLimit.prototype = DragBox.prototype // 继承父类所有方法    
DragBoxLimit.prototype = new DragBox()   // start, move, stop 都拷贝下来了


DragBoxLimit.prototype.move = function(x, y) {  // 重写父类中 的 move 方法
	if (x < $("body").width()/2) {  // 如果x小于0
		x = $("body").width()/2     // 那么，强制设置它为 0
	}
	if (y < 0) {  // 如果y小于0
		y = 0     // 那么，强制设置它为 0
	}
	
//	console.log("this:" + this.constructor)
	
	// 设置位置
	this.ele.css({
		left: x,
		top: y
	})
}
