const combineRoutes = require('koa-combine-routers')
const aroutes = require('./aRouter')
const broutes = require('./bRouter')
const GetCaptcha = require('./CaptchaRouter')
module.exports = combineRoutes(
    aroutes,
    broutes,
    GetCaptcha
)