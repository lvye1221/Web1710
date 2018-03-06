var mongoskin = require('mongoskin');
var url = 'mongodb://localhost:27017/photo-manager';
db = mongoskin.db(url);
db.bind('users');
db.users.find({}).toArray(function(err, results){
  console.log("err: " + err);
  console.log("result: " + results);
})
