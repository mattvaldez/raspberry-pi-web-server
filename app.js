var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/:name', function(req, res) {
  var name = req.param('name');  
  res.send('hello ' + name);
});

app.listen(8000, function () {
  console.log('Hello from the Raspberry Pi!');
});
