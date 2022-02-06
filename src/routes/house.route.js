const { Router } = require("express");
const {
  getHouses,
  getHouseById,
  createHouse,
  updateHouse,
  deleteHouse,
} = require("../controllers/house.controller.js");
const { veryfyToken, isModerador, isAdmin } = require("../middleware/auth.js");

const router = Router()

router.get("/", getHouses);
router.get("/:id", getHouseById)
router.post("/",veryfyToken,isModerador,createHouse)
router.patch("/", updateHouse)
router.delete("/", deleteHouse)

module.exports = router