// import { connect } from "net";

const redis = require("redis")
const client = redis.createClient('6379', '127.0.0.1')
const bluebird = require("bluebird")
const mongoose = require("mongoose")
const db = mongoose.connect("mongodb://127.0.0.1:27017")
bluebird.promisifyAll(redis.Multi.prototype);
module.exports = { redis , client , db }