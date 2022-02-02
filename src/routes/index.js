const { Router } = require("express");
const user = require('./user.route.js')
const house = require('./house.route.js')

const router = Router()


router.use("/user",user)
router.use("/houses",house)



module.exports = router