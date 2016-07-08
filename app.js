var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Gpio = require('onoff').Gpio;

app.use(bodyParser.json()); //support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); //support encoded bodies

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
      led.writeSync(1);
      res.json('Response from the Pi: LED in position ' + position + ' is now on');
    }
    else {
      led.writeSync(0);
      res.json('Response from the Pi: LED in position  ' + position + ' is now off');
    }
  }
})

app.listen(8000, function () {
  console.log('Hello Standard Code, from the Raspberry Pi!');
});

app.all("/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next();
});
