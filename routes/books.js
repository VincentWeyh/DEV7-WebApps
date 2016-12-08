var express = require('express');
var router = express.Router();
var Books = require('../models/books')

/* GET all books. */
router.get('/', function(req, res, next) {
  Books.find(function (err, books){
    if(err) return next(err);
    res.json(books);
  });
});

/* GET book by isbn. */
router.get('/isbn/:isbn', function(req, res, next) {
  Books.find({"isbn": req.params.isbn}, function (err, book){
    if(err) return next(err);
    res.json(book);
  });
});

/* GET book by id. */
router.get('/id/:id', function(req, res, next) {
  Books.findById(req.params.id, function (err, book){
    if(err) return next(err);
    res.json(book);
  });
});

/* POST book */
router.post('/', function(req, res, next) {
  Books.create(req.body, function (err, book) {
    if (err) return next(err);
    res.json(book);
  });
});

/* PUT Update book by isbn */
// router.put('/isbn/:isbn', function(req, res, next) {
//   Books.find({"isbn": req.params.isbn}, function (err, book){
//     if(err) return next(err);
//     res.json(book);
//   });
// });

/* PUT Update book by id */
router.put('/id/:id', function(req, res, next) {
  Books.findByIdAndUpdate(req.params.id, req.body, function (err, book){
    if(err) return next(err);
    res.json(book);
  });
});

/* DELETE book by id */
router.delete('/id/:id', function(req, res, next) {
  Books.findByIdAndRemove(req.params.id, function (err, book){
    if(err) return next(err);
    res.json(book);
  });
});

/* DELETE book by isbn */
router.delete('/isbn/:isbn', function(req, res, next) {
  Books.find({"isbn": req.params.isbn}, function (err, book){
    if(err) return next(err);
    res.json(book);
  });
});



module.exports = router;
