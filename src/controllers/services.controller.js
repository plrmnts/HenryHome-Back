const { Services } = require("../db");
const { servicesArray } = require("../config_db/services.array.js");

const createService = async (req, res) => {
  const { name } = req.body;
  try {
    if (name) {
      const service = await Services.findOrCreate({
        where: { name: name.toLowerCase() },
      });
      res.json(service);
    } else {
      res.status(400).json(arr);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
};

const getServices = async (req, res) => {
  try {
    servicesArray.forEach(async (e) => {
      await Services.findOrCreate({
        where: {
          name: e.toLowerCase(),
        },
      });
    });

    const services = await Services.findAll();
    res.json(services);
  } catch (err) {
    res.status(404).json(err);
  }
};

module.exports = { createService, getServices };
