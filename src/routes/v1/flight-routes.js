const express = require('express');
const{FlightController}= require('../../controllers');
const{FlightMiddlewares} = require('../../middlewares')
const router = express.Router();
// /api/v1/airports POST

router.post('/',
    FlightMiddlewares.validateCreateRequest,
    FlightController.createFlight);
  // /api/v1/airplane GET  
// router.get('/',
//     FlightController.getAirports);
//   // /api/v1/airplane/:id get

// router.get('/:id',
//     FlightController.getAirport);

// // /api/v1/airplane/:id DELETE

// router.delete('/:id',
//     FlightController.destroyAirport);

// // /api/v1/airplane : PATCH

// router.patch('/:id',
//     FlightController.updateAirport);


module.exports = router;