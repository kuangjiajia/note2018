module.exports = {
    index: async (ctx,next) => {
        // ctx.response.body = 'this is index'
        ctx.state = {
            title: "kjj"
        }
        ctx.response.body = `${JSON.stringify({name: "kjj"})}`
    },
    home: async(ctx,next) => {
        ctx.response.body = `${JSON.stringify(ctx.request.query)}`
    },
    user: async (ctx,next) => {
        ctx.response.type = 'text/html'
        ctx.response.body = 
        `
            <form method="post" action="/register">
                <input type="text" placeholder="姓名" name="name" />
                <input type="password" palceholder="密码" name="password" />
                <input type="submit" />
            </form>
        `
    },
    register: async (ctx,next) => {
        const {name , password} = ctx.request.body
        console.log(JSON.stringify(ctx.request.body))
        ctx.response.type = 'text/html'
        ctx.response.body = `${JSON.stringify(ctx.request.body)}`   
    },
    demo: async (ctx,next) => {
        ctx.response.data = "mdzz"
    }
}