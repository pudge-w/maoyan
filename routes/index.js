var express = require('express');
var router = express.Router();
var axios = require('axios');
const cheerio = require('cheerio');

// 最受欢迎电影
router.get('/topRatedMovies', function(req, res, next) {
  axios.get('https://m.maoyan.com/ajax/topRatedMovies?token=&optimus_uuid=2F0AF070FB4611EA937E3120EC3A5451D5967A15A4924F6B9DDFD75DE8BC4F1A&optimus_risk_level=71&optimus_code=10').then(data => {
    const $ = cheerio.load(data.data, {decodeEntities: false});
    let arr = [];
    $('.top-rated-item').each((index, value) => {
      arr.push({
        id: $(value).attr('data-id'),
        img: $(value).find('.poster img').attr('src'),
        score: $(value).find('.rated-score').html(),
        wishNum: $(value).find('.wish-num').html(),
        title: $(value).find('.line-ellipsis').html()
      })
    })
    res.json({
      status: 0,
      result: arr
    })
  })
});

// 首页列表
router.post('/movieOnInfoList', (req, res, next) => {
  axios.get('https://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=8905E2E0E6A811EA8DE5DF8C66C7FB7598262DFDFCFC498CABC603180F0378A3&optimus_risk_level=71&optimus_code=10').then(data => {
    res.json({
      status: 0,
      result: data.data
    })
  })
})


// 首页加载更多
router.post('/moreComingList', (req, res, next) => {
  const ids = req.body.ids
  axios.get('https://m.maoyan.com/ajax/moreComingList?token=&movieIds=' + ids + '&optimus_uuid=8905E2E0E6A811EA8DE5DF8C66C7FB7598262DFDFCFC498CABC603180F0378A3&optimus_risk_level=71&optimus_code=10').then(data => {
    res.json({
      status: 0,
      result: data.data.coming
    })
  })
})

module.exports = router;
