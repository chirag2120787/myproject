var express = require('express');
var bodyParser= require('body-parser');
var app = express();
var port = 8080;
var db


var MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://chirag2120787:GalaxyS4@ds163397.mlab.com:63397/usersdetails', (err, database) => {
  // ... start the server
  if (err) return console.log(err)
  db = database
  app.listen(port,function(){
	console.log('app started');
});
});

// route our app (READ)
app.get('/', function(req,res){
	res.sendFile( '/Users/chiragbansal/Desktop/myproject'+'/index.html');	
	var cursor = db.collection('Users').find();
	db.collection('Users').find().toArray(function(err, results) {
  	console.log(results);
  // send HTML file populated with quotes here
})
});

app.use(bodyParser.urlencoded({extended: true}))

app.post('/', (req, res) => {
  db.collection('Users').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})