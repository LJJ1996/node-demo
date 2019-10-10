const express = require('express');
let server = express();

// res.join() 响应数据，最常用，返回ajax数据
// redirect() 重定向
// download() 下载
// jsonp() 跨域处理


let router = express.Router();

router.get('/json', (req, res) => {
    res.json({name:"json"});
}).get('/redirect', (req, res) => {
    res.redirect("http://www.baidu.com");
}).get('/download', (req, res) => {
    res.download("./app.js");
}).get('/jsonp', (req, res) => {
    res.jsonp("jack love rose");
})


server.use(router);
server.listen(8888);