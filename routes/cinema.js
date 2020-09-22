var express = require('express');
var router = express.Router();
var axios = require('axios');
const cheerio = require('cheerio');

/* GET users listing. */
router.get('/list', function (req, res, next) {
  axios('https://m.maoyan.com/').then(data => {
    const $ = cheerio.load(data.data, { decodeEntities: false });
    let arr = []
    $('.cinema-list a').each((index, item) => {
      let tagsArr = []
      $(item).find('.label-block div').each((i, val) => {
        tagsArr.push($(val).html())
      })
      arr.push({
        id: $(item).attr('href').split('/')[2],
        title: $(item).find('.title').find('span').html(),
        flex: $(item).find('.flex').html(),
        distance: $(item).find('.distance').html(),
        tags: tagsArr,
        text: $(item).find('.discount-label-text').html()
      })
    })
    res.json(arr)
  })
});

module.exports = router;