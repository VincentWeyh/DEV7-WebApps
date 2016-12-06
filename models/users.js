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
  books: [{
    title: String,
    author: String,
  }]
});


// Create a model based on the schema
var Usersmodel = mongoose.model('Users', userSchema);

// Usersmodel.create({name:'Dupont',firstname:'Pierre',username:'pierre.dupont',password:'0000'}, function(err, result) {
//   if(err) {
//     console.log('ERROR : ', err);
//   }
//   console.log('USER : ', result);
// });

module.exports = Usersmodel;
