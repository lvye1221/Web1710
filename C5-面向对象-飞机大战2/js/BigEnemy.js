


function BigEnemy() {
	
	Enemy.call(this)    // 继承属性
	
	this.score = 10000	// 分数
	this.speed = 4		// 速度值
	this.hp = 10		// 血量
	this.ele.removeClass().addClass("big-enemy"); // 样式
	
	
	this.dieImg = [		// 死亡图片
		"url(img/plain3_die1.png)",
		"url(img/plain3_die2.png)",
		"url(img/plain3_die3.png)",
		"url(img/plain3_die4.png)",
		"url(img/plain3_die5.png)",
		"url(img/plain3_die6.png)"
	]
	
}

BigEnemy.prototype = {}   // 创建新的空对象
for (var k in Enemy.prototype) {  // 复制 敌机的所有方法
	BigEnemy.prototype[k] = Enemy.prototype[k]
	//BigEnemy.prototype.k = Enemy.prototype[k]
}
