export default function makeBuildUser ({validEmail,uniqueUsername}){
    return function buildUser({
        username,
        email,
        password
    } ={}){
        if(!username){
            throw new Error('username must be provided')
        }
        if(username.length < 3){
            throw new Error('username at least must have 3 charecters')
        }
        if(!uniqueUsername(username)){
            throw new Error('username must be unique, this username has been taken')
        }
        if(!password){
            throw new Error('password must be provided')
        }
        if(password.length){
            throw new Error('password at least must have 3 charecters')
        }
        if(!email){
            throw new Error('email must be provided')
        }
        if(!validEmail(email)){
            throw new Error('please provide a valid email address')
        }
        return Object.freeze({
            username,
            password,
            email
        })
    }
}