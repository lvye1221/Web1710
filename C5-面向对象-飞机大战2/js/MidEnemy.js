

// 中飞机

function MidEnemy() {
	Enemy.call(this)	 // 继承 敌机所有属性
	
	this.score = 500	// 分数
	this.speed = 20		// 速度值， 修改成中飞机的速度值
	this.hp = 5			// 血量
	this.ele.removeClass().addClass("mid-enemy")  // 样式，修改成中飞机的样式

	this.dieImg = [		// 死亡图片
		"url(img/plain2_die1.png)",
		"url(img/plain2_die2.png)",
		"url(img/plain2_die3.png)",
		"url(img/plain2_die4.png)"
	]
}

// 【注意】 不能更改 MidEnemy.prototype
MidEnemy.prototype = Enemy.prototype  // 继承敌机中所有方法

