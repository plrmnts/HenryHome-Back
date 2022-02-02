const { Router } = require("express");
const {
  create,
  getServ,
} = require("../controllers/servicies.controller.js");

const router = Router()

router.get("/", getServ);
router.post("/", create);



module.exports = router