const router = require('express').Router()
const { createFacilitie, getFacilities } = require('../controllers/facilities.controller')

router.post('/', createFacilitie )
router.get('/', getFacilities )

module.exports = router