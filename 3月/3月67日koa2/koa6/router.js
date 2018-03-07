const Router = require("koa-router")
const router = new Router()

module.exports = (app) => {
    router.get("/",async (ctx,next) => {
        ctx.response.body = '<h1>index page</h1>'
    }).get("/home",async (ctx,next) => {
        ctx.response.body = `${JSON.stringify(ctx.request.query)}`
    }).get("/user",async (ctx,next) => {
        ctx.response.type = 'text/html'
        ctx.body = 
        `
            <form method="post" action="/register">
                <input type="text" placeholder="姓名" name="name" />
                <input type="password" palceholder="密码" name="password" />
                <input type="submit" />
            </form>
        `
    }).post("/register", async (ctx,next) => {
        const {name , password} = ctx.request.body
        console.log(JSON.stringify(ctx.request.body))
        ctx.response.type = 'text/html'
        ctx.response.body = `${JSON.stringify(ctx.request.body)}`   
    })
    app.use(router.routes())
      .use(router.allowedMethods())
}