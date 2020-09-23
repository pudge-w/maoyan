var express = require('express');
var router = express.Router();
var axios = require('axios');
const cheerio = require('cheerio');

// 最受欢迎电影
router.get('/topRatedMovies', function(req, res, next) {
  // axios.get('https://m.maoyan.com/ajax/topRatedMovies?token=&optimus_uuid=2F0AF070FB4611EA937E3120EC3A5451D5967A15A4924F6B9DDFD75DE8BC4F1A&optimus_risk_level=71&optimus_code=10').then(data => {
  //   const $ = cheerio.load(data.data, {decodeEntities: false});
  //   let arr = [];
  //   $('.top-rated-item').each((index, value) => {
  //     arr.push({
  //       id: $(value).attr('data-id'),
  //       img: $(value).find('.poster img').attr('src'),
  //       score: $(value).find('.rated-score').html(),
  //       wishNum: $(value).find('.wish-num').html(),
  //       title: $(value).find('.line-ellipsis').html()
  //     })
  //   })
    res.json({
      status: 0,
      result: { "status": 0, "result": [{ "id": "346210", "img": "https://p1.meituan.net/170.230/moviemachine/a448ca6a5f4dafb88067722303ca0cfd96002.jpg", "score": "9.2", "wishNum": null, "title": "八佰" }, { "id": "1283967", "img": "https://p1.meituan.net/170.230/movie/7dc973175415282c23bb3e8b9401c15d3903238.jpg", "score": "9.2", "wishNum": null, "title": "蓝色防线" }, { "id": "1297973", "img": "https://p0.meituan.net/170.230/moviemachine/40d1e5ac176f1e9258da10a3222dbff7952117.png", "score": "8.3", "wishNum": null, "title": "信条" }, { "id": "1277457", "img": "https://p0.meituan.net/170.230/movie/374f7addeb978a634b0f5e8665f0bce4357962.jpg", "score": "8.2", "wishNum": null, "title": "麦路人" }, { "id": "1247287", "img": "https://p1.meituan.net/170.230/movie/9ce80d2aa1aec49b7f999305c237bace2082932.jpg", "score": "8.2", "wishNum": null, "title": "死无对证" }, { "id": "489894", "img": "https://p0.meituan.net/170.230/moviemachine/7e6118993dbf0f304ac1dad4667fddda207318.jpg", "score": "7.9", "wishNum": null, "title": "我在时间尽头等你" }, { "id": "1210778", "img": "https://p1.meituan.net/170.230/moviemachine/ca9d0c0268a940d73d62c004d57b957a5241814.jpg", "score": "7.5", "wishNum": null, "title": "花木兰" }, { "id": "1217123", "img": "https://p1.meituan.net/170.230/movie/988ab3d3a50f51f31d090e84da88d5ae3461853.jpg", "score": null, "wishNum": "506520", "title": "夺冠" }, { "id": "1211269", "img": "https://p0.meituan.net/170.230/moviemachine/da8024493c8142c0949f8b72d43934c0351577.jpg", "score": null, "wishNum": "1308181", "title": "姜子牙" }, { "id": "1216053", "img": "https://p0.meituan.net/170.230/movie/d1a953193e001c8dec96c17ea5075ec0788729.jpg", "score": null, "wishNum": "264724", "title": "急先锋" }, { "id": "1328712", "img": "https://p0.meituan.net/170.230/movie/202ea88abd2abf2aa1964487d61edab64556414.jpg", "score": null, "wishNum": "338796", "title": "我和我的家乡" }, { "id": "2212", "img": "https://p0.meituan.net/170.230/movie/0bd752877b95b8eac2d0704c783f372c4625354.jpg", "score": null, "wishNum": "21051", "title": "菊次郎的夏天" }]}
    })
});

