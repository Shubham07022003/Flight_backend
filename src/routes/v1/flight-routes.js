const express = require('express');
const{FlightController}= require('../../controllers');
const{FlightMiddlewares} = require('../../middlewares')
const router = express.Router();
// /api/v1/airports POST

router.post('/',
    FlightMiddlewares.validateCreateRequest,
    FlightController.createFlight);
  // /api/v1/airplane GET  
router.get('/',
    FlightController.getAllFlights);
//   // /api/v1/plane/:id get
router.get('/:id',
  FlightController.getFlight);

// /api/v1/flights/seats PATCH
router.patch('/:flightId/seats',
    FlightMiddlewares.validateUpdateSeatsRequest,
    FlightController.updateSeats
)
// router.get('/:id',
//     FlightController.getAirport);

// // /api/v1/airplane/:id DELETE

// router.delete('/:id',
//     FlightController.destroyAirport);

// // /api/v1/airplane : PATCH

// router.patch('/:id',
//     FlightController.updateAirport);


module.exports = router;