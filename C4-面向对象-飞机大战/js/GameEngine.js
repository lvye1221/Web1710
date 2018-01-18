
// 游戏引擎        游戏背景						开始， 结束

//  仅此1份的对象，我们一般采用 字面量的形式  会更好

// 游戏引擎
var gameEngine = {
	
	ele: $("#box"),		// 属性： 找到背景
	
	myPlane: null, 	 	// 自己的飞机
	
	start: function() {   // 方法: 启动游戏
		
		// 1. 游戏背景动起来
		// this.moveBg()
		
		// 2. 创建自己的飞机
		this.myPlane = new MyPlane()
		
		// 3. 飞机开火
		this.myPlane.fire()
		
		// 4. 创建敌机
		setInterval(function() {
			new Enemy()
		}, 1000)
		
	}, 
	
	
	moveBg: function() {	// 方法1： 滚动背景
		// 定时移动背景图片: 改变定位
		var self = this
		this.ele.animate({"background-position-y": "-230%"}, 10000, "linear", function() {
			// 先让图片回到 100% 的位置
			self.ele.css({"background-position-y": "0%"})
			// 继续滚动
			self.moveBg()
		})
	}
}
