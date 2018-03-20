const redis = require("redis")
const client = redis.createClient()


client.on("error",(err) => {
    console.log("error" + err)
})

client.set("kuangjiajia","kuangjiajia",redis.print)
client.hset("llp","hash1","some value",redis.print)
client.hkeys("hash key", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    client.quit();
});