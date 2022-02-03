const { Router } = require("express");
const {
  getServices,
  createService,
} = require("../controllers/services.controller.js");

const router = Router()

router.get("/", getServices);
router.post("/", createService);



module.exports = router