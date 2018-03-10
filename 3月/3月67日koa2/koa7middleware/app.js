const Koa = require("koa")
const app = new Koa()
const middleware = require("./middleware/index.js")
const router = require("./router/router.js")

 

middleware(app)
router(app)



app.listen(9300,async (ctx,next) => {
    console.log("server is success")
}) 