const { Servicies } = require("../db");
const create = async (req, res) => {
    const{name}= req.query
try{
    const service = await Servicies.findOrCreate({where:{name: name.toLowerCase()}})    

    res.status(200).send(service);}catch(err){
        console.log(err)
    }
  };
  
  const getServ = async (req, res) => {
    try{
    const services = await Servicies.findAll()
    res.send(services);}catch(err){
        res.status(404).json(err)
    }
  };
  
  module.exports = { create, getServ };
  ;