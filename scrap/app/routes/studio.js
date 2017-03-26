var express = require('express');
var router = express.Router();


router.get('/studio', function () {
  res.send('studio route');

});



module.exports = router;
