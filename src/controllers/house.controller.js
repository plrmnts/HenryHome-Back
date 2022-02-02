const { Housing, Location, Facilities, Servicies } = require("../db");

const getHouses = async (req, res) => {
  try {
    const { data } = await Housing.findAll({
      include: [
        { model: Location },
        { model: Facilities },
        { model: Servicies },
      ],
    });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

const getHouseById = (req, res) => {
  res.send("getHouseById");
};

const createHouse = (req, res) => {
  res.send("createHouse");
};

const updateHouse = (req, res) => {
  res.send("updateHouse");
};

const deleteHouse = (req, res) => {
  res.send("deleteHouse");
};

module.exports = {
  getHouses,
  getHouseById,
  createHouse,
  updateHouse,
  deleteHouse,
};
