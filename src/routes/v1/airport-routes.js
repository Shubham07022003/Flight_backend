const express = require('express');
const{AirportController}= require('../../controllers');
const{AirportMiddlewares} = require('../../middlewares')
const router = express.Router();
// /api/v1/airports POST

router.post('/',
    AirportMiddlewares.validateCreateRequest,
    AirportController.createAirport);
  // /api/v1/airplane GET  
router.get('/',
  AirportController.getAirports);
  // /api/v1/airplane/:id get

router.get('/:id',
  AirportController.getAirport);

// /api/v1/airplane/:id DELETE

router.delete('/:id',
  AirportController.destroyAirport);

// /api/v1/airplane : PATCH

router.patch('/:id',
  AirportController.updateAirport);


module.exports = router;