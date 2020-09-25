var express = require('express');
var router = express.Router();
var axios = require('axios');
const cheerio = require('cheerio');

/* GET users listing. */
router.get('/list', function (req, res, next) {
  // axios('https://m.maoyan.com/').then(data => {
  //   const $ = cheerio.load(data.data, { decodeEntities: false });
  //   let arr = []
  //   $('.cinema-list a').each((index, item) => {
  //     let tagsArr = []
  //     $(item).find('.label-block div').each((i, val) => {
  //       tagsArr.push($(val).html())
  //     })
  //     arr.push({
  //       id: $(item).attr('href').split('/')[2],
  //       title: $(item).find('.title').find('span').html(),
  //       flex: $(item).find('.flex').html(),
  //       distance: $(item).find('.distance').html(),
  //       tags: tagsArr,
  //       text: $(item).find('.discount-label-text').html()
  //     })
  //   })
  //   res.json(arr)
  // })
  res.json({
    status: 0,
    result: [
      {
        id: 25515,
        title: '德信影城（九堡联创公园店）',
        price: 13,
        location: '江干区九华路1号联创公园13幢1单元2层（10点前及22点后从商场3号门搭直达电梯至2层）',
        distance: 1.2,
        labels: ['退', '改签', '折扣卡', 'DTS:X 临境音厅'],
        discount: '开卡特惠，首单2张最高立减2元'
      },
      {
        id: 15522,
        title: '杭州神画国际影城（九堡物美店）',
        price: 13,
        location: '江干区九环路48号财通大厦b幢7楼',
        distance: 1.5,
        labels: ['退', '改签', '折扣卡'],
        discount: '开卡特惠，首单2张最高立减2元'
      },
      {
        id: 17412,
        title: '金象时代影城（地铁东城店）',
        price: 35,
        location: '江干区九沙大道399号地铁东城4F西侧',
        distance: 1.7,
        labels: ['退', '改签', '折扣卡', '小吃', 'DTS:X 临境音厅', '杜比全景声厅'],
        discount: '开卡特惠，首单2张最高立减2元'
      },
      {
        id: 16195,
        title: '杭州剑桥时代影城',
        price: 19.5,
        location: '江干区机场路250号笕桥大润发超市4楼',
        distance: 3.8,
        labels: ['退', '改签', '折扣卡', '小吃', '杜比全景声厅'],
        discount: '开卡特惠，首单2张最高立减2元'
      },
      {
        id: 25081,
        title: '中影国际影城（东站西子店）',
        price: 29,
        location: '江干区环站东路777号东站西子国际大厦A座4楼',
        distance: 4.3,
        labels: ['折扣卡', '儿童厅', '巨幕厅', '小吃', '杜比全景声厅'],
        discount: '开卡特惠，首单2张最高立减2元'
      },
      {
        id: 25271,
        title: '天玖国际影城',
        price: 31.9,
        location: '江干区笕桥街道机场路355号浙商国际中心2幢4楼',
        distance: 4.5,
        labels: ['折扣卡', '儿童厅', '改签', '小吃', '杜比全景声厅'],
        discount: '开卡特惠，首单2张最高立减2元'
      },
    ]
  })
});

module.exports = router;