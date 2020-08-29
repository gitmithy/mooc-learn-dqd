const Router = require('koa-router')
const loginController = require('../api/loginController')

const router = new Router()
router.post('/forget', loginController.forget)
module.exports = router