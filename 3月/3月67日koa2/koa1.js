const Koa = require("koa")
const app = new Koa()

app.use(async (ctx,next) => {
    await next()
    ctx.response.type = 'text/html'
    ctx.response.body = '<h1>this is my first koa demo</h1>'
})

app.listen(9300,() => {
    console.log("koa2 is ready")
})