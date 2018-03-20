const config = require("./config/index.js")
const request = require("request")
const cheerio = require("cheerio")
const classList = []
request("http://jwzx.cqupt.edu.cn/jwzxtmp/pubBjsearch.php?action=bjStu",(err,res,body) => {
    const $ = cheerio.load(body)
    // const classes = $("a").get(100).chil
    $("a").each((index,item) => {
        if(item.children[0].data) classList.push(item.children[0].data.substring(0,8))
    })
    console.log(config)
})