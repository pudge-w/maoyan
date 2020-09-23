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
  res.json({
    status: 0,
    movieInfo: {
      nm: '信条',
      enm: 'Tenet',
      img: 'http://p1.meituan.net/moviemachine/40d1e5ac176f1e9258da10a3222dbff7952117.png@300w_414h',
      tags: ['科幻', '动作', '剧情'],
      star: ['约翰·大卫·华盛顿', '罗伯特·帕丁森', '伊丽莎白·德比茨基'],
      showTime: '2020-09-04中国大陆上映 / 151分钟',
      content: '世界存亡危在旦夕，“信条”一词是惟一的线索与武器。主人公穿梭于全球各地，开展特工活动，力求揭示“信条”之谜，并完成一项超越了真实时间的神秘任务。这项任务并非时间之旅，而是【时空逆转】。',
      actorList: [
        { name: '克里斯托弗·诺兰', role: '导演', pic: 'http://p1.meituan.net/movie/6efb32d3881c82b1503a0a923de500b6152536.jpg@160w_224h_1e_1c' },
        { name: '约翰·大卫·华盛顿', role: '饰 男主 The Protagonist', pic: 'http://p0.meituan.net/moviemachine/11362cee2d2b0aae40ace4571c44c8fc228022.jpg@160w_224h_1e_1c' },
        { name: '罗伯特·帕丁森', role: '饰 尼尔 Neil', pic: 'http://p0.meituan.net/movie/c9a2126e6a74ea486428ca5ca644b42c33568.jpg@160w_224h_1e_1c' },
        { name: '伊丽莎白·德比茨基', role: '饰 凯特 Kat', pic: 'http://p1.meituan.net/moviemachine/652a58cdd2e221f0d7aef9592a05dfd8196274.jpg@160w_224h_1e_1c' },
        { name: '肯尼思·布拉纳', role: '饰 安德烈·赛特 Andrei Sator', pic: 'http://p0.meituan.net/moviemachine/8f80d8dec91d9eb5f546d45a36e2e159162104.jpg@160w_224h_1e_1c' },
        { name: '迈克尔·凯恩', role: '饰 迈克尔公爵 Michael Crosby', pic: 'http://p1.meituan.net/moviemachine/71c175e95beaf40ce938b79b3530b735172946.jpg@160w_224h_1e_1c' },
      ]
    },
    praise: {
      score: 8.3,
      evaluate: 100160,
      wish: 61210,
      watched: 102594,
      starPic: 'http://s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/star-not-graded.png',
      mark: [62000, 21234, 9114, 1803, 6110]
    },
    discuss: [
      {
        name: '匹博艺术学校·李老师',
        time: '09-04',
        score: 10,
        content: '看完一脸懵。',
        praiseNum: 7790,
        commentsNum: 443
      },
      {
        name: '阿拉伯之夜的蓝山👻🐋',
        time: '09-04',
        score: 9,
        content: '首映看完都看懂了。智商正常的不可能看不懂。只需要明白一点就很容易理解这个片子，就是利用装置回到倒叙时间通过时间逆向回到自己想进入的正向时间点然后再通过装置进入过去的正向时间点。但是剧情有漏洞，给9分，首先会发生的就一定会发生这个在电影里出了好几次，等同于否定了平行宇宙，但是这样的话剧情里那么多尼尔害怕改变过去，比如不告诉主角这样那样的事情就显得多余了',
        praiseNum: 3055,
        commentsNum: 1004
      },
      {
        name: '乘云驾鹤张道士',
        time: '09-04',
        score: 1,
        content: '这片表面上讲时空理论，但内核上是批判现代教育，诺兰摊牌式的告诉小朋友们真正的科学理论领域是多么的空洞冰冷，虚无荒寂，我们从小仰望星空追求的科学并不是永恒和正确的，它会扭曲和变异，会产生悖论，我们信仰的牛顿，普朗克，爱因斯坦等换个角度看全都是伪神!因为今天的物理学会在100年后被人全面推翻，就好像100年前还没人相信熵一样，而熵增减是一个让人类最后灭绝的理论。你觉得我在胡说的话，那说明你一生其实都生活在局限性和目的性极强的狭隘的自我世界里，你从没有全面的完整的观察过整个人类社会体系，我们生活得安全吗？只要一个按钮摁下去，核弹头会让几百万的人死亡残废。',
        praiseNum: 1309,
        commentsNum: 160
      }
    ]
  })
  // axios('https://maoyan.com/films/' + id).then(data => {
  //   // console.log(data.data)
  //   // res.send(data.data)
  //   const $ = cheerio.load(data.data, {decodeEntities: false});
  //   console.log($('h1').html())
  //   let info = {};
  //   let tagsArr = []
  //   info.name = $('h1').html()
  //   info.ename = $('.ename').html()
  //   $('.text-link').each((index, value) => {
  //     tagsArr.push($(value).html())
  //   })
  //   info.tags = tagsArr
  //   info.time = $('.banner ul').find('.ellipsis').eq(2).html()
  //   info.long = $('.banner ul').find('.ellipsis').eq(1).html()
  //   if ($('.star-on').length) {
  //     info.score = parseInt($('.star-on').attr('style').split(';')[0].split(':')[1]) / 10
  //   }
    
  //   info.description = $('.dra').html()
  //   console.log(info)
  //   res.json({
  //     status: 0,
  //     result: info
  //   })
  // })
});

module.exports = router;