const router = require('express').Router()
const { createReservation } = require('../controllers/reservation.controller')

router.post('/',createReservation)

module.exports = router