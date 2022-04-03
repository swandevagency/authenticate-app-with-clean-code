const webServerFrameWork = require('express')
const makeCallBack = require('../express-callback/index')


const router = webServerFrameWork.Router()

router.get('/',makeCallBack(testFunc))
module.exports = router