var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); //support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); //support encoded bodies

app.get('/', function(req, res){
  res.send('hell0 world');
})
app.post('/', function(req, res){
  var color = req.body;
  var json = res.json(color);
  console.log(json);
})
app.listen(8000, function () {
  console.log('Hello from the Raspberry Pi!');
});
