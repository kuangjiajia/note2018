const Koa = require("koa")
const app = new Koa()
// const render = require("koa-ejs")
const views = require('koa-views')
const bodyParser = require("koa-bodyparser")
// const router = require('./router.js')
const router = require("./router/router.js")
const staticFiles = require("koa-static") //引入static
const path = require("path")


app.use(staticFiles(path.resolve(__dirname, "./public"))) //设置静态文件地址
app.use(bodyParser())
app.use(views(__dirname + '/template', {
    extension: 'ejs' 
}));

app.use(async function (ctx, next) {
    ctx.state = {
        title: 'app',
        user: "kuangjiajia"
    };
    //ctx.state传给下面
    await ctx.render('zhonglin', {
        // user: 'John'
    });
});

// render(app)

app.use(async function (ctx) {
    await ctx.render('user');
});

router(app)

app.listen(9300,async (ctx,next) => {
    console.log("server is success")
})