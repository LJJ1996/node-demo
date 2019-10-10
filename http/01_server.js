const http = require('http');

let server = http.createServer();

server.on('request', (req, res) => {
    // req 只读 拿属性
    // res 只写 调函数
    // console.log(req.url);
    // console.log(req.headers);
    // console.log(req.method);

    // req.on('data', (data) => {
    //     console.log(data.toString());
        
    // })

    res.setHeader('a', 'a');
    res.setHeader('b', 'b');
    res.setHeader('c', 'c');

    res.writeHead(200 , {'content-type':'text/html;charset=utf-8'})

    res.write("这是一个返回结果")
    res.end('XXX');

    
});

server.listen('8888', () => {
    console.log("server run on 8888");
})