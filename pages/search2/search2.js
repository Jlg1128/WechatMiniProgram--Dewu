Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentindex: 0,
    tab_index: 0,
    list: ["推荐", "球鞋", "服饰", "美妆", "手表", "箱包", "潮玩", "配件", "数码"],
    shoes: [{
      imgpath: "https://du.hupucdn.com/FlNJaUiFqiYmUPWy8yVdM6Exkqv9?imageView2/0/format/webp",
      imgname: "airjordan"
    }, {
      imgpath: "https://du.hupucdn.com/FgTP7mREsIgs1P797RwWU_PLOgcN?imageView2/0/format/webp",
      imgname: "Yeezy"
    }, {
      imgpath: "https://du.hupucdn.com/aab780af7f2be087ee6be1918e87327d.png?imageView2/0/format/webp",
      imgname: "Air Force"
    }, {
      imgpath: "https://du.hupucdn.com/Fj4WeiSR-nVR0K1DvMJBGGJIogdJ?imageView2/0/format/webp",
      imgname: "冰点价"
    }, {
      imgpath: "https://du.hupucdn.com/FmEL6-JWiB44ARKftY9x-Pc6cid0?imageView2/0/format/webp",
      imgname: "潮牌箱包"
    }, {
      imgpath: "https://du.hupucdn.com/FqRNxUmpu5yMZe8v-fOJefwSxbKJ?imageView2/0/format/webp",
      imgname: "数码潮玩"
    }, {
      imgpath: "https://du.hupucdn.com/FquYpYlJC6Nre-73zD5dJUKyOpys?imageView2/0/format/webp",
      imgname: "潮流品牌"
    }, {
      imgpath: "https://du.hupucdn.com/FhTjsW_kwNZiyJgFoKDU9NlL-O1t?imageView2/0/format/webp",
      imgname: "全部"
    }],
    list2: [{
      imgsrc: "https://du.hupucdn.com/FpyV1g3ff-kCdNXxJZVeYCUl4S6l?imageView2/0/format/webp",

      imginfo: "李宁 音速7 男子 一体织透气中帮篮球鞋 灰白",
      imgprice: "429",
      buytimes: "5564"
    },
    {
      imgsrc: "https://du.hupucdn.com/Fu9418Uun75bK-bkFNb5IiAomMzj?imageView2/0/format/webp",
      imginfo: "NIKE COURT BOROUGH LOW (GS) 2020年 鼠年 芝加哥",
      imgprice: "799",
      buytimes: "7755"
    }, {
      imgsrc: "https://du.hupucdn.com/FosxmS4nI24xnNo7A1_zQHl7K8Zg?imageView2/0/format/webp",
      imginfo: "FOOT INDUSTRY 户外机能 登山鞋钉 翻毛皮 厚底 复古跑鞋",
      imgprice: "235",
      buytimes: "555"
    }, {
      imgsrc: "https://du.hupucdn.com/FjIvFPZszUE1b7hnC9hwKhShRQT8?imageView2/0/format/webp",
      imginfo: "ADIDAS YEEZY BOOST 350 V2 YEEZREEL 黑绿",
      imgprice: "888",
      buytimes: "1128"
    }, {
      imgsrc: "https://du.hupucdn.com/FpyV1g3ff-kCdNXxJZVeYCUl4S6l?imageView2/0/format/webp",

      imginfo: "李宁 音速7 男子 一体织透气中帮篮球鞋 灰白",
      imgprice: "429",
      buytimes: "5564"
    },
    {
      imgsrc: "https://du.hupucdn.com/Fu9418Uun75bK-bkFNb5IiAomMzj?imageView2/0/format/webp",
      imginfo: "NIKE COURT BOROUGH LOW (GS) 2020年 鼠年 芝加哥",
      imgprice: "799",
      buytimes: "7755"
    }, {
      imgsrc: "https://du.hupucdn.com/FosxmS4nI24xnNo7A1_zQHl7K8Zg?imageView2/0/format/webp",
      imginfo: "FOOT INDUSTRY 户外机能 登山鞋钉 翻毛皮 厚底 复古跑鞋",
      imgprice: "235",
      buytimes: "555"
    }, {
      imgsrc: "https://du.hupucdn.com/FjIvFPZszUE1b7hnC9hwKhShRQT8?imageView2/0/format/webp",
      imginfo: "ADIDAS YEEZY BOOST 350 V2 YEEZREEL 黑绿",
      imgprice: "888",
      buytimes: "1128"
    }],
    list3: [{
      imgsrc: "https://du.hupucdn.com/FlNJaUiFqiYmUPWy8yVdM6Exkqv9?imageView2/0/format/webp",
      imginfo: "李宁 音速7 男子 一体织透气中帮篮球鞋 灰白",
      imgprice: "330",
      buytimes: "5564"
    },
    {
      imgsrc: "https://du.hupucdn.com/aab780af7f2be087ee6be1918e87327d.png?imageView2/0/format/webp",
      imginfo: "NIKE COURT BOROUGH LOW (GS) 2020年 鼠年 芝加哥",
      imgprice: "799",
      buytimes: "7755"
    }, {
      imgsrc: "https://du.hupucdn.com/FmEL6-JWiB44ARKftY9x-Pc6cid0?imageView2/0/format/webp",
      imginfo: "FOOT INDUSTRY 户外机能 登山鞋钉 翻毛皮 厚底 复古跑鞋",
      imgprice: "235",
      buytimes: "555"
    }, {
      imgsrc: "https://du.hupucdn.com/FquYpYlJC6Nre-73zD5dJUKyOpys?imageView2/0/format/webp",
      imginfo: "ADIDAS YEEZY BOOST 350 V2 YEEZREEL 黑绿",
      imgprice: "888",
      buytimes: "1128"
    }, {
      imgsrc: "https://du.hupucdn.com/FpyV1g3ff-kCdNXxJZVeYCUl4S6l?imageView2/0/format/webp",

      imginfo: "李宁 音速7 男子 一体织透气中帮篮球鞋 灰白",
      imgprice: "429",
      buytimes: "5564"
    },
    {
      imgsrc: "https://du.hupucdn.com/Fu9418Uun75bK-bkFNb5IiAomMzj?imageView2/0/format/webp",
      imginfo: "NIKE COURT BOROUGH LOW (GS) 2020年 鼠年 芝加哥",
      imgprice: "799",
      buytimes: "7755"
    }, {
      imgsrc: "https://du.hupucdn.com/FosxmS4nI24xnNo7A1_zQHl7K8Zg?imageView2/0/format/webp",
      imginfo: "FOOT INDUSTRY 户外机能 登山鞋钉 翻毛皮 厚底 复古跑鞋",
      imgprice: "235",
      buytimes: "555"
    }, {
      imgsrc: "https://du.hupucdn.com/FjIvFPZszUE1b7hnC9hwKhShRQT8?imageView2/0/format/webp",
      imginfo: "ADIDAS YEEZY BOOST 350 V2 YEEZREEL 黑绿",
      imgprice: "888",
      buytimes: "1128"
    }]
  },

  inputjump: function () {
    wx.navigateTo({
      url: '../search2/search2',
    })

  },
  indexchange: function (e) {
    this.setData({
      tab_index: e.currentTarget.dataset.index,
      currentindex: e.currentTarget.dataset.index,
    })
  },
  tabchange: function (e) {
    this.setData({
      tab_index: e.detail.current
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
      },
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