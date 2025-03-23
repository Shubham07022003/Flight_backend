const{StatusCodes}= require('http-status-codes')
const{ErrorResponse} = require('../utils/common');
const AppError = require('../utils/errors/app.error');
function validateCreateRequest(req, res,next){
    if(!req.body.flightNumber){
        ErrorResponse.message= 'something went wrrong creating flight';
       // new AppError(['Model number not found in oncoming request in the correct form'],StatusCodes.BAD_REQUEST )
        ErrorResponse.error=  new AppError([' flightNumber not found in oncoming request in the correct form'],StatusCodes.BAD_REQUEST ) ;
        return res
        .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }

    if(!req.body.airplaneId){
        ErrorResponse.message= 'something went wrrong creating flight';
       // new AppError(['Model number not found in oncoming request in the correct form'],StatusCodes.BAD_REQUEST )
        ErrorResponse.error=  new AppError([' airplaneId not found in oncoming request in the correct form'],StatusCodes.BAD_REQUEST ) ;
        return res
        .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }

    if(!req.body.arrivalAirportId){
        ErrorResponse.message= 'something went wrrong creating flight';
       // new AppError(['Model number not found in oncoming request in the correct form'],StatusCodes.BAD_REQUEST )
        ErrorResponse.error=  new AppError([' arrivalAirportId not found in oncoming request in the correct form'],StatusCodes.BAD_REQUEST ) ;
        return res
        .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }

    if(!req.body.departureAirportId){
        ErrorResponse.message= 'something went wrrong creating flight';
       // new AppError(['Model number not found in oncoming request in the correct form'],StatusCodes.BAD_REQUEST )
        ErrorResponse.error=  new AppError([' departureAirportId not found in oncoming request in the correct form'],StatusCodes.BAD_REQUEST ) ;
        return res
        .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.arrivalTime){
        ErrorResponse.message= 'something went wrrong creating flight';
       // new AppError(['Model number not found in oncoming request in the correct form'],StatusCodes.BAD_REQUEST )
        ErrorResponse.error=  new AppError([' arrivalTime not found in oncoming request in the correct form'],StatusCodes.BAD_REQUEST ) ;
        return res
        .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.departureTime){
        ErrorResponse.message= 'something went wrrong creating flight';
       // new AppError(['Model number not found in oncoming request in the correct form'],StatusCodes.BAD_REQUEST )
        ErrorResponse.error=  new AppError([' departureTime not found in oncoming request in the correct form'],StatusCodes.BAD_REQUEST ) ;
        return res
        .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.totalSeats){
        ErrorResponse.message= 'something went wrrong creating flight';
       // new AppError(['Model number not found in oncoming request in the correct form'],StatusCodes.BAD_REQUEST )
        ErrorResponse.error=  new AppError([' totalSeats not found in oncoming request in the correct form'],StatusCodes.BAD_REQUEST ) ;
        return res
        .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.totalSeats){
        ErrorResponse.message= 'something went wrrong creating flight';
       // new AppError(['Model number not found in oncoming request in the correct form'],StatusCodes.BAD_REQUEST )
        ErrorResponse.error=  new AppError([' totalSeats not found in oncoming request in the correct form'],StatusCodes.BAD_REQUEST ) ;
        return res
        .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}

module.exports= {
    validateCreateRequest
}