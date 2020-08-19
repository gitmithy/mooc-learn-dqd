const svgCaptcha = require('svg-captcha')
class GetCaptcha {
    constructor() {}
    async demo(ctx) {
        const newCaptca = svgCaptcha.create({
            size: 5,
            ignoreChars: '0o1il',
            color: true,
            noise: Math.floor(Math.random() * 5),
            width: 150,
            // height: 50
        })
        console.log(newCaptca)
        ctx.body = {
            code: 200,
            msg: newCaptca.data,
        }
    }
}
module.exports = new GetCaptcha()