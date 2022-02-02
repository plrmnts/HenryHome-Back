const getHouses = (req, res) => {
  res.send("getHouses");
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

module.exports = { getHouses, getHouseById, createHouse, updateHouse, deleteHouse };
