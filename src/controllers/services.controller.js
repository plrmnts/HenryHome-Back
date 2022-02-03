const { Services } = require("../db");
const { servicesArray } = require("../config_db/services.array.js");

const createService = async (req, res) => {
  const { name } = req.body;
  try {
    const arr = [];

    servicesArray.forEach(async (e) => {
      const newServ = await Services.findOrCreate({
        where: {
          name: e.toLowerCase(),
        },
      });
      arr.push(newServ);
    });

    if (name) {
      const service = await Services.findOrCreate({
        where: { name: name.toLowerCase() },
      });

      res.status(201).json(service);
    } else {
      res.status(201).json(arr);
    }
  } catch (err) {
    console.log(err);
  }
};

const getServices = async (req, res) => {
  try {
    const services = await Services.findAll();
    res.json(services);
  } catch (err) {
    res.status(404).json(err);
  }
};

module.exports = { createService, getServices };
