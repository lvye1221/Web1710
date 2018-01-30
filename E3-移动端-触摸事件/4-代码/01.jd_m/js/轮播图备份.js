// 轮播图方法01
/*
	获取 必须知道的 变量

	步骤1: 不考虑过渡效果 直接 刷刷刷的 切换
		定时器中 index++
			    判断是否越界
			   修改 轮播图ul的 位置
			   考虑到 索引从1开始
			   css 默认 让ul 往左边窜一个屏幕宽度

	步骤2:	  下方的 索引li标签 修改 外观
		由于我们是使用.current 标示当前的索引值
		清空所有li的 class
		为当前的那个 li 添加current


*/
function banner_01() {

	//1 获取变量
	// 屏幕的宽度
	var width = document.body.offsetWidth;
	// console.log(width);\

	//  获取 轮播图的ul
	var moveUl = document.querySelector('.banner_images');

	// 索引的li标签
	var indexLiArr = document.querySelectorAll('.banner_index li');

	// 定义 index 记录 当前的 索引值
	// 默认 我们的ul 已经 往左边 移动了 一倍的宽度
	// (为什么 一位 最左边的图片 是用来做无限轮播的 不希望用户看到) 所以 index =1
	var index = 1;

	// 开启定时器
	var timeId = setInterval(function () {
		// 累加
		index++;

		// 判断
		if(index>=9){
			// 跳到 用户认为的 第一张
			index = 1;	
		}

		// 修改 ul 的位置
		//  -> x正方向是往右 
		moveUl.style.transform = 'translateX('+index*width*-1+'px)';

		// 修改li标签的外观
		// 清空
		for (var i = 0; i < indexLiArr.length; i++) {
			indexLiArr[i].className = '';
		}
		// 为当前的 li 添加
		// li标签的 索引 是从0开始
		// index 是从1 开始
		// 1 2 3 4 5... index   
		// 0 1 2 3 4.. 索引
		// index-1
		indexLiArr[index-1].className ='current';

	},2000);

}

// 轮播图方法 02 截止到 上午结束时的内容
/*
	获取 必须知道的 变量

	步骤1: 不考虑过渡效果 直接 刷刷刷的 切换
		定时器中 index++
			    判断是否越界
			   修改 轮播图ul的 位置
			   考虑到 索引从1开始
			   css 默认 让ul 往左边窜一个屏幕宽度

	步骤2:	  下方的 索引li标签 修改 外观
		由于我们是使用.current 标示当前的索引值
		清空所有li的 class
		为当前的那个 li 添加current

	步骤3:然切换有动画效果
		使用css3中的transition
		.style.transition ='all .3s';
		在获取的时候 进行添加即可

	步骤4:当我切换到 最后一张时 瞬间 切到 第一张
		关闭过度
		瞬间切换到第一张



*/
function banner_02() {

	//1 获取变量
	// 屏幕的宽度
	var width = document.body.offsetWidth;
	// console.log(width);\

	//  获取 轮播图的ul
	var moveUl = document.querySelector('.banner_images');
	// 添加过度效果
	moveUl.style.transition = 'all .3s';

	// 索引的li标签
	var indexLiArr = document.querySelectorAll('.banner_index li');

	// 定义 index 记录 当前的 索引值
	// 默认 我们的ul 已经 往左边 移动了 一倍的宽度
	// (为什么 一位 最左边的图片 是用来做无限轮播的 不希望用户看到) 所以 index =1
	var index = 1;

	// 开启定时器
	var timeId = setInterval(function () {
		// 累加
		index++;

		// 判断
		if(index>9){
			// 跳到 用户认为的 第一张
			index = 1;	

			// 关闭过度
			moveUl.style.transition = '';
			// 瞬间 切换到 第一张
		}

		// 修改 ul 的位置
		//  -> x正方向是往右 
		moveUl.style.transform = 'translateX('+index*width*-1+'px)';

		// 修改li标签的外观
		// 清空
		for (var i = 0; i < indexLiArr.length; i++) {
			indexLiArr[i].className = '';
		}
		// 为当前的 li 添加
		// li标签的 索引 是从0开始
		// index 是从1 开始
		// 1 2 3 4 5... index   
		// 0 1 2 3 4.. 索引
		// index-1
		indexLiArr[index-1].className ='current';

	},1000);

}

// 轮播图方法 03 自动播放完整版本
/*
	获取 必须知道的 变量

	步骤1: 不考虑过渡效果 直接 刷刷刷的 切换
		定时器中 index++
			    判断是否越界
			   修改 轮播图ul的 位置
			   考虑到 索引从1开始
			   css 默认 让ul 往左边窜一个屏幕宽度

	步骤2:	  下方的 索引li标签 修改 外观
		由于我们是使用.current 标示当前的索引值
		清空所有li的 class
		为当前的那个 li 添加current

	步骤3:然切换有动画效果
		使用css3中的transition
		.style.transition ='all .3s';
		在获取的时候 进行添加即可

	步骤4:当我切换到 最后一张时 瞬间 切到 第一张
		关闭过度
		瞬间切换到第一张

	步骤5:对代码 进行重构 添加进来了 过渡结束知识点
		由于 我们在修改 ul的位置时 会使用过度
		当注册了 过渡结束事件之后,每次 过渡完毕 都会 调用该事件
			将 判断 index  是否 越界 以及 修改 索引的 代码 全部 迁移到 过渡结束事件中

			定时器逻辑
				index++;

				修改 ul的 位置 ->开始过渡

			过渡结束事件逻辑
				判断 index是否有效
					进行修正
				修改索引li标签的 显示	


*/
function banner_03() {

	//1 获取变量
	// 屏幕的宽度
	var width = document.body.offsetWidth;
	// console.log(width);\

	//  获取 轮播图的ul
	var moveUl = document.querySelector('.banner_images');
	
	// 添加过度效果 由于后面已经设置了 所以 这里 已经没有意义了
	// moveUl.style.transition = 'all .3s';

	// 索引的li标签
	var indexLiArr = document.querySelectorAll('.banner_index li');

	// 定义 index 记录 当前的 索引值
	// 默认 我们的ul 已经 往左边 移动了 一倍的宽度
	// (为什么 一位 最左边的图片 是用来做无限轮播的 不希望用户看到) 所以 index =1
	var index = 1;

	// 开启定时器
	var timeId = setInterval(function () {
		// 累加
		index++;

		// 将 过渡开启 管你三七二十一 只要进来 就开启过渡 保证 过渡效果一直存在
		moveUl.style.transition = 'all .3s';

		// 修改 ul的位置
		moveUl.style.transform = 'translateX('+index*width*-1+'px)';

	},1000);


	// 过渡 结束事件 用来 修正 index的值 并修改索引
	moveUl.addEventListener('webkitTransitionEnd',function () {
		console.log('过渡结束');

		//  如果 index 太大了 
		if (index>8) {
			index = 1;

			// 关闭过渡
			moveUl.style.transition = '';

			// 瞬间 修改一下 ul 的位置
			moveUl.style.transform = 'translateX('+index*width*-1+'px)';
		}

		// 修改 索引li标签的 class
		for (var i = 0; i < indexLiArr.length; i++) {
			indexLiArr[i].className = '';
		}

		// 有一个 1的 差值
		indexLiArr[index-1].className = 'current';

	})

}