const { redis , client , db }= require("./config/index.js")
const request = require("request")
const cheerio = require("cheerio")
const classList = []
request("http://jwzx.cqupt.edu.cn/jwzxtmp/pubBjsearch.php?action=bjStu",(err,res,body) => {
    const $ = cheerio.load(body)
    // const classes = $("a").get(100).chil
    $("a").each((index,item) => {
        if(item.children[0].data) {
            const classUrl = "http://jwzx.cqupt.edu.cn/jwzxtmp/showBjStu.php?bj="+item.children[0].data.substring(0,8)
            classList.push({
                "className":item.children[0].data.substring(0,8),
                classUrl 
            })
        }
    })
    client.set('classInfor',JSON.stringify(classList))
    // client.hset([classList],redis.print)
    client.get('classInfor',(err,data) => {
        const classData = JSON.parse(data)
        getImg(classData[0].classUrl)
        console.log(classData[0].classUrl)
    })
})

function getImg(url) {
   request(url,(err,res,body) => {
        const $ = cheerio.load(body)
        $("td img").each((index,item) => {
            console.log(item.attribs.src)
        })
   })        
}