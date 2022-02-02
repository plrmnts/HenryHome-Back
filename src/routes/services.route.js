const { Router } = require("express");
const {
  createServ,
  getServ,
} = require("../controllers/services.controller.js");

const router = Router()

router.get("/", getServ);
router.post("/", createServ);



module.exports = router