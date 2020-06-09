// pages/shoesinfo/shoesinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shoes: [{
      imgpath: "https://du.hupucdn.com/FlNJaUiFqiYmUPWy8yVdM6Exkqv9?imageView2/0/format/webp",
      imgname: "airjordan"
    }, {
      imgpath: "https://du.hupucdn.com/FgTP7mREsIgs1P797RwWU_PLOgcN?imageView2/0/format/webp",
      imgname: "Yeezy"
    }, {
      imgpath: "https://du.hupucdn.com/aab780af7f2be087ee6be1918e87327d.png?imageView2/0/format/webp",
      imgname: "Air Force"
    }],
   
    currentindex:-1,
    showModalStatus:false,
imgsrc:"",
buytimes:-1,
imgprice:-1,
imginfo:""
  },
  
  /**
   * 生命周期函数--监听页面加载
   */

  jump:function(){
wx.showModal({
  title: '删除',
  content: '确定要删除我吗？',
  success:function(res){
    if(res.confirm){
      console.log("确定删除");
    }
    else if(res.cancel){
      console.log("不删除")
    }
  }
})

   
  },
  getindex: function (e) {
    console.log(e)
    if (this.data.currentindex == e.currentTarget.dataset.index){
    this.setData({
      currentindex:-1
    })
    return;
    }
    this.setData({
      currentindex: e.currentTarget.dataset.index
    })
  
  },
  statuschange:function(){
   this.setData({
     showModalStatus:true
   })
  },
  showModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(0).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: false
    })
    setTimeout(function () {
      animation.translateY(300).step()
      this.setData({
        animationData: animation.export(),
       
      })
    }.bind(this), 500)
  },
  priviewimage:function(e){
   wx.previewImage({
     urls: [this.data.imgsrc],
   })
  },
  onLoad: function (options) {
var imgsrc=wx.getStorageSync('shoesinfo').imgsrc;
    var buytimes = wx.getStorageSync('shoesinfo').buytimes;
    var imgprice = wx.getStorageSync('shoesinfo').imgprice;
    var imginfo = wx.getStorageSync('shoesinfo').imginfo;
    this.setData({
      imgsrc:imgsrc,
      buytimes:buytimes,
      imgprice:imgprice,
      imginfo:imginfo
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