var helloData = {
  name: 'WeChat'
}

// Register a Page.
Page({
  data: helloData,
  changeName: function (e) {

    wx.makePhoneCall({
      phoneNumber: '18030868029' //仅为示例，并非真实的电话号码
    })
  }
})