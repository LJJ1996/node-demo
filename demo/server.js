const http = require("http");

http.createServer((req, res) => {
    res.end("8888 is read");
}).listen(8888, () => {
    console.log("this is 8888 port");
})