const express = require("express");

let app = express();

app.listen(8888, () => {
    console.log("服务器启动在8888端口")
})

app.use('/test1',(req , res , next) => {
    console.log("白菜");
    next(); //放行开关
})
app.use('/test1',(req, res, next) => {
    console.log("青菜")
    next(); //放行开关
})
app.use('/test2',(req, res, next) => {
    console.log("牛肉")
    next(); //放行开关
})
app.use('/test2',(req, res, next) => {
    console.log("羊肉")
    next(); //放行开关
})