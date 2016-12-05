var mongoose = require('mongoose');
// Connect to MongoDB and create/use database called todoAppTest
mongoose.connect('mongodb://localhost/apirest');
// Create a schema
var userSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  username: String,
  password: String,
  date_inscription: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});


// Create a model based on the schema
var Usersmodel = mongoose.model('Users', userSchema);

Usersmodel.create({nom:'Dupont',prenom:'Pierre',username:'pierre.dupont',password:'0000'}, function(err, result) {
  if(err) {
    console.log('ERROR : ', err);
  }
  console.log('USER : ', result);
});

module.exports = Usersmodel;
