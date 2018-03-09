module.exports = () => {
    function send(json) {
        this.response.type = "application/json"
        this.response.body = JSON.stringify(json)
    }
    return async (ctx,next) => {
        ctx.sendJson = send.bind(ctx)
        await next()
    }
}

