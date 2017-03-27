
var express = require('express');
var app = express();
var dataFile = require('./data/data.json');


// app.get('/', function (req, res) {
// // ES6 Back Ticks  (` `);
//     res.send(`
//       <h1>First Route</h1>
//       `);
//
// });

// Add Routes
app.use(require('./routes/index'));
app.use(require('./routes/studio'));

// makes data files availible to routes
app.set('appData', dataFile);



app.set('port', process.env.PORT || 3000);

var server = app.listen(app.set('port'), function () {
  console.log('log out on', app.get('port'));
});
