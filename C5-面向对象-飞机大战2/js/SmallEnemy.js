

// 小飞机
function SmallEnemy() {
	Enemy.call(this)  	// 继承敌机所有属性
	
	this.speed = 50	// 速度: 修改成小飞机的速度值
	this.hp = 1			// 血量： 修改成小飞机的血量
	this.ele.removeClass().addClass("small-enemy") 	// 样式
}

// 【注意】 这种方式，不要改变 原型对象中的方法
SmallEnemy.prototype = Enemy.prototype 		// 继承敌机所有方法


