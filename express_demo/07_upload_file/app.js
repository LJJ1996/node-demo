const express = require('express');
const fs = require("fs");
const formidable = require("formidable");
const path = require("path");
const db = require("../dbTools");

let server = express();

// 引擎的声名
server.engine(".html", require('express-art-template'));

// 不同环境引擎的设置
server.set('view options', {
    debug: process.env.NODE_ENV !== 'production',
    imports: {
        num: 1,
        reverse: function (str) {
            return '^_^' + str;
        }
    }
});

// 默认引擎的配置
server.set('view engine', '.html');

let router = express.Router();

router.get('/list', (req, res, next) => {

    let location = req.headers.cookie.split("=");
    if (!location) return res.send("没有注册");
    location = location[1];
    let left = location.split(',')[1];
    let right = location.split(',')[0];

    db.nearMe('test111', { left: parseFloat(left), right: parseFloat(right) }, function (err, heros) {
        if (err) return next(err);
        res.render('list.html', {
            heros
        })
    })

})
    .get('/', (req, res, next) => {
        res.render('index');
    })


    .post('/add', (req, res, next) => {
        // 解析文件
        var form = new formidable.IncomingForm();
        form.uploadDir = path.join(__dirname, 'public', 'imgs');
        form.keepExtensions = true;

        form.parse(req, function (err, fields, files) {

            let nickname = fields.nickname;
            let filename = path.parse(files.avater.path).base;
            let location = fields.location;

            let left = location.split(',')[1];
            let right = location.split(',')[0];

            let img = 'imgs/' + filename;
            // heros.push({
            //     nickname,
            //     img
            // })
            db.insert('test111', { nickname, img, "sp": { type: "Point", coordinates: [parseFloat(left), parseFloat(right)] } }, function (err, result) {
                if (err) return next(err);

                res.setHeader('set-cookie', `location=${location}`);

                res.redirect("/list");
            })
        });

        

    }).all('*', (req, res) => {
        res.send('地址错误')
    })

server.use(express.static('./public'));

server.use(router);


server.use((req, res, next) => {
    res.send("<h1>wrong</h1>")
})

server.listen(8888);

