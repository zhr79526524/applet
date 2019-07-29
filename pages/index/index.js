Page({

  /**
   * 页面的初始数据
   */
  data: {
	// 定义一个值  当前的索引值
	clickIndex:0,
    // 首页导航数据
	navList:[],
	// 轮播图管理
	swiperList:[],
	// 视频列表数据
	videosList:[],
  },
  // 点击首页导航按钮
	active(e){
	  this.setData({
		  clickIndex:e.target.dataset.indexs,
	  })
  },
	// 获取首页导航条的数据
	getNavlist(){
		// 定义一个值  this 指向当前的小程序 而不是 外链 不能与当前 的值一样
		var thit = this;
	// 利用小程序内置发起请求方法  
		wx.request({
		  url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList', //真实的接口地址
		  header: {
			'content-type': 'application/json' // 默认值
		  },
		  success (res) {
		  // 判断显示
			  if(res.data.code == 0){
				  thit.setData({
					  navList:res.data.data.navList,
				  })
			  }else{
				  console.log('数据请求失败,检查地址信息');
			  }
		  }
		})
	},
	// 轮播图的数据
	getSwiperlist(){
		// 定义一个值  this 指向当前的小程序 而不是 外链 不能与当前 的值一样
		var thit = this;
	// 利用小程序内置发起请求方法  
		wx.request({
		  url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperlist', //真实的接口地址
		  header: {
			'content-type': 'application/json' // 默认值
		  },
		  success (res) {
		  // 判断显示
			  if(res.data.code == 0){
				  thit.setData({
					  swiperList:res.data.data.swiperList,
				  })
			  }else{
				  console.log('数据请求失败,检查地址信息');
			  }
		  }
		})
	},
	// 列表数据请求
	getVideosList(){
		// 定义一个值  this 指向当前的小程序 而不是 外链 不能与当前 的值一样
		var thit = this;
	// 利用小程序内置发起请求方法  
		wx.request({
		  url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoslist', //真实的接口地址
		  header: {
			'content-type': 'application/json' // 默认值
		  },
		  success (res) {
		  // 判断显示
			  if(res.data.code == 0){
				  thit.setData({
					  videosList:res.data.data.videosList,
				  })
			  }else{
				  console.log('数据请求失败,检查地址信息');
			  }
		  }
		})
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取首页的导航数据
	this.getNavlist();
	// 获取轮播图的数据
	this.getSwiperlist();
	// 获取数据列表的数据
	this.getVideosList();
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