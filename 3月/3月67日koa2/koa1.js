const Koa = require("koa")
const app = new Koa()

app.use(async (ctx,next) => {
    await next()
    // ctx.response.type = 'text/html'
    // ctx.response.body = '<h1>this is my first koa demo</h1>'
    // // console.log(ctx.res)
    // // console.log(ctx.response)
    // console.log(ctx.req)
    // console.log("~~~~~~")
    // console.log(ctx.query)

    console.log("middleware1")
    // console.log(ctx.request)
})

app.use(async (ctx,next) => {
	await next()
	console.log("middleware2!")
})

app.listen(9300,() => {
    console.log("koa2 is ready")
})


// async function time() {
// 	return new Promise(resolve => {
// 		setTimeout(() => resolve(),5000)
// 	})
// }

// async function haha() {
// 	return new Promise(resolve => {
// 		resolve('data')
// 	})
// }


// time().then(() => console.log(123))
// haha().then((data) => console.log(data)) 