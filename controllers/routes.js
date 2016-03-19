var express = require('express');
var router = express.Router();

var Stuff = require('../models/stuff.js');

router.get('/', function(req, res){
  res.sendFile(process.cwd() + '/public/index.html');
});

router.post('/add-stuff', function(req, res){
  var newStuff = new Stuff({
    task: req.body.midnight
  });

  newStuff.save().then(function(dbStuff){
    res.json(dbStuff);
  });
});

module.exports = router;