const { StatusCodes } = require('http-status-codes');
const {AirplaneRepository} = require('../repositores');
const AppError = require('../utils/errors/app.error');
const airplaneRepository = new AirplaneRepository();
 async function createAirplane(data){
    try{
        const airplane = await airplaneRepository.create(data);
        return airplane ;

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
        throw new AppError('cannot create a new Airplane object', StatusCodes.INTERNAL_SERVER_ERROR)

    }
}
async function getAirplanes(){
    try {
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError('cannot fetch data of all the airplanes' , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function getAirplane(id){
    try {
        const airplanes = await airplaneRepository.get(id);
        return airplanes;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND ){
            throw new AppError('the airplane you request is not present',error.statusCode)
        }
        throw new AppError('cannot fetch data of all the airplanes' , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function destroyAirplane(id){
    try {
        const response = await airplaneRepository.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND ){
            throw new AppError('the airplane you request to delete is not present',error.statusCode)
        }
        throw new AppError('cannot fetch data of all the airplanes' , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirplane( data,id){
    try{
        const airplane = await airplaneRepository.update(data, id);
        return airplane ;

    }catch(error){
         console.log (error)
        // if(error.name == 'SequelizeValidationError' ){
        //     let explanation =[];
        //     error.errors.forEach((err) => {
        //         explanation.push(err.message);
        //     });
        //     console.log(explanation);
        //     throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        // }
        //throw error;
        throw new AppError('cannot   update Airplane object', StatusCodes.NOT_FOUND)
        //console.log(error)
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane 
}