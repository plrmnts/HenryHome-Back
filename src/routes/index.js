const { Router } = require("express");
const user = require('./user.route.js')
const post = require('./post.route.js')

const router = Router()


router.use("/user",user)
router.use("/posts",post)



module.exports = router