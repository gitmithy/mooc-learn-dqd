const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router')
const jsonutil = require('koa-json')
const compose = require('koa-compose');
const koaBody = require('koa-body');
const cors = require('@koa/cors')

/**
 * compose 用于压缩中间件
 */
const middleware = compose([
  koaBody(),
  cors(),
  jsonutil({ pretty: false, param: 'pretty' }),
])

const router = new Router()

// get方法
router.get('/get', async ctx => {
  const body = ctx.query
  ctx.body = {
    data: body,
    msg: `hello ${body.name}!`,
    code: 200
  }
})

// post方法
router.post('/post', async ctx => {
  const { body } = ctx.request
  ctx.body = {
    data: body,
    msg: 'hello world! Your name is ' + body.name,
    code: 200
  }
})

// delete 方法
router.delete('/delete', async ctx => {
  ctx.body = { errmsg: 'ok', errcode: 0 };
})

// put 方法
router.put('/put', async ctx => {
  const { body } = ctx.request
  ctx.body = {
    msg: 'hello world! Your name is ' + body.name,
    code: 200
  }
})

app.use(middleware)
app.use(router.routes());

app.listen(3000)