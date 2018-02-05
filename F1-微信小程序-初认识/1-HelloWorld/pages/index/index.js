
// 逻辑层， 控制行为，本质上就是 js

// Page  来自于微信内部框架，提供的函数

Page({
  data: {
  	count: 1,
  	res: {
  		username: "张三",
  		password: "123456",
  		token: "xxxx-xxxx",
  		
  	}
  },

	add: function() {
		console.log( this.data.count )
		
		// 通过 setData 来更新数据
		this.setData({
			count: ++this.data.count
		})
	}
})
