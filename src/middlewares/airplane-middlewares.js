const{StatusCodes}= require('http-status-codes')
const{ErrorResponse} = require('../utils/common');
const AppError = require('../utils/errors/app.error');
function validateCreateRequest(req, res,next){
    if(!req.body.modelNumber){
        ErrorResponse.message= 'something went wrrong creating airplane';
       // new AppError(['Model number not found in oncoming request in the correct form'],StatusCodes.BAD_REQUEST )
        ErrorResponse.error=  new AppError(['Model number not found in oncoming request in the correct form'],StatusCodes.BAD_REQUEST ) ;
        return res
        .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}

module.exports= {
    validateCreateRequest
}