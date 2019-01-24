var mongoose = require("mongoose");
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true}
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", userSchema);

module.exports = User;