const { Reservations } = require('../db')

const createReservation = async(req,res)=>{
    
    //const { id_hotel, id_client, date_start, date_end, details } = req.body
    // Suponiendo que son los unicos datos que llegan por body
    const newReservation = await Reservations.create(req.body)

}

module.exports = {
    createReservation
}