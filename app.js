var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Gpio = require('onoff').Gpio;

app.use(bodyParser.json()); //support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); //support encoded bodies

app.get('/', function(req, res){
  res.send('hell0 world');
})
app.post('/', function(req, res){
var position = req.body.position;
if(position == 0){
  light(14, req.body.power);
}
else if(position == 1){
  light(15, req.body.power);
}
else if(position == 2){
  light(18, req.body.power);
}
else{
  console.log('not a choice');
}

  function light(pin, power) {
  var led = new Gpio(pin, 'out');
  if(power === true) {
    console.log('on');
    led.writeSync(1);
  } else {
    console.log('off');
    led.writeSync(0);
  }
 } 
  var response = req.body;
  res.json('response');
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
