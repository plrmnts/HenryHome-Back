const { Router } = require("express");
const user = require('./user.route.js')
const house = require('./house.route.js')
const servicie = require('./servicies.route.js')
const router = Router()


router.use("/user",user)
router.use("/houses",house)
router.use("/servicie",servicie)




module.exports = router