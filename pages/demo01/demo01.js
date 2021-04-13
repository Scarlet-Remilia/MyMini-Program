// pages/demo01/demo01.js
Page({
  data: {
  userValue:"",
  passWordValue:"",
  },
  getUserValue(e){
    this.setData({
      userValue: e.detail.value
  })
  },
  getPassWordValue(e){
    this.setData({
      passWordValue: e.detail.value
  })
  },
  formSubmit(e) {
    var user=this.data.userValue;
    var passWord=this.data.passWordValue;
    if (user == "") {
        //请您输入手机/邮箱/用户名
        this.setData({
          logintText: "请您输入手机/邮箱/用户名"
      })
    } else if (passWord == "") {
        //请您输入密码
        this.setData({
          logintText: "请您输入密码"
      })
    } else if (user == "admin" && passWord == "123456") {
      wx.reLaunch({
        url: '../../pages/index/index'}),
        wx.showToast({
          title: '登录成功',
        })
    } else {
        //用户名或密码有误，请重新输入或找回密码
        this.setData({
          logintText: "用户名或密码有误，请重新输入或找回密码"
      })
    }}
})