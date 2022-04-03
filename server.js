const express = require('express')
const app = express()
const makeCallBack = require('./express-callback/index')
const test = require('./controllers/test')
const test2 = require('./controllers/test2')
const answerController = require('./controllers/answerController')
const jwt = require("jsonwebtoken")
 



app.use(express.urlencoded({ extended : true}));
app.use(express.json());

app.get('/',makeCallBack(test, {
    jwt
}))
app.post('/',makeCallBack(test2))
app.post('/question',makeCallBack(answerController))


app.listen(5000, ()=>{
    console.log('app is running on port 5000')
})

// export default app