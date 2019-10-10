const fs = require('fs');

// fs.readFile('./file/file.txt', (err, data) => {
//     if(err) throw err;
//     console.log(data.toString('utf8'));
// })

fs.writeFile('./file/file.txt', 'this is my append', { flag: 'a' }, (err, data) => {
    if (err) throw err;
    console.log(data);
})

// fs.appendFile('./file/whiteFile.txt', 'this is append222222', (err) => {
//     console.log('success');
// })