import {getURLQuery} from './src/String.js'
import {
    getObjectType,
    getTreeNodePath,
    getTreeAllLeaf,
    appendNodeInTree,
    removeNodeInTree,
    updateNodeInTree
} from './src/Object.js'
import {randomNum} from './src/Number.js'


console.log('----------获取浏览器参数--------------')
console.log(getURLQuery('name'))


console.log('----------判断数据类型--------------')
console.log(getObjectType({a:1}))
console.log(getObjectType(undefined))
console.log(getObjectType([1,2]))

console.log('----------生成指定范围随机数--------------')
console.log(randomNum(10,20))


let arr = [
    {
    id:1,
    name:'汽车',
    children:[
      {
       children:[
                {
                    id:13,
                    name:'鲜花',
                }
         ],
         id:12,
         name:'水果',
      },
    {
       id:14,
       name:'牛奶',
     },
    ]
  }
]

console.log('----------Tree 操作--------------')
console.log(getTreeNodePath(12,arr))
console.log(getTreeAllLeaf(arr))
appendNodeInTree(arr,12,{id:15,name:'香蕉'});
removeNodeInTree(arr,13);
console.log(arr)
updateNodeInTree(arr,15,{id:15,name:'水蜜桃'})
console.log(arr)