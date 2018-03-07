const Koa = require("koa")
const app = new Koa()
const Router = require("koa-router")
const router = new Router()

router.get("/",async (ctx,next) =>{
    ctx.response.type = 'text/html'
    ctx.response.body = `<h1>the request url is ${ctx.url}</h1>`
}).get("/404",async (ctx,next) => {
    ctx.response.type = 'text/html'
    ctx.response.body = `<h1>the request url is ${ctx.url}</h1>`  
}).get("/home",async (ctx,next) => {
    ctx.response.type = 'text/html'
    ctx.response.body = `${JSON.stringify(ctx.request.query)}</h1>`  
}).get('/index/:id/:name', async(ctx, next)=>{
    console.log(ctx.params)
    ctx.response.body = `${JSON.stringify(ctx.params)}`
})

app.use(router.routes())

// app.use(async (ctx,next) => {
//     let sTime = new Date().getTime()
//     await next()
//     let eTime = new Date().getTime()
//     ctx.response.type = 'text/html'
//     ctx.response.body = '<h1> this is body</h1>'
//     console.log(`请求地址${ctx.url},响应时间${eTime - sTime}`)
// })

// app.use(async (ctx,next) => {
//     console.log("中间件1")
//     await next() 
//     console.log("中间件1结束")
// })


// app.use(async (ctx,next) => {
//     console.log("中间件2")
//     await next() 
//     console.log("中间件2结束")
// })

// app.use(async (ctx,next) => {
//     console.log("中间件3")
//     await next() 
//     console.log("中间件3结束")
// })

app.listen(9300,() => {
    console.log("server启动成功")
})
