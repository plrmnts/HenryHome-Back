const { Reservations } = require('../db')

const createReservation = async(req,res)=>{
    
    const { id_hotel, id_client, date_start, id_order, date_end, detail } = req.body
    // Suponiendo que son los unicos datos que llegan por body
    try{
        if(!id_hotel || !id_client || !date_start || !date_end || !detail || !id_order){
            return res.json(400).json({msg: "Data needed!"})
        }
        const newReservation = await Reservations.create(req.body)
        res.status(201).json(newReservation)
    }catch(err){
        res.status(500).json(err)
    }
}

const updateReservation = async (req,res)=>{
    const { id } = req.body
    try{
        await Reservations.update({
            status:'Resolved'
        },{
            where:{
                id:id
            }
        })
        res.status(200).json({msg:"Reservation updated",})
    }catch(err){
        res.status(500).json(err)
    }
}

module.exports = {
    createReservation,
    updateReservation
}