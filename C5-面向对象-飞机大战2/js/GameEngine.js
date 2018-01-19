
// 游戏引擎        游戏背景						开始， 结束

//  仅此1份的对象，我们一般采用 字面量的形式  会更好

// 游戏引擎
var gameEngine = {
	
	enemys:  {len:0}, 		// 属性： 用于保存所有敌机的对象
	
	bullets: {len: 0},      // 属性： 存储所有子弹
	
	
	
	ele: $("#box"),		// 属性： 找到背景
	
	start: function() {   // 方法: 启动游戏
		
		// 1. 游戏背景动起来
		// this.moveBg()
		
		// 2. 创建自己的飞机
		this.myPlane = new MyPlane()
		
		// 3. 飞机开火
		this.myPlane.fire()
		
		// 4. 创建敌机
		setInterval(function() {
			
			if (Math.random() < 0.2) {  // 20%的概率产生大飞机
				// 创建大飞机，然后移动
				new BigEnemy().move()
			}
			
			if (Math.random() < 0.5) {  // 50%的概率产生中飞机
				// 创建中飞机，然后移动
				new MidEnemy().move()
			}
			
			if (Math.random() < 0.9) {  // 90%的概念
				// 创建小飞机，然后移动
				new SmallEnemy().move()
			}
			
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
