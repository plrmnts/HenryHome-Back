const router = require('express').Router()
const { createReservation , updateReservation } = require('../controllers/reservation.controller')

router.post('/',createReservation)
router.put('/',updateReservation)

module.exports = router