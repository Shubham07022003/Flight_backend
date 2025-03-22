const{StatusCodes}= require('http-status-codes')
const{ErrorResponse} = require('../utils/common');
const AppError = require('../utils/errors/app.error');
function validateCreateRequest(req, res,next){
    if(!req.body.name){
        ErrorResponse.message= 'something went wrrong creating airport';
       // new AppError(['Model number not found in oncoming request in the correct form'],StatusCodes.BAD_REQUEST )
        ErrorResponse.error=  new AppError([' name not found in oncoming request in the correct form'],StatusCodes.BAD_REQUEST ) ;
        return res
        .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }

    if(!req.body.code){
        ErrorResponse.message= 'something went wrrong creating airport';
       // new AppError(['Model number not found in oncoming request in the correct form'],StatusCodes.BAD_REQUEST )
        ErrorResponse.error=  new AppError([' code not found in oncoming request in the correct form'],StatusCodes.BAD_REQUEST ) ;
        return res
        .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }

    if(!req.body.cityId){
        ErrorResponse.message= 'something went wrrong creating airport';
       // new AppError(['Model number not found in oncoming request in the correct form'],StatusCodes.BAD_REQUEST )
        ErrorResponse.error=  new AppError([' cityID not found in oncoming request in the correct form'],StatusCodes.BAD_REQUEST ) ;
        return res
        .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}

module.exports= {
    validateCreateRequest
}