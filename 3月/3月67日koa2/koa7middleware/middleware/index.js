const views = require('koa-views')
const bodyParser = require("koa-bodyparser")
const staticFiles = require("koa-static") //引入static
const path = require("path")
const sendJson = require("./sendJson/index.js")
const loggers = require("./logger/index.js")
const viewsPath = path.resolve(__dirname , '../template')

module.exports = (app) => {
    app.use(loggers())
    app.use(staticFiles(path.resolve(__dirname, "../public"))) //设置静态文件地址
    app.use(bodyParser())
    app.use(sendJson())
    app.use(views(viewsPath, {
        extension: 'ejs' 
    }));

    app.use(async function (ctx, next) {
        ctx.state = {
            title: 'app',
            user: "kuangjiajia11"
        };
        await ctx.render('zhonglin', {
            // user: 'John'
        });

        await next()

    });
}