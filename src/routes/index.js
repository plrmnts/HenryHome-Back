const { Router } = require("express");
const user = require('./user.route.js')
const house = require('./house.route.js')
const facilities = require('./facilities.route.js')
const servicies = require('./servicies.route.js')

const router = Router()

router.use("/user",user)
router.use("/houses",house)
router.use('/facilities',facilities)
router.use('/services',servicies)


module.exports = router