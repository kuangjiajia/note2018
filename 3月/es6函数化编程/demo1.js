// es5

// var array = [1,2,3,4,2,2,1]
// for(var i = 0,len = array.length; i < len; i++) 
// console.log(array[i])

//es6

// const forEach = (arr,fn) => {
//     let i;
//     for(i=0,len=arr.length; i < len ; i++ ) 
//         fn(arr[i])
// }

// forEach(array,console.log)


// 遍历js对象

// const forEach = (obj,fn) => {
//     for(const prop in obj) {
//         if(obj.hasOwnProperty(prop)) 
//             fn(prop,obj[prop])
//             // console.log(prop)
//     }
// }

// const person = {
//     "name": "sad",
//     "age": 20,
//     "asd": 1000
// }

// forEach(person,(prop,value) => {console.log(prop,value)})
// const unLess = (value,fn) => {
//     if(value) fn(value)
// }
// forEach([1,2,3,4,5,6],(val) => {
//     unLess(val % 2,() => {
//         console.log(val)
//     })
// })


// const forEach = (arr,fn) => {
//     for(var i = 0,len = arr.length; i < len; i++) 
//         fn(arr[i])
// }

// const unLess = (val,fn) => {
//     if(val) fn()
// }

// forEach([1,2,3,4,5,6],(val) => unLess(!(val % 2),() => {
//     console.log(val)
// }))

// const every = (arr,fn) => {
//     let bool = true
//     for(let i = 0,len = arr.length; i < len; i++)
//         bool = bool && fn(arr[i])
//     console.log(bool)
//     return bool
// }

// every([4,2],(val) => !(val%2))


// const some = (arr,fn) => {
//     let bool = false
//     for(let i = 0,len = arr.length; i < len; i++)
//         bool = bool || fn(arr[i])
//     console.log(bool)
//     return bool
// }
// some([1,3],(val) => !(val%2))


// const tap = (value) =>
//     (fn) => {
//         typeof fn === 'function' && fn(value)
//         console.log(value) 
//     }


// tap('fun')((it) => console.log('the value is', it))

// const unary = (fn) => {
//     fn.length === 1? fn : (arg) => fn() //fn.length => 参数的长度
// }
// // 函数作用 强制设置参数的个数

// const arr = ['1','2','4','7']
// const newArr = arr.map(val => parseInt(val))
// console.log(newArr)

// const once = (fn) => {
//     let done = false
//     return (value) => {
//         return done ? undefined : ((done = true), fn(value))
//     }
// }

// const isDone = once((value) => {
//     console.log("pay is done!"+ value)
// })

// isDone('kjj')
// console.log(isDone())

const memoized = fn => {
    const lookupTable = {}
    return (arg) => lookupTable[arg] || (lookupTable[arg] = fn(arg,lookupTable))
}
//上面引用了lookupTable 所以lookupTable不会清除掉 ，每次调用一次则记住一次

// (arg) => lookupTable[arg] 检查属性是否在对象中,在的话返回属性的值（否则返回false，执行后面）
// (lookupTable[arg] => fn(arg)) 给lookupTable赋值并返回fn(arg)的值
const getFib = memoized((n,x) => {
    console.log(JSON.stringify(x))
    if(n === 0) return 1
    return n * getFib(n - 1)
}) //

//调用一次getFib存储一次记录


console.log(getFib(5))
console.log(getFib(6))
console.log(getFib(8))