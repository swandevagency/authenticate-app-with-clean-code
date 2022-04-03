const questionUsecase = require('../usecase/questionusecase')

module.exports = async function(httpRequest,frameworks){
    try {
        const number = httpRequest.body.number
        
        const {msg} = await answerUsecase({number},{frameworks})
        
        return {
            statusCode: 200,
            body: {
                msg
            },
            headers: {
                "Content-type": "application/json"
            }
        }
    } catch (error) {
        return {
            statusCode: 400,
            body: {
                err: error.message
            },
            headers: {
                "Content-type": "application/json"
            }
        }
    }
}