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

const getHouseById = async (req, res) => {
  const {id} = req.params
  try {
    const Houses = await Housing.findByPk(id,{
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

const deleteHouse = async (req, res) => {
  const {id} = req.body
  try {
    const house = await Housing.destroy({
      where: {
        id
      }
    })
    res.json({ msg: "Successfully deleted" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getHouses,
  getHouseById,
  createHouse,
  updateHouse,
  deleteHouse,
};
