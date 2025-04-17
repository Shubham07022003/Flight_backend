const { FlightRepository } = require('../repositores');
const{FlightService} = require ('../services');
//const{StatusCodes}= require('http-status-codes');

const{ErrorResponse, SuccessResponse}= require('../utils/common');
const { StatusCodes } = require('http-status-codes');

//POST: /flights
async function createFlight (req ,res){
    try {
        //console.log(req.body);
        const flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            price : req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats
            
           
        }
    );
        SuccessResponse.data = flight;
        return res.json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res
        .status(error.statusCode)
         .json(ErrorResponse);

    }
}

async function getAllFlights (req,res){
    try {
        const flights = await FlightService.getAllFlights(req.query);
        SuccessResponse.data = flights;
        return res.json(SuccessResponse);


    } catch (error) {
        ErrorResponse.error = error;
        return res
        .status(error.statusCode)
         .json(ErrorResponse);

    }
}
//get: /flight/:id
async function getFlight (req,res){
    try {
        //console.log(req.body);
        const flight = await FlightService.getFlight(req.params.id);
        SuccessResponse.data = flight;
        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse)
        

       
        
    } catch (error) {
        ErrorResponse.error = error;
        return res
        .status(error.statusCode)
         .json(ErrorResponse);

    }
}
async function updateSeats (req,res){
    try {
        console.log(req.body);
        const response = await FlightService.updateSeats({
            flightId: req.params.flightId ,
            seats: req.body.seats,
            dec: req.body.dec 
        });
        SuccessResponse.data = response;
        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse)
        

       
        
    } catch (error) {
        ErrorResponse.error = error;
        return res
        .status(error.statusCode)
         .json(ErrorResponse);

    }
}
// async function destroyAirplane (req,res){

module.exports ={
    createFlight,
    getAllFlights,
    getFlight,
    updateSeats
    // destroyAirplane,
    // updateAirplane
}