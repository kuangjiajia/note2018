const Router = require("koa-router")
const router = new Router()
const HomeController = require('../controller/home.js')
module.exports = (app) => {
    router.get("/",HomeController.index )
          .get("/home",HomeController.home)
          .get("/user",HomeController.user)
          .post("/register",HomeController.register)
          .get("/sendJson",async (ctx,next) => {
             ctx.sendJson({
                "name": "kjj",
                "age": "20"
             })
          }).get("/demo",HomeController.demo)


    app.use(router.routes())
       .use(router.allowedMethods()) 
}