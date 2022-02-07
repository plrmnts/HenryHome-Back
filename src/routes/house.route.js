const { Router } = require("express");
const {
  getHouses,
  getHouseById,
  createHouse,
  updateHouse,
  deleteHouse,
  AdminChangeHousing,
  filterHouses,
} = require("../controllers/house.controller.js");
const { veryfyToken, isModerador, isAdmin } = require("../middleware/auth.js");

const router = Router()

router.get("/filt",filterHouses)
router.get("/", getHouses);
router.get("/:id", getHouseById)
router.post("/",veryfyToken,isModerador,createHouse)
router.patch("/",veryfyToken,isModerador, updateHouse)
router.patch("/status",AdminChangeHousing)
router.delete("/", deleteHouse)

module.exports = router