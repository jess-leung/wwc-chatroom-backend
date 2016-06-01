var express = require('express');
var models  = require('../models');
var router = express.Router();

router.get('/', function(req, res, next) {
  models.Message.findAll().then(function(messages) {
    res.status(200).json(messages);
  });
});

router.post('/', function(req, res, next) {
  if (req.body.content === undefined) {
    res.status(400).json("Invalid message content");
    return;
  }
  var message = models.Message.build({
    content: req.body.content
  });

  message.save()
    .then(function(err) {
      if (err) {
        res.json(err);
      }
  });
});

module.exports = router;
