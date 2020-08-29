// require为node支持的引用写法
// 配置好webpack后可以写成import koa from 'koa'
// 此后可以使用babel - node运行index.js
const koa = require("koa");
const path = require("path");

const cors = require("koa2-cors");
const helmet = require("koa-helmet");
const router = require("./routes/routes");
const statics = require("koa-static");
const koaBody = require("koa-body");
const jsonutil = require("koa-json");
const compose = require("koa-compose");
const compress = require("koa-compress");
const app = new koa();
const isDevMode = process.env.NODE_ENV === "production" ? false : true;
const middleware = compose([
  koaBody(),
  statics(path.join(__dirname, "../public")),
  cors(),
  jsonutil({
    pretty: false,
    param: "pretty",
  }),
  helmet(),
]);
if (!isDevMode) {
  app.use(compress());
}
app.use(middleware);
app.use(router());
app.listen(3001);