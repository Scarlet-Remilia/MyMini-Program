// index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    getToken: function() {
        // wx.setBackgroundFetchToken({
        //   token: 'token',
        // })
        // wx.getBackgroundFetchToken({
        //     success: (res) => {},
        //     fail: (res) => {
        //         console.log("1");
        //         // wx.reLaunch({
        //         //     url: '../../pages/login-page/login-page'
        //         // })
        //     },
        //     complete: (res) => {
        //         console.log("2");
        //     }
        // })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        wx.getStorage({
            key: 'token',
            fail: (res) => {
                console.log("未检测到缓存");
                wx.reLaunch({
                    url: '../../pages/login-page/login-page'
                })
            },
            success: (result) => {
                console.log("每次检测返回");
            },
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})