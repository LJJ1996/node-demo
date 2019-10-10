const express = require('express');
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

router.get('/hero-list', (req, res) => {
    res.render('list.html', {
        heros: [{ name: '111' }, { name: '222' }]
    })
})


server.use(router);
server.listen(8888);