// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	// 视频的值
	videoDis:[],
	//  视频推荐列表
	othersList:[],
	// 帖子列表
	commentsList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  // 存值处理
	  var videoID = options.id;
	  //  赋值
	  this.getVideo(videoID);
	  // 调用函数
	  this.getList();
	  // 调用帖子函数
	  this.getcommentsList();
  },
  // 点击函数
  video(){
	  console.log('视频地址异常 暂时无法观看 请无视错误 OVER');
  },
// 写函数
	getVideo(videoID){
		// 定义一个值  this 指向当前的小程序 而不是 外链 不能与当前 的值一样
		var thit = this;
	// 利用小程序内置发起请求方法  
		wx.request({
		  url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id='+videoID, //真实的接口地址
		  header: {
			'content-type': 'application/json' // 默认值
		  },
		  success (res) {
		  // 判断显示
			  if(res.data.code == 0){
				  thit.setData({
					  videoDis:res.data.data.videoInfo,
				  })
			  }else{
				  console.log('数据请求失败,检查地址信息');
			  }
		  }
		})
	},
	getList(){
		// 定义一个值  this 指向当前的小程序 而不是 外链 不能与当前 的值一样
		var thit = this;
	// 利用小程序内置发起请求方法  
		wx.request({
		  url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/otherslist', //真实的接口地址
		  header: {
			'content-type': 'application/json' // 默认值
		  },
		  success (res) {
		  // 判断显示
			  if(res.data.code == 0){
				  thit.setData({
					  othersList:res.data.data.othersList,
				  })
			  }else{
				  console.log('数据请求失败,检查地址信息');
			  }
		  }
		})
	},
    getcommentsList(){
    	// 定义一个值  this 指向当前的小程序 而不是 外链 不能与当前 的值一样
    	var thit = this;
    // 利用小程序内置发起请求方法  
    	wx.request({
    	  url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList', //真实的接口地址
    	  header: {
    		'content-type': 'application/json' // 默认值
    	  },
    	  success (res) {
    	  // 判断显示
    		  if(res.data.code == 0){
				  console.log(res.data.data.commentData.commentList);
    			  thit.setData({
    				  commentsList:res.data.data.commentData,
    			  })
    		  }else{
    			  console.log('数据请求失败,检查地址信息');
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