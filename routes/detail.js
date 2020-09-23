var express = require('express');
var router = express.Router();
var axios = require('axios');
const cheerio = require('cheerio');

/* GET users listing. */
router.get('/info', function (req, res, next) {
  const id = req.query.id
  if (!id) {
    res.json({
      status: 1,
      msg: '参数错误'
    })
  }
  axios('https://maoyan.com/films/' + id).then(data => {
    // console.log(data.data)
    // res.send(data.data)
    const $ = cheerio.load(data.data, {decodeEntities: false});
    let info = {};
    let tagsArr = []
    info.name = $('h1').html()
    info.ename = $('.ename').html()
    $('.text-link').each((index, value) => {
      tagsArr.push($(value).html())
    })
    info.tags = tagsArr
    info.time = $('.banner ul').find('.ellipsis').eq(2).html()
    info.long = $('.banner ul').find('.ellipsis').eq(1).html().split('/')[1]
    if ($('.star-on').length) {
      info.score = parseInt($('.star-on').attr('style').split(';')[0].split(':')[1]) / 10
    }
    
    info.description = $('.dra').html()
    res.json({
      status: 0,
      result: info
    })
  })
});

module.exports = router;