const db = require("../models");

// Defining methods for the booksController
module.exports = {
  find: function(req, res) {
    console.log("**********************")
    db.User
      .find(req.query)
      .then(results =>{
        res.send(results)
      })
  },
  create: function(req, res){
    console.log("in create user")
    console.log(req.body);
    db.User
      .create(req.body)
      .then(results => {
        res.send(results)
      })
  }
};
