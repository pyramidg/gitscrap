var express = require('express');
var router = express.Router();



router.get('/', function (req, res) {
// ES6 Back Ticks  (` `);
    res.send(`
      <h1>Index Route</h1>
      `);

});


module.exports = router;
