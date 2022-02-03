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
  const { name, pricePerNight, numberOfPeople, description, houseRules, images } =
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
        images,
      },
    });
    

    res.status(201).json(house);
  } catch (error) {
    console.log(error);
  }
};

const updateHouse = async (req, res) => {
  const { name, pricePerNight, numberOfPeople, description, houseRules, images, id, status } = req.body
  try{
    if(status){
     await Housing.update({status: status }, {
        where: {
          id: id
        }
      });
    }
    await Housing.update({
      name,
      pricePerNight,
      numberOfPeople,
      description,
      houseRules,
      images,
    
    }, {
      where: {
        id: id
      }
    });
    const resp = await Housing.findAll({where:{id:id}})
    
    res.status(200).send(resp);
  } catch(error){console.log(error)}

  
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