// 首页列表
router.post('/movieOnInfoList', (req, res, next) => {
  // axios.get('https://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=8905E2E0E6A811EA8DE5DF8C66C7FB7598262DFDFCFC498CABC603180F0378A3&optimus_risk_level=71&optimus_code=10').then(data => {
  //   const {movieIds, total, movieList} = data.data
  //   res.json({
  //     status: 0,
  //     result: {
  //       movieIds,
  //       total,
  //       movieList
  //     }
  //   })
  // })
  res.json({
    status: 0,
    result: {"coming":[],"movieIds":[346210,1297973,1217123,1211269,1328712,1216053,1210778,1247287,1277457,2212,1331267,1207303,1283967,489894,1263349,1219866,1215300,1298859,1230199,416,1262682,1238922,1284572,938,3606,1301196,78033,1215767,1218273,1307132,1299144,78341,1301478,1346273,338059,1337937,1285627,342068,1203734,1243792,1218159,1250729,1203109],"stid":"576591972453269000","stids":[{"movieId":346210,"stid":"576591972453269000_a346210_c0"},{"movieId":1297973,"stid":"576591972453269000_a1297973_c1"},{"movieId":1217123,"stid":"576591972453269000_a1217123_c2"},{"movieId":1211269,"stid":"576591972453269000_a1211269_c3"},{"movieId":1328712,"stid":"576591972453269000_a1328712_c4"},{"movieId":1216053,"stid":"576591972453269000_a1216053_c5"},{"movieId":1210778,"stid":"576591972453269000_a1210778_c6"},{"movieId":1247287,"stid":"576591972453269000_a1247287_c7"},{"movieId":1277457,"stid":"576591972453269000_a1277457_c8"},{"movieId":2212,"stid":"576591972453269000_a2212_c9"},{"movieId":1331267,"stid":"576591972453269000_a1331267_c10"},{"movieId":1207303,"stid":"576591972453269000_a1207303_c11"}],"total":43,"movieList":[{"id":346210,"haspromotionTag":false,"img":"http://p1.meituan.net/w.h/moviemachine/a448ca6a5f4dafb88067722303ca0cfd96002.jpg","version":"v2d imax","nm":"八佰","preShow":false,"sc":9.2,"globalReleased":true,"wish":518898,"star":"王千源,张译,姜武","rt":"2020-08-21","showInfo":"今天161家影院放映1190场","showst":3,"wishst":0},{"id":1297973,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/moviemachine/40d1e5ac176f1e9258da10a3222dbff7952117.png","version":"v2d imax","nm":"信条","preShow":false,"sc":8.3,"globalReleased":true,"wish":61210,"star":"约翰·大卫·华盛顿,罗伯特·帕丁森,伊丽莎白·德比茨基","rt":"2020-09-04","showInfo":"今天153家影院放映843场","showst":3,"wishst":0},{"id":1217123,"haspromotionTag":false,"img":"http://p1.meituan.net/w.h/movie/988ab3d3a50f51f31d090e84da88d5ae3461853.jpg","version":"v2d imax","nm":"夺冠","preShow":false,"sc":0,"globalReleased":false,"wish":506305,"star":"巩俐,黄渤,吴刚","rt":"2020-09-25","showInfo":"2020-09-25 本周五上映","showst":4,"wishst":0},{"id":1211269,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/moviemachine/da8024493c8142c0949f8b72d43934c0351577.jpg","version":"v3d imax","nm":"姜子牙","preShow":false,"sc":0,"globalReleased":false,"wish":1307341,"star":"郑希,杨凝,图特哈蒙","rt":"2020-10-01","showInfo":"2020-10-01 下周四上映","showst":4,"wishst":0},{"id":1328712,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/202ea88abd2abf2aa1964487d61edab64556414.jpg","version":"v2d imax","nm":"我和我的家乡","preShow":false,"sc":0,"globalReleased":false,"wish":338087,"star":"黄渤,葛优,范伟","rt":"2020-10-01","showInfo":"2020-10-01 下周四上映","showst":4,"wishst":0},{"id":1216053,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/d1a953193e001c8dec96c17ea5075ec0788729.jpg","version":"v3d imax","nm":"急先锋","preShow":false,"sc":0,"globalReleased":false,"wish":264418,"star":"成龙,杨洋,艾伦","rt":"2020-09-30","showInfo":"2020-09-30 下周三上映","showst":4,"wishst":0},{"id":1210778,"haspromotionTag":false,"img":"http://p1.meituan.net/w.h/moviemachine/ca9d0c0268a940d73d62c004d57b957a5241814.jpg","version":"v3d imax","nm":"花木兰","preShow":false,"sc":7.5,"globalReleased":true,"wish":216004,"star":"刘亦菲,甄子丹,杰森·斯考特·李","rt":"2020-09-11","showInfo":"今天163家影院放映1057场","showst":3,"wishst":0},{"id":1247287,"haspromotionTag":false,"img":"http://p1.meituan.net/w.h/movie/9ce80d2aa1aec49b7f999305c237bace2082932.jpg","version":"","nm":"死无对证","preShow":false,"sc":8.2,"globalReleased":true,"wish":12851,"star":"里卡多·斯卡马乔,米丽娅姆·莱昂内,法布里齐奥·本蒂沃利奥","rt":"2020-09-18","showInfo":"今天158家影院放映645场","showst":3,"wishst":0},{"id":1277457,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/374f7addeb978a634b0f5e8665f0bce4357962.jpg","version":"","nm":"麦路人","preShow":false,"sc":8.2,"globalReleased":true,"wish":14605,"star":"郭富城,杨千嬅,万梓良","rt":"2020-09-17","showInfo":"今天129家影院放映333场","showst":3,"wishst":0},{"id":2212,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/0bd752877b95b8eac2d0704c783f372c4625354.jpg","version":"","nm":"菊次郎的夏天","preShow":false,"sc":0,"globalReleased":false,"wish":20957,"star":"北野武,关口雄介,岸本加世子","rt":"2020-09-25","showInfo":"2020-09-25 本周五上映","showst":4,"wishst":0},{"id":1331267,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/moviemachine/cbe423e7511c6ee1b19034550ea782452468297.jpg","version":"","nm":"一点就到家","preShow":true,"sc":0,"globalReleased":false,"wish":26336,"star":"刘昊然,彭昱畅,尹昉","rt":"2020-10-04","showInfo":"2020-10-04 下周日上映","showst":4,"wishst":0},{"id":1207303,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/moviemachine/bbedacda94dde6d1e62379abc1258e9c231479.jpg","version":"","nm":"邻里美好的一天","preShow":false,"sc":8.5,"globalReleased":true,"wish":6773,"star":"汤姆·汉克斯,马修·瑞斯,苏珊·卡莉奇·沃森","rt":"2020-09-18","showInfo":"今天77家影院放映126场","showst":3,"wishst":0}]}
  })
})


// 首页加载更多
router.post('/moreComingList', (req, res, next) => {
  // const ids = req.body.ids
  // axios.get('https://m.maoyan.com/ajax/moreComingList?token=&movieIds=' + ids + '&optimus_uuid=8905E2E0E6A811EA8DE5DF8C66C7FB7598262DFDFCFC498CABC603180F0378A3&optimus_risk_level=71&optimus_code=10').then(data => {
  //   res.json({
  //     status: 0,
  //     result: data.data.coming
  //   })
  // })
  res.json({
    status: 0,
    result: [
      { "id": 1211269, "haspromotionTag": false, "img": "http://p0.meituan.net/w.h/moviemachine/da8024493c8142c0949f8b72d43934c0351577.jpg", "version": "v3d imax", "nm": "姜子牙", "preShow": false, "sc": 0, "globalReleased": false, "wish": 1307341, "star": "郑希,杨凝,图特哈蒙", "rt": "2020-10-01", "showInfo": "2020-10-01 下周四上映", "showst": 4, "wishst": 0 }, { "id": 1328712, "haspromotionTag": false, "img": "http://p0.meituan.net/w.h/movie/202ea88abd2abf2aa1964487d61edab64556414.jpg", "version": "v2d imax", "nm": "我和我的家乡", "preShow": false, "sc": 0, "globalReleased": false, "wish": 338087, "star": "黄渤,葛优,范伟", "rt": "2020-10-01", "showInfo": "2020-10-01 下周四上映", "showst": 4, "wishst": 0 }, { "id": 1216053, "haspromotionTag": false, "img": "http://p0.meituan.net/w.h/movie/d1a953193e001c8dec96c17ea5075ec0788729.jpg", "version": "v3d imax", "nm": "急先锋", "preShow": false, "sc": 0, "globalReleased": false, "wish": 264418, "star": "成龙,杨洋,艾伦", "rt": "2020-09-30", "showInfo": "2020-09-30 下周三上映", "showst": 4, "wishst": 0 }, { "id": 1207303, "haspromotionTag": false, "img": "http://p0.meituan.net/w.h/moviemachine/bbedacda94dde6d1e62379abc1258e9c231479.jpg", "version": "", "nm": "邻里美好的一天", "preShow": false, "sc": 8.5, "globalReleased": true, "wish": 6773, "star": "汤姆·汉克斯,马修·瑞斯,苏珊·卡莉奇·沃森", "rt": "2020-09-18", "showInfo": "今天77家影院放映126场", "showst": 3, "wishst": 0 }
    ]
  })
})

module.exports = router;
