const http = require("http");

http.createServer((req, res) => {
    res.end("9999 is read");
}).listen(9999, () => {
    console.log("this is 9999 port");
})