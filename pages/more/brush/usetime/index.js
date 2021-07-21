// pages/more_paste/index.js
var app=getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    selectedTime:0,
    dateList:[0,14,30,60],
  },

  
  bindclickOK: function(e){
    var tempDate= new Date()
    tempDate.setTime(tempDate.getTime()-24*60*60*1000*this.data.dateList[this.data.selectedTime-1])
    app.globalData.useDate=tempDate.toLocaleDateString()
    tempDate.setTime(tempDate.getTime()+24*60*60*1000*90)
    app.globalData.dueDate=tempDate.toLocaleDateString()
    wx.navigateBack()
  },

  bindtapTime: function(e){
    this.setData({
      selectedTime: e.currentTarget.dataset.id
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
})