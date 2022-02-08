const { Housing, Location, Facilities, Services, UserMod } = require("../db");
const { buscar } = require("../libs/buscar")
const getHouses = async (req, res, next) => {
  try {
    const Houses = await Housing.findAll({
      include: [
        { model: Location },
        { model: Facilities },
        { model: Services },
        { model: UserMod, attributes: ["id", "email"] },
      ],
    });
    res.json(Houses);
    return Houses;
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getHouseById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const Houses = await Housing.findByPk(id, {
      include: [
        { model: Location },
        { model: Facilities },
        { model: Services },
        { model: UserMod },
      ],
    });
    res.json(Houses);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const createHouse = async (req, res, next) => {
  const {
    name,
    pricePerNight,
    numberOfPeople,
    description,
    houseRules,
    images,
    services,
    facilities,
    location,
  } = req.body;
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

    let servicesDB = await Services.findAll({
      where: { name: services },
    });
    let facilitiesDB = await Facilities.findAll({
      where: { name: facilities },
    });

    await house.addServices(servicesDB);
    await house.addFacilities(facilitiesDB);
    await house.setLocation(location);
    await house.setUserMod(req.userId);

    res.status(201).json(house);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateHouse = async (req, res, next) => {
  const {
    name,
    pricePerNight,
    numberOfPeople,
    description,
    houseRules,
    images,
    id,
  } = req.body;
  try {
    console.log("USERIDeste", req.userId);
    console.log("id", id);

    const housecheck = await Housing.findOne({ where: { id: id } });
    console.log(housecheck);
    if (housecheck.userModId === req.userId) {
      console.log("Es el mismo usuario, (no se aplico esta proiedad)");
    }
    await Housing.update(
      {
        name,
        pricePerNight,
        numberOfPeople,
        description,
        houseRules,
        images,
      },
      {
        where: {
          id: id,
        },
      }
    );
    const resp = await Housing.findAll({ where: { id: id } });

    res.status(200).send(resp);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteHouse = async (req, res, next) => {
  const { id } = req.body;
  try {
    const house = await Housing.destroy({
      where: {
        id,
      },
    });
    res.json({ msg: "Successfully deleted" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const AdminChangeHousing = async (req, res, next) => {
  try {
    const { status, id } = req.body;
    const result = await Housing.update(
      { status: status },
      {
        where: {
          id: id,
        },
      }
    );
   
     result >= 1
       ? res.status(201).json({ msg: "Successfully changed" })
       : res.json({ msg: "House not changed" });
    

  } catch (error) {
    console.log(error, "errorr");
    next(error);
  }
};
const filterHouses = async (req, res, next)=>{
  const { minprice, maxprice, numberofpeople, facilities ,services, location } =req.query;
  const Houses = await Housing.findAll({
    include: [
      { model: Location },
      { model: Facilities },
      { model: Services },
      { model: UserMod, attributes: ["id", "email"] },
    ],
  });
  
  try{
    if(minprice && maxprice){
      //El filtro recibe un precio máximo y uno mínimo por query y muestra los resultados que se encuentran dentro de ese rango
      const price = await Houses.filter(e => e.pricePerNight > minprice && e.pricePerNight < maxprice)
      return res.send(price)
    }

    if (numberofpeople) {
      //El filtro recibe por query la cantidad de personas que permite el alojamiento y devuelve los que coinciden con ese número
      const people = await Houses.filter(e => e.numberOfPeople === Number(numberofpeople))
      return res.send(people)
    }

    if (location) {
      //El filtro recibe el id de la locación y me devuelve como número aquellos resultados que coincidan 
      const loc = await Houses.filter(e => e.LocationId === Number(location))
      return res.send(loc)
    }
  
  }catch(error){
    console.log(error,"Error")
  }
} 
module.exports = {
  getHouses,
  getHouseById,
  createHouse,
  updateHouse,
  deleteHouse,
  AdminChangeHousing,
  filterHouses,
};
