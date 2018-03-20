const redis = require("redis")
const client = redis.createClient('6379', '127.0.0.1')
const bluebird = require("bluebird")

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
module.exports = { redis , client }