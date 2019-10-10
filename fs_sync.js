const fs = require('fs');

let data = fs.readFileSync('./file/file.txt', 'utf8');

fs.writeFileSync('./file/whiteFile.txt', data);
console.log("赋值成功");