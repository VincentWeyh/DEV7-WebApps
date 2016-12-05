var express = require('express');
var router = express.Router();
var users = require('../models/users');


/* GET users listing. */
router.get('/', function(req, res, next) {
  users.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

/* POST /users */
router.post('/', function(req, res, next) {
  users.create(req.body, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

/* PUT /users */
router.put('/:id', function(req, res, next) {
  users.findByIdAndUpdate(req.params.id,req.body, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

/* GET /user/id */
router.get('/:name', function(req, res, next) {

  users.findOne({'name': req.params.nom}, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});
/* DELETE /users */
router.delete('/:id', function(req, res, next) {
  users.findByIdAndRemove(req.params.id, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});
module.exports = router;
