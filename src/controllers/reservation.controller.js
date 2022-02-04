const { Reservations } = require('../db')

const createReservation = async(req,res)=>{
    
    const { id_hotel, id_client, date_start, id_order, date_end, details } = req.body
    // Suponiendo que son los unicos datos que llegan por body
    try{
        if(!id_hotel || !id_client || !date_start || !date_end || details || !id_order){
            return res.json(400).json({msg: "Data needed!"})
        }
        const newReservation = await Reservations.create(req.body)
        res.status(201).json(newReservation)
    }catch(err){
        res.status(500).json(err)
    }


}

module.exports = {
    createReservation
}