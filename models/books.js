var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  title: String,
  isbn: String,
  price: String,
  publisher: String,
  author: String,
});

var bookModel = mongoose.model('books', bookSchema);

// bookModel.create({title: "Harry potter", isbn: "9780747541462", price: "32", publisher: "Bloomsbury Publishing PLC", author: "J. K. Rowling"},
//                   {title: "The Lord of the Rings", isbn: "0458907707", price: "28", publisher: "George Allen & Unwin", author: "J. R. R. Tolkien"},function(err, result) {
//                     if(err){
//                       console.log('BOOK: ' + err);
//                     }
//                     console.log('BOOK: ' + result);
//                   });

module.exports = bookModel;
