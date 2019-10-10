https://www.bilibili.com/video/av48964811/?p=1

1. 内置对象
    - 全局对象
        - process.env: 获取具体的环境变量值，每台机器上的环境变量中的值不同
        - process.argv: 获取具体的命令行参数
        - __filename: 获取当前文件的目录，绝对路径
        - __dirname: 当前文件运行的绝对路径 
    - 核心对象
        - path:const path = require('path');
        - let myPath = path.join(__dirname,'a','b'): 路径拼接
        - path.resolve('./a/b.txt'): 相对路径转绝对路径
        - let myPathObj = path.parse(myPath): 解析路径为对象，对象中的ext和name属性基于base生成的，不可更改，对象中的base可以作为文件名或者后缀的方式。
        - myPath = path.format(myPathObj): 接收路径对象转换为路径字符串
    - 自定义对象

2. fs文件模块：文件读写、遍历文件夹等
    - const fs = require('fs');
    - fs.readFile('./a.txt',(err , data) => { }) 
      // 回调中的err => Error || null , data为buffer,采用buffer的toString()获取字符串数据
      // fs.readFile('./a.txt','utf8',(err , data) => { }) 此时获取的data就是字符串数据
    - fs.writeFile('./a.txt','this is content',(err) => { }) // 报错处理：if(err) throw err;
    - fs.appendFile('./a.txt' , 'this is append content' , (err) => { })
      // fs.writeFile('./a.txt' , 'this is content' , {flag: 'a'} ,(err) => { }) 同追加
    - readFileSync、writeFileSync: （同步操作）

3. 遍历文件夹中的文件
   - 获取文件夹，获取其中所有文件的资源
   - stat 读取文件的状态
   - readdir 读取文件夹数据
   - access 判断文件或者文件夹是否存在

4. npm
   - npm info jquery: 查看包的信息
   - npm info jquery version: 查看包的信息中的某个字段（版本） 
   - npm docs jquery: 查看包的文档
   - npm install -g http-server: 安装全局命令行工具
   - npm uninstall -g http-server: 卸载全局命令行工具
   - npm root -g: 查看全局包的下载路径
   - npm config set prefix "D:\XXX": 不要node_modules，修改环境变量中的path属性

5. nrm: npm的镜像源管理工具
   - 全局安装 npm install -g nrm
   - 新增镜像源 nrm add name XXXXX
   - 查看当前可选的镜像源 nrm ls
   - 切换镜像源 nrm use taobao
   - 检测镜像的速度 nrm test 
   - 删除原配置 nrm del XXX

6. 获取加载机制中的某个包入口： require.resolve('xxxx')

7. http
   - var xhr = new XMLHttpRequest();创建服务器，监听端口listen,处理响应on('request',(req , res) => {})
   - 请求报文
   - 响应报文

8. express
   const express = require('express');
    let server = express();
    server.listen(8888);
    server.use((req, res) => {
        res.end("hello world");
    })
   
9. express-art-template 中间件

10. mongodb
    - mongod --dbpath "d://MongoDB//data" //启动服务端
    - mongo // 启动客户端

11. 常用命令
    - show dbs; // 
    - show collections; // 显示所有集合
    - use user; // 切换集合
    - db.user.insert({name:"ljj1111",age:25}) // 插入
    - db.user.save({name:"ljj",age:29}) // 插入
    - db.user.save({"_id" : ObjectId("5d6bc72c87067026f11da93f"),name:"lff2222",age:25}) //更新
    - db.user.remove({name:"ljj"}) //删除
    - db.user.update(({name:"lff2222"}),{$set:{name:"lff555"}}) 更新
    - 条件查询：
      - db.user.find({age:{$lt:30}}) // 大于
      - db.user.find({age:{$lte:30}}) // 大于等于
      - db.user.find({age:{$gte:25}}) // 小于等于
      - db.user.find({age:{$gt:25}}) // 小于
    - db.user.find().skip(3).limit(2) // 分页,跳到第三条显示两条
    - db.user.find().sort({'age':1}) // 1升序，-1降序
    - db.user.find({name:{$regex:'l'}}) //模糊匹配
    - db.user.find({name:/^55/}) key后面可以跟正则