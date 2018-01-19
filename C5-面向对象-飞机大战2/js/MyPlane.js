
function MyPlane() {	// 构造函数

	this.ele = $("<div id='myPlane'></div>")	 //创建飞机物体
	this.ele.appendTo( "#box" )  // 添加到游戏盒子中
	
	DragBox.call(this, "#myPlane")  // 继承属性： 拖拽物体，属性
}

MyPlane.prototype = new DragBox()  // 继承方法

MyPlane.prototype.move = function(x, y) {
	if (x < 0) {
		x = 0
	}
	
	// 最大x，    页面宽度 - 飞机自身的宽度
	var maxX = $("body").width() - this.ele.width()
	if (x > maxX) {
		x = maxX
	}
	
	if (y < 0) {
		y = 0
	}
	
	// 调用父类的方法，移动当前元素
	DragBox.prototype.move.call(this, x, y)
}


// 开火
MyPlane.prototype.fire = function() {
	
	var self = this
	
	this.timer = setInterval(function() {
		
		var x = self.ele.position().left + self.ele.width()/2 - 3
		var y = self.ele.position().top - 18
		
		new Bullet(x, y)
	}, 200);
}