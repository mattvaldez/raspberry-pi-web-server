var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/:name', function(req, res) {
  var name = req.param('name');  
  res.send('hello ' + name);
});

app.use(bodyParser.json()); //support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); //support encoded bodies

app.post('/', function(req, res){
  var name = req.body.name;
  res.send( 'hello ' + name );
})
app.listen(8000, function () {
  console.log('Hello from the Raspberry Pi!');
});
