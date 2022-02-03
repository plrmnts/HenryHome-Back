const { Facilities } = require('../db')
const { facilitiesArray } = require('../config_db/facilities.array')

const createFacilitie = async (req,res)=>{
    const { name } = req.body
    try{
        if(name){
            const facility = await Facilities.findOrCreate({where:{name: name.toLowerCase()}}) 
            res.status(201).json(facility)
        }else{
            res.status(400).json({mesagge:"Data needed."})
        }
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

const getFacilities = async (req,res)=>{
    try{
        facilitiesArray.forEach(async (f)=>{
            await Facilities.findOrCreate({
                where:{
                    name:f.toLowerCase()
                }
            })    
        })

        const facilities = await Facilities.findAll()
        res.status(200).json(facilities)
    }catch(err){
        res.status(404).json(err)
    }
}

module.exports = {
    createFacilitie,
    getFacilities
}