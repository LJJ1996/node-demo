console.log(__dirname);
console.log(__filename);

// 没有路径的是核心对象
const path = require('path');
// console.log(path);

const myPath = path.join(__dirname, "//one//", "//two//");

// console.log(myPath);

const myPath2 = path.join(__dirname, 'jack', 'rose', 'mick.txt');
let pathObj = path.parse(myPath2);

pathObj.base = 'mick_die.txt';

path.format(pathObj);
console.log(path.format(pathObj));