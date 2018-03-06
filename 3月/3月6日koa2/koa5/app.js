const Koa = require("koa")
const app = new Koa()
const render = require("koa-ejs")
const bodyParser = require("koa-bodyparser")
// const router = require('./router.js')
// const router = require("./router/router.js")

const path = require("path")

app.use(bodyParser())
render({
    root: path.join(__dirname,'template'),
    viewExt: 'html',
    cache: false,
    debug: true
})
// router(app)

app.listen(9300,async (ctx,next) => {
    console.log("server is success")
})