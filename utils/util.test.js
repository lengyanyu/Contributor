// add.test.js
var util = require('./util.js');
var expect = require('chai').expect;


describe('日期测试', function () {
  it('日期', function () {
    expect(util.formatTime(new Date)).to.be.equal("2018/07/08");
  });
});