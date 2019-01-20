const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// app.get('/login', (req, res)=> {
//     console.log("Finding details");
//     console.log(req.query);
//     models.User.find(req.query).then(results => {
//     res.send(results)
//     })
// });

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;