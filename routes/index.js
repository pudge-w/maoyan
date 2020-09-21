var express = require('express');
var router = express.Router();
var axios = require('axios');
const cheerio = require('cheerio');

/* GET home page. */
router.get('/', function(req, res, next) {
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
    res.json(arr)
  })
});

module.exports = router;
