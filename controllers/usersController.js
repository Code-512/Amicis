const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.user
      .find(req.query)
      .then(results =>{
        res.send(results)
      })
  }
};
