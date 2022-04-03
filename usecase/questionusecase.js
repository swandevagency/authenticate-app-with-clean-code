const validateNumber = require('./../entieties/validateNumber');
const addnumberToDatabase = require('./../database/functions/user');


module.exports = async({number},{frameworks}) =>{
    
    try {

        const {jwt} = frameworks

        const generatedToken = await jwt.sign()
        
        const {validatedNumber} = validateNumber(number)

        const numberAddedToDatabase =await addnumberToDatabase(validatedNumber);
    
        return getMessage(numberAddedToDatabase)

    } catch (error) {
        throw error
    }

}

module.exports = (number) => {
    if(!number){
        throw new Error('invalid number')
    }
    return Object.freeze ({
        validateNumber: number
    })
}