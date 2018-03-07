const Router = require("koa-router")
const router = new Router()
const HomeController = require('../controller/home.js')
module.exports = (app) => {
    router.get("/",HomeController.index )
          .get("/home",HomeController.home)
          .get("/user",HomeController.user)
          .post("/register",HomeController.register)
    app.use(router.routes())
       .use(router.allowedMethods()) 
}