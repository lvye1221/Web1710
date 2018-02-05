



// pages/page2/page2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  	cats: []		// 首先定义1个空的
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  	// 先备份变量, 这里this代表当前当前页面
  	var self = this;		
  
  	// ''  ""  一样的
  	wx.request({
  		'url': "http://csit.top/api_cat.php",  			// 地址
  		"success": function(res) {									// 请求成功的函数
  			console.log(res)
  			console.log(res.data)
  			  			
  			// 所有栏目的数据
  			var arr = res.data.data;
  			
  			// 因为栏目有好多个栏目，所以这里遍历
  			for (var i = 0; i < arr.length; i++) {
  				
  				(function(i) {
  					
  					// 请求对应栏目的数据，由于请求比较耗费时间，
  					//  所以，当数据返回时，i已经变成了最后1个数字
  					//  所以这里使用了即时函数调用
	  				wx.request({
	  					url: "http://csit.top/api_goods.php",
	  					data: {		// 发送给服务器端的参数
	  						cat_id: arr[i].cat_id,
	  						page: 1,
	  						pagesize: 5
	  					},
	  					success: function(res) {
	  						console.log(res.data)
	  						
	  						// 当前栏目下面的商品列表， 类型是数组
	  						var goods = res.data.data;
	  						
	  						// 在对象中新增了 goods 属性，
	  						//    值是 请求回来的 商品列表
	  						//  arr[i] 当前ajax请求的栏目 对象
	  						//     .goods 相当于新增了 goods 属性
	  						arr[i].goods = goods;
	  						
	  						// 设置当前页面的数据  cats 为 arr 
	  						self.setData({
	  							cats: arr
	  						})
	  					}
	  				})
  				
  				})(i)
  			}
  			
  		}
  	})	
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})