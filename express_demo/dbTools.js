const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'test002';
let obj = {};

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

obj.update = function (cname, filter, updated, fn) {
    _connect(function (client) {
        const col = client.db(dbName).collection(cname);
        col.update(filter, { $set: updated }, function (err, result) {
            if (err) throw err;
            fn(err, result)
            client.close();
        })
    })
}

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

function _init(cname) {
    _connect(function (client) {
        const col = client.db(dbName).collection(cname);
        col.createIndex({ "sp": "2dsphere" }, function (err) {
            if (err) throw err;
            console.log("index success");
            client.close();
        });
    })
}

_init("test111");

obj.nearMe = function (cname, data, fn) {
    _connect(function (client) {
        const col = client.db(dbName).collection(cname);
        col.aggregate({
            $geoNear: {
                near: { type: "Point", coordinates: [data.left, data.right] },
                distanceField: "dist.calculated",
                spherical: true,
                maxDistance: 40000
            }
        }, (err, cursor) => {
            if (err) throw err;
            cursor.toArray((err, docs) => {
                // console.log("===========", err, docs);
                if (err) throw err;
                fn && fn(err, docs);
                client.close();
            })
        })
    })


}


module.exports = obj;