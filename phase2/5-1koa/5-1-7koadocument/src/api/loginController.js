const send = require("../config/MailConfig");
const moment = require("moment");
class LoginController {
  constructor() {}
  async forget(ctx) {
    const {
      body
    } = ctx.request;
    console.log(body)
    try {
      //   一般先查询用户是否注册;
      // body.username->database->email
      let result = await send({
        code: "1234",
        expire: moment().add(30, "minutes").format("YYYY-MM-DD HH:mm:ss"),
        email: body.username,
        user: "berrysmithy",
      });
      ctx.body = {
        code: 200,
        data: result,
        msg: "邮件发送成功",
      };
    } catch (e) {
      console.log(e);
    }
  }
}
module.exports = new LoginController()
// export default new LoginController();