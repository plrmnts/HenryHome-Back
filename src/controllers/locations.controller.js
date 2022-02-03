const { Location } = require("../db");
const { locationsArray } = require("../config_db/locations.array");


const getLocations = async (req, res) => {
  try {
      
    locationsArray.forEach(async (f) => {
       await Location.findOrCreate({
        where: {
          name: f,
        },
      });
    });

    const locations = await Location.findAll()
    res.json(locations);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getLocations };
