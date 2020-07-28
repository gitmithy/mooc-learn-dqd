const svgCaptcha = require('svg-captcha')
class GetCaptcha {
    constructor() {}
    async demo(ctx) {
        const newCaptca = svgCaptcha.create({})
        console.log(newCaptca)
        ctx.body = {
            code: 200,
            msg: newCaptca.data,
        }
    }
}
module.exports = new GetCaptcha()