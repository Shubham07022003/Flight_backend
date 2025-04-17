const { StatusCodes } = require('http-status-codes');
const {FlightRepository} = require('../repositores');
const AppError = require('../utils/errors/app.error');
const {Op} = require('sequelize');
const flightRepository = new FlightRepository();
 async function createFlight(data){
    try{
        const flight = await flightRepository.create(data);
        return flight ;

    }catch(error){
        console.log (error)
        if(error.name == 'SequelizeValidationError' ){
            let explanation =[];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            console.log(explanation);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        }
        //throw error;
        throw new AppError('cannot create a new flight object', StatusCodes.INTERNAL_SERVER_ERROR)

    }
}

async function getAllFlights(query){
    let customFilter = {};
    let sortFilter = [];
    const endingTripTime = " 23:59:00";
    //trip= 'MUM-DEL'
    if(query.trips){

        [departureAirportId, arrivalAirportId]= query.trips.split("-");
        if(departureAirportId === arrivalAirportId) {
            throw new AppError('Departure and Arrival airports cannot be same', StatusCodes.BAD_REQUEST);
        }
        customFilter. departureAirportId =  departureAirportId;
        customFilter.arrivalAirportId = arrivalAirportId;
        //todo :add a check that they are not same

    }
    if(query.price){
        [minPrice, maxPrice] = query.price.split("-");
        customFilter.price ={
            [Op.between]:[minPrice, (maxPrice==undefined)? 20000 : maxPrice]
        }
    }
    if(query.travellers){
        customFilter.totalSeats = {
            [Op.gte]: query.travellers
        }
    }
    // complete and test tripdate filter
    if(query.tripDate){
        customFilter.departureTime = {
            [Op.gte]:[query.tripDate, query.tripDate + endingTripTime]
        }
    }
    if(query.sort){
        const param = query.sort.split(",");
        const sortFilters = param.map(param => param.split("_"));
        sortFilter = sortFilters ;
    }   
    try {
        const flights = await flightRepository.getAllFlights(customFilter, sortFilter);
        return flights;
    } catch (error) {
        console.log(error);
        throw new AppError('can not fetch data of all the flight object', StatusCodes.INTERNAL_SERVER_ERROR)

    }
}
 async function getFlight(id){
    try {
        const flight = await flightRepository.get(id);
        return flight;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND ){
            throw new AppError('the flight you request is not present',error.statusCode)
        }
        throw new AppError('cannot fetch data of all the flight' , StatusCodes.INTERNAL_SERVER_ERROR);
    }
 }
 async function updateSeats(data){
    try {
        const response = await flightRepository.updateRemainingSeats(data.flightId, data.seats, data.dec);
        return response;
    } catch (error) {
        console.log(error);
        throw new AppError('cannot update the flight object', StatusCodes.INTERNAL_SERVER_ERROR);
        
    }
 }

module.exports ={
    createFlight,
    getAllFlights,
    getFlight,
    updateSeats
}


