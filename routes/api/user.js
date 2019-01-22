const router = require("express").Router();
const userController = require("../../controllers/usersController");

// router.route('/', (req, res)=> {
//     console.log("Finding details");
//     console.log(req.query);
//     models.User.find(req.query).then(results => {
//     res.send(results)
//     })
// })

router.route('/login')
    .get(userController.find);

router.route('/register')
      .post(userController.create);

    

module.exports = router;