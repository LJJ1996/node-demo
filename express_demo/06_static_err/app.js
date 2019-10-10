const express = require('express');
const fs = require("fs");
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

router.get('/hero-list', (req, res,next) => {
    let errorPath = "./abc/e.txt";
    try {
        fs.readFileSync(error);
    } catch (error) {
        // throw error;
        next(error);
    }
    res.render('index.html')
}).all('*', (req , res) => {
    res.send('地址错误')
})

server.use("/public", express.static('./public'));

server.use(router);

server.use((req, res, next) => {
    res.send("<h1>wrong</h1>")
})

server.listen(8888);

