//discovery.js
var util = require('../../utils/util.js')
Page({
  data: {
    
    navTab: [ "大学", "中学", "小学"],
    currentNavtab: "0",
    hotMasters: [{
      name: "吴老大",
      avater: "czy.png",
      intro: "我丑我牛逼",
      fans: 2821
    }, {
      name: "王小二",
      avater: "md.png",
      intro: "我最牛逼",
      fans: 18967
    }, {
      name: "张小三",
      avater: "lcx.png",
      intro: "你们都没我牛逼",
      fans: 3646
    }],
    imgUrls: [
      '../../images/new5.jpg',
      '../../images/new2.png',
      '../../images/new3.png',
      '../../images/new4.png'  
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    feed: [],
    feed_length: 0
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    this.refresh();
  },
  toPerson:function () {

  },
  switchTab: function(e){
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },

  bindItemTap: function() {
    wx.navigateTo({
      url: '../answer/answer'
    })
  },
  bindQueTap: function() {
    wx.navigateTo({
      url: '../question/question'
    })
  },
  upper: function () {
    wx.showNavigationBarLoading()
    this.refresh();
    console.log("upper");
    setTimeout(function(){wx.hideNavigationBarLoading();wx.stopPullDownRefresh();}, 2000);
  },
  lower: function (e) {
    wx.showNavigationBarLoading();
    var that = this;
    setTimeout(function(){wx.hideNavigationBarLoading();that.nextLoad();}, 1000);
    console.log("lower")
  },
  //scroll: function (e) {
  //  console.log("scroll")
  //},

  // //网络请求数据, 实现刷新
  // refresh0: function(){
  //   var index_api = '';
  //   util.getData(index_api)
  //       .then(function(data){
  //         //this.setData({
  //         //
  //         //});
  //         console.log(data);
  //       });
  // },

  //使用本地 fake 数据实现刷新效果
  refresh: function(){
    var feed = util.getDiscovery();
    console.log("loaddata");
    var feed_data = feed.data;
    this.setData({
      feed:feed_data,
      feed_length: feed_data.length
    });
  },

  //使用本地 fake 数据实现继续加载效果
  nextLoad: function(){
    var next = util.discoveryNext();
    console.log("continueload");
    var next_data = next.data;
    this.setData({
      feed: this.data.feed.concat(next_data),
      feed_length: this.data.feed_length + next_data.length
    });
  }
});
