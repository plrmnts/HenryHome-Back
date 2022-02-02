const { Servicies } = require("../db");
const createServ = async (req, res) => {
    const{name}= req.body
try{
    const service = await Servicies.findOrCreate({where:{name: name.toLowerCase()}})    

    res.status(201).json(service);}catch(err){
        console.log(err)
    }
  };
  
  const getServ = async (req, res) => {
    try{
    const services = await Servicies.findAll()
    res.json(services);}catch(err){
        res.status(404).json(err)
    }
  };
  
  module.exports = { createServ, getServ };
  ;