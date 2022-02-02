const { Servicies } = require("../db");
const create = async (req, res) => {
    const{name}= req.query

    const service = await Servicies.findOrCreate({where:{name: name}})    

    res.status(200).send(service);
  };
  
  const getServ = async (req, res) => {

    const services = await Servicies.findAll()
    res.send(services);
  };
  
  module.exports = { create, getServ };
  ;