const http = require('http');
const fs = require('fs');


let server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('./index.html', (err, data) => {
            res.writeHead(200, { 'content-type': 'text/html;charset=url-8' });
            res.end(data);
        })
    } else if (req.url === '/test' && req.method === 'GET') {
        res.writeHead(200, { 'content-type': 'application/actet-stream'});
        
        setInterval(function () {
            res.write('' + Date.now() + '^_^');
        } , 1000 )
        
        // res.end('OK');
    }
}).listen(8888);