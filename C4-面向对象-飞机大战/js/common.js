
// 是否碰撞
//    $box1:  物体1   jQuery对象
//    $box2:  物体2   jQuery对象
//  检测 物体2 是否碰撞了 物体1，如果碰撞了，返回 true, 否则返回 false
function isTouch($box1, $box2) {
	
	//      盒子1距离页面左边的距离 - 盒子2宽度的一半
	var x1 = $box1.position().left - $box2.width()/2
	var y1 = $box1.position().top - $box2.height()/2
	
	//      盒子1距离页面左边的距离 + 盒子1的宽度 + 盒子2宽度的一半
	var x2 = $box1.position().left + $box1.width() + $box2.width()/2
	var y2 = $box1.position().top + $box1.height() + $box2.height()/2
	
	
	// 第2个盒子的中心点
	var x0 = $box2.position().left + $box2.width()/2
	var y0 = $box2.position().top + $box2.height()/2
	
	
	// 相当于得到了 灰色盒子对角坐标  (x1,y1)   (x2,y2)
	// 盒子中心点 (x0,y0)
	
	// 判断 中心点 是否在盒子中
	
	if ( x0 >= x1 && x0 <= x2  && y0 >= y1 && y0 <= y2) {
		// alert("碰撞了")
		return true
	} else {
		// alert("没有碰撞")
		return false
	}
}

