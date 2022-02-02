const { Router } = require("express");
const user = require('./user.route.js')
const house = require('./house.route.js')
const facilities = require('./facilities.route')

const router = Router()


router.use("/user",user)
router.use("/houses",house)
router.use('/facilities',facilities)



module.exports = router