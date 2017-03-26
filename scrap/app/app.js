
var express = require('express');
var app = express();


// app.get('/', function (req, res) {
// // ES6 Back Ticks  (` `);
//     res.send(`
//       <h1>First Route</h1>
//       `);
//
// });

// Add Routes
app.use(require('./routes/index'));

app.get('/studio', function (req, res) {
   res.send(`Studio Route`);
});


app.set('port', process.env.PORT || 3000);

var server = app.listen(app.set('port'), function () {
  console.log('log out on 3 stacks');
});
