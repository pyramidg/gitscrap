var express = require('express');
var router = express.Router();



router.get('/studio/:webStudioid', function (req, res) {

  var dataFile = req.app.get('appData');
  var webStudio = dataFile.directory[req.params.webStudioid];

  res.send(`
      <h1>${webStudio.email}</h1>
      <h1>${webStudio.first_name}</h1>

    `);

});


module.exports = router;
