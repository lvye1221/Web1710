

function DragBox(boxId) {
	this.ele = $(boxId)		 // 属性： 找到盒子
	
	this.start()  // 调用自己对象的start方法
}

// 方法1：  开始拖拽
DragBox.prototype.start = function() {
	
	var self = this   // 先保存当前 拖拽对象！
	
	//console.log("start", this.ele)
	
	this.ele.mousedown(function(e) {  // 鼠标按下时候
	//console.log("mousedown")
		
		e.preventDefault()  // 阻止浏览器默认行为
			
		var detaX = e.offsetX // 鼠标在元素中的点击位置
		var detaY = e.offsetY
		
		$(document).mousemove(function(e) {  // 整个页面中移动
			
			e.preventDefault()  // 阻止浏览器默认行为
			
			var x = e.clientX - detaX // 拖拽物体的位置
			var y = e.clientY - detaY
			
			// 让物体移动到 x, y 的位置
// 			this.ele.move(x, y)     // 1   Cannot read property 'move' of undefined
//			self.ele.move(x, y)     // 2   self.ele.move is not a function
			self.move(x, y)         // 3
		})
		
		$(document).mouseup(function() { // 鼠标在页面中抬起
			self.stop()
		})
	})
}

// 方法2：  移动物体
DragBox.prototype.move = function(x, y) {
	this.ele.css({
		left: x,
		top: y
	})
}

// 方法3：  停止拖拽
DragBox.prototype.stop = function() {
	$(document).off("mouseup mousemove")
}
