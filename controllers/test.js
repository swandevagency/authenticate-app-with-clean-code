// const makeBuildUser = require('../users/user')
const usecase = require("someusecase")

module.exports = async function testFunc(httpRequest, frameworks){
    try {
        const {
            firstaname,
            lastname
        } = httpRequest.body;
        const token = httpRequest.headers.authrorization
    
        // call usecase
        const adminCreated = await usecase(
            {
                firstaname,
                lastname,
                token
            },
            frameworks
        )
        
        return {
            statusCode: 200,
            body: {
                name: adminCreated.name
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