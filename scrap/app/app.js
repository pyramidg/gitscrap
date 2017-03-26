

var express = require('express');
var app = express();


app.get('/', function(req, res) {
  res.send('Got it again!');
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('listening on port 3000');
});


// var express = require('express');
// var app = express();
//
//
//
// app.get('/', function(req, res) {
//   res.send('1st Step Done!');
// });
// // If you set it you have to get it
// app.set('port', process.env.PORT || 3000);
//
// var server = app.listen(app.get('port'), function() {
//   console.log("listening on port 3000");
// });
