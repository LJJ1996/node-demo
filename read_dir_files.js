// 接收命令行参数，根据该目录，读取目录下的所有文件（遍历文件夹）
// 1. 接收命令行参数 

const path = require("path");
const fs = require("fs");

let inputPath = path.resolve(process.argv[2]);

function testReadFile(dir) {
    try {
        fs.accessSync(dir, fs.constants.F_OK);

        let state = fs.statSync(dir);
        if (state.isFile()) {
            console.log("文件");
        } else if (state.isDirectory()) {
            console.log("文件夹");
            let files = fs.readdirSync(dir);
            console.log(files);
            files.forEach(file => {
                testReadFile(path.join(dir , file));
            })
        }
    } catch (error) {
        console.log("文件或者文件夹不存在");
    }

}

testReadFile(inputPath);
