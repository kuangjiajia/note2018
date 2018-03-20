const Koa = require("koa")
const bodyParser = require("koa-bodyparser")
const Router = require("koa-router")

const app = new Koa()
const router = new Router()
app.use(bodyParser())

router.get("/user",async (ctx,next) => {
    ctx.response.type = 'text/html'
    ctx.body = 
    `
        <form method="post" action="/register">
            <input type="text" placeholder="姓名" name="name" />
            <input type="password" palceholder="密码" name="password" />
            <input type="submit" />
        </form>
    `
})
router.post("/register", async (ctx,next) => {
    const {name , password} = ctx.request.body
    console.log(JSON.stringify(ctx.request.body))
    ctx.response.type = 'text/html'
    ctx.response.body = `${JSON.stringify(ctx.request.body)}`   
})


// router.post('/user/register',async(ctx, next)=>{
//     let {name, password} = ctx.request.body
//     if( name === 'ikcamp' && password === '123456' ){
//       ctx.response.body = `Hello， ${name}！`
//     }else{
//       ctx.response.body = '账号信息错误'
//     }
//   })


app.use(router.routes())

app.listen(9300)