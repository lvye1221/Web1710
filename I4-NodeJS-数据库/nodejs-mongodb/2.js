
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("photo-manager");
    
    dbo.collection("user"). find({}).toArray(function(err, result) { 
        if (err) throw err;
        console.log(result);
        console.log("连接成功");
        db.close();
    });
});

