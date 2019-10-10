let num1 = parseInt(process.argv[2]);
let num2 = parseInt(process.argv[3]);
let sum = num1 + num2;

console.log("计算中。。。");

setTimeout(() => {
    console.log("计算结果是：", sum);
} , 2000)