var express = require('express');
var router = express.Router();


router.get('/studio', function (req, res) {
  var info = '';
  var dataFile = req.app.get('appData');
  dataFile.directory.forEach(function(item) {
    info += `
    <h1>${item.para}</h1>
    <h1>${item.first_name}</h1>
        `;
      });
  res.send(`
      <h1>Web Studio Place</h1>
      ${info}

    `);

});


router.get('/studio/:webStudioid', function (req, res) {

  var dataFile = req.app.get('appData');
  var webStudio = dataFile.directory[req.params.webStudioid];

  res.send(`
      <h1>${webStudio.email}</h1>
      <h1>${webStudio.first_name}</h1>

    `);

});


module.exports = router;
