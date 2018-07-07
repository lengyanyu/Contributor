/**一个工具脚本 */
/**
 * 1.首先，每一个node.js执行文件，都自动创建一个module对象，同时，module对象会创建一个叫        exports的属性，初始化的值是 {}。
   2.exports是module.exports的引用。所以当module.exports默认初始值为{}时，结果也就为空了。
   3.require()始终导出的是module.exports的值。
   4.因为exports与module.exports指向同一块内存，所以给exports.title赋值，实际上是导致          module.exports不再是初始值，所以有了结果3.
   5.但如果直接改变module.exports的值时，exports失效。
 */
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
};


// 使用require引入模块,读取一个文件并执行，最后返回文件内部的exports对象，使用module.exports导出接口
var index = require('../data/data_index.js')  //index是一个模块
var index_next = require('../data/data_index_next.js')
var discovery = require('../data/data_discovery.js')
var discovery_next = require('../data/data_discovery_next.js')

function getData(url){
  return new Promise(function(resolve, reject){
    wx.request({
      url: url,
      data: {},
      header: {
        //'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log("success")
        resolve(res)
      },
      fail: function (res) {
        reject(res)
        console.log("failed")
      }
    })
  })
}

function getData2(){
  return index.index;
}

function getNext(){
  return index_next.next;
}

function getDiscovery(){
  return discovery.discovery;
}

function discoveryNext(){
  return discovery_next.next;
}



module.exports.getData = getData;
module.exports.getData2 = getData2;
module.exports.getNext = getNext;
module.exports.getDiscovery = getDiscovery;
module.exports.discoveryNext = discoveryNext;




