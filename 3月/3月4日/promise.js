//pending 
//resolve
//reject

// const fetch = require("node-fetch")

// fetch("https://api.github.com").then((res) => {
//     return res.json()
// }).then((json) => {
//     console.log(json)
// }).catch((err) => {
//     console.log(err)
// })


// const fetchPage = () => {
//     console.log('fetchPage')
//     return new Promise((resolve,reject) => {
//         var delay = 20
//         setTimeout(() => {
//             console.log('the task cost' + delay + 'ms')
//             resolve('this is page data') 
//         })
//     }) 
// }

// fetchPage().then((data) => {
//     console.log(data)
// })


//promise异步流程


// function Promise(executor) {
//     if(!(this instanceof Promise)) {
//         throw 'promise is a constructor, you should use new'
//     }
//     if(typeof executor !== 'function') {
//         throw 'promise params should be a function'
//     }
//     this.thenCache = [] //{resolve:,reject:}
//     this.status = 'pending'
//     this.value = null
//     this.rejectReason = null
//     var self = this
//     setTimeout(function() {
//         try{
//             executor.call(self,self.resolve.bind(this),self.reject.bind(this))
//         }catch(e) {
//             self.reject(e)
//         }
//     })
// }

// Promise.prototype = {
//     constructor: Promise,
//     resolve: function(value) {
//         this.value = value
//         this.status = 'resolved'  
//         this.triggerThen() //触发then参数
//     },
//     reject: function(reason) {
//         this.rejectReason = reason
//         this.status = 'rejected'
//         this.triggerThen() //触发then参数
//     },
//     then: function(onFulfilled,onRejected) {
//         this.thenCache.push({onFulfilled: onFulfilled,onRejected: onRejected})
//         return this
//     },
//     triggerThen: function() {
//         var current = this.thenCache.shift()
//         var res = null
//         if(!current) {
//             return this
//         }
//         if(this.status === 'resolved') {
//             res = current.resolve
//         }else if(this.status === 'rejected') {
//             res = current.reject
//         }
//         if(typeof res === 'function'){//规则(1)(2)
//             this.value = res.call(undefined, this.value);//重置promise的value，规则(4)
//             this.status = 'resolved';//规则(6)，只要有处理，则状态为resolved
//             this.triggerThen();//继续执行then链
//         }else{//不是函数则忽略
//             this.triggerThen();//规则(1)(2)
//         }
// }
// }

//待完成


// let p = new Promise((resolve,reject) => {
    // if() {
    //     resolve()
    // }else{
    //     reject()
    // }
// })

// p.then(() => {}).then(() => {})
