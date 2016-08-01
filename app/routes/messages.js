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

router.delete('/:id', function(req, res) {
  models.Message.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(message) {
    res.json(message);
  });
});

module.exports = router;
