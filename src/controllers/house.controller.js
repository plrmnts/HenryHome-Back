const { Housing, Location, Facilities, Servicies } = require("../db");

const getHouses = async (req, res) => {
  try {
    const Houses = await Housing.findAll({
      include: [
        { model: Location },
        { model: Facilities },
        { model: Servicies },
      ],
    });
    res.json(Houses);
  } catch (error) {
    console.log(error);
  }
};

const getHouseById = (req, res) => {
  res.send("getHouseById");
};


const createHouse = async (req, res) => {
  const { name, pricePerNight, numberOfPeople, description, houseRules } =
    req.body;
  try {
    const [house, status] = await Housing.findOrCreate({
      where: {
        name: name.toLowerCase(),
      },
      defaults: {
        pricePerNight,
        numberOfPeople,
        description,
        houseRules,
      },
    });
    

    res.status(201).json(house);
  } catch (error) {
    console.log(error);
  }
};

const updateHouse = async (req, res) => {
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
