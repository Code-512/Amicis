const router = require("express").Router();
const userController = require("../../controllers/usersController");

// router.route('/', (req, res)=> {
//     console.log("Finding details");
//     console.log(req.query);
//     models.User.find(req.query).then(results => {
//     res.send(results)
//     })
// })

router.route('/')
    .get(userController.findAll);
    

module.exports = router;