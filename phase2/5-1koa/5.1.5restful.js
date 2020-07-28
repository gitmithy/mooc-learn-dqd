const Koa = require('koa')
const Router = require('koa-router')
const cors=require('@koa/cors')
const koaBody=require('koa-body')
const app = new Koa();
const router = new Router();
const json=require('koa-json')

// 路由路径前缀设置，之后访问的路由均需要加  /api/xxxx
router.prefix('/api')






router.get('/', ctx => {
    console.log(ctx);
    console.log(ctx.request);
    ctx.body = 'hello world'
})
router.get('/api', ctx => {
    // 获取GET请求中的params
    const params=ctx.request.query
    // console.log(params);
    console.log(params.name,params.age)
    ctx.body={
        name:params.name,
        age:params.age
    }
    // console.log(ctx);
    // console.log(ctx.request);
    // ctx.body = 'hello api'
})
router.get('/async', async(ctx) => {
    let result=await new Promise((resolve)=>{
        setTimeout(function(){
            resolve('hello world 2s later')
        },2000)
    })
    ctx.body=result
})
router.post('/post',async(ctx)=>{
    let {body}=ctx.request
    console.log(body)
    console.log(ctx.request)
    ctx.body={
        ...body
    }
})
app.use(koaBody())
app.use(cors())

// 使用json格式化
app.use(json({pretty:false,param:'pretty'})) 


app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)