const Router = require('koa-router')
const GetCaptcha = require('../api/GetCaptcha')
const router = new Router()
router.get('/GetCaptcha', GetCaptcha.demo)
module.exports = router