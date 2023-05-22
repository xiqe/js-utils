// 判断数据类型
export const getObjectType = (obj) =>{
    return Object.prototype.toString.call(obj).match(/\[object (.*?)\]/)[1].toLowerCase(); 
}

// 返回顶部
export const scrollToTop = () => {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    if (top > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, top - top / 8);
    }
}
