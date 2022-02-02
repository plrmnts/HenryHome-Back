const { Facilities } = require('../db')

const createFacilitie = async (req,res)=>{
    const { name } = req.body
    try{
        const newFacilitie =  await Facilities.findOrCreate({
            where:{
                name:name.toLowerCase()
            }
        })
        res.status(200).json(newFacilitie)
    }catch(err){
        console.log(err)
    }
}

const getFacilities = async (req,res)=>{
    try{
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