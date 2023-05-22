import {getURLQuery} from './src/String.js'
import {getObjectType} from './src/Object.js'
import {randomNum} from './src/Number.js'


console.log('----------获取浏览器参数--------------')
console.log(getURLQuery('name'))


console.log('----------判断数据类型--------------')
console.log(getObjectType({a:1}))
console.log(getObjectType(undefined))
console.log(getObjectType([1,2]))

console.log('----------生成指定范围随机数--------------')
console.log(randomNum(10,20))