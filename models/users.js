var mongoose = require('mongoose');
// Connect to MongoDB and create/use database called todoAppTest

// Create a schema
var userSchema = new mongoose.Schema({
  name: String,
  firstname: String,
  username: String,
  password: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  unread_books: [{
    title: String,
    isbn: String,
    price: String,
    publisher: String,
    author: String
  }],
  read_books: [{
    title: String,
    isbn: String,
    price: String,
    publisher: String,
    author: String
  }]
});


// Create a model based on the schema
var Usersmodel = mongoose.model('Users', userSchema);

Usersmodel.create({
  name:'Dupont',
  firstname:'Pierre',
  username:'pierre.dupont',
  password:'0000',
  unread_books: [{title: "Livre non lu 1", isbn: "9080938415", price: "12", publisher: "publisher", author: "Auteur"}, {title: "Livre non lu 2", isbn: "24Y7986189053", price: "23", publisher: "publisher", author: "Auteur"}],
  read_books: [{title: "Livre lu 1", isbn: "89547258971", price: "25", publisher: "test", author: "test auteur"},{title: "Livre lu 2", isbn: "74893159816", price: "8", publisher: "test", author: "test auteur"}]
  }, function(err, result) {
   if(err) {
    console.log('ERROR : ', err);
   }
   console.log('USER : ', result);
 });

module.exports = Usersmodel;
