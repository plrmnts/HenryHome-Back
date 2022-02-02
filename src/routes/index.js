const { Router } = require("express");
const user = require('./user.route.js')
const house = require('./house.route.js')
<<<<<<< HEAD
const facilities = require('./facilities.route')

=======
const servicie = require('./servicies.route.js')
>>>>>>> ba7a101f70a6b0e65bacd6acb5aa39dd05c4b33c
const router = Router()


router.use("/user",user)
router.use("/houses",house)
<<<<<<< HEAD
router.use('/facilities',facilities)
=======
router.use("/servicie",servicie)

>>>>>>> ba7a101f70a6b0e65bacd6acb5aa39dd05c4b33c



module.exports = router