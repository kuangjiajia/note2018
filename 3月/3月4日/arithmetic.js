
//统计瓶绿最高的字母

// const str = 'asdasrqrewqtewgcxvdasdterewtadsdasfcz'
// const strChar = str => {
//     let string = [...str],maxValue = '',obj = {},max = 0
//     string.map(v => {
//         obj[v] = obj[v] === undefined ? 1 : obj[v] + 1
//         if(obj[v] > max) {
//             max = obj[v]
//             maxValue = v
//         }
//     })
//     return maxValue
// }


// const strChar = str => {
//     let string = [...str],obj = {},maxValue = '',max = 0
//     string.map(v => {
//         obj[v] = obj[v] === undefined ? 1 : obj[v] + 1
//         if(obj[v] > max) {
//             max = obj[v]
//             maxValue = obj[v]
//         }
//     })
//     return maxValue
// }

//数组去重

//map方法
let arr = [1,2,3,1,2,3,4,1,2]

const unique = arr => {
    let obj = {}
    arr.map(v => {
        obj[v] = 0
    })
    return Object.keys(obj)
} 

//filter方法
const arr = [1,22,3,4,1,2,3,5,6,7,4,2]
const unique = arr => {
    // 第一次遇到返回,第二次重复就不满足 不返回
    return arr.filter((item,index,array) => {
        return index === array.indexOf(item)
    })
}

//set方法
const arr = [1,2,3,4,5,1,2,3,4,1,2,3]
const unique = arr => {
    return [...new Set(arr)]
}

//反转字符串
const str = 'hello paddy'
const reverString = (str) => {
    return [...str].reverse().split("")
}

//取数组中最大的差值

const arr = [1,2,3,4,1,2,3,41,2,312,1]
const difference = arr => {
    let min = arr[0],max = 0;
    arr.map(v => {
        if(v < min) min = v
        if(v > max) max = v
    })
    return max - min
}
