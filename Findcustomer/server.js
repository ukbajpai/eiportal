var message = require("./properties.json");
var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.json());
var fs = require("fs");
var MongoClient = require('mongodb').MongoClient;
var url = message.dburl;
app.get('/listUsers', function (req, res) {
    console.log(url);
    var data = {}
    MongoClient.connect(url, function(err, db) {
        db.collection("customer").find({name : "Amy"}).toArray(function (err, docs) {
            if (err) throw err;
            res.json(docs);
          });
          
        });
        
})
app.post('/addUser', function (req, res) {
  // First read existing users.
  console.log(req.headers.auth_token)
  console.log(req.body);
  res.end("")
})


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})