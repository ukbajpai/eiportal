
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://ukencaph:uk@ds243055.mlab.com:43055/ukencaph";
MongoClient.connect(url, function(err, db) {
  db.collection("customer").find({}, function(err, result) {
      if (err) throw err;
      console.log(result.name);
      db.close();
    });
    
  });