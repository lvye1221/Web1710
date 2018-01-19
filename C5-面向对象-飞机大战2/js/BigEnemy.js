


function BigEnemy() {
	
	Enemy.call(this)    // 继承属性
	
	this.speed = 4		// 速度值
	this.hp = 10		// 血量
	this.ele.removeClass().addClass("big-enemy"); // 样式
	
}

BigEnemy.prototype = {}   // 创建新的空对象
for (var k in Enemy.prototype) {  // 复制 敌机的所有方法
	BigEnemy.prototype[k] = Enemy.prototype[k]
}
