const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'test';
let obj = {};

// MongoClient.connect(url, function (err, client){
//     if (err) throw err;
//     const col = client.db(dbName).collection('createIndexExample1');
//     col.insert([{ a: 1, b: 1 }, { a: 2, b: 2 }], { w: 1 }, function (err, result) {
//         if (err) throw err;
//         col.find().toArray(function (err, docs) {
//             if (err) throw err;
//             console.log(docs);
//             client.close();
//         })
//     })
// })

function _connect(callback) {
    MongoClient.connect(url, function (err, client) {
        if (err) throw err;
        callback(client);
    })
}

obj.insert = function (cname, arrData, fn) {
    _connect(function (client) {
        const col = client.db(dbName).collection(cname);
        col.insert(arrData, function (err, result) {
            if (err) throw err;
            fn(err, result)
            client.close();
        })
    })
}

// obj.insert('test01', [{ name: 'jack111' }, { name: 'rose2222' }], function (err, result) {
//     if (err) throw err;
//     console.log("this is result", result);
// })

obj.find = function (cname, filter, fn) {
    _connect(function (client) {
        const col = client.db(dbName).collection(cname);
        col.find(filter).toArray(function (err, docs) {
            if (err) throw err;
            fn(err, docs)
            client.close();
        })
    })
}

// obj.find('test01', { name: 'jack' }, function (err, docs) {
//     if (err) throw err;
//     console.log("this is result", docs);
// })

obj.update = function (cname, filter,updated, fn) {
    _connect(function (client) {
        const col = client.db(dbName).collection(cname);
        col.update(filter, { $set: updated }, function (err, result) {
            if (err) throw err;
            fn(err, result)
            client.close();
        })
    })
}

// obj.update('test01', { name: 'jack' },{name:'jack111'}, function (err, docs) {
//     if (err) throw err;
//     console.log("this is result", docs);
// })

obj.remove = function (cname, filter, fn) {
    _connect(function (client) {
        const col = client.db(dbName).collection(cname);
        col.deleteMany(filter, function (err, result) {
            if (err) throw err;
            fn(err, result)
            client.close();
        })
    })
}

// obj.remove('test01', { name: 'jack111' }, function (err, docs) {
//     if (err) throw err;
//     console.log("this is result", docs);
// })

function _init() {
    _connect(function (client) {
        const col = client.db(dbName).collection(cname);
        col.createIndex({ "sp": "2dsphere" }, function (err) {
            if (err) throw err;
            client.close();
        });
    })
}

_init();

// module.exports = obj;