const {Sequelize} = require('sequelize');
const { Op } = require('sequelize');
const Crudrepository = require('./crud-repository');
const{Flight, Airplane ,Airport, City } = require('../models');
const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app.error');
const db = require('../models');

class FlightRepository extends Crudrepository {
    constructor(){
        super(Flight);

    }
    async getAllFlights(filter, sort){
        const response = await Flight.findAll({
            where: filter,
            order: sort,
            include: [
                {
                model: Airplane,
                required: true, /// INNER JOIN
                as: 'airplaneDetail',
                },
                {
                    model: Airport,
                    required: true, /// INNER JOIN,
                    as: 'departureAirport',
                    include: [{
                        model: City,
                        required: true,
                        attributes: ['id', 'name']
                    }],
                    
                   
                on: {
                    col1: Sequelize.where(Sequelize.col('Flight.departureAirportId'), "=", Sequelize.col('departureAirport.code')),
                    
                },
               
                },
                {
                    model: Airport,
                    required: true, /// INNER JOIN,
                    as: 'arrivalAirport',
                    include: [{
                        model: City,
                        required: true,
                        attributes: ['id', 'name']
                    }],
                on: {
                    col1: Sequelize.where(Sequelize.col('Flight.arrivalAirportId'), "=", Sequelize.col('arrivalAirport.code')),
                    
                },
               
                }
                
            ]
        });
        return response;
    }
  async updateRemainingSeats(flightId, seats, dec = true ){
    await db. sequelize.query(`SELECT * from Flights where Flights.id = ${flightId} FOR UPDATE ;` );
    const flight = await Flight.findByPk(flightId);
    if(!flight) {
        throw new AppError('Flight not found', StatusCodes.NOT_FOUND);
    }
    if(parseInt(dec)){
         await flight.decrement('totalSeats', {by: seats});
    }  
    else{
        await flight.increment('totalSeats', {by: seats});
    }  
    
    return flight;
}
}

module.exports = FlightRepository ;