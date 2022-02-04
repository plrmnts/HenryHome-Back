const router = require('express').Router()
const { createReservation } = require('../controllers/reservation')

router.post('/',createReservation)

module.exports = router