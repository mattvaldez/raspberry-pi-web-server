var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); //support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); //support encoded bodies

app.get('/', function(req, res){
  res.send('hell0 world');
})
app.post('/', function(req, res){
  var color    = req.body.color;
  var power    = req.body.power;
  var response = 'The ' + color + ' led is now ' + power;
  console.log(req.body);
  res.json(response);
})
app.listen(8000, function () {
  console.log('Hello from the Raspberry Pi!');
});

app.all("/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next();
});
