// 生成指定范围随机数
export const randomNum = (min,max) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min 
}