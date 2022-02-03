const { Servicies } = require("../db");
const {servicesArray} = require ("../config_db/services.array.js")


const createServ = async (req, res) => {

    const{name}= req.body
try{

    const arr = []
   
        servicesArray.forEach(async (e)=>{
            
            const newServ = await Servicies.findOrCreate({
                where:{
                    name:e.toLowerCase()
                }
            })    
            arr.push(newServ)
        })

    if(name){
    const service = await Servicies.findOrCreate({where:{name: name.toLowerCase()}})    

    res.status(201).json(service);}else{
        res.status(201).json(arr)
    }

}catch(err){
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