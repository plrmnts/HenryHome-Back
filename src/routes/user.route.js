const {Router} = require('express');
const { login , register,getUserById} = require("../controllers/user.controller.js"); 
const router = Router()


router.get("/:id/:role",getUserById)
router.post("/login", login)
router.post("/register", register)
module.exports = router